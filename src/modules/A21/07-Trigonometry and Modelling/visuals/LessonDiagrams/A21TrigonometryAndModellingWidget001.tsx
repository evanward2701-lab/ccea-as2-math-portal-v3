import React, { useState, useEffect, useRef } from 'react';

export const A21TrigonometryAndModellingWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    const scaleX = 40; // px per radian
    const scaleY = 20; // px per unit

    // Clear and draw grid
    ctx.clearRect(0, 0, width, height);
    
    ctx.strokeStyle = '#E5E5EA';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy); ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
    ctx.stroke();

    const plotFunction = (fn: (x: number) => number, color: string, lineWidth: number, isDashed = false) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      if (isDashed) {
        ctx.setLineDash([5, 5]);
      } else {
        ctx.setLineDash([]);
      }
      
      for (let px = 0; px <= width; px++) {
        const x = (px - cx) / scaleX;
        const y = fn(x);
        const py = cy - y * scaleY;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]); // Reset
    };

    // Plot a*sin(x) in blue
    plotFunction((x) => a * Math.sin(x), 'rgba(9, 132, 227, 0.5)', 2, true);
    // Plot b*cos(x) in red
    plotFunction((x) => b * Math.cos(x), 'rgba(214, 48, 49, 0.5)', 2, true);
    // Plot combined in gold
    plotFunction((x) => a * Math.sin(x) + b * Math.cos(x), '#C5A059', 3, false);

  }, [a, b]);

  const R = Math.sqrt(a * a + b * b);
  const alphaRad = Math.atan2(b, a);
  const alphaDeg = alphaRad * (180 / Math.PI);

  const sign = alphaDeg >= 0 ? '+' : '-';
  const absAlpha = Math.abs(alphaDeg).toFixed(1);

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Harmonic Wave Combiner</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
        Adjust the coefficients to see how <strong>a sin(x) + b cos(x)</strong> physically combines into <strong>R sin(x + α)</strong>.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#0984E3', marginBottom: '8px' }}>
            a (sin coeff): {a.toFixed(1)}
          </label>
          <input 
            type="range" min="-5" max="5" step="0.1" value={a} 
            onChange={(e) => setA(parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#D63031', marginBottom: '8px' }}>
            b (cos coeff): {b.toFixed(1)}
          </label>
          <input 
            type="range" min="-5" max="5" step="0.1" value={b} 
            onChange={(e) => setB(parseFloat(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: '#FCF8F2', border: '1px solid #F3E5D8', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ fontSize: '15px', color: '#2C2C2E', lineHeight: '1.6' }}>
          <div><strong>Equation:</strong> {a.toFixed(1)} sin(x) {b >= 0 ? '+' : '-'} {Math.abs(b).toFixed(1)} cos(x)</div>
          <div><strong>Amplitude (R):</strong> √({a.toFixed(1)}² + {b.toFixed(1)}²) = <strong>{R.toFixed(2)}</strong></div>
          <div><strong>Phase Shift (α):</strong> arctan({b.toFixed(1)} / {a.toFixed(1)}) = <strong>{alphaDeg.toFixed(1)}°</strong></div>
          <div style={{ marginTop: '8px', fontSize: '16px', color: '#C5A059' }}>
            <strong>Harmonic Form:</strong> {R.toFixed(2)} sin(x {sign} {absAlpha}°)
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={300} 
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', width: '100%' }}
        />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px', fontSize: '14px', fontWeight: 600 }}>
        <span style={{ color: '#0984E3' }}>--- a sin(x)</span>
        <span style={{ color: '#D63031' }}>--- b cos(x)</span>
        <span style={{ color: '#C5A059' }}>— Combined Wave</span>
      </div>
    </div>
  );
};
