import React from 'react';
import { MathText } from "../../MathText";

// ==========================================
// ASSET 1: M2 KINEMATICS MASTER VISUALS
// ==========================================
export const M2KinematicsMaster: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {/* ROW 1: VELOCITY-TIME GRAPH SHAPES */}
      <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
        <h4 className="text-sm font-semibold text-slate-400 mb-4 tracking-wider uppercase">
          Motion Characterization on Velocity-Time Axes
        </h4>
        <svg 
          viewBox="0 0 900 240" 
          className="w-full h-auto select-none"
          shapeRendering="geometricPrecision"
        >
          {/* GRAPH A: STATIONARY */}
          <g transform="translate(30, 20)" className="group cursor-pointer">
            <line x1="0" y1="160" x2="220" y2="160" stroke="#475569" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="180" stroke="#475569" strokeWidth="2" />
            <foreignObject x="0" y="0" width="40" height="30">
              <MathText content="v" className="text-slate-400 text-sm group-hover:text-rose-400 transition-colors" />
            </foreignObject>
            <foreignObject x="210" y="165" width="20" height="30">
              <MathText content="t" className="text-slate-400 text-sm" />
            </foreignObject>
            <line x1="20" y1="160" x2="200" y2="160" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-rose-400 transition-all duration-300" />
            <foreignObject x="40" y="80" width="160" height="50">
              <div className="text-center p-1 bg-slate-900/80 border border-rose-950 rounded text-xs text-rose-400 font-medium shadow-lg transition-transform group-hover:-translate-y-1">
                Stationary (<MathText content="v = 0" />)<br />
                <span className="text-[10px] text-slate-500">Stays on the time axis</span>
              </div>
            </foreignObject>
          </g>

          {/* GRAPH B: CONSTANT VELOCITY */}
          <g transform="translate(330, 20)" className="group cursor-pointer">
            <line x1="0" y1="160" x2="220" y2="160" stroke="#475569" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="180" stroke="#475569" strokeWidth="2" />
            <foreignObject x="0" y="0" width="40" height="30">
              <MathText content="v" className="text-slate-400 text-sm group-hover:text-amber-400 transition-colors" />
            </foreignObject>
            <foreignObject x="210" y="165" width="20" height="30">
              <MathText content="t" className="text-slate-400 text-sm" />
            </foreignObject>
            <line x1="20" y1="70" x2="200" y2="70" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-amber-300 transition-all duration-300" />
            <foreignObject x="40" y="85" width="160" height="65">
              <div className="text-center p-1 bg-slate-900/80 border border-amber-950 rounded text-xs text-amber-400 font-medium shadow-lg transition-transform group-hover:-translate-y-1">
                Constant Velocity (<MathText content="a = 0" />)<br />
                <span className="text-[10px] text-slate-400 italic">Pitfall: Object is moving!</span>
              </div>
            </foreignObject>
          </g>

          {/* GRAPH C: UNIFORM ACCELERATION */}
          <g transform="translate(630, 20)" className="group cursor-pointer">
            <line x1="0" y1="160" x2="220" y2="160" stroke="#475569" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="180" stroke="#475569" strokeWidth="2" />
            <foreignObject x="0" y="0" width="40" height="30">
              <MathText content="v" className="text-slate-400 text-sm group-hover:text-emerald-400 transition-colors" />
            </foreignObject>
            <foreignObject x="210" y="165" width="20" height="30">
              <MathText content="t" className="text-slate-400 text-sm" />
            </foreignObject>
            <line x1="20" y1="160" x2="200" y2="40" stroke="#10b981" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-emerald-300 transition-all duration-300" />
            <foreignObject x="40" y="70" width="160" height="50">
              <div className="text-center p-1 bg-slate-900/80 border border-emerald-950 rounded text-xs text-emerald-400 font-medium shadow-lg transition-transform group-hover:-translate-y-1">
                Constant Acceleration<br />
                <span className="text-[10px] text-slate-400">Linear Slope = Constant <MathText content="a" /></span>
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* ROW 2: ASYMMETRICAL TRIANGLE MODEL */}
      <div className="border-t border-slate-800 pt-6">
        <h4 className="text-sm font-semibold text-slate-400 mb-4 tracking-wider uppercase">
          Asymmetric Triangular Journey Profile
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 group cursor-crosshair">
            <svg 
              viewBox="0 0 600 240" 
              className="w-full h-auto select-none"
              shapeRendering="geometricPrecision"
            >
              <polygon points="50,200 290,50 530,200" fill="url(#m2EmeraldGrad)" className="opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
              <line x1="30" y1="200" x2="560" y2="200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
              <line x1="50" y1="20" x2="50" y2="220" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
              
              <line x1="290" y1="50" x2="290" y2="200" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" className="group-hover:stroke-emerald-500/50 transition-colors" />
              <line x1="50" y1="50" x2="290" y2="50" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
              
              <line x1="50" y1="200" x2="290" y2="50" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="290" y1="50" x2="530" y2="200" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />

              <foreignObject x="20" y="10" width="30" height="30">
                <MathText content="v" className="text-slate-400 font-bold" />
              </foreignObject>
              <foreignObject x="565" y="190" width="20" height="30">
                <MathText content="t" className="text-slate-400 font-bold" />
              </foreignObject>
              <foreignObject x="15" y="40" width="35" height="30">
                <MathText content="V" className="text-emerald-400 font-bold text-right group-hover:text-emerald-300 transition-colors" />
              </foreignObject>
              <foreignObject x="282" y="205" width="25" height="30">
                <MathText content="T" className="text-slate-400 text-sm" />
              </foreignObject>
              <foreignObject x="515" y="205" width="40" height="30">
                <MathText content="120" className="text-rose-400 font-bold" />
              </foreignObject>

              <foreignObject x="220" y="110" width="180" height="40">
                <div className="text-center text-xs text-emerald-400 font-bold bg-slate-950/90 py-1 px-2 border border-emerald-500/20 rounded shadow-lg group-hover:border-emerald-500/50 transition-colors">
                  Area = Displacement = 1500 m
                </div>
              </foreignObject>
              <defs>
                <linearGradient id="m2EmeraldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg space-y-2 shadow-md">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Symmetry Alert
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              The peak time <MathText content="T" /> is intentionally asymmetric. Do not assume deceleration mirrors acceleration. The formula <MathText content="\text{Area} = \frac{1}{2}\text{bh}" /> holds true regardless of graph balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
// ==========================================
// ASSET 2: GRAVITY SIGN CONVENTION PANEL
// ==========================================
export const M2GravitySignConvention: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 my-2 hover:border-slate-700/80 transition-colors">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-2/5 space-y-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
            CCEA Sign-Convention Policy
          </span>
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Vertical Axis Freefall Reference</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Gravity always vectors downwards. Choosing your positive reference direction fixes the structural sign of <MathText content="a" /> in your calculations.
          </p>
          <div className="p-2 mt-2 bg-rose-950/30 border border-rose-900/40 rounded text-[11px] text-rose-300">
            <strong>Exam Warning:</strong> Submitting two independent workflows with differing sign allocations to "guess" the mark scheme triggers the <em>Poorest Attempt Rule</em>, zeroing the question score.
          </div>
        </div>

        <div className="w-full md:w-3/5 flex justify-center bg-slate-950 p-4 rounded-lg border border-slate-900 shadow-inner">
          <svg viewBox="0 0 500 180" className="w-full max-w-[500px] h-auto select-none" shapeRendering="geometricPrecision">
            {/* PHYSICS DIRECTIVE */}
            <g transform="translate(20, 10)">
              <text x="0" y="20" fill="#64748b" className="text-[10px] font-bold uppercase tracking-wider">Physical Direction</text>
              <line x1="45" y1="40" x2="45" y2="130" stroke="#475569" strokeWidth="2" />
              <path d="M 40 115 L 45 130 L 50 115 Z" fill="#f43f5e" />
              <foreignObject x="60" y="70" width="80" height="40">
                <div className="text-xs font-bold text-rose-400">
                  g Field acts<br />Strictly Down
                </div>
              </foreignObject>
            </g>

            {/* FRAME A */}
            <g transform="translate(180, 10)" className="group cursor-pointer">
              <rect x="0" y="0" width="140" height="145" rx="6" fill="#090d16" stroke="#1e293b" className="group-hover:stroke-emerald-900 transition-colors" />
              <text x="10" y="20" fill="#94a3b8" className="text-[9px] font-bold uppercase">Setup A: Upwards +</text>
              <line x1="30" y1="115" x2="30" y2="45" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" className="group-hover:stroke-emerald-400 transition-colors" />
              <path d="M 26 55 L 30 40 L 34 55 Z" fill="#10b981" />
              <text x="27" y="34" fill="#10b981" className="text-xs font-bold">+</text>
              <foreignObject x="50" y="65" width="80" height="40">
                <MathText content="a = -9.8" className="text-emerald-400 font-bold text-xs" />
                <span className="text-[9px] text-slate-500 block">m s⁻²</span>
              </foreignObject>
            </g>

            {/* FRAME B */}
            <g transform="translate(340, 10)" className="group cursor-pointer">
              <rect x="0" y="0" width="140" height="145" rx="6" fill="#090d16" stroke="#1e293b" className="group-hover:stroke-amber-900 transition-colors" />
              <text x="10" y="20" fill="#94a3b8" className="text-[9px] font-bold uppercase">Setup B: Downwards +</text>
              <line x1="30" y1="45" x2="30" y2="115" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" className="group-hover:stroke-amber-400 transition-colors" />
              <path d="M 26 100 L 30 115 L 34 100 Z" fill="#f59e0b" />
              <text x="27" y="130" fill="#f59e0b" className="text-xs font-bold">+</text>
              <foreignObject x="50" y="65" width="80" height="40">
                <MathText content="a = +9.8" className="text-amber-400 font-bold text-xs" />
                <span className="text-[9px] text-slate-500 block">m s⁻²</span>
              </foreignObject>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ASSET 3: DIAGNOSTIC EXPANSION (MAGNITUDE TRAP)
