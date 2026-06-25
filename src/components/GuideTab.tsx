import React from 'react';
import { BookOpen, AlertCircle, RefreshCw, FileText, Settings, ShieldAlert } from 'lucide-react';

export default function GuideTab() {
  return (
    <div className="space-y-8 animate-fadeup">
      {/* Hero Welcome banner */}
      <div className="bg-white rounded-xl shadow-md p-8 md:p-10 border-l-4 border-accent">
        <h1 className="font-heading text-3xl font-medium tracking-tight text-primary mb-3">
          DIN 743 Shaft Strength Calculation Tool
        </h1>
        <p className="text-gray-600 text-sm max-w-3xl leading-relaxed mb-6">
          This specialist CAD engineering module implements the complete mathematical standard for **DIN 743 (Parts 1-3)**. 
          It supports mechanical stress checks, stress concentration factors, material limits, and dynamic fatigue checks 
          under combined bending and torsion loads for industrial valve stems and driving shafts.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 rounded-full text-xs text-accent font-semibold font-mono tracking-label">
          STANDARDS ENFORCED: DIN 743-1, DIN 743-2, DIN 743-3
        </div>
      </div>

      {/* Grid of steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 hover-lift">
          <div className="bg-primary/5 text-primary p-3 rounded-lg w-fit mb-4">
            <Settings className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-medium text-primary mb-2">1. Input Core Geometry</h3>
          <p className="text-gray-500 text-xs leading-relaxed">
            Specify working shaft diameter ($d$), step diameter ($D$), fillet transition radius ($r$), and critical forces. 
            Inputs with a <span className="bg-input-bg px-1 font-semibold rounded text-primary">yellow background</span> are design variables that immediately recompute.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover-lift">
          <div className="bg-primary/5 text-primary p-3 rounded-lg w-fit mb-4">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-medium text-primary mb-2">2. Real-Time Engine</h3>
          <p className="text-gray-500 text-xs leading-relaxed">
            The mathematical engine instantly recalculates nominal stresses, stress concentration ($\alpha_k$), 
            notch factors ($\beta_k$), component size factor ($K_d$), and roughness multipliers ($K_R$).
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover-lift">
          <div className="bg-primary/5 text-primary p-3 rounded-lg w-fit mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-medium text-primary mb-2">3. Technical Report</h3>
          <p className="text-gray-500 text-xs leading-relaxed">
            Review detailed findings on the **Results Dashboard** and open the **Report tab** to obtain a standardized 
            single-page A4 PDF-ready design certificate with digital sign-off.
          </p>
        </div>
      </div>

      {/* Engineering Insights box */}
      <div className="bg-accent/[0.04] border-l-3 border-accent p-6 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-primary font-heading text-lg font-medium">
          <AlertCircle className="w-5 h-5 text-accent" />
          <span>DIN 743 Calculation Methodology Guidelines</span>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-xs leading-relaxed">
          <li>
            <strong>Fatigue Notch Factor:</strong> The effective stress concentration factor β_k is computed 
            using geometric notch sensitivity q = 1 ÷ (1 + √(G* ÷ r)). For keyways, direct standard 
            notches β_kb = 2.1 and β_kt = 1.7 are pre-coded.
          </li>
          <li>
            <strong>Combined Loads:</strong> Bending and torsion occur in phase in valve closing operations, requiring quadratic 
            ellipsoid combination to determine combined fatigue limits under S ≥ S_min.
          </li>
          <li>
            <strong>Surface Roughness ($R_z$):</strong> Shaft surface finishing plays a paramount role. Rougher turning marks decrease $K_R$, 
            reducing the allowable stress limit sharply for high-strength alloys.
          </li>
        </ul>
      </div>

      {/* Precautions box */}
      <div className="bg-red-50/50 border-l-3 border-negative p-6 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-negative font-heading text-lg font-medium">
          <ShieldAlert className="w-5 h-5" />
          <span>Operational Boundary Limits</span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed">
          Calculations are optimized and approved for solid circular shafts. 
          For hollow shafts, additional stress corrective coefficients apply. 
          Always ensure working diameter $d$ is less than step diameter $D$, and transition radius $r$ is non-zero 
          to prevent calculations of infinite stress concentrations.
        </p>
      </div>
    </div>
  );
}
