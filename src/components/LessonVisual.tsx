import React from "react";

interface LessonVisualProps {
  visualId: string;
}

export function LessonVisual({ visualId }: LessonVisualProps) {
  switch (visualId) {
    case "M1":
      return (
        <div className="flex flex-col gap-8 my-8">
          {/* Diagram 1: The F=ma Bridge */}
          <div className="w-full flex flex-col items-center p-6 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[4px_4px_0px_#1A1A1A]">
            <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
              Fig 1. The F=ma Bridge
            </div>
            <svg width="100%" height="160" viewBox="0 0 600 160" className="mt-4">
              {/* Forces Block */}
              <rect x="20" y="40" width="140" height="80" fill="white" stroke="#1A1A1A" strokeWidth="2"/>
              <text x="90" y="75" textAnchor="middle" className="font-serif font-bold text-sm" fill="#1A1A1A">FORCES</text>
              <text x="90" y="95" textAnchor="middle" className="text-[10px] uppercase tracking-wider font-sans opacity-60" fill="#1A1A1A">Vector Input</text>

              {/* Bridge Box */}
              <rect x="240" y="50" width="120" height="60" fill="#F1EFE9" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4"/>
              <text x="300" y="85" textAnchor="middle" className="font-serif italic font-bold text-lg" fill="#1A1A1A">F = ma</text>

              {/* Motion Block */}
              <rect x="440" y="40" width="140" height="80" fill="white" stroke="#1A1A1A" strokeWidth="2"/>
              <text x="510" y="75" textAnchor="middle" className="font-serif font-bold text-sm" fill="#1A1A1A">MOTION</text>
              <text x="510" y="95" textAnchor="middle" className="text-[10px] uppercase tracking-wider font-sans opacity-60" fill="#1A1A1A">Kinematics (s,u,v,a,t)</text>

              {/* Connecting Arrows */}
              <path d="M 160 80 L 232 80" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)"/>
              <path d="M 360 80 L 432 80" stroke="#1A1A1A" strokeWidth="2" markerEnd="url(#arrow)"/>
              
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#1A1A1A" />
                </marker>
              </defs>
            </svg>
            <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-4 italic">
              Newton's Second Law links the forces acting on a particle to its resulting acceleration.
            </p>
          </div>

          {/* Diagram 2: Scalar vs Vector Distance/Displacement */}
          <div className="w-full flex flex-col items-center p-6 border border-[#1A1A1A] bg-white relative shadow-[4px_4px_0px_#1A1A1A]">
            <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
              Fig 2. Vector Directionality
            </div>
            <svg width="100%" height="140" viewBox="0 0 600 140" className="mt-4">
              {/* Axis line */}
              <line x1="50" y1="80" x2="550" y2="80" stroke="#1A1A1A" strokeWidth="2" />
              <line x1="300" y1="70" x2="300" y2="90" stroke="#1A1A1A" strokeWidth="2" />
              <text x="300" y="110" textAnchor="middle" className="font-sans font-bold text-[10px]">Start (0)</text>

              {/* Positions */}
              <circle cx="150" cy="80" r="5" fill="#1A1A1A" />
              <text x="150" y="110" textAnchor="middle" className="font-serif italic text-xs">Finish</text>
              <circle cx="450" cy="80" r="5" fill="#1A1A1A" />
              

              {/* Direction Indicator */}
              <path d="M 480 40 L 540 40" stroke="#1A1A1A" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)"/>
              <text x="510" y="30" textAnchor="middle" className="font-sans text-[9px] font-bold">Positive Direction</text>
              
              {/* Path representation */}
              <path d="M 300 70 C 220 40, 200 40, 150 70" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="3"/>
              <text x="225" y="40" textAnchor="middle" className="font-serif italic text-xs">Displacement = -3m</text>
              <text x="225" y="25" textAnchor="middle" className="font-serif italic text-xs">Distance = 3m</text>
            </svg>
            <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-4 italic">
              Displacement includes direction relative to the origin, making it a vector. Distance is a scalar and is always positive.
            </p>
          </div>

          {/* Diagram 3: 2x2 Modelling Assumptions Matrix */}
          <div className="w-full flex flex-col items-center p-6 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[4px_4px_0px_#1A1A1A]">
            <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
              Fig 3. Core Modeling Assumptions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6">
              <div className="p-4 bg-white border border-[#1A1A1A]/20 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 px-2 py-0.5 mb-2">Particle</span>
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="6" fill="#1A1A1A" />
                  <line x1="30" y1="30" x2="55" y2="30" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2"/>
                  <text x="45" y="25" className="text-[8px] font-mono">Mass (m)</text>
                </svg>
                <p className="text-[10px] text-[#1A1A1A]/80 mt-1">Mass concentrated at a point. Rotational effects ignored.</p>
              </div>

              <div className="p-4 bg-white border border-[#1A1A1A]/20 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 px-2 py-0.5 mb-2">Inextensible String</span>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <rect x="5" y="15" width="15" height="15" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
                  <rect x="80" y="15" width="15" height="15" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
                  <line x1="20" y1="22" x2="80" y2="22" stroke="#1A1A1A" strokeWidth="2"/>
                  <text x="50" y="14" textAnchor="middle" className="text-[9px] font-serif italic">Equal acceleration (a)</text>
                </svg>
                <p className="text-[10px] text-[#1A1A1A]/80 mt-1">String does not stretch. Connected particles share acceleration magnitude.</p>
              </div>

              <div className="p-4 bg-white border border-[#1A1A1A]/20 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 px-2 py-0.5 mb-2">Smooth Surface</span>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <line x1="10" y1="30" x2="90" y2="30" stroke="#1A1A1A" strokeWidth="2"/>
                  <rect x="40" y="12" width="20" height="18" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] text-[#1A1A1A]/80 mt-1">Zero friction present to oppose intended horizontal velocity.</p>
              </div>

              <div className="p-4 bg-white border border-[#1A1A1A]/20 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 px-2 py-0.5 mb-2">Smooth Pulley</span>
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <circle cx="50" cy="20" r="10" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
                  <line x1="40" y1="20" x2="40" y2="40" stroke="#1A1A1A" strokeWidth="1.5" />
                  <line x1="60" y1="20" x2="60" y2="40" stroke="#1A1A1A" strokeWidth="1.5" />
                  <text x="50" y="8" textAnchor="middle" className="text-[9px] font-serif italic">Equal tension (T)</text>
                </svg>
                <p className="text-[10px] text-[#1A1A1A]/80 mt-1">No friction in the pulley ensures tension is equal on both sides.</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "M2":
      return (
        <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
           <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. Kinematics Profile</div>
           <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 30 L50 220 L350 220" stroke="#1A1A1A" strokeWidth="2" />
            <path d="M50 220 L130 80 L250 80 L330 220" stroke="#1A1A1A" strokeWidth="3" />
            
            <path d="M130 80 L130 220" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            <path d="M250 80 L250 220" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            <path d="M50 80 L130 80" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            
            <text x="30" y="230" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">0</text>
            <text x="25" y="85" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">v</text>
            <text x="120" y="245" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">t₁</text>
            <text x="240" y="245" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">t₂</text>
            
            <text x="340" y="210" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">t</text>
            <text x="30" y="40" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">v</text>
            
            <rect x="150" y="120" width="80" height="40" fill="white" stroke="#1A1A1A" strokeWidth="1" />
            <text x="160" y="145" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontStyle="italic">area = distance</text>
          </svg>
        </div>
      );

    case "M3":
      return (
        <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
           <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 3. Connected Particles</div>
           <svg width="300" height="320" viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 30 L230 30" stroke="#1A1A1A" strokeWidth="3" />
            <path d="M80 30 L90 20 M110 30 L120 20 M140 30 L150 20 M170 30 L180 20 M200 30 L210 20" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.6" />
            
            <path d="M150 30 L150 80" stroke="#1A1A1A" strokeWidth="2" />
            <circle cx="150" cy="100" r="20" stroke="#1A1A1A" strokeWidth="2" fill="white" />
            <circle cx="150" cy="100" r="3" fill="#1A1A1A" />
            
            <path d="M130 100 L130 220" stroke="#1A1A1A" strokeWidth="1.5" />
            <path d="M170 100 L170 160" stroke="#1A1A1A" strokeWidth="1.5" />
            
            <rect x="115" y="220" width="30" height="30" stroke="#1A1A1A" strokeWidth="2" fill="#F1EFE9" />
            <rect x="155" y="160" width="30" height="30" stroke="#1A1A1A" strokeWidth="2" fill="#1A1A1A" />
            
            <text x="95" y="240" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">A</text>
            <text x="195" y="180" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic" fillOpacity="0.4">B</text>
            
            <path d="M105 265 L105 295 L100 285 M105 295 L110 285" stroke="#1A1A1A" strokeWidth="2" />
            <path d="M150 205 L150 235 L145 225 M150 235 L155 225" stroke="#1A1A1A" strokeWidth="2" />
            <text x="70" y="285" fill="#1A1A1A" fontSize="14" fontFamily="serif">m₁g</text>
            <text x="120" y="225" fill="#1A1A1A" fontSize="14" fontFamily="serif">m₂g</text>
          </svg>
        </div>
      );

    case "Q-M1-tow":
      return (
        <div className="w-full flex flex-col items-center py-12 my-6 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[4px_4px_0px_#1A1A1A]">
          <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-2 py-1 text-[9px] uppercase tracking-widest font-bold">Fig. Towing Model</div>
          <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ground */}
            <path d="M20 100 L280 100" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Rescue vehicle */}
            <rect x="180" y="60" width="60" height="30" stroke="#1A1A1A" strokeWidth="2" fill="white" />
            <circle cx="195" cy="95" r="8" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            <circle cx="225" cy="95" r="8" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            
            {/* Broken down car */}
            <rect x="60" y="70" width="40" height="20" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            <circle cx="70" cy="95" r="6" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            <circle cx="90" cy="95" r="6" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            
            {/* Tow bar */}
            <path d="M100 80 L180 80" stroke="#1A1A1A" strokeWidth="2" />
            <text x="140" y="70" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" fontStyle="italic" textAnchor="middle">Tow bar</text>
            
            <text x="210" y="50" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Rescue Vehicle</text>
            <text x="80" y="60" fill="#1A1A1A" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Car</text>
          </svg>
        </div>
      );

    case "Q-M3-lift":
      return (
        <div className="w-full flex flex-col items-center py-12 my-6 border border-[#1A1A1A] bg-white relative shadow-[4px_4px_0px_#1A1A1A]">
          <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-2 py-1 text-[9px] uppercase tracking-widest font-bold">Fig. Lift Physics</div>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20 L100 60" stroke="#1A1A1A" strokeWidth="2" />
            
            <rect x="50" y="60" width="100" height="120" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            
            {/* Woman inside lift (modeled as block) */}
            <rect x="85" y="130" width="30" height="50" stroke="#1A1A1A" strokeWidth="2" fill="#FAF9F6" />
            <text x="100" y="160" fill="#1A1A1A" fontSize="14" fontFamily="serif" textAnchor="middle">W</text>
            
            {/* Forces on lift */}
            <path d="M40 80 L40 60 L35 65 M40 60 L45 65" stroke="#1A1A1A" strokeWidth="1.5" />
            <text x="30" y="70" fill="#1A1A1A" fontSize="12" fontFamily="serif" textAnchor="end">a</text>
            <text x="120" y="45" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">T</text>
          </svg>
        </div>
      );

    case "S1":
    case "S2":
      return (
        <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
          <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 4. Data Distribution</div>
          <svg width="400" height="260" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 220 L360 220" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.4" />
            <path d="M60 40 L60 220" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.4" />
            
            {[
              [100, 190], [130, 170], [160, 190], [180, 140], [200, 170], [220, 110], [240, 130], [270, 90], [290, 70], [310, 100], [340, 50]
            ].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
            ))}
            
            <path d="M80 200 L350 60" stroke="#1A1A1A" strokeWidth="2" />
            
            <text x="160" y="245" fill="#1A1A1A" fontSize="12" fontFamily="serif" opacity="0.6">Independent Variable</text>
            <text x="30" y="140" fill="#1A1A1A" fontSize="12" fontFamily="serif" opacity="0.6" transform="rotate(-90 30 140)">Dependent Variable</text>
          </svg>
        </div>
      );

    case "S3":
      return (
        <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
           <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 5. Venn Diagram</div>
           <svg width="400" height="260" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="30" y="30" width="340" height="200" stroke="#1A1A1A" strokeWidth="2" fill="none" />
             <text x="45" y="55" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">E</text>
             
             <circle cx="150" cy="130" r="70" stroke="#1A1A1A" strokeWidth="2" fill="none" />
             <circle cx="250" cy="130" r="70" stroke="#1A1A1A" strokeWidth="2" fill="none" />
             
             <path d="M150 60 A 70 70 0 0 1 150 200 A 70 70 0 0 0 150 60" fill="#1A1A1A" opacity="0.1" />
             
             <text x="110" y="135" fill="#1A1A1A" fontSize="20" fontFamily="serif">A</text>
             <text x="275" y="135" fill="#1A1A1A" fontSize="20" fontFamily="serif">B</text>
             <text x="180" y="135" fill="#1A1A1A" fontSize="14" fontFamily="serif">A ∩ B</text>
           </svg>
        </div>
      );

    case "S4":
      return (
        <div className="w-full flex flex-col items-center py-16 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
          <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 6. Normal Distribution</div>
          <svg width="400" height="260" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M30 210 L370 210" stroke="#1A1A1A" strokeWidth="1.5" />
             
             <path d="M50 210 C 90 210, 120 190, 150 120 C 170 70, 180 50, 200 50 C 220 50, 230 70, 250 120 C 280 190, 310 210, 350 210" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
             
             <path d="M200 50 L200 210" stroke="#1A1A1A" strokeDasharray="5 5" strokeWidth="1.5" opacity="0.6" />
             <path d="M140 160 L140 210" stroke="#1A1A1A" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.6" />
             <path d="M260 160 L260 210" stroke="#1A1A1A" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.6" />
             
             <text x="195" y="235" fill="#1A1A1A" fontSize="16" fontFamily="serif" fontStyle="italic">μ</text>
             <text x="125" y="235" fill="#1A1A1A" fontSize="14" fontFamily="serif">μ - σ</text>
             <text x="245" y="235" fill="#1A1A1A" fontSize="14" fontFamily="serif">μ + σ</text>
             
             <text x="270" y="80" fill="#1A1A1A" fontSize="18" fontFamily="serif" fontStyle="italic">N(μ, σ²)</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
}