import React, { useMemo } from 'react';
import { MathText, MathInline } from '@/core/components/MathText';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { DiagramLabel } from '@/core/diagram-engine/primitives/DiagramLabel';

export const S2FrequencyDensityAreaEngine: React.FC = () => {
  const data = [
    { id: 1, limitL: 0, limitR: 10, freq: 20 },
    { id: 2, limitL: 10, limitR: 20, freq: 40 },
    { id: 3, limitL: 20, limitR: 30, freq: 15 },
    { id: 4, limitL: 30, limitR: 50, freq: 25 },
  ];

  const bars = data.map(d => ({ ...d, density: d.freq / (d.limitR - d.limitL) }));
  const maxDensity = Math.max(...bars.map(b => b.density));
  const maxClassValue = Math.max(...bars.map(b => b.limitR));

  const width = 560;
  const height = 320;
  const padding = 50;
  const baseY = height - padding;
  const graphHeight = baseY - padding;
  
  const scaleY = graphHeight / (maxDensity * 1.2);
  const scaleX = (width - 2 * padding) / maxClassValue;

  const mergedData = useMemo(() => {
    return { limitL: 10, limitR: 30, freq: 40 + 15, density: 55 / 20 };
  }, []);

  return (
    <DiagramPanel
      title="Fig. Frequency Density Area Logic"
      analysis={
        <div className="space-y-4 max-w-5xl mx-auto">
          <p className="text-base text-zinc-400 italic">
            In a histogram, the <strong>area</strong> of the bar represents the frequency. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-zinc-400 mb-2 text-sm uppercase tracking-wider text-center">Standard Formula</h4>
              <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
                <MathText content="\text{FD} = \frac{\text{Frequency}}{\text{Class Width}}" noMargin />
              </div>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider text-center">Area Interpretation</h4>
              <div className="text-center bg-zinc-925 p-2 rounded border border-zinc-800/60">
                <MathText content="\text{Frequency} = \text{FD} \times \text{Class Width}" noMargin />
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full aspect-56/32 max-w-2xl mx-auto rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-850 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
            <line x1={padding} y1={baseY} x2={width - padding / 2} y2={baseY} stroke="#3f3f46" strokeWidth="2" />
            <line x1={padding} y1={baseY} x2={padding} y2={padding} stroke="#3f3f46" strokeWidth="2" />

            {[0, 1, 2, 3, 4].map(val => (
              <g key={val}>
                <line x1={padding - 5} y1={baseY - val * scaleY} x2={padding} y2={baseY - val * scaleY} stroke="#3f3f46" strokeWidth="1" />
                <text x={padding - 10} y={baseY - val * scaleY} textAnchor="end" dominantBaseline="central" fill="#71717a" fontSize="10">{val}</text>
              </g>
            ))}
            <text x={padding - 10} y={baseY} textAnchor="end" dominantBaseline="central" fill="#71717a" fontSize="10">0</text>

            {[0, 10, 20, 30, 40, 50].map(val => (
              <g key={val}>
                <line x1={padding + val * scaleX} y1={baseY} x2={padding + val * scaleX} y2={baseY + 5} stroke="#3f3f46" strokeWidth="1" />
                <text x={padding + val * scaleX} y={baseY + 20} textAnchor="middle" dominantBaseline="central" fill="#71717a" fontSize="10">{val}</text>
              </g>
            ))}

            {bars.map(bar => (
              <rect
                key={bar.id}
                x={padding + bar.limitL * scaleX}
                y={baseY - bar.density * scaleY}
                width={(bar.limitR - bar.limitL) * scaleX}
                height={bar.density * scaleY}
                fill="#f59e0b"
                fillOpacity="0.1"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            ))}
          </svg>

          <DiagramLabel x={`${padding / width * 100}%`} y={`${(padding - 15) / height * 100}%`} anchor="center">
            <MathInline content="\text{FD}" className="text-zinc-500 text-xs font-bold" />
          </DiagramLabel>
          <DiagramLabel x={`${(width - padding / 2) / width * 100}%`} y={`${(baseY + 10) / height * 100}%`} anchor="center">
            <MathInline content="x" className="text-zinc-500 text-xs font-bold" />
          </DiagramLabel>

          <DiagramLabel x={`${(padding + mergedData.limitL * scaleX + 5) / width * 100}%`} y={`${(baseY - mergedData.density * scaleY + 10) / height * 100}%`} anchor="start">
            <div className="flex flex-col gap-1 p-2 bg-zinc-925/80 rounded border border-emerald-500/30 backdrop-blur-sm shadow-md">
              <MathInline content={`F = ${mergedData.freq}`} className="text-emerald-400 text-xs font-bold" />
              <MathInline content={`FD = ${mergedData.density}`} className="text-emerald-400 text-xs" />
            </div>
          </DiagramLabel>
        </div>
      </div>
    </DiagramPanel>
  );
};
