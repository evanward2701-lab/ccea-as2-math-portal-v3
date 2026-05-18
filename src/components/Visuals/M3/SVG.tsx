import React from 'react';

// Diagram 1: Block on a Rough Horizontal Plane
export const RoughHorizontalPlaneSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 1. Single Particle Resolving</div>
    
    <svg width="600" height="250" viewBox="0 0 600 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1A1A1A" />
        </marker>
        <marker id="accel-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
        </marker>
      </defs>

      {/* Ground */}
      <line x1="100" y1="160" x2="500" y2="160" stroke="#1A1A1A" strokeWidth="3" />
      {/* Roughness indicator */}
      <path d="M150 160 L140 170 M250 160 L240 170 M350 160 L340 170 M450 160 L440 170" stroke="#1A1A1A" strokeWidth="1.5" />

      {/* Block */}
      <rect x="250" y="100" width="100" height="60" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <text x="300" y="135" textAnchor="middle" fill="#1A1A1A" fontSize="18" fontFamily="serif" fontStyle="italic">m</text>

      {/* Forces */}
      {/* Weight */}
      <line x1="300" y1="130" x2="300" y2="220" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="310" y="215" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">mg</text>
      
      {/* Normal Reaction */}
      <line x1="300" y1="100" x2="300" y2="30" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="310" y="45" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">R</text>

      {/* Pull / Driving Force */}
      <line x1="350" y1="130" x2="440" y2="130" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="445" y="135" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif">Pull / Driving Force</text>

      {/* Friction */}
      <line x1="250" y1="150" x2="160" y2="150" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="145" y="155" textAnchor="end" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">F <tspan fontFamily="sans-serif" fontSize="10" fontStyle="normal">(Friction)</tspan></text>

      {/* Acceleration */}
      <path d="M 400 70 L 460 70 M 460 70 L 450 65 M 460 70 L 450 75 M 460 70 L 470 70 M 470 70 L 460 65 M 470 70 L 460 75" stroke="#DC2626" strokeWidth="1.5" fill="none" />
      <text x="435" y="60" textAnchor="middle" fill="#DC2626" fontSize="16" fontFamily="serif" fontStyle="italic">a</text>
    </svg>
    
    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      Always draw a comprehensive force diagram before resolving. Acceleration dictates the positive direction.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Do not confuse mass (m) with weight (mg). Visualise acceleration vectors separately from force arrows.
    </p>
  </div>
);

// Diagram 2: Two Masses on a Smooth Pulley
export const PulleySystemSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. Connected Particles</div>
    
    <svg width="400" height="350" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1A1A1A" />
        </marker>
        <marker id="accel-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
        </marker>
      </defs>

      {/* Ceiling & Pulley Mount */}
      <line x1="120" y1="30" x2="280" y2="30" stroke="#1A1A1A" strokeWidth="3" />
      <path d="M130 30 L120 20 M150 30 L140 20 M170 30 L160 20 M190 30 L180 20 M210 30 L200 20 M230 30 L220 20 M250 30 L240 20 M270 30 L260 20" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="200" y1="30" x2="200" y2="80" stroke="#1A1A1A" strokeWidth="2" />

      {/* Pulley */}
      <circle cx="200" cy="80" r="25" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="200" cy="80" r="3" fill="#1A1A1A" />

      {/* Strings */}
      <line x1="175" y1="80" x2="175" y2="200" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="225" y1="80" x2="225" y2="150" stroke="#1A1A1A" strokeWidth="1.5" />

      {/* Masses */}
      <rect x="155" y="200" width="40" height="50" fill="#FAF9F6" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="210" y="150" width="30" height="35" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      
      {/* Tension Forces */}
      <line x1="175" y1="180" x2="175" y2="120" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="160" y="140" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">T</text>
      
      <line x1="225" y1="130" x2="225" y2="90" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="235" y="115" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">T</text>

      {/* Weight Forces */}
      <line x1="175" y1="250" x2="175" y2="310" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="185" y="300" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">m₁g</text>

      <line x1="225" y1="185" x2="225" y2="245" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="235" y="240" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">m₂g</text>

      {/* Acceleration */}
      {/* Downward for heavy */}
      <path d="M 130 200 L 130 240 M 130 240 L 125 235 M 130 240 L 135 235 M 130 250 L 130 240 L 125 245 M 130 250 L 135 245" stroke="#DC2626" strokeWidth="1.5" fill="none" />
      <text x="115" y="230" fill="#DC2626" fontSize="14" fontFamily="serif" fontStyle="italic">a</text>
      
      {/* Upward for light */}
      <path d="M 270 180 L 270 140 M 270 140 L 265 145 M 270 140 L 275 145 M 270 130 L 270 140 L 265 135 M 270 130 L 275 135" stroke="#DC2626" strokeWidth="1.5" fill="none" />
      <text x="280" y="160" fill="#DC2626" fontSize="14" fontFamily="serif" fontStyle="italic">a</text>

    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      A smooth pulley ensures tension T is equal on both sides. The inextensible string ensures acceleration a is equal in magnitude.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Do not treat two objects moving in opposite directions as a single macroscopic system. You MUST build two separate simultaneous equations.
    </p>
  </div>
);

