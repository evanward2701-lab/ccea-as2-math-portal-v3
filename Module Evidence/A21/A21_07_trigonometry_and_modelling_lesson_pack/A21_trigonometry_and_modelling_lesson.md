```markdown
# A21_trigonometry_and_modelling_lesson.md PART 1A

## 1. Lesson Title
**Trigonometry & Modelling**
**Unit:** A2 1 Pure Mathematics (A21)
**Source Evidence:** Transcript (`07 Trigonometry & Modelling.md`), PowerPoint Slides (PDF 1), ActivInspire Whiteboard Workings (PDF 2), CCEA Specification Map
**Date Generated:** 2026-05-30
**Relevant LO IDs:** A21-TRIG-LO005, A21-TRIG-LO006, A21-TRIG-LO007, A21-TRIG-LO008, A21-TRIG-LO009
**Suggested Tags:** `#A21`, `#Trigonometry`, `#CompoundAngles`, `#DoubleAngles`, `#HarmonicIdentity`, `#Modelling`, `#LessonNotes`

## 2. Evidence Map

| Evidence Type | Filename | Role in this lesson | Pages/Slides/Images Used | Notes on quality or uncertainty |
|---|---|---|---|---|
| Specification Map | `CCEA_GCE_Mathematics_Specification_Map copy.md` | Authority for syllabus boundaries and LO IDs. | A21 Trigonometry section | Clear mapping to compound angles, double angles, and harmonic form. |
| Transcript | `07 Trigonometry & Modelling.md` | Primary written teaching narrative, explanations, and examples. | All | Excellent detail on algebraic manipulation and common exam traps. |
| PowerPoint | `PDF 1 (Slides)` | Visual sequencing, core rules, and geometric proofs. | Slides 1-39 | Slide 7 contains a highly useful geometric proof of the addition formula. |
| Whiteboard PDF | `PDF 2 (ActivInspire)` | Step-by-step handwritten workings and Desmos graph screenshots. | Pages 1-158 | Shows graphical intuition for the harmonic identity and modelling. |

## 3. Specification Alignment

| LO ID | CCEA Specification Point | Elaboration Guidance | Covered in this lesson? | Where it appears | Gap or action needed | Suggested visual/widget support |
|---|---|---|---|---|---|---|
| A21-TRIG-LO005 | Demonstrate understanding of and use the compound angle formulae for $\sin(A\pm B)$, $\cos(A\pm B)$ and $\tan(A\pm B)$ | None | Yes | Section 8.1 | None | Geometric proof diagram |
| A21-TRIG-LO006 | Demonstrate understanding of, use and prove the double angle formulae | None | Yes | Section 8.2 | None | Formula map |
| A21-TRIG-LO007 | Demonstrate understanding of and use expressions for $a\cos\theta+b\sin\theta$ in the equivalent forms $r\cos(\theta\pm\alpha)$ or $r\sin(\theta\pm\alpha)$ | None | Yes | Section 8.3 | None | Harmonic wave combination visual |
| A21-TRIG-LO008 | Construct proofs involving trigonometric functions and identities | None | Yes | Section 8.5 | None | None |
| A21-TRIG-LO009 | Use trigonometric functions to solve problems in context | None | Yes | Section 8.6 | None | Kiln temperature graph |

## 4. Learning Objectives
By the end of this lesson, you should be able to:
*   Recall and apply the addition (compound angle) formulae for sine, cosine, and tangent.
*   Derive and apply the double angle formulae to simplify expressions and solve equations.
*   Combine expressions of the form $a\sin x \pm b\cos x$ into a single harmonic wave $R\sin(x \pm \alpha)$ or $R\cos(x \pm \alpha)$.
*   Find the maximum and minimum values of complex trigonometric expressions without using calculus.
*   Model real-world periodic phenomena (like temperature or tides) using trigonometric functions.
*   Prove complex trigonometric identities by chaining multiple formulae together.

