export interface Material {
  id: string;
  name: string;
  Rm: number;       // Upper limit of Ultimate Tensile Strength (MPa)
  Re: number;       // Yield / Proof Strength (MPa)
  sigmaWb: number;  // Base bending fatigue limit (MPa)
  tauWt: number;    // Base torsional fatigue limit (MPa)
}

export type SectionType = 'fillet' | 'groove' | 'keyway';

export interface CalculatorInput {
  projectName: string;
  valveModel: string;
  shaftSectionId: string;
  materialId: string;
  sectionType: SectionType;
  diameter_d: number;       // active working diameter (mm)
  stepDiameter_D: number;   // step diameter (mm)
  radius_r: number;         // transition fillet radius (mm)
  moment_Mb: number;        // dangerous bending moment (N*mm)
  torque_T: number;         // dangerous torque (N*mm)
  serviceFactor_KA: number; // service factor
  requiredSafety_Smin: number; // required safety factor
  roughness_Rz: number;     // surface roughness Rz (um)
}

export interface CalculationResult {
  // Section modulus
  W_b: number; // bending (mm3)
  W_t: number; // torsion (mm3)
  
  // Nominal stress
  stress_b: number; // bending stress (MPa)
  stress_t: number; // torsional shear stress (MPa)
  
  // Stress concentration
  alpha_kb: number; // geometric bending SC factor
  alpha_kt: number; // geometric torsional SC factor
  
  // Notch sensitivity
  G_star_b: number; // Bending parameter
  G_star_t: number; // Torsion parameter
  beta_kb: number;  // notch factor bending
  beta_kt: number;  // notch factor torsion
  
  // Size and roughness influence
  K_dB: number;  // size factor bending
  K_dT: number;  // size factor torsion
  K_R: number;   // roughness factor
  
  // Corrected fatigue limits
  sigma_Wbk: number; // component fatigue limit bending (MPa)
  tau_Wtk: number;   // component fatigue limit torsion (MPa)
  
  // Safety factors
  S_b: number;        // safety bending
  S_t: number;        // safety torsion
  S_combined: number; // combined fatigue safety factor
  
  // Yield static factor
  S_static_b: number;
  S_static_t: number;
  S_static_combined: number;
  
  isPass: boolean;
  margin: number;     // safety margin percent (S_combined - S_min) / S_min
}