// ==========================================
export const M2VectorMagnitudeTrap: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-amber-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-5 rounded-xl shadow-xl my-4">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2 space-y-3">
          <div className="inline-flex items-center bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
            High-Yield Diagnostic Node
          </div>
          <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wide">The Vector Magnitude Distance Requirement</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            If a 2D vector kinematics question specifically requests the scalar <strong>distance</strong> between two coordinate vectors, calculating the displacement expression <MathText content="\mathbf{s} = x\mathbf{i} + y\mathbf{j}" /> is an uncompleted step. You must calculate the modulus vector magnitude to close the loop.
          </p>
          <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
            <span className="text-[10px] text-slate-500 block font-bold uppercase tracking-wider">Magnitude Resolving Expression:</span>
            <div className="text-xs font-mono text-emerald-400 mt-1">
              <MathText content="\text{Distance} = |\mathbf{s}| = \sqrt{x^2 + y^2}" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-slate-950/40 p-4 rounded-lg border border-slate-900/60 flex justify-center group cursor-crosshair">
          <svg viewBox="0 0 320 200" className="w-full max-w-[320px] h-auto select-none" shapeRendering="geometricPrecision">
            <line x1="40" y1="160" x2="280" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="40" y1="40" x2="40" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
            
            {/* Vector Base Foundations */}
            <line x1="40" y1="160" x2="240" y2="160" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-blue-400 transition-colors" />
            <line x1="240" y1="160" x2="240" y2="40" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-indigo-400 transition-colors" />
            
            {/* Hypotenuse Vector Resultant */}
            <line x1="40" y1="160" x2="240" y2="40" stroke="#10b981" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-emerald-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
            
            {/* Direction Arrows */}
            <path d="M 145 160 L 135 156 L 135 164 Z" fill="#3b82f6" className="group-hover:fill-blue-400 transition-colors" />
            <path d="M 240 95 L 236 105 L 244 105 Z" fill="#6366f1" className="group-hover:fill-indigo-400 transition-colors" />
            <path d="M 143 98 L 133 99 L 140 106 Z" fill="#10b981" className="group-hover:fill-emerald-300 transition-colors" />

            <foreignObject x="120" y="165" width="40" height="30">
              <MathText content="x\mathbf{i}" className="text-blue-400 font-bold text-center text-xs" />
            </foreignObject>
            <foreignObject x="248" y="90" width="40" height="30">
              <MathText content="y\mathbf{j}" className="text-indigo-400 font-bold text-left text-xs" />
            </foreignObject>
            
            <foreignObject x="60" y="70" width="100" height="35">
              <div className="text-[11px] font-bold text-emerald-400 bg-slate-900 px-1 py-0.5 border border-emerald-500/20 rounded text-center shadow-lg group-hover:bg-emerald-950/80 transition-colors">
                <MathText content="|\mathbf{s}| = \sqrt{x^2+y^2}" />
              </div>
            </foreignObject>
            <path d="M 230 160 L 230 150 L 240 150" fill="none" stroke="#475569" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ASSET 4: DIAGNOSTIC EXPANSION (INITIAL VELOCITY TRAP) - ADDED FOR CCEA
