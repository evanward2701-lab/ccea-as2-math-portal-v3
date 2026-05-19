import React from 'react';
import { MathText } from '../../MathText';

export const RoughHorizontalPlaneSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 1. Single Particle Resolving
    </div>
    
    <svg width="600" height="250" viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
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

      {/* Ground Plane */}
      <line x1="100" y1="160" x2="500" y2="160" stroke="#334155" strokeWidth="3" />
      {/* Roughness Indicators */}
      <path d="M150 160 L140 172 M200 160 L190 172 M250 160 L240 172 M300 160 L290 172 M350 160 L340 172 M400 160 L390 172 M450 160 L440 172" stroke="#1e293b" strokeWidth="2" />

      {/* Particle Block */}
      <rect x="250" y="100" width="100" height="60" fill="#0f172a" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all duration-300" />
      <foreignObject x="285" y="112" width="30" height="30">
        <div className="text-center text-slate-300 font-serif italic text-lg">m</div>
      </foreignObject>

      {/* Normal Reaction Force R (Perpendicular Axis Equilibrium) */}
      <line x1="300" y1="100" x2="300" y2="35" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" className="hover:stroke-emerald-300 transition-all" />
      <foreignObject x="315" y="30" width="40" height="30">
        <MathText text="R" />
      </foreignObject>

      {/* Weight Force mg (Downward Gravity Vector) */}
      <line x1="300" y1="130" x2="300" y2="215" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" className="hover:stroke-amber-400 transition-all" />
      <foreignObject x="315" y="195" width="40" height="30">
        <MathText text="mg" />
      </foreignObject>

      {/* Driving Force P */}
      <line x1="350" y1="130" x2="445" y2="130" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="455" y="115" width="120" height="40">
        <div className="text-[11px] text-emerald-400 font-sans font-medium leading-tight">Pulling Force<br/><span className="text-slate-500 font-mono">(P)</span></div>
      </foreignObject>

      {/* Friction Resistance Vector (Opposing Impending Motion) */}
      <line x1="250" y1="140" x2="165" y2="140" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow-rose)" />
      <foreignObject x="110" y="125" width="50" height="30">
        <MathText text="F_{fr}" />
      </foreignObject>

      {/* Acceleration Vector Representation */}
      <line x1="380" y1="65" x2="430" y2="65" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-double)" />
      <line x1="390" y1="65" x2="440" y2="65" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-double)" />
      <foreignObject x="445" y="50" width="30" height="30">
        <MathText text="a" />
      </foreignObject>
    </svg>
    
    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      Always draw a comprehensive force diagram before resolving. Acceleration dictates the positive coordinate direction.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Never obscure mass (<math className="italic">m</math>) with weight (<math className="italic">mg</math>). Keep acceleration vectors isolated from surface contact arrows.
    </p>
  </div>
);

