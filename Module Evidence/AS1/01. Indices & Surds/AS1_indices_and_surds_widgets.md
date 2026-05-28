# Interactive Widgets for AS1 Indices and Surds

## WIDGET-001: Fractional Exponent Explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | ...]`  
Purpose: to let you explore how changing the base and the numerator/denominator of a rational exponent affects the value of a power.  It illustrates the meaning of a fractional exponent as both a root and a repeated power.

### Learning Goal
This widget helps you understand rational exponents.  By adjusting the base \(a\), the numerator \(m\) and the denominator \(n\) of the exponent, you can see how \(a^{m/n}\) behaves.  The widget displays the approximate decimal value along with two equivalent forms:

* The \(n\)th root of \(a^m\) — i.e. \(\sqrt[n]{a^m}\).
* The repeated root \((\sqrt[n]{a})^m\), which multiplies the \(n\)th root of \(a\) by itself \(m\) times.

### Controls
* **Base (a):** integer slider from 1 to 10.
* **Numerator (m):** integer slider from −5 to 5.
* **Denominator (n):** integer slider from 1 to 10 (non‑zero).

### Live Outputs
* **Computed value:** numeric approximation of \(a^{m/n}\).
* **Root form:** shows the expression \(\sqrt[n]{a^m}\) or \(1/\sqrt[n]{a^{|m|}}\) for negative \(m\).
* **Repeated root form:** shows \((\sqrt[n]{a})^m\) or \(1/(\sqrt[n]{a})^{|m|}\) for negative \(m\).

### What to Notice
* Increasing the numerator increases the power, while increasing the denominator reduces it.
* Negative numerators produce reciprocals; the widget shows this explicitly.
* When \(m=0\), the value is always 1 regardless of the base or denominator (zero index law).
* When \(n=1\), the exponent behaves like an integer power.

### Exam Connection
Understanding how fractional exponents work will help you simplify expressions such as \(16^{3/2}\) or \(27^{2/3}\) in exam problems.  The widget reinforces the connection between exponent laws and surd notation, ensuring you can switch between forms fluently.

### How to Run
Copy the code below into a file named, for example, `widget_fractional_exponent.html`, and open it in a modern web browser.  Adjust the sliders to see the outputs update in real time.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Fractional Exponent Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 500px; margin: 20px auto; line-height: 1.4; }
    label { display: block; margin-top: 10px; }
    input[type="number"] { width: 60px; }
    output { font-weight: bold; }
    .result { margin-top: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: #f9f9f9; }
  </style>
</head>
<body>
  <h2>Fractional Exponent Explorer</h2>
  <label>Base (a):
    <input type="number" id="base" value="2" min="1" max="10" step="1">
  </label>
  <label>Numerator (m):
    <input type="number" id="num" value="1" min="-5" max="5" step="1">
  </label>
  <label>Denominator (n):
    <input type="number" id="den" value="2" min="1" max="10" step="1">
  </label>
  <div class="result">
    <p>Computed value: <output id="value">0</output></p>
    <p>Root form: <output id="rootForm"></output></p>
    <p>Repeated root form: <output id="repeatForm"></output></p>
  </div>
  <script>
    function update() {
      const a = parseFloat(document.getElementById('base').value);
      const m = parseInt(document.getElementById('num').value, 10);
      const n = parseInt(document.getElementById('den').value, 10);
      if (!n) return;
      const exponent = m / n;
      const value = Math.pow(a, exponent);
      document.getElementById('value').textContent = value.toFixed(5);
      const absM = Math.abs(m);
      let rootForm;
      if (m >= 0) {
        rootForm = n + '\u221A( ' + a + '^' + m + ' )';
      } else {
        rootForm = '1 / ' + n + '\u221A( ' + a + '^' + absM + ' )';
      }
      let repeatForm;
      if (m >= 0) {
        repeatForm = '( ' + n + '\u221A( ' + a + ' ) )^' + m;
      } else {
        repeatForm = '1 / ( ' + n + '\u221A( ' + a + ' ) )^' + absM;
      }
      document.getElementById('rootForm').textContent = rootForm;
      document.getElementById('repeatForm').textContent = repeatForm;
    }
    document.getElementById('base').addEventListener('input', update);
    document.getElementById('num').addEventListener('input', update);
    document.getElementById('den').addEventListener('input', update);
    window.addEventListener('DOMContentLoaded', update);
  </script>
</body>
</html>
```


## WIDGET-002: Surd Simplifier
Source: lesson PDF p.2  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | ...]`  
Purpose: to practise simplifying square roots into the form \(k\sqrt{m}\) by extracting the largest square factor.  It mirrors the flowchart in the PDF but allows you to input any positive integer and see the result instantly.

### Learning Goal
This widget teaches you how to write a surd in its simplest form.  It implements the algorithm from the flowchart: find the largest perfect square factor of a positive integer and rewrite the root accordingly.  It reinforces that only square factors should be extracted.

### Controls
* **Number to simplify:** integer input box for a positive number (e.g. 72).

### Live Outputs
* **Simplified surd form:** shows the surd rewritten as \(k\sqrt{m}\) or left unchanged if no square factors exist.

### What to Notice
* The result always has the radicand \(m\) square‑free (no perfect square factors \(>1\)).
* When the input is already a perfect square, the root becomes an integer (e.g. input 49 returns 7).

### Exam Connection
Simplifying surds is a common first step in longer problems.  This widget helps you practise quickly so you can recognise square factors in exam questions.

### How to Run
Copy the following code into a file named `widget_surd_simplifier.html` and open it in a browser.  Type a positive integer and click the button to see its simplest surd form.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Surd Simplifier</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; line-height: 1.4; }
    label { display: block; margin-bottom: 8px; }
    input[type="number"] { width: 100px; }
    button { margin-top: 10px; }
    #result { margin-top: 15px; padding: 8px; border: 1px solid #ccc; background: #f9f9f9; }
  </style>
