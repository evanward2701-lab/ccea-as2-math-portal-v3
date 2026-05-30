import React, { useState, useEffect, useRef } from 'react';

export const A21RadiansWidget001: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theta, setTheta] = useState<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cx = 200, cy = 200, r = 150;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw faint full circle
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = '#E5E5EA';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw sector
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    // Negative theta to draw anti-clockwise
    ctx.arc(cx, cy, r, 0, -theta, true);
    ctx.closePath();
    ctx.fillStyle = 'rgba(197, 160, 89, 0.15)'; // Gold tint
    ctx.fill();
    ctx.strokeStyle = '#C5A059';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw highlighted arc
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, -theta, true);
    ctx.strokeStyle = '#C5A059';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Draw initial radius line (x-axis)
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r, cy);
    ctx.strokeStyle = '#2C2C2E';
    ctx.lineWidth = 2;
    ctx.stroke();

  }, [theta]);

  // Determine alert text
  let alertText = `Arc Length = ${theta.toFixed(2)} × radius`;
  let isMilestone = false;

  if (Math.abs(theta - 1) < 0.05) {
    alertText = "1 Radian! Arc length = 1 radius";
    isMilestone = true;
  } else if (Math.abs(theta - Math.PI) < 0.05) {
    alertText = "π Radians! Half circle (180°)";
    isMilestone = true;
  } else if (Math.abs(theta - 2 * Math.PI) < 0.05) {
    alertText = "2π Radians! Full circle (360°)";
    isMilestone = true;
  }

  const controlStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    marginBottom: '20px'
  };

  const labelStyle = {
    fontWeight: 600,
    color: '#2C2C2E',
    fontSize: '14px'
  };

  const sliderStyle = {
    width: '100%',
    cursor: 'pointer'
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Interactive Radian Explorer</h3>
      
      <div style={controlStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label style={labelStyle}>Angle (θ)</label>
          <span style={{ fontWeight: 'bold', color: '#C5A059' }}>{theta.toFixed(2)} rad</span>
        </div>
        <input 
          type="range" 
          min="0" max="6.2831853" step="0.01" 
          value={theta} 
          onChange={(e) => setTheta(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div style={{ height: '30px', fontWeight: 'bold', color: isMilestone ? '#C5A059' : '#666', fontSize: '16px' }}>
        {alertText}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400} 
          style={{ background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5EA', width: '100%', maxWidth: '400px' }}
        />
      </div>
    </div>
  );
};
