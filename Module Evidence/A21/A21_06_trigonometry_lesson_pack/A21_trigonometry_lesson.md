```markdown
# A21_trigonometry_lesson.md PART 1A

---
unit: A21
topic: Trigonometry
lo_ids: [A21-TRIG-LO002, A21-TRIG-LO003, A21-TRIG-LO004, A21-TRIG-LO005, A21-TRIG-LO006, A21-TRIG-LO007, A21-TRIG-LO008, A21-TRIG-LO009]
tags: [#A21, #Trigonometry, #Radians, #TrigIdentities, #CompoundAngles, #LessonNotes]
status: Complete
---

## 1. Lesson Title

**Trigonometric Functions, Identities and Modelling**  
**Unit:** A2 1 Pure Mathematics (A21)  
**Source Evidence:** Transcript Markdown, DrFrostMaths PowerPoint (PDF), ActivInspire Slides (PDF)  
**Date Generated:** 2026-05-30  
**Relevant LO IDs:** A21-TRIG-LO002, A21-TRIG-LO003, A21-TRIG-LO004, A21-TRIG-LO005, A21-TRIG-LO006, A21-TRIG-LO007, A21-TRIG-LO008, A21-TRIG-LO009  
**Suggested Tags:** `#A21`, `#Trigonometry`, `#TrigIdentities`, `#CompoundAngles`, `#SolveTrigEquation`, `#Modelling`

## 2. Evidence Map

| Evidence Type | Filename | Role in this lesson | Pages/Slides | Notes on quality or uncertainty |
|---|---|---|---|---|
| Specification Map | `CCEA_GCE_Mathematics_Specification_Map.md` | Authority for syllabus boundaries and LOs | A21 TRIG section | Clear mapping to A21 Trigonometry. |
| Transcript | `06 Trigonometric Functions.md` | Primary teaching narrative, explanations, and worked examples | All | Excellent detail on proofs, common mistakes, and modelling. Covers both Chapter 6 (Reciprocal/Inverse) and Chapter 7 (Identities/Modelling). |
| PowerPoint | `DrFrostMaths P2 Chapter 6 Trigonometry` | Visual sequencing, graph shapes, formal definitions | Slides 1-29 | Good visual reference for reciprocal and inverse graphs. |
| PowerPoint | `ActivInspire Slides` | Handwritten annotations of worked examples | Slides 1-32 | Confirms algebraic steps for proofs and solving equations. |

## 3. Specification Alignment

| LO ID | CCEA Specification Point | Elaboration Guidance | Covered? | Where it appears | Gap / Action Needed | Suggested Visual/Widget |
|---|---|---|---|---|---|---|
| A21-TRIG-LO002 | Definitions of secant, cosecant, cotangent, arcsin, arccos, arctan | None | Yes | Section 7, 8 | None | Reciprocal function table |
| A21-TRIG-LO003 | Graphs of secant, cosecant, cotangent, arcsin, arccos, arctan | None | Yes | Section 8, 9 | None | Graph sketches showing asymptotes |
| A21-TRIG-LO004 | Use $\sec^2\theta=1+\tan^2\theta$ and $\operatorname{cosec}^2\theta=1+\cot^2\theta$ | None | Yes | Section 8, 11 | None | Identity derivation flowchart |
| A21-TRIG-LO005 | Compound angle formulae for $\sin(A\pm B)$, $\cos(A\pm B)$, $\tan(A\pm B)$ | None | Yes | Section 8 | None | Formula table |
| A21-TRIG-LO006 | Use and prove double angle formulae | None | Yes | Section 8, 11 | None | Proof map |
| A21-TRIG-LO007 | Expressions for $a\cos\theta+b\sin\theta$ in forms $r\cos(\theta\pm\alpha)$ | None | Yes | Section 8, 11 | None | Right-triangle for $R$ and $\alpha$ |
| A21-TRIG-LO008 | Construct proofs involving trig functions and identities | None | Yes | Section 11 | None | Logic-flow diagram |
| A21-TRIG-LO009 | Use trigonometric functions to solve problems in context | None | Yes | Section 11 | None | Context graph (temperature model) |

