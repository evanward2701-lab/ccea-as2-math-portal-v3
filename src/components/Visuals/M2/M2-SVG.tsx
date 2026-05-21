import React from 'react';
import { MathText } from "../../MathText";
import { DiagramPanel } from "../../DiagramPanel";
// ==========================================
// ASSET 1: M2 KINEMATICS MASTER VISUALS
// ==========================================
export const M2KinematicsMaster: React.FC = () => {
  return (
    <>
      <DiagramPanel 
        title="Fig 1. Velocity-Time Graph Shapes"
        analysis={
          <p className="text-sm text-slate-400 italic text-center">
            Gradient represents acceleration. Horizontal lines mean zero acceleration.
          </p>
        }
      >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* GRAPH A: STATIONARY */}
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 260 220"
            className="w-full h-auto select-none max-w-sm mx-auto"
            shapeRendering="geometricPrecision"
            overflow="visible"
          >
            <g className="group cursor-pointer">
              <line x1="20" y1="180" x2="240" y2="180" stroke="#475569" strokeWidth="2" />
              <line x1="40" y1="30" x2="40" y2="200" stroke="#475569" strokeWidth="2" />
              <foreignObject x="-20" y="20" width="60" height="30">
                <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-slate-400 text-xs group-hover:text-rose-400 transition-colors" />
              </foreignObject>
              <foreignObject x="230" y="185" width="40" height="30">
                <MathText content="t \text{ (s)}" className="text-slate-400 text-xs" />
              </foreignObject>
              <line x1="40" y1="180" x2="220" y2="180" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-rose-400 transition-all duration-300" />
            </g>
          </svg>
          <div className="text-center mt-2 text-sm text-slate-300">
            <p className="font-bold text-rose-400">Stationary, <MathText content="v = 0" className="inline [&_p]:inline [&_p]:m-0" /></p>
          </div>
        </div>

        {/* GRAPH B: CONSTANT VELOCITY */}
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 260 220"
            className="w-full h-auto select-none max-w-sm mx-auto"
            shapeRendering="geometricPrecision"
            overflow="visible"
          >
            <g className="group cursor-pointer">
              <line x1="20" y1="180" x2="240" y2="180" stroke="#475569" strokeWidth="2" />
              <line x1="40" y1="30" x2="40" y2="200" stroke="#475569" strokeWidth="2" />
              <foreignObject x="-20" y="20" width="60" height="30">
                <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-slate-400 text-xs group-hover:text-amber-400 transition-colors" />
              </foreignObject>
              <foreignObject x="230" y="185" width="40" height="30">
                <MathText content="t \text{ (s)}" className="text-slate-400 text-xs" />
              </foreignObject>
              <line x1="40" y1="90" x2="220" y2="90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-amber-300 transition-all duration-300" />
            </g>
          </svg>
          <div className="text-center mt-2 text-sm text-slate-300">
            <p className="font-bold text-amber-400">Constant velocity, <MathText content="a = 0" className="inline [&_p]:inline [&_p]:m-0" /></p>
          </div>
        </div>

        {/* GRAPH C: UNIFORM ACCELERATION */}
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 260 220"
            className="w-full h-auto select-none max-w-sm mx-auto"
            shapeRendering="geometricPrecision"
            overflow="visible"
          >
            <g className="group cursor-pointer">
              <line x1="20" y1="180" x2="240" y2="180" stroke="#475569" strokeWidth="2" />
              <line x1="40" y1="30" x2="40" y2="200" stroke="#475569" strokeWidth="2" />
              <foreignObject x="-20" y="20" width="60" height="30">
                <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-slate-400 text-xs group-hover:text-emerald-400 transition-colors" />
              </foreignObject>
              <foreignObject x="230" y="185" width="40" height="30">
                <MathText content="t \text{ (s)}" className="text-slate-400 text-xs" />
              </foreignObject>
              <line x1="40" y1="180" x2="220" y2="60" stroke="#10b981" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-emerald-300 transition-all duration-300" />
            </g>
          </svg>
          <div className="text-center mt-2 text-sm text-slate-300">
            <p className="font-bold text-emerald-400">Constant positive acceleration</p>
          </div>
        </div>
      </div>
      </DiagramPanel>

      <DiagramPanel
        title="Fig 2. Traffic Lights Triangular Model"
        analysis={
          <div className="space-y-3">
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Symmetry Alert</h4>
              <p className="text-sm text-slate-300 leading-relaxed">The peak time <MathText content="T" className="inline [&_p]:inline [&_p]:m-0" /> does not have to be halfway through the journey.</p>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg text-center">
              <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Formula</h4>
              <MathText content="\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}" />
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-300 leading-relaxed">The triangle area gives the total distance.</p>
            </div>
          </div>
        }
      > 
        <svg 
          viewBox="0 0 600 240" 
          className="w-full h-auto select-none"
          shapeRendering="geometricPrecision"
          overflow="visible"
        > 
          <polygon points="50,200 290,50 530,200" fill="#f59e0b" className="opacity-25 group-hover:opacity-30 transition-opacity duration-500" /> 
          <line x1="30" y1="200" x2="580" y2="200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="20" x2="50" y2="220" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          
          <line x1="290" y1="50" x2="290" y2="200" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" className="group-hover:stroke-amber-500/50 transition-colors" />
          <line x1="50" y1="50" x2="290" y2="50" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
          
          <line x1="50" y1="200" x2="290" y2="50" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="290" y1="50" x2="530" y2="200" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />

          <foreignObject x="20" y="10" width="30" height="30">
            <MathText content="v" className="text-slate-400 font-bold" />
          </foreignObject>
          <foreignObject x="585" y="190" width="20" height="30">
            <MathText content="t" className="text-slate-400 font-bold" />
          </foreignObject>
          <foreignObject x="15" y="40" width="35" height="30">
            <MathText content="V" className="text-amber-400 font-bold text-right group-hover:text-amber-300 transition-colors" />
          </foreignObject>
          <foreignObject x="282" y="205" width="25" height="30">
            <MathText content="T" className="text-slate-400 text-sm" />
          </foreignObject>
          <foreignObject x="535" y="205" width="40" height="30">
            <MathText content="120" className="text-rose-400 font-bold" />
          </foreignObject>

          <foreignObject x="200" y="120" width="180" height="50">
            <div className="text-center text-sm text-amber-300 font-bold bg-slate-950/90 py-2 px-2 border border-amber-500/20 rounded shadow-lg group-hover:border-amber-500/50 transition-colors">
              Area = displacement<br/>
              = 1500 m
            </div>
          </foreignObject>
        </svg>
      </DiagramPanel>
    </>
  );
};
// ==========================================
// ASSET 2: GRAVITY SIGN CONVENTION PANEL
// ==========================================
export const M2GravitySignConvention: React.FC = () => {
  return (
    <DiagramPanel
      title="Fig 3. Vertical Motion Sign Convention"
      analysis={
        <>
          <div className="space-y-3">
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-300 leading-relaxed">Gravity always acts downwards.</p>
            </div>
            <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
              <p className="text-sm text-slate-300 leading-relaxed">The sign of acceleration depends entirely on which direction is chosen as positive.</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong>Exam Warning:</strong> Submitting two independent workflows with differing sign allocations to "guess" the mark scheme triggers the <em>Poorest Attempt Rule</em>, zeroing the question score.
          </div>
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl items-center">
        {/* Left Column: Physical Direction */}
        <div className="flex flex-col items-center justify-center bg-slate-900/50 p-6 rounded-lg border border-slate-800 h-full">
          <svg viewBox="0 0 180 220" className="w-full max-w-[160px] h-auto select-none" shapeRendering="geometricPrecision" overflow="visible">
            <foreignObject x="30" y="0" width="120" height="20">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-500 text-center">Physical Direction</div>
            </foreignObject>
            <line x1="90" y1="50" x2="90" y2="200" stroke="#475569" strokeWidth="5" />
            <path d="M 82 180 L 90 200 L 98 180 Z" fill="#f43f5e" />
            <foreignObject x="-10" y="90" width="95" height="60">
              <div className="text-base font-bold text-rose-400 leading-tight text-right pr-2">
                <MathText content="g = 9.8 \text{ m s}^{-2}" />
                <span className="text-sm">acting downwards</span>
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Right Column: Setups */}
        <div className="flex flex-col gap-4">
          {/* Setup 1 Card: Downwards Positive */}
          <div className="group cursor-pointer bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex items-center gap-4 hover:border-amber-900 transition-colors">
            <svg viewBox="0 -10 100 160" className="w-auto h-36 select-none" shapeRendering="geometricPrecision" overflow="visible">
              <line x1="50" y1="20" x2="50" y2="140" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" className="group-hover:stroke-amber-400 transition-colors" />
              <path d="M 45 125 L 50 140 L 55 125 Z" fill="#f59e0b" />
              <foreignObject x="40" y="140" width="20" height="20">
                <div className="text-lg font-bold text-amber-400 text-center">+</div>
              </foreignObject>
            </svg>
            <div className="flex-1">
              <h4 className="text-[10px] font-bold uppercase text-slate-400">Setup 1: Downwards Positive</h4>
              <div className="mt-2">
                <MathText content="a = +9.8" className="text-amber-400 font-bold text-xl" />
                <span className="text-[10px] text-slate-500 block -mt-2">m s⁻²</span>
              </div>
            </div>
          </div>
          
          {/* Setup 2 Card: Upwards Positive */}
          <div className="group cursor-pointer bg-slate-900/50 p-4 rounded-lg border border-slate-800 flex items-center gap-4 hover:border-emerald-900 transition-colors">
            <svg viewBox="0 -10 100 160" className="w-auto h-36 select-none" shapeRendering="geometricPrecision" overflow="visible">
              <line x1="50" y1="140" x2="50" y2="20" stroke="#10b981" strokeWidth="3" strokeDasharray="3 3" className="group-hover:stroke-emerald-400 transition-colors" />
              <path d="M 45 35 L 50 20 L 55 35 Z" fill="#10b981" />
              <foreignObject x="40" y="0" width="20" height="20">
                <div className="text-lg font-bold text-emerald-400 text-center">+</div>
              </foreignObject>
            </svg>
            <div className="flex-1">
              <h4 className="text-[10px] font-bold uppercase text-slate-400">Setup 2: Upwards Positive</h4>
              <div className="mt-2">
                <MathText content="a = -9.8" className="text-emerald-400 font-bold text-xl" />
                <span className="text-[10px] text-slate-500 block -mt-2">m s⁻²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DiagramPanel>
  );
};

