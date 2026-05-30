import React, { useState, useEffect, useRef } from 'react';

export const A21TrigonometryWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPair, setCurrentPair] = useState<string>('sin');
  const [showBase, setShowBase] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Graph settings
    const scaleX = 60; // pixels per radian
    const scaleY = 80; // pixels per unit
    const offsetX = canvas.width / 2;
    const offsetY = canvas.height / 2;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#E5E5EA';
      ctx.lineWidth = 1;

      // Draw grid
      for(let i = 0; i < canvas.width; i += scaleX * (Math.PI/2)) {
        ctx.beginPath(); ctx.moveTo(offsetX + i, 0); ctx.lineTo(offsetX + i, canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(offsetX - i, 0); ctx.lineTo(offsetX - i, canvas.height); ctx.stroke();
      }
      for(let i = 0; i < canvas.height; i += scaleY) {
        ctx.beginPath(); ctx.moveTo(0, offsetY + i); ctx.lineTo(canvas.width, offsetY + i); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, offsetY - i); ctx.lineTo(canvas.width, offsetY - i); ctx.stroke();
      }

      // Draw axes
      ctx.strokeStyle = '#2C2C2E';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, offsetY); ctx.lineTo(canvas.width, offsetY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(offsetX, 0); ctx.lineTo(offsetX, canvas.height); ctx.stroke();
    };

    const drawFunction = (func: (x: number) => number, color: string, isDashed: boolean, isReciprocal: boolean) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = isDashed ? 2 : 3;
      if (isDashed) ctx.setLineDash([5, 5]);
      else ctx.setLineDash([]);

      ctx.beginPath();
      let prevY: number | null = null;

      for (let px = 0; px < canvas.width; px++) {
        const x = (px - offsetX) / scaleX;
        const y = func(x);
        
        // Handle asymptotes for reciprocals
        if (isReciprocal && Math.abs(y) > 10) {
          prevY = null; // Break the line
          continue;
        }

        const py = offsetY - (y * scaleY);

        if (prevY === null) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
        prevY = py;
      }
      ctx.stroke();
      ctx.setLineDash([]); // Reset
    };

    const drawAsymptotes = (roots: number[]) => {
      ctx.strokeStyle = '#D0021B'; // Red for asymptotes
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      roots.forEach(root => {
        const px = offsetX + (root * scaleX);
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, canvas.height);
        ctx.stroke();
      });
      ctx.setLineDash([]);
    };

    drawGrid();

    let baseFunc: (x: number) => number;
    let recFunc: (x: number) => number;
    let asymptotes: number[] = [];

    if (currentPair === 'sin') {
      baseFunc = Math.sin;
      recFunc = (x) => 1 / Math.sin(x);
      asymptotes = [-2*Math.PI, -Math.PI, 0, Math.PI, 2*Math.PI];
    } else if (currentPair === 'cos') {
      baseFunc = Math.cos;
      recFunc = (x) => 1 / Math.cos(x);
      asymptotes = [-1.5*Math.PI, -0.5*Math.PI, 0.5*Math.PI, 1.5*Math.PI];
    } else {
      // tan
      baseFunc = Math.tan;
      recFunc = (x) => 1 / Math.tan(x);
      asymptotes = [-2*Math.PI, -1.5*Math.PI, -Math.PI, -0.5*Math.PI, 0, 0.5*Math.PI, Math.PI, 1.5*Math.PI, 2*Math.PI];
    }

    drawAsymptotes(asymptotes);

    if (showBase) {
      drawFunction(baseFunc, '#666666', true, currentPair === 'tan');
    }
    drawFunction(recFunc, '#C5A059', false, true); // Gold for reciprocal

  }, [currentPair, showBase]);

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Reciprocal Function Explorer</h3>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ fontWeight: 600, color: '#2C2C2E', marginRight: '10px' }}>Select Pair:</label>
          <select 
            value={currentPair} 
            onChange={(e) => setCurrentPair(e.target.value)}
            style={{ padding: '8px 12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #E5E5EA', outline: 'none', cursor: 'pointer' }}
          >
            <option value="sin">sin(x) & cosec(x)</option>
            <option value="cos">cos(x) & sec(x)</option>
            <option value="tan">tan(x) & cot(x)</option>
          </select>
        </div>
        <button 
          onClick={() => setShowBase(!showBase)}
          style={{ padding: '8px 16px', fontSize: '16px', borderRadius: '6px', border: '1px solid #C5A059', backgroundColor: showBase ? '#C5A059' : 'transparent', color: showBase ? '#FFF' : '#C5A059', cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s' }}
        >
          {showBase ? 'Hide Base Function' : 'Show Base Function'}
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={400} 
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', maxWidth: '100%' }}
        />
      </div>

      <p style={{ fontSize: '14px', color: '#666', marginTop: '16px' }}>
        <strong>Note:</strong> The grey dashed line is the base function. The solid <span style={{color: '#C5A059', fontWeight: 'bold'}}>gold</span> line is the reciprocal function. Vertical <span style={{color: '#D0021B'}}>red</span> lines are asymptotes.
      </p>
    </div>
  );
};
