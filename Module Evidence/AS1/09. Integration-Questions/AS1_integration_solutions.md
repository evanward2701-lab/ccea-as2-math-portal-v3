# Integration Solutions and Mark Scheme Pack

**Unit:** CCEA AS1 Pure Mathematics (legacy C2 Integration past-paper pack; includes some current A2-style area-between-curves items)  
**Questions PDF:** `AS1_Integration_questions.pdf`  
**Solutions / Mark Scheme PDF:** `AS1_Integration_solutions.pdf`  
**Date generated:** 23 May 2026  
**Pack ID:** `AS1Integration`

---

## 1. Mark Scheme Notation Guide

The supplied mark scheme uses short mark codes. Common meanings are:

- `M` usually means a method mark.
- `W` usually means a working or accuracy-style mark in this CCEA mark scheme.
- `MW` usually indicates combined method/working credit for a step.
- A code such as `MW3` indicates 3 marks attached to that official step.
- A code such as `M1 W1` indicates two separate 1-mark credits on the same line.

The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.

---

## 2. Question-to-Solution Map

| Pack question | Original reference | Question page | Solution page | Total marks from question | Marks shown in mark scheme | Match confidence | Notes |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | C2 Jan 2010 Q2 | 2 | 2 | 8 | 8 | High | Direct match |
| 2 | C2 Jun 2010 Q6 | 2 | 3 | 11 | 11 | High | Direct match |
| 3 | C2 Jan 2011 Q5 | 3 | 4 | 10 | 10 | High | Direct match |
| 4 | C2 Jun 2011 Q5 | 4 | 4 | 10 | 10 | High | Direct match |
| 5 | C2 Jan 2012 Q4 | 5 | 5 | 9 | 9 | High | Direct match |
| 6 | C2 Jun 2012 Q6 | 5 | 5 | 10 | 10 | High | Direct match |
| 7 | C2 Jan 2013 Q1(a) | 6 | 6 | 5 | 5 | High | Direct match |
| 8 | C2 Jan 2013 Q4 | 6 | 6 | 13 | 13 | High | Direct match |
| 9 | C2 Jun 2013 Q6 | 6 | 7 | 12 | 12 | High | Direct match |
| 10 | C2 Jan 2014 Q5 | 7 | 7 | 10 | 10 | High | Direct match |
| 11 | C2 Jun 2014 Q2 | 7 | 8 | 5 | 5 | High | Direct match |
| 12 | C2 Jun 2014 Q6 | 8 | 8 | 10 | 10 | High | Direct match |
| 13 | C2 Jun 2015 Q7 | 9 | 8 | 11 | 11 | High | Direct match |
| 14 | C2 Jun 2016 Q1(a) | 9 | 9 | 5 | 5 | High | Direct match |
| 15 | Jun 2016 Q3(b) | 9 | 9 | 4 | 4 | High | Mark scheme page shows wider question total |
| 16 | C2 Jun 2017 Q1 | 10 | 9 | 5 | 5 | High | Direct match |
| 17 | C2 Jun 2017 Q3 | 10 | 10 | 9 | 9 | High | Direct match |
| 18 | C2 Jun 2018 Q3 | 10 | 10 | 11 | 11 | High | Direct match |
| 19 | C2 Jun 2019 Q5 | 11 | 11 | 9 | 9 | Medium | Mark scheme heading says C2 Jun 2018 Q5, but content matches |
| 20 | AS1 new spec Jun 2019 Q5(a) | 11 | 11 | 6 | 6 | High | Direct match |

---

## 3. Fully Worked Mark Scheme Solutions

## Solution to Question 1: C2 January 2010 Question 2

**Question ID:** `AS1IntegrationQ001`  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C2 January 2010 Question 2  
**Related question:** See `AS1_integration_questions.md`, Question 1  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\dfrac{(x^2+2)^2}{x^2}=\dfrac{x^4+4x^2+4}{x^2}$ | M1W1 | 2 | Expands and forms one fraction. |
| 2 | $=x^2+4+\dfrac{4}{x^2}\;\therefore\;B=C=4$ | W1 | 1 | Identifies both constants. |
| 3 | $\displaystyle \int_1^2 \frac{(x^2+2)^2}{x^2}\,dx=\int_1^2\left(x^2+4+\frac{4}{x^2}\right)dx$ | — | 0 | Uses part (i). |
| 4 | $\displaystyle \left[\frac{x^3}{3}+4x-\frac{4}{x}\right]_1^2$ | MW3 | 3 | Integrates correctly. |
| 5 | $\displaystyle \left(\frac83+8-2\right)-\left(\frac13+4-4\right)$ | M1 | 1 | Substitutes limits. |
| 6 | $\displaystyle 8\frac13$ | W1 | 1 | Final value. |