## 5. Compact Prerequisite Recap
To succeed in this A2 topic, you need to be confident with the following AS1 and early A21 concepts:
*   **Basic Identities (AS1):** $\sin^2 \theta + \cos^2 \theta \equiv 1$ and $\tan \theta \equiv \frac{\sin \theta}{\cos \theta}$.
*   **Reciprocal Identities (A21):** $\sec \theta = \frac{1}{\cos \theta}$, $\cosec \theta = \frac{1}{\sin \theta}$, and $\cot \theta = \frac{1}{\tan \theta}$.
*   **Pythagorean Extensions (A21):** $1 + \tan^2 \theta \equiv \sec^2 \theta$ and $1 + \cot^2 \theta \equiv \cosec^2 \theta$.
*   **Solving Equations (AS1):** Finding multiple solutions within a given range using CAST or graph symmetry.
*   **Graph Transformations (AS1/A21):** Understanding how $y = a\sin(x + b)$ stretches and shifts the standard sine wave.

## 6. Big Picture Explanation
In AS Mathematics, you learned how to solve basic trigonometric equations and graph simple waves. However, real-world waves—like sound waves, alternating currents, or ocean tides—rarely exist in isolation. They overlap, interfere, and combine. 

This chapter provides the algebraic toolkit to handle these combinations. The **Addition Formulae** allow you to break apart angles that are added together inside a function. The **Double Angle Formulae** let you halve or double the frequency of a wave. Finally, the **Harmonic Identity** is a powerful mathematical trick that takes two overlapping waves of the same frequency (a sine and a cosine) and proves they perfectly combine into one single, shifted wave. 

These skills are not just for passing A-Level exams; they are the absolute foundation for university-level engineering, physics, and signal processing.

## 7. Key Definitions and Notation
*   **Argument:** The input value inside the trigonometric function. For example, in $\sin(2x + 30^\circ)$, the argument is $(2x + 30^\circ)$.
*   **Compound Angle:** An angle created by adding or subtracting two other angles, e.g., $(A + B)$.
*   **Harmonic Form:** Writing a sum of sine and cosine terms as a single trigonometric ratio, typically $R\sin(x \pm \alpha)$ or $R\cos(x \pm \alpha)$.
*   **Amplitude ($R$):** The maximum displacement of a wave from its centre line.
*   **Phase Shift ($\alpha$):** The horizontal translation of a wave along the x-axis.

## 8. Core Theory

### 8.1 The Addition (Compound Angle) Formulae
The addition formulae allow us to evaluate the sine, cosine, or tangent of a sum or difference of two angles. 

**Warning:** It is a very common mistake to assume that trigonometric functions distribute linearly. 
$\sin(A + B) \neq \sin A + \sin B$
*Proof by counter-example:* Let $A = 30^\circ$ and $B = 60^\circ$.
$\sin(30^\circ + 60^\circ) = \sin(90^\circ) = 1$
$\sin(30^\circ) + \sin(60^\circ) = 0.5 + \frac{\sqrt{3}}{2} \approx 1.366$
Since $1 \neq 1.366$, the linear distribution is false.

Instead, we must use the official Addition Formulae (provided in your formula booklet, but highly recommended to memorise):

**Sine Addition Formulae:** (Mixes $\sin$ and $\cos$, keeps the same sign)
$$ \sin(A + B) \equiv \sin A \cos B + \cos A \sin B $$
$$ \sin(A - B) \equiv \sin A \cos B - \cos A \sin B $$

**Cosine Addition Formulae:** (Groups $\cos$ with $\cos$, reverses the sign)
$$ \cos(A + B) \equiv \cos A \cos B - \sin A \sin B $$
$$ \cos(A - B) \equiv \cos A \cos B + \sin A \sin B $$

**Tangent Addition Formulae:** (Same sign on top, opposite sign on bottom)
$$ \tan(A + B) \equiv \frac{\tan A + \tan B}{1 - \tan A \tan B} $$
$$ \tan(A - B) \equiv \frac{\tan A - \tan B}{1 + \tan A \tan B} $$

