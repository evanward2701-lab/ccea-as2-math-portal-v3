import React, { useState, useEffect, useRef } from 'react';

export const A21VectorsWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State for draggable points
  const [A, setA] = useState({ x: 200, y: 100 });
  const [B, setB] = useState({ x: 400, y: 300 });
  const [dragging, setDragging] = useState<'A' | 'B' | null>(null);

  const O = { x: 100, y: 300 };

  const getDistance = (p1: {x: number, y: number}, p2: {x: number, y: number}) => {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate derived points
    const C = { x: A.x + B.x - O.x, y: A.y + B.y - O.y };
    const Q = { x: O.x + (A.x - O.x) / 3, y: O.y + (A.y - O.y) / 3 };

    // Intersection of OC and BQ
    const vOC = { x: C.x - O.x, y: C.y - O.y };
    const vBQ = { x: Q.x - B.x, y: Q.y - B.y };
    
    const denominator = (vOC.x * vBQ.y - vOC.y * vBQ.x);
    // Add small epsilon to prevent divide by zero
    const t = denominator === 0 ? 0 : ((O.y - B.y) * vBQ.x - (O.x - B.x) * vBQ.y) / denominator;
    
    const X = { x: O.x + t * vOC.x, y: O.y + t * vOC.y };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Parallelogram Area
    ctx.beginPath();
    ctx.moveTo(O.x, O.y);
    ctx.lineTo(A.x, A.y);
    ctx.lineTo(C.x, C.y);
    ctx.lineTo(B.x, B.y);
    ctx.closePath();
    ctx.fillStyle = 'rgba(9, 132, 227, 0.05)';
    ctx.fill();
    ctx.strokeStyle = '#2C2C2E';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Internal Lines
    ctx.beginPath();
    ctx.moveTo(O.x, O.y);
    ctx.lineTo(C.x, C.y);
    ctx.strokeStyle = '#0984E3';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(B.x, B.y);
    ctx.lineTo(Q.x, Q.y);
    ctx.strokeStyle = '#D63031';
    ctx.stroke();

    // Draw Points
    const drawPoint = (p: {x: number, y: number}, label: string, color: string) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.fillStyle = '#2C2C2E';
      ctx.font = '600 14px Inter, system-ui, sans-serif';
      
      // Determine label offset based on point position relative to center to avoid overlapping lines
      const cx = (O.x + C.x) / 2;
      const cy = (O.y + C.y) / 2;
      const ox = p.x > cx ? 12 : -20;
      const oy = p.y > cy ? 20 : -10;
      
      ctx.fillText(label, p.x + ox, p.y + oy);
    };

    drawPoint(O, 'O', '#2C2C2E');
    drawPoint(A, 'A (Drag)', '#00B894');
    drawPoint(B, 'B (Drag)', '#00B894');
    drawPoint(C, 'C', '#2C2C2E');
    drawPoint(Q, 'Q', '#FDCB6E');
    drawPoint(X, 'X', '#D63031');

  }, [A, B]);

  // Event Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    
    if (getDistance(mouse, A) < 20) setDragging('A');
    else if (getDistance(mouse, B) < 20) setDragging('B');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    if (dragging === 'A') setA(mouse);
    if (dragging === 'B') setB(mouse);
  };

  const handleMouseUp = () => setDragging(null);

  // Calculate ratio for display
  const C = { x: A.x + B.x - O.x, y: A.y + B.y - O.y };
  const Q = { x: O.x + (A.x - O.x) / 3, y: O.y + (A.y - O.y) / 3 };
  const vOC = { x: C.x - O.x, y: C.y - O.y };
  const vBQ = { x: Q.x - B.x, y: Q.y - B.y };
  const denominator = (vOC.x * vBQ.y - vOC.y * vBQ.x);
  const t = denominator === 0 ? 0 : ((O.y - B.y) * vBQ.x - (O.x - B.x) * vBQ.y) / denominator;
  const X = { x: O.x + t * vOC.x, y: O.y + t * vOC.y };

  const lenOX = getDistance(O, X);
  const lenXC = getDistance(X, C);
  const ratio = lenOX === 0 || lenXC === 0 ? 0 : lenOX / lenXC;

  // It should be exactly 1/3 (0.333...)
  // We format it gracefully to hide floating point inaccuracies
  const displayRatio = ratio > 0 ? (1/ratio).toFixed(2) : "0.00";

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Interactive Geometric Proof</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
        Drag points <strong>A</strong> and <strong>B</strong> to change the base vectors of the parallelogram. Notice that the algebraic proof holds true regardless of the shape's coordinates!
      </p>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', backgroundColor: '#FCF8F2', padding: '16px', borderRadius: '8px', border: '1px solid #F3E5D8' }}>
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0', fontSize: '15px', color: '#666' }}>
            The calculated ratio <strong style={{ color: '#2C2C2E' }}>OX : XC</strong> based on your current shape is:
          </p>
        </div>
        <div style={{ backgroundColor: '#FFFFFF', padding: '12px 24px', borderRadius: '8px', border: '1px solid #E5E5EA', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 700, color: '#D63031' }}>
            1.00 : {displayRatio}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={450} 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', width: '100%', maxWidth: '600px', cursor: dragging ? 'grabbing' : 'grab' }}
        />
      </div>
    </div>
  );
};
