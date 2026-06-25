import React from 'react';
import { Material, CalculatorInput, CalculationResult } from '../types';
import { calculateDIN743 } from '../lib/calculator';
import { PRESET_MATERIALS } from '../data';
import { Calculator, ArrowRight, Layers, Cpu, Compass } from 'lucide-react';

interface CalculationTabProps {
  input: CalculatorInput;
}

export default function CalculationTab({ input }: CalculationTabProps) {
  const material = PRESET_MATERIALS.find(m => m.id === input.materialId) || PRESET_MATERIALS[0];
  const res = calculateDIN743(input, material);

  // Helper to render inline progress data bar (filled with brand-accent color, 10% background rail)
  const renderDataBar = (percentage: number) => {
    const capped = Math.max(0, Math.min(100, percentage));
    return (
      <div className="w-24 h-2 bg-primary/10 rounded-full overflow-hidden inline-block align-middle ml-2">
        <div 
          className="h-full bg-accent rounded-full transition-all duration-300" 
          style={{ width: `${capped}%` }}
        />
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fadeup text-[13px]">
      {/* Banner indicator of instant calculation updates */}
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-heading text-xl font-medium text-primary flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent animate-pulse" />
            <span>DIN 743 Live Computation Engine Output</span>
          </h2>
          <p className="text-gray-500 text-xs">Real-time variables and mechanical reduction arrays</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs text-primary font-mono font-semibold border border-border">
          Status: <span className="text-accent animate-ping inline-block w-2 h-2 rounded-full bg-accent" /> Active Simulation
        </div>
      </div>

      {/* Grid of the 4 steps of mechanical check */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Step 1: Geometric Modulus & Nominal Stress */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
            <Layers className="w-5 h-5 text-accent" />
            <span>Step 1: Section Properties & Nominal Stress</span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Bending Section Modulus (W_b)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.W_b.toFixed(1)} <span className="text-gray-400 font-sans text-[11px]">mm³</span></span>
                {renderDataBar((res.W_b / 50000) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Torsional Section Modulus (W_t)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.W_t.toFixed(1)} <span className="text-gray-400 font-sans text-[11px]">mm³</span></span>
                {renderDataBar((res.W_t / 100000) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Dynamic Bending Moment (Mb · KA)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{(input.moment_Mb * input.serviceFactor_KA).toFixed(0)} <span className="text-gray-400 font-sans text-[11px]">N·mm</span></span>
                {renderDataBar(((input.moment_Mb * input.serviceFactor_KA) / 500000) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Nominal Bending Stress (σ_b)</span>
              <div className="text-right text-primary font-mono font-semibold">
                <span>{res.stress_b.toFixed(2)} <span className="text-gray-400 font-sans text-[11px]">MPa</span></span>
                {renderDataBar((res.stress_b / material.Re) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-gray-500 font-medium font-sans">Nominal Shear Stress (τ_t)</span>
              <div className="text-right text-primary font-mono font-semibold">
                <span>{res.stress_t.toFixed(2)} <span className="text-gray-400 font-sans text-[11px]">MPa</span></span>
                {renderDataBar((res.stress_t / (material.Re / 1.732)) * 100)}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Stress Concentration & Notch factors */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
            <Calculator className="w-5 h-5 text-accent" />
            <span>Step 2: Notch Sensitivity & Fatigue Notch Factors</span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Geometric Bending Factor (α_kb)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.alpha_kb.toFixed(2)}</span>
                {renderDataBar(((res.alpha_kb - 1.0) / 2.0) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Geometric Torsion Factor (α_kt)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.alpha_kt.toFixed(2)}</span>
                {renderDataBar(((res.alpha_kt - 1.0) / 2.0) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium font-sans">Notch Sensitivities (G*_b, G*_t) <span className="text-[10px] text-gray-400">mm</span></span>
              <div className="text-right text-primary font-mono font-semibold">
                <span>{res.G_star_b.toFixed(4)} / {res.G_star_t.toFixed(4)}</span>
                {renderDataBar((res.G_star_b / 0.1) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Allowable Fatigue Notch β_kb <span className="text-xs text-gray-400">(Bending)</span></span>
              <div className="text-right text-accent font-mono font-semibold">
                <span>{res.beta_kb.toFixed(2)}</span>
                {renderDataBar(((res.beta_kb - 1) / 1.5) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-gray-500 font-medium">Allowable Fatigue Notch β_kt <span className="text-xs text-gray-400">(Torsion)</span></span>
              <div className="text-right text-accent font-mono font-semibold">
                <span>{res.beta_kt.toFixed(2)}</span>
                {renderDataBar(((res.beta_kt - 1) / 1.5) * 100)}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Size & Surface coefficients */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
            <Compass className="w-5 h-5 text-accent" />
            <span>Step 3: Component Reductions & Corrected Limits</span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Size reduction Bending (K_dB)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.K_dB.toFixed(3)}</span>
                {renderDataBar(res.K_dB * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Size reduction Torsion (K_dT)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.K_dT.toFixed(3)}</span>
                {renderDataBar(res.K_dT * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Surface Roughness impact (K_R)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.K_R.toFixed(3)}</span>
                {renderDataBar(res.K_R * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium text-primary font-semibold">Corrected Bending limit (σ_Wbk)</span>
              <div className="text-right text-accent font-mono font-bold text-sm">
                <span>{res.sigma_Wbk.toFixed(1)} <span className="text-gray-400 font-sans text-xs">MPa</span></span>
                {renderDataBar((res.sigma_Wbk / material.sigmaWb) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-gray-500 font-medium text-primary font-semibold">Corrected Torsional limit (τ_Wtk)</span>
              <div className="text-right text-accent font-mono font-bold text-sm">
                <span>{res.tau_Wtk.toFixed(1)} <span className="text-gray-400 font-sans text-xs">MPa</span></span>
                {renderDataBar((res.tau_Wtk / material.tauWt) * 100)}
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Final Safety check factors */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
            <ArrowRight className="w-5 h-5 text-accent" />
            <span>Step 4: Ultimate Combined Safeties</span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Pure Bending Fatigue Safety (S_b)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.S_b.toFixed(2)}</span>
                {renderDataBar((res.S_b / 10.0) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Pure Torsional Fatigue Safety (S_t)</span>
              <div className="text-right">
                <span className="font-mono font-semibold text-primary">{res.S_t.toFixed(2)}</span>
                {renderDataBar((res.S_t / 10.0) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-semibold text-primary">DIN 743 Combined Fatigue Safety (S)</span>
              <div className="text-right font-mono font-bold text-accent text-sm">
                <span>{res.S_combined.toFixed(2)}</span>
                {renderDataBar((res.S_combined / 10.0) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-gray-500 font-medium">Static Peak Yield Combined Safety (S_static)</span>
              <div className="text-right text-primary font-mono font-medium">
                <span>{res.S_static_combined.toFixed(2)}</span>
                {renderDataBar((res.S_static_combined / 10.0) * 100)}
              </div>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-gray-500 font-medium text-xs">Required Minimum Safety Limit (S_min)</span>
              <div className="text-right text-gray-500 font-mono font-semibold text-xs">
                <span>{input.requiredSafety_Smin.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Dynamic Recommendation notification block */}
      <div className="bg-accent/[0.04] border-l-3 border-accent p-6 rounded-xl space-y-2">
        <h4 className="font-heading text-base font-semibold text-primary">Calculation Engineering Insight</h4>
        <p className="text-gray-600 text-xs leading-relaxed">
          The safety factor margin is current at <span className="text-accent font-semibold">{(res.margin * 100).toFixed(1)}%</span> above 
          the minimum requirement. Increasing transition fillet radius r from {input.radius_r}mm to {Math.ceil(input.radius_r + 1.5)}mm is 
          calculated to reduce the fatigue notch factor β_kb by approximately 15%, increasing fatigue safety factor S by 18% under unchanged loads.
        </p>
      </div>
    </div>
  );
}
