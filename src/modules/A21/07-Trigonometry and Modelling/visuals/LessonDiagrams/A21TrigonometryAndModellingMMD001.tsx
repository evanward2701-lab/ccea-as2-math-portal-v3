import React from 'react';

export const A21TrigonometryAndModellingMMD001: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    border: '2px solid #E5E5EA',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    fontWeight: 600,
    color: '#2C2C2E',
    fontFamily: 'Inter, system-ui, sans-serif',
    maxWidth: '250px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  };

  const arrowDown = (
    <div style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <div style={{ width: '2px', height: '100%', backgroundColor: '#2C2C2E' }}></div>
      <div style={{ position: 'absolute', bottom: 0, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
    </div>
  );

  return (
    <div style={{ width: '100%', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      
      <div style={{ ...boxStyle, backgroundColor: '#FAF9F6', border: '2px solid #2C2C2E' }}>
        Equation contains cos(2x)
      </div>

      {arrowDown}

      <div style={{ ...boxStyle, backgroundColor: '#FCF8F2', borderColor: '#C5A059' }}>
        What other trigonometric terms are present?
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative', marginTop: '20px' }}>
        {/* Horizontal connecting line */}
        <div style={{ position: 'absolute', top: '-20px', left: '16%', right: '16%', height: '2px', backgroundColor: '#2C2C2E', zIndex: 1 }}></div>
        {/* Vertical drops */}
        <div style={{ position: 'absolute', top: '-20px', left: '16%', width: '2px', height: '20px', backgroundColor: '#2C2C2E', zIndex: 1 }}>
           <div style={{ position: 'absolute', bottom: 0, left: '-5px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '-20px', left: '50%', width: '2px', height: '20px', backgroundColor: '#2C2C2E', zIndex: 1 }}>
           <div style={{ position: 'absolute', bottom: 0, left: '-5px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '-20px', right: '16%', width: '2px', height: '20px', backgroundColor: '#2C2C2E', zIndex: 1 }}>
           <div style={{ position: 'absolute', bottom: 0, left: '-5px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
        </div>
        
        {/* Branch 1 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ color: '#666', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>Only cos(x)</div>
          <div style={{ ...boxStyle, borderColor: '#00B894' }}>
            Use:<br/>
            <span style={{ fontStyle: 'italic' }}>cos(2x) ≡ 2cos²(x) - 1</span>
          </div>
          {arrowDown}
          <div style={{ ...boxStyle, fontSize: '13px', fontWeight: 400, borderColor: '#00B894', backgroundColor: '#F0FFF4' }}>
            Factorise and solve quadratic in cos(x)
          </div>
        </div>

        {/* Branch 2 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ color: '#666', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>Only sin(x)</div>
          <div style={{ ...boxStyle, borderColor: '#00B894' }}>
            Use:<br/>
            <span style={{ fontStyle: 'italic' }}>cos(2x) ≡ 1 - 2sin²(x)</span>
          </div>
          {arrowDown}
          <div style={{ ...boxStyle, fontSize: '13px', fontWeight: 400, borderColor: '#00B894', backgroundColor: '#F0FFF4' }}>
            Factorise and solve quadratic in sin(x)
          </div>
        </div>

        {/* Branch 3 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ color: '#666', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>Mixture of both</div>
          <div style={{ ...boxStyle, borderColor: '#E17055' }}>
            Use:<br/>
            <span style={{ fontStyle: 'italic' }}>cos(2x) ≡ cos²(x) - sin²(x)</span>
          </div>
          {arrowDown}
          <div style={{ ...boxStyle, fontSize: '13px', fontWeight: 400, borderColor: '#E17055', backgroundColor: '#FFF5F0' }}>
            Look for opportunities to factorise or use tan(x) ≡ sin(x)/cos(x)
          </div>
        </div>
      </div>
    </div>
  );
};