export const PulleySystemSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 2. Connected Particles
    </div>
    
    <svg width="400" height="350" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" />
        </marker>
      </defs>

      {/* Fixed Support Ceiling */}
      <line x1="120" y1="30" x2="280" y2="30" stroke="#475569" strokeWidth="3" />
      <path d="M130 30 L120 20 M160 30 L150 20 M190 30 L180 20 M220 30 L210 20 M250 30 L240 20 M280 30 L270 20" stroke="#334155" strokeWidth="1.5" />
      <line x1="200" y1="30" x2="200" y2="75" stroke="#64748b" strokeWidth="2" />

      {/* Smooth Pulley Wheel */}
      <circle cx="200" cy="75" r="25" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="200" cy="75" r="4" fill="#64748b" />

      {/* Inextensible Cables */}
      <line x1="175" y1="75" x2="175" y2="200" stroke="#64748b" strokeWidth="1.5" />
      <line x1="225" y1="75" x2="225" y2="150" stroke="#64748b" strokeWidth="1.5" />

      {/* Mass Body 1 (Heavier Particle) */}
      <rect x="155" y="200" width="40" height="50" fill="#1e293b" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      <foreignObject x="160" y="212" width="30" height="30">
        <div className="text-center text-slate-300 font-serif italic text-sm">m₁</div>
      </foreignObject>
      
      {/* Tension Forces (Equal Magnitude on String) */}
      <line x1="175" y1="185" x2="175" y2="120" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="155" y="135" width="20" height="25">
        <MathText text="T" />
      </foreignObject>
      
      <line x1="225" y1="135" x2="225" y2="95" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="235" y="105" width="20" height="25">
        <MathText text="T" />
      </foreignObject>

      {/* Mass Body 2 (Lighter Particle) */}
      <rect x="210" y="150" width="30" height="35" fill="#0f172a" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      <foreignObject x="210" y="157" width="30" height="25">
        <div className="text-center text-slate-400 font-serif italic text-xs">m₂</div>
      </foreignObject>

      {/* Gravity Weight Force Vectors */}
      <line x1="175" y1="250" x2="175" y2="310" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
      <foreignObject x="182" y="285" width="45" height="25">
        <MathText text="m_1g" />
      </foreignObject>

      <line x1="225" y1="185" x2="225" y2="235" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
      <foreignObject x="235" y="210" width="45" height="25">
        <MathText text="m_2g" />
      </foreignObject>

      {/* Directional Acceleration Markers (System Dynamics) */}
      {/* Downward Path for m1 */}
      <line x1="130" y1="200" x2="130" y2="240" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="110" y="210" width="20" height="25">
        <MathText text="a" />
      </foreignObject>
      
      {/* Upward Path for m2 */}
      <line x1="270" y1="180" x2="270" y2="140" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="282" y="150" width="20" height="25">
        <MathText text="a" />
      </foreignObject>
    </svg>

    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      A smooth pulley balances string tension (<math className="italic">T</math>) across both segments. Inextensibility locks matching magnitudes of acceleration (<math className="italic">a</math>).
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Never consolidate distinct opposite trajectories into a macroscopic mass formula. You MUST assemble two separate simultaneous isolation equations.
    </p>
  </div>
);

export const InclinedPlaneSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 3. Inclined Plane
    </div>
    
    <svg width="500" height="320" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="arrow-slate" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
        </marker>
      </defs>

      {/* Horizontal Datum Alignment Baseline */}
      <line x1="50" y1="260" x2="450" y2="260" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      {/* Structural Incline Surface */}
      <line x1="50" y1="260" x2="450" y2="100" stroke="#475569" strokeWidth="3" />
      
      {/* Angle Theta Graphic Arc */}
      <path d="M 110 260 A 60 60 0 0 0 105 238" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <foreignObject x="115" y="235" width="25" height="25">
        <MathText text="\theta" />
      </foreignObject>

      {/* Rotated Assembly Core for Object Mechanics */}
      <g transform="rotate(-21.8 250 180)">
        {/* Dynamic Mass Boundary */}
        <rect x="210" y="120" width="80" height="60" fill="#0f172a" stroke="#64748b" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
        
        {/* Perpendicular Normal Contact Reaction R */}
        <line x1="250" y1="120" x2="250" y2="40" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
        <foreignObject x="265" y="45" width="25" height="25">
          <MathText text="R" />
        </foreignObject>

        {/* Component Dotted Resolution Configurations */}
        {/* Parallel Dynamic Force Lane: down slope */}
        <line x1="250" y1="180" x2="150" y2="180" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-slate)" />
        <foreignObject x="135" y="150" width="80" height="25">
          <MathText text="mg \sin \theta" />
        </foreignObject>
        
        {/* Perpendicular Contact Structural Vector Lane: into slope */}
        <line x1="150" y1="180" x2="150" y2="260" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="250" y1="180" x2="250" y2="260" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow-slate)" />
        <foreignObject x="265" y="235" width="85" height="25">
          <MathText text="mg \cos \theta" />
        </foreignObject>
      </g>

      {/* Unrotated Primary Vertical Weight Gravity Pipeline */}
      <line x1="250" y1="180" x2="250" y2="290" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x="215" y="280" width="35" height="25">
        <MathText text="mg" />
      </foreignObject>
    </svg>

    <p className="text-[11px] font-sans text-slate-400 text-center mt-2 px-6 italic">
      True weight always impacts directly downward. Resolving coordinates parallel or perpendicular to tilted configurations splits weight vectors into independent geometric components.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Never trace original gravity arrows tracing diagonally flush down the surface plane boundary. This error invalidates multi-force equation systems.
    </p>
  </div>
);

