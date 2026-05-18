import React from 'react';

// Diagram 2: Scalar vs Vector Distance and Displacement
export const ScalarVectorSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center p-6 border border-[#1A1A1A] bg-white shadow-[4px_4px_0px_#1A1A1A] my-8">
    <svg width="100%" height="150" viewBox="0 0 600 150">
      {/* Axis */}
      <line x1="50" y1="80" x2="550" y2="80" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="300" y1="70" x2="300" y2="90" stroke="#1A1A1A" strokeWidth="2" />
      <text x="300" y="110" textAnchor="middle" className="font-bold text-[10px]">Start</text>
      <circle cx="150" cy="80" r="6" fill="#1A1A1A" />
      <text x="150" y="110" textAnchor="middle" className="font-serif italic text-xs">Finish</text>
      
      {/* Labels */}
      <text x="225" y="40" textAnchor="middle" className="font-serif italic text-sm">Displacement: -3m</text>
      <text x="225" y="55" textAnchor="middle" className="font-serif italic text-sm">Distance: 3m</text>
      
      {/* Direction Arrow */}
      <path d="M 450 30 L 550 30" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="500" y="20" textAnchor="middle" className="text-[10px] font-bold">Positive Direction</text>
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1A1A1A" />
        </marker>
      </defs>
    </svg>
    <p className="text-[11px] text-center italic text-[#1A1A1A]/70">
      Displacement includes direction, making it a vector. Distance is a scalar and is always positive.
    </p>
  </div>
);

// Diagram 3: Mechanics Modelling Assumptions
export const ModellingAssumptionsSVG: React.FC = () => (
  <div className="grid grid-cols-2 gap-4 my-8">
    {[
      { title: "Particle", label: "Mass concentrated at a point" },
      { title: "Smooth Pulley", label: "Equal tension T" },
      { title: "Rough Surface", label: "Friction opposes motion" },
      { title: "Inextensible String", label: "Equal acceleration a" }
    ].map((item, i) => (
      <div key={i} className="border border-[#1A1A1A] p-4 bg-white flex flex-col items-center">
        <span className="font-bold text-[10px] uppercase tracking-wider mb-2">{item.title}</span>
        <div className="h-16 w-full flex items-center justify-center border-t border-neutral-100">
           {/* Placeholder for specific SVG iconography if needed */}
           <span className="text-[9px] italic">{item.label}</span>
        </div>
      </div>
    ))}
  </div>
);

// Diagram 4: Towing Model
export const TowingModelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 my-6 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[4px_4px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-2 py-1 text-[9px] uppercase tracking-widest font-bold">Fig. Towing Model</div>
    <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 100 L280 100" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="180" y="60" width="60" height="30" stroke="#1A1A1A" strokeWidth="2" fill="white" />
      <circle cx="195" cy="95" r="8" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <circle cx="225" cy="95" r="8" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <rect x="60" y="70" width="40" height="20" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <circle cx="70" cy="95" r="6" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <circle cx="90" cy="95" r="6" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <path d="M100 80 L180 80" stroke="#1A1A1A" strokeWidth="2" />
      <text x="140" y="70" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" fontStyle="italic" textAnchor="middle">Tow bar</text>
      <text x="210" y="50" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Rescue Vehicle</text>
      <text x="80" y="60" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Car</text>
    </svg>
  </div>
);

// Diagram 5: Lift Physics
export const LiftPhysicsSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 my-6 border border-[#1A1A1A] bg-white relative shadow-[4px_4px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-2 py-1 text-[9px] uppercase tracking-widest font-bold">Fig. Lift Physics</div>
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 20 L100 60" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="50" y="60" width="100" height="120" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <rect x="85" y="130" width="30" height="50" stroke="#1A1A1A" strokeWidth="2" fill="#FAF9F6" />
      <text x="100" y="160" fill="#1A1A1A" fontSize="14" fontFamily="serif" textAnchor="middle">W</text>
      <path d="M40 80 L40 60 L35 65 M40 60 L45 65" stroke="#1A1A1A" strokeWidth="1.5" />
      <text x="30" y="70" fill="#1A1A1A" fontSize="12" fontFamily="serif" textAnchor="end">a</text>
      <text x="120" y="45" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">T</text>
    </svg>
  </div>
);