# Interactive Widgets for AS1 Exponentials and Logarithms

## WIDGET-001: Exponential and logarithm inverse explorer
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-001 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_exponentials_and_logarithms_widgets.md | Purpose: slider exploration of $y=a^x$ and its inverse $y=\log_a x$]`  
Purpose: Lets the learner vary the base and see how the exponential graph and its inverse logarithm graph change.

### Learning Goal
Understand that `y = a^x` and `y = log_a x` are inverse functions, reflected in the line `y=x`, and that the base restrictions `a>0` and `a≠1` are essential.

### Controls
- `Base a`: changes the base in both `y=a^x` and `y=log_a x`.

### Live Outputs
- Graphs of `y=a^x`, `y=log_a x`, and the mirror line `y=x`.
- Domain, range, shape and key-point notes.

### What to Notice
- Both graphs swap the key points `(0,1)` and `(1,0)`.
- If `a>1`, the exponential and logarithm are increasing.
- If `0<a<1`, both are decreasing.
- The logarithm graph exists only for `x>0`.

### Exam Connection
This supports graph-sketching questions and inverse-function reasoning. In an exam, you still need to state domain, range, intercepts and asymptotes clearly in written form.

### How to Run
Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exponential and Logarithm Inverse Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.4; margin: 24px; }
    .panel { max-width: 980px; border: 1px solid #ccc; border-radius: 12px; padding: 18px; }
    .controls { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin-bottom: 14px; }
    label { font-weight: bold; }
    input[type="range"] { width: 260px; }
    svg { width: 100%; max-width: 860px; height: auto; border: 1px solid #ddd; background: white; }
    .note { background: #f7f7f7; border-left: 4px solid #555; padding: 10px; margin-top: 12px; }
    .warning { color: #9b1c1c; font-weight: bold; }
  </style>
</head>
<body>
  <main class="panel">
    <h1>Exponential and Logarithm Inverse Explorer</h1>
    <p>Move the base. This is a learning tool, not a replacement for exam working.</p>

    <div class="controls">
      <label for="base">Base a:</label>
      <input id="base" type="range" min="0.2" max="5" step="0.1" value="2">
      <input id="baseNumber" type="number" min="0.2" max="5" step="0.1" value="2">
      <span id="baseReadout"></span>
    </div>

    <svg id="graph" viewBox="0 0 700 520" aria-label="Graph of exponential and logarithm inverse functions"></svg>

    <div id="facts" class="note"></div>
  </main>

  <script>
    const base = document.getElementById('base');
    const baseNumber = document.getElementById('baseNumber');
    const baseReadout = document.getElementById('baseReadout');
    const graph = document.getElementById('graph');
    const facts = document.getElementById('facts');

    const W = 700, H = 520;
    const margin = { left: 60, right: 20, top: 20, bottom: 50 };
    const xmin = -4, xmax = 6, ymin = -4, ymax = 6;

    function sx(x) { return margin.left + (x - xmin) / (xmax - xmin) * (W - margin.left - margin.right); }
    function sy(y) { return H - margin.bottom - (y - ymin) / (ymax - ymin) * (H - margin.top - margin.bottom); }
    function esc(s) { return String(s).replace(/[&<>]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch])); }

    function line(x1, y1, x2, y2, attrs) {
      return `<line x1="${sx(x1)}" y1="${sy(y1)}" x2="${sx(x2)}" y2="${sy(y2)}" ${attrs}/>`;
    }

    function text(x, y, content, attrs='') {
      return `<text x="${sx(x)}" y="${sy(y)}" ${attrs}>${esc(content)}</text>`;
    }

    function makePath(fn, start, end, step) {
      let d = '';
      let started = false;
      for (let x = start; x <= end + 1e-9; x += step) {
        const y = fn(x);
        if (!Number.isFinite(y) || y < ymin - 1 || y > ymax + 1) {
          started = false;
          continue;
        }
        const px = sx(x), py = sy(y);
        d += started ? ` L ${px.toFixed(2)} ${py.toFixed(2)}` : `M ${px.toFixed(2)} ${py.toFixed(2)}`;
        started = true;
      }
      return d;
    }

    function syncFromRange() { baseNumber.value = base.value; update(); }
    function syncFromNumber() { base.value = baseNumber.value; update(); }
    base.addEventListener('input', syncFromRange);
    baseNumber.addEventListener('input', syncFromNumber);

    function update() {
      const a = Number(baseNumber.value);
      baseReadout.textContent = `a = ${a.toFixed(2)}`;

      let svg = '';
      svg += '<rect x="0" y="0" width="700" height="520" fill="white"/>';
      for (let x = Math.ceil(xmin); x <= xmax; x++) svg += line(x, ymin, x, ymax, 'stroke="#eeeeee" stroke-width="1"');
      for (let y = Math.ceil(ymin); y <= ymax; y++) svg += line(xmin, y, xmax, y, 'stroke="#eeeeee" stroke-width="1"');
      svg += line(xmin, 0, xmax, 0, 'stroke="#222" stroke-width="1.5"');
      svg += line(0, ymin, 0, ymax, 'stroke="#222" stroke-width="1.5"');
      svg += text(xmax - 0.25, -0.3, 'x', 'font-size="14"');
      svg += text(0.2, ymax - 0.25, 'y', 'font-size="14"');
      svg += line(xmin, xmin, xmax, xmax, 'stroke="#777" stroke-width="1.5" stroke-dasharray="5 4"');

      if (!(a > 0) || Math.abs(a - 1) < 1e-9) {
        graph.innerHTML = svg + `<text x="350" y="260" text-anchor="middle" font-size="22" fill="#9b1c1c">Base must satisfy a &gt; 0 and a ≠ 1.</text>`;
        facts.innerHTML = '<span class="warning">Invalid base.</span> Choose a positive base that is not 1.';
        return;
      }

      const expPath = makePath(x => Math.pow(a, x), xmin, xmax, 0.03);
      const logPath = makePath(x => Math.log(x) / Math.log(a), 0.03, xmax, 0.03);
      svg += `<path d="${expPath}" fill="none" stroke="#1f77b4" stroke-width="3"/>`;
      svg += `<path d="${logPath}" fill="none" stroke="#d62728" stroke-width="3"/>`;
      svg += '<circle cx="' + sx(0) + '" cy="' + sy(1) + '" r="4" fill="#1f77b4"/>';
      svg += '<circle cx="' + sx(1) + '" cy="' + sy(0) + '" r="4" fill="#d62728"/>';
      svg += '<text x="80" y="34" font-size="15" fill="#1f77b4">y = a^x</text>';
      svg += '<text x="80" y="56" font-size="15" fill="#d62728">y = log_a x</text>';
      svg += '<text x="80" y="78" font-size="15" fill="#777">dashed line: y = x</text>';
      graph.innerHTML = svg;

      const direction = a > 1 ? 'increasing' : 'decreasing';
      facts.innerHTML = `
        <strong>For a = ${a.toFixed(2)}:</strong><br>
        y = a^x is ${direction}, has domain all real x, range y &gt; 0, and passes through (0,1).<br>
        y = log_a x is ${direction}, has domain x &gt; 0, range all real y, and passes through (1,0).<br>
        The two graphs are reflections in y = x.
      `;
    }

    update();
  </script>
</body>
</html>
```

