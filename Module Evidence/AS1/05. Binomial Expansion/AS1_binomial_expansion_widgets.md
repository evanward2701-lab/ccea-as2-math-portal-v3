# Interactive Widgets for AS1 binomial expansion

This file contains the code for the interactive widgets referenced in the lesson.  Copy the desired widget code into a `.html` file and open it in a browser to use it.  Sliders and number inputs allow you to explore the concepts dynamically.  These tools are intended for practice and exploration; during examinations you must show algebraic working.

## WIDGET‑001: Pascal’s Triangle Explorer
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑001 | ...]`  
Purpose: Explore rows of Pascal’s triangle and learn how combinations and factorials generate binomial coefficients.

### Learning Goal
Visualise the rows of Pascal’s triangle, observe how binomial coefficients are generated and notice patterns such as symmetry and the sum of each row being $2^n$.

### Controls
* `n` (slider): choose the row number $n$ (0–10).

### Live Outputs
* The selected row of Pascal’s triangle.
* The sum of the row (which should equal $2^n$).

### What to Notice
* The first and last entries of each row are always 1.
* Each interior entry is the sum of the two entries above it.
* The entries are symmetric about the centre.
* The sum of the $n$th row is $2^n$; try changing $n$ to verify this pattern.

### Exam Connection
Knowing how to generate binomial coefficients quickly (without resorting to factorial calculations each time) is essential when expanding $(a+b)^n$ or finding specific coefficients.  Pascal’s triangle offers a rapid visual method to obtain these coefficients.

### How to Run
Copy the code below into a file called `pascal_explorer.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Pascal's Triangle Explorer</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    input[type="range"] { width: 300px; }
    .row { margin-top: 1em; font-size: 1.2em; }
  </style>
</head>
<body>
  <h3>Pascal's Triangle Explorer</h3>
  <label for="n">Choose n (0–10): </label>
  <input type="range" id="n" min="0" max="10" value="5" oninput="update()">
  <span id="nVal">5</span>
  <div class="row" id="row"></div>
  <div class="row">Sum of row = <span id="sum"></span></div>
  <script>
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return result;
    }
    function nCr(n, r) {
      return factorial(n) / (factorial(r) * factorial(n - r));
    }
    function update() {
      const n = parseInt(document.getElementById('n').value);
      document.getElementById('nVal').textContent = n;
      let row = [];
      for (let r = 0; r <= n; r++) {
        row.push(nCr(n, r));
      }
      document.getElementById('row').textContent = row.join('   ');
      // compute sum
      let sum = row.reduce((a, b) => a + b, 0);
      document.getElementById('sum').textContent = sum;
    }
    update();
  </script>
</body>
</html>
```

---

## WIDGET‑002: Binomial Expansion Visualiser
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑002 | ...]`  
Purpose: Generate binomial expansions for user‑chosen values of $n$, $a$ and $b$ (where $b$ contains $x$).  Display terms in ascending powers of $x$.

### Learning Goal
Practise constructing binomial expansions and matching the correct term number to the power of $x$.  See how coefficients depend on $n$, $a$ and the coefficient of $x$ in $b$.

### Controls
* `n` (number input): choose $n$ (0–10).  Changing $n$ also updates the maximum number of terms.
* `a` (number input): the constant term $a$ in $(a + kx)^n$.
* `k` (number input): the coefficient of $x$ in $b=kx$.
* `terms` (number input): how many terms to display (1 to $n+1$).

### Live Outputs
* A list of terms of the expansion of $(a + kx)^n$ in ascending powers of $x$: each line shows the term number, the coefficient and the power of $x$.

### What to Notice
* The constant term ($r=0$) is $a^n$.
* The coefficient of $x^r$ is $\binom{n}{r} a^{n-r} k^r$.
* The term number is $r+1$, not the power of $x$.

### Exam Connection
This widget helps you practise writing the first few terms of an expansion and finding coefficients of specific powers, which are common tasks in exam questions.