[VISUAL PLACEHOLDER: A21TrigonometryAndModellingTikZ-001 | Source: PowerPoint slide 7 | Insert from A21_trigonometry_and_modelling_tikz.md | Purpose: Geometric proof of the sine addition formula showing how the right-angled triangles combine]

### 8.2 The Double Angle Formulae
The double angle formulae are derived directly from the addition formulae by setting $B = A$. They allow you to move between an angle $A$ and double that angle $2A$.

**Sine Double Angle:**
From $\sin(A + A) \equiv \sin A \cos A + \cos A \sin A$:
$$ \sin 2A \equiv 2 \sin A \cos A $$

**Cosine Double Angle:**
From $\cos(A + A) \equiv \cos A \cos A - \sin A \sin A$:
$$ \cos 2A \equiv \cos^2 A - \sin^2 A $$
By substituting the AS1 Pythagorean identity ($\sin^2 A + \cos^2 A \equiv 1$), we get two incredibly useful alternative forms:
*   Substitute $\sin^2 A \equiv 1 - \cos^2 A \implies \mathbf{\cos 2A \equiv 2 \cos^2 A - 1}$
*   Substitute $\cos^2 A \equiv 1 - \sin^2 A \implies \mathbf{\cos 2A \equiv 1 - 2 \sin^2 A}$

**Tangent Double Angle:**
From $\tan(A + A)$:
$$ \tan 2A \equiv \frac{2 \tan A}{1 - \tan^2 A} $$

### 8.3 The Harmonic Identity
When you add a sine wave and a cosine wave of the same frequency (e.g., $3\sin x + 4\cos x$), the result is simply another perfect sine or cosine wave, just stretched vertically and shifted horizontally.

[VISUAL PLACEHOLDER: A21TrigonometryAndModellingSVG-001 | Source: PowerPoint slide 26 | Insert from A21_trigonometry_and_modelling_svg.md | Purpose: Graph showing y = 3sin(x) + 4cos(x) resulting in a single sinusoidal wave of amplitude 5]

The Harmonic Identity allows us to combine $a \sin x \pm b \cos x$ into a single function:
$$ R \sin(x \pm \alpha) \quad \text{or} \quad R \cos(x \mp \alpha) $$

Where:
*   **$R = \sqrt{a^2 + b^2}$** (The amplitude/stretch factor)
*   **$\tan \alpha = \frac{b}{a}$** (Used to find the phase shift)

**The Step-by-Step Method:**
Never guess the signs. Always expand the target form and compare coefficients.
1. Expand the target $R\sin(x \pm \alpha)$ or $R\cos(x \pm \alpha)$ using the addition formulae.
2. Compare the coefficients of $\sin x$ and $\cos x$ with your original expression.
3. Find $R$ using Pythagoras.
4. Find $\alpha$ using $\tan \alpha = \frac{R\sin\alpha}{R\cos\alpha}$.

[INTERACTIVE PLACEHOLDER: A21TrigonometryAndModellingWidget-001 | Source: AI-proposed teaching enhancement, not present in supplied lesson evidence | Insert from A21_trigonometry_and_modelling_widgets.md | Purpose: Interactive harmonic wave combiner allowing students to change 'a' and 'b' and see the resulting 'R' and 'alpha' visually]

### 8.4 Maxima, Minima, and Fractions
Because the maximum value of $\sin(\theta)$ or $\cos(\theta)$ is exactly $1$, and the minimum is $-1$, an expression in the harmonic form $R\cos(x - \alpha)$ will have:
*   **Maximum value:** $R \times (1) = R$
*   **Minimum value:** $R \times (-1) = -R$

**Exam Trap:** If the trigonometric expression is in the *denominator* of a fraction, the overall fraction reaches its *maximum* value when the denominator is at its *minimum* (provided the denominator stays positive). 
Furthermore, if the trig term is squared (e.g., $\sin^2 \theta$), its minimum value is $0$, not $-1$.

