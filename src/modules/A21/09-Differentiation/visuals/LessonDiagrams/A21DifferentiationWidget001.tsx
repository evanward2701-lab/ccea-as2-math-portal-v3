import React, { useState, useEffect, useRef } from 'react';

export const A21DifferentiationWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hValue, setHValue] = useState<number>(1);
  const fixedX = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    // Grid settings
    const originX = 100;
    const originY = height / 2;
    const scaleX = 100; // pixels per unit
    const scaleY = 100; 

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = '#E5E5EA';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let px = 0; px <= width; px += 50) {
      ctx.moveTo(px, 0); ctx.lineTo(px, height);
    }
    for (let py = 0; py <= height; py += 50) {
      ctx.moveTo(0, py); ctx.lineTo(width, py);
    }
    ctx.stroke();

    // Axes
    ctx.strokeStyle = '#2C2C2E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, originY); ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0); ctx.lineTo(originX, height);
    ctx.stroke();

    // The Function f(x) = sin(x)
    const f = (x: number) => Math.sin(x);
    
    ctx.beginPath();
    ctx.strokeStyle = '#0984E3';
    ctx.lineWidth = 3;
    for (let px = 0; px <= width; px++) {
      const x = (px - originX) / scaleX;
      const y = f(x);
      const py = originY - y * scaleY;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Points
    const x1 = fixedX;
    const y1 = f(x1);
    const x2 = fixedX + hValue;
    const y2 = f(x2);

    const px1 = originX + x1 * scaleX;
    const py1 = originY - y1 * scaleY;
    const px2 = originX + x2 * scaleX;
    const py2 = originY - y2 * scaleY;

    // Secant Line
    const m = (y2 - y1) / hValue;
    const c = y1 - m * x1;

    // Extend line across canvas
    const startX = -1;
    const startY = m * startX + c;
    const endX = 5;
    const endY = m * endX + c;

    ctx.beginPath();
    ctx.moveTo(originX + startX * scaleX, originY - startY * scaleY);
    ctx.lineTo(originX + endX * scaleX, originY - endY * scaleY);
    ctx.strokeStyle = '#D63031';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]); // reset

    // Tangent Line at x1 (for comparison, drawn faintly)
    const exactM = Math.cos(fixedX);
    const exactC = y1 - exactM * x1;
    const exactStartX = -1;
    const exactStartY = exactM * exactStartX + exactC;
    const exactEndX = 5;
    const exactEndY = exactM * exactEndX + exactC;

    ctx.beginPath();
    ctx.moveTo(originX + exactStartX * scaleX, originY - exactStartY * scaleY);
    ctx.lineTo(originX + exactEndX * scaleX, originY - exactEndY * scaleY);
    ctx.strokeStyle = '#00B894';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw Points
    ctx.beginPath();
    ctx.arc(px1, py1, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#2C2C2E';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(px2, py2, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#D63031';
    ctx.fill();

  }, [hValue]);

  const exactGradient = Math.cos(fixedX).toFixed(4);
  const secantGradient = ((Math.sin(fixedX + hValue) - Math.sin(fixedX)) / hValue).toFixed(4);

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Secant to Tangent Limit</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
        Slide <code>h</code> towards 0 to see how the secant line (red dashed) connecting $x$ and $x+h$ becomes the tangent line (green solid) at $x=1$. Notice how the gradient limit approaches exactly $\cos(1)$.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', backgroundColor: '#FCF8F2', padding: '16px', borderRadius: '8px', border: '1px solid #F3E5D8' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>
            Distance h = {hValue.toFixed(3)}
          </label>
          <input 
            type="range" 
            min="0.001" 
            max="2" 
            step="0.001" 
            value={hValue} 
            onChange={(e) => setHValue(parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
        <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #E5E5EA', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#D63031', marginBottom: '4px' }}>
            Secant Gradient: {secantGradient}
          </div>
          <div style={{ fontSize: '14px', color: '#00B894' }}>
            Exact Limit cos(1): {exactGradient}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={300} 
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', width: '100%', maxWidth: '600px' }}
        />
      </div>
    </div>
  );
};
