# A21_sequences_and_series_widgets.md

```markdown
# Interactive Widgets for A21 Sequences and Series  

**Unit code:** A21  
**Topic ID:** A21SequencesAndSeries  

## A21SequencesAndSeriesWidget-001: Sigma Notation Unpacker  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.4  
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21SequencesAndSeriesWidget-001 | ...]`  
**Purpose:** Interactive Sigma notation unpacker to help students see how the index generates terms  

### Learning Goal  
This widget helps the learner understand how Sigma ($\Sigma$) notation works by visually unpacking the sum step-by-step. It reinforces that the number of terms is $n - k + 1$ and shows the difference between linear (arithmetic) and exponential (geometric) expressions.  

### Controls  
- `Start Index (k)`: The bottom number on the Sigma symbol.  
- `End Index (n)`: The top number on the Sigma symbol.  
- `Expression`: A dropdown to choose between an arithmetic expression ($3r - 1$) and a geometric expression ($2 \times 3^r$).  

### Live Outputs  
- `Unpacked Series`: Shows the explicit substitution for each term (e.g., $(3(1)-1) + (3(2)-1) + \dots$).  
- `Calculated Terms`: Shows the actual numbers being added.  
- `Total Sum`: The final evaluated sum.  
- `Term Count`: Explicitly states how many terms were generated.  

### What to Notice  
- Notice that if you sum from $r=5$ to $r=15$, there are 11 terms, not 10.  
- Notice how the linear expression creates a sequence with a common difference.  
- Notice how the exponential expression creates a sequence with a common ratio.  

### Exam Connection  
Sigma notation questions often trick students on the number of terms. This widget builds intuition for manually unpacking the first few terms, which is the recommended first step in any exam question involving $\Sigma$.  

### How to Run  
Copy the code below into a `.html` file and open it in a browser.  

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Sigma Notation Unpacker</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #f4f7f6;
      color: #333;
      display: flex;
      justify-content: center;
      padding: 2rem;
    }
    .widget-container {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      max-width: 600px;
      width: 100%;
    }
    h2 { margin-top: 0; color: #2c3e50; }
    .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    label { font-weight: bold; display: block; margin-bottom: 0.5rem; }
    input, select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    .sigma-display {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      background: #eef2f5;
      padding: 1rem;
      border-radius: 8px;
      justify-content: center;
    }
    .sigma-symbol {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1rem;
    }
    .sigma-top, .sigma-bottom { font-size: 0.9rem; }
    .sigma-char { font-size: 3rem; line-height: 1; margin: -5px 0; }
    .output-section {
      background: #fafafa;
      padding: 1rem;
      border-left: 4px solid #3498db;
      border-radius: 4px;
      margin-bottom: 1rem;
      word-wrap: break-word;
    }
    .output-title { font-weight: bold; margin-bottom: 0.5rem; color: #2980b9; }
  </style>
</head>
<body>
  <div class="widget-container">
    <h2>Sigma Notation Unpacker</h2>
    
    <div class="controls">
      <div>
        <label for="startK">Start Index (Bottom)</label>
        <input type="number" id="startK" value="1" min="0" max="20">
      </div>
      <div>
        <label for="endN">End Index (Top)</label>
        <input type="number" id="endN" value="5" min="1" max="20">
      </div>
      <div style="grid-column: span 2;">
        <label for="expression">Expression</label>
        <select id="expression">
          <option value="arithmetic">3r - 1 (Arithmetic)</option>
          <option value="geometric">2 * 3^r (Geometric)</option>
        </select>
      </div>
    </div>

    <div class="sigma-display">
      <div class="sigma-symbol">
        <div class="sigma-top" id="dispTop">5</div>
        <div class="sigma-char">&Sigma;</div>
        <div class="sigma-bottom" id="dispBottom">r=1</div>
      </div>
      <div id="dispExpr">(3r - 1)</div>
    </div>

    <div class="output-section">
      <div class="output-title">1. Unpacked Substitution:</div>
      <div id="outSub"></div>
    </div>

    <div class="output-section">
      <div class="output-title">2. Calculated Terms:</div>
      <div id="outTerms"></div>
    </div>

    <div class="output-section">
      <div class="output-title">3. Final Result:</div>
      <div id="outResult" style="font-size: 1.25rem; font-weight: bold;"></div>
      <div id="outCount" style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;"></div>
    </div>
  </div>

  <script>
    const startK = document.getElementById('startK');
    const endN = document.getElementById('endN');
    const exprSelect = document.getElementById('expression');
    
    const dispTop = document.getElementById('dispTop');
    const dispBottom = document.getElementById('dispBottom');
    const dispExpr = document.getElementById('dispExpr');
    
    const outSub = document.getElementById('outSub');
    const outTerms = document.getElementById('outTerms');
    const outResult = document.getElementById('outResult');
    const outCount = document.getElementById('outCount');

    function updateWidget() {
      let k = parseInt(startK.value);
      let n = parseInt(endN.value);
      
      if (k > n) {
        outSub.innerHTML = "<span style='color:red'>Start index cannot be greater than end index.</span>";
        outTerms.innerHTML = "";
        outResult.innerHTML = "";
        outCount.innerHTML = "";
        return;
      }

      let type = exprSelect.value;
      
      dispTop.innerText = n;
      dispBottom.innerText = "r=" + k;
      dispExpr.innerText = type === 'arithmetic' ? "(3r - 1)" : "(2 × 3^r)";

      let subStr = [];
      let termStr = [];
      let sum = 0;
      let count = 0;

      for (let r = k; r <= n; r++) {
        count++;
        if (type === 'arithmetic') {
          subStr.push(`(3(${r}) - 1)`);
          let val = 3 * r - 1;
          termStr.push(val);
          sum += val;
        } else {
          subStr.push(`(2 × 3<sup>${r}</sup>)`);
          let val = 2 * Math.pow(3, r);
          termStr.push(val);
          sum += val;
        }
      }

      outSub.innerHTML = subStr.join(" + ");
      outTerms.innerHTML = termStr.join(" + ");
      outResult.innerHTML = "Sum = " + sum.toLocaleString();
      outCount.innerHTML = `Number of terms generated: ${n} - ${k} + 1 = <strong>${count}</strong>`;
    }

    startK.addEventListener('input', updateWidget);
    endN.addEventListener('input', updateWidget);
    exprSelect.addEventListener('change', updateWidget);

    // Initial render
    updateWidget();
  </script>
</body>
</html>
```
```