export const LiftSystemSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 4. Lift Systems
    </div>
    
    <svg width="600" height="260" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" />
        </marker>
      </defs>

      {/* Axis Partition Line */}
      <line x1="300" y1="10" x2="300" y2="250" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Title Subheaders */}
      <text x="150" y="30" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">DIAGRAM A: Whole System Model</text>
      <text x="450" y="30" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">DIAGRAM B: Isolated Passenger Model</text>

      {/* --- DIAGRAM A (WHOLE SYSTEM CONFIG) --- */}
      {/* Support Cable Line */}
      <line x1="150" y1="50" x2="150" y2="90" stroke="#475569" strokeWidth="2" />
      <line x1="150" y1="90" x2="150" y2="55" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="165" y="55" width="25" height="25">
        <MathText text="T" />
      </foreignObject>
      
      {/* Outer Lift Bounding Box */}
      <rect x="100" y="90" width="100" height="100" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      {/* Internal Passenger Silhouette */}
      <rect x="135" y="140" width="30" height="50" fill="#1e293b" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Combined System Mass Vector */}
      <line x1="150" y1="190" x2="150" y2="240" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x="165" y="210" width="80" height="25">
        <MathText text="(M+m)g" />
      </foreignObject>

      {/* Uniform Structural Acceleration */}
      <line x1="60" y1="160" x2="60" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="45" y="130" width="15" height="25">
        <MathText text="a" />
      </foreignObject>


      {/* --- DIAGRAM B (ISOLATED PASSENGER CONFIG) --- */}
      {/* Isolated Body Box */}
      <rect x="435" y="140" width="30" height="50" fill="#0f172a" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      
      {/* Localized Floor Normal Reaction R */}
      <line x1="450" y1="140" x2="450" y2="85" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="465" y="90" width="25" height="25">
        <MathText text="R" />
      </foreignObject>

      {/* Isolated Passenger Gravity Vector */}
      <line x1="450" y1="190" x2="450" y2="240" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x="465" y="210" width="40" height="25">
        <MathText text="mg" />
      </foreignObject>

      {/* Uniform Local Acceleration */}
      <line x1="380" y1="160" x2="380" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="365" y="130" width="15" height="25">
        <MathText text="a" />
      </foreignObject>
    </svg>

    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      To solve for Cable Tension (<math className="italic">T</math>), analyze the entire system combined. To target the Normal Floor Reaction (<math className="italic">R</math>), isolate the single passenger.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Do not include the internal Normal Reaction (<math className="italic">R</math>) when calculating system cable tension. <math className="italic">R</math> is an internal force that cancels out at the whole-system level.
    </p>
  </div>
);

export const LiftSystemSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 4. Lift Systems
    </div>
    
    <svg width="600" height="260" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" />
        </marker>
      </defs>

      {/* Axis Partition Line */}
      <line x1="300" y1="10" x2="300" y2="250" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" />
      
      {/* Title Subheaders */}
      <text x="150" y="30" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">DIAGRAM A: Whole System Model</text>
      <text x="450" y="30" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">DIAGRAM B: Isolated Passenger Model</text>

      {/* --- DIAGRAM A (WHOLE SYSTEM CONFIG) --- */}
      {/* Support Cable Line */}
      <line x1="150" y1="50" x2="150" y2="90" stroke="#475569" strokeWidth="2" />
      <line x1="150" y1="90" x2="150" y2="55" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="165" y="55" width="25" height="25">
        <MathText text="T" />
      </foreignObject>
      
      {/* Outer Lift Bounding Box */}
      <rect x="100" y="90" width="100" height="100" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      {/* Internal Passenger Silhouette */}
      <rect x="135" y="140" width="30" height="50" fill="#1e293b" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Combined System Mass Vector */}
      <line x1="150" y1="190" x2="150" y2="240" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x="165" y="210" width="80" height="25">
        <MathText text="(M+m)g" />
      </foreignObject>

      {/* Uniform Structural Acceleration */}
      <line x1="60" y1="160" x2="60" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="45" y="130" width="15" height="25">
        <MathText text="a" />
      </foreignObject>


      {/* --- DIAGRAM B (ISOLATED PASSENGER CONFIG) --- */}
      {/* Isolated Body Box */}
      <rect x="435" y="140" width="30" height="50" fill="#0f172a" stroke="#475569" strokeWidth="2" className="hover:stroke-emerald-400 transition-all" />
      
      {/* Localized Floor Normal Reaction R */}
      <line x1="450" y1="140" x2="450" y2="85" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="465" y="90" width="25" height="25">
        <MathText text="R" />
      </foreignObject>

      {/* Isolated Passenger Gravity Vector */}
      <line x1="450" y1="190" x2="450" y2="240" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x="465" y="210" width="40" height="25">
        <MathText text="mg" />
      </foreignObject>

      {/* Uniform Local Acceleration */}
      <line x1="380" y1="160" x2="380" y2="120" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="365" y="130" width="15" height="25">
        <MathText text="a" />
      </foreignObject>
    </svg>

    <p className="text-[11px] font-sans text-slate-400 text-center mt-4 px-6 italic">
      To solve for Cable Tension (<math className="italic">T</math>), analyze the entire system combined. To target the Normal Floor Reaction (<math className="italic">R</math>), isolate the single passenger.
      <br/><strong className="text-rose-400 not-italic uppercase text-[10px]">CCEA Exam Pitfall:</strong> Do not include the internal Normal Reaction (<math className="italic">R</math>) when calculating system cable tension. <math className="italic">R</math> is an internal force that cancels out at the whole-system level.
    </p>
  </div>
);