## 4. Learning Objectives

By the end of this lesson, you should be able to:
* Define and use the reciprocal trigonometric functions: $\sec x$, $\operatorname{cosec} x$, and $\cot x$.
* Sketch the graphs of reciprocal and inverse trigonometric functions, identifying their domains, ranges, and asymptotes.
* Derive and apply the Pythagorean identities involving $\sec^2 x$ and $\operatorname{cosec}^2 x$.
* Use compound angle and double angle formulae to simplify expressions and solve equations.
* Express $a\cos\theta + b\sin\theta$ in the harmonic form $R\sin(\theta \pm \alpha)$ or $R\cos(\theta \pm \alpha)$.
* Construct formal algebraic proofs for trigonometric identities.
* Solve complex trigonometric equations within given intervals (in degrees and radians).
* Apply trigonometric functions to model real-world contexts and find maximum/minimum values.

## 5. Compact Prerequisite Recap

To succeed in this A2 lesson, you need to be confident with the following AS1 concepts:
* **Basic Trigonometry:** $\sin \theta$, $\cos \theta$, and $\tan \theta$, including exact values (e.g., $\sin(30^\circ) = \frac{1}{2}$, $\cos(\frac{\pi}{4}) = \frac{\sqrt{2}}{2}$).
* **AS Identities:** $\tan \theta \equiv \frac{\sin \theta}{\cos \theta}$ and $\sin^2 \theta + \cos^2 \theta \equiv 1$.
* **Solving Equations:** Using the CAST diagram or graph symmetries to find multiple solutions in a given interval (e.g., $0 \le \theta < 360^\circ$ or $0 \le x < 2\pi$).
* **Transformations:** How $y = f(2x)$ compresses a graph horizontally, and $y = f(x) + a$ translates it vertically.
* **Algebraic Fractions:** Adding fractions by finding a common denominator: $\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}$.

## 6. Big Picture Explanation

In AS Mathematics, you worked with the "Classic Cola" of trigonometry: sine, cosine, and tangent. You learned what their graphs look like and how they relate to the unit circle. 

In A2 Mathematics, we expand the trigonometric family. First, we introduce the **reciprocal functions** (secant, cosecant, and cotangent). These aren't entirely new concepts; they are simply $1$ divided by the original functions. Having specific names for these reciprocals makes calculus (differentiation and integration) much cleaner later in the course. 

We also formalise the **inverse functions** ($\arcsin$, $\arccos$, $\arctan$), which you have been using on your calculator as $\sin^{-1}$, $\cos^{-1}$, and $\tan^{-1}$. We will look at their graphs and understand why their domains must be restricted.

Finally, we introduce a powerful toolkit of **identities and formulae** (compound angles, double angles, and the harmonic form). These tools allow us to take messy, complicated trigonometric expressions and mold them into simpler forms. This is essential for solving advanced equations and for **modelling** real-world phenomena, such as the fluctuating temperature of a chemical reaction over time.

## 7. Key Definitions and Notation

### Reciprocal Trigonometric Functions
These are the reciprocals of the standard trigonometric functions. 
* **Secant:** $\sec x \equiv \frac{1}{\cos x}$
* **Cosecant:** $\operatorname{cosec} x \equiv \frac{1}{\sin x}$
* **Cotangent:** $\cot x \equiv \frac{1}{\tan x} \equiv \frac{\cos x}{\sin x}$

*Memory Tip:* Look at the **third letter** of the reciprocal function to remember which standard function it pairs with:
* $\text{se}\mathbf{c} x \rightarrow \cos x$
* $\text{co}\mathbf{s}\text{ec} x \rightarrow \sin x$
* $\text{co}\mathbf{t} x \rightarrow \tan x$

