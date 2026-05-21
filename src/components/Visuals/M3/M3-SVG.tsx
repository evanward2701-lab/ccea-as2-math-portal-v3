import React, { useState } from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '../../DiagramPanel';
import { cn } from '@/lib/utils';

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


export const M3ConnectedParticlesEngine: React.FC = () => {
  const [massA, setMassA] = useState(7);
  const [massB, setMassB] = useState(4);

  const g = 9.8;
  const weightA = massA * g;
  const weightB = massB * g;
  const totalMass = massA + massB;
  const drivingForce = Math.abs(weightA - weightB);
  const acceleration = totalMass === 0 ? 0 : drivingForce / totalMass;
  
  let tension = 0;
  let direction: 'A-down' | 'B-down' | 'equilibrium' = 'equilibrium';

  if (massA > massB) {
    direction = 'A-down';
    tension = massB * (g + acceleration); // T - m_B*g = m_B*a
  } else if (massB > massA) {
    direction = 'B-down';
    tension = massA * (g + acceleration); // T - m_A*g = m_A*a
  } else {
    tension = massA * g;
  }

  return (
    <DiagramPanel
      title="Fig. Connected Particles Pulley Engine"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Whole System Equation</h4>
            <p className="text-xs text-slate-400 italic mb-3">Tension is an internal force and cancels out when considering the whole system, allowing for calculation of acceleration.</p>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`a = \\frac{|m_A - m_B|g}{m_A + m_B} = ${acceleration.toFixed(2)}\\text{ m s}^{-2}`} />
            </div>
          </div>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Tension</h4>
             <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`T = ${tension.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Tension is not the same as weight. It must usually be found by isolating one particle *after* finding the system's acceleration.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-3">
            <label htmlFor="massA-slider" className="text-sm font-medium text-slate-300 whitespace-nowrap">Mass A</label>
            <input id="massA-slider" type="range" min="1" max="10" step="0.5" value={massA} onChange={(e) => setMassA(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-amber-400 w-16 text-right">{massA.toFixed(1)} kg</span>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="massB-slider" className="text-sm font-medium text-slate-300 whitespace-nowrap">Mass B</label>
            <input id="massB-slider" type="range" min="1" max="10" step="0.5" value={massB} onChange={(e) => setMassB(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-amber-400 w-16 text-right">{massB.toFixed(1)} kg</span>
          </div>
        </div>

        <svg viewBox="0 0 560 380" className="w-full h-auto max-w-xl" overflow="visible" shapeRendering="geometricPrecision">
          <defs>
            <marker id="cp-arrow-emerald" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 10 L 5 0 L 10 10 Z" fill="#10b981" /></marker>
            <marker id="cp-arrow-amber" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 5 10 L 10 0 Z" fill="#f59e0b" /></marker>
            <marker id="cp-arrow-sky-up" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 10 L 5 0 L 10 10 Z" fill="#38bdf8" /></marker>
            <marker id="cp-arrow-sky-down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 5 10 L 10 0 Z" fill="#38bdf8" /></marker>
          </defs>

          {/* Pulley */}
          <line x1="280" y1="20" x2="280" y2="60" stroke="#64748b" strokeWidth="2" />
          <circle cx="280" cy="60" r="30" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="280" cy="60" r="4" fill="#64748b" />

          {/* Masses and Strings */}
          <rect x="150" y="150" width="60" height={20 + massA * 5} fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="180" y="140" textAnchor="middle" fill="#e2e8f0" fontSize="14">A</text>
          <line x1="180" y1="60" x2="180" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

          <rect x="350" y="150" width="60" height={20 + massB * 5} fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="380" y="140" textAnchor="middle" fill="#e2e8f0" fontSize="14">B</text>
          <line x1="380" y1="60" x2="380" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Forces on A */}
          <line x1="180" y1="150" x2="180" y2="100" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#cp-arrow-emerald)" />
          <text x="190" y="95" fill="#10b981" fontSize="14"><MathText content="T" /></text>
          <line x1="180" y1={170 + massA * 5} x2="180" y2={220 + massA * 5} stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#cp-arrow-amber)" />
          <text x="190" y={230 + massA * 5} fill="#f59e0b" fontSize="14"><MathText content="m_A g" /></text>

          {/* Forces on B */}
          <line x1="380" y1="150" x2="380" y2="100" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#cp-arrow-emerald)" />
          <text x="390" y="95" fill="#10b981" fontSize="14"><MathText content="T" /></text>
          <line x1="380" y1={170 + massB * 5} x2="380" y2={220 + massB * 5} stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#cp-arrow-amber)" />
          <text x="390" y={230 + massB * 5} fill="#f59e0b" fontSize="14"><MathText content="m_B g" /></text>

          {/* Acceleration */}
          {direction === 'A-down' && <>
            <line x1="120" y1="180" x2="120" y2="230" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-down)" />
            <text x="100" y="205" fill="#38bdf8" fontSize="14"><MathText content="a" /></text>
            <line x1="440" y1="230" x2="440" y2="180" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-up)" />
            <text x="450" y="205" fill="#38bdf8" fontSize="14"><MathText content="a" /></text>
          </>}
          {direction === 'B-down' && <>
            <line x1="120" y1="230" x2="120" y2="180" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-up)" />
            <text x="100" y="205" fill="#38bdf8" fontSize="14"><MathText content="a" /></text>
            <line x1="440" y1="180" x2="440" y2="230" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#cp-arrow-sky-down)" />
            <text x="450" y="205" fill="#38bdf8" fontSize="14"><MathText content="a" /></text>
          </>}
          {direction === 'equilibrium' && <text x="280" y="350" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="bold">Equilibrium: a = 0</text>}
        </svg>
      </div>
    </DiagramPanel>
  );
};

export const M3FrictionSimulator: React.FC = () => {
  const [appliedForce, setAppliedForce] = useState(30);
  const [mu, setMu] = useState(0.5);

  const mass = 10;
  const g = 9.8;
  const weight = mass * g;
  const reaction = weight;
  const limitingFriction = mu * reaction;
  const isSliding = appliedForce > limitingFriction;
  const actualFriction = isSliding ? limitingFriction : appliedForce;
  const resultantForce = appliedForce - actualFriction;
  const acceleration = resultantForce / mass;

  const arrowScale = 2;

  return (
    <DiagramPanel
      title="Fig. Limiting Friction Simulator"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Limiting Friction</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`F_{max} = \\mu R = ${limitingFriction.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">Actual Friction</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`F = ${actualFriction.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Resultant Force & Acceleration</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`F_{res} = ${resultantForce.toFixed(1)}\\text{ N} \\implies a = ${acceleration.toFixed(2)}\\text{ m s}^{-2}`} />
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not automatically set friction equal to <MathText content="\mu R" className="inline [&_p]:inline" />. This is only true when the object is on the point of moving (limiting equilibrium) or is already sliding.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg grid grid-cols-1 gap-4 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300 w-32">Applied Force P</label>
            <input type="range" min="0" max="80" value={appliedForce} onChange={(e) => setAppliedForce(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-sky-400 w-16 text-right">{appliedForce.toFixed(1)} N</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-slate-300 w-32">Friction Coeff. <MathText content="\mu" className="inline [&_p]:inline" /></label>
            <input type="range" min="0.1" max="0.8" step="0.05" value={mu} onChange={(e) => setMu(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            <span className="text-sm font-mono text-amber-400 w-16 text-right">{mu.toFixed(2)}</span>
          </div>
        </div>

        <div className={cn(
          "px-4 py-1 mb-4 text-sm font-bold rounded-full border",
          isSliding ? "bg-rose-500/10 border-rose-500/30 text-rose-300" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
        )}>
          {isSliding ? 'Sliding: F = μR' : 'Static Equilibrium: F ≤ μR'}
        </div>

        <svg viewBox="0 0 600 250" className="w-full h-auto max-w-3xl" overflow="visible" shapeRendering="geometricPrecision">
          <defs>
            <marker id="fs-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" /></marker>
            <marker id="fs-arrow-rose" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 1.5 L 2 5 L 10 8.5 z" fill="#f43f5e" /></marker>
            <marker id="fs-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" /></marker>
          </defs>

          {/* Ground */}
          <line x1="50" y1="180" x2="550" y2="180" stroke="#475569" strokeWidth="3" />
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={i} x1={50 + i * 20} y1="180" x2={60 + i * 20} y2="185" stroke="#334155" strokeWidth="1" />
          ))}

          {/* Block */}
          <rect x="250" y="120" width="100" height="60" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="300" y="155" textAnchor="middle" fill="#e2e8f0" fontSize="14"><MathText content="m" /></text>

          {/* Applied Force P */}
          <line x1="350" y1="150" x2={350 + appliedForce * arrowScale} y2="150" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#fs-arrow-emerald)" />
          <text x={355 + appliedForce * arrowScale} y="145" fill="#10b981" fontSize="14"><MathText content="P" /></text>

          {/* Friction F */}
          {actualFriction > 0.1 && (
            <>
              <line x1="250" y1="165" x2={250 - actualFriction * arrowScale} y2="165" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#fs-arrow-rose)" />
              <text x={245 - actualFriction * arrowScale} y="160" fill="#f43f5e" fontSize="14" textAnchor="end"><MathText content="F" /></text>
            </>
          )}

          {/* Acceleration a */}
          {acceleration > 0.01 && (
            <>
              <line x1="300" y1="100" x2={300 + acceleration * 20} y2="100" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#fs-arrow-sky)" />
              <text x={305 + acceleration * 20} y="95" fill="#38bdf8" fontSize="14"><MathText content="a" /></text>
            </>
          )}
        </svg>
      </div>
    </DiagramPanel>
  );
};


export const M3InclinedPlaneResolver: React.FC = () => {
  const [angle, setAngle] = useState(30);
  const [showComponents, setShowComponents] = useState(true);

  const g = 9.8;
  const mass = 10;
  const weight = mass * g;
  const rad = (angle * Math.PI) / 180;
  const parallel = weight * Math.sin(rad);
  const perpendicular = weight * Math.cos(rad);
  const visualScale = 0.8;

  const width = 560;
  const height = 340;
  const originX = 100;
  const originY = 280;
  const planeLength = 400;
  const planeEndX = originX + planeLength * Math.cos(rad);
  const planeEndY = originY - planeLength * Math.sin(rad);

  const blockPosRatio = 0.5;
  const blockX = originX + planeLength * blockPosRatio * Math.cos(rad);
  const blockY = originY - planeLength * blockPosRatio * Math.sin(rad);

  return (
    <DiagramPanel
      title="Fig. Dynamic Inclined Plane Resolver"
      analysis={
        <div className="space-y-4">
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Parallel Component</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`mg \\sin\\theta = ${parallel.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
          <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Perpendicular Component</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`mg \\cos\\theta = ${perpendicular.toFixed(1)}\\text{ N}`} />
            </div>
          </div>
           <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Normal Reaction</h4>
            <div className="text-center bg-slate-950 p-2 rounded border border-slate-800/60">
              <MathText content={`R = mg \\cos\\theta = ${perpendicular.toFixed(1)}\\text{ N}`} />
            </div>
            <p className="text-xs text-slate-500 italic mt-2 text-center">Assuming no other perpendicular forces.</p>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> Do not draw the weight vector acting diagonally down the slope. Weight is a gravitational force and is always vertical.
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md flex flex-col gap-3 mb-6 rounded-lg border border-slate-800 bg-slate-900/50 p-3">
          <div className="flex items-center gap-4">
            <label htmlFor="angle-slider" className="text-sm font-medium text-slate-300 whitespace-nowrap">
              Angle <MathText content="\theta" className="inline [&_p]:inline" />
            </label>
            <input
              id="angle-slider"
              type="range"
              min="0"
              max="60"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-mono text-sky-400 w-12 text-right">{angle}°</span>
          </div>
          <label className="flex items-center space-x-2 cursor-pointer text-sm text-slate-300 self-start">
            <input
              type="checkbox"
              checked={showComponents}
              onChange={() => setShowComponents(prev => !prev)}
              className="form-checkbox h-4 w-4 rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-sky-500"
            />
            <span>Show resolved components</span>
          </label>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-w-2xl" overflow="visible" shapeRendering="geometricPrecision">
          <defs>
            <marker id="ip-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" /></marker>
            <marker id="ip-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" /></marker>
          </defs>

          {/* Plane */}
          <line x1={originX} y1={originY} x2={planeEndX} y2={planeEndY} stroke="#475569" strokeWidth="3" />
          <line x1={originX} y1={originY} x2={planeEndX} y2={originY} stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d={`M ${originX + 40} ${originY} A 40 40 0 0 0 ${originX + 40 * Math.cos(rad)} ${originY - 40 * Math.sin(rad)}`} stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <text x={originX + 50} y={originY - 5} fill="#94a3b8" fontSize="14"><MathText content="\theta" /></text>

          {/* True Weight Vector (always vertical) */}
          <line x1={blockX} y1={blockY} x2={blockX} y2={blockY + weight * visualScale} stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#ip-arrow-amber)" />
          <text x={blockX + 5} y={blockY + weight * visualScale + 20} fill="#f43f5e" fontSize="14"><MathText content="mg" /></text>

          {/* Rotated group for components relative to the plane */}
          <g transform={`translate(${blockX}, ${blockY}) rotate(${-angle})`}>
            {/* Block */}
            <rect x="-25" y="-40" width="50" height="40" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Normal Reaction R */}
            <line x1="0" y1="-40" x2="0" y2={-40 - perpendicular * visualScale} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#ip-arrow-emerald)" />
            <text x={10} y={-40 - perpendicular * visualScale - 5} fill="#10b981" fontSize="14"><MathText content="R" /></text>

            {showComponents && (
              <>
                {/* Perpendicular Component */}
                <line x1="0" y1="0" x2="0" y2={perpendicular * visualScale} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#ip-arrow-amber)" />
                <text x={-80} y={perpendicular * visualScale * 0.5} fill="#f59e0b" fontSize="12" transform={`rotate(90 0 ${perpendicular * visualScale * 0.5})`} textAnchor="middle"><MathText content="mg \cos\theta" /></text>

                {/* Parallel Component */}
                <line x1="0" y1="0" x2={-parallel * visualScale} y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#ip-arrow-amber)" />
                <text x={-parallel * visualScale * 0.5} y={-10} fill="#f59e0b" fontSize="12" textAnchor="middle"><MathText content="mg \sin\theta" /></text>
              </>
            )}
          </g>
        </svg>
      </div>
    </DiagramPanel>
  );
};
