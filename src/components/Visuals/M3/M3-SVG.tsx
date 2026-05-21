import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';

// Constants for label offsets
const LABEL_OFFSET_X = 15;
const LABEL_OFFSET_Y_ABOVE = -15;
const LABEL_OFFSET_Y_BELOW = 15;
const LABEL_OFFSET_X_RIGHT = 15;

export const RoughHorizontalPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Single Particle Resolving"
    analysis={
      <div className="space-y-3">
        <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed text-center italic">
            Always draw a comprehensive force diagram before resolving. Acceleration dictates the positive direction.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Never confuse mass (<MathText content="m" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" />) with weight (<MathText content="mg" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" />) in your diagrams or equations.
        </div>
      </div>
    }
  >
    <svg width="500" height="250" viewBox="100 20 450 230" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="arrow-rose" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f43f5e" />
        </marker>
        <marker id="accel-double" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" />
        </marker>
      </defs>

      {/* Ground Plane & Roughness */}
      <line x1="100" y1="160" x2="500" y2="160" stroke="#334155" strokeWidth="3" />
      <path d="M150 160 L140 172 M200 160 L190 172 M250 160 L240 172 M300 160 L290 172 M350 160 L340 172 M400 160 L390 172 M450 160 L440 172" stroke="#1e293b" strokeWidth="2" />

      {/* Particle Block */}
      <rect x="250" y="100" width="100" height="60" fill="#0f172a" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all duration-300" />
      <foreignObject x="285" y="115" width="30" height="30">
        <MathText content="m" className="text-center text-slate-300" />
      </foreignObject>

      {/* Normal Reaction Force R */}
      <line x1="300" y1="100" x2="300" y2="35" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x={300 + LABEL_OFFSET_X_RIGHT} y={35 + LABEL_OFFSET_Y_ABOVE} width="40" height="30">
        <MathText content="R" />
      </foreignObject>

      {/* Weight Force mg */}
      <line x1="300" y1="160" x2="300" y2="215" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" className="hover:stroke-amber-400 transition-all" />
      <foreignObject x={300 + LABEL_OFFSET_X_RIGHT} y={215 + LABEL_OFFSET_Y_BELOW} width="40" height="30">
        <MathText content="mg" />
      </foreignObject>

      {/* Driving Force P */}
      <line x1="350" y1="130" x2="445" y2="130" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x={450} y={100} width="110" height="30">
        <div className="text-emerald-400 text-xs font-semibold">Driving Force (<MathText content="P" className="inline [&_p]:inline"/>)</div>
      </foreignObject>

      {/* Friction Resistance Vector F_r */}
      <line x1="250" y1="140" x2="165" y2="140" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow-rose)" />
      <foreignObject x={80} y={110} width="80" height="30">
        <div className="text-rose-400 text-xs font-semibold">Friction (<MathText content="F" className="inline [&_p]:inline"/>)</div>
      </foreignObject>

      {/* Acceleration Vector */}
      <line x1="380" y1="65" x2="430" y2="65" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-double)" />
      <line x1="390" y1="65" x2="440" y2="65" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-double)" />
      <foreignObject x={440 + LABEL_OFFSET_X} y={65 + LABEL_OFFSET_Y_ABOVE} width="30" height="30">
        <MathText content="a" />
      </foreignObject>
    </svg>
  </DiagramPanel>
);
export const PulleySystemSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 2. Connected Particles"
    analysis={
      <div className="space-y-3">
        <p className="text-sm text-slate-400 italic text-center">
          A smooth pulley ensures tension T is equal on both sides. The inextensible string ensures acceleration a is equal in magnitude.
        </p>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-emerald-400 mb-2 text-sm">Smooth Pulley</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">Tension is equal on both sides of the string.</p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60 text-sm text-slate-300">T is equal on both sides</div>
        </div>
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-amber-400 mb-2 text-sm">Inextensible String</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-2">Both connected masses share the same acceleration magnitude.</p>
          <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60 text-sm text-slate-300">a is common to both masses</div>
        </div>
      </div>
    }
  >
    <svg width="300" height="350" viewBox="80 20 300 330" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      {/* Mass Body 1 */}
      <rect x="150" y="200" width="50" height="60" fill="#1e293b" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      <foreignObject x="150" y="200" width="50" height="60">
        <div className="flex items-center justify-center h-full text-slate-300"><MathText content="m_1" /></div>
      </foreignObject>
      
      {/* Mass Body 2 */}
      <rect x="210" y="150" width="30" height="35" fill="#0f172a" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      <foreignObject x="210" y="150" width="30" height="35">
         <div className="flex items-center justify-center h-full text-slate-300"><MathText content="m_2" /></div>
      </foreignObject>

      {/* Ceiling & Pulley */}
      <line x1="120" y1="30" x2="280" y2="30" stroke="#475569" strokeWidth="3" />
      <path d="M130 30 L120 20 M160 30 L150 20 M190 30 L180 20 M220 30 L210 20 M250 30 L240 20 M280 30 L270 20" stroke="#334155" strokeWidth="1.5" />
      <line x1="200" y1="30" x2="200" y2="75" stroke="#64748b" strokeWidth="2" />
      <circle cx="200" cy="75" r="25" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="200" cy="75" r="4" fill="#64748b" />

      {/* Cables */}
      <line x1="175" y1="75" x2="175" y2="200" stroke="#64748b" strokeWidth="1.5" /> {/* m1 cable */}
      <line x1="225" y1="75" x2="225" y2="150" stroke="#64748b" strokeWidth="1.5" />

      {/* Tensions */}
      {/* T for m1 */}
      <line x1="175" y1="200" x2="175" y2="120" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" /> {/* Starts at top of m1 */}
      <foreignObject x={175 + LABEL_OFFSET_X_RIGHT} y={120 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="T" /></foreignObject>
      {/* T for m2 */}
      <line x1="225" y1="150" x2="225" y2="95" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" /> {/* Starts at top of m2 */}
      <foreignObject x={225 + LABEL_OFFSET_X_RIGHT} y={95 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="T" /></foreignObject>

      {/* Gravity */}
      {/* m1g */}
      <line x1="175" y1="260" x2="175" y2="320" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" /> {/* Starts at bottom of m1 */}
      <foreignObject x={175 + LABEL_OFFSET_X_RIGHT} y={310 + LABEL_OFFSET_Y_BELOW} width="55" height="25"><MathText content="m_1g" /></foreignObject>
      {/* m2g */}
      <line x1="225" y1="185" x2="225" y2="235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" /> {/* Starts at bottom of m2 */}
      <foreignObject x={225 + LABEL_OFFSET_X_RIGHT} y={235 + LABEL_OFFSET_Y_BELOW} width="55" height="25"><MathText content="m_2g" /></foreignObject>

      {/* Acceleration */}
      <line x1="130" y1="220" x2="130" y2="260" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="105" y="230" width="20" height="25"><MathText content="a" /></foreignObject>
      <line x1="270" y1="180" x2="270" y2="140" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="245" y="150" width="20" height="25"><MathText content="a" /></foreignObject>
    </svg>
  </DiagramPanel>
);
export const InclinedPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Inclined Plane Resolution"
    analysis={(
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            Weight <MathText content="mg" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> always acts vertically downwards. Resolve forces parallel and perpendicular to the plane of motion.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Never draw the weight vector acting diagonally down the slope. It is always vertical.
        </div>
      </div>
    )}
  >
    <svg width="500" height="320" viewBox="40 20 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="arrow-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      {/* Main Weight Vector (Vertical) */}
      <line x1="250" y1="180" x2="250" y2="280" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x={250 + LABEL_OFFSET_X_RIGHT} y={280 + LABEL_OFFSET_Y_BELOW - 10} width="35" height="25">
        <MathText content="mg" />
      </foreignObject>

      {/* Horizontal Base */}
      <line x1="50" y1="260" x2="450" y2="260" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Inclined Plane */}
      <line x1="50" y1="260" x2="450" y2="100" stroke="#475569" strokeWidth="3" />
      
      {/* Base Angle Theta */}
      <path d="M 110 260 A 60 60 0 0 0 105 238" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <foreignObject x="115" y="235" width="25" height="25">
        <MathText content="\theta" />
      </foreignObject>

      {/* Rotated Group for Block and R */}
      <g transform="rotate(-21.8 250 180)">
        <rect x="210" y="120" width="80" height="60" fill="#0f172a" stroke="#64748b" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
        
        {/* Normal Reaction R */}
        <line x1="250" y1="120" x2="250" y2="40" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
        <foreignObject x={250 + LABEL_OFFSET_X_RIGHT} y={40 + LABEL_OFFSET_Y_ABOVE} width="25" height="25"><MathText content="R" /></foreignObject>
      </g>

      {/* Weight Components (Dashed) */}
      <line x1="250" y1="180" x2="185" y2="206" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-sky)" />
      <foreignObject x="135" y="220" width="80" height="30" transform="rotate(-21.8 185 230)">
        <MathText content="mg \sin \theta" />
      </foreignObject>

      <line x1="250" y1="180" x2="278" y2="250" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-sky)" />
      <foreignObject x="285" y="250" width="85" height="30">
        <MathText content="mg \cos \theta" />
      </foreignObject>

      {/* Angle Theta between mg and perpendicular component */}
      <path d="M 250 200 A 20 20 0 0 1 257.4 198.6" fill="none" stroke="#94a3b8" strokeWidth="1" />
      {/* Leader line for theta */}
      <line x1="280" y1="210" x2="258" y2="199" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
      <foreignObject x="280" y="200" width="20" height="20"><MathText content="\theta" className="text-[10px]" /></foreignObject>
    </svg>
  </DiagramPanel>
);
export const LiftSystemSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Lift Systems Isolation"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            To find cable tension (<MathText content="T" className="inline" />), model the lift and passenger as one combined system. To find the floor reaction (<MathText content="R" className="inline" />), isolate the passenger.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The normal reaction <MathText content="R" className="inline" /> is an internal force to the system and must not be included in the whole-system equation for tension.
        </div>
      </div>
    }
  >
    <svg width="600" height="280" viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      <line x1="300" y1="10" x2="300" y2="250" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Diagram Headers */}
      <foreignObject x="50" y="10" width="200" height="30">
        <div className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-wider">Diagram A: Whole System</div>
      </foreignObject>
      <foreignObject x="350" y="10" width="200" height="30">
        <div className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-wider">Diagram B: Isolated Passenger</div>
      </foreignObject>
      
      {/* DIAGRAM A */}
      <line x1="150" y1="40" x2="150" y2="80" stroke="#475569" strokeWidth="2" />
      <line x1="150" y1="80" x2="150" y2="45" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" /> {/* T starts at top of lift */}
      <foreignObject x={150 + LABEL_OFFSET_X_RIGHT} y={45 + LABEL_OFFSET_Y_ABOVE} width="25" height="25"><MathText content="T" /></foreignObject>
      
      <rect x="90" y="80" width="120" height="120" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="130" y="140" width="40" height="60" fill="#1e293b" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      
      <line x1="150" y1="200" x2="150" y2="250" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" /> {/* (M+m)g starts at bottom of lift */}
      <foreignObject x={150 + LABEL_OFFSET_X_RIGHT} y={250 + LABEL_OFFSET_Y_BELOW - 10} width="90" height="30"><MathText content="(M+m)g" /></foreignObject>

      {/* System Accel */}
      <line x1="50" y1="160" x2="50" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={50 - LABEL_OFFSET_X - 20} y={120 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="a" /></foreignObject>

      {/* DIAGRAM B */}
      <rect x="430" y="140" width="40" height="60" fill="#1e293b" stroke="#64748b" strokeWidth="2" className="hover:stroke-sky-400 transition-all" />
      
      <line x1="450" y1="140" x2="450" y2="85" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" /> {/* R starts at top of passenger */}
      <foreignObject x={450 + LABEL_OFFSET_X_RIGHT} y={85 + LABEL_OFFSET_Y_ABOVE} width="25" height="25"><MathText content="R" /></foreignObject>

      <line x1="450" y1="200" x2="450" y2="250" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" /> {/* mg starts at bottom of passenger */}
      <foreignObject x={450 + LABEL_OFFSET_X_RIGHT} y={250 + LABEL_OFFSET_Y_BELOW - 10} width="50" height="25"><MathText content="mg" /></foreignObject>

      <line x1="380" y1="160" x2="380" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={380 - LABEL_OFFSET_X - 20} y={120 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="a" /></foreignObject>
    </svg>
  </DiagramPanel>
);
export const ConnectedInclinedPulleySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Advanced Connected Inclined Plane"
    analysis={(
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            For each mass, resolve forces along its direction of acceleration. For the inclined particle, this means resolving parallel and perpendicular to the slope.
          </p>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Ensure friction opposes the direction of motion. If <MathText content="m_B" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> accelerates down, friction on <MathText content="m_A" className="inline not-italic align-baseline [&_p]:inline [&_p]:m-0" /> acts down the slope.
        </div>
      </div>
    )}
  >
    <svg width="600" height="300" viewBox="40 90 520 260" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="arrow-rose" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f43f5e" /></marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      {/* Hanging Mass Body B */}
      <line x1="462" y1="120" x2="462" y2="200" stroke="#64748b" strokeWidth="1.5" />
      <rect x="447" y="200" width="30" height="40" fill="#1e293b" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      <foreignObject x="447" y="200" width="30" height="40">
        <div className="flex items-center justify-center h-full text-slate-300"><MathText content="m_B" /></div>
      </foreignObject>

      {/* Tension & Weight for Mass B */}
      <line x1="462" y1="200" x2="462" y2="150" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" /> {/* T starts at top of mB */}
      <foreignObject x={462 + LABEL_OFFSET_X_RIGHT} y={150 + LABEL_OFFSET_Y_ABOVE} width="20" height="30"><MathText content="T" /></foreignObject>

      <line x1="462" y1="240" x2="462" y2="290" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" /> {/* mBg starts at bottom of mB */}
      <foreignObject x={462 + LABEL_OFFSET_X_RIGHT} y={290 + LABEL_OFFSET_Y_BELOW} width="55" height="30"><MathText content="m_Bg" /></foreignObject>

      {/* Acceleration Target Path */}
      <line x1="495" y1="190" x2="495" y2="230" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={495 + LABEL_OFFSET_X_RIGHT} y={230 + LABEL_OFFSET_Y_BELOW} width="20" height="30"><MathText content="a" /></foreignObject>

      <line x1="50" y1="280" x2="500" y2="280" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50" y1="280" x2="450" y2="120" stroke="#475569" strokeWidth="3" />
      <line x1="450" y1="120" x2="450" y2="280" stroke="#334155" strokeWidth="1.5" />

      <path d="M 110 280 A 60 60 0 0 0 102 260" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <foreignObject x="115" y="255" width="20" height="30">
        <MathText content="\alpha" />
      </foreignObject>
      <circle cx="450" cy="120" r="12" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />

      {/* Inclined Mass Body A */}
      <line x1="285" y1="186" x2="450" y2="120" stroke="#64748b" strokeWidth="1.5" />
      <g transform="translate(250 200) rotate(-21.8)">
        <rect x="-35" y="-25" width="70" height="50" fill="#1e293b" stroke="#475569" strokeWidth="2" />
        <foreignObject x="-35" y="-25" width="70" height="50">
          <div className="flex items-center justify-center h-full text-slate-300"><MathText content="m_A" /></div>
        </foreignObject>

        {/* Reaction R_A */}
        <line x1="0" y1="-25" x2="0" y2="-75" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
        <foreignObject x="5" y="-100" width="25" height="30"><MathText content="R_A" /></foreignObject>

        {/* Tension T */}
        <line x1="35" y1="0" x2="100" y2="0" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
        <foreignObject x="105" y="-25" width="20" height="30"><MathText content="T" /></foreignObject>

        {/* Friction F_r */}
        <line x1="-35" y1="25" x2="-85" y2="25" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow-rose)" />
        <foreignObject x="-130" y="30" width="50" height="30"><MathText content="F_r" /></foreignObject>

        {/* Acceleration a */}
        <line x1="50" y1="-50" x2="90" y2="-50" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
        <foreignObject x="95" y="-75" width="20" height="30"><MathText content="a" /></foreignObject>

        {/* Weight m_Ag and its components */}
        <g transform="rotate(21.8)">
          <line x1="0" y1="0" x2="0" y2="70" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
          <foreignObject x="5" y="75" width="55" height="30"><MathText content="m_Ag" /></foreignObject>
          
          <line x1="0" y1="0" x2="-32" y2="0" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(-21.8)" markerEnd="url(#arrow-amber)" />
          <foreignObject x="-120" y="10" width="85" height="30" transform="rotate(-21.8)"><MathText content="m_A g \sin \alpha" /></foreignObject>

          <line x1="0" y1="0" x2="0" y2="30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(-21.8)" markerEnd="url(#arrow-amber)" />
          <foreignObject x="10" y="30" width="85" height="30" transform="rotate(-21.8)"><MathText content="m_A g \cos \alpha" /></foreignObject>
        </g>
      </g>
    </svg>
  </DiagramPanel>
);