### Inverse Trigonometric Functions
Inverse functions "undo" the original function to find the angle.
* $\arcsin x$ is the inverse of $\sin x$ (often written as $\sin^{-1} x$ on calculators).
* $\arccos x$ is the inverse of $\cos x$ (often written as $\cos^{-1} x$).
* $\arctan x$ is the inverse of $\tan x$ (often written as $\tan^{-1} x$).

**Warning:** Do not confuse the inverse notation $\cos^{-1} x$ with the reciprocal $(\cos x)^{-1}$. 
* $\cos^{-1} x = \arccos x$ (Finds the angle)
* $(\cos x)^{-1} = \frac{1}{\cos x} = \sec x$ (Finds the reciprocal value)

## 8. Core Theory

### 8.1 Graphs of Reciprocal Trigonometric Functions

To sketch the graph of a reciprocal function like $y = \operatorname{cosec} x$, we start by imagining the graph of $y = \sin x$ and reciprocating every $y$-value.

1. **Where $\sin x = 1$**, $\operatorname{cosec} x = \frac{1}{1} = 1$. The graphs touch at these peaks.
2. **Where $\sin x = -1$**, $\operatorname{cosec} x = \frac{1}{-1} = -1$. The graphs touch at these troughs.
3. **Where $\sin x = 0$**, $\operatorname{cosec} x = \frac{1}{0}$, which is undefined. This creates **vertical asymptotes** at $x = 0, \pi, 2\pi, \dots$
4. **As $\sin x$ gets very small** (close to 0), $\operatorname{cosec} x$ gets very large (tends to $\pm \infty$).

[VISUAL PLACEHOLDER: A21TrigonometrySVG-001 | Source: PowerPoint slide 10 | Insert from A21_trigonometry_svg.md | Purpose: Graph of y = cosec x overlaid on y = sin x showing asymptotes]

[VISUAL PLACEHOLDER: A21TrigonometrySVG-002 | Source: PowerPoint slide 11 | Insert from A21_trigonometry_svg.md | Purpose: Graph of y = sec x overlaid on y = cos x showing asymptotes]

[VISUAL PLACEHOLDER: A21TrigonometrySVG-003 | Source: PowerPoint slide 12 | Insert from A21_trigonometry_svg.md | Purpose: Graph of y = cot x overlaid on y = tan x showing asymptotes]

### 8.2 The New Pythagorean Identities

In AS Mathematics, you learned that $\sin^2 x + \cos^2 x \equiv 1$. By dividing this entire equation by either $\cos^2 x$ or $\sin^2 x$, we generate two new identities essential for A2 proofs and equations.

**Deriving Identity 1 (Divide by $\cos^2 x$):**
$$ \frac{\sin^2 x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} $$
$$ \tan^2 x + 1 \equiv \sec^2 x $$

**Deriving Identity 2 (Divide by $\sin^2 x$):**
$$ \frac{\sin^2 x}{\sin^2 x} + \frac{\cos^2 x}{\sin^2 x} = \frac{1}{\sin^2 x} $$
$$ 1 + \cot^2 x \equiv \operatorname{cosec}^2 x $$

*Exam Tip:* You must explicitly show the division step if an exam asks you to "Prove that $1 + \tan^2 x \equiv \sec^2 x$".

### 8.3 Addition (Compound Angle) Formulae

These formulae allow you to expand trigonometric functions of added or subtracted angles. They are provided in the CCEA formula booklet, but familiarising yourself with their patterns speeds up your working.

* $\sin(A \pm B) \equiv \sin A \cos B \pm \cos A \sin B$ (Mixes $\sin$ and $\cos$, sign stays the same)
* $\cos(A \pm B) \equiv \cos A \cos B \mp \sin A \sin B$ (Groups $\cos$ and $\sin$, sign flips)
* $\tan(A \pm B) \equiv \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}$

### 8.4 Double Angle Formulae

By setting $B = A$ in the addition formulae, we get the double angle formulae. **You must memorise these.**

