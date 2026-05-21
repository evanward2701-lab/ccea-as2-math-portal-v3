import React from 'react';
import { MermaidDiagram } from '../../MermaidDiagram';

export const S1_DATA_TYPE_MERMAID = `%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#020617',
    'primaryColor': '#0f172a',
    'primaryTextColor': '#f8fafc',
    'primaryBorderColor': '#334155',
    'lineColor': '#64748b',
    'secondaryColor': '#1e293b',
    'tertiaryColor': '#020617',
    'fontSize': '16px'
  }
}}%%
graph TD
    A["<div style='padding: 10px;'><b>Data</b></div>"] --> B{"<div style='padding: 10px;'><b>Numerical Data?</b></div>"}
    B -- No --> C["<div style='padding: 10px;'><b>Qualitative</b><br/>(Categories)</div>"]
    B -- Yes --> D["<div style='padding: 10px;'><b>Quantitative</b><br/>(Numbers)</div>"]
    
    C -.-> E["<div style='font-size:14px; font-style: italic; opacity: 0.8;'>e.g., Hair colour</div>"]
    
    D --> F{"<div style='padding: 10px;'><b>Counted or<br/>Measured?</b></div>"}
    F -- "<b>Counted</b>" --> G["<div style='padding: 10px;'><b>Discrete</b><br/>(Counted)</div>"]
    F -- "<b>Measured</b>" --> H["<div style='padding: 10px;'><b>Continuous</b><br/>(Measured)</div>"]
    
    G -.-> I["<div style='font-size:14px; font-style: italic; opacity: 0.8;'>e.g., Shoe size</div>"]
    H -.-> J["<div style='font-size:14px; font-style: italic; opacity: 0.8;'>e.g., Height</div>"]

    classDef default fill:#0f172a,stroke:#334155,stroke-width:2px,color:#cbd5e1;
    classDef accent fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#38bdf8;
    classDef warning fill:#1e293b,stroke:#f43f5e,stroke-width:1.5px,color:#f43f5e;
    classDef safe fill:#1e293b,stroke:#34d399,stroke-width:2px,color:#34d399;
    
    class A,B,D accent;
    class G,H safe;
    class I,J,E warning;`;

export const DataTypeTree: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 mb-12 border border-slate-800 bg-slate-950 relative shadow-[8px_8px_0px_#0f172a] rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 bg-slate-900 text-slate-400 border-l border-b border-slate-800 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
        Fig 1. Data Classification Schema
      </div>
      
      <div className="w-full px-6 my-6 flex justify-center">
        <MermaidDiagram chart={S1_DATA_TYPE_MERMAID} />
      </div>
      
      {/* New Caption Card */}
      <div className="w-full px-6 mt-2 space-y-4 max-w-4xl mx-auto">
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed text-center">Always check if numerical data is measured or counted before classifying it as continuous or discrete.</p>
        </div>
      </div>

      <div className="w-full px-6 mt-2 space-y-4 max-w-4xl mx-auto">
        {/* Core Decision Card */}
        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
          <h4 className="font-bold text-sky-400 mb-2 text-sm uppercase tracking-wider">Core Decision</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Trace the data back to its origin: was it <strong className="font-semibold text-emerald-400">counted</strong> or <strong className="font-semibold text-amber-400">measured</strong>?
          </p>
        </div>

        {/* Discrete vs Continuous Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase tracking-wider">Discrete</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">
              <strong className="font-semibold text-emerald-400">Counted</strong> in exact values.
            </p>
            <p className="text-xs text-slate-400 italic">
              Examples: number of cars, shoe size.
            </p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h4 className="font-bold text-amber-400 mb-2 text-sm uppercase tracking-wider">Continuous</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">
              <strong className="font-semibold text-amber-400">Measured</strong> on a scale.
            </p>
            <p className="text-xs text-slate-400 italic">
              Examples: height, weight, time, age.
            </p>
          </div>
        </div>

        {/* CCEA Pitfall Card */}
        <div className="p-4 bg-rose-950/30 border border-rose-900/40 rounded-lg">
          <h4 className="font-bold text-rose-400 mb-2 text-sm uppercase tracking-wider">CCEA Exam Pitfall</h4>
          <ul className="space-y-2 text-sm text-rose-300 list-disc list-inside">
            <li>
              <strong className="font-semibold text-amber-400">Age</strong> is <strong className="font-semibold">continuous</strong> because time flows continuously, even if stated as a whole number.
            </li>
            <li>
              <strong className="font-semibold text-emerald-400">Shoe size</strong> is <strong className="font-semibold">discrete</strong> because intermediate values like 7.34 do not exist.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};