// ==========================================
export const M2InitialVelocityTrap: React.FC = () => {
  return (
    <div className="w-full bg-rose-950/20 p-5 rounded-xl border border-rose-900/40 my-4">
      <h4 className="text-sm font-bold text-rose-400 uppercase tracking-wide mb-4">Exam Trap: "Assuming Starts from Rest"</h4>
      <div className="flex items-center justify-center bg-slate-950 p-4 rounded border border-slate-900">
        <svg viewBox="0 0 500 150" className="w-full max-w-[400px] h-auto select-none">
          <line x1="30" y1="120" x2="350" y2="120" stroke="#475569" strokeWidth="2" />
          <line x1="50" y1="20" x2="50" y2="140" stroke="#475569" strokeWidth="2" />
          {/* Wrong Assumption */}
          <line x1="50" y1="120" x2="250" y2="20" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
          <foreignObject x="260" y="20" width="120" height="30">
            <div className="text-[10px] text-rose-400 font-bold bg-slate-900 p-1 rounded border border-rose-900/50">FATAL: Assuming u=0</div>
          </foreignObject>
          {/* Correct Intercept */}
          <line x1="50" y1="80" x2="320" y2="20" stroke="#10b981" strokeWidth="3" />
          <foreignObject x="15" y="70" width="30" height="30">
            <MathText content="u" className="text-emerald-400 font-bold text-right" />
          </foreignObject>
          <foreignObject x="25" y="10" width="20" height="30"><MathText content="v" className="text-slate-400 text-xs" /></foreignObject>
          <foreignObject x="355" y="110" width="20" height="30"><MathText content="t" className="text-slate-400 text-xs" /></foreignObject>
        </svg>
      </div>
    </div>
  );
};

// ==========================================
// MASTER EXPORT COMPONENT
// ==========================================
export const M2VisualsCollector: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-8">
      <M2KinematicsMaster />
      <M2GravitySignConvention />
      <M2InitialVelocityTrap />
      <M2VectorMagnitudeTrap />
    </div>
  );
};

export default M2VisualsCollector;