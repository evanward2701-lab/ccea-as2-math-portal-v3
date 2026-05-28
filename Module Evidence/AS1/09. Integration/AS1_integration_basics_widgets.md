# Interactive Widgets for AS1 Integration Basics

## WIDGET-001: Indefinite Integral Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | ...]`  
Purpose: Allow students to adjust the exponent \(n\), coefficient \(a\) and constant \(C\) for a simple power‑function integrand \(a x^n\) and immediately see the corresponding antiderivative.  This helps cement the power rule and demonstrates how the constant of integration shifts the curve vertically.

### Learning Goal
To practise applying the power rule \(\int a x^n\,\mathrm{d}x = \tfrac{a}{n+1}x^{n+1} + C\) (when \(n\neq -1\)) and to understand how different values of \(C\) produce a family of antiderivatives.

### Controls
- **Exponent \(n\):** number input (default 2) controlling the power of \(x\) in the integrand.  Values close to \(-1\) are allowed except exactly \(-1\) because \(\int x^{-1}\,\mathrm{d}x\) uses the logarithmic rule.
- **Coefficient \(a\):** number input (default 1) controlling the multiplier of \(x^n\).
- **Constant \(C\):** number input (default 0) controlling the vertical shift of the antiderivative.

### Live Outputs
- **Antiderivative formula:** displayed as plain text.  When \(n\neq -1\), the output is \(\frac{a}{n+1}x^{n+1} + C\).  When \(n=-1\), the output uses the logarithmic form \(a\ln|x| + C\).
- The output updates instantly when any control changes.

### What to Notice
- Observe that increasing \(n\) increases the exponent in the antiderivative by one and adjusts the coefficient accordingly.
- Changing \(a\) scales the entire antiderivative proportionally.
- Changing \(C\) shifts the antiderivative graph up or down without altering its shape.  This demonstrates why the constant of integration represents a family of curves.

### Exam Connection
This widget reinforces the mechanics of the power rule and the necessity of including \(+C\) in every indefinite integral.  It does not replace written working, but it provides quick feedback while practising.

### How to Run
Copy the code below into a file named `indefinite_integral_explorer.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Indefinite Integral Explorer</title>
  <style>
    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 600px; }
    label { display: block; margin-top: 10px; }
    input { width: 80px; }
    .result { margin-top: 15px; padding: 10px; background: #f0f8ff; border: 1px solid #cce; }
    .warning { color: #a00; }
  </style>
</head>
<body>
  <h2>Indefinite Integral Explorer</h2>
  <p>Adjust the exponent <code>n</code>, coefficient <code>a</code> and constant <code>C</code> for the integrand <em>a·x<sup>n</sup></em>.  The antiderivative is shown below.</p>
  <label>Exponent n: <input type="number" id="exp" step="0.5" value="2"></label>
  <label>Coefficient a: <input type="number" id="coef" step="0.5" value="1"></label>
  <label>Constant C: <input type="number" id="const" step="0.5" value="0"></label>
  <div id="output" class="result"></div>
  <script>
    function update() {
      var n = parseFloat(document.getElementById('exp').value);
      var a = parseFloat(document.getElementById('coef').value);
      var c = parseFloat(document.getElementById('const').value);
      var out = document.getElementById('output');
      if (isNaN(n) || isNaN(a) || isNaN(c)) {
        out.innerHTML = '<span class="warning">Please enter numeric values.</span>';
        return;
      }
      if (Math.abs(n + 1) < 1e-8) {
        // n = -1 case
        out.innerHTML = 'Antiderivative: ' + a.toFixed(3) + '·ln|x| + ' + c.toFixed(3) + ' + constant';
      } else {
        var newPower = n + 1;
        var coeff = a / (n + 1);
        // Format coefficient: hide trailing .000 when integer
        var coeffStr = Math.abs(coeff - Math.round(coeff)) < 1e-6 ? Math.round(coeff).toString() : coeff.toFixed(3);
        out.innerHTML = 'Antiderivative: ' + coeffStr + '·x<sup>' + newPower + '</sup> + ' + c.toFixed(3);
      }
    }
    document.getElementById('exp').addEventListener('input', update);
    document.getElementById('coef').addEventListener('input', update);
    document.getElementById('const').addEventListener('input', update);
    update();
  </script>
</body>
</html>
```

