import React from 'react';

// Diagram 1: Histogram Area/Density
export const HistogramDensitySVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 1. Histogram Geometry</div>
    
    <svg width="500" height="250" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <path d="M50 30 L50 200 L450 200" stroke="#1A1A1A" strokeWidth="2" />
      <text x="30" y="120" transform="rotate(-90 30 120)" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontStyle="italic">Frequency Density</text>
      <text x="250" y="230" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontStyle="italic">Time</text>

      {/* Bars */}
      {/* Bar 1: Width 10 (50 to 150), Height high */}
      <rect x="50" y="60" width="100" height="140" fill="#FAF9F6" stroke="#1A1A1A" strokeWidth="2" />
      
      {/* Bar 2: Width 10 (150 to 250), Height medium */}
      <rect x="150" y="100" width="100" height="100" fill="#FAF9F6" stroke="#1A1A1A" strokeWidth="2" />
      
      {/* Bar 3: Width 20 (250 to 450), Height low */}
      <rect x="250" y="140" width="200" height="60" fill="#1A1A1A" fillOpacity="0.1" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Area Label inside Bar 3 */}
      <text x="350" y="175" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontWeight="bold">Area = Frequency</text>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      In a histogram, the area of the bar represents the frequency. 
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Do not read the height as the frequency when classes have unequal widths!
    </p>
  </div>
);

// Diagram 2: PMCC Formula Panel (Using HTML/Tailwind for formula clarity)
export const PMCCPanelSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 2. PMCC Core Formula</div>
    
    <div className="my-8 flex flex-col items-center bg-white border-2 border-[#1A1A1A] p-8 shadow-[4px_4px_0px_#1A1A1A]">
      <div className="flex items-center space-x-4 font-serif text-xl">
        <span className="italic">r</span>
        <span>=</span>
        <div className="flex flex-col items-center">
          <span className="border-b-2 border-[#1A1A1A] pb-1 px-2">S<sub className="text-sm">xy</sub></span>
          <span className="pt-1 px-2">√(S<sub className="text-sm">xx</sub> S<sub className="text-sm">yy</sub>)</span>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-[#1A1A1A]/20 grid grid-cols-1 gap-2 text-sm font-serif">
        <span>S<sub className="text-xs">xx</sub> = Σx² - (Σx)²/n</span>
        <span>S<sub className="text-xs">yy</sub> = Σy² - (Σy)²/n</span>
        <span>S<sub className="text-xs">xy</sub> = Σxy - (ΣxΣy)/n</span>
      </div>
    </div>

    <div className="bg-[#1A1A1A] text-white px-6 py-2 font-mono font-bold tracking-widest">
      -1 ≤ r ≤ 1
    </div>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-6 px-6 italic">
      The PMCC formula combines summary statistics to measure linear correlation.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Always verify your result. Accepting an impossible value like r = 1.2 proves to the examiner you do not understand the metric.
    </p>
  </div>
);