---

## WIDGET-002: Exponential equation checker for `a^(mx+c)=b`
Source: lesson PDF p.6, adapted and corrected  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-002 | Source: lesson PDF p.6, adapted and corrected | Insert from AS1_exponentials_and_logarithms_widgets.md | Purpose: practise solving $a^{mx+c}=b$ and checking by substitution]`  
Purpose: Practises a common AS1 equation type where the unknown is in the exponent.

### Learning Goal
See the written method for solving `a^(mx+c)=b` by taking logarithms and rearranging. This widget deliberately avoids computer algebra; it only uses the standard log formula for this specific form.

### Controls
- `a`: base of the exponential.
- `m`: coefficient of `x` in the exponent.
- `c`: constant term in the exponent.
- `b`: right-hand side.

### Live Outputs
- The rearranged formula for `x`.
- A decimal answer.
- A substitution check in the original equation.

### What to Notice
- The restrictions are `a>0`, `a≠1`, `b>0`, and `m≠0`.
- Natural logs and base-10 logs give the same answer if used consistently.
- Checking by substitution catches many arithmetic slips.

### Exam Connection
CCEA AS1 expects written algebra. Use this to build fluency, then practise writing the method by hand.

### How to Run
Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exponential Equation Checker</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.45; margin: 24px; }
    .panel { max-width: 850px; border: 1px solid #ccc; border-radius: 12px; padding: 18px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
    label { font-weight: bold; display: block; }
    input { width: 100%; padding: 6px; font-size: 16px; }
    .output { background: #f7f7f7; border-left: 4px solid #555; padding: 12px; margin-top: 16px; }
    .warning { color: #9b1c1c; font-weight: bold; }
    code { background: #eee; padding: 1px 4px; border-radius: 4px; }
  </style>
</head>
<body>
  <main class="panel">
    <h1>Exponential Equation Checker</h1>
    <p>Equation form: <strong>a^(mx+c) = b</strong></p>

    <div class="grid">
      <div><label for="a">a</label><input id="a" type="number" step="0.1" value="3"></div>
      <div><label for="m">m</label><input id="m" type="number" step="0.1" value="2"></div>
      <div><label for="c">c</label><input id="c" type="number" step="0.1" value="1"></div>
      <div><label for="b">b</label><input id="b" type="number" step="0.1" value="27"></div>
    </div>

    <div id="out" class="output"></div>
  </main>

  <script>
    const ids = ['a', 'm', 'c', 'b'];
    const inputs = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
    const out = document.getElementById('out');
    ids.forEach(id => inputs[id].addEventListener('input', update));

    function fmt(n, dp = 6) {
      if (!Number.isFinite(n)) return 'not finite';
      return Math.abs(n) >= 10000 || Math.abs(n) < 0.0001 && n !== 0 ? n.toExponential(4) : Number(n.toFixed(dp)).toString();
    }

    function update() {
      const a = Number(inputs.a.value);
      const m = Number(inputs.m.value);
      const c = Number(inputs.c.value);
      const b = Number(inputs.b.value);

      if (!(a > 0) || Math.abs(a - 1) < 1e-12 || !(b > 0) || Math.abs(m) < 1e-12) {
        out.innerHTML = `
          <span class="warning">Check the restrictions.</span><br>
          Need <code>a &gt; 0</code>, <code>a ≠ 1</code>, <code>b &gt; 0</code>, and <code>m ≠ 0</code>.
        `;
        return;
      }

      const exponent = Math.log(b) / Math.log(a);
      const x = (exponent - c) / m;
      const check = Math.pow(a, m * x + c);
      const error = Math.abs(check - b);

      out.innerHTML = `
        <strong>Step 1:</strong> Take logs of both sides.<br>
        ln(a^(mx+c)) = ln(b)<br><br>
        <strong>Step 2:</strong> Bring the exponent down.<br>
        (mx+c)ln(a) = ln(b)<br><br>
        <strong>Step 3:</strong> Rearrange.<br>
        mx+c = ln(b)/ln(a) = ${fmt(exponent)}<br>
        x = (ln(b)/ln(a) - c)/m = <strong>${fmt(x)}</strong><br><br>
        <strong>Check:</strong> a^(mx+c) = ${fmt(check)}. Target b = ${fmt(b)}. Difference = ${fmt(error, 8)}.
      `;
    }

    update();
  </script>
</body>
</html>
```

