import React, { useState, useEffect, useRef } from 'react';

export const A21ParametricEquationsWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [xtExpr, setXtExpr] = useState<string>('2 * t');
  const [ytExpr, setYtExpr] = useState<string>('t * t');
  const [tMin, setTMin] = useState<number>(-3);
  const [tMax, setTMax] = useState<number>(3);
  const [error, setError] = useState<string>('');

  const evaluateMath = (expr: string, t: number): number => {
    try {
      // Basic sanitization and Math replacement
      let safeExpr = expr
        .toLowerCase()
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/ln/g, 'Math.log')
        .replace(/pi/g, 'Math.PI')
        .replace(/e\^/g, 'Math.exp(')
        // Ensure t is safely injected
        .replace(/t/g, `(${t})`);
      
      // eslint-disable-next-line no-new-func
      const fn = new Function('return ' + safeExpr);
      return fn();
    } catch (e) {
      throw new Error('Invalid expression');
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = 20; // 20px per unit

    // Clear
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = '#E5E5EA';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = 0; i < width; i += scale) {
      ctx.moveTo(i, 0); ctx.lineTo(i, height);
      ctx.moveTo(0, i); ctx.lineTo(width, i);
    }
    ctx.stroke();

    // Draw axes
    ctx.strokeStyle = '#2C2C2E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy); ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
    ctx.stroke();

    try {
      setError('');
      ctx.beginPath();
      ctx.strokeStyle = '#0984E3';
      ctx.lineWidth = 3;
      
      let first = true;
      const steps = 300;
      
      for (let i = 0; i <= steps; i++) {
        const t = tMin + (tMax - tMin) * (i / steps);
        const x = evaluateMath(xtExpr, t);
        const y = evaluateMath(ytExpr, t);
        
        if (isNaN(x) || isNaN(y)) continue;

        const px = cx + x * scale;
        const py = cy - y * scale; // invert Y for canvas
        
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    } catch (e) {
      setError('Error parsing mathematical expressions. Use standard Javascript math syntax (e.g., sin(t), t*t).');
    }
  }, [xtExpr, ytExpr, tMin, tMax]);

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Parametric Curve Plotter</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '14px' }}>
        Experiment with different functions for <strong>x(t)</strong> and <strong>y(t)</strong> to see how the parameter shapes the curve. Try functions like <code>3*cos(t)</code> and <code>3*sin(t)</code> with <code>t</code> from 0 to 6.28 (2π).
      </p>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap', backgroundColor: '#FCF8F2', padding: '16px', borderRadius: '8px', border: '1px solid #F3E5D8' }}>
        <div style={{ flex: 1, minWidth: '150px' }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>x(t) =</label>
          <input 
            type="text" value={xtExpr} 
            onChange={(e) => setXtExpr(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ flex: 1, minWidth: '150px' }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>y(t) =</label>
          <input 
            type="text" value={ytExpr} 
            onChange={(e) => setYtExpr(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ flex: 0.5, minWidth: '100px' }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>t min</label>
          <input 
            type="number" value={tMin} step="0.5"
            onChange={(e) => setTMin(parseFloat(e.target.value) || 0)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ flex: 0.5, minWidth: '100px' }}>
          <label style={{ display: 'block', fontWeight: 600, color: '#2C2C2E', marginBottom: '8px' }}>t max</label>
          <input 
            type="number" value={tMax} step="0.5"
            onChange={(e) => setTMax(parseFloat(e.target.value) || 0)}
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
      </div>

      {error && <div style={{ color: '#D63031', fontWeight: 600, marginBottom: '16px', textAlign: 'center' }}>{error}</div>}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={600} 
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', width: '100%', maxWidth: '600px' }}
        />
      </div>
    </div>
  );
};
