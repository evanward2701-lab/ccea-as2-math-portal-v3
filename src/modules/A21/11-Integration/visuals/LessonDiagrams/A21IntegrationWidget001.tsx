import React, { useState, useEffect, useRef } from 'react';

export const A21IntegrationWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [curveType, setCurveType] = useState<'convex' | 'concave'>('convex');
  const [nStrips, setNStrips] = useState<number>(4);
  const [exactArea, setExactArea] = useState<number>(0);
  const [trapArea, setTrapArea] = useState<number>(0);
  const [errorPct, setErrorPct] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;

    const xMin = 0;
    const xMax = 4;
    const yMax = 16;

    const f_convex = (x: number) => x * x;
    const f_concave = (x: number) => Math.sqrt(x) * 8; // Scaled so it goes up to 16 at x=4

    const isConvex = curveType === 'convex';
    const f = isConvex ? f_convex : f_concave;
    
    // Analytical integrals
    // Int x^2 dx from 0 to 4 = [x^3/3]_0^4 = 64/3 = 21.333
    // Int 8x^(1/2) dx from 0 to 4 = [8*(2/3)x^(3/2)]_0^4 = (16/3)*8 = 128/3 = 42.667
    const exact = isConvex ? (64 / 3) : (128 / 3);
    setExactArea(exact);

    const h = (xMax - xMin) / nStrips;

    const mapX = (x: number) => padding + (x / xMax) * graphWidth;
    const mapY = (y: number) => height - padding - (y / yMax) * graphHeight;

    ctx.clearRect(0, 0, width, height);

    // Draw Trapeziums
    let tArea = 0;
    for (let i = 0; i < nStrips; i++) {
      const x0 = xMin + i * h;
      const x1 = x0 + h;
      const y0 = f(x0);
      const y1 = f(x1);

      tArea += 0.5 * h * (y0 + y1);

      ctx.beginPath();
      ctx.moveTo(mapX(x0), mapY(0));
      ctx.lineTo(mapX(x0), mapY(y0));
      ctx.lineTo(mapX(x1), mapY(y1));
      ctx.lineTo(mapX(x1), mapY(0));
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(197, 160, 89, 0.4)'; // Subtle gold with opacity
      ctx.fill();
      ctx.strokeStyle = '#C5A059'; // Subtle Gold border
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    
    setTrapArea(tArea);
    setErrorPct(Math.abs((tArea - exact) / exact) * 100);

    // Draw Curve
    ctx.beginPath();
    ctx.moveTo(mapX(xMin), mapY(f(xMin)));
    for (let x = xMin; x <= xMax; x += 0.05) {
      ctx.lineTo(mapX(x), mapY(f(x)));
    }
    ctx.strokeStyle = isConvex ? '#0984E3' : '#D63031';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw Axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = '#2C2C2E';
    ctx.lineWidth = 2;
    ctx.stroke();

  }, [curveType, nStrips]);

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Trapezium Rule Explorer</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
        Adjust the number of strips to see how the approximation improves. Notice how the trapeziums sit above a convex curve (overestimate) and below a concave curve (underestimate).
      </p>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid #E5E5EA' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>
            Curve Type
          </label>
          <select 
            value={curveType}
            onChange={(e) => setCurveType(e.target.value as 'convex' | 'concave')}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #E5E5EA', fontFamily: 'inherit' }}
          >
            <option value="convex">Convex (Overestimate)</option>
            <option value="concave">Concave (Underestimate)</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>
            Number of Strips (n) = {nStrips}
          </label>
          <input 
            type="range" 
            min="1" 
            max="20" 
            step="1" 
            value={nStrips} 
            onChange={(e) => setNStrips(parseInt(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #E5E5EA', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px', fontWeight: 600 }}>Exact Analytical Area</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#2C2C2E' }}>{exactArea.toFixed(3)}</div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '8px', border: '1px solid #E5E5EA', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px', fontWeight: 600 }}>Trapezium Approx Area</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#0984E3' }}>{trapArea.toFixed(3)}</div>
        </div>
        <div style={{ flex: 1, backgroundColor: errorPct > 5 ? '#FFF5F5' : '#F0FFF4', padding: '12px', borderRadius: '8px', border: errorPct > 5 ? '1px solid #FEB2B2' : '1px solid #9AE6B4', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px', fontWeight: 600 }}>Error %</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: errorPct > 5 ? '#E53E3E' : '#38A169' }}>{errorPct.toFixed(2)}%</div>
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
