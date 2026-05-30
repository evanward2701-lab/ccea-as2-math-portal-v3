```markdown
# A21_binomial_expansion_rational_widgets.md

**Unit code:** A21
**Topic ID:** A21BinomialExpansionRational

## A21BinomialExpansionRationalWidget-001: Convergence Approximation Explorer

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence
**Related lesson section:** 10
**Used in placeholder:** `[INTERACTIVE PLACEHOLDER: A21BinomialExpansionRationalWidget-001 | ...]`
**Purpose:** Allows students to see how the polynomial approximation converges to the true function value depending on the size of $x$.

### Learning Goal
To understand why the validity range $|x| < 1$ is crucial, and to see that smaller values of $x$ provide much more accurate approximations with fewer terms.

### Controls
- `x value slider`: Change the value of $x$ from -1.5 to 1.5.
- `Number of terms slider`: Change how many terms of the expansion are used (from 1 to 5).

### Live Outputs
- `True Value`: The exact value of $\sqrt{1+x}$.
- `Approximation`: The value calculated using the binomial expansion.
- `Error`: The difference between the true value and the approximation.

### What to Notice
- When $|x| < 1$, adding more terms makes the error approach zero.
- When $x$ is very close to 0 (e.g., $x = 0.01$), even just 2 or 3 terms give a highly accurate answer.
- When $|x| > 1$, adding more terms makes the approximation wildly inaccurate (it diverges).

### Exam Connection
Exam questions often ask you to substitute a small value (like $x=0.01$) to find an approximation for a surd, and then ask you to comment on why a larger value (like $x=3$) would not be suitable.

### How to Run
Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Binomial Convergence Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
    .control-group { margin-bottom: 15px; }
    label { display: inline-block; width: 150px; font-weight: bold; }
    .output { font-size: 1.2em; margin: 10px 0; padding: 10px; background: #fff; border-left: 4px solid #4CAF50; }
    .error-high { border-left-color: #F44336; }
  </style>
</head>
<body>
  <h2>Approximating √(1+x)</h2>
  <p>Expansion: 1 + 0.5x - 0.125x² + 0.0625x³ - 0.0390625x⁴</p>
  
  <div class="control-group">
    <label for="xval">Value of x:</label>
    <input type="range" id="xval" min="-1.5" max="1.5" step="0.05" value="0.5">
    <span id="xval-display">0.5</span>
  </div>
  
  <div class="control-group">
    <label for="terms">Number of terms:</label>
    <input type="range" id="terms" min="1" max="5" step="1" value="3">
    <span id="terms-display">3</span>
  </div>

  <div class="output" id="true-val">True Value: </div>
  <div class="output" id="approx-val">Approximation: </div>
  <div class="output" id="error-val">Error: </div>

  <script>
    const xSlider = document.getElementById('xval');
    const termsSlider = document.getElementById('terms');
    const xDisplay = document.getElementById('xval-display');
    const termsDisplay = document.getElementById('terms-display');
    const trueOut = document.getElementById('true-val');
    const approxOut = document.getElementById('approx-val');
    const errorOut = document.getElementById('error-val');

    function update() {
      const x = parseFloat(xSlider.value);
      const terms = parseInt(termsSlider.value);
      
      xDisplay.textContent = x.toFixed(2);
      termsDisplay.textContent = terms;

      let trueValue = "Undefined (x < -1)";
      if (x >= -1) {
        trueValue = Math.sqrt(1 + x);
      }

      let approx = 0;
      if (terms >= 1) approx += 1;
      if (terms >= 2) approx += 0.5 * x;
      if (terms >= 3) approx -= 0.125 * Math.pow(x, 2);
      if (terms >= 4) approx += 0.0625 * Math.pow(x, 3);
      if (terms >= 5) approx -= 0.0390625 * Math.pow(x, 4);

      if (typeof trueValue === "number") {
        trueOut.textContent = `True Value: ${trueValue.toFixed(6)}`;
        approxOut.textContent = `Approximation: ${approx.toFixed(6)}`;
        const error = Math.abs(trueValue - approx);
        errorOut.textContent = `Error: ${error.toFixed(6)}`;
        
        if (Math.abs(x) >= 1) {
            errorOut.className = "output error-high";
            errorOut.textContent += " (Diverging!)";
        } else {
            errorOut.className = "output";
        }
      } else {
        trueOut.textContent = `True Value: ${trueValue}`;
        approxOut.textContent = `Approximation: ${approx.toFixed(6)}`;
        errorOut.textContent = `Error: N/A`;
      }
    }

    xSlider.addEventListener('input', update);
    termsSlider.addEventListener('input', update);
    update();
  </script>
</body>
</html>
```
```
