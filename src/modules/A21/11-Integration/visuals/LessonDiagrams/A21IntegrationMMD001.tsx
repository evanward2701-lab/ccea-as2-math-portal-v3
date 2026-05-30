import React from 'react';

export const A21IntegrationMMD001: React.FC = () => {
  const StepNode = ({ title, bg = "#FFFFFF", color = "#2C2C2E" }: { title: string, bg?: string, color?: string }) => (
    <div style={{
      background: bg, color: color, padding: '12px 20px', borderRadius: '8px', 
      border: `2px solid ${color === '#FFFFFF' ? bg : '#E5E5EA'}`,
      fontWeight: 600, textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      width: '280px', margin: '0 auto', position: 'relative', zIndex: 2
    }}>
      {title}
    </div>
  );

  const Arrow = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '-4px 0', zIndex: 1, position: 'relative' }}>
      <div style={{ width: '2px', height: '24px', background: '#2C2C2E' }} />
      <div style={{
        width: 0, height: 0,
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderTop: '8px solid #2C2C2E'
      }} />
    </div>
  );

  return (
    <div style={{ 
      width: '100%', backgroundColor: '#FAF9F6', padding: '2rem', 
      borderRadius: '12px', fontFamily: 'Inter, system-ui, sans-serif',
      display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <h3 style={{ margin: '0 0 24px 0', color: '#2C2C2E', textAlign: 'center' }}>Integration Strategy Hierarchy</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        
        <StepNode title="1. Standard Result?" bg="#0984E3" color="#FFFFFF" />
        <Arrow />
        <StepNode title="2. Algebraic / Trig Manipulation?" bg="#00B894" color="#FFFFFF" />
        <Arrow />
        <StepNode title="3. Reverse Chain Rule?" bg="#FDCB6E" color="#2C2C2E" />
        <Arrow />
        <StepNode title="4. Fractions?" bg="#E17055" color="#FFFFFF" />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px', position: 'relative' }}>
          {/* Connector to fractions */}
          <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '16px', background: '#2C2C2E' }}></div>
          <div style={{ position: 'absolute', top: '0', left: '16%', right: '16%', height: '2px', background: '#2C2C2E' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '2px', height: '16px', background: '#2C2C2E' }} />
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#666', marginBottom: '4px' }}>Single Term</div>
            <div style={{ background: '#FFF', border: '1px solid #E5E5EA', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '13px' }}>Split Numerator</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '2px', height: '16px', background: '#2C2C2E' }} />
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#666', marginBottom: '4px' }}>Top Heavy</div>
            <div style={{ background: '#FFF', border: '1px solid #E5E5EA', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '13px' }}>Algebraic Division</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%' }}>
            <div style={{ width: '2px', height: '16px', background: '#2C2C2E' }} />
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#666', marginBottom: '4px' }}>Factorisable</div>
            <div style={{ background: '#FFF', border: '1px solid #E5E5EA', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '13px' }}>Partial Fractions</div>
          </div>
        </div>

        <div style={{ height: '32px' }} />

        <StepNode title="5. Products?" bg="#6C5CE7" color="#FFFFFF" />
        <Arrow />
        <div style={{ background: '#FFF', border: '1px dashed #6C5CE7', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '13px', width: '200px', margin: '0 auto' }}>
          Integration by Parts (LIATE)
        </div>

        <div style={{ height: '32px' }} />

        <StepNode title="6. Last Resort" bg="#2D3436" color="#FFFFFF" />
        <Arrow />
        <div style={{ background: '#FFF', border: '2px solid #2D3436', padding: '8px', borderRadius: '4px', textAlign: 'center', fontSize: '14px', fontWeight: 600, width: '200px', margin: '0 auto' }}>
          Substitution
        </div>
      </div>
    </div>
  );
};