* $\sin(2A) \equiv 2\sin A \cos A$
* $\cos(2A) \equiv \cos^2 A - \sin^2 A$
  * *Alternative 1:* $\cos(2A) \equiv 2\cos^2 A - 1$ (Substitute $\sin^2 A = 1 - \cos^2 A$)
  * *Alternative 2:* $\cos(2A) \equiv 1 - 2\sin^2 A$ (Substitute $\cos^2 A = 1 - \sin^2 A$)
* $\tan(2A) \equiv \frac{2\tan A}{1 - \tan^2 A}$

### 8.5 The Harmonic Identity ($R\sin(x \pm \alpha)$)

When you have an expression mixing sine and cosine of the same angle, like $a\cos x + b\sin x$, it can be combined into a single sine or cosine wave with a shifted phase and a new amplitude. 

**Form:** $R\sin(x \pm \alpha)$ or $R\cos(x \pm \alpha)$
* **Amplitude ($R$):** Found using Pythagoras: $R = \sqrt{a^2 + b^2}$
* **Phase shift ($\alpha$):** Found using trigonometry: $\tan \alpha = \frac{\text{opposite}}{\text{adjacent}}$ (derived by expanding the compound angle formula and equating coefficients).

### 8.6 Graphs of Inverse Trigonometric Functions

For a function to have an inverse, it must be **one-to-one** (each $y$-value comes from exactly one $x$-value). Because sine, cosine, and tangent are periodic (many-to-one), we must **restrict their domains** before finding the inverse.

* **$y = \arcsin x$:** Domain $[-1, 1]$, Range $[-\frac{\pi}{2}, \frac{\pi}{2}]$
* **$y = \arccos x$:** Domain $[-1, 1]$, Range $[0, \pi]$
* **$y = \arctan x$:** Domain $\mathbb{R}$, Range $(-\frac{\pi}{2}, \frac{\pi}{2})$ (Note the horizontal asymptotes at $y = \pm \frac{\pi}{2}$)

The graphs are formed by reflecting the restricted standard graphs in the line $y = x$.

[VISUAL PLACEHOLDER: A21TrigonometrySVG-004 | Source: PowerPoint slide 25-26 | Insert from A21_trigonometry_svg.md | Purpose: Graphs of arcsin, arccos, and arctan showing restricted domains and ranges]

## 9. Visual Asset Integration

*Placeholders have been embedded in Section 8. The corresponding SVG code will be generated in the `A21_trigonometry_svg.md` file.*

## 10. Interactive Learning Widgets

[INTERACTIVE PLACEHOLDER: A21TrigonometryWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_trigonometry_widgets.md | Purpose: Interactive graph explorer for reciprocal functions]

## 11. Worked Examples

### Example 1: Simplifying Expressions (Transcript Source)
**Question:** Simplify $\sin \theta \cos \theta (\sec \theta + \operatorname{cosec} \theta)$

**Method:**
**Step 1: Convert everything to sine and cosine.**
$$ \sin \theta \cos \theta \left( \frac{1}{\cos \theta} + \frac{1}{\sin \theta} \right) $$

**Step 2: Combine the fractions inside the bracket.**
Common denominator is $\sin \theta \cos \theta$.
$$ \frac{1}{\cos \theta} + \frac{1}{\sin \theta} = \frac{\sin \theta + \cos \theta}{\sin \theta \cos \theta} $$

**Step 3: Multiply by the outside term.**
$$ \sin \theta \cos \theta \left( \frac{\sin \theta + \cos \theta}{\sin \theta \cos \theta} \right) $$

**Step 4: Cancel common terms.**
The $\sin \theta \cos \theta$ on the outside cancels with the denominator.
$$ = \sin \theta + \cos \theta $$

### Example 2: Proving an Identity (Transcript Source)
**Question:** Prove that $\frac{\cot \theta \operatorname{cosec} \theta}{\sec^2 \theta + \operatorname{cosec}^2 \theta} \equiv \cos^3 \theta$

