import React, { useState, useMemo } from 'react';

type ExprType = 'arithmetic' | 'geometric';

export const A21SequencesAndSeriesWidget001: React.FC = () => {
  const [startK, setStartK] = useState<number>(1);
  const [endN, setEndN] = useState<number>(5);
  const [exprType, setExprType] = useState<ExprType>('arithmetic');

  const { subStr, termStr, sum, count, error } = useMemo(() => {
    if (startK > endN) {
      return { subStr: '', termStr: '', sum: 0, count: 0, error: 'Start index cannot be greater than end index.' };
    }
    if (startK < 0 || endN > 20) {
      return { subStr: '', termStr: '', sum: 0, count: 0, error: 'Please keep indices between 0 and 20 for this widget.' };
    }

    let _subStr = [];
    let _termStr = [];
    let _sum = 0;
    let _count = 0;

    for (let r = startK; r <= endN; r++) {
      _count++;
      if (exprType === 'arithmetic') {
        _subStr.push(`(3(${r}) - 1)`);
        const val = 3 * r - 1;
        _termStr.push(val);
        _sum += val;
      } else {
        _subStr.push(`(2 × 3^${r})`);
        const val = 2 * Math.pow(3, r);
        _termStr.push(val);
        _sum += val;
      }
    }

    return {
      subStr: _subStr.join(' + '),
      termStr: _termStr.join(' + '),
      sum: _sum,
      count: _count,
      error: null
    };
  }, [startK, endN, exprType]);

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #E5E5EA',
    fontSize: '16px',
    backgroundColor: '#FFFFFF',
    color: '#2C2C2E',
    fontFamily: 'Inter, system-ui, sans-serif'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 600,
    marginBottom: '6px',
    color: '#2C2C2E',
    fontSize: '14px'
  };

  const outputSectionStyle = {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    borderLeft: '4px solid #C5A059',
    borderRadius: '6px',
    marginBottom: '16px',
    boxShadow: '0 2px 8px rgba(44,44,46,0.04)'
  };

  return (
    <div style={{ backgroundColor: '#FAF9F6', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5EA', fontFamily: 'Inter, system-ui, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#2C2C2E', fontSize: '1.25rem', fontWeight: 600 }}>Sigma Notation Unpacker</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div>
          <label style={labelStyle}>Start Index (k)</label>
          <input 
            type="number" 
            value={startK} 
            onChange={(e) => setStartK(parseInt(e.target.value) || 0)} 
            min="0" max="20"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>End Index (n)</label>
          <input 
            type="number" 
            value={endN} 
            onChange={(e) => setEndN(parseInt(e.target.value) || 0)} 
            min="1" max="20"
            style={inputStyle}
          />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <label style={labelStyle}>Expression</label>
          <select 
            value={exprType} 
            onChange={(e) => setExprType(e.target.value as ExprType)}
            style={inputStyle}
          >
            <option value="arithmetic">3r - 1 (Arithmetic)</option>
            <option value="geometric">2 × 3^r (Geometric)</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E5E5EA', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '16px' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#2C2C2E' }}>{endN}</div>
          <div style={{ fontSize: '48px', lineHeight: 1, margin: '-4px 0', color: '#C5A059' }}>&Sigma;</div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#2C2C2E' }}>r={startK}</div>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 600, fontStyle: 'italic', color: '#2C2C2E', fontFamily: 'Times New Roman, serif' }}>
          {exprType === 'arithmetic' ? '(3r - 1)' : '(2 × 3^r)'}
        </div>
      </div>

      {error ? (
        <div style={{ color: '#D0021B', fontWeight: 600, padding: '16px', backgroundColor: '#FFEBEB', borderRadius: '6px' }}>
          {error}
        </div>
      ) : (
        <>
          <div style={outputSectionStyle}>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#C5A059' }}>1. Unpacked Substitution:</div>
            <div style={{ wordBreak: 'break-all', color: '#666' }}>{subStr}</div>
          </div>

          <div style={outputSectionStyle}>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#C5A059' }}>2. Calculated Terms:</div>
            <div style={{ wordBreak: 'break-all', color: '#666' }}>{termStr}</div>
          </div>

          <div style={outputSectionStyle}>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#C5A059' }}>3. Final Result:</div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2C2C2E' }}>Sum = {sum.toLocaleString()}</div>
            <div style={{ fontSize: '14px', color: '#8E8E93', marginTop: '8px' }}>
              Number of terms generated: {endN} - {startK} + 1 = <strong>{count}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
