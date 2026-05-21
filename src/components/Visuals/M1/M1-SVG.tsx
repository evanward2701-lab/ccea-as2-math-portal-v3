import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';

// ==========================================
// Fig 1. The F=ma Bridge
// ==========================================
export const FmaBridgeSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. The F=ma Bridge"
    analysis={
      <p className="text-sm text-slate-400 italic text-center max-w-md mx-auto">
        Newton’s Second Law links the forces acting on a particle to its resulting acceleration.
      </p>
    }
  >
    <svg width="600" height="180" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-bridge" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b" />
        </marker>
      </defs>

      {/* Blocks */}
      <rect x="20" y="50" width="160" height="80" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="220" y="50" width="160" height="80" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="2" />
      <rect x="420" y="50" width="160" height="80" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />

      {/* Block Content */}
      <foreignObject x="25" y="60" width="150" height="60">
        <div className="text-center flex flex-col justify-center h-full">
          <span className="font-bold text-sky-400 text-base">Forces</span>
          <span className="text-xs text-slate-400 mt-1">Vector magnitude / direction</span>
        </div>
      </foreignObject>

      <foreignObject x="225" y="60" width="150" height="60">
        <div className="text-center flex flex-col justify-center h-full">
          <span className="font-bold text-emerald-300 text-lg"><MathText content="F = ma" /></span>
          <span className="text-xs text-slate-400 mt-1">Newton’s 2nd Law</span>
        </div>
      </foreignObject>

      <foreignObject x="425" y="60" width="150" height="60">
        <div className="text-center flex flex-col justify-center h-full">
          <span className="font-bold text-amber-400 text-base">Motion</span>
          <span className="text-xs text-slate-400 mt-1">Acceleration links to velocity/displacement</span>
        </div>
      </foreignObject>

      {/* Arrows */}
      <line x1="185" y1="90" x2="215" y2="90" stroke="#64748b" strokeWidth="3" markerStart="url(#arrow-bridge)" markerEnd="url(#arrow-bridge)" />
      <line x1="385" y1="90" x2="415" y2="90" stroke="#64748b" strokeWidth="3" markerStart="url(#arrow-bridge)" markerEnd="url(#arrow-bridge)" />
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram 2: Scalar vs Vector Distance and Displacement
// ==========================================
export const ScalarVectorSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Scalar vs Vector"
    analysis={
      <>
        <p className="text-sm text-slate-400 italic text-center max-w-lg mx-auto mb-4">
          Displacement includes direction relative to the origin, making it a vector. Distance is a scalar and is always positive.
        </p>
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-xl">
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-rose-400 mb-2">Displacement</h4>
            <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside">
              <li>A <strong className="font-semibold">vector</strong> quantity.</li>
              <li>Measures directional change from the origin.</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-amber-400 mb-2">Distance</h4>
            <ul className="space-y-1 text-sm text-slate-300 list-disc list-inside">
              <li>A <strong className="font-semibold">scalar</strong> quantity.</li>
              <li>Measures the total path length travelled.</li>
            </ul>
          </div>
        </div>
      </>
    }
  >
    <svg width="100%" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-2xl" overflow="visible">
      <defs>
        <marker id="arrow-positive" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" />
        </marker>
        <marker id="arrow-displacement" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 10 1.5 L 2 5 L 10 8.5 z" fill="#f43f5e" />
        </marker>
      </defs>

      {/* Coordinate Axis Line */}
      <line x1="50" y1="100" x2="550" y2="100" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Positive Direction Arrow */}
      <line x1="450" y1="70" x2="520" y2="70" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-positive)" />
      <foreignObject x="430" y="45" width="110" height="20">
        <div className="text-center text-xs font-bold text-sky-400">Positive Direction</div>
      </foreignObject>
      
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

      {/* Displacement Vector */}
      <path d="M 345 100 L 155 100" stroke="#f43f5e" strokeWidth="3" markerEnd="url(#arrow-displacement)" />
      <foreignObject x="160" y="105" width="180" height="35">
        <div className="text-center text-rose-400 text-xs">
          <span className="font-bold">Displacement</span> <MathText content="\mathbf{s} = -3\text{ m}" />
        </div>
      </foreignObject>

      {/* Distance Arc Path */}
      <path d="M 150 100 C 200 40, 300 40, 350 100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" fill="none" />
      <foreignObject x="160" y="0" width="180" height="35">
        <div className="text-center text-amber-500 text-xs">
          <span className="font-bold">Distance</span> <MathText content="d = 3\text{ m}" />
        </div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram: Scalar vs Vector Spatial Map