---

## WIDGET-003: Exponential growth and decay model explorer
Source: AI-proposed teaching enhancement based on lesson PDF p.10  
Used in lesson placeholder: `[INTERACTIVE PLACEHOLDER: WIDGET-003 | Source: AI-proposed teaching enhancement based on lesson PDF p.10 | Insert from AS1_exponentials_and_logarithms_widgets.md | Purpose: explore $y=Ae^{kt}$, current value, rate of change and half-life/doubling time]`  
Purpose: Builds intuition for `A`, `k`, `t`, current value, rate of change, and half-life/doubling time in the model `y=Ae^(kt)`.

### Learning Goal
Understand how the sign and size of `k` controls growth or decay, and how to interpret a model in context.

### Controls
- `A`: initial value.
- `k`: growth/decay constant.
- `t`: time at which to evaluate the model.

### Live Outputs
- Current value `y=Ae^(kt)`.
- Instantaneous rate of change `dy/dt=ky`.
- Model type: growth, decay, or constant.
- Doubling time or half-life where appropriate.
- A graph of the model with the chosen point marked.

### What to Notice
- If `k>0`, the graph grows and the rate of change is positive.
- If `k<0`, the graph decays and the rate of change is negative.
- The rate of change is proportional to the current value.

### Exam Connection
This helps with interpreting model parameters and judging whether predictions are sensible. In exams, you should still show substitutions, logarithm steps and units.