// Append tracking module to: src/components/Visuals/M3/M3-SVG.tsx
export const ConnectedInclinedPulleySVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a]">
    <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
      Fig 5. Advanced Connected Inclined Plane
    </div>
    
    <svg width="600" height="350" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
      <defs>
        <marker id="arrow-emerald" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
        </marker>
        <marker id="arrow-amber" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker id="accel-sky" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8" />
        </marker>
      </defs>

      {/* Ground Baseline */}
      <line x1="50" y1="280" x2="500" y2="280" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
      {/* Wedge Slope */}
      <line x1="50" y1="280" x2="450" y2="120" stroke="#475569" strokeWidth="3" />
      {/* Vertical Wedge Backing */}
      <line x1="450" y1="120" x2="450" y2="280" stroke="#334155" strokeWidth="1.5" />

      {/* Wedge Angle */}
      <path d="M 110 280 A 60 60 0 0 0 102 260" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <foreignObject x="115" y="255" width="20" height="20">
        <MathText text="\alpha" />
      </foreignObject>

      {/* Smooth Pulley Top Vertex */}
      <circle cx="450" cy="120" r="12" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />

      {/* Rotated Assembly for Mass A on Slope */}
      <g transform="rotate(-21.8 250 200)">
        <rect x="210" y="140" width="70" height="50" fill="#0f172a" stroke="#475569" strokeWidth="2" />
        <foreignObject x="235" y="152" width="25" height="25">
          <div className="text-slate-300 font-serif italic text-xs">m_A</div>
        </foreignObject>
        {/* Tension pulling up slope */}
        <line x1="280" y1="165" x2="350" y2="165" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
        <foreignObject x="310" y="140" width="20" height="25">
          <MathText text="T" />
        </foreignObject>
      </g>

      {/* Mass B Vertical Suspension Path */}
      <line x1="462" y1="120" x2="462" y2="200" stroke="#64748b" strokeWidth="1.5" />
      <rect x="447" y="200" width="30" height="40" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <foreignObject x="450" y="210" width="25" height="25">
        <div className="text-slate-300 font-serif italic text-xs">m_B</div>
      </foreignObject>

      {/* Hanging Tension Force Vector */}
      <line x1="462" y1="200" x2="462" y2="150" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />
      <foreignObject x="472" y="165" width="20" height="25">
        <MathText text="T" />
      </foreignObject>

      {/* Hanging Weight Force Vector */}
      <line x1="462" y1="240" x2="462" y2="290" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
      <foreignObject x="472" y="265" width="40" height="25">
        <MathText text="m_Bg" />
      </foreignObject>

      {/* System Tracking Acceleration Layout Markers */}
      <line x1="495" y1="190" x2="495" y2="230" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#accel-sky)" />
      <foreignObject x="505" y="205" width="15" height="25">
        <MathText text="a" />
      </foreignObject>
    </svg>

    <p className="text-[11px] font-sans text-slate-400 text-center mt-2 px-6 italic">
      Connected particles crossing boundary lines require precise coordinate definitions. Always check whether friction acts up or down the slope based on the acceleration path.
    </p>
  </div>
);