// Diagram 3: Scatter Diagram with Distinct Clusters
export const ScatterClustersSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-white relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 3. Subgroups in Data</div>
    
    <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <path d="M50 30 L50 250 L450 250" stroke="#1A1A1A" strokeWidth="2" />
      <text x="30" y="40" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">y</text>
      <text x="440" y="270" fill="#1A1A1A" fontSize="14" fontFamily="serif" fontStyle="italic">x</text>

      {/* Group A (Negative internal trend, bottom left) */}
      <ellipse cx="150" cy="180" rx="60" ry="40" transform="rotate(-30 150 180)" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="150" y="240" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Group A</text>
      {[ [110, 160], [130, 175], [150, 180], [170, 190], [180, 205] ].map(([x,y], i) => (
        <circle key={'a'+i} cx={x} cy={y} r="4" fill="#1A1A1A" />
      ))}

      {/* Group B (Negative internal trend, top right) */}
      <ellipse cx="350" cy="100" rx="60" ry="40" transform="rotate(-30 350 100)" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="350" y="50" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Group B</text>
      {[ [310, 80], [330, 95], [350, 100], [370, 110], [380, 125] ].map(([x,y], i) => (
        <circle key={'b'+i} cx={x} cy={y} r="4" fill="#1A1A1A" />
      ))}

      {/* Misleading Overall Trend Line (Positive) */}
      <line x1="80" y1="230" x2="420" y2="50" stroke="#DC2626" strokeWidth="3" opacity="0.5" />
      <text x="250" y="130" textAnchor="middle" fill="#DC2626" fontSize="14" fontFamily="sans-serif" fontWeight="bold" transform="rotate(-28 250 130)">Misleading Overall Trend</text>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-4 px-6 italic">
      An overall regression line can be highly misleading if the population contains distinct sections or subgroups.
      <br/><strong className="text-red-600 not-italic uppercase text-[10px]">Exam Misconception:</strong> Do not blindly trust a single PMCC value without looking at the visual scatter structure first.
    </p>
  </div>
);

// Diagram 5: Linear Interpolation Double Number Line
export const InterpolationLineSVG: React.FC = () => (
  <div className="w-full flex flex-col items-center py-12 mb-12 border border-[#1A1A1A] bg-[#FAF9F6] relative shadow-[8px_8px_0px_#1A1A1A]">
    <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Fig 5. Linear Interpolation</div>
    
    <svg width="500" height="180" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Line: Cumulative Frequency */}
      <text x="50" y="45" textAnchor="end" fill="#1A1A1A" fontSize="11" fontFamily="sans-serif" fontStyle="italic">Cum. Freq (y)</text>
      <line x1="80" y1="40" x2="420" y2="40" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="80" cy="40" r="4" fill="#1A1A1A" />
      <circle cx="220" cy="40" r="4" fill="#2563EB" /> {/* Target point */}
      <circle cx="420" cy="40" r="4" fill="#1A1A1A" />
      
      <text x="80" y="25" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">5</text>
      <text x="220" y="25" textAnchor="middle" fill="#2563EB" fontSize="14" fontFamily="sans-serif" fontWeight="bold">10</text>
      <text x="420" y="25" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">17</text>

      {/* Connection Dashed Lines */}
      <line x1="80" y1="40" x2="80" y2="120" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <line x1="220" y1="40" x2="220" y2="120" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="420" y1="40" x2="420" y2="120" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

      {/* Bottom Line: Class Boundaries (x) */}
      <text x="50" y="125" textAnchor="end" fill="#1A1A1A" fontSize="11" fontFamily="sans-serif" fontStyle="italic">Boundary (x)</text>
      <line x1="80" y1="120" x2="420" y2="120" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="80" cy="120" r="4" fill="#1A1A1A" />
      <circle cx="220" cy="120" r="4" fill="#2563EB" /> {/* Target point */}
      <circle cx="420" cy="120" r="4" fill="#1A1A1A" />
      
      <text x="80" y="145" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">10</text>
      <text x="220" y="145" textAnchor="middle" fill="#2563EB" fontSize="16" fontFamily="serif" fontStyle="italic" fontWeight="bold">Q₂</text>
      <text x="420" y="145" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="sans-serif">20</text>

      {/* Brackets / Ratios indicator */}
      <path d="M 80 60 L 80 70 L 220 70 L 220 60" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <text x="150" y="85" textAnchor="middle" fill="#1A1A1A" fontSize="10">Gap = 5</text>
      
      <path d="M 80 100 L 80 90 L 420 90 L 420 100" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <text x="250" y="85" textAnchor="middle" fill="#1A1A1A" fontSize="10">Total = 12</text>
    </svg>

    <p className="text-[11px] font-sans text-[#1A1A1A]/70 text-center mt-2 px-6 italic">
      Interpolation maps the fraction of the frequency directly onto the fraction of the class width.
    </p>
  </div>
);