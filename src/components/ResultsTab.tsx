import React, { useState } from 'react';
import { Material, CalculatorInput, CalculationResult } from '../types';
import { calculateDIN743 } from '../lib/calculator';
import { PRESET_MATERIALS } from '../data';
import { CheckCircle2, XCircle, Activity, ShieldCheck, TrendingUp, Sparkles, BarChart2 } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ResultsTabProps {
  input: CalculatorInput;
  setInput: React.Dispatch<React.SetStateAction<CalculatorInput>>;
}

export default function ResultsTab({ input, setInput }: ResultsTabProps) {
  const material = PRESET_MATERIALS.find(m => m.id === input.materialId) || PRESET_MATERIALS[0];
  const res = calculateDIN743(input, material);

  // States to hover matrices or handle user micro-simulations
  const [selectedSimDim, setSelectedSimDim] = useState<number | null>(null);
  const [selectedSimLoad, setSelectedSimLoad] = useState<number | null>(null);

  // Quick preset sizes and loads for the Stress Sensitivity Exposure Matrix
  const d_active = input.diameter_d;
  const diameterSeries = [
    Number((d_active - 4).toFixed(1)),
    Number((d_active - 2).toFixed(1)),
    Number(d_active.toFixed(1)),
    Number((d_active + 2).toFixed(1)),
    Number((d_active + 4).toFixed(1))
  ].filter(val => val > 5);

  const loadMultipliers = [0.8, 1.0, 1.2];

  const handleSimulateClick = (dim: number, mult: number) => {
    setInput(prev => ({
      ...prev,
      diameter_d: dim,
      moment_Mb: Number((INITIAL_MOMENT * mult).toFixed(0)),
      torque_T: Number((INITIAL_TORQUE * mult).toFixed(0))
    }));
  };

  const INITIAL_MOMENT = 150000.0;
  const INITIAL_TORQUE = 250000.0;

  return (
    <div className="space-y-8 animate-fadeup text-[13px]">
      
      {/* 1. Main Checklist Verdict Block */}
      <div className={`p-8 rounded-xl shadow-md border-t-4 transition-all ${
        res.isPass ? 'bg-emerald-50/50 border-emerald-500' : 'bg-red-50/50 border-red-500'
      }`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${res.isPass ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
              {res.isPass ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            </div>
            <div>
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">DIN 743 Verdict Status</div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-primary mt-1 font-mono">
                {res.isPass ? 'PASS' : 'FAIL'}
              </h2>
              <p className="text-gray-500 text-xs mt-1">
                {res.isPass 
                  ? 'The continuous fatigue capabilities exceed the safety limit required by the engineer.' 
                  : 'Critical combined strain exceeds fatigue safety limit. Re-dimensioning is compulsory.'
                }
              </p>
            </div>
          </div>

          <div className="bg-white px-6 py-4 rounded-xl shadow-sm text-center">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider block">Target Standard Limit</span>
            <span className="font-mono text-xl font-bold text-primary mt-1">S ≥ {input.requiredSafety_Smin.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* 2. Primary KPI metrics card layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Metric 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover-lift space-y-2">
          <div className="text-gray-400 text-[11px] uppercase font-semibold">Active Fatigue Safety (S)</div>
          <div className="font-heading text-4xl font-bold text-primary tracking-tight">
            {res.S_combined.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500 font-mono">
            {res.isPass ? 'Dynamic safety met' : 'Safety limit violation'}
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover-lift space-y-2">
          <div className="text-gray-400 text-[11px] uppercase font-semibold">Safety Margin</div>
          <div className={`font-heading text-4xl font-bold tracking-tight ${res.isPass ? 'text-primary' : 'text-primary'}`}>
            {res.margin >= 0 ? '+' : ''}{(res.margin * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-500 font-mono">Relative to target S_min</div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover-lift space-y-2">
          <div className="text-gray-400 text-[11px] uppercase font-semibold">Peak Static Yield Safety</div>
          <div className="font-heading text-4xl font-bold text-primary tracking-tight">
            {res.S_static_combined.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500 font-mono">Prevent permanent distortion</div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover-lift space-y-2">
          <div className="text-gray-400 text-[11px] uppercase font-semibold">Allowable limits (MPa)</div>
          <div className="font-heading text-lg font-bold text-primary tracking-tight">
            σWbk: {res.sigma_Wbk.toFixed(0)} <br />
            τWtk: {res.tau_Wtk.toFixed(0)}
          </div>
          <div className="text-xs text-gray-400 font-mono">After size/roughness correction</div>
        </div>

      </div>

      {/* 2.5. Stress Distribution Recharts Chart */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-accent text-[11px] uppercase tracking-wider font-bold font-mono flex items-center gap-1">
              <BarChart2 className="w-4 h-4 text-accent" /> Fatigue Analysis Visualizer
            </span>
            <h3 className="font-heading text-xl font-medium text-primary mt-1">
              Stress Distribution vs. Endurance Limits
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Contrasting active operational stresses with specimen limits and notched component fatigue limits conforming to DIN 743.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-mono border border-rose-200">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              Active Stress
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Component Limit
            </span>
          </div>
        </div>

        <div className="w-full h-[320px] font-mono text-[11px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                {
                  name: 'Bending (σ) [MPa]',
                  'Active Stress': Number(res.stress_b.toFixed(1)),
                  'Corrected Component Limit (DIN 743)': Number(res.sigma_Wbk.toFixed(1)),
                  'Raw Material Endurance Limit': Number(material.sigmaWb.toFixed(1)),
                },
                {
                  name: 'Torsion (τ) [MPa]',
                  'Active Stress': Number(res.stress_t.toFixed(1)),
                  'Corrected Component Limit (DIN 743)': Number(res.tau_Wtk.toFixed(1)),
                  'Raw Material Endurance Limit': Number(material.tauWt.toFixed(1)),
                },
              ]}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                tickLine={false} 
                className="font-sans text-xs" 
              />
              <YAxis 
                stroke="#64748b" 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  fontFamily: 'monospace',
                }}
              />
              <Legend 
                verticalAlign="top" 
                height={40} 
                wrapperStyle={{ 
                  fontFamily: 'sans-serif', 
                  fontSize: '11px', 
                  paddingBottom: '16px' 
                }} 
              />
              <Bar 
                dataKey="Active Stress" 
                fill="#f43f5e" 
                radius={[4, 4, 0, 0]} 
                name="Active Acting Stress (MPa)" 
                maxBarSize={45} 
              />
              <Bar 
                dataKey="Corrected Component Limit (DIN 743)" 
                fill="#10b981" 
                radius={[4, 4, 0, 0]} 
                name="Component Endurance (sigma_Wbk/tau_Wtk)" 
                maxBarSize={45} 
              />
              <Bar 
                dataKey="Raw Material Endurance Limit" 
                fill="#94a3b8" 
                radius={[4, 4, 0, 0]} 
                name="Raw Base Material Limit (sigmaWb/tauWt)" 
                maxBarSize={45} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500 bg-slate-50/50 p-4 rounded-xl border border-gray-100">
          <div className="space-y-1">
            <span className="font-semibold text-gray-700 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-accent" /> Notch & Size Penalty knockdown
            </span>
            <p className="leading-relaxed">
              The disparity between the <strong className="text-gray-600 font-semibold text-slate-500">Slate Bar (Raw Material Limit)</strong> and the <strong className="text-emerald-700 font-semibold">Green Bar (Component Limit)</strong> visualizes the severe strength penalty induced by geometric discontinuities (fillet/groove notch coefficient β_k), large diameters (K_d), and roughness factors (K_R).
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-gray-700 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Structural Verification
            </span>
            <p className="leading-relaxed font-sans text-gray-500">
              For a safe shaft assembly, the <strong className="text-rose-600 font-semibold">Rose Bar (Active Acting Stress)</strong> must remain lower than the corresponding <strong className="text-emerald-700 font-semibold">Green Bar (Component Endurance Limit)</strong> with an adequate safety margin, as mandated by the target engineering standard.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Exposure Matrix - Interactive Analysis Plate */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-accent text-[11px] uppercase tracking-wider font-bold font-mono">Operational Modeling</span>
            <h3 className="font-heading text-xl font-medium text-primary mt-1">
              Stress Sensitivity Exposure Matrix
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Click individual cells below to quickly test geometry size and torque load variations.
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-gray-500 text-xs font-mono border border-border">
            Active: <span className="text-primary font-bold">{d_active}mm</span> diameter @ <span className="text-primary font-bold">100%</span> load
          </div>
        </div>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border h-12">
                <th className="px-4 py-2 font-semibold text-[11px] uppercase text-primary text-left">
                  Diameter d (mm)
                </th>
                {loadMultipliers.map(mult => (
                  <th key={mult} className="px-4 py-2 font-semibold text-[11px] uppercase text-primary">
                    {(mult * 100).toFixed(0)}% Load Condition
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diameterSeries.map(dim => (
                <tr key={dim} className="border-b border-border h-11 hover:bg-gray-50/50">
                  <td className="px-4 py-2 text-left font-mono font-bold text-gray-700">
                    {dim} mm {dim === d_active && <span className="text-[10px] text-accent font-sans bg-accent/5 px-2 py-0.5 rounded-full ml-1">Active</span>}
                  </td>
                  {loadMultipliers.map(mult => {
                    // Temporarily calculate combined safety multiplier
                    const tempInput: CalculatorInput = {
                      ...input,
                      diameter_d: dim,
                      stepDiameter_D: Number((dim * 1.25).toFixed(1)),
                      moment_Mb: INITIAL_MOMENT * mult,
                      torque_T: INITIAL_TORQUE * mult
                    };
                    const tempRes = calculateDIN743(tempInput, material);
                    const cellPass = tempRes.S_combined >= input.requiredSafety_Smin;

                    return (
                      <td key={mult} className="px-3 py-1">
                        <button
                          onClick={() => handleSimulateClick(dim, mult)}
                          className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-bold interactive-cell cursor-pointer transition-all ${
                            cellPass
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100/80 border border-emerald-200'
                              : 'bg-red-50 text-red-700 hover:bg-red-100/80 border border-red-200'
                          }`}
                          title={`Click to apply d=${dim}mm and load=${(mult*100).toFixed(0)}%`}
                        >
                          S = {tempRes.S_combined.toFixed(2)}
                          <span className="block text-[9px] font-sans font-normal text-gray-400 mt-0.5 animate-pulse">
                            {cellPass ? 'PASS' : 'FAIL'}
                          </span>
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
