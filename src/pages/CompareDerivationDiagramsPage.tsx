import React from 'react';
// Import both explicit variants cleanly
import { M1SIUnitDerivationSVG } from '@/modules/AS2/M1/visuals/LessonDiagrams/M1SIUnitDerivationSVG';
import { M1SIUnitDerivationMermaid } from '@/modules/AS2/M1/visuals/LessonDiagrams/M1SIUnitDerivationMermaid';

const CompareDerivationDiagramsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1f] text-zinc-200 p-8 space-y-16 overflow-y-auto">
      {/* Structural Header Box */}
      <div className="border-b border-zinc-800 pb-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">Diagram Variant Comparison</h1>
        <p className="text-sm text-zinc-400 mt-1">Reviewing visual approaches before cleanup phase.</p>
      </div>

      {/* --- VARIANT A: CUSTOM GEOMETRIC SVG ENGINE --- */}
      <section className="space-y-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-md font-mono border border-emerald-500/20">Variant A</span>
          <h2 className="text-lg font-semibold">Custom Primitive SVG Canvas (Recommended)</h2>
        </div>
        <div className="p-4 bg-zinc-900/20 border border-zinc-800/60 rounded-2xl">
          <M1SIUnitDerivationSVG />
        </div>
      </section>

      {/* --- VARIANT B: DYNAMIC TEXT MERMAID FLOWCHART --- */}
      <section className="space-y-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-md font-mono border border-amber-500/20">Variant B</span>
          <h2 className="text-lg font-semibold">Text-to-Diagram Mermaid Engine Layout</h2>
        </div>
        <div className="p-4 bg-zinc-900/20 border border-zinc-800/60 rounded-2xl">
          <M1SIUnitDerivationMermaid />
        </div>
      </section>
    </div>
  );
};

export default CompareDerivationDiagramsPage;