### 8.5 Advanced Trigonometric Proofs
Proving identities requires a solid command of algebraic manipulation. 
**Golden Rules for Proofs:**
1. Start with the more complex side (usually the LHS).
2. If arguments don't match (e.g., $2\theta$ and $\theta$), use double angle formulae to unify them immediately.
3. If you have a mixture of $\tan$, $\sin$, and $\cos$, convert $\tan$ into $\frac{\sin}{\cos}$.
4. Look for opportunities to factorise or create a common denominator.

### 8.6 Modelling with Trigonometry
Trigonometric models are used for periodic events (tides, temperatures, Ferris wheels). 
Usually, the model will be given to you, and you will be asked to:
1. Convert a two-part trig expression into harmonic form $R\cos(x \pm \alpha)$.
2. State the maximum or minimum value (using $R$).
3. Find the specific time $x$ when that maximum/minimum occurs by setting the bracketed angle equal to $0, \pi, 2\pi$, etc.

## 9. Visual Asset Integration
*   **A21TrigonometryAndModellingTikZ-001:** Geometric proof of $\sin(A+B)$. (See Section 8.1)
*   **A21TrigonometryAndModellingSVG-001:** Harmonic wave combination graph. (See Section 8.3)

## 10. Interactive Learning Widgets
*   **A21TrigonometryAndModellingWidget-001:** Harmonic Wave Combiner. (See Section 8.3)

## 11. Worked Examples

### Example 1: Exact Values using Addition Formulae
**Source:** Transcript / PowerPoint Slide 12
**Question:** Show that $\sin 15^\circ = \frac{\sqrt{6} - \sqrt{2}}{4}$ without using a calculator.
**Method:**
We can write $15^\circ$ as $45^\circ - 30^\circ$, which are standard exact values.
$$ \sin(45^\circ - 30^\circ) \equiv \sin 45^\circ \cos 30^\circ - \cos 45^\circ \sin 30^\circ $$
Substitute the exact values:
$$ \sin 15^\circ = \left(\frac{1}{\sqrt{2}}\right)\left(\frac{\sqrt{3}}{2}\right) - \left(\frac{1}{\sqrt{2}}\right)\left(\frac{1}{2}\right) $$
$$ \sin 15^\circ = \frac{\sqrt{3}}{2\sqrt{2}} - \frac{1}{2\sqrt{2}} = \frac{\sqrt{3} - 1}{2\sqrt{2}} $$
Rationalise the denominator by multiplying top and bottom by $\sqrt{2}$:
$$ \sin 15^\circ = \frac{(\sqrt{3} - 1)\sqrt{2}}{2\sqrt{2} \cdot \sqrt{2}} = \frac{\sqrt{6} - \sqrt{2}}{4} $$

### Example 2: Solving Equations with Double Angles
**Source:** Transcript / PowerPoint Slide 21
**Question:** Solve $3\cos 2x - \cos x + 2 = 0$ for $0^\circ \le x \le 360^\circ$.
**Method:**
The arguments do not match ($2x$ vs $x$). We must unify them. Since the other term is $\cos x$, we choose the cosine-only version of the double angle formula: $\cos 2x \equiv 2\cos^2 x - 1$.
$$ 3(2\cos^2 x - 1) - \cos x + 2 = 0 $$
$$ 6\cos^2 x - 3 - \cos x + 2 = 0 $$
$$ 6\cos^2 x - \cos x - 1 = 0 $$
Factorise the quadratic in terms of $\cos x$:
$$ (3\cos x + 1)(2\cos x - 1) = 0 $$
This gives two cases:
1.  $2\cos x - 1 = 0 \implies \cos x = \frac{1}{2} \implies x = 60^\circ, 300^\circ$
2.  $3\cos x + 1 = 0 \implies \cos x = -\frac{1}{3} \implies x = 109.5^\circ, 250.5^\circ$