// ==========================================
export const ScalarVectorSpatialMapSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Distance vs. Displacement"
    analysis={
      <div className="grid md:grid-cols-2 gap-4 w-full max-w-xl">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2">Speed (Scalar)</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">Based on the total path length travelled.</p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="\text{Speed} = \frac{\text{Distance}}{\text{Time}}" />
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2">Velocity (Vector)</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">Based on the direct change in position.</p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="\text{Velocity} = \frac{\text{Displacement}}{\text{Time}}" />
          </div>
        </div>
      </div>
    }
  >
    <svg width="100%" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-lg" overflow="visible">
      <defs>
        <marker id="arrow-displacement-map" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
        </marker>
      </defs>

      {/* Points A and B */}
      <circle cx="80" cy="150" r="8" fill="#38bdf8" />
      <text x="76" y="155" className="font-bold text-slate-950 fill-current">A</text>
      <text x="70" y="175" className="text-xs text-slate-300 fill-current">Start</text>

      <circle cx="420" cy="50" r="8" fill="#38bdf8" />
      <text x="416" y="55" className="font-bold text-slate-950 fill-current">B</text>
      <text x="410" y="35" className="text-xs text-slate-300 fill-current">Finish</text>

      {/* Distance Path (Winding) */}
      <path d="M 85 145 C 150 80, 250 200, 350 120 C 450 40, 415 55, 415 55" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
      <foreignObject x="200" y="140" width="120" height="30">
        <div className="text-center text-amber-400 text-sm font-bold">
          Distance Travelled
        </div>
      </foreignObject>

      {/* Displacement Vector (Straight) */}
      <line x1="88" y1="146" x2="412" y2="54" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow-displacement-map)" />
      <foreignObject x="200" y="60" width="140" height="30">
        <div className="text-center text-emerald-400 text-sm font-bold">
          Displacement Vector
        </div>
      </foreignObject>

    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram 3: Mechanics Modelling Assumptions
