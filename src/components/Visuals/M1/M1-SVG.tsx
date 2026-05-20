import React from 'react';
import { MathText } from '../../MathText';

// Diagram 2: Scalar vs Vector Distance and Displacement
export const ScalarVectorSVG: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 border border-slate-800 bg-slate-900 rounded-xl shadow-2xl my-8 transition-all hover:border-slate-700">
      <div className="w-full text-center mb-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kinematic Vector Foundations</span>
      </div>
      <svg width="100%" height="180" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
        <defs>
          <marker id="arrow-positive" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
          </marker>
          <marker id="arrow-displacement" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 10 1.5 L 2 5 L 10 8.5 z" fill="#f43f5e" />
          </marker>
        </defs>

        {/* Coordinate Axis Line */}
        <line x1="50" y1="100" x2="550" y2="100" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Reference Origin (Start Point) */}
        <circle cx="350" cy="100" r="5" fill="#e2e8f0" />
        <line x1="350" y1="90" x2="350" y2="110" stroke="#475569" strokeWidth="2" />
        <foreignObject x="320" y="115" width="60" height="30">
          <div className="text-center text-xs font-bold text-slate-200">Start (O)</div>
        </foreignObject>

        {/* End Position (Finish Point) */}
        <circle cx="150" cy="100" r="5" fill="#f43f5e" />
        <line x1="150" y1="90" x2="150" y2="110" stroke="#f43f5e" strokeWidth="2" />
        <foreignObject x="120" y="115" width="60" height="30">
          <div className="text-center text-xs font-bold text-rose-400">Finish</div>
        </foreignObject>

        {/* Positive Coordinate Reference Axis Indicator */}
        <path d="M 430 35 L 530 35" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-positive)" />
        <foreignObject x="410" y="10" width="140" height="25">
          <div className="text-center text-[10px] uppercase font-bold text-sky-400 tracking-wider">+ve Direction</div>
        </foreignObject>

        {/* Displacement Vector */}
        <path d="M 345 80 L 155 80" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow-displacement)" />
        <foreignObject x="180" y="48" width="150" height="30">
          <div className="text-center"><MathText content="\text{Displacement } \mathbf{s} = -3\text{ m}" /></div>
        </foreignObject>

        {/* Distance Arc Path */}
        <path d="M 350 100 C 300 160, 200 160, 150 100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
        <foreignObject x="190" y="150" width="150" height="30">
          <div className="text-center"><MathText content="\text{Distance } d = 3\text{ m}" /></div>
        </foreignObject>
      </svg>
    </div>
  );
};

