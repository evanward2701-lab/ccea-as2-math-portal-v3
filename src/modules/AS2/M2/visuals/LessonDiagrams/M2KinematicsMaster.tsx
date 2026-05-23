import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const M2KinematicsMaster: React.FC = () => {
  return (
    <>
      <DiagramPanel 
        title="Fig 1. Velocity-Time Graph Shapes"
        analysis={
          <p className="text-sm text-zinc-400 italic text-center">
            Gradient represents acceleration. Horizontal lines mean zero acceleration.
          </p>
        }
      >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* GRAPH A: STATIONARY */}
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <svg
              viewBox="0 0 260 220"
              className="absolute inset-0 w-full h-full select-none"
              shapeRendering="geometricPrecision"
              overflow="visible"
            >
              <g className="group cursor-pointer">
                <line x1="20" y1="180" x2="240" y2="180" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="30" x2="40" y2="200" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="180" x2="220" y2="180" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-rose-400 transition-all duration-300" />
              </g>
            </svg>
            <DiagramLabel position={{ left: '15%', top: '15%' }}>
              <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-zinc-400 text-xs" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '95%', top: '85%' }}>
              <MathText content="t \text{ (s)}" className="text-zinc-400 text-xs" />
            </DiagramLabel>
          </div>
          <div className="text-center mt-2 text-sm text-zinc-300">
            <p className="font-bold text-rose-400">Stationary, <MathText content="v = 0" className="inline [&_p]:inline [&_p]:m-0" /></p>
          </div>
        </div>

        {/* GRAPH B: CONSTANT VELOCITY */}
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <svg
              viewBox="0 0 260 220"
              className="absolute inset-0 w-full h-full select-none"
              shapeRendering="geometricPrecision"
              overflow="visible"
            >
              <g className="group cursor-pointer">
                <line x1="20" y1="180" x2="240" y2="180" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="30" x2="40" y2="200" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="90" x2="220" y2="90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-amber-300 transition-all duration-300" />
              </g>
            </svg>
            <DiagramLabel position={{ left: '15%', top: '15%' }}>
              <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-zinc-400 text-xs" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '95%', top: '85%' }}>
              <MathText content="t \text{ (s)}" className="text-zinc-400 text-xs" />
            </DiagramLabel>
          </div>
          <div className="text-center mt-2 text-sm text-zinc-300">
            <p className="font-bold text-amber-400">Constant velocity, <MathText content="a = 0" className="inline [&_p]:inline [&_p]:m-0" /></p>
          </div>
        </div>

        {/* GRAPH C: UNIFORM ACCELERATION */}
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <svg
              viewBox="0 0 260 220"
              className="absolute inset-0 w-full h-full select-none"
              shapeRendering="geometricPrecision"
              overflow="visible"
            >
              <g className="group cursor-pointer">
                <line x1="20" y1="180" x2="240" y2="180" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="30" x2="40" y2="200" stroke="#475569" strokeWidth="2" />
                <line x1="40" y1="180" x2="220" y2="60" stroke="#10b981" strokeWidth="4" strokeLinecap="round" className="group-hover:stroke-emerald-300 transition-all duration-300" />
              </g>
            </svg>
            <DiagramLabel position={{ left: '15%', top: '15%' }}>
              <MathText content="v \text{ (m s}^{-1}\text{)}" className="text-zinc-400 text-xs" />
            </DiagramLabel>
            <DiagramLabel position={{ left: '95%', top: '85%' }}>
              <MathText content="t \text{ (s)}" className="text-zinc-400 text-xs" />
            </DiagramLabel>
          </div>
          <div className="text-center mt-2 text-sm text-zinc-300">
            <p className="font-bold text-emerald-400">Constant positive acceleration</p>
          </div>
        </div>
      </div>
      </DiagramPanel>

      <DiagramPanel
        title="Fig 2. Traffic Lights Triangular Model"
        analysis={
          <div className="space-y-3">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Symmetry Alert</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">The peak time <MathText content="T" className="inline [&_p]:inline [&_p]:m-0" /> does not have to be halfway through the journey.</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-center">
              <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider">Formula</h4>
              <MathText content="\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}" />
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <p className="text-sm text-zinc-300 leading-relaxed">The triangle area gives the total distance.</p>
            </div>
          </div>
        }
      > 
        <div className="relative w-full aspect-60/24 select-none">
          <svg 
            viewBox="0 0 600 240" 
            className="absolute inset-0 w-full h-full"
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
          </svg>

          <DiagramLabel position={{ left: '6%', top: '10%' }}>
            <MathText content="v" className="text-zinc-400 font-bold" />
          </DiagramLabel>
          <DiagramLabel position={{ left: '98%', top: '85%' }}>
            <MathText content="t" className="text-zinc-400 font-bold" />
          </DiagramLabel>
          <DiagramLabel position={{ left: '6%', top: '22%' }}>
            <MathText content="V" className="text-amber-400 font-bold text-right group-hover:text-amber-300 transition-colors" />
          </DiagramLabel>
          <DiagramLabel position={{ left: '48.5%', top: '92%' }}>
            <MathText content="T" className="text-zinc-400 text-sm" />
          </DiagramLabel>
          <DiagramLabel position={{ left: '88.5%', top: '92%' }}>
            <MathText content="120" className="text-rose-400 font-bold" />
          </DiagramLabel>

          <DiagramLabel position={{ left: '48%', top: '60%' }}>
            <div className="text-center text-sm text-amber-300 font-bold bg-[#141416]/90 py-2 px-2 border border-amber-500/20 rounded shadow-lg group-hover:border-amber-500/50 transition-colors">
              Area = displacement<br/>
              = 1500 m
            </div>
          </DiagramLabel>
        </div>
      </DiagramPanel>
    </>
  );
};