// ==========================================
// ASSET 3: DIAGNOSTIC EXPANSION (MAGNITUDE TRAP)
// ==========================================
export const M2VectorMagnitudeTrap: React.FC = () => {
  return (
    <DiagramPanel
      title="The Vector Magnitude Distance Requirement"
      analysis={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center gap-y-4">
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 font-mono text-indigo-400 text-sm">
              <MathText content="\mathbf{s} = x\mathbf{i} + y\mathbf{j}" />
            </div>
            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-emerald-400 text-sm">
              <MathText content="\text{Distance} = |\mathbf{s}| = \sqrt{x^2 + y^2}" />
            </div>
          </div>
          <div className="text-sm text-slate-400 leading-relaxed md:text-left">
            <p>
              If a 2D vector kinematics question requests the scalar <strong>distance</strong>, you must first calculate the displacement vector, then find its modulus.
            </p>
          </div>
        </div>
      }
    >
      <svg viewBox="0 0 300 180" className="w-full max-w-lg h-auto select-none" shapeRendering="geometricPrecision" overflow="visible">
        <line x1="40" y1="160" x2="280" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="40" y1="40" x2="40" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Vector Base Foundations */}
        <line x1="40" y1="160" x2="260" y2="160" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        <line x1="260" y1="160" x2="260" y2="20" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
        
        {/* Hypotenuse Vector Resultant */}
        <line x1="40" y1="160" x2="260" y2="20" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
        
        {/* Direction Arrows */}
        <path d="M 155 160 L 145 156 L 145 164 Z" fill="#3b82f6" />
        <path d="M 260 85 L 256 95 L 264 95 Z" fill="#6366f1" />
        <path d="M 153 88 L 143 89 L 150 96 Z" fill="#10b981" />

        <foreignObject x="130" y="165" width="60" height="30">
          <div className="text-blue-400 font-bold text-center text-xs">
            <MathText content="x\mathbf{i}" />
          </div>
        </foreignObject>
        <foreignObject x="268" y="80" width="40" height="30">
          <div className="text-indigo-400 font-bold text-left text-xs">
            <MathText content="y\mathbf{j}" />
          </div>
        </foreignObject>
        
        <foreignObject x="80" y="20" width="140" height="40">
          <div className="text-emerald-400 font-bold text-xs">
            <MathText content="|\mathbf{s}| = \sqrt{x^2+y^2}" />
          </div>
        </foreignObject>
        <path d="M 250 160 L 250 150 L 260 150" fill="none" stroke="#475569" strokeWidth="1" />
      </svg>
    </DiagramPanel>
  );
};

// ==========================================
// ASSET 4: DIAGNOSTIC EXPANSION (INITIAL VELOCITY TRAP) - ADDED FOR CCEA
// ==========================================
export const M2InitialVelocityTrap: React.FC = () => {
  return (
    <DiagramPanel title='Exam Trap: "Assuming Starts from Rest"'>
      <svg viewBox="0 0 500 150" className="w-full max-w-xl h-auto select-none" overflow="visible">
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
    </DiagramPanel>
  );
};

// ==========================================
// MASTER EXPORT COMPONENT
// ==========================================
export const M2VisualsCollector: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      <M2KinematicsMaster />
      <M2GravitySignConvention />
      <M2InitialVelocityTrap />
      <M2VectorMagnitudeTrap />
    </div>
  );
};

export default M2VisualsCollector;