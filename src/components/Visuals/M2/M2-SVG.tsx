import React from 'react';

// Diagram 1: Velocity-Time Graph Shapes
export const VTSshapesSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 1. v-t Graph Shapes</div>
    
    <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Graph 1: Stationary */}
      <path d="M40 30 L40 140 L160 140" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M40 140 L150 140" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
      <text x="30" y="40" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">v</text>
      <text x="165" y="145" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">t</text>
      <text x="100" y="170" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontStyle="italic">Stationary, v=0</text>

      {/* Graph 2: Constant Velocity */}
      <path d="M240 30 L240 140 L360 140" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M240 80 L350 80" stroke="#1A1A1A" strokeWidth="3" />
      <text x="230" y="40" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">v</text>
      <text x="365" y="145" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">t</text>
      <text x="300" y="170" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontStyle="italic">Constant velocity, a=0</text>

      {/* Graph 3: Constant Acceleration */}
      <path d="M440 30 L440 140 L560 140" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M440 140 L550 50" stroke="#1A1A1A" strokeWidth="3" />
      <text x="430" y="40" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">v</text>
      <text x="565" y="145" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">t</text>
      <text x="500" y="170" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontStyle="italic">Constant +ve acc.</text>
    </svg>
    
    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      <strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> A flat line on a v-t graph does NOT mean stationary, it means constant velocity. Gradient represents acceleration.
    </p>
  </div>
);

// Diagram 2: Traffic Lights Triangular Model
export const TrafficLightTriangleSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. Triangular v-t Model</div>
    
    <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <path d="M50 30 L50 220 L350 220" stroke="#1A1A1A" strokeWidth="2" />
      
      {/* The Triangle */}
      <path d="M50 220 L200 60 L320 220" stroke="#1A1A1A" strokeWidth="3" fill="#1A1A1A" fillOpacity="0.05" />
      
      {/* Dropdown dashed line for peak */}
      <path d="M200 60 L200 220" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      <path d="M50 60 L200 60" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      
      {/* Labels */}
      <text x="30" y="230" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">0</text>
      <text x="25" y="65" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">V</text>
      <text x="195" y="240" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">T</text>
      <text x="310" y="240" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">120</text>
      
      <text x="340" y="210" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">t (s)</text>
      <text x="25" y="20" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">v (ms⁻¹)</text>
      
      {/* Area Label */}
      <text x="200" y="160" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif" fontStyle="italic" fontWeight="bold">Area = 1500 m</text>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      Area of the triangle gives the total distance. <strong className="font-bold text-[#1A1A1A]">Note:</strong> The peak time T does not have to be symmetrical to use the formula Area = 0.5 × base × height.
    </p>
  </div>
);

// Diagram 3: Vertical Motion Sign Convention
export const VerticalSignConventionSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 3. Vertical Sign Convention</div>
    
    <svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Divider */}
      <line x1="200" y1="20" x2="200" y2="220" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <text x="100" y="30" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">SETUP 1 (Down is +ve)</text>
      <text x="300" y="30" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">SETUP 2 (Up is +ve)</text>

      {/* Setup 1: Down is positive */}
      {/* Gravity */}
      <path d="M70 80 L70 160" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <text x="80" y="125" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">g = 9.8</text>
      {/* Positive Direction */}
      <path d="M130 80 L130 160" stroke="#2563EB" strokeWidth="3" markerEnd="url(#arrowhead-blue)"/>
      <text x="140" y="125" fill="#2563EB" fontSize="16" fontFamily="sans-serif" fontWeight="bold">+</text>
      <text x="100" y="200" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">a = +9.8 ms⁻²</text>

      {/* Setup 2: Up is positive */}
      {/* Gravity */}
      <path d="M270 80 L270 160" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <text x="280" y="125" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">g = 9.8</text>
      {/* Positive Direction */}
      <path d="M330 160 L330 80" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrowhead-red)"/>
      <text x="340" y="125" fill="#DC2626" fontSize="16" fontFamily="sans-serif" fontWeight="bold">+</text>
      <text x="300" y="200" textAnchor="middle" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">a = -9.8 ms⁻²</text>

      {/* Defs for Arrowheads */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1A1A1A" />
        </marker>
        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#2563EB" />
        </marker>
        <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
        </marker>
      </defs>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
      Gravity always acts downwards. The sign of acceleration depends entirely on which direction you choose as positive. <br/>
      <strong className="text-red-600 not-italic uppercase text-[10px]">Warning:</strong> Stop automatically writing a = 9.8 without considering launch direction!
    </p>
  </div>
);