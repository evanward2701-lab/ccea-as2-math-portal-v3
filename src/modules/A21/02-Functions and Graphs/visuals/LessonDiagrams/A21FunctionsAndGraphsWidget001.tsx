import React, { useState, useEffect, useRef } from 'react';

type FuncType = 'linear' | 'quad' | 'trig';
type ModMode = 'orig' | 'modout' | 'modin';

export const A21FunctionsAndGraphsWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [funcType, setFuncType] = useState<FuncType>('linear');
  const [mode, setMode] = useState<ModMode>('orig');

  const width = 560;
  const height = 400;
  const scaleX = 40;
  const scaleY = 40;
  const offsetX = width / 2;
  const offsetY = height / 2;

  const getBaseY = (x: number, type: FuncType) => {
    if (type === 'linear') return 2 * x - 3;
    if (type === 'quad') return x * x - 4;
    if (type === 'trig') return 3 * Math.sin(x);
    return 0;
  };

  const getY = (x: number, type: FuncType, m: ModMode) => {
    if (m === 'orig') {
      return getBaseY(x, type);
    } else if (m === 'modout') {
      return Math.abs(getBaseY(x, type));
    } else if (m === 'modin') {
      return getBaseY(Math.abs(x), type);
    }
    return 0;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear background
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
    ctx.fillStyle = '#8E8E93';
    ctx.font = '12px Inter, sans-serif';
    for (let i = -10; i <= 10; i++) {
      if (i !== 0) {
        ctx.fillText(i.toString(), offsetX + i * scaleX - 5, offsetY + 15);
        ctx.fillText(i.toString(), offsetX - 20, offsetY - i * scaleY + 5);
      }
    }

    // Draw Function
    ctx.beginPath();
    ctx.strokeStyle = '#C5A059'; // Subtle Gold
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let first = true;
    for (let px = 0; px <= width; px++) {
      const x = (px - offsetX) / scaleX;
      const y = getY(x, funcType, mode);
      const py = offsetY - (y * scaleY);

      if (first) {
        ctx.moveTo(px, py);
        first = false;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

  }, [funcType, mode]);

  const buttonStyle = (activeMode: ModMode) => ({
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '15px',
    fontFamily: 'Inter, system-ui, sans-serif',
    transition: 'all 0.2s ease',
    backgroundColor: mode === activeMode ? '#2C2C2E' : '#F4F4F5',
    color: mode === activeMode ? '#FFFFFF' : '#2C2C2E',
    boxShadow: mode === activeMode ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
  });

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Modulus Transformations Explorer</h3>
      <p style={{ margin: '0 0 20px 0', color: '#666', fontSize: '0.95rem' }}>
        Select a function and a transformation to see the effect on the <strong style={{ color: '#C5A059' }}>gold curve</strong>.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <select 
          value={funcType} 
          onChange={(e) => setFuncType(e.target.value as FuncType)}
          style={{ 
            padding: '10px', 
            borderRadius: '6px', 
            border: '1px solid #E5E5EA', 
            fontSize: '16px',
            backgroundColor: '#FFFFFF',
            color: '#2C2C2E',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          <option value="linear">Linear: f(x) = 2x - 3</option>
          <option value="quad">Quadratic: f(x) = x² - 4</option>
          <option value="trig">Trigonometric: f(x) = 3sin(x)</option>
        </select>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={buttonStyle('orig')} onClick={() => setMode('orig')}>f(x)</button>
          <button style={buttonStyle('modout')} onClick={() => setMode('modout')}>|f(x)|</button>
          <button style={buttonStyle('modin')} onClick={() => setMode('modin')}>f(|x|)</button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
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
    </div>
  );
};