### Final Answer

`B = C = 4`, and

$$
\int_1^2 \frac{(x^2+2)^2}{x^2}\,dx=8\frac13.
$$

### What the Examiner Wanted

The key marks came from expanding the numerator, simplifying the integrand, applying the power rule, and subtracting lower from upper.

---

## Solution to Question 2: C2 June 2010 Question 6

**Question ID:** `AS1IntegrationQ002`  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C2 June 2010 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 2  
**Marks available:** 11  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ002TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the equal-area interpretation.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(3-x^{-3})\,dx=3x+\frac{x^{-2}}{2}+c$ | MW3 | 3 | Integrates part (a). |
| 2 | $\displaystyle \text{Area}=\int_0^a(4x^2-x^3)\,dx$ | M2W1 | 3 | Sets up signed area. |
| 3 | $\displaystyle \left[\frac{4x^3}{3}-\frac{x^4}{4}\right]_0^a$ | MW2 | 2 | Integrates and applies limits. |
| 4 | $\displaystyle =\frac{4a^3}{3}-\frac{a^4}{4}$ | W1 | 1 | Simplifies result. |
| 5 | $\displaystyle \text{if 2 areas equal then }\frac{4a^3}{3}-\frac{a^4}{4}=0$ | M1 | 1 | Uses equal-area condition. |
| 6 | $\displaystyle a^3\left(\frac43-\frac{a}{4}\right)=0$ | — | 0 | Factorisation shown. |
| 7 | $\displaystyle a\ne0\text{ or }a=\frac{16}{3}$ | MW1 | 1 | Uses $a>4$. |

### Final Answer

$$
\int(3-x^{-3})\,dx=3x+\frac{x^{-2}}2+c,\qquad a=\frac{16}{3}.
$$

### What the Examiner Wanted

The examiner wanted correct integration of a negative power, then an equation from the equal shaded areas. The condition $a>4$ rejects $a=0$.

### Alternative Method

Official alternative method shown in the mark scheme:

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \text{Area}=\int_0^4(4x^2-x^3)\,dx$ | M2W1 | 3 | Finds first shaded area. |
| 2 | $\displaystyle \left[\frac{4x^3}{3}-\frac{x^4}{4}\right]_0^4$ | MW2 | 2 | Integrates over $[0,4]$. |
| 3 | $\displaystyle =\frac{256}{3}-64=21\frac13$ | W1 | 1 | Gets first area. |
| 4 | $\displaystyle \text{Area}=-\int_4^a(4x^2-x^3)\,dx$ | M1 | 1 | Uses absolute area below axis. |
| 5 | $\displaystyle =-\left[\frac{4x^3}{3}-\frac{x^4}{4}\right]_4^a$ | — | 0 | Applies limits. |
| 6 | $\displaystyle =-\left(\frac{4a^3}{3}-\frac{a^4}{4}-21\frac13\right)$ | — | 0 | Rearranges area. |
| 7 | $\displaystyle \text{if 2 areas equal then }21\frac13=-\frac{4a^3}{3}$ | — | 0 | Mark scheme line as printed. |
| 8 | $\displaystyle \Rightarrow a=\frac{16}{3}$ | MW1 | 1 | Final value. |

---

## Solution to Question 3: C2 January 2011 Question 5

**Question ID:** `AS1IntegrationQ003`  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 January 2011 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 3  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ003TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the top-minus-bottom setup.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(6\sqrt{x}-\frac{2}{x^3}\right)dx=4x^{3/2}+\frac{1}{x^2}+c$ | MW3 | 3 | Integrates part (a). |
| 2 | $\displaystyle \int_1^6\left(4+6x-x^2-(x^2-8x+16)\right)dx$ | M2 W2 | 4 | Uses top minus bottom. |
| 3 | $\displaystyle \int_1^6(-12+14x-2x^2)dx$ | — | 0 | Simplifies integrand. |
| 4 | $\displaystyle \left[-12x+7x^2-\frac23x^3\right]_1^6$ | MW2 | 2 | Integrates and applies limits. |
| 5 | $\displaystyle =36-\left(-5\frac23\right)=41\frac23$ | MW1 | 1 | Final area. |

