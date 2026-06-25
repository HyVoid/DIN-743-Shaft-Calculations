import { Material, CalculatorInput } from './types';

export const PRESET_MATERIALS: Material[] = [
  {
    id: '17-4PH',
    name: '17-4PH Precipitation Hardening Stainless Steel (H1150)',
    Rm: 1100,
    Re: 950,
    sigmaWb: 480,
    tauWt: 280
  },
  {
    id: 'SS316',
    name: 'SS316 (1.4401) Austenite Stainless Steel',
    Rm: 550,
    Re: 240,
    sigmaWb: 240,
    tauWt: 140
  },
  {
    id: 'SS304',
    name: 'SS304 (1.4301) Classic Stainless Steel',
    Rm: 520,
    Re: 210,
    sigmaWb: 220,
    tauWt: 130
  },
  {
    id: 'F51',
    name: 'Duplex F51 (1.4462) S31803 Special Steel',
    Rm: 750,
    Re: 450,
    sigmaWb: 340,
    tauWt: 200
  },
  {
    id: 'F53',
    name: 'Super Duplex F53 (1.4410) S32750 Heavy Steel',
    Rm: 800,
    Re: 550,
    sigmaWb: 360,
    tauWt: 210
  },
  {
    id: 'C45',
    name: 'C45 (1.0503) Medium Carbon Steel (Standard)',
    Rm: 650,
    Re: 360,
    sigmaWb: 290,
    tauWt: 170
  },
  {
    id: '42CrMo4',
    name: '42CrMo4 (1.7225) Alloy Steel (Special)',
    Rm: 1000,
    Re: 900,
    sigmaWb: 450,
    tauWt: 260
  }
];

export const INITIAL_INPUT: CalculatorInput = {
  projectName: 'Project Alpha High-Pressure Valve Upgrade',
  valveModel: 'VHD-DN150-PN160',
  shaftSectionId: 'Shaft-Fillet-Sec01',
  materialId: '17-4PH',
  sectionType: 'fillet',
  diameter_d: 35.0,
  stepDiameter_D: 42.0,
  radius_r: 3.0,
  moment_Mb: 150000.0,
  torque_T: 250000.0,
  serviceFactor_KA: 1.15,
  requiredSafety_Smin: 1.50,
  roughness_Rz: 6.3
};
