import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Download, 
  Upload, 
  RotateCcw, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Compass, 
  Wrench,
  BookOpen,
  Database,
  Cpu,
  BookmarkCheck,
  FileText
} from 'lucide-react';
import { INITIAL_INPUT, PRESET_MATERIALS } from './data';
import { CalculatorInput } from './types';
import { calculateDIN743 } from './lib/calculator';

// Import newly created tab components
import GuideTab from './components/GuideTab';
import InputTab from './components/InputTab';
import ReferenceTab from './components/ReferenceTab';
import CalculationTab from './components/CalculationTab';
import ResultsTab from './components/ResultsTab';
import ReportTab from './components/ReportTab';

export default function App() {
  const [input, setInput] = useState<CalculatorInput>(() => {
    const saved = localStorage.getItem('din743_input_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_INPUT;
      }
    }
    return INITIAL_INPUT;
  });

  const [lastSaved, setLastSaved] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'guide' | 'input' | 'reference' | 'calculation' | 'results' | 'report'>('guide');

  // Trigger auto-save to localStorage whenever input variables change
  useEffect(() => {
    localStorage.setItem('din743_input_state', JSON.stringify(input));
    const now = new Date();
    const formatted = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    setLastSaved(formatted);
  }, [input]);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to revert all variables to the standard industrial valve shaft preset?")) {
      setInput(INITIAL_INPUT);
    }
  };

  const handleExportBackup = () => {
    try {
      const dataStr = JSON.stringify(input, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const filename = `DIN743_Audit_Backup_${input.shaftSectionId || 'unnamed'}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', filename);
      linkElement.click();
    } catch (e) {
      alert("Error occurred generating backup download.");
    }
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          // Standard structural validation matches the inputs
          if (parsed && typeof parsed.diameter_d === 'number' && typeof parsed.materialId === 'string') {
            setInput(parsed);
          } else {
            alert("Uploaded file does not match the required DIN 743 structure.");
          }
        } catch (err) {
          alert("Could not decrypt loaded files. Assure the format is valid JSON.");
        }
      };
    }
  };

  const selectedMaterial = PRESET_MATERIALS.find(m => m.id === input.materialId) || PRESET_MATERIALS[0];
  const res = calculateDIN743(input, selectedMaterial);

  return (
    <div className="min-h-screen flex flex-col font-body bg-transparent text-[#1A1A2E]">
      
      {/* 56px sticky Navigation Header */}
      <header className="sticky top-0 z-50 h-[56px] bg-white border-b border-border shadow-sm no-print">
        <div className="max-w-[1400px] h-full mx-auto px-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#051C2C] text-white rounded-lg">
              <Compass className="w-5 h-5 text-accent animate-spin-slow" />
            </div>
            <span className="font-heading text-lg font-bold text-primary tracking-tight">
              DIN 743 <span className="text-xs text-gray-400 font-sans font-medium uppercase tracking-widest pl-1">Shaft Design</span>
            </span>
          </div>

          {/* Nav Sheet Tabs List */}
          <nav className="hidden md:flex items-center h-full gap-8">
            <button
              onClick={() => setActiveTab('guide')}
              className={`h-full border-b-2 text-xs font-semibold px-2 transition-all relative flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'border-accent text-primary'
                  : 'border-transparent text-gray-400 hover:text-primary'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              GUIDE
            </button>
            <button
              onClick={() => setActiveTab('input')}
              className={`h-full border-b-2 text-xs font-semibold px-2 transition-all relative flex items-center gap-1.5 ${
                activeTab === 'input'
                  ? 'border-accent text-primary'
                  : 'border-transparent text-gray-400 hover:text-primary'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              INPUTS
            </button>
            <button
              onClick={() => setActiveTab('reference')}
              className={`h-full border-b-2 text-xs font-semibold px-2 transition-all relative flex items-center gap-1.5 ${
                activeTab === 'reference'
                  ? 'border-accent text-primary'
                  : 'border-transparent text-gray-400 hover:text-primary'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              REFERENCE
            </button>
            <button
              onClick={() => setActiveTab('calculation')}
              className={`h-full border-b-2 text-xs font-semibold px-2 transition-all relative flex items-center gap-1.5 ${
                activeTab === 'calculation'
                  ? 'border-accent text-primary'
                  : 'border-transparent text-gray-400 hover:text-primary'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              CALCULATIONS
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`h-full border-b-2 text-xs font-semibold px-2 transition-all relative flex items-center gap-1.5 ${
                activeTab === 'results'
                  ? 'border-accent text-primary'
                  : 'border-transparent text-gray-400 hover:text-primary'
              }`}
            >
              <BookmarkCheck className="w-3.5 h-3.5" />
              RESULTS
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`h-full border-b-2 text-xs font-semibold px-2 transition-all relative flex items-center gap-1.5 ${
                activeTab === 'report'
                  ? 'border-accent text-primary'
                  : 'border-transparent text-gray-400 hover:text-primary'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              REPORT
            </button>
          </nav>
        </div>
      </header>

      {/* Floating high-level micro metrics belt */}
      <section className="bg-white border-b border-border py-4 no-print shadow-sm">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500 text-xs">Last saved:</span>
              <span className="font-mono font-bold text-xs text-primary">{lastSaved || 'Autosaving...'}</span>
            </div>

            <div className="h-4 w-[1px] bg-border hidden sm:block" />

            <div className="text-xs">
              <span className="text-gray-400 font-semibold block uppercase text-[9px] tracking-wider">Active Geometry</span>
              <span className="font-semibold text-primary">
                d={input.diameter_d}mm / D={input.stepDiameter_D}mm / r={input.radius_r}mm
              </span>
            </div>

            <div className="h-4 w-[1px] bg-border hidden sm:block" />

            <div className="text-xs">
              <span className="text-gray-400 font-semibold block uppercase text-[9px] tracking-wider">Applied Stress</span>
              <span className="font-semibold text-primary font-mono">
                σ_b = {res.stress_b.toFixed(1)} MPa / τ_t = {res.stress_t.toFixed(1)} MPa
              </span>
            </div>
          </div>

          {/* Quick Dynamic Status Badge + Operations Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Visual Capsule indicators of pass-fail */}
            <div className={`px-4 py-1.5 rounded-full font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm ${
              res.isPass ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {res.isPass ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {res.isPass ? 'FATIGUE PASS' : 'FATIGUE FAIL'} (S = {res.S_combined.toFixed(2)})
            </div>

            {/* Admin Utility actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportBackup}
                title="Export current input variables as backup JSON file"
                className="p-2 text-gray-500 hover:text-accent hover:bg-gray-100 rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
              </button>
              
              <label 
                title="Import existing shaft input variables backup file"
                className="p-2 text-gray-500 hover:text-accent hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
              >
                <Upload className="w-4 h-4" />
                <input 
                  type="file" 
                  accept=".json" 
                  onChange={handleImportBackup} 
                  className="hidden" 
                />
              </label>

              <button
                onClick={handleReset}
                title="Revert calculation variables to standard state"
                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container Content */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-10 py-10">
        
        {/* Dynamic page tab renderer */}
        {activeTab === 'guide' && <GuideTab />}
        {activeTab === 'input' && <InputTab input={input} setInput={setInput} onReset={handleReset} />}
        {activeTab === 'reference' && <ReferenceTab />}
        {activeTab === 'calculation' && <CalculationTab input={input} />}
        {activeTab === 'results' && <ResultsTab input={input} setInput={setInput} />}
        {activeTab === 'report' && <ReportTab input={input} />}

      </main>

      {/* Modern footer bar */}
      <footer className="bg-white border-t border-border py-4 text-center text-gray-400 text-[11px] no-print">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>DIN 743 Mathematical Suite © {new Date().getFullYear()} Operational CAD Module</span>
          <span className="font-mono">Standards Reference Part 1: Bending, Symmetrical Fatigue</span>
        </div>
      </footer>
    </div>
  );
}