### How to Run
Copy the code below into a `.html` file and open it in a browser.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exponential Growth and Decay Explorer</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.45; margin: 24px; }
    .panel { max-width: 980px; border: 1px solid #ccc; border-radius: 12px; padding: 18px; }
    .controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
    label { font-weight: bold; display: block; }
    input[type="range"] { width: 100%; }
    .readout { font-family: monospace; }
    svg { width: 100%; max-width: 860px; height: auto; border: 1px solid #ddd; background: white; margin-top: 16px; }
    .output { background: #f7f7f7; border-left: 4px solid #555; padding: 12px; margin-top: 16px; }
  </style>
</head>
<body>
  <main class="panel">
    <h1>Exponential Growth and Decay Explorer</h1>
    <p>Model: <strong>y = A e^(kt)</strong></p>

    <div class="controls">
      <div>
        <label for="A">A: initial value <span id="Aout" class="readout"></span></label>
        <input id="A" type="range" min="1" max="200" step="1" value="25">
      </div>
      <div>
        <label for="k">k: growth/decay constant <span id="kout" class="readout"></span></label>
        <input id="k" type="range" min="-1" max="1" step="0.01" value="-0.05">
      </div>
      <div>
        <label for="t">t: time <span id="tout" class="readout"></span></label>
        <input id="t" type="range" min="0" max="30" step="0.1" value="6">
      </div>
    </div>

    <svg id="graph" viewBox="0 0 700 500" aria-label="Graph of exponential growth or decay model"></svg>
    <div id="out" class="output"></div>
  </main>

  <script>
    const AInput = document.getElementById('A');
    const kInput = document.getElementById('k');
    const tInput = document.getElementById('t');
    const Aout = document.getElementById('Aout');
    const kout = document.getElementById('kout');
    const tout = document.getElementById('tout');
    const graph = document.getElementById('graph');
    const out = document.getElementById('out');

    [AInput, kInput, tInput].forEach(el => el.addEventListener('input', update));

    const W = 700, H = 500;
    const margin = { left: 70, right: 25, top: 25, bottom: 55 };

    function fmt(n, dp = 4) {
      if (!Number.isFinite(n)) return 'not finite';
      return Math.abs(n) >= 10000 || Math.abs(n) < 0.0001 && n !== 0 ? n.toExponential(4) : Number(n.toFixed(dp)).toString();
    }

    function update() {
      const A = Number(AInput.value);
      const k = Number(kInput.value);
      const t = Number(tInput.value);
      Aout.textContent = A;
      kout.textContent = k.toFixed(2);
      tout.textContent = t.toFixed(1);

      const y = A * Math.exp(k * t);
      const rate = k * y;
      const type = k > 0 ? 'growth' : (k < 0 ? 'decay' : 'constant');
      const timePhrase = k > 0 ? `Doubling time = ln(2)/k = ${fmt(Math.log(2) / k)} time units.` :
                         k < 0 ? `Half-life = ln(2)/(-k) = ${fmt(Math.log(2) / (-k))} time units.` :
                         'No doubling time or half-life: k = 0 gives a constant model.';

      draw(A, k, t, y);
      out.innerHTML = `
        <strong>Current value:</strong> y = A e^(kt) = ${fmt(y)}<br>
        <strong>Rate of change:</strong> dy/dt = ky = ${fmt(rate)}<br>
        <strong>Model type:</strong> ${type}<br>
        <strong>Time feature:</strong> ${timePhrase}<br><br>
        Exam habit: state what A and k mean in context, include units, and check whether the prediction is realistic.
      `;
    }

    function draw(A, k, tChosen, yChosen) {
      const tMax = Math.max(10, Math.ceil(tChosen));
      let yMax = 0;
      for (let i = 0; i <= 200; i++) {
        const tt = tMax * i / 200;
        yMax = Math.max(yMax, A * Math.exp(k * tt));
      }
      yMax = Math.max(A * 1.2, yMax * 1.15, 1);

      function sx(t) { return margin.left + t / tMax * (W - margin.left - margin.right); }
      function sy(y) { return H - margin.bottom - y / yMax * (H - margin.top - margin.bottom); }

      let svg = '<rect x="0" y="0" width="700" height="500" fill="white"/>';
      for (let i = 0; i <= 10; i++) {
        const tt = tMax * i / 10;
        svg += `<line x1="${sx(tt)}" y1="${sy(0)}" x2="${sx(tt)}" y2="${sy(yMax)}" stroke="#eee"/>`;
      }
      for (let i = 0; i <= 8; i++) {
        const yy = yMax * i / 8;
        svg += `<line x1="${sx(0)}" y1="${sy(yy)}" x2="${sx(tMax)}" y2="${sy(yy)}" stroke="#eee"/>`;
      }
      svg += `<line x1="${sx(0)}" y1="${sy(0)}" x2="${sx(tMax)}" y2="${sy(0)}" stroke="#222" stroke-width="1.5"/>`;
      svg += `<line x1="${sx(0)}" y1="${sy(0)}" x2="${sx(0)}" y2="${sy(yMax)}" stroke="#222" stroke-width="1.5"/>`;
      svg += `<text x="${sx(tMax)-10}" y="${sy(0)+35}" font-size="14">t</text>`;
      svg += `<text x="${sx(0)-35}" y="${sy(yMax)+10}" font-size="14">y</text>`;

      let d = '';
      for (let i = 0; i <= 240; i++) {
        const tt = tMax * i / 240;
        const yy = A * Math.exp(k * tt);
        const part = `${sx(tt).toFixed(2)} ${sy(yy).toFixed(2)}`;
        d += i === 0 ? `M ${part}` : ` L ${part}`;
      }
      svg += `<path d="${d}" fill="none" stroke="#1f77b4" stroke-width="3"/>`;
      svg += `<circle cx="${sx(tChosen)}" cy="${sy(yChosen)}" r="5" fill="#d62728"/>`;
      svg += `<text x="${sx(tChosen)+8}" y="${sy(yChosen)-8}" font-size="13">(${tChosen.toFixed(1)}, ${fmt(yChosen,2)})</text>`;
      svg += `<text x="${sx(0)+10}" y="${sy(A)-8}" font-size="13">A</text>`;
      graph.innerHTML = svg;
    }

    update();
  </script>
</body>
</html>
```