</head>
<body>
  <h2>Surd Simplifier</h2>
  <label>
    Enter a positive integer:
    <input type="number" id="numberInput" value="72" min="1" step="1">
  </label>
  <button id="simplifyBtn">Simplify</button>
  <div id="result"></div>
  <script>
    function simplifySurd(n) {
      const limit = Math.floor(Math.sqrt(n));
      let k = 1;
      for (let i = limit; i >= 2; i--) {
        const square = i * i;
        if (n % square === 0) {
          k = i;
          break;
        }
      }
      if (k === 1) {
        return '\u221A' + n;
      } else {
        const m = n / (k * k);
        return k + '\u221A' + m;
      }
    }
    document.getElementById('simplifyBtn').addEventListener('click', function() {
      const n = parseInt(document.getElementById('numberInput').value, 10);
      if (!n || n < 1) {
        document.getElementById('result').textContent = 'Please enter a positive integer.';
        return;
      }
      const simplified = simplifySurd(n);
      document.getElementById('result').textContent = 'Simplest form: ' + simplified;
    });
  </script>
</body>
</html>
```


## WIDGET-003: Rationalising Surd Denominators
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | ...]`  
Purpose: to practise rationalising simple and binomial surd denominators.  This widget accepts a denominator of the form \(\sqrt{a}\) or \(a \pm \sqrt{b}\) and shows each step needed to remove the surd from the denominator.

### Learning Goal
You will learn how to eliminate surds from denominators by multiplying by an appropriate form of 1.  The widget illustrates the two strategies: multiplying by the same surd for simple denominators and multiplying by the conjugate for binomial denominators.

### Controls
* **Denominator:** text input for the denominator expression.  Acceptable forms include `sqrt(7)`, `3+sqrt(2)` and `5-sqrt(3)`.  Do not include spaces inside the expression.

### Live Outputs
* **Step‑by‑step explanation:** a list describing how the denominator was rationalised and the resulting expression in simplified form.

### What to Notice
* For denominators like \(\sqrt{a}\), the rationalising factor is another \(\sqrt{a}\), giving a denominator of \(a\).
* For denominators like \(a \pm \sqrt{b}\), the conjugate \(a \mp \sqrt{b}\) removes the surd term via the difference of squares.
* The numerator is assumed to be 1 for simplicity; the same method works for any numerator.

### Exam Connection
Rationalising denominators is required by the specification and often appears in marks‑for‑methods questions.  Being comfortable with conjugates ensures you can tackle questions involving binomial surd denominators without hesitation.

### How to Run
Save the code below to a file named `widget_rationalise_denominator.html` and open it in a browser.  Enter a denominator and click the button to see the rationalisation steps.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Rationalise Surd Denominator</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; }
    label { display: block; margin-bottom: 8px; }
    input[type="text"] { width: 200px; }
    button { margin-top: 10px; }
    #output { margin-top: 15px; padding: 8px; border: 1px solid #ccc; background: #f9f9f9; }
    ul { list-style-type: disc; padding-left: 20px; }
  </style>
</head>
<body>
  <h2>Rationalise Surd Denominator</h2>
  <label>
    Enter denominator (e.g. sqrt(7), 3+sqrt(2), 5-sqrt(3)):
    <input type="text" id="denom" value="sqrt(7)">
  </label>
  <button id="rationaliseBtn">Rationalise</button>
  <div id="output"></div>
  <script>
    function rationaliseSimple(rad) {
      const steps = [];
      steps.push('Denominator is of the form √a with a = ' + rad + '.');
      steps.push('Multiply numerator and denominator by √' + rad + ' to get a whole number in the denominator.');
      steps.push('Result: ( √' + rad + ' ) / ' + rad);
      return steps;
    }
    function rationaliseBinomial(a, b, sign) {
      const steps = [];
      const denomStr = '' + a + sign + '√' + b;
      const conjSign = sign === '+' ? '-' : '+';
      const conjStr = '' + a + conjSign + '√' + b;
      const denomVal = a * a - b;
      steps.push('Denominator is a binomial surd: ' + denomStr + '.');
      steps.push('Multiply numerator and denominator by the conjugate ' + conjStr + '.');
      steps.push('Numerator becomes ' + conjStr + '.');
      steps.push('Denominator becomes ' + a + '² - (√' + b + ')² = ' + (a * a) + ' - ' + b + ' = ' + denomVal + '.');
      steps.push('Result: ' + conjStr + ' / ' + denomVal);
      return steps;
    }
    document.getElementById('rationaliseBtn').addEventListener('click', function() {
      const input = document.getElementById('denom').value.trim().replace(/\s+/g, '');
      const output = document.getElementById('output');
      if (!input) { output.textContent = 'Please enter a denominator.'; return; }
      let steps;
      let m = input.match(/^sqrt\((\d+)\)$/);
      if (m) {
        const rad = parseInt(m[1], 10);
        steps = rationaliseSimple(rad);
      } else {
        m = input.match(/^(\d+)(\+|-)sqrt\((\d+)\)$/);
        if (m) {
          const a = parseInt(m[1], 10);
          const sign = m[2];
          const b = parseInt(m[3], 10);
          steps = rationaliseBinomial(a, b, sign);
        }
      }
      if (!steps) {
        output.textContent = 'Unsupported format. Use sqrt(a) or a±sqrt(b) with integers.';
        return;
      }
      output.innerHTML = '<ul>' + steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ul>';
    });
  </script>
</body>
</html>
```

These widgets are intended as learning aids.  They should not replace the written methods required in AS/A Level exams but can help you verify answers and build intuition.