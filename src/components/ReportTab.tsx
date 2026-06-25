import React, { useRef } from 'react';
import { Material, CalculatorInput, CalculationResult } from '../types';
import { calculateDIN743 } from '../lib/calculator';
import { PRESET_MATERIALS } from '../data';
import { Printer, Download, HelpCircle, Check, AlertCircle } from 'lucide-react';

interface ReportTabProps {
  input: CalculatorInput;
}

export default function ReportTab({ input }: ReportTabProps) {
  const material = PRESET_MATERIALS.find(m => m.id === input.materialId) || PRESET_MATERIALS[0];
  const res = calculateDIN743(input, material);
  const reportRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const currentDateString = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6 animate-fadeup">
      {/* Print Trigger header bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 no-print">
        <div>
          <h2 className="font-heading text-lg font-medium text-primary">Print Standard Certificate</h2>
          <p className="text-gray-500 text-xs">Formatted to output precisely onto a single vertical A4 sheet page.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-xs font-semibold rounded-lg hover-lift hover:opacity-95 cursor-pointer active:scale-[0.97] transition-all"
          >
            <Printer className="w-4 h-4" />
            Print or Save PDF
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div className="bg-slate-100 p-2 md:p-8 overflow-x-auto no-print">
        <div 
          ref={reportRef} 
          className="print-page bg-white text-primary rounded-xl shadow-md p-10 max-w-[210mm] min-h-[297mm] mx-auto text-xs space-y-8 font-sans border border-border"
          style={{ width: '210mm', minHeight: '297mm' }}
        >
          {/* Main Title Head */}
          <div className="text-center space-y-2 pb-6 border-b border-border">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-primary">
              VALVE SHAFT CALCULATIVE AUDIT CERTIFICATE
            </h1>
            <p className="text-[10px] uppercase font-mono tracking-wider text-gray-500">
              STRENGTH AND STATIC MECHANICAL VERIFICATION TO DIN 743 PART 1-3
            </p>
          </div>

          {/* Section 1: Project Metadata */}
          <div className="space-y-2">
            <h3 className="bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded">
              1. Project & Engineering Credentials
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 px-3 pt-1">
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Project Title</span>
                <span className="font-semibold text-primary font-mono text-[11px] truncate max-w-[250px]">{input.projectName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Industrial Valve Model</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{input.valveModel}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Critical Segment Code</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{input.shaftSectionId}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Calibrating Date</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{currentDateString}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Input variables */}
          <div className="space-y-2">
            <h3 className="bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded">
              2. Design Specs & Geometry
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 px-3 pt-1">
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Material Designation</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{material.id}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Notch Model Typology</span>
                <span className="font-semibold text-primary font-mono text-[11px] capitalize">{input.sectionType}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Active Shaft Diameter (d)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{input.diameter_d.toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Step Diameter (D)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{input.stepDiameter_D.toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Fillet Transition Radius (r)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{input.radius_r.toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Surface Roughness (R_z)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{input.roughness_Rz.toFixed(2)} μm</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Moment Load (Mb)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{(input.moment_Mb / 1000).toFixed(1)} N·m</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Torsional Torque (T)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{(input.torque_T / 1000).toFixed(1)} N·m</span>
              </div>
            </div>
          </div>

          {/* Section 3: DIN 743 Intermediate Factors */}
          <div className="space-y-2">
            <h3 className="bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded">
              3. DIN 743 Calculations & Notch Factors
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 px-3 pt-1">
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Nominal Stress Bending (σ_b)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.stress_b.toFixed(2)} MPa</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Nominal Stress Torsion (τ_t)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.stress_t.toFixed(2)} MPa</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Effective Notch Factor (β_kb)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.beta_kb.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Effective Notch Factor (β_kt)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.beta_kt.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Size reduction Factor Bending (K_dB)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.K_dB.toFixed(3)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Surface Roughness coefficient (K_R)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.K_R.toFixed(3)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Corrected Fatigue limit Bending (σ_Wbk)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.sigma_Wbk.toFixed(1)} MPa</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 py-1">
                <span className="text-gray-500 font-medium text-[11px]">Corrected Fatigue limit Torsion (τ_Wtk)</span>
                <span className="font-semibold text-primary font-mono text-[11px]">{res.tau_Wtk.toFixed(1)} MPa</span>
              </div>
            </div>
          </div>

          {/* Section 4: Safety & Verification Conclusions */}
          <div className="space-y-4">
            <h3 className="bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded">
              4. Safety Margin Verification & Verdict
            </h3>
            
            <div className="p-4 rounded-xl border border-dashed flex flex-col md:flex-row justify-between items-center bg-gray-50/50 gap-4">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-gray-500 text-[11px]">Combined Fatigue Safety S</div>
                <div className="font-heading text-2xl font-bold text-accent">
                  {res.S_combined.toFixed(2)} <span className="text-xs text-gray-400 font-sans font-medium">(Required: ≥ {input.requiredSafety_Smin.toFixed(2)})</span>
                </div>
              </div>

              <div className="px-5 py-2 rounded-full font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm">
                {res.isPass ? (
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1.5 rounded-full inline-block">
                    ✓ PASS
                  </span>
                ) : (
                  <span className="bg-red-50 text-red-700 border border-red-200 px-4 py-1.5 rounded-full inline-block">
                    ✗ FAIL
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Section 5: Signature area (for engineering audit requirement) */}
          <div className="grid grid-cols-2 gap-12 pt-16 text-center border-t border-gray-100">
            <div className="space-y-1">
              <div className="h-0.5 bg-gray-300 w-44 mx-auto mb-2" />
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Designed & Engineered By</p>
              <p className="font-semibold text-primary font-mono text-xs">CAD Stem Design dept</p>
            </div>
            <div className="space-y-1">
              <div className="h-0.5 bg-gray-300 w-44 mx-auto mb-2" />
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Authorized Inspector Audit</p>
              <p className="font-semibold text-primary font-mono text-xs">Quality Assurance director</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual aid preview for standard browser print view */}
      <div className="p-4 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-lg text-xs leading-relaxed no-print flex gap-2">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <div>
          <strong>Document Printing Hint:</strong> When exporting to PDF using the print dialog, 
          make sure to select <strong>"A4"</strong> paper size and check <strong>"Background graphics"</strong> to properly print 
          the custom corporate branding borders and headers.
        </div>
      </div>
    </div>
  );
}
