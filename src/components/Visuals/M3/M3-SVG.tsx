import React from 'react';
import { MathText } from '../../MathText';
import { DiagramPanel } from '@/components/DiagramPanel';

// Constants for label offsets
const LABEL_OFFSET_X = 15;
const LABEL_OFFSET_Y_ABOVE = -15;
const LABEL_OFFSET_Y_BELOW = 15;
const LABEL_OFFSET_X_RIGHT = 15;

export const RoughHorizontalPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 1. Single Particle Resolving"
    analysis={
      <p className="text-sm text-slate-400 leading-relaxed">
        Always draw a comprehensive force diagram before resolving. Acceleration dictates the positive coordinate direction.
        <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Never obscure mass (<span className="italic">m</span>) with weight (<span className="italic">mg</span>).
      </p>
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
      <foreignObject x={445 + LABEL_OFFSET_X} y={130 + LABEL_OFFSET_Y_ABOVE} width="30" height="30">
        <MathText content="P" />
      </foreignObject>

      {/* Friction Resistance Vector F_r */}
      <line x1="250" y1="140" x2="165" y2="140" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow-rose)" />
      <foreignObject x={165 - 50 - LABEL_OFFSET_X} y={140 + LABEL_OFFSET_Y_ABOVE} width="50" height="30">
        <MathText content="F_{r}" />
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
      <p className="text-sm text-slate-400 leading-relaxed">
        A smooth pulley balances string tension (<MathText content="T" className="inline" />) across both segments. Inextensibility locks matching magnitudes of acceleration (<MathText content="a" className="inline" />).
      </p>
    }
  >
    <svg width="300" height="350" viewBox="100 20 250 330" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      {/* ... [Keep existing defs markers] ... */}
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      {/* Mass Body 1 */}
      <rect x="155" y="200" width="40" height="50" fill="#1e293b" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      <foreignObject x="155" y="200" width="40" height="50">
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
      <line x1="175" y1="75" x2="175" y2="200" stroke="#64748b" strokeWidth="1.5" />
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
      <line x1="175" y1="250" x2="175" y2="310" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" /> {/* Starts at bottom of m1 */}
      <foreignObject x={175 + LABEL_OFFSET_X_RIGHT} y={310 + LABEL_OFFSET_Y_BELOW} width="45" height="25"><MathText content="m_1g" /></foreignObject>
      {/* m2g */}
      <line x1="225" y1="185" x2="225" y2="235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" /> {/* Starts at bottom of m2 */}
      <foreignObject x={225 + LABEL_OFFSET_X_RIGHT} y={235 + LABEL_OFFSET_Y_BELOW} width="45" height="25"><MathText content="m_2g" /></foreignObject>

      {/* Acceleration */}
      <line x1="130" y1="200" x2="130" y2="240" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={130 - LABEL_OFFSET_X - 20} y={240 + LABEL_OFFSET_Y_BELOW} width="20" height="25"><MathText content="a" /></foreignObject>
      <line x1="270" y1="180" x2="270" y2="140" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={270 + LABEL_OFFSET_X_RIGHT} y={140 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="a" /></foreignObject>
    </svg>
  </DiagramPanel>
);
export const InclinedPlaneSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Inclined Plane Resolution"
    analysis={
      <p className="text-sm text-slate-400 leading-relaxed">
        True weight always impacts directly downward. Resolving coordinates parallel or perpendicular to tilted configurations splits weight vectors into independent geometric components.
        <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Never trace original gravity arrows diagonally flush down the surface plane boundary.
      </p>
    }
  >
    <svg width="500" height="320" viewBox="40 10 420 310" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="arrow-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      {/* Unrotated Primary Vertical Weight Gravity Pipeline */}
      <line x1="250" y1="180" x2="250" y2="290" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x={250 + LABEL_OFFSET_X_RIGHT} y={290 + LABEL_OFFSET_Y_BELOW} width="35" height="25">
        <MathText content="mg" />
      </foreignObject>

      {/* Horizontal Datum Alignment Baseline */}
      <line x1="50" y1="260" x2="450" y2="260" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Structural Incline Surface */}
      <line x1="50" y1="260" x2="450" y2="100" stroke="#475569" strokeWidth="3" />
      
      {/* Angle Theta Graphic Arc (Base) */}
      <path d="M 110 260 A 60 60 0 0 0 105 238" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <foreignObject x="115" y="235" width="25" height="25">
        <MathText content="\theta" />
      </foreignObject>

      {/* Dynamic Mass Boundary (Rotated) */}
      <g transform="rotate(-21.8 250 180)">
        <rect x="210" y="120" width="80" height="60" fill="#0f172a" stroke="#64748b" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
        
        {/* Perpendicular Normal Contact Reaction R */}
        <line x1="250" y1="120" x2="250" y2="40" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" /> {/* Starts at top of block */}
        <foreignObject x={250 + LABEL_OFFSET_X_RIGHT} y={40 + LABEL_OFFSET_Y_ABOVE} width="25" height="25"><MathText content="R" /></foreignObject>
        
        {/* Component Dotted Resolution Configurations */}
        <line x1="250" y1="180" x2="150" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-sky)" />
        <line x1="150" y1="180" x2="150" y2="260" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="250" y1="180" x2="250" y2="260" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-sky)" />
        
        {/* Angle Theta mapped inside resolution triangle */}
        <path d="M 250 200 A 20 20 0 0 1 242 198" fill="none" stroke="#94a3b8" strokeWidth="1" /> {/* Theta arc */}
        <foreignObject x="250" y="195" width="20" height="20"><MathText content="\theta" className="text-[10px]" /></foreignObject>
      </g>

      {/* Unrotated Text Elements to prevent distortion */}
      {/* mg sin theta (down the slope component) */}
      <foreignObject x="100" y="150" width="80" height="30"><MathText content="mg \sin \theta" /></foreignObject>
      {/* mg cos theta (perpendicular to slope component) - moved and added leader line */}
      <line x1="250" y1="260" x2="350" y2="260" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" /> {/* Horizontal guide line */}
      <line x1="250" y1="260" x2="250" y2="220" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" /> {/* Vertical guide line */}
      <line x1="250" y1="260" x2="300" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" /> {/* Leader line */}
      <foreignObject x="305" y="230" width="85" height="30">
        <MathText content="mg \cos \theta" />
      </foreignObject>
    </svg>
  </DiagramPanel>
);
export const LiftSystemSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 4. Lift Systems Isolation"
    analysis={
      <>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          To solve for Cable Tension (<MathText content="T" className="inline" />), analyze the entire system combined. To target the Normal Floor Reaction (<MathText content="R" className="inline" />), isolate the single passenger.
        </p>
        <p className="text-sm text-rose-400 not-italic uppercase text-[10px] font-bold">CCEA Exam Pitfall:</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Do not include the internal Normal Reaction (<MathText content="R" className="inline" />) when calculating system cable tension.
        </p>
      </>
    }
  >
    <svg width="600" height="260" viewBox="30 20 540 240" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" /></marker>
      </defs>

      <line x1="300" y1="10" x2="300" y2="250" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Diagram Headers */}
      <foreignObject x="50" y="0" width="200" height="30">
        <div className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-wider">Diagram A: Whole System</div>
      </foreignObject>
      <foreignObject x="350" y="0" width="200" height="30">
        <div className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-wider">Diagram B: Isolated Passenger</div>
      </foreignObject>
      
      {/* DIAGRAM A */}
      <line x1="150" y1="50" x2="150" y2="90" stroke="#475569" strokeWidth="2" />
      <line x1="150" y1="90" x2="150" y1="55" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" /> {/* T starts at top of lift */}
      <foreignObject x={150 + LABEL_OFFSET_X_RIGHT} y={55 + LABEL_OFFSET_Y_ABOVE} width="25" height="25"><MathText content="T" /></foreignObject>
      
      <rect x="100" y="90" width="100" height="100" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="135" y="140" width="30" height="50" fill="#1e293b" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      
      <line x1="150" y1="190" x2="150" y2="240" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" /> {/* (M+m)g starts at bottom of lift */}
      <foreignObject x={150 + LABEL_OFFSET_X_RIGHT} y={240 + LABEL_OFFSET_Y_BELOW} width="90" height="30"><MathText content="(M+m)g" /></foreignObject>

      {/* System Accel */}
      <line x1="60" y1="160" x2="60" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={60 - LABEL_OFFSET_X - 20} y={120 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="a" /></foreignObject>

      {/* DIAGRAM B */}
      <rect x="435" y="140" width="30" height="50" fill="#1e293b" stroke="#64748b" strokeWidth="2" className="hover:stroke-sky-400 transition-all" />
      
      <line x1="450" y1="140" x2="450" y1="85" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" /> {/* R starts at top of passenger */}
      <foreignObject x={450 + LABEL_OFFSET_X_RIGHT} y={85 + LABEL_OFFSET_Y_ABOVE} width="25" height="25"><MathText content="R" /></foreignObject>

      <line x1="450" y1="190" x2="450" y2="240" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" /> {/* mg starts at bottom of passenger */}
      <foreignObject x={450 + LABEL_OFFSET_X_RIGHT} y={240 + LABEL_OFFSET_Y_BELOW} width="40" height="25"><MathText content="mg" /></foreignObject>

      <line x1="390" y1="160" x2="390" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={390 - LABEL_OFFSET_X - 20} y={120 + LABEL_OFFSET_Y_ABOVE} width="20" height="25"><MathText content="a" /></foreignObject>
    </svg>
  </DiagramPanel>
);
export const ConnectedInclinedPulleySVG: React.FC = () => (
  <DiagramPanel
    title="Fig 5. Advanced Connected Inclined Plane"
    analysis={
      <p className="text-sm text-slate-400 leading-relaxed">
        Connected particles crossing boundary lines require precise coordinate definitions. Always check whether friction acts up or down the slope based on the acceleration path.
      </p>
    }
  >
    <svg width="600" height="300" viewBox="40 90 520 260" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#34d399" /></marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" /></marker>
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
      <foreignObject x={462 + LABEL_OFFSET_X_RIGHT} y={290 + LABEL_OFFSET_Y_BELOW} width="45" height="30"><MathText content="m_Bg" /></foreignObject>

      {/* Acceleration Target Path */}
      <line x1="495" y1="190" x2="495" y2="230" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x={495 + LABEL_OFFSET_X_RIGHT} y={230 + LABEL_OFFSET_Y_BELOW} width="20" height="30"><MathText content="a" /></foreignObject>

      <line x1="50" y1="280" x2="500" y2="280" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50" y1="280" x2="450" y2="120" stroke="#475569" strokeWidth="3" />
      <line x1="450" y1="120" x2="450" y2="280" stroke="#334155" strokeWidth="1.5" />

      {/* Angle Alpha */}
      <path d="M 110 280 A 60 60 0 0 0 102 260" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <foreignObject x="115" y="255" width="20" height="30">
        <MathText content="\alpha" />
      </foreignObject>
      {/* Pulley */}
      <circle cx="450" cy="120" r="12" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />

      {/* Inclined Mass Body A */}
      <g transform="rotate(-21.8 250 200)">
        <rect x="210" y="140" width="70" height="50" fill="#1e293b" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
        <foreignObject x="210" y="140" width="70" height="50">
          <div className="flex items-center justify-center h-full text-slate-300"><MathText content="m_A" /></div>
        </foreignObject>
        <line x1="280" y1="165" x2="350" y2="165" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" /> {/* T starts at right edge of mA */}
        <foreignObject x={350 + LABEL_OFFSET_X} y={165 + LABEL_OFFSET_Y_ABOVE} width="20" height="30"><MathText content="T" /></foreignObject>
      </g>
      
      {/* Unrotated MathText for Inclined Mass & Tension */}
    </svg>
  </DiagramPanel>
);