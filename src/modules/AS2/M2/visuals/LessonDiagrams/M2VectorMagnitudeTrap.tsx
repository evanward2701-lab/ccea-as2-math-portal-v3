import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const M2VectorMagnitudeTrap: React.FC = () => {
  return (
    <DiagramPanel
      title="The Vector Magnitude Distance Requirement"
      analysis={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center gap-y-4">
            <div className="p-2 bg-zinc-925 rounded-lg border border-zinc-800 font-mono text-indigo-400 text-sm">
              <MathText content="\mathbf{s} = x\mathbf{i} + y\mathbf{j}" />
            </div>
            <div className="p-3 bg-zinc-925 rounded-lg border border-zinc-800 font-mono text-emerald-400 text-sm">
              <MathText content="\text{Distance} = |\mathbf{s}| = \sqrt{x^2 + y^2}" />
            </div>
          </div>
          <div className="text-sm text-zinc-400 leading-relaxed md:text-left">
            <p>
              If a 2D vector kinematics question requests the scalar <strong>distance</strong>, you must first calculate the displacement vector, then find its modulus.
            </p>
          </div>
        </div>
      }
    >
      <div className="relative w-full max-w-lg aspect-30/18 select-none">
        <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full" shapeRendering="geometricPrecision" overflow="visible">
          <line x1="40" y1="160" x2="280" y2="160" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="40" y1="40" x2="40" y2="160" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Vector Base Foundations */}
          <line x1="40" y1="160" x2="260" y2="160" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
          <line x1="260" y1="160" x2="260" y2="20" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
          
          {/* Hypotenuse Vector Resultant */}
          <line x1="40" y1="160" x2="260" y2="20" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
          
          {/* Direction Arrows */}
          <path d="M 155 160 L 145 156 L 145 164 Z" fill="#3b82f6" />
          <path d="M 260 85 L 256 95 L 264 95 Z" fill="#6366f1" />
          <path d="M 153 88 L 143 89 L 150 96 Z" fill="#10b981" />

          <path d="M 250 160 L 250 150 L 260 150" fill="none" stroke="#475569" strokeWidth="1" />
        </svg>

        <DiagramLabel x="50%" y="95%">
          <div className="text-zinc-400 font-bold text-center text-xs">
            <MathText content="x\mathbf{i}" />
          </div>
        </DiagramLabel>
        <DiagramLabel x="92%" y="50%">
          <div className="text-indigo-400 font-bold text-left text-xs">
            <MathText content="y\mathbf{j}" />
          </div>
        </DiagramLabel>
        
        <DiagramLabel x="50%" y="22%">
          <div className="text-emerald-400 font-bold text-xs">
            <MathText content="|\mathbf{s}| = \sqrt{x^2+y^2}" />
          </div>
        </DiagramLabel>
      </div>
    </DiagramPanel>
  );
};
