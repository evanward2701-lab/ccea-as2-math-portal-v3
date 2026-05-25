import React from 'react';
import { MathText } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const NormalDistributionSVG: React.FC = () => (
  <DiagramPanel
    title="Fig 3. Normal Distribution"
    analysis={
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-300 leading-relaxed">The Normal Distribution is a continuous, symmetrical bell-shaped curve defined by its mean <MathText content="\mu" className="inline [&_p]:inline [&_p]:m-0" /> and standard deviation <MathText content="\sigma" className="inline [&_p]:inline [&_p]:m-0" />.
          </p>
        </div>
        <div className="p-4 bg-zinc-900/40 border border-zinc-800/60 rounded-lg text-center">
          <span className="text-zinc-400 font-bold uppercase tracking-wider block mb-2 text-2.5">Standardisation Formula</span>
          <div className="font-mono text-emerald-400 text-lg"><MathText content="Z = \frac{X - \mu}{\sigma}" /></div>
        </div>
        <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
          <strong className="font-bold text-rose-400">CCEA Exam Pitfall:</strong> The formula uses standard deviation (<MathText content="\sigma" className="inline [&_p]:inline [&_p]:m-0" />), but exam questions often provide the variance (<MathText content="\sigma^2" className="inline [&_p]:inline [&_p]:m-0" />). You must square root it first!
        </div>
      </div>
    }
  >
    <div className="relative w-full aspect-46/24 max-w-lg mx-auto">
      <svg viewBox="20 20 460 240" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" overflow="visible">
        {/* Background shading for standard deviations */}
        <path d="M 183 200 L 183 118 C 210 50, 230 40, 250 40 C 270 40, 290 50, 317 118 L 317 200 Z" fill="#a1a1aa" fillOpacity="0.1" />
        <path d="M 117 200 L 117 185 C 130 150, 150 120, 183 118 L 183 200 Z" fill="#3b82f6" fillOpacity="0.05" />
        <path d="M 383 200 L 383 185 C 370 150, 350 120, 317 118 L 317 200 Z" fill="#3b82f6" fillOpacity="0.05" />

        {/* Axis and Curve */}
        <line x1="30" y1="200" x2="470" y2="200" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M 30 200 C 130 200, 170 40, 250 40 C 330 40, 370 200, 470 200" stroke="#a1a1aa" strokeWidth="2.5" fill="none" />
        
        {/* Center Mean Line */}
        <line x1="250" y1="40" x2="250" y2="200" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />

        {/* Std Dev Markers */}
        <line x1="183" y1="200" x2="183" y2="205" stroke="#64748b" strokeWidth="2" />
        <line x1="117" y1="200" x2="117" y2="205" stroke="#64748b" strokeWidth="2" />
        <line x1="317" y1="200" x2="317" y2="205" stroke="#64748b" strokeWidth="2" />
        <line x1="383" y1="200" x2="383" y2="205" stroke="#64748b" strokeWidth="2" />
      </svg>

      <DiagramLabel x="50%" y="85%" text="\mu" />

      <DiagramLabel x="35.4%" y="85%" text="\mu - \sigma" />
      <DiagramLabel x="64.6%" y="85%" text="\mu + \sigma" />
      <DiagramLabel x="50%" y="41.7%" text="\approx 68\%" />
    </div>
  </DiagramPanel>
);