### Example 3: Converting to Harmonic Form
**Source:** Transcript / PowerPoint Slide 27
**Question:** Express $3\sin x + 4\cos x$ in the form $R\sin(x + \alpha)$, where $R > 0$ and $0^\circ < \alpha < 90^\circ$.
**Method:**
Step 1: Expand the target form.
$$ R\sin(x + \alpha) \equiv R\sin x \cos \alpha + R\cos x \sin \alpha $$
Step 2: Compare coefficients with $3\sin x + 4\cos x$.
*   Coefficient of $\sin x$: $R\cos \alpha = 3$
*   Coefficient of $\cos x$: $R\sin \alpha = 4$
Step 3: Find $R$ using Pythagoras.
$$ R = \sqrt{3^2 + 4^2} = \sqrt{25} = 5 $$
Step 4: Find $\alpha$ using tangent.
$$ \tan \alpha = \frac{R\sin \alpha}{R\cos \alpha} = \frac{4}{3} $$
$$ \alpha = \arctan\left(\frac{4}{3}\right) \approx 53.1^\circ $$
**Final Answer:** $3\sin x + 4\cos x \equiv 5\sin(x + 53.1^\circ)$

### Example 4: Maximising a Fraction
**Source:** Transcript / PowerPoint Slide 38 (Adapted)
**Question:** Find the maximum value of $M(\theta) = \frac{30}{5 + 2(\sin 2\theta - 2\cos 2\theta)^2}$.
**Method:**
Step 1: Convert the inner expression to harmonic form.
Let $f(\theta) = \sin 2\theta - 2\cos 2\theta$. We want $R\sin(2\theta - \alpha)$.
$R\cos\alpha = 1$ and $R\sin\alpha = 2$.
$R = \sqrt{1^2 + 2^2} = \sqrt{5}$.
So, $f(\theta) = \sqrt{5}\sin(2\theta - \alpha)$.
Step 2: Substitute back into the fraction.
$$ M(\theta) = \frac{30}{5 + 2(\sqrt{5}\sin(2\theta - \alpha))^2} $$
$$ M(\theta) = \frac{30}{5 + 10\sin^2(2\theta - \alpha)} $$
Step 3: Determine the maximum value.
To make the fraction as large as possible, the denominator must be as small as possible. 
Because $\sin^2$ cannot be negative, its minimum value is $0$.
Minimum denominator = $5 + 10(0) = 5$.
Maximum $M(\theta) = \frac{30}{5} = 6$.

### Example 5: Modelling Kiln Temperature
**Source:** Transcript / PowerPoint Slide 37
**Question:** The temperature $T$ ($^\circ\text{C}$) of a kiln is modelled by $T = 1100 + 5\cos\left(\frac{x}{3}\right) - 8\sin\left(\frac{x}{3}\right)$, where $x$ is hours ($0 \le x \le 72$). Find the maximum temperature.
**Method:**
Put $5\cos(x/3) - 8\sin(x/3)$ into the form $R\cos(x/3 + \alpha)$.
$R = \sqrt{5^2 + 8^2} = \sqrt{89}$.
$\tan \alpha = \frac{8}{5} \implies \alpha \approx 1.0122$ rad.
The model becomes:
$$ T = 1100 + \sqrt{89}\cos\left(\frac{x}{3} + 1.0122\right) $$
The maximum value of the cosine function is $1$.
Maximum temperature = $1100 + \sqrt{89} \approx 1109.43^\circ\text{C}$.

