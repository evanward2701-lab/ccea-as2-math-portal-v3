import React from 'react';

export const A21DifferentiationMMD001: React.FC = () => {
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
    maxWidth: '280px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  };

  const arrowDown = (
    <div style={{ height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <div style={{ width: '2px', height: '100%', backgroundColor: '#2C2C2E' }}></div>
      <div style={{ position: 'absolute', bottom: 0, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
    </div>
  );

  return (
    <div style={{ width: '100%', backgroundColor: '#FAF9F6', padding: '2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
      
      <div style={{ ...boxStyle, backgroundColor: '#F0E6FF', borderColor: '#6C5CE7' }}>
        Start: Identify Composite Function y = f(g(x))
      </div>

      {arrowDown}

      <div style={{ ...boxStyle, backgroundColor: '#FCF8F2', borderColor: '#C5A059' }}>
        Can you spot the inner function?
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'relative', marginTop: '20px', maxWidth: '500px' }}>
        <div style={{ position: 'absolute', top: '-15px', left: '25%', right: '25%', height: '2px', backgroundColor: '#2C2C2E', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', top: '-15px', left: '25%', width: '2px', height: '15px', backgroundColor: '#2C2C2E', zIndex: 1 }}>
           <div style={{ position: 'absolute', bottom: 0, left: '-5px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
        </div>
        <div style={{ position: 'absolute', top: '-15px', right: '25%', width: '2px', height: '15px', backgroundColor: '#2C2C2E', zIndex: 1 }}>
           <div style={{ position: 'absolute', bottom: 0, left: '-5px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
        </div>
        
        {/* Branch No */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ color: '#666', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>No</div>
          <div style={{ ...boxStyle, borderColor: '#D63031', fontSize: '14px' }}>
            Look for brackets, powers, or exponents
          </div>
          {arrowDown}
          <div style={{ ...boxStyle, borderColor: '#00B894', fontSize: '14px' }}>
            Let inner function = 'blah'
          </div>
        </div>

        {/* Branch Yes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ color: '#666', fontSize: '13px', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>Yes</div>
          <div style={{ ...boxStyle, borderColor: '#00B894', fontSize: '14px', marginTop: '10px' }}>
            Let inner function = 'blah'
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '30px', maxWidth: '500px' }}>
        <div style={{ position: 'absolute', top: 0, left: '25%', width: '2px', height: '15px', backgroundColor: '#2C2C2E', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', top: 0, right: '25%', width: '2px', height: '15px', backgroundColor: '#2C2C2E', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', top: '15px', left: '25%', right: '25%', height: '2px', backgroundColor: '#2C2C2E', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', top: '15px', left: '50%', width: '2px', height: '15px', backgroundColor: '#2C2C2E', zIndex: 1 }}>
           <div style={{ position: 'absolute', bottom: 0, left: '-5px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #2C2C2E' }}></div>
        </div>
      </div>

      <div style={{ ...boxStyle, borderColor: '#0984E3', backgroundColor: '#F0F8FF' }}>
        Differentiate outer function f('blah')
      </div>
      {arrowDown}
      <div style={{ ...boxStyle, borderColor: '#0984E3', backgroundColor: '#F0F8FF' }}>
        Differentiate inner function 'blah'
      </div>
      {arrowDown}
      <div style={{ ...boxStyle, borderColor: '#00B894', backgroundColor: '#E6F8F3' }}>
        Multiply them: f'('blah') × 'blah''
      </div>
      {arrowDown}
      <div style={{ ...boxStyle, backgroundColor: '#E6F0FF', borderColor: '#0984E3' }}>
        Final Result: dy/dx
      </div>
    </div>
  );
};