### How to Run
Copy the code below into a file called `binomial_visualiser.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Binomial Expansion Visualiser</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    input { margin-right: 0.5em; }
    .controls { margin-bottom: 1em; }
    .output pre { background: #f0f0f0; padding: 0.5em; }
  </style>
</head>
<body>
  <h3>Binomial Expansion Visualiser</h3>
  <div class="controls">
    <label for="n">n:</label>
    <input type="number" id="n" min="0" max="10" value="5" onchange="update()" oninput="update()">
    <label for="a">a:</label>
    <input type="number" id="a" value="2" onchange="update()" oninput="update()">
    <label for="k">k (coefficient of x):</label>
    <input type="number" id="k" value="1" onchange="update()" oninput="update()">
    <label for="terms">Number of terms:</label>
    <input type="number" id="terms" min="1" max="6" value="3" onchange="update()" oninput="update()">
  </div>
  <div class="output" id="output"></div>
  <script>
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return result;
    }
    function nCr(n, r) {
      return factorial(n) / (factorial(r) * factorial(n - r));
    }
    function update() {
      const n = parseInt(document.getElementById('n').value);
      const a = parseFloat(document.getElementById('a').value);
      const k = parseFloat(document.getElementById('k').value);
      const terms = Math.min(parseInt(document.getElementById('terms').value), n + 1);
      document.getElementById('terms').max = n + 1;
      let lines = [];
      for (let r = 0; r < terms; r++) {
        const coeff = nCr(n, r) * Math.pow(a, n - r) * Math.pow(k, r);
        lines.push('Term ' + (r + 1) + ': ' + coeff.toFixed(5) + ' \u00D7 x^' + r);
      }
      document.getElementById('output').innerHTML = '<pre>' + lines.join('\n') + '</pre>';
    }
    update();
  </script>
</body>
</html>
```

---

## WIDGET‑003: Binomial Approximation Tool
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET‑003 | ...]`  
Purpose: See how keeping different numbers of terms affects the approximation of $(1+u)^n$ for small $u$.

### Learning Goal
Understand how the binomial approximation $(1+u)^n \approx 1 + n u + \dfrac{n(n-1)}{2!}u^2 + \dfrac{n(n-1)(n-2)}{3!}u^3 + \dots$ converges to the exact value as more terms are included and as $|u|$ becomes smaller.

### Controls
* `n` (slider): choose $n$ (1–20).
* `u` (slider): choose the value of $u$ (–0.3 to 0.3).  Keep $|u|$ small to observe good approximations.
* `terms` (slider): number of terms to include in the approximation (1–6).

### Live Outputs
* Approximate value computed using the chosen number of terms.
* Exact value of $(1+u)^n$.
* Absolute error between the approximation and the exact value.

### What to Notice
* For fixed $n$, the approximation improves as you include more terms.
* For fixed number of terms, the approximation is more accurate when $|u|$ is small.
* The error roughly halves when you include an additional term for small $|u|$.

### Exam Connection
Approximation questions often require writing $(1+u)^n$ in ascending powers of $u$ and keeping three or four terms.  This widget reinforces how and why the approximation works.

### How to Run
Copy the code below into a file called `binomial_approximation.html` and open it in a web browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Binomial Approximation Tool</title>
  <style>
    body { font-family: sans-serif; padding: 1em; }
    .controls { margin-bottom: 1em; }
    .controls label { margin-right: 0.5em; }
    .output { background: #f9f9f9; padding: 0.5em; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h3>Binomial Approximation Tool</h3>
  <div class="controls">
    <label for="n">n:</label>
    <input type="range" id="n" min="1" max="20" value="8" oninput="update()">
    <span id="nVal">8</span>
    <br>
    <label for="u">u (–0.3 to 0.3):</label>
    <input type="range" id="u" min="-0.3" max="0.3" step="0.01" value="0.1" oninput="update()">
    <span id="uVal">0.10</span>
    <br>
    <label for="terms">Number of terms:</label>
    <input type="range" id="terms" min="1" max="6" value="3" oninput="update()">
    <span id="termsVal">3</span>
  </div>
  <div class="output" id="output"></div>
  <script>
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      return result;
    }
    function nCr(n, r) {
      return factorial(n) / (factorial(r) * factorial(n - r));
    }
    function update() {
      const n = parseInt(document.getElementById('n').value);
      const u = parseFloat(document.getElementById('u').value);
      const m = parseInt(document.getElementById('terms').value);
      document.getElementById('nVal').textContent = n;
      document.getElementById('uVal').textContent = u.toFixed(2);
      document.getElementById('termsVal').textContent = m;
      // approximate using first m terms
      let approx = 0;
      for (let r = 0; r < m; r++) {
        approx += nCr(n, r) * Math.pow(u, r);
      }
      const exact = Math.pow(1 + u, n);
      const error = Math.abs(exact - approx);
      document.getElementById('output').innerHTML =
        '<p>Approximate value (using ' + m + ' term' + (m===1?'':'s') + '): <strong>' + approx.toFixed(6) + '</strong></p>' +
        '<p>Exact value: <strong>' + exact.toFixed(6) + '</strong></p>' +
        '<p>Absolute error: <strong>' + error.toExponential(3) + '</strong></p>';
    }
    update();
  </script>
</body>
</html>
```