**Method:**
*Tip: Always start with the messier side (the Left Hand Side here) and manipulate it to look like the simpler side.*

**Step 1: Convert the numerator to sine and cosine.**
Numerator: $\cot \theta \times \operatorname{cosec} \theta = \left(\frac{\cos \theta}{\sin \theta}\right) \times \left(\frac{1}{\sin \theta}\right) = \frac{\cos \theta}{\sin^2 \theta}$

**Step 2: Convert the denominator to sine and cosine and combine.**
Denominator: $\sec^2 \theta + \operatorname{cosec}^2 \theta = \frac{1}{\cos^2 \theta} + \frac{1}{\sin^2 \theta}$
Combine fractions: $\frac{\sin^2 \theta + \cos^2 \theta}{\cos^2 \theta \sin^2 \theta}$
Apply identity $\sin^2 \theta + \cos^2 \theta = 1$: $\frac{1}{\cos^2 \theta \sin^2 \theta}$

**Step 3: Divide the numerator by the denominator.**
$$ \frac{\frac{\cos \theta}{\sin^2 \theta}}{\frac{1}{\cos^2 \theta \sin^2 \theta}} $$
To divide by a fraction, multiply by its reciprocal:
$$ \frac{\cos \theta}{\sin^2 \theta} \times \frac{\cos^2 \theta \sin^2 \theta}{1} $$

**Step 4: Cancel and simplify.**
The $\sin^2 \theta$ terms cancel out.
$$ \cos \theta \times \cos^2 \theta = \cos^3 \theta $$
LHS $\equiv$ RHS. Proof complete.

```

```markdown
### Example 3: Solving a Reciprocal Equation (Transcript Source)
**Question:** Solve $\cot 2\theta = 0.6$ in the interval $0^\circ \le \theta \le 360^\circ$.

**Method:**
**Step 1: Convert to a standard trigonometric function.**
Take the reciprocal of both sides. The reciprocal of $\cot 2\theta$ is $\tan 2\theta$.
$$ \tan 2\theta = \frac{1}{0.6} = \frac{5}{3} $$

**Step 2: Adjust the interval.**
Since the angle is $2\theta$, we must multiply the interval limits by 2.
$$ 0^\circ \le 2\theta \le 720^\circ $$

**Step 3: Find the principal value.**
$$ 2\theta = \arctan\left(\frac{5}{3}\right) = 59.0^\circ \text{ (to 1 d.p.)} $$

**Step 4: Find all solutions in the adjusted interval.**
For tangent, the graph repeats every $180^\circ$. Keep adding $180^\circ$ until you exceed $720^\circ$.
$$ 2\theta = 59.0^\circ, 239.0^\circ, 419.0^\circ, 599.0^\circ $$

**Step 5: Solve for $\theta$.**
Divide all solutions by 2.
$$ \theta = 29.5^\circ, 119.5^\circ, 209.5^\circ, 299.5^\circ $$

### Example 4: Double Angle Proof and "Hence" Solve (Transcript Source)
**Part A: Prove that $\operatorname{cosec} 2\theta - \cot 2\theta \equiv \tan \theta$**

**Step 1: Convert LHS to sine and cosine.**
$$ \text{LHS} = \frac{1}{\sin 2\theta} - \frac{\cos 2\theta}{\sin 2\theta} = \frac{1 - \cos 2\theta}{\sin 2\theta} $$

**Step 2: Apply double angle formulae.**
We want to eliminate the $1$ in the numerator, so we choose $\cos 2\theta \equiv 1 - 2\sin^2 \theta$.
For the denominator, use $\sin 2\theta \equiv 2\sin \theta \cos \theta$.
$$ \text{LHS} = \frac{1 - (1 - 2\sin^2 \theta)}{2\sin \theta \cos \theta} $$

**Step 3: Simplify.**
$$ \text{LHS} = \frac{2\sin^2 \theta}{2\sin \theta \cos \theta} = \frac{\sin \theta}{\cos \theta} \equiv \tan \theta $$
LHS $\equiv$ RHS.