// Diagram 3: Mechanics Modelling Assumptions
export const ModellingAssumptionsSVG: React.FC = () => {
  return (
    <div className="w-full flex flex-col my-8">
      <div className="w-full text-center mb-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">CCEA Core Modeling Criteria Matrix</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between hover:border-slate-700 transition-all">
          <span className="font-bold text-xs text-sky-400 uppercase tracking-wider mb-2">Particle</span>
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="my-2" shapeRendering="geometricPrecision">
            <circle cx="50" cy="30" r="4" fill="#38bdf8" />
            <line x1="10" y1="30" x2="40" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="90" y1="30" x2="60" y2="30" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
            <foreignObject x="10" y="40" width="80" height="20">
              <div className="text-center text-[8px] text-slate-400">Mass at point</div>
            </foreignObject>
          </svg>
          <div className="text-[11px] text-slate-400 text-center bg-slate-950 p-2 rounded w-full border border-slate-800">
            Dimensions negligible. Rotational effects ignored.
          </div>
        </div>

        <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between hover:border-slate-700 transition-all">
          <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Smooth Pulley</span>
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="my-2" shapeRendering="geometricPrecision">
            <circle cx="50" cy="25" r="12" stroke="#475569" strokeWidth="2" />
            <circle cx="50" cy="25" r="2" fill="#475569" />
            <path d="M 38 60 L 38 25 A 12 12 0 0 1 62 25 L 62 60" stroke="#10b981" strokeWidth="1.5" />
            {/* Replaced raw <text> with <foreignObject> */}
            <foreignObject x="20" y="35" width="20" height="20">
              <div className="text-center text-[10px] font-bold text-emerald-400"><MathText content="T" /></div>
            </foreignObject>
            <foreignObject x="60" y="35" width="20" height="20">
              <div className="text-center text-[10px] font-bold text-emerald-400"><MathText content="T" /></div>
            </foreignObject>
          </svg>
          <div className="text-[11px] text-slate-400 text-center bg-slate-950 p-2 rounded w-full border border-slate-800">
            No friction. Tension <MathText content="T" /> is uniform across string.
          </div>
        </div>

        <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between hover:border-slate-700 transition-all">
          <span className="font-bold text-xs text-amber-500 uppercase tracking-wider mb-2">Rough Surface</span>
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="my-2" shapeRendering="geometricPrecision">
            <line x1="10" y1="45" x2="90" y2="45" stroke="#64748b" strokeWidth="2" />
            {Array.from({ length: 9 }).map((_, idx) => (
              <line key={idx} x1={15 + idx * 8} y1="45" x2={10 + idx * 8} y2="52" stroke="#475569" strokeWidth="1" />
            ))}
            <rect x="35" y="25" width="30" height="20" stroke="#e2e8f0" strokeWidth="1.5" fill="#1e293b" />
            {/* Replaced raw <text> */}
            <foreignObject x="10" y="22" width="40" height="20">
              <div className="text-center text-[9px] font-bold text-amber-500">Friction</div>
            </foreignObject>
          </svg>
          <div className="text-[11px] text-slate-400 text-center bg-slate-950 p-2 rounded w-full border border-slate-800">
            Friction opposes motion. <MathText content="F \leq \mu R" />.
          </div>
        </div>

        <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between hover:border-slate-700 transition-all">
          <span className="font-bold text-xs text-rose-400 uppercase tracking-wider mb-2">Inextensible String</span>
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="my-2" shapeRendering="geometricPrecision">
            <rect x="15" y="25" width="20" height="15" stroke="#64748b" strokeWidth="1.5" />
            <rect x="65" y="25" width="20" height="15" stroke="#64748b" strokeWidth="1.5" />
            <line x1="35" y1="32" x2="65" y2="32" stroke="#f43f5e" strokeWidth="2" />
            {/* Replaced raw <text> */}
            <foreignObject x="5" y="42" width="40" height="20">
              <div className="text-center text-[9px] text-slate-400">accel <MathText content="a" /></div>
            </foreignObject>
            <foreignObject x="55" y="42" width="40" height="20">
              <div className="text-center text-[9px] text-slate-400">accel <MathText content="a" /></div>
            </foreignObject>
          </svg>
          <div className="text-[11px] text-slate-400 text-center bg-slate-950 p-2 rounded w-full border border-slate-800">
            String does not stretch. Acceleration magnitude (<MathText content="a" />) is identical.
          </div>
        </div>

      </div>
    </div>
  );
};


