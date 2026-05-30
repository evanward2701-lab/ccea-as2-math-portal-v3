import React, { useState, useEffect, useRef } from 'react';

export const A21NumericalMethodsWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x0, setX0] = useState<number>(3);

  // The function: f(x) = x^3/3 - x^2 - x + 2
  const f = (x: number) => (Math.pow(x, 3) / 3) - Math.pow(x, 2) - x + 2;
  const df = (x: number) => Math.pow(x, 2) - 2 * x - 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    // Coordinate mapping
    const scaleX = 60;
    const scaleY = 30;
    const offsetX = width / 2;
    const offsetY = height / 2;

    const mapX = (x: number) => offsetX + x * scaleX;
    const mapY = (y: number) => offsetY - y * scaleY;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = '#E5E5EA';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let px = 0; px <= width; px += scaleX) {
      ctx.moveTo(px, 0); ctx.lineTo(px, height);
    }
    for (let py = 0; py <= height; py += scaleY) {
      ctx.moveTo(0, py); ctx.lineTo(width, py);
    }
    ctx.stroke();

    // Axes
    ctx.strokeStyle = '#2C2C2E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, offsetY); ctx.lineTo(width, offsetY);
    ctx.moveTo(offsetX, 0); ctx.lineTo(offsetX, height);
    ctx.stroke();

    // Draw Curve
    ctx.beginPath();
    ctx.strokeStyle = '#0984E3';
    ctx.lineWidth = 3;
    for (let px = 0; px <= width; px++) {
      const x = (px - offsetX) / scaleX;
      const y = f(x);
      const py = mapY(y);
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    const y0 = f(x0);
    const m = df(x0);

    // Draw x0 line
    ctx.beginPath();
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.moveTo(mapX(x0), offsetY);
    ctx.lineTo(mapX(x0), mapY(y0));
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw x0 point
    ctx.beginPath();
    ctx.fillStyle = '#2C2C2E';
    ctx.arc(mapX(x0), offsetY, 5, 0, Math.PI*2);
    ctx.fill();
    ctx.font = '14px sans-serif';
    ctx.fillText("x₀", mapX(x0) - 8, offsetY + 20);

    // Draw point on curve
    ctx.beginPath();
    ctx.fillStyle = '#0984E3';
    ctx.arc(mapX(x0), mapY(y0), 5, 0, Math.PI*2);
    ctx.fill();

    // Calculate x1
    if (Math.abs(m) > 0.001) {
      const x1 = x0 - (y0 / m);
      
      // Draw Tangent
      ctx.beginPath();
      ctx.strokeStyle = '#D63031';
      ctx.lineWidth = 2;
      const drawX_start = -5;
      const drawY_start = m * (drawX_start - x0) + y0;
      const drawX_end = 5;
      const drawY_end = m * (drawX_end - x0) + y0;
      
      ctx.moveTo(mapX(drawX_start), mapY(drawY_start));
      ctx.lineTo(mapX(drawX_end), mapY(drawY_end));
      ctx.stroke();

      // Draw x1 point
      ctx.beginPath();
      ctx.fillStyle = '#D63031';
      ctx.arc(mapX(x1), offsetY, 6, 0, Math.PI*2);
      ctx.fill();
      ctx.fillText("x₁", mapX(x1) - 8, offsetY + 20);
    } else {
      // Horizontal tangent
      ctx.beginPath();
      ctx.strokeStyle = '#D63031';
      ctx.lineWidth = 2;
      ctx.moveTo(0, mapY(y0));
      ctx.lineTo(width, mapY(y0));
      ctx.stroke();
    }
  }, [x0]);

  const y0 = f(x0);
  const m = df(x0);
  let resultText = '';
  if (Math.abs(m) > 0.001) {
    const x1 = x0 - (y0 / m);
    resultText = `x₁ = ${x1.toFixed(4)}`;
  } else {
    resultText = 'Undefined (Horizontal Tangent)';
  }

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Newton-Raphson Explorer</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
        Drag $x_0$ to see how the tangent line projects down to the x-axis to find $x_1$. Watch what happens if you place $x_0$ at a turning point!
      </p>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', backgroundColor: '#FCF8F2', padding: '16px', borderRadius: '8px', border: '1px solid #F3E5D8' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>
            Initial Guess x₀ = {x0.toFixed(2)}
          </label>
          <input 
            type="range" 
            min="-3" 
            max="4" 
            step="0.05" 
            value={x0} 
            onChange={(e) => setX0(parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
        <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #E5E5EA', textAlign: 'center' }}>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
            f'(x₀) = {m.toFixed(2)}
          </div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: Math.abs(m) > 0.001 ? '#00B894' : '#D63031' }}>
            {resultText}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={400} 
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', width: '100%', maxWidth: '600px' }}
        />
      </div>
    </div>
  );
};