// Diagram 3: Forces on an Inclined Plane
export const InclinedPlaneSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 3. Inclined Plane</div>
    
    <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1A1A1A" />
        </marker>
      </defs>

      {/* Horizontal and slope */}
      <line x1="50" y1="250" x2="450" y2="250" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50" y1="250" x2="450" y2="100" stroke="#1A1A1A" strokeWidth="3" />
      
      {/* Angle theta curve */}
      <path d="M 120 250 A 70 70 0 0 0 115 225" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <text x="135" y="240" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">θ</text>

      {/* Rotated Group for Block and Perpendicular/Parallel forces */}
      <g transform="rotate(-20 250 175)">
        <rect x="210" y="115" width="80" height="60" fill="white" stroke="#1A1A1A" strokeWidth="2" />
        
        {/* Normal Reaction R */}
        <line x1="250" y1="115" x2="250" y2="30" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="260" y="50" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">R</text>

        {/* Component dotted lines */}
        {/* Parallel (down slope) */}
        <line x1="250" y1="175" x2="160" y2="175" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <text x="160" y="165" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">mg sin θ</text>
        
        {/* Perpendicular (into slope) */}
        <line x1="160" y1="175" x2="160" y2="245" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="250" y1="175" x2="250" y2="245" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
        <text x="260" y="235" fill="#1A1A1A" fontSize="12" fontFamily="serif" fontStyle="italic">mg cos θ</text>
      </g>

      {/* True Weight (Gravity acts straight down, un-rotated) */}
      <line x1="250" y1="175" x2="250" y2="280" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="220" y="275" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">mg</text>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
      Weight always acts vertically downwards. To resolve parallel and perpendicular to the slope, weight must be split into components.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Stop drawing the weight arrow pointing diagonally down the plane. This is the #1 cause of resolving errors.
    </p>
  </div>
);

// Diagram 4: Lift Problem (System vs Isolated)
export const LiftSystemSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 4. Lift Systems</div>
    
    <svg width="600" height="260" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1A1A1A" />
        </marker>
        <marker id="accel-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
        </marker>
      </defs>

      {/* Title A */}
      <text x="150" y="30" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">DIAGRAM A: Whole System</text>
      <line x1="300" y1="10" x2="300" y2="250" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      {/* Title B */}
      <text x="450" y="30" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">DIAGRAM B: Isolated Person</text>

      {/* --- DIAGRAM A --- */}
      {/* Lift Cable */}
      <line x1="150" y1="50" x2="150" y2="90" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="150" y1="90" x2="150" y2="50" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="160" y="65" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">T</text>
      
      {/* Lift Box */}
      <rect x="100" y="90" width="100" height="100" fill="#FAF9F6" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="135" y="140" width="30" height="50" fill="#1A1A1A" opacity="0.1" /> {/* Shadow of person */}
      
      {/* Total Weight */}
      <line x1="150" y1="190" x2="150" y2="240" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="160" y="235" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">(M+m)g</text>

      {/* Acceleration */}
      <path d="M 60 110 L 60 150 M 60 110 L 55 115 M 60 110 L 65 115 M 60 100 L 60 110 L 55 105 M 60 100 L 65 105" stroke="#DC2626" strokeWidth="1.5" fill="none" />
      <text x="40" y="130" fill="#DC2626" fontSize="16" fontFamily="serif" fontStyle="italic">a</text>


      {/* --- DIAGRAM B --- */}
      {/* Isolated Person */}
      <rect x="435" y="140" width="30" height="50" fill="white" stroke="#1A1A1A" strokeWidth="2" />
      
      {/* Normal Reaction */}
      <line x1="450" y1="140" x2="450" y2="80" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="460" y="95" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">R</text>

      {/* Individual Weight */}
      <line x1="450" y1="190" x2="450" y2="240" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="460" y="235" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">mg</text>

      {/* Acceleration */}
      <path d="M 370 110 L 370 150 M 370 110 L 365 115 M 370 110 L 375 115 M 370 100 L 370 110 L 365 105 M 370 100 L 375 105" stroke="#DC2626" strokeWidth="1.5" fill="none" />
      <text x="350" y="130" fill="#DC2626" fontSize="16" fontFamily="serif" fontStyle="italic">a</text>

    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      To find Tension (T), model the entire system. To find Normal Reaction (R), isolate the passenger.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Stop including the Normal Reaction when calculating the overall tension of the lift cable. R is an internal force to the whole system!
    </p>
  </div>
);