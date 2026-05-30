import React, { useState, useEffect, useRef } from 'react';

export const A21ProofsAndPartialFractionsWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [valA, setValA] = useState<number>(1);
  const [valB, setValB] = useState<number>(1);

  const width = 760;
  const height = 400;
  const scaleX = 40;
  const scaleY = 20;
  const offsetX = width / 2;
  const offsetY = height / 2;

  const originalFunction = (x: number) => {
    if (Math.abs(x - 3) < 0.05 || Math.abs(x + 1) < 0.05) return null;
    return (6 * x - 2) / ((x - 3) * (x + 1));
  };

  const partialFunction = (x: number, a: number, b: number) => {
    if (Math.abs(x - 3) < 0.05 || Math.abs(x + 1) < 0.05) return null;
    return (a / (x - 3)) + (b / (x + 1));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and draw background
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    // Draw Axes
    ctx.beginPath();
    ctx.strokeStyle = '#E5E5EA';
    ctx.lineWidth = 2;
    ctx.moveTo(0, offsetY);
    ctx.lineTo(width, offsetY);
    ctx.moveTo(offsetX, 0);
    ctx.lineTo(offsetX, height);
    ctx.stroke();

    // Draw Tick Marks
    ctx.fillStyle = '#666666';
    ctx.font = '12px Inter, sans-serif';
    for (let i = -10; i <= 10; i++) {
      if (i !== 0) {
        ctx.fillText(i.toString(), offsetX + i * scaleX - 5, offsetY + 18);
        ctx.fillText(i.toString(), offsetX - 20, offsetY - i * scaleY + 4);
      }
    }

    const drawCurve = (func: (x: number) => number | null, color: string, isDashed: boolean, a = 0, b = 0) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = isDashed ? 3 : 4;
      if (isDashed) ctx.setLineDash([8, 8]);
      else ctx.setLineDash([]);

      let firstPoint = true;
      for (let px = 0; px <= width; px++) {
        const x = (px - offsetX) / scaleX;
        let y = null;
        if (func === originalFunction) y = originalFunction(x);
        else y = partialFunction(x, a, b);

        if (y === null || Math.abs(y) > 50) {
          firstPoint = true;
          continue;
        }

        const py = offsetY - y * scaleY;

        if (firstPoint) {
          ctx.moveTo(px, py);
          firstPoint = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // Original (Deep Charcoal)
    drawCurve(originalFunction, 'rgba(44, 44, 46, 0.5)', false);

    // Partial (Subtle Gold)
    drawCurve(partialFunction, '#C5A059', true, valA, valB);

  }, [valA, valB]);

  const isMatch = valA === 4 && valB === 2;

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Partial Fractions Identity Grapher</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '0.95rem' }}>
        Adjust A and B to make the <strong style={{ color: '#C5A059' }}>gold dashed curve</strong> perfectly match the <strong style={{ color: '#2C2C2E' }}>charcoal solid curve</strong>.
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '20px', fontSize: '1.1rem', fontFamily: '"Times New Roman", serif' }}>
        <span style={{ color: '#2C2C2E', fontWeight: 'bold' }}>y = (6x - 2) / ((x - 3)(x + 1))</span>
        <span style={{ color: '#888' }}>vs</span>
        <span style={{ color: '#C5A059', fontWeight: 'bold' }}>y = A / (x - 3) + B / (x + 1)</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <canvas 
          ref={canvasRef} 
          width={width} 
          height={height} 
          style={{ 
            border: '2px solid #E5E5EA', 
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(44,44,46,0.05)',
            maxWidth: '100%',
            height: 'auto'
          }} 
        />
      </div>

      <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', border: '1px solid #E5E5EA' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <label style={{ fontWeight: 600, color: '#2C2C2E', width: '20px' }}>A:</label>
          <input 
            type="range" 
            min="-5" max="10" step="0.5" 
            value={valA} 
            onChange={(e) => setValA(parseFloat(e.target.value))}
            style={{ flex: 1, accentColor: '#C5A059' }}
          />
          <span style={{ fontFamily: 'monospace', padding: '4px 8px', backgroundColor: '#FAF9F6', border: '1px solid #E5E5EA', borderRadius: '4px', width: '48px', textAlign: 'center' }}>
            {valA.toFixed(1)}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <label style={{ fontWeight: 600, color: '#2C2C2E', width: '20px' }}>B:</label>
          <input 
            type="range" 
            min="-5" max="10" step="0.5" 
            value={valB} 
            onChange={(e) => setValB(parseFloat(e.target.value))}
            style={{ flex: 1, accentColor: '#C5A059' }}
          />
          <span style={{ fontFamily: 'monospace', padding: '4px 8px', backgroundColor: '#FAF9F6', border: '1px solid #E5E5EA', borderRadius: '4px', width: '48px', textAlign: 'center' }}>
            {valB.toFixed(1)}
          </span>
        </div>

        {isMatch && (
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#FCF8F2', color: '#C5A059', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #C5A059' }}>
            🎉 Perfect Match! The identity is solved.
          </div>
        )}
      </div>
    </div>
  );
};