// Diagram 4: Towing Model (Expanded with Positive Convention Badge)
export const TowingModelSVG: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 px-4 my-6 border border-slate-800 bg-slate-900 relative rounded-xl shadow-2xl">
      <div className="absolute top-0 right-0 bg-slate-800 text-slate-300 px-3 py-1 text-[9px] uppercase tracking-widest font-bold border-l border-b border-slate-700 rounded-tr-xl rounded-bl-xl">
        Fig. Towing Dynamics
      </div>

      {/* NEW: Diagnostic Direction Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/50 px-2 py-1 rounded-md shadow-sm">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M2 8H12M12 8L8 4M12 8L8 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">+ve Motion</span>
        <span className="text-emerald-400 text-[10px] font-bold">&checkmark;</span>
      </div>
      
      <svg width="100%" height="180" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
        <defs>
          <marker id="force-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
          </marker>
          <marker id="force-rose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
          </marker>
          <marker id="force-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
          </marker>
        </defs>

        {/* Level Ground Plane */}
        <line x1="20" y1="130" x2="480" y2="130" stroke="#475569" strokeWidth="2" />
        {Array.from({ length: 23 }).map((_, idx) => (
          <line key={idx} x1={20 + idx * 20} y1="130" x2={15 + idx * 20} y2="138" stroke="#334155" strokeWidth="1" />
        ))}

        {/* Trailer / Car Block */}
        <rect x="70" y="80" width="70" height="35" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" rx="4" />
        <circle cx="85" cy="120" r="8" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f172a" />
        <circle cx="125" cy="120" r="8" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f172a" />
        <foreignObject x="75" y="87" width="60" height="20">
          <div className="text-center text-xs font-bold text-slate-300"><MathText content="m_1" /></div>
        </foreignObject>

        {/* Rigid Tow Bar Link */}
        <line x1="140" y1="98" x2="240" y2="98" stroke="#cbd5e1" strokeWidth="3" />
        <foreignObject x="160" y="73" width="70" height="20">
          <div className="text-center text-[10px] text-slate-400 font-medium">Light Bar</div>
        </foreignObject>

        {/* Rescue Truck Block */}
        <rect x="240" y="65" width="100" height="50" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" rx="4" />
        <circle cx="260" cy="120" r="10" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f172a" />
        <circle cx="320" cy="120" r="10" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f172a" />
        <foreignObject x="260" y="78" width="60" height="20">
          <div className="text-center text-xs font-bold text-slate-300"><MathText content="m_2" /></div>
        </foreignObject>

        {/* Global Acceleration Vector Header */}
        <path d="M 180 25 L 260 25" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#force-green)" strokeDasharray="3 1" />
        <foreignObject x="200" y="5" width="40" height="20">
          <div className="text-center text-xs font-bold text-sky-400"><MathText content="a" /></div>
        </foreignObject>

        {/* Tension Force Vector Pairs */}
        <path d="M 145 98 L 175 98" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#force-green)" />
        <foreignObject x="150" y="102" width="20" height="20">
            <div className="text-center text-[10px] font-bold text-emerald-400"><MathText content="T" /></div>
        </foreignObject>

        <path d="M 235 98 L 205 98" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#force-green)" />
        <foreignObject x="210" y="102" width="20" height="20">
            <div className="text-center text-[10px] font-bold text-emerald-400"><MathText content="T" /></div>
        </foreignObject>

        {/* Truck Main Driving Force Vector */}
        <path d="M 340 90 L 390 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#force-amber)" />
        <foreignObject x="395" y="78" width="20" height="20">
          <div className="text-left text-xs font-bold text-amber-500"><MathText content="D" /></div>
        </foreignObject>

        {/* Friction/Resistive Vectors */}
        <path d="M 70 105 L 35 105" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#force-rose)" />
        <foreignObject x="10" y="93" width="25" height="20">
          <div className="text-right text-[10px] font-bold text-rose-400"><MathText content="R_1" /></div>
        </foreignObject>

        <path d="M 240 105 L 205 105" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#force-rose)" />
        <foreignObject x="180" y="108" width="25" height="20">
          <div className="text-right text-[10px] font-bold text-rose-400"><MathText content="R_2" /></div>
        </foreignObject>
      </svg>

      <div className="mt-2 bg-slate-950 p-3 border border-slate-800 rounded-lg w-full text-left space-y-1">
        <p className="text-[11px] text-slate-300">
          <span className="text-amber-500 font-bold">Whole System Equation:</span> <MathText content="D - R_1 - R_2 = (m_1 + m_2)a" />
        </p>
        <p className="text-[11px] text-slate-300">
          <span className="text-emerald-400 font-bold">Isolated Trailed Mass Equation:</span> <MathText content="T - R_1 = m_1a" />
        </p>
      </div>
    </div>
  );
};