## WIDGET-002: Definite Integral Calculator
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | ...]`  
Purpose: Compute the definite integral \(\int_a^b a x^n\,\mathrm{d}x\) and display both the antiderivative and the evaluated result.  This helps students practise applying limits correctly and checking their answers.

### Learning Goal
To practise evaluating definite integrals of simple power functions, reinforce the procedure \(F(b) - F(a)\), and understand the difference between signed area and the constant of integration.

### Controls
- **Exponent \(n\):** number input (default 2) controlling the power of \(x\).  Values close to \(-1\) are allowed except exactly \(-1\) (logarithmic case).
- **Coefficient \(a\):** number input (default 1).
- **Lower limit \(a\):** number input (default 0).
- **Upper limit \(b\):** number input (default 2).  Ensure \(b\geq a\) for a positive orientation (the widget accepts \(b<a\) but will produce a negative signed area).

### Live Outputs
- **Antiderivative:** The formula \(F(x)\) obtained by integrating \(a x^n\).  Displayed as plain text.
- **Definite integral:** The computed value \(F(b) - F(a)\) (or \(a\ln\frac{b}{a}\) when \(n=-1\)).

### What to Notice
- Increasing \(n\) increases the power in the antiderivative and changes how quickly \(F(x)\) grows.
- Reversing the limits produces the negative of the area, emphasising the order of subtraction \(F(b) - F(a)\).
- If the integrand is negative on the interval, the definite integral will be negative.

### Exam Connection
This widget mirrors the steps required in an exam: integrate first, then substitute limits.  Use it to verify your calculations, but always write full solutions on paper.

### How to Run
Copy the code below into a file named `definite_integral_calculator.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Definite Integral Calculator</title>
  <style>
    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 700px; }
    label { display: block; margin-top: 10px; }
    input { width: 80px; }
    .result { margin-top: 15px; padding: 10px; background: #f9f9f9; border: 1px solid #ccc; }
    .warning { color: #a00; }
  </style>
</head>
<body>
  <h2>Definite Integral Calculator</h2>
  <p>Compute <em>∫<sub>a</sub><sup>b</sup> a·x<sup>n</sup> dx</em>.  The antiderivative and the evaluated result are shown below.</p>
  <label>Exponent n: <input type="number" id="n2" step="0.5" value="2"></label>
  <label>Coefficient a: <input type="number" id="a2" step="0.5" value="1"></label>
  <label>Lower limit a: <input type="number" id="lower" step="0.5" value="0"></label>
  <label>Upper limit b: <input type="number" id="upper" step="0.5" value="2"></label>
  <div id="out2" class="result"></div>
  <script>
    function update2() {
      var n = parseFloat(document.getElementById('n2').value);
      var a = parseFloat(document.getElementById('a2').value);
      var lower = parseFloat(document.getElementById('lower').value);
      var upper = parseFloat(document.getElementById('upper').value);
      var out = document.getElementById('out2');
      if ([n,a,lower,upper].some(function(v){ return isNaN(v); })) {
        out.innerHTML = '<span class="warning">Enter numeric values.</span>';
        return;
      }
      var antiderivative;
      var result;
      if (Math.abs(n + 1) < 1e-8) {
        antiderivative = a.toFixed(3) + '·ln|x| + C';
        if (lower <= 0 || upper <= 0) {
          result = 'Error: limits must be positive for ln|x|.';
        } else {
          result = a * Math.log(Math.abs(upper / lower));
          result = 'Result: ' + result.toFixed(6);
        }
      } else {
        var newPow = n + 1;
        var coeff = a / newPow;
        var coeffStr = Math.abs(coeff - Math.round(coeff)) < 1e-6 ? Math.round(coeff).toString() : coeff.toFixed(6);
        antiderivative = coeffStr + '·x^' + newPow + ' + C';
        var F = function(x) { return coeff * Math.pow(x, newPow); };
        var val = F(upper) - F(lower);
        result = 'Result: ' + val.toFixed(6);
      }
      out.innerHTML = '<strong>Antiderivative:</strong> ' + antiderivative + '<br><strong>' + result + '</strong>';
    }
    document.getElementById('n2').addEventListener('input', update2);
    document.getElementById('a2').addEventListener('input', update2);
    document.getElementById('lower').addEventListener('input', update2);
    document.getElementById('upper').addEventListener('input', update2);
    update2();
  </script>
</body>
</html>
```

## WIDGET-003: Signed vs Total Area Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | ...]`  
Purpose: Compare the signed area (the value of the definite integral) and the total area (sum of absolute areas) for a function that crosses the x‑axis.  The integrand chosen is \(f(x) = x^2 - 4\), which is negative between \(-2\) and \(2\) and positive outside this interval.

### Learning Goal
To understand that a definite integral gives the net (signed) area and that to find the total area you must split the integral at the roots and take absolute values.  This widget provides a numerical demonstration.

### Controls
- **Lower limit \(a\):** number input (default \(-3\)) controlling the left boundary of integration.
- **Upper limit \(b\):** number input (default \(3\)) controlling the right boundary of integration.
  The widget does not require \(a < b\) but will compute accordingly.

### Live Outputs
- **Signed area:** computed exactly using the antiderivative of \(x^2 - 4\), namely \(\tfrac{1}{3}x^3 - 4x\), as \(F(b) - F(a)\).
- **Total area (approx):** estimated numerically by sampling \(|f(x)|\) at many points between \(a\) and \(b\) and summing trapezoids.  This produces a good approximation of the absolute area.

### What to Notice
- When the interval \([a,b]\) lies entirely above or below the x‑axis, the signed and total areas coincide (up to sign).
- When the interval includes the roots \(x=\pm 2\), the signed area may cancel to zero even though there is a significant total area.
- Adjusting the limits illustrates how splitting the integral at the roots and taking absolute values is necessary for total area calculations.

### Exam Connection
Understanding the difference between signed and total area is vital for interpreting definite integrals and answering exam questions about areas.  This widget offers an interactive way to see why splitting at the x‑axis matters.

### How to Run
Copy the code below into a file named `signed_vs_total_area_explorer.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signed vs Total Area Explorer</title>
  <style>
    body { font-family: sans-serif; line-height: 1.4; margin: 20px; max-width: 700px; }
    label { display: block; margin-top: 10px; }
    input { width: 80px; }
    .result { margin-top: 15px; padding: 10px; background: #eaf2f8; border: 1px solid #bcd; }
    .warning { color: #a00; }
  </style>
</head>
<body>
  <h2>Signed vs Total Area Explorer</h2>
  <p>Function: <em>f(x) = x² – 4</em>.  Adjust the limits to see the difference between the signed area (∫ f(x) dx) and the total area (∫ |f(x)| dx).</p>
  <label>Lower limit a: <input type="number" id="lower3" step="0.5" value="-3"></label>
  <label>Upper limit b: <input type="number" id="upper3" step="0.5" value="3"></label>
  <div id="out3" class="result"></div>
  <script>
    function f(x) { return x*x - 4; }
    function F(x) { return (x*x*x)/3 - 4*x; }
    function update3() {
      var a = parseFloat(document.getElementById('lower3').value);
      var b = parseFloat(document.getElementById('upper3').value);
      var out = document.getElementById('out3');
      if (isNaN(a) || isNaN(b)) {
        out.innerHTML = '<span class="warning">Enter numeric limits.</span>';
        return;
      }
      var signed = F(b) - F(a);
      // Numerical integration of |f(x)| using the trapezium rule
      var n = 1000;
      var h = (b - a) / n;
      var total = 0;
      for (var i = 0; i < n; i++) {
        var x0 = a + i * h;
        var x1 = x0 + h;
        total += (Math.abs(f(x0)) + Math.abs(f(x1))) * h / 2;
      }
      out.innerHTML = '<strong>Signed area:</strong> ' + signed.toFixed(6) + '<br>' +
                      '<strong>Total area (approx):</strong> ' + total.toFixed(6);
    }
    document.getElementById('lower3').addEventListener('input', update3);
    document.getElementById('upper3').addEventListener('input', update3);
    update3();
  </script>
</body>
</html>
```