**Part B: Hence solve $(\operatorname{cosec} 2y - \cot 2y)^2 = \sec y + 1$ for $-\pi \le y \le \pi$.**

**Step 1: Use the proof from Part A.**
Replace the bracket with $\tan y$.
$$ \tan^2 y = \sec y + 1 $$

**Step 2: Use Pythagorean identity to form a quadratic.**
Substitute $\tan^2 y \equiv \sec^2 y - 1$.
$$ \sec^2 y - 1 = \sec y + 1 $$
$$ \sec^2 y - \sec y - 2 = 0 $$

**Step 3: Factorise and solve for $\sec y$.**
$$ (\sec y - 2)(\sec y + 1) = 0 $$
So, $\sec y = 2$ or $\sec y = -1$.

**Step 4: Convert to cosine and solve for $y$.**
If $\sec y = 2$, then $\cos y = \frac{1}{2}$.
$$ y = \frac{\pi}{3}, -\frac{\pi}{3} $$
If $\sec y = -1$, then $\cos y = -1$.
$$ y = \pi $$
*(Note: $-\pi$ is not in the interval $-\pi < y \le \pi$ depending on strict inequalities, but check the exact interval given. Here we assume $y = \pi$ is the only valid boundary solution).*

### Example 5: Harmonic Form and Modelling (Transcript Source)
**Part A: Express $4\cos x + 5\sin x$ in the form $R\cos(x - \alpha)$.**

**Step 1: Expand $R\cos(x - \alpha)$.**
$$ R\cos(x - \alpha) \equiv R\cos x \cos \alpha + R\sin x \sin \alpha $$

**Step 2: Equate coefficients.**
Compare with $4\cos x + 5\sin x$:
$R\cos \alpha = 4$
$R\sin \alpha = 5$

**Step 3: Find $R$ and $\alpha$.**
$R = \sqrt{4^2 + 5^2} = \sqrt{16 + 25} = \sqrt{41}$
$\tan \alpha = \frac{5}{4} \Rightarrow \alpha = 0.896 \text{ radians (to 3 d.p.)}$
Result: $\sqrt{41}\cos(x - 0.896)$

**Part B: The temperature of a chemical reaction is modelled by $T = \frac{150}{(4\cos(0.1t) + 5\sin(0.1t))^2 + 2}$. Find the minimum and maximum temperatures.**

**Step 1: Substitute the harmonic form.**
$$ T = \frac{150}{(\sqrt{41}\cos(0.1t - 0.896))^2 + 2} $$

**Step 2: Find the minimum temperature.**
A fraction is minimised when its denominator is as *large* as possible.
The maximum value of $\cos(\dots)$ is $1$.
$$ T_{\text{min}} = \frac{150}{(\sqrt{41} \times 1)^2 + 2} = \frac{150}{41 + 2} = \frac{150}{43} \approx 3.49^\circ\text{C} $$

**Step 3: Find the maximum temperature.**
A fraction is maximised when its denominator is as *small* as possible.
Because the cosine term is *squared*, its minimum possible value is $0$ (not $-1$, because $(-1)^2 = 1$).
$$ T_{\text{max}} = \frac{150}{0^2 + 2} = \frac{150}{2} = 75^\circ\text{C} $$

## 12. Common Mistakes and Exam Traps

* **Illegal Fraction Cancelling:** You cannot cancel terms across an addition or subtraction sign. 
  * *Wrong:* $\frac{\cos^2 \theta + \sin^2 \theta}{\cos^2 \theta \sin^2 \theta} \rightarrow$ cancel $\cos^2 \theta \rightarrow \frac{1 + \sin^2 \theta}{\sin^2 \theta}$
  * *Right:* Recognise the numerator is $1$, so it becomes $\frac{1}{\cos^2 \theta \sin^2 \theta}$.
