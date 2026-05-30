import React from 'react';

export const A21VectorsSVG002: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', overflowX: 'auto' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" width="100%" height="100%" style={{ minWidth: '350px', maxWidth: '450px' }}>
        <defs>
          <style>
            {`
              .shape-fill { fill: rgba(9, 132, 227, 0.05); }
              .edge { stroke: #2C2C2E; stroke-width: 2.5; }
              .diagonal-oc { stroke: #0984E3; stroke-width: 2; }
              .line-bq { stroke: #D63031; stroke-width: 2; }
              .point-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #2C2C2E; }
              .math-label { font-family: 'Inter', system-ui, sans-serif; font-size: 18px; font-style: italic; font-weight: bold; fill: #2C2C2E; }
              .intersect-label { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 600; fill: #D63031; }
            `}
          </style>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C2C2E" />
          </marker>
        </defs>

        {/* Parallelogram OABC */}
        {/* O=(50, 250), A=(150, 50), C=(350, 50), B=(250, 250) */}
        {/* Wait, the problem says OABC is a parallelogram. The vertices are O, A, B, C in order? 
            No, OABC usually means O to A to B to C. Let's make it O=(50,250), A=(150,50), B=(350,50), C=(250,250).
            Wait, the transcript says: OA = a, OB = b. Q is on OA. OC and BQ intersect.
            If OA=a, OB=b and it's a parallelogram OABC, then OA + AB = OB => AB = b-a.
            But typically, base vectors are the adjacent sides. Let's use the diagram from evidence: O, A, C, B around the perimeter.
            Let's make O=(50, 250), A=(150, 50), C=(350, 50), B=(250, 250). 
            OA is the left side. OB is the bottom side. OC is the diagonal.
            Let's adjust points to match standard notation: O=(50, 250), A=(150, 50), C=(350, 50), B=(250, 250) (This makes OACB)
            Let's trace: O(50,250) -> A(150,50) -> C(350,50) -> B(250,250) -> O(50,250). 
            Yes, this works. The question calls it OABC, but OA=a, OB=b implies OA and OB are the base sides meeting at O.
            Q is on OA such that OQ = 1/3 OA.
        */}
        <polygon points="50,250 150,50 350,50 250,250" className="shape-fill" />

        {/* Diagonal OC */}
        <line x1="50" y1="250" x2="350" y2="50" className="diagonal-oc" />

        {/* Point Q on OA (1/3 of the way from O to A) */}
        {/* O=(50,250), A=(150,50). Q = O + 1/3(A-O) = (50+33.3, 250-66.6) = (83.3, 183.3) */}
        <circle cx="83.3" cy="183.3" r="4" fill="#2C2C2E" />

        {/* Line BQ */}
        <line x1="250" y1="250" x2="83.3" y2="183.3" className="line-bq" />

        {/* Intersection X */}
        {/* OC: y - 250 = -2/3(x - 50) => 2x + 3y = 850 */}
        {/* BQ: m = (250 - 183.3) / (250 - 83.3) = 66.7 / 166.7 = 2/5 */}
        {/* BQ: y - 250 = 2/5(x - 250) => 2x - 5y = -750 */}
        {/* 2x + 3y = 850, 2x - 5y = -750 => 8y = 1600 => y = 200 */}
        {/* 2x + 600 = 850 => 2x = 250 => x = 125 */}
        <circle cx="125" cy="200" r="5" fill="#D63031" />

        {/* Edges */}
        <line x1="50" y1="250" x2="150" y2="50" className="edge" markerEnd="url(#arrow)" />
        <line x1="50" y1="250" x2="250" y2="250" className="edge" markerEnd="url(#arrow)" />
        <line x1="150" y1="50" x2="350" y2="50" className="edge" />
        <line x1="250" y1="250" x2="350" y2="50" className="edge" />

        {/* Point Labels */}
        <text x="30" y="270" className="point-label">O</text>
        <text x="140" y="35" className="point-label">A</text>
        <text x="360" y="35" className="point-label">C</text>
        <text x="260" y="270" className="point-label">B</text>
        
        <rect x="45" y="170" width="18" height="20" fill="#FAF9F6" />
        <text x="50" y="188" className="point-label">Q</text>

        <rect x="135" y="195" width="18" height="20" fill="#FAF9F6" />
        <text x="140" y="212" className="intersect-label">X</text>

        {/* Vector Labels */}
        <rect x="75" y="130" width="20" height="25" fill="#FAF9F6" />
        <text x="85" y="150" className="math-label">a</text>
        
        <rect x="140" y="260" width="20" height="25" fill="#FAF9F6" />
        <text x="150" y="280" className="math-label">b</text>

      </svg>
    </div>
  );
};