### Final Answer

$$
4x^{3/2}+\frac{1}{x^2}+c,
\qquad \text{area}=41\frac23.
$$

### What the Examiner Wanted

The main method was to integrate the difference of the two curves between the given intersection points.

---

## Solution to Question 4: C2 June 2011 Question 5

**Question ID:** `AS1IntegrationQ004`  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 June 2011 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 4  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ004TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the area-under-curve limits.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(4x^{-2}+3-7x^{1/2})dx$ | — | 0 | Part (a) setup. |
| 2 | $\displaystyle -4x^{-1}+3x-\frac{14}{3}x^{3/2}+c$ | MW4 | 4 | Integrates all terms. |
| 3 | $\displaystyle =-\frac4x+3x-\frac{14\sqrt{x^3}}{3}+c$ | — | 0 | Equivalent form. |
| 4 | $\displaystyle A=\int_0^3(2x^3-8x^2+7x+3)dx$ | M1 W2 | 3 | Sets up logo area. |
| 5 | $\displaystyle A=\left[\frac12x^4-\frac83x^3+\frac72x^2+3x\right]_0^3$ | MW2 | 2 | Integrates and applies limits. |
| 6 | $\displaystyle A=[40.5-72+31.5+9]-0=9$ | W1 | 1 | Final area. |

### Final Answer

$$
-4x^{-1}+3x-\frac{14}{3}x^{3/2}+c,
\qquad A=9.
$$

### What the Examiner Wanted

The key area step was to integrate the modelled curve from $x=0$ to $x=3$.

---

## Solution to Question 5: C2 January 2012 Question 4

**Question ID:** `AS1IntegrationQ005`  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 January 2012 Question 4  
**Related question:** See `AS1_integration_questions.md`, Question 5  
**Marks available:** 9  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ005TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the limits $0$ to $4$.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(5x^2-7x^{-2})dx=\frac53x^3+7x^{-1}+c$ | MW3 | 3 | Integrates part (a). |
| 2 | $\displaystyle \int_0^4(8-x^{3/2})dx$ | M2 W1 | 3 | Sets up area. |
| 3 | $\displaystyle \left[8x-\frac25x^{5/2}\right]_0^4$ | MW2 | 2 | Integrates and applies limits. |
| 4 | $\displaystyle (32-12.8)-(0)=19.2\text{ units}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac53x^3+7x^{-1}+c,
\qquad 19.2\text{ units}^2.
$$

### What the Examiner Wanted

The examiner expected the x-intercept $x=4$ from the diagram and the correct definite integral from $0$ to $4$.

---

## Solution to Question 6: C2 June 2012 Question 6

**Question ID:** `AS1IntegrationQ006`  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 June 2012 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 6  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ006TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the area enclosed by the y-axis and horizontal lines.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(5x+x^{1/3}+7)dx=\frac52x^2+\frac34x^{4/3}+7x+c$ | MW4 | 4 | Integrates part (a). |
| 2 | $\displaystyle \int_1^4x\,dy$ | M2W1 | 3 | Sets up area using $y$. |
| 3 | $\displaystyle =\int_1^4 y^{-1/2}\,dy$ | MW1 | 1 | Uses $x=y^{-1/2}$. |
| 4 | $\displaystyle =\left[2y^{1/2}\right]_1^4$ | MW1 | 1 | Integrates. |
| 5 | $\displaystyle =4-2=2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac52x^2+\frac34x^{4/3}+7x+c,
\qquad \text{area}=2.
$$

### What the Examiner Wanted

The mark scheme uses integration with respect to $y$, since the region is bounded by horizontal lines $y=1$ and $y=4$.

### Alternative Method

Official alternative method shown in the mark scheme:

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int_{1/2}^1x^{-2}\,dx$ | MW1 | 1 | Uses corresponding x-values. |
| 2 | $\displaystyle =[-x^{-1}]_{1/2}^{1}$ | MW1 | 1 | Integrates. |
| 3 | $\displaystyle =(-1)-(-2)=1$ | MW1 | 1 | Evaluates integral. |
| 4 | $\displaystyle \text{Area}=1-\frac12+\frac32=2$ | MW3 | 3 | Adds/subtracts simple regions. |

---

## Solution to Question 7: C2 January 2013 Question 1(a)