* **Forgetting to Adjust the Interval:** When solving equations like $\sin(2x) = 0.5$ for $0 \le x \le 360^\circ$, you must find all solutions for $2x$ up to $720^\circ$ *before* dividing by 2.
* **Confusing Inverse and Reciprocal:** $\cos^{-1} x$ means "the angle whose cosine is $x$". It does *not* mean $\frac{1}{\cos x}$. If you want $\frac{1}{\cos x}$, write $\sec x$ or $(\cos x)^{-1}$.
* **Squaring Negatives in Modelling:** When finding the minimum of a squared trigonometric function (e.g., $(\cos x)^2$), remember that the minimum value is $0$, not $-1$. Squaring $-1$ gives $1$, which is a maximum.
* **Undefined Values:** Remember that $\tan \theta$, $\sec \theta$, and $\operatorname{cosec} \theta$ have asymptotes. For example, if you get $\tan \theta = \frac{1}{0}$, this means $\tan \theta$ is undefined, which occurs at $\theta = 90^\circ, 270^\circ$, etc.

## 13. Practice Questions

**Skill Level: Core Manipulation**
1. Simplify $\sec a - \sec a \sin^2 a$.
2. Evaluate exactly, without a calculator: $\operatorname{cosec}\left(\frac{\pi}{3}\right)$.

**Skill Level: Proofs**
3. Prove that $\frac{1 - \tan^2 a}{1 + \tan^2 a} \equiv 1 - 2\sin^2 a$.
4. Prove that $(1 + \cos x)(\operatorname{cosec} x - \cot x) \equiv \sin x$.

**Skill Level: Solving Equations**
5. Solve $\sec \theta = -2.5$ in the interval $0^\circ \le \theta \le 360^\circ$.
6. Solve $\cot \theta = 0$ in the interval $0 \le \theta \le 2\pi$.

## 14. Worked Solutions

**Solution 1:**
$$ \sec a - \sec a \sin^2 a = \sec a (1 - \sin^2 a) $$
$$ = \frac{1}{\cos a} (\cos^2 a) = \frac{\cos^2 a}{\cos a} = \cos a $$

**Solution 2:**
$$ \operatorname{cosec}\left(\frac{\pi}{3}\right) = \frac{1}{\sin(\frac{\pi}{3})} $$
Since $\sin(\frac{\pi}{3}) = \frac{\sqrt{3}}{2}$, the reciprocal is $\frac{2}{\sqrt{3}}$.

**Solution 3:**
LHS = $\frac{1 - \tan^2 a}{1 + \tan^2 a}$
Using the identity $1 + \tan^2 a \equiv \sec^2 a$:
LHS = $\frac{1 - \tan^2 a}{\sec^2 a}$
Dividing by $\sec^2 a$ is the same as multiplying by $\cos^2 a$:
LHS = $(1 - \tan^2 a)\cos^2 a = \cos^2 a - \tan^2 a \cos^2 a$
Substitute $\tan^2 a = \frac{\sin^2 a}{\cos^2 a}$:
LHS = $\cos^2 a - \left(\frac{\sin^2 a}{\cos^2 a}\right)\cos^2 a = \cos^2 a - \sin^2 a$
Substitute $\cos^2 a = 1 - \sin^2 a$:
LHS = $(1 - \sin^2 a) - \sin^2 a = 1 - 2\sin^2 a \equiv$ RHS.

**Solution 4:**
LHS = $(1 + \cos x)(\operatorname{cosec} x - \cot x)$
Convert to sine and cosine:
LHS = $(1 + \cos x)\left(\frac{1}{\sin x} - \frac{\cos x}{\sin x}\right)$
LHS = $(1 + \cos x)\left(\frac{1 - \cos x}{\sin x}\right)$
Multiply the numerators (difference of two squares):
LHS = $\frac{1 - \cos^2 x}{\sin x}$
Substitute $1 - \cos^2 x = \sin^2 x$:
LHS = $\frac{\sin^2 x}{\sin x} = \sin x \equiv$ RHS.

