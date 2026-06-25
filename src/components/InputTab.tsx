import React from 'react';
import { Material, CalculatorInput, SectionType } from '../types';
import { PRESET_MATERIALS } from '../data';
import { Shield, Cog, HelpCircle, HardDrive, Bolt } from 'lucide-react';

interface InputTabProps {
  input: CalculatorInput;
  setInput: React.Dispatch<React.SetStateAction<CalculatorInput>>;
  onReset: () => void;
}

export default function InputTab({ input, setInput, onReset }: InputTabProps) {
  const selectedMaterial = PRESET_MATERIALS.find(m => m.id === input.materialId) || PRESET_MATERIALS[0];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (fieldName: keyof CalculatorInput, value: number) => {
    setInput(prev => {
      const updated = { ...prev, [fieldName]: value };
      
      // Auto-adjust step D if it falls below d
      if (fieldName === 'diameter_d' && updated.stepDiameter_D < value + 0.5) {
        updated.stepDiameter_D = Number((value * 1.2).toFixed(1));
      }
      return updated;
    });
  };

  const setSectionType = (type: SectionType) => {
    setInput(prev => ({
      ...prev,
      sectionType: type
    }));
  };

  return (
    <div className="space-y-8 animate-fadeup">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h2 className="font-heading text-xl font-medium text-primary">Interactive Design Variables</h2>
          <p className="text-gray-500 text-xs">Modify values safely below. Formulas recalculate instantly.</p>
        </div>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-primary text-white hover:bg-primary/95 text-xs font-semibold rounded-lg hover-lift active:scale-[0.97] transition-all cursor-pointer"
        >
          Reset to Standard Preset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main interactive inputs panel */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Section 1: Project Metadata */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h3 className="font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
              1. Engineering Identity Keys
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={input.projectName}
                  onChange={handleTextChange}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-xs font-medium rounded-lg border-b-2 border-border focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Valve Model Tag
                </label>
                <input
                  type="text"
                  name="valveModel"
                  value={input.valveModel}
                  onChange={handleTextChange}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-xs font-medium rounded-lg border-b-2 border-border focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Critical Section Code
                </label>
                <input
                  type="text"
                  name="shaftSectionId"
                  value={input.shaftSectionId}
                  onChange={handleTextChange}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-xs font-medium rounded-lg border-b-2 border-border focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Notch Shape & Geometry */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
              2. Section Typology & Geometry
            </h3>

            {/* Notch Selector Cards */}
            <div>
              <label className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold mb-2">
                Notch Type (DIN 743-2 Model)
              </label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setSectionType('fillet')}
                  className={`p-4 rounded-xl text-left border transition-all relative ${
                    input.sectionType === 'fillet'
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="font-heading font-semibold text-primary text-sm">Fillet / Step</div>
                  <div className="text-gray-400 text-[10px] mt-1">Stepped diameter section</div>
                  {input.sectionType === 'fillet' && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSectionType('groove')}
                  className={`p-4 rounded-xl text-left border transition-all relative ${
                    input.sectionType === 'groove'
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="font-heading font-semibold text-primary text-sm">Circular Groove</div>
                  <div className="text-gray-400 text-[10px] mt-1">Thread relief or seal groove</div>
                  {input.sectionType === 'groove' && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSectionType('keyway')}
                  className={`p-4 rounded-xl text-left border transition-all relative ${
                    input.sectionType === 'keyway'
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="font-heading font-semibold text-primary text-sm">Shaft Keyway</div>
                  <div className="text-gray-400 text-[10px] mt-1">Torque transmission notch</div>
                  {input.sectionType === 'keyway' && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
                  )}
                </button>
              </div>
            </div>

            {/* Numerical Dimension Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Active Diameter d (mm)
                </label>
                <input
                  type="number"
                  min="5"
                  max="500"
                  step="0.1"
                  value={input.diameter_d}
                  onChange={(e) => handleNumberChange('diameter_d', Number(e.target.value))}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                />
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="1"
                  value={input.diameter_d}
                  onChange={(e) => handleNumberChange('diameter_d', Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-accent"
                />
              </div>

              {input.sectionType !== 'keyway' && (
                <>
                  <div>
                    <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                      Step Outer Diameter D (mm)
                    </label>
                    <input
                      type="number"
                      min={input.diameter_d + 0.1}
                      max="600"
                      step="0.1"
                      value={input.stepDiameter_D}
                      onChange={(e) => handleNumberChange('stepDiameter_D', Number(e.target.value))}
                      className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                    />
                    <input
                      type="range"
                      min={Math.floor(input.diameter_d + 1)}
                      max={Math.floor(input.diameter_d * 2)}
                      step="1"
                      value={input.stepDiameter_D}
                      onChange={(e) => handleNumberChange('stepDiameter_D', Number(e.target.value))}
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                      Transition Fillet Radius r (mm)
                    </label>
                    <input
                      type="number"
                      min="0.1"
                      max={input.diameter_d / 2}
                      step="0.05"
                      value={input.radius_r}
                      onChange={(e) => handleNumberChange('radius_r', Number(e.target.value))}
                      className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                    />
                    <input
                      type="range"
                      min="0.2"
                      max="15"
                      step="0.1"
                      value={input.radius_r}
                      onChange={(e) => handleNumberChange('radius_r', Number(e.target.value))}
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-accent"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Section 3: Force Loading & Operational Factors */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="font-heading text-lg font-medium text-primary border-l-3 border-accent pl-3">
              3. Dynamic Loads & Service Factors
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Bending Moment Mb (N·mm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="99999999"
                    step="100"
                    value={input.moment_Mb}
                    onChange={(e) => handleNumberChange('moment_Mb', Number(e.target.value))}
                    className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                  />
                  <span className="absolute right-3 top-2 text-[10px] text-gray-400 font-mono">
                    = {(input.moment_Mb / 1000).toFixed(1)} N·m
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Applied Torque T (N·mm)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="99999999"
                    step="100"
                    value={input.torque_T}
                    onChange={(e) => handleNumberChange('torque_T', Number(e.target.value))}
                    className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                  />
                  <span className="absolute right-3 top-2 text-[10px] text-gray-400 font-mono">
                    = {(input.torque_T / 1000).toFixed(1)} N·m
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1 col-span-1">
                  Service Factor KA (Shock multiplier)
                </label>
                <input
                  type="number"
                  min="1.0"
                  max="3.0"
                  step="0.05"
                  value={input.serviceFactor_KA}
                  onChange={(e) => handleNumberChange('serviceFactor_KA', Number(e.target.value))}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Required safety Smin
                </label>
                <input
                  type="number"
                  min="1.0"
                  max="5.0"
                  step="0.1"
                  value={input.requiredSafety_Smin}
                  onChange={(e) => handleNumberChange('requiredSafety_Smin', Number(e.target.value))}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">
                  Surface Roughness Rz (um)
                </label>
                <input
                  type="number"
                  min="0.1"
                  max="100"
                  step="0.1"
                  value={input.roughness_Rz}
                  onChange={(e) => handleNumberChange('roughness_Rz', Number(e.target.value))}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-sm font-semibold rounded-lg border-b-2 border-border focus:outline-none focus:border-accent font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar helper panels: chosen Material properties & dynamic safety info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-accent">
            <div className="flex items-center gap-2 mb-4">
              <Bolt className="w-5 h-5 text-accent" />
              <h3 className="font-heading text-lg font-medium text-primary">Selected Material Details</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-semibold mb-1">Material Designation</label>
                <select
                  name="materialId"
                  value={input.materialId}
                  onChange={handleTextChange}
                  className="w-full px-3 py-2 bg-input-bg text-primary text-xs font-semibold rounded-lg border-b-2 border-border focus:outline-none"
                >
                  {PRESET_MATERIALS.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.id} ({m.name.split(' ')[1] || 'Steel'})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-gray-50 p-3 rounded-lg border border-border">
                  <div className="text-gray-400 text-[10px] uppercase font-semibold">Ultimate Strength Rm</div>
                  <div className="text-primary font-mono font-medium text-lg mt-1">{selectedMaterial.Rm} <span className="text-xs">MPa</span></div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-border">
                  <div className="text-gray-400 text-[10px] uppercase font-semibold">Yield Strength Re</div>
                  <div className="text-primary font-mono font-medium text-lg mt-1">{selectedMaterial.Re} <span className="text-xs">MPa</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg border border-border">
                  <div className="text-gray-400 text-[10px] uppercase font-semibold">Bending Fatigue limit σWb</div>
                  <div className="text-primary font-mono font-medium text-lg mt-1">{selectedMaterial.sigmaWb} <span className="text-xs">MPa</span></div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg border border-border">
                  <div className="text-gray-400 text-[10px] uppercase font-semibold">Torsion Fatigue limit τWt</div>
                  <div className="text-primary font-mono font-medium text-lg mt-1">{selectedMaterial.tauWt} <span className="text-xs">MPa</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#051C2C] text-white p-6 rounded-xl shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <h3 className="font-heading text-lg font-medium">Compliance Standards</h3>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              DIN 743 is the authoritative strength calculation for shafts in European fluid management. 
              The preset safety target is <span className="text-accent font-semibold">{input.requiredSafety_Smin}</span> to absorb unmeasured dynamic hydraulic pulsation.
            </p>
            <div className="border-t border-gray-700 pt-3">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">Industrial Rating</span>
              <span className="text-xs text-white font-mono">Class III - High Duty Pressure Systems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