**Question ID:** `AS1IntegrationQ007`  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C2 January 2013 Question 1(a)  
**Related question:** See `AS1_integration_questions.md`, Question 7  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(4x^3+2x^{1/2}+7+x^{-2})dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =\frac{4x^4}{4}+\frac{2x^{3/2}}{3/2}+7x-x^{-1}+c$ | — | 0 | Applies power rule. |
| 3 | $\displaystyle =x^4+\frac43x^{3/2}+7x-x^{-1}+c$ | MW5 | 5 | Final integrated form. |

### Final Answer

$$
x^4+\frac43x^{3/2}+7x-x^{-1}+c.
$$

### What the Examiner Wanted

The examiner wanted all four terms integrated using the power rule and the constant $c$ included.

---

## Solution to Question 8: C2 January 2013 Question 4

**Question ID:** `AS1IntegrationQ008`  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C2 January 2013 Question 4  
**Related question:** See `AS1_integration_questions.md`, Question 8  
**Marks available:** 13  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ008TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the triangle plus integral approach.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $y=x+4$; if $x=0$ then $y=4$ | — | 0 | Checks line. |
| 2 | $y=x^2-4x+4$; if $x=0$ then $y=4$ | — | 0 | Checks curve. |
| 3 | $\therefore$ intersect at $(0,4)$ | MW2 | 2 | Verifies intersection. |
| 4 | When $y=0$, $x=-4$ for the line | MW1 | 1 | Finds line intercept. |
| 5 | $y=0:\;x^2-4x+4=0$ | — | 0 | Curve intercept equation. |
| 6 | $(x-2)^2=0$, so $x=2$ | M1 W1 | 2 | Finds curve intercept. |
| 7 | $\displaystyle \text{Req. Area}=\text{area }\triangle+\int_0^2(x^2-4x+4)dx$ | M1 M1 W1 | 3 | Sets up composite area. |
| 8 | $\displaystyle =\frac{4\times4}{2}+\left[\frac{x^3}{3}-2x^2+4x\right]_0^2$ | MW2 | 2 | Integrates and adds triangle. |
| 9 | $\displaystyle =8+\left(\frac83-8+8\right)$ | MW1 MW1 | 2 | Evaluates terms. |
| 10 | $\displaystyle =10\frac23\text{ unit}^2$ | W1 | 1 | Final area. |

### Final Answer

$$
\text{Shaded area}=10\frac23\text{ unit}^2.
$$

### What the Examiner Wanted

The method was to split the shaded region into a triangle under the line and an integral under the curve.

---

## Solution to Question 9: C2 June 2013 Question 6

**Question ID:** `AS1IntegrationQ009`  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 June 2013 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 9  
**Marks available:** 12  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(3x^{1/2}+x^{-2})dx=2x^{3/2}-x^{-1}+c$ | MW2 | 2 | Integrates part (a). |
| 2 | $\displaystyle \frac{dy}{dx}=2x-9x^2$ | — | 0 | Given gradient. |
| 3 | $\displaystyle y=x^2-3x^3+c$ | M1 W2 | 3 | Integrates gradient. |
| 4 | $\displaystyle \text{Area}=\int_0^1(x^2-3x^3+c)dx$ | M1 W1 W1 | 3 | Uses area condition. |
| 5 | $\displaystyle =\left[\frac{x^3}{3}-\frac{3x^4}{4}+cx\right]_0^1$ | MW2 | 2 | Integrates with limits. |
| 6 | $\displaystyle \frac13-\frac34+c=\frac{19}{12}$ | M1 | 1 | Forms equation for $c$. |
| 7 | $\displaystyle c=\frac{24}{12}=2$ | — | 0 | Solves for $c$. |
| 8 | $\displaystyle \therefore\text{ eqn }y=x^2-3x^3+2$ | W1 | 1 | Final equation. |

### Final Answer

$$
y=x^2-3x^3+2.
$$

### What the Examiner Wanted

The important idea was to integrate the gradient first, then use the given area to find the constant of integration.

---

## Solution to Question 10: C2 January 2014 Question 5