### Example 6: Parametric to Cartesian Conversion
**Source:** Transcript / PowerPoint Slide 19
**Question:** Given parametric equations $x = 3\sin \theta$ and $y = 3 - 4\cos 2\theta$, find a Cartesian equation for $y$ in terms of $x$.
**Method:**
Step 1: Unify the arguments. Use the sine version of the double angle formula because $x$ is in terms of sine.
$$ \cos 2\theta \equiv 1 - 2\sin^2 \theta $$
Substitute into $y$:
$$ y = 3 - 4(1 - 2\sin^2 \theta) = 3 - 4 + 8\sin^2 \theta = 8\sin^2 \theta - 1 $$
Step 2: Substitute $x$.
From $x = 3\sin \theta$, we get $\sin \theta = \frac{x}{3}$, so $\sin^2 \theta = \frac{x^2}{9}$.
$$ y = 8\left(\frac{x^2}{9}\right) - 1 = \frac{8x^2}{9} - 1 $$

```

```markdown
## 12. Common Mistakes and Exam Traps

The supplied lesson evidence highlights several critical traps that frequently cost students marks in exams:

1.  **The Linear Distribution Trap:**
    Assuming $\sin(A + B) = \sin A + \sin B$. Trigonometric functions are not algebraic multipliers; you cannot "expand the brackets" linearly. You must use the addition formulae.
2.  **Dividing by a Variable Trig Function:**
    When solving an equation like $2\sin x \cos x = \sin x$, it is tempting to divide both sides by $\sin x$ to get $2\cos x = 1$. **Do not do this.** Dividing by $\sin x$ deletes the valid solutions where $\sin x = 0$. Always bring all terms to one side and factorise: $\sin x(2\cos x - 1) = 0$.
3.  **Forgetting the $\pm$ Symbol:**
    When solving equations that involve square roots, such as $\tan^2 2y = \frac{3}{7}$, you must take both the positive and negative roots: $\tan 2y = \pm\sqrt{\frac{3}{7}}$. Forgetting the minus sign will lose half of your valid solutions.
4.  **Misjudging the Minimum of a Squared Trig Term:**
    When finding the maximum value of a fraction like $\frac{30}{5 + 10\sin^2(\dots)}$, you need the denominator to be as small as possible. Students often mistakenly assume the minimum of $\sin^2(\dots)$ is $-1$ (because the minimum of $\sin$ is $-1$). However, any real number squared is positive or zero, so the minimum of $\sin^2(\dots)$ is exactly $0$.
5.  **Forgetting to Adjust the Working Range:**
    If the question asks for solutions in the range $0^\circ \le x \le 360^\circ$, but your equation has been simplified to $\cos 3x = 0.5$, you must multiply your working range by 3: $0^\circ \le 3x \le 1080^\circ$. Find all solutions in this expanded range first, and only divide by 3 at the very end.

## 13. Practice Questions

These questions are extracted directly from the lesson evidence.

**Skill Level: Core Methods**
1. Without using a calculator, determine the exact value of $\cos 75^\circ$.
2. Prove the identity: $\frac{\sec^2 \theta}{1 - \tan^2 \theta} \equiv \sec 2\theta$.

**Skill Level: Solving Equations**
3. Solve the equation $4\cos(x - 30^\circ) = 8\sqrt{2}\sin x$ for $0^\circ \le x \le 360^\circ$.
4. Solve the equation $2\tan 4y \tan 2y = 3$ for $0 \le y \le \pi$.

**Skill Level: Harmonic Form and Modelling**
5. Express $4\cos x + 5\sin x$ in the form $R\cos(x - \alpha)$, where $R > 0$ and $0 < \alpha < \frac{\pi}{2}$.
6. Find the maximum value of $M(\theta) = \frac{30}{5 + 2(\sin 2\theta - 2\cos 2\theta)^2}$.

## 14. Worked Solutions

**Solution 1:**
We can write $75^\circ$ as $45^\circ + 30^\circ$.
$$ \cos(45^\circ + 30^\circ) \equiv \cos 45^\circ \cos 30^\circ - \sin 45^\circ \sin 30^\circ $$
$$ = \left(\frac{1}{\sqrt{2}}\right)\left(\frac{\sqrt{3}}{2}\right) - \left(\frac{1}{\sqrt{2}}\right)\left(\frac{1}{2}\right) $$
$$ = \frac{\sqrt{3}}{2\sqrt{2}} - \frac{1}{2\sqrt{2}} = \frac{\sqrt{3} - 1}{2\sqrt{2}} $$
Rationalising the denominator:
$$ = \frac{(\sqrt{3} - 1)\sqrt{2}}{4} = \frac{\sqrt{6} - \sqrt{2}}{4} $$