// Diagram 5: Lift Physics (Expanded with Positive Convention Badge)
export const LiftPhysicsSVG: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-slate-800 bg-slate-900 rounded-xl shadow-2xl my-6">
      
      {/* Box 1: Whole System Isolation */}
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-850 flex flex-col items-center relative">
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 text-center">
          Isolation Mode A:<br/>Cable Tension
        </span>

        {/* NEW: Diagnostic Direction Badge (Upwards) */}
        <div className="absolute top-2 left-2 flex flex-col items-center gap-1 bg-emerald-950/40 border border-emerald-900/50 p-1.5 rounded-md shadow-sm">
          <svg width="10" height="14" viewBox="0 0 10 16" fill="none">
            <path d="M5 14L5 2M5 2L1 6M5 2L9 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">+ve</span>
        </div>

        <svg width="160" height="220" viewBox="0 0 160 220" fill="none" shapeRendering="geometricPrecision">
          <defs>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
            <marker id="arrow-rose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
          </defs>
          
          <line x1="80" y1="5" x2="80" y2="45" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="30" y="45" width="100" height="120" stroke="#64748b" strokeWidth="2.5" fill="#1e293b" />
          
          <circle cx="80" cy="100" r="12" stroke="#475569" strokeWidth="1.5" fill="#334155" />
          <line x1="80" y1="112" x2="80" y2="145" stroke="#475569" strokeWidth="2" />
          <line x1="65" y1="155" x2="80" y2="145" stroke="#475569" strokeWidth="2" />
          <line x1="95" y1="155" x2="80" y2="145" stroke="#475569" strokeWidth="2" />

          <path d="M 80 40 L 80 10" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="92" y="10" width="20" height="20">
            <div className="text-xs font-bold text-emerald-400"><MathText content="T" /></div>
          </foreignObject>

          <path d="M 80 130 L 80 195" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
          <foreignObject x="92" y="175" width="60" height="25">
            <div className="text-xs font-bold text-rose-400"><MathText content="(M+m)g" /></div>
          </foreignObject>

          <path d="M 15 110 L 15 70" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="5" y="80" width="10" height="20">
            <div className="text-xs font-bold text-sky-400"><MathText content="a" /></div>
          </foreignObject>
        </svg>
        <div className="text-[10px] text-slate-400 text-center mt-2 font-serif italic border-t border-slate-800 pt-2 w-full">
          <MathText content="T - (M+m)g = (M+m)a" />
        </div>
      </div>

      {/* Box 2: Passenger Isolation */}
      <div className="bg-slate-950 p-4 rounded-lg border border-slate-850 flex flex-col items-center relative">
        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3 text-center">
          Isolation Mode B:<br/>Floor Reaction
        </span>

        {/* NEW: Diagnostic Direction Badge (Upwards) */}
        <div className="absolute top-2 left-2 flex flex-col items-center gap-1 bg-emerald-950/40 border border-emerald-900/50 p-1.5 rounded-md shadow-sm">
          <svg width="10" height="14" viewBox="0 0 10 16" fill="none">
            <path d="M5 14L5 2M5 2L1 6M5 2L9 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">+ve</span>
        </div>

        <svg width="160" height="220" viewBox="0 0 160 220" fill="none" shapeRendering="geometricPrecision">
          <line x1="20" y1="155" x2="140" y2="155" stroke="#475569" strokeWidth="3" />
          
          <circle cx="80" cy="80" r="16" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
          <line x1="80" y1="96" x2="80" y2="145" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="60" y1="155" x2="80" y2="145" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="100" y1="155" x2="80" y2="145" stroke="#e2e8f0" strokeWidth="2" />

          <path d="M 80 155 L 80 105" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="92" y="115" width="20" height="20">
            <div className="text-xs font-bold text-emerald-400"><MathText content="R" /></div>
          </foreignObject>

          <path d="M 80 110 L 80 190" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
          <foreignObject x="92" y="170" width="30" height="20">
            <div className="text-xs font-bold text-rose-400"><MathText content="mg" /></div>
          </foreignObject>

          <path d="M 15 100 L 15 60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="5" y="70" width="10" height="20">
            <div className="text-xs font-bold text-sky-400"><MathText content="a" /></div>
          </foreignObject>
        </svg>
        <div className="text-[10px] text-slate-400 text-center mt-2 font-serif italic border-t border-slate-800 pt-2 w-full">
          <MathText content="R - mg = ma" />
        </div>
      </div>

    </div>
  );
};