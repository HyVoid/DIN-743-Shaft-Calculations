import { Material, CalculatorInput, CalculationResult } from '../types';

export function calculateDIN743(input: CalculatorInput, material: Material): CalculationResult {
  const {
    diameter_d,
    stepDiameter_D,
    radius_r,
    moment_Mb,
    torque_T,
    serviceFactor_KA,
    requiredSafety_Smin,
    roughness_Rz,
    sectionType
  } = input;

  const d = Math.max(1.0, diameter_d);
  const D = Math.max(d + 0.1, stepDiameter_D);
  const r = Math.max(0.1, radius_r);
  const Rm = material.Rm;
  const Re = material.Re;

  // 1. Calculate Section Modulus for Shaft
  // W_b = pi * d^3 / 32
  const W_b = (Math.PI * Math.pow(d, 3)) / 32;
  // W_t = pi * d^3 / 16
  const W_t = (Math.PI * Math.pow(d, 3)) / 16;

  // 2. Calculate Nominal Stress with Service Factor KA
  const stress_b = (moment_Mb * serviceFactor_KA) / W_b;
  const stress_t = (torque_T * serviceFactor_KA) / W_t;

  // 3. Determine stress concentration / notch factors (alpha_k)
  let alpha_kb = 1.0;
  let alpha_kt = 1.0;

  if (sectionType === 'fillet') {
    const D_d = D / d;
    const r_d = r / d;
    // Classic robust numerical approximations for Stepped Fillets in DIN 743-2
    alpha_kb = 1.0 + Math.pow((D_d - 1.0) / D_d, 0.3) * Math.pow(r_d, -0.42) * 0.62;
    alpha_kt = 1.0 + Math.pow((D_d - 1.0) / D_d, 0.3) * Math.pow(r_d, -0.38) * 0.42;
  } else if (sectionType === 'groove') {
    const r_d = r / d;
    const t_d = (D - d) / d;
    // Approximations for shaft undercuts / grooves
    alpha_kb = 1.0 + Math.pow(t_d + 0.02, 0.35) * Math.pow(r_d, -0.46) * 0.82;
    alpha_kt = 1.0 + Math.pow(t_d + 0.02, 0.35) * Math.pow(r_d, -0.42) * 0.62;
  } else {
    // Keyway type
    // In keyways, standardized notch factors are typically directly defined
    alpha_kb = 2.45;
    alpha_kt = 1.95;
  }

  // 4. Calculate Notch Sensitivity Constant G*
  // log10(G*) = -6.1 + Rm/2430 (Bending)
  // log10(G*) = -6.2 + Rm/2430 (Torsion)
  const G_star_b = Math.pow(10, -6.1 + Rm / 2430);
  const G_star_t = Math.pow(10, -6.2 + Rm / 2430);

  // 5. Calculate Effective Notch Factor (beta_k)
  // beta_k = 1.0 + (alpha_k - 1) / (1 + sqrt(G* / r))
  let beta_kb = 1.0 + (alpha_kb - 1.0) / (1.0 + Math.sqrt(G_star_b / r));
  let beta_kt = 1.0 + (alpha_kt - 1.0) / (1.0 + Math.sqrt(G_star_t / r));

  if (sectionType === 'keyway') {
    // Override directly with standard fatigue notch factors under DIN 743 for milled keyways
    beta_kb = 2.10;
    beta_kt = 1.70;
  }

  // 6. Size Factor Kd (K3(d) in DIN 743)
  let K_dB = 1.0;
  if (d <= 16) {
    K_dB = 1.0;
  } else if (d <= 100) {
    K_dB = 1.0 - 0.26 * Math.log10(d / 16);
  } else {
    K_dB = 0.80;
  }

  let K_dT = 1.0;
  if (d <= 16) {
    K_dT = 1.0;
  } else if (d <= 100) {
    K_dT = 1.0 - 0.22 * Math.log10(d / 16);
  } else {
    K_dT = 0.83;
  }

  // 7. Surface Roughness Factor KR (Kf in older literature, linked to Ultimate Tensile Strength)
  let K_R = 1.0;
  if (roughness_Rz > 0) {
    const logRz = Math.log10(roughness_Rz);
    const term = Rm / 400.0 - 0.5;
    K_R = 1.0 - 0.052 * logRz * Math.max(0.1, term);
    K_R = Math.max(0.65, Math.min(1.0, K_R));
  }

  // 8. Corrected Component Fatigue Limits
  // sigma_Wbk = (sigmaWb * KdB * KR) / beta_kb
  const sigma_Wbk = (material.sigmaWb * K_dB * K_R) / beta_kb;
  // tau_Wtk = (tauWt * KdT * KR) / beta_kt
  const tau_Wtk = (material.tauWt * K_dT * K_R) / beta_kt;

  // 9. Multi-load Fatigue strength safeties
  // S_b = sigma_Wbk / stress_b
  // S_t = tau_Wtk / stress_t
  const S_b = stress_b > 0 ? sigma_Wbk / stress_b : 999.0;
  const S_t = stress_t > 0 ? tau_Wtk / stress_t : 999.0;

  // Combined Fatigue Safety S
  // S = S_b * S_t / sqrt(S_b^2 + S_t^2)
  let S_combined = 999.0;
  if (stress_b > 0 || stress_t > 0) {
    S_combined = (S_b * S_t) / Math.sqrt(Math.pow(S_b, 2) + Math.pow(S_t, 2));
  }

  // 10. Static Safety Verification (Yielding check)
  // For static limits, size factor K_1 also affects
  const K1_yield = d <= 16 ? 1.0 : (d <= 100 ? 1.0 - 0.1 * Math.log10(d / 16) : 0.92);
  const sigma_yield_limit = Re * 1.15 * K1_yield; // shape-factor benefit for bending
  const tau_yield_limit = (Re / Math.sqrt(3)) * K1_yield; // shear yield limit

  const S_static_b = stress_b > 0 ? sigma_yield_limit / stress_b : 999.0;
  const S_static_t = stress_t > 0 ? tau_yield_limit / stress_t : 999.0;
  let S_static_combined = 999.0;
  if (stress_b > 0 || stress_t > 0) {
    S_static_combined = 1.0 / Math.sqrt(Math.pow(1.0 / S_static_b, 2) + Math.pow(1.0 / S_static_t, 2));
  }

  const isPass = S_combined >= requiredSafety_Smin;
  const margin = stress_b > 0 || stress_t > 0 
    ? (S_combined - requiredSafety_Smin) / requiredSafety_Smin 
    : 9.99;

  return {
    W_b,
    W_t,
    stress_b,
    stress_t,
    alpha_kb,
    alpha_kt,
    G_star_b,
    G_star_t,
    beta_kb,
    beta_kt,
    K_dB,
    K_dT,
    K_R,
    sigma_Wbk,
    tau_Wtk,
    S_b,
    S_t,
    S_combined,
    S_static_b,
    S_static_t,
    S_static_combined,
    isPass,
    margin
  };
}