// ==========================================
export const ModellingAssumptionsSVG: React.FC = () => (
  <div className="w-full flex flex-col my-8 relative border border-slate-800 bg-slate-950 p-6 rounded-xl shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Common Modelling Assumptions
    </div>
    <p className="text-sm text-slate-400 italic text-center mt-6 mb-2">
      Visualizing standard modelling assumptions used to simplify physical mechanics.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {/* Card 1: Particle */}
      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between shadow-inner">
        <span className="font-bold text-xs text-sky-400 uppercase tracking-wider mb-2">Particle</span>
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="my-2">
          <circle cx="60" cy="50" r="12" fill="#38bdf8" />
          <line x1="10" y1="50" x2="40" y2="50" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="110" y1="50" x2="80" y2="50" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
        <div className="text-xs text-slate-400 text-center bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-[72px] flex flex-col justify-center">
          <p className="leading-relaxed">Mass is concentrated at a single point. Rotational effects and air resistance are ignored.</p>
        </div>
      </div>

      {/* Card 2: Smooth Pulley */}
      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between shadow-inner">
        <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2">Smooth Pulley</span>
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="my-2">
          <circle cx="60" cy="40" r="22" stroke="#475569" strokeWidth="2.5" />
          <circle cx="60" cy="40" r="4" fill="#475569" />
          <path d="M 38 95 L 38 40 A 22 22 0 0 1 82 40 L 82 95" stroke="#10b981" strokeWidth="2.5" />
        </svg>
        <div className="text-xs text-slate-400 text-center bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-[72px] flex flex-col justify-center space-y-1">
          <p className="leading-relaxed">No friction at the axle, resulting in equal tension on both sides of the string.</p>
          <MathText content="T_1 = T_2" className="text-emerald-400 font-bold [&_p]:m-0" />
        </div>
      </div>

      {/* Card 3: Rough Surface */}
      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between shadow-inner">
        <span className="font-bold text-xs text-amber-500 uppercase tracking-wider mb-2">Rough Surface</span>
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="my-2">
          <line x1="10" y1="70" x2="110" y2="70" stroke="#64748b" strokeWidth="4" />
          {Array.from({ length: 11 }).map((_, idx) => (
            <line key={idx} x1={15 + idx * 9} y1="70" x2={10 + idx * 9} y2="78" stroke="#475569" strokeWidth="2" />
          ))}
          <rect x="30" y="40" width="60" height="30" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
        </svg>
        <div className="text-xs text-slate-400 text-center bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-[72px] flex flex-col justify-center space-y-1">
          <p className="leading-relaxed">A frictional force opposes the direction of motion (or intended motion).</p>
          <MathText content="F \leq \mu R" className="text-amber-500 font-bold [&_p]:m-0" />
        </div>
      </div>

      {/* Card 4: Inextensible String */}
      <div className="border border-slate-800 bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-between shadow-inner">
        <span className="font-bold text-xs text-rose-400 uppercase tracking-wider mb-2">Inextensible String</span>
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="my-2">
          <rect x="10" y="40" width="35" height="25" stroke="#64748b" strokeWidth="2" />
          <rect x="75" y="40" width="35" height="25" stroke="#64748b" strokeWidth="2" />
          <line x1="45" y1="52.5" x2="75" y2="52.5" stroke="#f43f5e" strokeWidth="3" />
        </svg>
        <div className="text-xs text-slate-400 text-center bg-slate-950 p-3 rounded w-full border border-slate-800 min-h-[72px] flex flex-col justify-center space-y-1">
          <p className="leading-relaxed">The string does not stretch, so connected particles have equal acceleration.</p>
          <MathText content="a_1 = a_2" className="text-rose-400 font-bold [&_p]:m-0" />
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// Diagram 4: Towing Model
// ==========================================
export const TowingModelSVG: React.FC = () => (
  <DiagramPanel
    title="Fig. Towing Dynamics"
    analysis={
      <div className="space-y-3">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2">Whole System</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            To find acceleration, treat both masses as one particle.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
            <MathText content="D - R_1 - R_2 = (m_1 + m_2)a" />
          </div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2">Isolated Mass</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            To find tension, apply Newton’s second law to one mass only.
          </p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60 space-y-2">
            <MathText content="F = ma" />
            <MathText content="T - R_1 = m_1a" />
          </div>
        </div>
      </div>
    }
  >
    <svg width="100%" viewBox="0 -10 500 190" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="max-w-xl" overflow="visible">
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

      {/* Rescue Truck Block */}
      <rect x="240" y="65" width="100" height="50" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" rx="4" />
      <circle cx="260" cy="120" r="10" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f172a" />
      <circle cx="320" cy="120" r="10" stroke="#e2e8f0" strokeWidth="1.5" fill="#0f172a" />
      <foreignObject x="260" y="78" width="60" height="20">
        <div className="text-center text-xs font-bold text-slate-300"><MathText content="m_2" /></div>
      </foreignObject>

      {/* Global Acceleration Vector Header */}
      <path d="M 180 25 L 260 25" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#force-green)" />
      <foreignObject x="270" y="15" width="20" height="20">
        <div className="text-center text-xs font-bold text-sky-400"><MathText content="a" /></div>
      </foreignObject>

      {/* Tension Force Vector Pairs */}
      <path d="M 140 98 L 180 98" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#force-green)" />
      <foreignObject x="150" y="70" width="20" height="25">
        <MathText content="T" className="text-emerald-400 text-xs font-bold" />
      </foreignObject>

      <path d="M 240 98 L 200 98" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#force-green)" />
      <foreignObject x="210" y="70" width="20" height="25">
        <MathText content="T" className="text-emerald-400 text-xs font-bold" />
      </foreignObject>
      
      {/* Truck Main Driving Force Vector */}
      <path d="M 340 98 L 390 98" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#force-amber)" />
      <foreignObject x="395" y="86" width="20" height="20">
        <div className="text-left text-xs font-bold text-amber-500"><MathText content="D" /></div>
      </foreignObject>

      {/* Friction/Resistive Vectors */}
      <path d="M 70 105 L 35 105" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#force-rose)" />
      <foreignObject x="10" y="108" width="25" height="20">
        <div className="text-right text-[10px] font-bold text-rose-400"><MathText content="R_1" /></div>
      </foreignObject>

      <path d="M 240 105 L 205 105" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#force-rose)" />
      <foreignObject x="180" y="108" width="25" height="20">
        <div className="text-right text-[10px] font-bold text-rose-400"><MathText content="R_2" /></div>
      </foreignObject>
    </svg>
  </DiagramPanel>
);

// ==========================================
// Diagram 5: Lift Physics
// ==========================================
export const LiftPhysicsSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-10 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Lift Physics Isolation
    </div>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-6 mt-4">
      {/* Box 1: Whole System Isolation */}
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center shadow-inner">
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-3 text-center">
          Isolation Mode A:<br/>Cable Tension
        </span>
        <svg width="160" height="220" viewBox="-10 -10 200 250" fill="none" shapeRendering="geometricPrecision" overflow="visible">
          <defs>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
            </marker>
            <marker id="arrow-rose" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
            </marker>
          </defs>
          
          <line x1="80" y1="5" x2="80" y2="55" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="30" y="55" width="100" height="120" stroke="#64748b" strokeWidth="2.5" fill="#1e293b" />
          
          <circle cx="80" cy="110" r="12" stroke="#475569" strokeWidth="1.5" fill="#334155" />
          <line x1="80" y1="122" x2="80" y2="155" stroke="#475569" strokeWidth="2" />
          <line x1="65" y1="165" x2="80" y2="155" stroke="#475569" strokeWidth="2" />
          <line x1="95" y1="165" x2="80" y2="155" stroke="#475569" strokeWidth="2" />

          <path d="M 80 55 L 80 10" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="92" y="10" width="20" height="20">
            <div className="text-xs font-bold text-emerald-400"><MathText content="T" /></div>
          </foreignObject>

          <path d="M 80 175 L 80 215" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
          <foreignObject x="92" y="218" width="90" height="30">
            <div className="text-xs font-bold text-rose-400"><MathText content="(M+m)g" /></div>
          </foreignObject>

          <path d="M 15 110 L 15 70" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="5" y="80" width="10" height="20">
            <div className="text-xs font-bold text-sky-400"><MathText content="a" /></div>
          </foreignObject>
        </svg>
        <div className="text-[12px] text-emerald-400 bg-slate-950 px-3 py-1 border border-slate-800 rounded mt-2 font-mono font-bold">
          <MathText content="T - (M+m)g = (M+m)a" />
        </div>
      </div>

      {/* Box 2: Passenger Isolation */}
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center shadow-inner">
        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3 text-center">
          Isolation Mode B:<br/>Floor Reaction
        </span>
        <svg width="160" height="220" viewBox="-10 -10 200 250" fill="none" shapeRendering="geometricPrecision" overflow="visible">
          <line x1="20" y1="155" x2="140" y2="155" stroke="#475569" strokeWidth="3" />
          
          <circle cx="80" cy="90" r="16" stroke="#e2e8f0" strokeWidth="2" fill="#1e293b" />
          <line x1="80" y1="106" x2="80" y2="145" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="60" y1="155" x2="80" y2="145" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="100" y1="155" x2="80" y2="145" stroke="#e2e8f0" strokeWidth="2" />

          {/* R: Reaction force, moved to the left of the figure, pointing up from head-level */}
          <path d="M 50 74 L 50 34" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="57" y="34" width="20" height="20">
            <div className="text-xs font-bold text-emerald-400"><MathText content="R" /></div>
          </foreignObject>

          {/* mg: Weight force, moved to the right, pointing down from floor-level */}
          <path d="M 110 155 L 110 195" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
          <foreignObject x="117" y="198" width="40" height="25">
            <div className="text-xs font-bold text-rose-400"><MathText content="mg" /></div>
          </foreignObject>

          <path d="M 15 100 L 15 60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-green)" />
          <foreignObject x="5" y="70" width="10" height="20">
            <div className="text-xs font-bold text-sky-400"><MathText content="a" /></div>
          </foreignObject>
        </svg>
        <div className="text-[12px] text-amber-400 bg-slate-950 px-3 py-1 border border-slate-800 rounded mt-2 font-mono font-bold">
          <MathText content="R - mg = ma" />
        </div>
      </div>
    </div>
    <div className="w-full px-6 mt-6">
      <div className="space-y-3">
        <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="font-bold text-sky-400">Cable Tension:</strong> To find tension <MathText content="T" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" />, model the lift and passenger as one combined system.
          </p>
        </div>
        <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="font-bold text-amber-400">Passenger Reaction:</strong> To find the normal reaction <MathText content="R" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" />, you must isolate the passenger only.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">Exam Pitfall:</strong> Do not include the internal reaction force <MathText content="R" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> in the whole-system equation for tension.
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// Diagram 6: CCEA Examiner Warning Trap (Restored)
// ==========================================
export const M1ExamTrapSVG: React.FC = () => (
  <div className="w-full border border-rose-500/40 bg-slate-950 p-6 rounded-xl my-8 relative overflow-hidden shadow-[8px_8px_0px_#4c0519]">
    <div className="absolute top-0 right-0 bg-rose-600 text-slate-50 text-[9px] uppercase tracking-widest font-black px-3 py-1 font-sans">
      CCEA Examiner Warning
    </div>
    <h4 className="text-rose-400 font-bold text-sm mb-2 uppercase tracking-wider mt-2">
      The Multiple Responses Penalty Rule
    </h4>
    <p className="text-xs text-slate-300 leading-relaxed mb-6">
      If you are unsure of a sign convention or mathematical method and present two competing solutions on your sheet without clearly crossing one out, 
      <strong className="text-rose-300"> CCEA examiners are required to mark all attempts and award marks based on the POOREST solution.</strong>
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      {/* Penalized Choice Column */}
      <div className="border border-rose-950/60 bg-rose-950/20 p-4 rounded-lg relative opacity-60">
        <div className="absolute top-2 right-2 text-rose-500 font-bold text-[9px] uppercase tracking-wider">Penalized</div>
        <span className="block font-bold text-slate-400 mb-2">Attempt 1: Upwards Positive</span>
        <code className="text-slate-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide mb-3 border border-slate-800">
          0 = 21 - 9.8t ⇒ t = 2.14s
        </code>
        <span className="block font-bold text-slate-400 mb-2">Attempt 2: Downwards Positive</span>
        <code className="text-slate-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide border border-slate-800">
          0 = 21 + 9.8t ⇒ t = -2.14s
        </code>
        <p className="text-[10px] text-rose-400/80 italic mt-3 leading-tight">
          Result: Both versions are scanned. Marks are restricted exclusively to the flawed calculation.
        </p>
      </div>

      {/* Correct Practice Column */}
      <div className="border border-emerald-900/60 bg-emerald-950/20 p-4 rounded-lg relative">
        <div className="absolute top-2 right-2 text-emerald-400 font-bold text-[9px] uppercase tracking-wider">Correct Practice</div>
        <span className="block font-bold text-slate-200 mb-2">Discarded Attempt</span>
        <div className="relative inline-block w-full mb-3">
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-rose-500/50 to-transparent h-0.5 top-1/2 transform -rotate-2" />
          <code className="text-slate-500 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide line-through decoration-rose-500/80 border border-slate-800">
            0 = 21 + 9.8t ⇒ t = -2.14s
          </code>
        </div>
        <span className="block font-bold text-slate-200 mb-2">Active Clean Solution</span>
        <code className="text-emerald-400 block font-mono text-[10px] bg-slate-950 p-2 rounded tracking-wide font-bold border border-emerald-900">
          0 = 21 - 9.8t ⇒ t = 2.14s ✓
        </code>
        <p className="text-[10px] text-emerald-400/80 italic mt-3 leading-tight">
          Result: Cross out flawed models with a single line to ensure only your intended work remains active.
        </p>
      </div>
    </div>
  </div>
);