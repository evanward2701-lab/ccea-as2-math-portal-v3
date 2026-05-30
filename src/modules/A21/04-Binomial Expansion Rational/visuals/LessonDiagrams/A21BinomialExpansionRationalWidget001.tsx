import React, { useState, useMemo } from 'react';

export const A21BinomialExpansionRationalWidget001: React.FC = () => {
  const [xVal, setXVal] = useState<number>(0.5);
  const [terms, setTerms] = useState<number>(3);

  const { trueValueStr, approxStr, errorStr, isDiverging } = useMemo(() => {
    let trueValStr = "Undefined (x < -1)";
    let trueValNum: number | null = null;
    if (xVal >= -1) {
      trueValNum = Math.sqrt(1 + xVal);
      trueValStr = trueValNum.toFixed(6);
    }

    let approx = 0;
    if (terms >= 1) approx += 1;
    if (terms >= 2) approx += 0.5 * xVal;
    if (terms >= 3) approx -= 0.125 * Math.pow(xVal, 2);
    if (terms >= 4) approx += 0.0625 * Math.pow(xVal, 3);
    if (terms >= 5) approx -= 0.0390625 * Math.pow(xVal, 4);

    let errStr = "N/A";
    const diverging = Math.abs(xVal) >= 1 && xVal !== -1; 
    // at x=-1 exactly it converges very slowly but technically |x|<1 is the strict bound for the infinite series. 
    // We'll mark diverging if |x| >= 1 for educational clarity based on the lesson notes.

    if (trueValNum !== null) {
      const error = Math.abs(trueValNum - approx);
      errStr = error.toFixed(6);
      if (diverging) {
        errStr += " (Diverging!)";
      }
    }

    return {
      trueValueStr: trueValStr,
      approxStr: approx.toFixed(6),
      errorStr: errStr,
      isDiverging: diverging
    };
  }, [xVal, terms]);

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

  const outputBoxStyle = {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    borderLeft: '4px solid #C5A059',
    borderRadius: '6px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(44,44,46,0.04)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const errorBoxStyle = {
    ...outputBoxStyle,
    borderLeft: isDiverging ? '4px solid #D0021B' : '4px solid #C5A059',
    backgroundColor: isDiverging ? '#FFEBEB' : '#FFFFFF',
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Approximating √(1+x)</h3>
      <p style={{ margin: '0 0 24px 0', color: '#666', fontSize: '14px', fontStyle: 'italic' }}>
        Expansion: 1 + 0.5x - 0.125x² + 0.0625x³ - 0.0390625x⁴
      </p>

      <div style={controlStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label style={labelStyle}>Value of x</label>
          <span style={{ fontWeight: 'bold', color: '#C5A059' }}>{xVal.toFixed(2)}</span>
        </div>
        <input 
          type="range" 
          min="-1.5" max="1.5" step="0.05" 
          value={xVal} 
          onChange={(e) => setXVal(parseFloat(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div style={controlStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label style={labelStyle}>Number of terms to use</label>
          <span style={{ fontWeight: 'bold', color: '#C5A059' }}>{terms}</span>
        </div>
        <input 
          type="range" 
          min="1" max="5" step="1" 
          value={terms} 
          onChange={(e) => setTerms(parseInt(e.target.value))}
          style={sliderStyle}
        />
      </div>

      <div style={outputBoxStyle}>
        <span style={{ fontWeight: 600, color: '#2C2C2E' }}>True Value:</span>
        <span style={{ fontFamily: 'monospace', fontSize: '16px' }}>{trueValueStr}</span>
      </div>

      <div style={outputBoxStyle}>
        <span style={{ fontWeight: 600, color: '#2C2C2E' }}>Approximation:</span>
        <span style={{ fontFamily: 'monospace', fontSize: '16px' }}>{approxStr}</span>
      </div>

      <div style={errorBoxStyle}>
        <span style={{ fontWeight: 600, color: isDiverging ? '#D0021B' : '#2C2C2E' }}>Error (Difference):</span>
        <span style={{ fontFamily: 'monospace', fontSize: '16px', color: isDiverging ? '#D0021B' : 'inherit' }}>{errorStr}</span>
      </div>
    </div>
  );
};
