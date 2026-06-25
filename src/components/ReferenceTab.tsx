import React, { useState } from 'react';
import { PRESET_MATERIALS } from '../data';
import { Search, Database, Scale, ShieldAlert, Check } from 'lucide-react';
import { Material } from '../types';

export default function ReferenceTab() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMaterials = PRESET_MATERIALS.filter(
    m =>
      m.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fadeup">
      {/* Search Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-heading text-xl font-medium text-primary flex items-center gap-2">
            <Database className="w-5 h-5 text-accent" />
            <span>DIN 743-3 Standard Material Reference Dictionary</span>
          </h2>
          <p className="text-gray-500 text-xs">Pre-configured design stress coefficients and fatigue capacities</p>
        </div>
        
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search material tag or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 bg-gray-50 border border-border focus:outline-none focus:border-accent rounded-lg"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Main Table Grid */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b-2 border-border h-12">
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary">ID</th>
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary col-span-2">Mechanical Material Name</th>
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary text-right">Rm (MPa)</th>
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary text-right">Re (MPa)</th>
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary text-right">σWb (MPa)</th>
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary text-right">τWt (MPa)</th>
                <th className="px-6 py-3 font-semibold text-[11px] uppercase tracking-wider text-primary text-right">σWb Ratio</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.map((material, idx) => {
                const ratio = ((material.sigmaWb / material.Rm) * 100).toFixed(1);
                return (
                  <tr
                    key={material.id}
                    className={`h-11 border-b border-border text-xs transition-colors odd:bg-white even:bg-gray-50/30 hover:bg-accent/5`}
                  >
                    <td className="px-6 py-3 font-mono font-bold text-accent">{material.id}</td>
                    <td className="px-6 py-3 font-medium text-primary">{material.name}</td>
                    <td className="px-6 py-3 text-right font-mono text-gray-700">{material.Rm}</td>
                    <td className="px-6 py-3 text-right font-mono text-gray-700">{material.Re}</td>
                    <td className="px-6 py-3 text-right font-mono text-primary font-medium">{material.sigmaWb}</td>
                    <td className="px-6 py-3 text-right font-mono text-primary font-medium">{material.tauWt}</td>
                    <td className="px-6 py-3 text-right font-mono text-muted text-xs">
                      {ratio}% <span className="text-[10px] text-gray-400">Rm</span>
                    </td>
                  </tr>
                );
              })}
              {filteredMaterials.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-400 text-xs font-mono">
                    No matching material found in DIN 743 database directory.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Standards estimation block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
            <Scale className="w-5 h-5 text-accent" />
            <span>DIN Fatigue Estimation Rules</span>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">
            When standard sample experimental values are missing under DIN 743-3, designers can estimate 
            symmetrical reversed bending fatigue limits σ_Wb and torsional shear fatigue strength τ_Wt 
            conservatively from ultimate tensile strength R_m:
          </p>
          <ul className="text-gray-500 text-xs space-y-2 pl-3 list-disc">
            <li><strong>Steels (R_m ≤ 1200 MPa):</strong> σ_Wb ≈ 0.45 · R_m</li>
            <li><strong>Torsional Symmetrical Fatigue:</strong> τ_Wt ≈ 0.577 · σ_Wb ≈ 0.26 · R_m</li>
            <li><strong>Precipitation Martensitic Grades:</strong> Benefit from localized heat treatments, increasing endurance ratios above 48%.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center gap-2 font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
            <ShieldAlert className="w-5 h-5 text-accent" />
            <span>Yield Limit Safety Margin</span>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">
            Ultimate yield $R_e$ marks the physical threshold of permanent bending warping. 
            For stainless alloys under persistent hot hydraulic valve operation, nominal safety factor requirements increase to protect seat clearances.
          </p>
          <div className="bg-accent/5 p-4 rounded-lg flex items-start gap-2">
            <Check className="w-4 h-4 text-accent mt-0.5" />
            <span className="text-gray-600 text-[11px] leading-relaxed">
              <strong>Quality Check:</strong> All predefined assets meet or exceed ASTM and EN mechanical certifications and are pre-loaded in full compliance with ISO 9001 mechanical standards.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
