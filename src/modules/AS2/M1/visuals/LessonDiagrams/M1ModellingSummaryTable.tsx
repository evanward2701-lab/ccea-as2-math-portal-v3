import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const M1ModellingSummaryTable: React.FC = () => {
  const assumptions = [
    { word: 'Particle', meaning: 'Dimensions are negligible; mass is at a point.', effect: 'Ignore rotation, shape, and air resistance.' },
    { word: 'Smooth Surface', meaning: 'Friction is completely absent.', effect: 'No friction force acts on the object.' },
    { word: 'Rough Surface', meaning: 'Friction is present at the contact.', effect: 'Friction (F <= mu R) opposes motion.' },
    { word: 'Light String', meaning: 'Mass of the string is negligible.', effect: 'Ignore weight; tension is constant throughout.' },
    { word: 'Inextensible', meaning: 'The string or cable does not stretch.', effect: 'Connected particles share acceleration magnitude.' },
    { word: 'Smooth Pulley', meaning: 'No friction at the pulley axle.', effect: 'Tension is equal on both sides of the string.' },
    { word: 'Rigid Rod', meaning: 'Does not bend or buckle under load.', effect: 'Can transmit both tension (pull) and thrust (push).' },
  ];

  return (
    <DiagramPanel
      title="Modelling Assumptions Summary"
      analysis={
        <p className="text-sm text-zinc-400 italic text-center">
          CCEA examiners frequently ask for the "mathematical effect" of these words.
        </p>
      }
    >
      <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#141416]/50 shadow-inner">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-zinc-900/80 border-b border-zinc-800">
              <th className="px-4 py-3 font-bold text-zinc-400 uppercase tracking-wider w-1/4">Modelling Word</th>
              <th className="px-4 py-3 font-bold text-zinc-400 uppercase tracking-wider w-3/8">Physical Meaning</th>
              <th className="px-4 py-3 font-bold text-emerald-400 uppercase tracking-wider w-3/8">Mathematical Effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {assumptions.map((item, idx) => (
              <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                <td className="px-4 py-3 font-bold text-zinc-200">{item.word}</td>
                <td className="px-4 py-3 text-zinc-400 leading-relaxed">{item.meaning}</td>
                <td className="px-4 py-3 text-zinc-300 font-medium leading-relaxed">{item.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DiagramPanel>
  );
};