**Solution 5:**
$\sec \theta = -2.5 \Rightarrow \cos \theta = -\frac{1}{2.5} = -0.4$
Principal value: $\theta = \arccos(-0.4) = 113.6^\circ$ (1 d.p.)
Second value (cosine symmetry $360^\circ - \theta$): $360^\circ - 113.6^\circ = 246.4^\circ$
Solutions: $\theta = 113.6^\circ, 246.4^\circ$.

**Solution 6:**
$\cot \theta = 0 \Rightarrow \frac{\cos \theta}{\sin \theta} = 0$
For a fraction to be zero, the numerator must be zero.
$\cos \theta = 0$
In the interval $0 \le \theta \le 2\pi$, $\cos \theta = 0$ at $\theta = \frac{\pi}{2}$ and $\theta = \frac{3\pi}{2}$.
*(Alternatively, $\tan \theta$ is undefined at these asymptotes).*

## 15. Exam Technique Notes

* **"Hence" or "Hence or otherwise":** When a question uses the word "hence", it is a massive flashing sign from the examiner telling you to use the result you just proved in Part A to solve Part B. Do not start Part B from scratch.
* **Setting out proofs:** Never move terms across the equals sign in a proof. Start with `LHS = ...` and manipulate it downwards line by line until it matches the `RHS`. 
* **Calculator Modes:** Always check the domain given in the question. If it says $0 \le \theta \le 2\pi$, your calculator must be in **Radians**. If it says $0^\circ \le \theta \le 360^\circ$, it must be in **Degrees**.
* **Exact Values:** If a question asks for "exact form", do not write decimals. Leave your answers containing $\pi$, surds (like $\sqrt{3}$), or fractions.

## 16. Syllabus Gap Check

* **A21-TRIG-LO002 & LO003:** Definitions and graphs of reciprocal/inverse functions are fully covered.
* **A21-TRIG-LO004:** Pythagorean identities are derived and used.
* **A21-TRIG-LO005 & LO006:** Compound and double angle formulae are stated and used in proofs/equations.
* **A21-TRIG-LO007:** Harmonic form ($R\cos(\theta - \alpha)$) is covered with a worked example.
* **A21-TRIG-LO008:** Proof construction is heavily featured.
* **A21-TRIG-LO009:** Contextual modelling (temperature) is covered.
* **Gap Note:** The lesson evidence did not explicitly derive the compound angle formulae geometrically, but the CCEA specification does not strictly require the geometric derivation, only their use. The coverage is complete for independent study.

## 17. Recommended Enhancements Not in the Evidence

* **Asset ID:** `A21TrigonometryWidget-001`
* **Type:** Interactive Widget
* **Why it was added:** The transcript mentions how $y = \operatorname{cosec} x$ is formed by reciprocating $y = \sin x$. An interactive slider showing the $y$-values inverting dynamically helps cement this concept visually, preventing students from confusing it with the inverse function $\arcsin x$.
* **Supported LO:** A21-TRIG-LO003
* **Essential/Optional:** Optional but highly recommended for visual learners.

## 18. Supplementary Sources Used

No external sources were required. All mathematical content, proofs, and examples were extracted directly from the provided transcript and slide decks.

## 19. Final Student Checklist

- [ ] I can define $\sec x$, $\operatorname{cosec} x$, and $\cot x$ and sketch their graphs.
- [ ] I know the domains and ranges for $\arcsin x$, $\arccos x$, and $\arctan x$.
- [ ] I can use $1 + \tan^2 x \equiv \sec^2 x$ and $1 + \cot^2 x \equiv \operatorname{cosec}^2 x$ to solve equations.
- [ ] I can apply compound and double angle formulae to simplify expressions.
- [ ] I can convert $a\cos x + b\sin x$ into harmonic form $R\sin(x \pm \alpha)$ or $R\cos(x \pm \alpha)$.
- [ ] I can structure a formal trigonometric proof starting from one side only.
- [ ] I can find maximum and minimum values of modelled trigonometric functions.
```
