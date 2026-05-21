import React, { useState } from 'react';
import { DiagramPanel } from '../../DiagramPanel';
import { MathText } from '../../MathText';

type Force = 'weight' | 'reaction' | 'friction' | 'tension' | 'applied';

export const M1FreeBodyDiagram: React.FC = () => {
  const [forces, setForces] = useState<Record<Force, boolean>>({
    weight: true,
    reaction: true,
    friction: false,
    tension: false,
    applied: false,
  });

  const toggleForce = (force: Force) => {
    setForces(prev => ({ ...prev, [force]: !prev[force] }));
  };

  return (
    <DiagramPanel
      title="Fig. Interactive Free-Body Diagram"
      analysis={
        <div className="space-y-4">
          <p className="text-sm text-slate-400 italic">
            A free-body diagram isolates a single particle and shows all the external forces acting *on* it. Use the toggles to build a force diagram.
          </p>
          <div className="p-3 bg-slate-900/50 border border-slate-800/60 rounded-lg">
            <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Force Toggles</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.keys(forces).map(f => (
                <label key={f} className="flex items-center space-x-2 cursor-pointer text-sm text-slate-300">
                  <input
                    type="checkbox"
                    checked={forces[f as Force]}
                    onChange={() => toggleForce(f as Force)}
                    className="form-checkbox h-4 w-4 rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-sky-500"
                  />
                  <span className="capitalize">{f}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-lg text-sm text-rose-300">
            <strong className="font-bold text-rose-400">Key Principle:</strong> Only include forces acting *on* the selected particle. Do not include forces the particle exerts on other objects.
          </div>
        </div>
      }
    >
      <svg viewBox="0 0 400 250" className="w-full max-w-md h-auto" overflow="visible">
        <defs>
          <marker id="fbd-arrow-amber" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 5 8 L 10 0 Z" fill="#f59e0b" /></marker>
          <marker id="fbd-arrow-emerald" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 8 L 5 0 L 10 8 Z" fill="#10b981" /></marker>
          <marker id="fbd-arrow-rose" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 10 0 L 2 5 L 10 10 Z" fill="#f43f5e" /></marker>
          <marker id="fbd-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 8 5 L 0 10 Z" fill="#38bdf8" /></marker>
          <marker id="fbd-arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 8 5 L 0 10 Z" fill="#a855f7" /></marker>
        </defs>

        {/* Plane */}
        <line x1="50" y1="150" x2="350" y2="150" stroke="#475569" strokeWidth="2" />

        {/* Particle */}
        <rect x="160" y="110" width="80" height="40" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="200" cy="130" r="4" fill="#0f172a" />

        {/* Forces */}
        {forces.weight && (
          <g>
            <line x1="200" y1="130" x2="200" y2="190" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#fbd-arrow-amber)" />
            <foreignObject x="205" y="190" width="30" height="20"><MathText content="mg" className="text-amber-400 text-sm" /></foreignObject>
          </g>
        )}
        {forces.reaction && (
          <g>
            <line x1="200" y1="110" x2="200" y2="50" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#fbd-arrow-emerald)" />
            <foreignObject x="205" y="30" width="20" height="20"><MathText content="R" className="text-emerald-400 text-sm" /></foreignObject>
          </g>
        )}
        {forces.friction && (
          <g>
            <line x1="160" y1="130" x2="80" y2="130" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#fbd-arrow-rose)" />
            <foreignObject x="55" y="120" width="20" height="20"><MathText content="F" className="text-rose-400 text-sm" /></foreignObject>
          </g>
        )}
        {forces.tension && (
          <g>
            <line x1="240" y1="130" x2="320" y2="130" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#fbd-arrow-sky)" />
            <foreignObject x="325" y="120" width="20" height="20"><MathText content="T" className="text-sky-400 text-sm" /></foreignObject>
          </g>
        )}
        {forces.applied && (
          <g>
            <line x1="240" y1="110" x2="320" y2="80" stroke="#a855f7" strokeWidth="2.5" markerEnd="url(#fbd-arrow-purple)" />
            <foreignObject x="325" y="65" width="20" height="20"><MathText content="P" className="text-purple-400 text-sm" /></foreignObject>
          </g>
        )}
      </svg>
    </DiagramPanel>
  );
};