**Solution 2:**
Start with the LHS and convert to sine and cosine:
$$ \text{LHS} = \frac{\frac{1}{\cos^2 \theta}}{1 - \frac{\sin^2 \theta}{\cos^2 \theta}} $$
Multiply numerator and denominator by $\cos^2 \theta$:
$$ \text{LHS} = \frac{1}{\cos^2 \theta - \sin^2 \theta} $$
Recognise the denominator as the double angle formula for cosine:
$$ \text{LHS} = \frac{1}{\cos 2\theta} \equiv \sec 2\theta \equiv \text{RHS} $$

**Solution 3:**
Expand the LHS using the cosine difference formula:
$$ 4(\cos x \cos 30^\circ + \sin x \sin 30^\circ) = 8\sqrt{2}\sin x $$
Substitute exact values for $\cos 30^\circ$ and $\sin 30^\circ$:
$$ 4\left(\frac{\sqrt{3}}{2}\cos x + \frac{1}{2}\sin x\right) = 8\sqrt{2}\sin x $$
$$ 2\sqrt{3}\cos x + 2\sin x = 8\sqrt{2}\sin x $$
Rearrange to group sine and cosine terms:
$$ 2\sqrt{3}\cos x = 8\sqrt{2}\sin x - 2\sin x $$
$$ 2\sqrt{3}\cos x = \sin x(8\sqrt{2} - 2) $$
Divide by $\cos x$ and the constant bracket to create $\tan x$:
$$ \tan x = \frac{2\sqrt{3}}{8\sqrt{2} - 2} \approx 0.3718 $$
Find solutions in $0^\circ \le x \le 360^\circ$:
$$ x = \arctan(0.3718) \approx 20.4^\circ $$
Second solution: $20.4^\circ + 180^\circ = 200.4^\circ$.

**Solution 4:**
Unify arguments by treating $4y$ as double $2y$:
$$ \tan 4y \equiv \frac{2\tan 2y}{1 - \tan^2 2y} $$
Substitute into the equation:
$$ 2\left(\frac{2\tan 2y}{1 - \tan^2 2y}\right)\tan 2y = 3 $$
$$ \frac{4\tan^2 2y}{1 - \tan^2 2y} = 3 $$
$$ 4\tan^2 2y = 3 - 3\tan^2 2y $$
$$ 7\tan^2 2y = 3 \implies \tan^2 2y = \frac{3}{7} \implies \tan 2y = \pm\sqrt{\frac{3}{7}} $$
Adjust range for $2y$: $0 \le 2y \le 2\pi$.
Case 1 (+): $2y = 0.5796, 3.7212 \implies y = 0.29, 1.86$ rad.
Case 2 (-): $2y = 2.5619, 5.7035 \implies y = 1.28, 2.85$ rad.

**Solution 5:**
Expand target: $R\cos(x - \alpha) \equiv R\cos x \cos \alpha + R\sin x \sin \alpha$.
Compare with $4\cos x + 5\sin x$:
$R\cos \alpha = 4$ and $R\sin \alpha = 5$.
$R = \sqrt{4^2 + 5^2} = \sqrt{41}$.
$\tan \alpha = \frac{5}{4} \implies \alpha = \arctan(1.25) \approx 0.896$ rad.
Result: $\sqrt{41}\cos(x - 0.896)$.