**Question ID:** `AS1IntegrationQ010`  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 January 2014 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 10  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ010TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the integration with respect to $y$.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(2x^{1/2}+3x^{-1/2})dx$ | MW1 | 1 | Rewrites integrand. |
| 2 | $\displaystyle \frac43x^{3/2}+6x^{1/2}+c$ | MW3 | 3 | Integrates part (a). |
| 3 | $\displaystyle A=\int_{-2}^{1}(y^3+8)dy$ | M2 MW1 W1 | 4 | Sets up rudder area. |
| 4 | $\displaystyle A=\left[\frac{y^4}{4}+8y\right]_{-2}^{1}$ | MW1 | 1 | Integrates with limits. |
| 5 | $\displaystyle A=20\frac14\text{ units}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac43x^{3/2}+6x^{1/2}+c,
\qquad A=20\frac14\text{ units}^2.
$$

### What the Examiner Wanted

The region is more naturally handled by writing $x=y^3+8$ and integrating with respect to $y$.

---

## Solution to Question 11: C2 June 2014 Question 2

**Question ID:** `AS1IntegrationQ011`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2014 Question 2  
**Related question:** See `AS1_integration_questions.md`, Question 11  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(\frac{16}{x^2}+x^{1/3}+9x-7\right)dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =-16x^{-1}+\frac34x^{4/3}+\frac92x^2-7x+c$ | MW5 | 5 | Integrates all terms. |

### Final Answer

$$
-16x^{-1}+\frac34x^{4/3}+\frac92x^2-7x+c.
$$

### What the Examiner Wanted

The examiner wanted correct treatment of $x^{-2}$ and $x^{1/3}$, plus the constant of integration.

---

## Solution to Question 12: C2 June 2014 Question 6

**Question ID:** `AS1IntegrationQ012`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2014 Question 6  
**Related question:** See `AS1_integration_questions.md`, Question 12  
**Marks available:** 10  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ012TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports locating point A.]

[VISUAL REFERENCE: AS1IntegrationQ012TikZ-002 | See question diagram in AS1_integration_tikz.md | Purpose: supports doubling the lobe area for the logo.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $x^2=8\sqrt{x}$ | MW1 | 1 | Equates curves. |
| 2 | $x^{3/2}=8$ | MW1 | 1 | Simplifies equation. |
| 3 | $x=4$; $y=16$; $A=(4,16)$ | MW1 | 1 | Coordinates of A. |
| 4 | $\displaystyle A=\int_0^4(8\sqrt{x}-x^2)dx$ | M2 W1 | 3 | Sets up one lobe area. |
| 5 | $\displaystyle A=\left[\frac{16x^{3/2}}{3}-\frac{x^3}{3}\right]_0^4$ | MW2 | 2 | Integrates with limits. |
| 6 | $\displaystyle A=\frac{64}{3}$ | MW1 | 1 | One lobe area. |
| 7 | $\displaystyle \text{Area}=2\times\frac{64}{3}\approx42.7\text{ unit}^2$ | MW1 | 1 | Doubles for reflection. |

### Final Answer

$$
A=(4,16),
\qquad \text{logo area}=\frac{128}{3}\approx42.7\text{ unit}^2.
$$

### What the Examiner Wanted

The key was to find the intersection first, integrate top minus bottom for one side, then double because of reflection in the $y$-axis.

---

## Solution to Question 13: C2 June 2015 Question 7

**Question ID:** `AS1IntegrationQ013`  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2015 Question 7  
**Related question:** See `AS1_integration_questions.md`, Question 13  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \frac{x^2}{6}-\frac4x-4x^{3/2}+c$ | MW4 | 4 | Integrates part (a). |
| 2 | $0=x^2-4x+3$ | — | 0 | Finds x-intercepts. |
| 3 | $x=1\text{ or }x=3$ | M1 W1 | 2 | Roots identified. |
| 4 | $\displaystyle A=-\int_1^3(x^2-4x+3)dx+\int_3^4(x^2-4x+3)dx$ | M2 W1 | 3 | Splits at sign change. |
| 5 | $\displaystyle A=-\left[\frac{x^3}{3}-2x^2+3x\right]_1^3+\left[\frac{x^3}{3}-2x^2+3x\right]_3^4$ | MW1 | 1 | Integrates. |
| 6 | $\displaystyle A=1\frac13+1\frac13=2\frac23$ | W1 | 1 | Final total area. |

### Final Answer

$$
\frac{x^2}{6}-\frac4x-4x^{3/2}+c,
\qquad A=2\frac23.
$$

### What the Examiner Wanted

The area must be split at $x=3$ because the curve changes sign between $x=1$ and $x=4$.

---

## Solution to Question 14: C2 June 2016 Question 1(a)

**Question ID:** `AS1IntegrationQ014`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 June 2016 Question 1(a)  
**Related question:** See `AS1_integration_questions.md`, Question 14  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle y=\int\left(4+\frac{1}{x^2}\right)dx$ | M1 | 1 | Integrates gradient. |
| 2 | $y=4x-x^{-1}+c$ | W2 | 2 | Correct general curve. |
| 3 | $x=1,\;y=7\;\therefore\;c=4$ | M1 | 1 | Uses given point. |
| 4 | $\displaystyle y=4x-\frac1x+4$ | W1 | 1 | Final equation. |

### Final Answer

$$
y=4x-\frac1x+4.
$$

### What the Examiner Wanted

The examiner wanted the constant of integration found using the point $(1,7)$.

---

## Solution to Question 15: June 2016 Question 3(b)

**Question ID:** `AS1IntegrationQ015`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** June 2016 Question 3(b)  
**Related question:** See `AS1_integration_questions.md`, Question 15  
**Marks available:** 4  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ015TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the limits $1$ and $8$.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int_1^8(x^{1/3}+4x)dx$ | M1 | 1 | Sets up area. |
| 2 | $\displaystyle \left[\frac34x^{4/3}+2x^2\right]_1^8$ | MW2 | 2 | Integrates and applies limits. |
| 3 | $\displaystyle [12+128]-\left[\frac34+2\right]$ | — | 0 | Substitutes limits. |
| 4 | $137.25$ | W1 | 1 | Final area. |

### Final Answer

$$
137.25.
$$

### What the Examiner Wanted

The key was setting up the definite integral over $x=1$ to $x=8$.

---

## Solution to Question 16: C2 June 2017 Question 1

**Question ID:** `AS1IntegrationQ016`  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 June 2017 Question 1  
**Related question:** See `AS1_integration_questions.md`, Question 16  
**Marks available:** 5  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int(6t^2+t^{1/2}+9-3t^{-3})dt$ | — | 0 | Setup. |
| 2 | $\displaystyle =2t^3+\frac{2t^{3/2}}{3}+9t+\frac{3t^{-2}}{2}+c$ | MW5 | 5 | Integrates all terms. |

### Final Answer

$$
2t^3+\frac{2t^{3/2}}{3}+9t+\frac{3t^{-2}}{2}+c.
$$

### What the Examiner Wanted

The examiner wanted correct handling of fractional and negative powers of $t$.

---

## Solution to Question 17: C2 June 2017 Question 3

**Question ID:** `AS1IntegrationQ017`  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2017 Question 3  
**Related question:** See `AS1_integration_questions.md`, Question 17  
**Marks available:** 9  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ017TikZ-001 | See AI-proposed diagram in AS1_integration_tikz.md | Purpose: supports the area-between-line-and-curve setup.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $6x-x^2=8$ | — | 0 | Equates line and curve. |
| 2 | $x^2-6x+8=0$ | — | 0 | Rearranges. |
| 3 | $(x-2)(x-4)=0$ | — | 0 | Factorises. |
| 4 | $x=2\text{ or }4$ | M1 W1 | 2 | Intersection x-values. |
| 5 | $\displaystyle \text{Area}=\int_2^4(6x-x^2)dx-(4-2)\times8$ | M2 W1 | 3 | Curve area minus rectangle. |
| 6 | $\displaystyle =\left[3x^2-\frac{x^3}{3}\right]_2^4-16$ | MW2 MW1 | 3 | Integrates and subtracts. |
| 7 | $\displaystyle =\left(48-\frac{64}{3}\right)-\left(12-\frac83\right)-16$ | — | 0 | Substitution shown. |
| 8 | $\displaystyle =\frac43\text{ unit}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
x=2\text{ or }4,
\qquad \text{area}=\frac43\text{ unit}^2.
$$

### What the Examiner Wanted

The examiner wanted intersection points first, then an area calculation between the curve and horizontal line.

---

## Solution to Question 18: C2 June 2018 Question 3

**Question ID:** `AS1IntegrationQ018`  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2018 Question 3  
**Related question:** See `AS1_integration_questions.md`, Question 18  
**Marks available:** 11  
**Match confidence:** High

[VISUAL REFERENCE: AS1IntegrationQ018TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the top-minus-bottom setup.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(2x^3-\sqrt{x}+\frac1{x^4}-3\right)dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =\frac12x^4-\frac23x^{3/2}-\frac13x^{-3}-3x+c$ | MW4 W1 | 5 | Integrates part (a). |
| 3 | $\displaystyle =\frac12x^4-\frac{2\sqrt{x^3}}3-\frac{1}{3x^3}-3x+c$ | — | 0 | Equivalent form. |
| 4 | $\displaystyle \text{Area}=\int_2^3\left((-x^2+5x-4)-(x^2-5x+8)\right)dx$ | M2 W1 | 3 | Top minus bottom. |
| 5 | $\displaystyle =\int_2^3(-2x^2+10x-12)dx$ | — | 0 | Simplifies. |
| 6 | $\displaystyle =\left[-\frac23x^3+5x^2-12x\right]_2^3$ | MW2 | 2 | Integrates with limits. |
| 7 | $\displaystyle =\left[-\frac23(3)^3+5(3)^2-12(3)\right]-\left[-\frac23(2)^3+5(2)^2-12(2)\right]$ | — | 0 | Substitution shown. |
| 8 | $\displaystyle =\frac13\text{ units}^2$ | MW1 | 1 | Final area. |

### Final Answer

$$
\frac12x^4-\frac23x^{3/2}-\frac13x^{-3}-3x+c,
\qquad \text{area}=\frac13\text{ units}^2.
$$

### What the Examiner Wanted

The examiner wanted the correct top curve identified and the integral evaluated over $x=2$ to $x=3$.

---

## Solution to Question 19: C2 June 2019 Question 5

**Question ID:** `AS1IntegrationQ019`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 June 2019 Question 5 in questions PDF; mark scheme heading says C2 June 2018 Question 5  
**Related question:** See `AS1_integration_questions.md`, Question 19  
**Marks available:** 9  
**Match confidence:** Medium

[VISUAL REFERENCE: AS1IntegrationQ019TikZ-001 | See question diagram in AS1_integration_tikz.md | Purpose: supports the integration with respect to $y$ and area sign.]

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \int\left(\frac{3x^{-3}}2-6x\right)dx$ | — | 0 | Setup. |
| 2 | $\displaystyle =-\frac{3x^{-2}}4-3x^2+c$ | MW3 | 3 | Integrates part (a). |
| 3 | $\displaystyle \int_1^4(y^2-5y+4)dy$ | M1W1 | 2 | Sets up signed area. |
| 4 | $\displaystyle =\left[\frac{y^3}{3}-\frac52y^2+4y\right]_1^4$ | MW2 | 2 | Integrates with respect to $y$. |
| 5 | $\displaystyle =\left[-\frac83\right]-\left[\frac{11}{6}\right]$ | — | 0 | Substitutes limits. |
| 6 | $\displaystyle =-\frac92$ | W1 | 1 | Signed integral. |
| 7 | $\displaystyle \text{Area}=\frac92\text{ square units}$ | M1 | 1 | Takes absolute area. |

### Final Answer

$$
-\frac{3x^{-2}}4-3x^2+c,
\qquad \text{area}=\frac92\text{ square units}.
$$

### What the Examiner Wanted

The examiner wanted integration with respect to $y$, then the positive area from the magnitude of the signed integral.

---

## Solution to Question 20: AS1_(new spec)_June_2019 Question 5(a)

**Question ID:** `AS1IntegrationQ020`  
**Source:** Mark Scheme PDF p.11  
**Original reference:** AS1_(new spec)_June_2019 Question 5(a)  
**Related question:** See `AS1_integration_questions.md`, Question 20  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\displaystyle \left[\frac{4x^{3/2}}{3}\right]_1^k=\frac{28}{3}$ | M1 W1 | 2 | Integrates and applies limits. |
| 2 | $\displaystyle \frac{4k^{3/2}}3-\frac43=\frac{28}{3}$ | M1 W1 | 2 | Substitutes limits. |
| 3 | $\displaystyle \Rightarrow 4k^{3/2}=32$ | M1 | 1 | Rearranges. |
| 4 | $\displaystyle k^{3/2}=8$ | — | 0 | Simplifies. |
| 5 | $\displaystyle k=4$ | W1 | 1 | Final value. |

### Final Answer

$$
k=4.
$$

### What the Examiner Wanted

The examiner wanted the definite integral evaluated first, then the resulting equation solved for $k$.

---

## Unmatched Mark Scheme Entries

No unmatched mark scheme entries were found. All visible mark scheme sections were matched to questions in the supplied questions PDF.