**Solution 6:**
Convert $\sin 2\theta - 2\cos 2\theta$ to $R\sin(2\theta - \alpha)$.
$R\cos\alpha = 1$, $R\sin\alpha = 2 \implies R = \sqrt{1^2 + 2^2} = \sqrt{5}$.
Substitute back: $M(\theta) = \frac{30}{5 + 2(\sqrt{5}\sin(2\theta - \alpha))^2} = \frac{30}{5 + 10\sin^2(2\theta - \alpha)}$.
To maximise the fraction, minimise the denominator. Minimum of $\sin^2$ is $0$.
Max $M(\theta) = \frac{30}{5 + 0} = 6$.

## 15. Exam Technique Notes
*   **Unify Arguments First:** You cannot solve an equation like $\sin 2x = \cos x$ directly. Always use the double angle or addition formulae to ensure every trigonometric function in the equation has the exact same argument before you try to factorise or divide.
*   **Create Tangents:** If you have an equation with a mixture of sine and cosine (with the same argument) and no squared terms, divide the entire equation by cosine to create tangents.
*   **Look Out for Pythagorean Triples:** When calculating $R = \sqrt{a^2 + b^2}$ for the harmonic identity, the coefficients often form Pythagorean triples (e.g., $3, 4, 5$ or $5, 12, 13$). Spotting these can reassure you that your algebraic manipulation is correct.
*   **The Co-function Identity:** Remember that $\sin x \equiv \cos(90^\circ - x)$ and $\cos x \equiv \sin(90^\circ - x)$. This is incredibly useful if you need to convert a sine into a cosine to match arguments in an equation.

## 16. Syllabus Gap Check
Comparing the generated lesson against the CCEA Specification Map:
*   **Fully Covered:** 
    *   A21-TRIG-LO005 (Compound angle formulae)
    *   A21-TRIG-LO006 (Double angle formulae)
    *   A21-TRIG-LO007 (Harmonic form $a\cos\theta+b\sin\theta$)
    *   A21-TRIG-LO008 (Trigonometric proofs)
    *   A21-TRIG-LO009 (Modelling in context)
*   **Partially Covered / Assumed Prerequisite:**
    *   A21-TRIG-LO002, LO003, LO004 (Secant, cosecant, cotangent definitions and identities). These appear briefly in the proofs (e.g., Example 6), but a full exploration of their graphs and domains belongs in a dedicated reciprocal functions lesson.
*   **Missing LO IDs:**
    *   A21-TRIG-LO001 (Radian measure, arc length, sector area). This is a separate subtopic and correctly excluded from this specific compound/double angle lesson.

## 17. Recommended Enhancements Not in the Evidence
*   **A21TrigonometryAndModellingTikZ-001:** A geometric proof diagram for $\sin(A+B)$ was mentioned in the transcript but not fully visualised in a clean, reproducible way. A TikZ diagram has been proposed to make this rigorous.
*   **A21TrigonometryAndModellingSVG-001:** A clean SVG graph showing the addition of $3\sin x$ and $4\cos x$ to form a wave of amplitude $5$.
*   **A21TrigonometryAndModellingWidget-001:** An interactive HTML/JS widget allowing students to input values for $a$ and $b$ in $a\sin x + b\cos x$ and visually see the resulting harmonic wave $R\sin(x+\alpha)$ update in real-time. This strongly supports A21-TRIG-LO007.

## 18. Supplementary Sources Used
No external sources were required. The provided transcript and slide evidence were highly detailed and perfectly aligned with the CCEA specification.

## 19. Final Student Checklist
- [ ] I can expand $\sin(A \pm B)$, $\cos(A \pm B)$, and $\tan(A \pm B)$.
- [ ] I can recall and apply the double angle formulae for sine, cosine, and tangent.
- [ ] I know the three different versions of the $\cos 2A$ formula and when to use each.
- [ ] I can convert expressions like $a\sin x \pm b\cos x$ into harmonic form $R\sin(x \pm \alpha)$.
- [ ] I can find the maximum and minimum values of harmonic expressions and fractions containing them.
- [ ] I remember to adjust my working range when solving equations with multiple angles (e.g., $2x$ or $3x$).
- [ ] I know never to divide an equation by a variable trigonometric function like $\sin x$.

```
