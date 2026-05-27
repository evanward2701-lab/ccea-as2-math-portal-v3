# AS1 Logarithms and Exponentials Questions Agent Source

## 0. AI-Agent Usage Instructions

This file is a source for question retrieval, solution lookup, mark-scheme interpretation, diagnostics and targeted practice. Questions are in Section 5. Solutions and mark schemes are in Section 6. Diagram assets are in Section 7. Widgets are in Section 8. Keep questions and solutions separate unless explicitly asked to combine them. Preserve official mark-scheme labels, uncertainty notes and generated-solution labels. Use UK/CCEA mathematical vocabulary.

## 1. Pack Metadata

```yaml
pack_type: question
unit_code: AS1
unit_name: CCEA AS1 Pure Mathematics
topic_slug: "07_expoentials_and_logarithms_questions"
topic_title: "Logarithms and Exponentials"
source_folder: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions"
output_file: "/Users/evanward/Documents/AS Portal - New /AS1 Files/00_AGENT_SOURCE_PACKS/07_expoentials_and_logarithms_questions/AS1_logarithms_and_exponentials_questions_agent_source.md"
created_from_files:
  lesson: null
  questions: "AS1_logarithms_and_exponentials_questions.md"
  solutions: "AS1_logarithms_and_exponentials_solutions.md"
  mermaid: "AS1_logarithms_and_exponentials_mermaid.md"
  svg: "AS1_logarithms_and_exponentials_svg.md"
  tikz: "AS1_logarithms_and_exponentials_tikz.md"
  widgets: "AS1_logarithms_and_exponentials_widgets.md"
contains_lesson: false
contains_questions: true
contains_solutions: true
contains_mermaid: true
contains_svg: true
contains_tikz: true
contains_widgets: true
agent_use_cases:
  - retrieve questions
  - retrieve official solutions
  - interpret mark schemes
  - retrieve diagrams
  - retrieve widgets
  - diagnose misconceptions
  - generate targeted practice from source patterns
```

## 2. Source File Manifest

| Role | Source file | Lines | Bytes UTF-8 | SHA-256 |
|---|---|---:|---:|---|
| questions | AS1_logarithms_and_exponentials_questions.md | 1129 | 22438 | `c02fc5dec748f849cfaad7b95fabf6838bc9faf5f0608fb1b3d1d750c10d470a` |
| solutions | AS1_logarithms_and_exponentials_solutions.md | 959 | 42287 | `71d7252cb7c9e93ad3c87ae742045aa7be22d343cedd4e7e131e870ae5d195e6` |
| mermaid | AS1_logarithms_and_exponentials_mermaid.md | 6 | 292 | `ae9e29bd97fa2bf24a6df326d8f9be92495159034db5364f80c67a1253cd8e9b` |
| svg | AS1_logarithms_and_exponentials_svg.md | 6 | 257 | `074496bcd2c3f36d8b4e9c022e802b4e63e0ee3a860850e16007806859b2069a` |
| tikz | AS1_logarithms_and_exponentials_tikz.md | 163 | 6369 | `1d1e34599c3a5a1c4639869ffc115247dd216b68645f7b016bb83351aa9f2cb8` |
| widgets | AS1_logarithms_and_exponentials_widgets.md | 6 | 370 | `57425b4c98917c71affaa1f7e2aa9e93d78a4593a472911c624ad37009b5fe38` |

## 3. Preservation and Retrieval Map

- Original Markdown is preserved verbatim inside labelled source-content sections.
- Mathematical notation, source labels, question IDs, pack IDs, visual placeholders, code blocks and generated/AI-proposed labels are retained.
- Diagram and widget files are separated by asset type so an AI agent can retrieve them without confusing them with explanatory prose.
- Audit details, warnings, file checksums and ID checks are stored in the companion audit file.

## 4. Source Navigation and Pack Boundaries

- Section 5 contains the question Markdown.
- Section 6 contains the solutions / mark-scheme Markdown.
- Section 7 contains Mermaid, SVG and TikZ visual assets in that order.
- Section 8 contains widget/HTML/CSS/JavaScript assets.
- Section 9 gives retrieval notes for downstream AI agents.
- Missing optional/expected roles: lesson

## 5. Questions

### Source File Metadata

```yaml
filename: "AS1_logarithms_and_exponentials_questions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions/AS1_logarithms_and_exponentials_questions.md"
lines: 1129
bytes_utf8: 22438
sha256: "c02fc5dec748f849cfaad7b95fabf6838bc9faf5f0608fb1b3d1d750c10d470a"
```

### Preserved Source Content: AS1_logarithms_and_exponentials_questions.md

# Logarithms and Exponentials Question Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** AS1_Logarithms_&_Exponentials_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Logarithms_&_Exponentials_solutions.pdf  
**Date generated:** 22 May 2026  
**Pack ID:** AS1LogarithmsAndExponentials

---

## 1. Source Document Map

| Document type | Filename | Page count if available | Role in this pack |
|---|---|---:|---|
| Questions PDF | AS1_Logarithms_&_Exponentials_questions.pdf | 11 | Source of questions, marks, diagrams, and wording |
| Mark scheme PDF | AS1_Logarithms_&_Exponentials_solutions.pdf | 19 | Source of official solutions and marks |
| CCEA Specification | Specification(10).pdf | 39 | Source for unit and syllabus alignment |
| CCEA Elaboration Document | Elaboration Document(10).pdf | 28 | Source for expected depth and guidance |

---

## 2. Specification Alignment

The pack is labelled as AS1 Pure Mathematics in the questions PDF. It mainly supports the AS1 Exponentials and Logarithms content. Some old C3 questions include differentiation of exponential models and are therefore marked as extension/A2-style overlap where appropriate.


| Specification area | Relevant learning outcome | Question numbers testing it | Notes on coverage | Gaps or comments |
|---|---|---|---|---|
| Exponential functions and graphs | Understand and use $a^x$ and its graph, where $a>0$ | 4, 6, 10, 13 | Includes sketching and interpreting exponential graphs. | Some old C3 modelling items go beyond pure graph sketching. |
| Exponential equations | Solve equations of the form $a^x=b$ | 2, 4, 10, 14, 17, 28 | Includes taking logarithms and using exact logarithmic forms. | Question 15 uses an exponential inequality in context. |
| Logarithms as inverses | Use $\log_a x$ as the inverse of $a^x$ | 1, 2, 3, 5, 6, 7, 8, 11, 12, 16, 18, 28 | Broad coverage of converting between logarithmic and exponential forms. | Students must keep log domains positive. |
| Laws of logarithms | Prove and use product, quotient and power laws | 1, 3, 5, 7, 9, 11, 12, 14, 16, 18 | Several questions require proof as well as algebraic use. | No separate question on negative/fractional powers in log laws except through manipulation. |
| Natural logarithms and $e^x$ | Use $\ln x$ and $e^x$ as inverse functions | 19, 21, 22, 23, 24, 25, 27, 28 | Includes modelling and exact solving with $\ln$. | Several old C3 questions include differentiating exponential models. |
| Exponential growth and decay | Model continuous compound interest, population growth, radioactive decay and drug/concentration-style decay | 1, 3, 8, 15, 19, 20, 22, 23, 24, 25, 26, 27 | Strong contextual modelling coverage. | Some C3 items are extension/A2-style where differentiation of $e^{kt}$ is required. |
| Graph transformations | Sketch transformed exponential/logarithmic functions | 4, 10, 13, 21 | Includes horizontal shifts and modulus transformation of a logarithmic graph. | The modulus transformation in Q21 is old C3-style and may be beyond the strictest AS1 core. |


---

## 3. Question Index

| Pack question | Original reference | Questions PDF page | Marks | Subtopic | Diagram? | AI visual suggested? | Matching solution |
|---:|---|---:|---:|---|---|---|---|
| 1 | C2 January 2010 Question 7 | 2 | 15 | Log laws; exponential growth modelling | No | No | High |
| 2 | C2 January 2010 Question 8 | 2 | 15 | Exponential and logarithmic equations | No | No | Medium |
| 3 | C2 January 2011 Question 7 | 3 | 11 | Log laws; exponential growth modelling | No | No | High |
| 4 | C2 June 2011 Question 2 | 3 | 6 | Exponential graphs and equations | No | No | High |
| 5 | C2 June 2011 Question 8 | 3 | 8 | Logarithmic equation | No | No | High |
| 6 | C2 January 2012 Question 5 | 4 | 9 | Exponential graph intercepts; log equation | Yes | No | High |
| 7 | C2 June 2012 Question 8 | 4 | 11 | Change of base proof; log equation | No | No | High |
| 8 | C2 January 2013 Question 4 | 5 | 13 | Exponential growth; simultaneous log equations | No | No | Medium |
| 9 | C2 June 2013 Question 8 | 5 | 11 | Product law proof; log equation | No | No | High |
| 10 | C2 January 2014 Question 2(b) | 5 | 4 | Exponential graph and equation | No | No | High |
| 11 | C2 January 2014 Question 8 | 5 | 9 | Log equation reducible to quadratic | No | No | High |
| 12 | C2 June 2014 Question 8 | 6 | 10 | Simultaneous logarithmic equations | No | No | High |
| 13 | C2 June 2015 Question 8 | 6 | 12 | Exponential graph; log manipulation | No | No | High |
| 14 | C2 June 2016 Question 6 | 6 | 11 | Log simplification; exponential quadratic | No | No | High |
| 15 | C2 June 2017 Question 4 | 7 | 4 | Compound interest model; exponential inequality | No | No | High |
| 16 | C2 June 2017 Question 7 | 7 | 12 | Power law proof; log equation | No | No | High |
| 17 | C2 June 2018 Question 8 | 7 | 15 | Exponential equation; logs in arithmetic progression | No | No | High |
| 18 | C2 June 2019 Question 7 | 8 | 12 | Quotient law proof; log equation | No | No | High |
| 19 | C3 January 2010 Question 6 | 8 | 10 | Exponential cooling model; rate of change | No | No | High |
| 20 | C3 June 2010 Question 8(b) | 8 | 5 | Exponential decay and half-life | No | No | Medium |
| 21 | C3 January 2011 Question 3 | 9 | 10 | Log graph transformations; absolute value; solving with ln | Yes | No | High |
| 22 | C3 June 2011 Question 4 | 9 | 7 | Exponential growth model | No | No | High |
| 23 | C3 January 2013 Question 1 | 10 | 4 | Exponential decay model | No | No | High |
| 24 | C3 June 2013 Question 5 | 10 | 2 | Exponential cooling model evaluation | No | No | High |
| 25 | C3 June 2015 Question 2 | 10 | 8 | Exponential growth model; rate of change | No | No | High |
| 26 | C3 June 2016 Question 6 | 10 | 6 | Exponential decay and half-life | No | No | High |
| 27 | C3 June 2018 Question 3(b) | 11 | 4 | Exponential growth model | No | No | Medium |
| 28 | AS1 (new spec) June 2019 Question 3 | 11 | 10 | Log equation; exact exponential equation | No | No | High |

---

## 4. Questions

## Question 1: C2 January 2010 Question 7
**Question ID:** AS1LogarithmsAndExponentialsQ001  
**Source:** Questions PDF p.2  
**Original reference:** C2 January 2010 Question 7  
**Marks:** 15  
**Subtopic:** Log laws; exponential growth modelling

### Question

**7**

**(a)** Write as a single logarithm in base 5

$$
\log_5 15 + 2\log_5 2 - \log_{25} 9
$$

[8]

**(b)** A country's population at the end of each year is 5% greater than at the start of that year.
Model the population to be increasing at a constant rate.

**(i)** Find an expression for the population after $t$ years. [2]

**(ii)** Find how many years it will take for the population to increase by 50%. [5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 2: C2 January 2010 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ002  
**Source:** Questions PDF p.2  
**Original reference:** C2 January 2010 Question 8  
**Marks:** 15  
**Subtopic:** Exponential and logarithmic equations

### Question

**8**

**(a)** Find $x$ given that

$$
3^{2x}=7
$$

[4]

**(b)** Find $x$ given that

$$
\log x+\log x^2+2\log x^3=1
$$

[5]

**(c)** Given that

$$
\log_2 x-\log_2 y=6
$$

and that

$$
2^3=\frac{1}{z}
$$

show that

$$
y=z^2x
$$

[6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 3: C2 January 2011 Question 7
**Question ID:** AS1LogarithmsAndExponentialsQ003  
**Source:** Questions PDF p.3  
**Original reference:** C2 January 2011 Question 7  
**Marks:** 11  
**Subtopic:** Log laws; exponential growth modelling

### Question

**7**

**(a)** **(i)** Rewrite as a single logarithm

$$
\log_3 8-3\log_3 x
$$

[3]

**(ii)** Hence solve the equation

$$
\log_3 8-3\log_3 x=3
$$

[4]

**(b)** A solution by trial and improvement is not acceptable.

A patch of mould increases its area by 12% each day.
Initially the patch of mould has an area of $A_0$.
Find after how many days the area of the patch of mould is 17 times $A_0$. [4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 4: C2 June 2011 Question 2
**Question ID:** AS1LogarithmsAndExponentialsQ004  
**Source:** Questions PDF p.3  
**Original reference:** C2 June 2011 Question 2  
**Marks:** 6  
**Subtopic:** Exponential graphs and equations

### Question

**2**

**(i)** Sketch the graphs of

$$
y=3^x
$$

and

$$
y=3^{x+2}
$$

on the same axes. [3]

**(ii)** Solve the equation

$$
3^{x+2}=2
$$

[3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 5: C2 June 2011 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ005  
**Source:** Questions PDF p.3  
**Original reference:** C2 June 2011 Question 8  
**Marks:** 8  
**Subtopic:** Logarithmic equation

### Question

**8**

Solve the equation

$$
1+2\log_5 x=\log_5(16x-3)
$$

[8]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 6: C2 January 2012 Question 5
**Question ID:** AS1LogarithmsAndExponentialsQ006  
**Source:** Questions PDF p.4  
**Original reference:** C2 January 2012 Question 5  
**Marks:** 9  
**Subtopic:** Exponential graph intercepts; log equation

### Question

**5**

**(a)** The graph of

$$
y=4^x-3
$$

is sketched in Fig. 3 below.

[VISUAL PLACEHOLDER: AS1LogarithmsAndExponentialsQ006TikZ-001 | Source: Questions PDF p.4 | Insert from AS1_logarithms_and_exponentials_tikz.md | Purpose: recreate Fig. 3 showing the graph of $y=4^x-3$ and the intercepts $A$ and $B$]

The graph crosses the axes at $A$ and $B$ as shown.

Find the coordinates of $A$ and $B$. [3]

**(b)** Solve the equation

$$
\log_2 x+\log_2(17-2x)=3
$$

[6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 7: C2 June 2012 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ007  
**Source:** Questions PDF p.4  
**Original reference:** C2 June 2012 Question 8  
**Marks:** 11  
**Subtopic:** Change of base proof; log equation

### Question

**8**

**(i)** Prove that

$$
\log_a x=\frac{\log_b x}{\log_b a}
$$

[5]

**(ii)** Hence solve the equation

$$
\log_4 x+\log_x 16=3
$$

[6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 8: C2 January 2013 Question 4
**Question ID:** AS1LogarithmsAndExponentialsQ008  
**Source:** Questions PDF p.5  
**Original reference:** C2 January 2013 Question 4  
**Marks:** 13  
**Subtopic:** Exponential growth; simultaneous log equations

### Question

**8**

**(a)** A solution by trial and improvement will not be accepted.

The cost of living is increasing by 15% per year.
If this rate is maintained and the cost of living this year is £$L$, then the cost of living after $t$ years can be modelled by £$L(1.15)^t$.

Find how many complete years it will take for the cost of living to treble. [5]

**(b)** Find the exact values of $x$ and $y$ given that

$$
\log_y x=3
$$

and

$$
\log_3 x-\log_3 y=5
$$

[8]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 9: C2 June 2013 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ009  
**Source:** Questions PDF p.5  
**Original reference:** C2 June 2013 Question 8  
**Marks:** 11  
**Subtopic:** Product law proof; log equation

### Question

**8**

**(i)** Prove that

$$
\log_a x+\log_a y=\log_a(xy)
$$

[6]

**(ii)** Find $a$ given that

$$
2\log_a 3+3\log_a 4=5
$$

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 10: C2 January 2014 Question 2(b)
**Question ID:** AS1LogarithmsAndExponentialsQ010  
**Source:** Questions PDF p.5  
**Original reference:** C2 January 2014 Question 2(b)  
**Marks:** 4  
**Subtopic:** Exponential graph and equation

### Question

**2**

**(b)** **(i)** Sketch the graph of

$$
y=4^{-x}
$$

[2]

**(ii)** Solve the equation

$$
4^{-x}=10
$$

[2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 11: C2 January 2014 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ011  
**Source:** Questions PDF p.5  
**Original reference:** C2 January 2014 Question 8  
**Marks:** 9  
**Subtopic:** Log equation reducible to quadratic

### Question

**8**

Solve the equation

$$
3\log_8 x=5+2\log_x 8
$$

[9]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 12: C2 June 2014 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ012  
**Source:** Questions PDF p.6  
**Original reference:** C2 June 2014 Question 8  
**Marks:** 10  
**Subtopic:** Simultaneous logarithmic equations

### Question

**8**

Solve the simultaneous equations

$$
\log_4 x+\log_4 y=2
$$

$$
\log_9 x-\log_9 y=-\frac{1}{2}
$$

[10]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 13: C2 June 2015 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ013  
**Source:** Questions PDF p.6  
**Original reference:** C2 June 2015 Question 8  
**Marks:** 12  
**Subtopic:** Exponential graph; log manipulation

### Question

**8**

**(a)** Sketch the graph of

$$
y=2^x-5
$$

clearly indicating where it crosses the $x$-axis and the $y$-axis. [3]

**(b)** If $\log_4 x=k$, express the following in terms of $k$:

**(i)**

$$
\log_4 x^3
$$

[1]

**(ii)**

$$
\log_4 \frac{\sqrt[3]{x}}{16}
$$

[2]

**(iii)**

$$
\log_2 x
$$

[2]

**(iv)** Hence solve for $x$

$$
\log_4 x^3+\log_4\frac{\sqrt[3]{x}}{16}=\log_2 x
$$

[4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 14: C2 June 2016 Question 6
**Question ID:** AS1LogarithmsAndExponentialsQ014  
**Source:** Questions PDF p.6  
**Original reference:** C2 June 2016 Question 6  
**Marks:** 11  
**Subtopic:** Log simplification; exponential quadratic

### Question

**6**

**(a)** Evaluate

$$
2\log_2 a+\log_4 4a^2-3\log_2 2a
$$

[6]

**(b)** Given that

$$
3(2^{2x})+2(2^x)-1=0
$$

find $x$. [5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 15: C2 June 2017 Question 4
**Question ID:** AS1LogarithmsAndExponentialsQ015  
**Source:** Questions PDF p.7  
**Original reference:** C2 June 2017 Question 4  
**Marks:** 4  
**Subtopic:** Compound interest model; exponential inequality

### Question

**4**

**(a)** A girl invests £1000 at 8% per annum compound interest added annually.

**(i)** Find the value of the investment at the end of $n$ years. [1]

**(ii)** Hence find how many years it will be until the value of the investment exceeds £2000. [3]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 16: C2 June 2017 Question 7
**Question ID:** AS1LogarithmsAndExponentialsQ016  
**Source:** Questions PDF p.7  
**Original reference:** C2 June 2017 Question 7  
**Marks:** 12  
**Subtopic:** Power law proof; log equation

### Question

**7**

**(i)** Prove that

$$
\log_a x^n=n\log_a x
$$

[6]

**(ii)** Find $x$ given that

$$
\log_a x=\log_{a^2}(x+6)
$$

[6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 17: C2 June 2018 Question 8
**Question ID:** AS1LogarithmsAndExponentialsQ017  
**Source:** Questions PDF p.7  
**Original reference:** C2 June 2018 Question 8  
**Marks:** 15  
**Subtopic:** Exponential equation; logs in arithmetic progression

### Question

**8**

**(a)** Given that

$$
\frac{5^{x-1}}{3^{2x}}=27
$$

find $x$. [8]

**(b)** The first three terms in an arithmetic progression are

$$
\log(4x+1),\quad \log(2x+3),\quad \log(x+3)
$$

Find the value of $x$. [7]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 18: C2 June 2019 Question 7
**Question ID:** AS1LogarithmsAndExponentialsQ018  
**Source:** Questions PDF p.8  
**Original reference:** C2 June 2019 Question 7  
**Marks:** 12  
**Subtopic:** Quotient law proof; log equation

### Question

**7**

**(i)** Prove that

$$
\log_a\frac{x}{y}=\log_a x-\log_a y
$$

[6 marks]

**(ii)** Hence solve the equation

$$
\log_2(x^2-5x+14)-\log_2(x+1)=1
$$

[6 marks]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 19: C3 January 2010 Question 6
**Question ID:** AS1LogarithmsAndExponentialsQ019  
**Source:** Questions PDF p.8  
**Original reference:** C3 January 2010 Question 6  
**Marks:** 10  
**Subtopic:** Exponential cooling model; rate of change

### Question

**6**

The temperature, $H^\circ$ centigrade, of the heating element in an electric heater, $t$ seconds after it has been switched off, is given by

$$
H=10+60e^{-kt}
$$

where $k$ is a constant.

**(i)** Find the initial temperature of the element. [2]

The heating element takes 30 seconds to reach $20^\circ\mathrm{C}$.

**(ii)** Show that $k=0.0597$ to 3 significant figures. [4]

**(iii)** Find the rate at which the temperature of the element is changing after 1 minute. [4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 20: C3 June 2010 Question 8(b)
**Question ID:** AS1LogarithmsAndExponentialsQ020  
**Source:** Questions PDF p.8  
**Original reference:** C3 June 2010 Question 8(b)  
**Marks:** 5  
**Subtopic:** Exponential decay and half-life

### Question

**(b)** The amount of the Carbon-14 isotope remaining in a substance after $t$ years can be written as

$$
N=N_0e^{-kt}
$$

where $N_0$ is the amount of the substance when $t=0$.

The half-life of the Carbon-14 isotope is 5730 years.

**(i)** Find the value of the constant $k$. [3]

**(ii)** Calculate what percentage of the isotope will be left after 1000 years. [2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 21: C3 January 2011 Question 3
**Question ID:** AS1LogarithmsAndExponentialsQ021  
**Source:** Questions PDF p.9  
**Original reference:** C3 January 2011 Question 3  
**Marks:** 10  
**Subtopic:** Log graph transformations; absolute value; solving with ln

### Question

**3**

Fig. 1 below shows the graph of $y=\ln x$.

[VISUAL PLACEHOLDER: AS1LogarithmsAndExponentialsQ021TikZ-001 | Source: Questions PDF p.9 | Insert from AS1_logarithms_and_exponentials_tikz.md | Purpose: recreate Fig. 1 showing $y=\ln x$ and the point $A$]

**(i)** Sketch the graph of

$$
y=\ln(x+2)
$$

showing the vertical asymptote.
Write down the coordinates of $A'$, the image of the point $A$. [3]

**(ii)** Sketch the graph of

$$
y=\lvert \ln(x+2)\rvert
$$

[2]

**(iii)** Find the exact values of $x$ for which

$$
\lvert \ln(x+2)\rvert=2
$$

[5]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 22: C3 June 2011 Question 4
**Question ID:** AS1LogarithmsAndExponentialsQ022  
**Source:** Questions PDF p.9  
**Original reference:** C3 June 2011 Question 4  
**Marks:** 7  
**Subtopic:** Exponential growth model

### Question

**4**

A population of microorganisms grows according to the rule

$$
N=15000e^{0.7t}
$$

where $N$ is the size of the population at time $t$ hours.

**(i)** Find the initial population. [1]

**(ii)** Find how long it will take for the population to treble. [6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 23: C3 January 2013 Question 1
**Question ID:** AS1LogarithmsAndExponentialsQ023  
**Source:** Questions PDF p.10  
**Original reference:** C3 January 2013 Question 1  
**Marks:** 4  
**Subtopic:** Exponential decay model

### Question

**1**

A radioactive substance decays at a rate which can be modelled by the equation

$$
B=5000e^{-0.007t}
$$

where $B$ is the number of particles of the substance remaining at any time $t$ seconds.

Find the value of $t$ when 3000 particles remain. [4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 24: C3 June 2013 Question 5
**Question ID:** AS1LogarithmsAndExponentialsQ024  
**Source:** Questions PDF p.10  
**Original reference:** C3 June 2013 Question 5  
**Marks:** 2  
**Subtopic:** Exponential cooling model evaluation

### Question

**5**

**(a)** The temperature, $C$, of an ingot of cooling metal can be modelled by

$$
C=12+80e^{-\frac{t}{30}}
$$

where $t$ is measured in minutes.

Find $C$ when $t=20$. [2]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 25: C3 June 2015 Question 2
**Question ID:** AS1LogarithmsAndExponentialsQ025  
**Source:** Questions PDF p.10  
**Original reference:** C3 June 2015 Question 2  
**Marks:** 8  
**Subtopic:** Exponential growth model; rate of change

### Question

**2**

A number of goldfish were introduced into a garden pond.
After $t$ years the number of goldfish, $N$, can be modelled by the equation

$$
N=5e^{0.25t}\qquad t\geq 0
$$

**(i)** Find the number of goldfish that were introduced into the garden pond. [1]

**(ii)** Find the number of complete years it would take for the number of goldfish to double. [3]

**(iii)** Evaluate $\dfrac{dN}{dt}$ when $t=4$ and state what this value represents. [4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 26: C3 June 2016 Question 6
**Question ID:** AS1LogarithmsAndExponentialsQ026  
**Source:** Questions PDF p.10  
**Original reference:** C3 June 2016 Question 6  
**Marks:** 6  
**Subtopic:** Exponential decay and half-life

### Question

**6**

A sample of radium loses mass at a rate of 4% per century.

Find, in years, the half-life of radium, i.e. the time taken for its mass to be halved. [6]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 27: C3 June 2018 Question 3(b)
**Question ID:** AS1LogarithmsAndExponentialsQ027  
**Source:** Questions PDF p.11  
**Original reference:** C3 June 2018 Question 3(b)  
**Marks:** 4  
**Subtopic:** Exponential growth model

### Question

**(b)** The number of bacteria in a Petri dish can be modelled by the equation

$$
N=N_0e^{kt}
$$

where $N$ is the number of bacteria present after $t$ seconds and $N_0$ is the initial number of bacteria.

**(i)** If it takes 10 seconds for the number of bacteria to double, find the value of $k$. [4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## Question 28: AS1 (new spec) June 2019 Question 3
**Question ID:** AS1LogarithmsAndExponentialsQ028  
**Source:** Questions PDF p.11  
**Original reference:** AS1 (new spec) June 2019 Question 3  
**Marks:** 10  
**Subtopic:** Log equation; exact exponential equation

### Question

**3**

**(a)** **(i)** Given that

$$
\log_2 a=3
$$

state the value of $a$. [1]

**(ii)** Hence solve the equation

$$
\log_2 x-\log_2(x-1)=3
$$

[5]

**(b)** Find the exact solution of the equation

$$
3e^{2x}-4=0
$$

[4]

### Space for Working

> Working space:
>
> ...
>
> ...
>
> ...

## 6. Solutions and Mark Scheme

### Source File Metadata

```yaml
filename: "AS1_logarithms_and_exponentials_solutions.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions/AS1_logarithms_and_exponentials_solutions.md"
lines: 959
bytes_utf8: 42287
sha256: "71d7252cb7c9e93ad3c87ae742045aa7be22d343cedd4e7e131e870ae5d195e6"
```

### Preserved Source Content: AS1_logarithms_and_exponentials_solutions.md

# Logarithms and Exponentials Solutions and Mark Scheme Pack

**Unit:** CCEA AS1 Pure Mathematics  
**Questions PDF:** AS1_Logarithms_&_Exponentials_questions.pdf  
**Solutions / Mark Scheme PDF:** AS1_Logarithms_&_Exponentials_solutions.pdf  
**Date generated:** 22 May 2026  
**Pack ID:** AS1LogarithmsAndExponentials

---

## 1. Mark Scheme Notation Guide

- `M` usually means a method mark.
- `A` usually means an accuracy mark, although this supplied mark scheme mainly uses `W` rather than `A`.
- `B` usually means an independent mark, but no clear `B` codes appear in this supplied mark scheme.
- `W`, `MW`, or combined codes such as `M1W1` appear throughout this supplied mark scheme. They have been preserved as shown.
- A combined code such as `M1W1` has been treated as 2 marks when entering the “Mark awarded” column.

The exact meaning of each mark code should be interpreted according to the awarding body’s mark scheme conventions.

---

## 2. Question-to-Solution Map

| Pack question | Original reference | Question page | Solution page | Total marks from question | Marks shown in mark scheme | Match confidence | Notes |
|---:|---|---:|---:|---:|---|---|---|
| 1 | C2 January 2010 Question 7 | 2 | 2 | 15 | 15 | High | Content match. |
| 2 | C2 January 2010 Question 8 | 2 | 3 | 15 | 15 | Medium | Question header says January; mark scheme page says June. Content matches. |
| 3 | C2 January 2011 Question 7 | 3 | 4 | 11 | 11 | High | Content match. |
| 4 | C2 June 2011 Question 2 | 3 | 4 | 6 | 6 | High | Solution contains a sketch. |
| 5 | C2 June 2011 Question 8 | 3 | 5 | 8 | 8 | High | Content match. |
| 6 | C2 January 2012 Question 5 | 4 | 5 | 9 | 9 | High | Question includes Fig. 3. |
| 7 | C2 June 2012 Question 8 | 4 | 6 | 11 | 11 | High | Content match. |
| 8 | C2 January 2013 Question 4 | 5 | 7 | 13 | 13 | Medium | Question header says Question 4; question body and mark scheme use Question 8. |
| 9 | C2 June 2013 Question 8 | 5 | 8 | 11 | 11 | High | Content match. |
| 10 | C2 January 2014 Question 2(b) | 5 | 8 | 4 | 4 shown for supplied part; 7 original total shown | High | Only part (b) is supplied; mark scheme total shown belongs to original full question. |
| 11 | C2 January 2014 Question 8 | 5 | 9 | 9 | 9 | High | Content match. |
| 12 | C2 June 2014 Question 8 | 6 | 9 | 10 | 10 | High | Content match. |
| 13 | C2 June 2015 Question 8 | 6 | 10 | 12 | 12 | High | Solution contains a sketch. |
| 14 | C2 June 2016 Question 6 | 6 | 10 | 11 | 11 | High | Solution continues onto mark scheme p.11. |
| 15 | C2 June 2017 Question 4 | 7 | 11 | 4 | 4 | High | Content match. |
| 16 | C2 June 2017 Question 7 | 7 | 12 | 12 | 12 | High | Content match. |
| 17 | C2 June 2018 Question 8 | 7 | 13 | 15 | 15 | High | Content match. |
| 18 | C2 June 2019 Question 7 | 8 | 14 | 12 | 12 | High | Content match. |
| 19 | C3 January 2010 Question 6 | 8 | 14 | 10 | 10 | High | Old C3 item includes differentiating an exponential model. |
| 20 | C3 June 2010 Question 8(b) | 8 | 15 | 5 | 5 for supplied part; 12 original total shown | Medium | Question header says Q8(b); mark scheme header says Q6(b). Content matches. |
| 21 | C3 January 2011 Question 3 | 9 | 16 | 10 | 10 | High | Question includes Fig. 1. |
| 22 | C3 June 2011 Question 4 | 9 | 17 | 7 | 7 | High | Content match. |
| 23 | C3 January 2013 Question 1 | 10 | 17 | 4 | 4 | High | Content match. |
| 24 | C3 June 2013 Question 5 | 10 | 17 | 2 | 2 | High | Only part (a) is supplied. |
| 25 | C3 June 2015 Question 2 | 10 | 17 | 8 | 8 | High | Old C3 item includes differentiating an exponential model. |
| 26 | C3 June 2016 Question 6 | 10 | 18 | 6 | 6 | High | Content match. |
| 27 | C3 June 2018 Question 3(b) | 11 | 18 | 4 | 4 for supplied part; 10 shown including unmatched part (ii) | Medium | Questions PDF shows only part (i); mark scheme also includes part (ii). |
| 28 | AS1 (new spec) June 2019 Question 3 | 11 | 19 | 10 | 10 | High | Content match. |

---

## 3. Fully Worked Mark Scheme Solutions

## Solution to Question 1: C2 January 2010 Question 7

**Question ID:** AS1LogarithmsAndExponentialsQ001  
**Source:** Mark Scheme PDF p.2  
**Original reference:** C2 January 2010 Question 7  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 1  
**Marks available:** 15  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\log_{25}9=\dfrac{\log_5 9}{\log_5 25}$ | M1W1 | 2 | Uses change of base. |
| 2 | $=\dfrac12\log_5 9$ | W1 | 1 | Simplifies the base conversion. |
| 3 | $\log_5 15+\log_5 4-\log_5 3$ | M1W1 | 2 | Uses the power law. |
| 4 | $\log_5\dfrac{15\times4}{3}$ | M2 | 2 | Combines logs using product and quotient laws. |
| 5 | $\log_5 20$ | W1 | 1 | Final single logarithm. |
| 6 | $(b)(i)\quad P(1+0.05)^t$ | MW2 | 2 | Correct compound growth model. |
| 7 | $(b)(ii)\quad P(1+0.05)^t=\dfrac32P$ | MW1 | 1 | Sets up 50% increase. |
| 8 | $\log(1+0.05)^t=\log\dfrac32$ | M1 | 1 | Takes logarithms. |
| 9 | $t\log(1+0.05)=\log\dfrac32$ | M1W1 | 2 | Uses the power law. |
| 10 | $t=\dfrac{\log1.5}{\log1.05}=8.31\text{ years}$ | W1 | 1 | Final time. |

### Final Answer

`(a) \log_5 20`; `(b)(i) P(1.05)^t`; `(b)(ii) 8.31 years`.

### What the Examiner Wanted

The key marks came from converting the base-25 logarithm, combining logarithms into one term, setting up compound growth correctly, and solving the exponential equation with logarithms.

## Solution to Question 2: C2 January 2010 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ002  
**Source:** Mark Scheme PDF p.3  
**Original reference:** C2 January 2010 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 2  
**Marks available:** 15  
**Match confidence:** Medium


**Note:** The questions PDF labels this as C2 January 2010 Question 8, while the mark scheme page labels the matching solution as C2 June 2010 Question 8.

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)\quad \log(3^{2x})=\log7$ | M1 | 1 | Takes logs of both sides. |
| 2 | $2x\log3=\log7$ | M1W1 | 2 | Uses the power law. |
| 3 | $x=\dfrac{\log7}{2\log3}=0.886$ | W1 | 1 | Final value. |
| 4 | $(b)\quad \log x+2\log x+6\log x=1$ | M1W1 | 2 | Uses the power law. |
| 5 | $\log x=\dfrac19$ | MW1 | 1 | Collects like log terms. |
| 6 | $x=1.29$ | M1W1 | 2 | Converts from logarithmic form. |
| 7 | Alternative: $\log x+\log x^2+\log x^6=1$ | M1W1 | 2 | Combines through powers. |
| 8 | $\log x^9=1$ | MW1 | 1 | Combines the logarithms. |
| 9 | $x^9=10$, so $x=1.29$ | M1W1 | 2 | Equivalent route to the answer. |
| 10 | $(c)\quad \log_2\dfrac{x}{y}=6$ | M1W1 | 2 | Uses the quotient law. |
| 11 | $2^6=\dfrac{x}{y}$ | MW1 | 1 | Converts to exponential form. |
| 12 | $2^3\times2^3=\dfrac{x}{y}$ | M1 | 1 | Splits the power. |
| 13 | $\dfrac{1}{z^2}=\dfrac{x}{y}$ | MW1 | 1 | Uses the given relation. |
| 14 | $y=xz^2$ | W1 | 1 | Required result. |

### Final Answer

`(a) x=0.886`; `(b) x=1.29`; `(c) y=xz^2`.

### What the Examiner Wanted

The mark scheme rewards correct use of logarithms, conversion between log and exponential form, and careful algebraic rearrangement.

## Solution to Question 3: C2 January 2011 Question 7

**Question ID:** AS1LogarithmsAndExponentialsQ003  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 January 2011 Question 7  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 3  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)(i)\quad \log_3 8-\log_3 x^3$ | M2 | 2 | Uses the power law. |
| 2 | $\log_3\dfrac{8}{x^3}$ | MW1 | 1 | Combines into one logarithm. |
| 3 | $(a)(ii)\quad \log_3\dfrac{8}{x^3}=3$ | M1 | 1 | Uses the result from part (i). |
| 4 | $3^3=\dfrac{8}{x^3}$ | M1W1 | 2 | Converts to exponential form. |
| 5 | $x^3=\dfrac{8}{27}$ |  | 0 | Rearranges. |
| 6 | $x=\dfrac23$ | MW1 | 1 | Final solution. |
| 7 | $(b)\quad A=(1.12)^nA_0=17A_0$ | M1W1 | 2 | Sets up growth model. |
| 8 | $n\log1.12=\log17$ | M1 | 1 | Takes logs. |
| 9 | $n=25\text{ days}$ | W1 | 1 | Final number of days. |

### Final Answer

`(a)(i) \log_3(8/x^3)`; `(a)(ii) x=2/3`; `(b) 25 days`.

### What the Examiner Wanted

The important features are applying log laws before solving and using logarithms rather than trial and improvement for the growth model.

## Solution to Question 4: C2 June 2011 Question 2

**Question ID:** AS1LogarithmsAndExponentialsQ004  
**Source:** Mark Scheme PDF p.4  
**Original reference:** C2 June 2011 Question 2  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 4  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ004TikZ-001 | See solution diagram in AS1_logarithms_and_exponentials_tikz.md | Purpose: shows the two exponential sketches required in part (i)]

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)$ Correct sketches of $y=3^x$ and $y=3^{x+2}$ on the same axes. | MW1 | 1 | Shows the increasing exponential shapes. |
| 2 | Labels/features include $y=3^x$, $y=3^{x+2}$, intercepts $1$ and $9$, and the left shift of 2 units. | M1W1 | 2 | Key sketch features. |
| 3 | $(ii)\quad (x+2)\log3=\log2$ | M2 | 2 | Takes logs and uses the power law. |
| 4 | $x=-1.37$ | W1 | 1 | Final solution. |
| 5 | Alternative: $\log_3 2=x+2$, so $0.63=x+2$ and $x=-1.37$. | M2 W1 | 3 | Equivalent method. |

### Final Answer

`(i)` See sketch; `(ii) x=-1.37`.

### What the Examiner Wanted

The sketch marks require the relative horizontal shift and key intercept behaviour. The equation marks require converting the exponential equation using logarithms.

## Solution to Question 5: C2 June 2011 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ005  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 June 2011 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 5  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $1+\log_5 x^2=\log_5(16x-3)$ | M1W1 | 2 | Uses the power law. |
| 2 | $1=\log_5(16x-3)-\log_5x^2=\log_5\left(\dfrac{16x-3}{x^2}\right)$ | M1W1 | 2 | Uses quotient law. |
| 3 | $5=\dfrac{16x-3}{x^2}$ | M1W1 | 2 | Converts to exponential form. |
| 4 | $5x^2-16x+3=0$ |  | 0 | Forms a quadratic. |
| 5 | $(5x-1)(x-3)=0$ | M1 | 1 | Factorises. |
| 6 | $x=\dfrac15\quad\text{or}\quad x=3$ | W1 | 1 | Final values. |

### Final Answer

`x=1/5` or `x=3`.

### What the Examiner Wanted

The examiner wanted log laws used to form a quadratic, followed by valid solutions satisfying the logarithm domains.

## Solution to Question 6: C2 January 2012 Question 5

**Question ID:** AS1LogarithmsAndExponentialsQ006  
**Source:** Mark Scheme PDF p.5  
**Original reference:** C2 January 2012 Question 5  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 6  
**Marks available:** 9  
**Match confidence:** High

### Official Mark Scheme Solution

[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ006TikZ-001 | See question diagram in AS1_logarithms_and_exponentials_tikz.md | Purpose: supports finding the intercepts in part (a)]

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)\quad A=(0.792,0)$ | M1W1 | 2 | Finds the $x$-intercept. |
| 2 | $B=(0,-2)$ | MW1 | 1 | Finds the $y$-intercept. |
| 3 | $(b)\quad \log_2\{x(17-2x)\}=3$ | M1W1 | 2 | Combines logarithms. |
| 4 | $2^3=17x-2x^2$ | M1W1 | 2 | Converts to exponential form. |
| 5 | $2x^2-17x+8=0$, so $(2x-1)(x-8)=0$ | M1 | 1 | Forms and factorises a quadratic. |
| 6 | $x=\dfrac12\quad\text{or}\quad x=8$ | W1 | 1 | Final values. |

### Final Answer

`A=(0.792,0)`, `B=(0,-2)`; `x=1/2` or `x=8`.

### What the Examiner Wanted

Part (a) uses intercepts of an exponential graph. Part (b) rewards combining logs first, then solving the resulting quadratic.

## Solution to Question 7: C2 June 2012 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ007  
**Source:** Mark Scheme PDF p.6  
**Original reference:** C2 June 2012 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 7  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad y=\log_a x$ | M1 | 1 | Starts with a definition. |
| 2 | $a^y=x$ | MW1 | 1 | Converts to exponential form. |
| 3 | $\log_b a^y=\log_b x$ | MW1 | 1 | Takes logs to base $b$. |
| 4 | $y\log_b a=\log_b x$ | MW1 | 1 | Uses the power law. |
| 5 | $y=\log_a x=\dfrac{\log_b x}{\log_b a}$ | MW1 | 1 | Proves change of base. |
| 6 | $(ii)\quad \log_4x+\dfrac{\log_416}{\log_4x}=3$ | M1W1 | 2 | Uses change of base. |
| 7 | $(\log_4x)^2+2=3\log_4x$ | MW1 | 1 | Forms a quadratic in $\log_4x$. |
| 8 | $(\log_4x)^2-3\log_4x+2=0$ |  | 0 | Rearranges. |
| 9 | $(\log_4x-2)(\log_4x-1)=0$ |  | 0 | Factorises. |
| 10 | $\log_4x=2\quad\text{or}\quad\log_4x=1$ | MW2 | 2 | Solves the log quadratic. |
| 11 | $x=16\quad\text{or}\quad x=4$ | MW1 | 1 | Final values. |

### Final Answer

`(i)` proved; `(ii) x=16` or `x=4`.

### What the Examiner Wanted

The key evidence is a clear proof of change of base and a quadratic substitution in the logarithmic equation.

## Solution to Question 8: C2 January 2013 Question 4

**Question ID:** AS1LogarithmsAndExponentialsQ008  
**Source:** Mark Scheme PDF p.7  
**Original reference:** C2 January 2013 Question 4  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 8  
**Marks available:** 13  
**Match confidence:** Medium


**Note:** The questions PDF heading says C2 January 2013 Question 4, but the question body and supplied mark scheme use Question 8.

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)\quad 3L=L(1.15)^t$ | MW1 | 1 | Sets cost to treble. |
| 2 | $3=(1.15)^t$ |  | 0 | Cancels $L$. |
| 3 | $\log3=\log(1.15)^t$ | M1 | 1 | Takes logs. |
| 4 | $\log3=t\log(1.15)$ | MW1 | 1 | Uses power law. |
| 5 | $t=\dfrac{\log3}{\log1.15}=7.86\text{ yrs}$ | MW1 | 1 | Finds continuous value. |
| 6 | After 8 years. | W1 | 1 | Rounds up to complete years. |
| 7 | $(b)\quad \log_yx=3$, so $y^3=x$ | M1W1 | 2 | Converts to exponential form. |
| 8 | $\log_3x-\log_3y=5$, so $\log_3\dfrac{x}{y}=5$ | M1W1 | 2 | Uses quotient law. |
| 9 | $\log_3\dfrac{y^3}{y}=5$, so $\log_3y^2=5$ | MW1 | 1 | Substitutes $x=y^3$. |
| 10 | $y^2=3^5$ | MW1 | 1 | Converts to exponential form. |
| 11 | $y=3^{5/2}$ | MW1 | 1 | Exact value of $y$. |
| 12 | $x=3^{15/2}$ | MW1 | 1 | Exact value of $x$. |

### Alternative Method from the Mark Scheme

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\log_yx=3$, so $y^3=x$ | M1W1 | 2 | Converts to exponential form. |
| 2 | $\log_3y^3-\log_3y=5$ | MW1 | 1 | Substitutes into the second equation. |
| 3 | $3\log_3y-\log_3y=5$ | M1W1 | 2 | Uses the power law. |
| 4 | $2\log_3y=5$ |  | 0 | Collects terms. |
| 5 | $\log_3y=\dfrac52$ | MW1 | 1 | Solves for the log. |
| 6 | $y=3^{5/2}$ | MW1 | 1 | Exact value of $y$. |
| 7 | $x=3^{15/2}$ | MW1 | 1 | Exact value of $x$. |

### Final Answer

`(a)` after 8 years; `(b) x=3^{15/2}`, `y=3^{5/2}`.

### What the Examiner Wanted

The examiner wanted logarithmic equations converted and manipulated exactly. In part (a), the word complete means the decimal time must be rounded up.

## Solution to Question 9: C2 June 2013 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ009  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 June 2013 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 9  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad \text{Let }\log_ax=b\Rightarrow a^b=x$ | M1W1 | 2 | Defines one logarithm. |
| 2 | $\text{and }\log_ay=c\Rightarrow a^c=y$ | MW1 | 1 | Defines the second logarithm. |
| 3 | $\log_a(xy)=\log_a(a^ba^c)$ | M1 | 1 | Substitutes using exponential form. |
| 4 | $=\log_a a^{b+c}$ | MW1 | 1 | Uses index law. |
| 5 | $=b+c=\log_ax+\log_ay$ | MW1 | 1 | Completes the proof. |
| 6 | $(ii)\quad \log_a3^2+\log_a4^3=5$ | M1W1 | 2 | Uses the power law. |
| 7 | $\log_a(9\times64)=5$ | M1W1 | 2 | Uses the product law. |
| 8 | $a^5=576$ |  | 0 | Converts to exponential form. |
| 9 | $a=3.57$ | MW1 | 1 | Final value. |

### Final Answer

`(i)` proved; `(ii) a=3.57`.

### What the Examiner Wanted

The proof needs definitions of logarithms and index laws. The equation then uses the proved product law and the power law.

## Solution to Question 10: C2 January 2014 Question 2(b)

**Question ID:** AS1LogarithmsAndExponentialsQ010  
**Source:** Mark Scheme PDF p.8  
**Original reference:** C2 January 2014 Question 2(b)  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 10  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ010TikZ-001 | See solution diagram in AS1_logarithms_and_exponentials_tikz.md | Purpose: shows the decreasing sketch of $y=4^{-x}$]

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(b)(i)$ Correct decreasing exponential sketch of $y=4^{-x}$ through $(0,1)$ with horizontal asymptote $y=0$. | M1W1 | 2 | Sketch features. |
| 2 | $(b)(ii)\quad \log(4^{-x})=\log10$ | M1 | 1 | Takes logs. |
| 3 | $x=-1.66$ | W1 | 1 | Final solution. |

### Final Answer

`(i)` See sketch; `(ii) x=-1.66`.

### What the Examiner Wanted

Marks come from the correct decreasing exponential shape and from using logarithms to solve the equation.

## Solution to Question 11: C2 January 2014 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ011  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 January 2014 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 11  
**Marks available:** 9  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $3\left(\dfrac{\log_xx}{\log_x8}\right)=5+2\log_x8$ | M1W1 | 2 | Uses change of base. |
| 2 | $\dfrac{3}{\log_x8}=5+2\log_x8$ | MW1 | 1 | Uses $\log_xx=1$. |
| 3 | $3=5\log_x8+2(\log_x8)^2$ | M1 | 1 | Forms a quadratic. |
| 4 | Let $Y=\log_x8$, then $2Y^2+5Y-3=0$ | W1 | 1 | Correct quadratic. |
| 5 | $Y=\dfrac12\quad\text{or}\quad Y=-3$ | MW2 | 2 | Solves the quadratic. |
| 6 | $\log_x8=\dfrac12\quad\text{or}\quad\log_x8=-3$ |  | 0 | Substitutes back. |
| 7 | $x=64\quad\text{or}\quad x=\dfrac12$ | MW2 | 2 | Final values. |

### Final Answer

`x=64` or `x=1/2`.

### What the Examiner Wanted

The examiner wanted change of base, a quadratic in $\log_x8$, and conversion back to values of $x$.

## Solution to Question 12: C2 June 2014 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ012  
**Source:** Mark Scheme PDF p.9  
**Original reference:** C2 June 2014 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 12  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $\log_4xy=2$ | M1W1 | 2 | Combines the first equation. |
| 2 | $\log_9\dfrac{x}{y}=-\dfrac12$ | M1W1 | 2 | Combines the second equation. |
| 3 | $xy=16$ | MW1 | 1 | Converts first equation. |
| 4 | $\dfrac{x}{y}=\dfrac13$ | MW1 | 1 | Converts second equation. |
| 5 | $x=\dfrac{y}{3}$ | M1 | 1 | Rearranges ratio. |
| 6 | $\dfrac{y^2}{3}=16$ | W1 | 1 | Substitutes into $xy=16$. |
| 7 | $y=4\sqrt3$ | MW1 | 1 | Solves for positive $y$. |
| 8 | $x=\dfrac{4\sqrt3}{3}$ | W1 | 1 | Finds $x$. |

### Final Answer

`x=4\sqrt3/3`, `y=4\sqrt3`.

### What the Examiner Wanted

The solution relies on combining logarithms, converting both equations to algebraic equations, and respecting positive log domains.

## Solution to Question 13: C2 June 2015 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ013  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2015 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 13  
**Marks available:** 12  
**Match confidence:** High

### Official Mark Scheme Solution

[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ013TikZ-001 | See solution diagram in AS1_logarithms_and_exponentials_tikz.md | Purpose: shows the sketch and intercepts of $y=2^x-5$]

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)$ Correct exponential sketch of $y=2^x-5$. | MW1 | 1 | Sketch shape. |
| 2 | $(0,-4)$ | MW1 | 1 | Correct $y$-intercept. |
| 3 | $(2.32,0)$ or $(\log_2 5,0)$ | MW1 | 1 | Correct $x$-intercept. |
| 4 | $(b)(i)\quad 3k$ | MW1 | 1 | Uses power law. |
| 5 | $(b)(ii)\quad \dfrac13k-2$ | M1W1 | 2 | Uses root and quotient laws. |
| 6 | $(b)(iii)\quad \dfrac{\log_4x}{\log_42}=2k$ | M1W1 | 2 | Uses change of base. |
| 7 | $(b)(iv)\quad 3k+\dfrac13k-2=2k$ | M1 | 1 | Uses earlier parts. |
| 8 | $k=1.5$ | W1 | 1 | Solves for $k$. |
| 9 | $\log_4x=\dfrac32$ | M1 | 1 | Substitutes back. |
| 10 | $x=8$ | W1 | 1 | Final value. |

### Final Answer

`(a)` See sketch; `(b)(i) 3k`; `(b)(ii) k/3-2`; `(b)(iii) 2k`; `(b)(iv) x=8`.

### What the Examiner Wanted

The marks focus on a correctly positioned exponential graph and using log laws consistently before solving the final equation.

## Solution to Question 14: C2 June 2016 Question 6

**Question ID:** AS1LogarithmsAndExponentialsQ014  
**Source:** Mark Scheme PDF p.10  
**Original reference:** C2 June 2016 Question 6  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 14  
**Marks available:** 11  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)\quad 2\log_2a+\dfrac{\log_2(4a^2)}{2}-3\log_2(2a)$ | M1W1 | 2 | Changes the base-4 logarithm. |
| 2 | $\log_2a^2+\log_2(4a^2)^{1/2}-\log_2(2a)^3$ | M2 | 2 | Uses the power law. |
| 3 | $=\log_2a^2+\log_22a-\log_28a^3$ |  | 0 | Simplifies powers. |
| 4 | $=\log_2\dfrac{a^2\times2a}{8a^3}$ | MW1 | 1 | Combines logs. |
| 5 | $=\log_2\dfrac14$ |  | 0 | Simplifies. |
| 6 | $=-2$ | MW1 | 1 | Final value. |
| 7 | $(b)\quad \text{Let }y=2^x$ |  | 0 | Substitution. |
| 8 | $3y^2+2y-1=0$ | M1 | 1 | Forms quadratic. |
| 9 | $(3y-1)(y+1)=0$ |  | 0 | Factorises. |
| 10 | $y=\dfrac13\quad\text{or}\quad y=-1$ | MW1 | 1 | Solves quadratic. |
| 11 | $2^x=\dfrac13$; $2^x=-1$ gives no solution. | M1 | 1 | Rejects impossible exponential value. |
| 12 | $x=\dfrac{\log(1/3)}{\log2}$ | M1 | 1 | Takes logs. |
| 13 | $x=-1.58\text{ (3 s.f.)}$ | W1 | 1 | Final value. |

### Final Answer

`(a) -2`; `(b) x=-1.58` to 3 significant figures.

### What the Examiner Wanted

Part (a) tests exact log-law simplification. Part (b) tests reducing an exponential equation to a quadratic and rejecting the impossible negative exponential value.

## Solution to Question 15: C2 June 2017 Question 4

**Question ID:** AS1LogarithmsAndExponentialsQ015  
**Source:** Mark Scheme PDF p.11  
**Original reference:** C2 June 2017 Question 4  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 15  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)(i)\quad I=1000(1.08)^n$ | MW1 | 1 | Correct compound interest model. |
| 2 | $(a)(ii)\quad 1000(1.08)^n>2000$ | M1 | 1 | Sets up inequality. |
| 3 | $(1.08)^n>2$ |  | 0 | Simplifies. |
| 4 | $n>\dfrac{\log2}{\log1.08}$ | MW1 | 1 | Solves with logarithms. |
| 5 | $n>9.01\text{ yrs}$, therefore after 10 years. | W1 | 1 | Rounds to whole years. |

### Final Answer

`I=1000(1.08)^n`; the investment exceeds £2000 after 10 years.

### What the Examiner Wanted

The key point is to solve an exponential inequality and round up because the investment must exceed £2000.

## Solution to Question 16: C2 June 2017 Question 7

**Question ID:** AS1LogarithmsAndExponentialsQ016  
**Source:** Mark Scheme PDF p.12  
**Original reference:** C2 June 2017 Question 7  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 16  
**Marks available:** 12  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad \text{Let }\log_ax=y$ | M1 | 1 | Defines the logarithm. |
| 2 | $a^y=x$ | MW1 | 1 | Converts to exponential form. |
| 3 | $\text{L.H.S. }\log_ax^n=\log_a(a^y)^n$ | M1 | 1 | Substitutes. |
| 4 | $=\log_aa^{yn}$ | W1 | 1 | Uses index law. |
| 5 | $=yn$ | MW1 | 1 | Uses definition. |
| 6 | $\therefore \log_ax^n=n\log_ax$ | MW1 | 1 | Completes proof. |
| 7 | $(ii)\quad \log_ax=\log_{a^2}(x+6)$ |  | 0 | Given equation. |
| 8 | $=\dfrac{\log_a(x+6)}{\log_aa^2}$ | M1 | 1 | Uses change of base. |
| 9 | $=\dfrac{\log_a(x+6)}{2}$ | MW1 | 1 | Simplifies denominator. |
| 10 | $2\log_ax=\log_a(x+6)$ |  | 0 | Rearranges. |
| 11 | $\log_ax^2=\log_a(x+6)$ | M1 | 1 | Uses power law. |
| 12 | $x^2=x+6$ | MW1 | 1 | Equates arguments. |
| 13 | $x^2-x-6=0$, so $(x-3)(x+2)=0$ |  | 0 | Solves quadratic. |
| 14 | $x=3\text{ or }-2\text{ (not possible)}$ | MW1 | 1 | Applies log domain. |
| 15 | $x=3$ | W1 | 1 | Final value. |

### Final Answer

`(i)` proved; `(ii) x=3`.

### What the Examiner Wanted

The proof uses the definition of logarithm. The equation uses change of base and the power law, then rejects the invalid logarithm argument.

## Solution to Question 17: C2 June 2018 Question 8

**Question ID:** AS1LogarithmsAndExponentialsQ017  
**Source:** Mark Scheme PDF p.13  
**Original reference:** C2 June 2018 Question 8  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 17  
**Marks available:** 15  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)\quad 5^{x-1}=3^3\times3^{2x}$ | M1W1 | 2 | Clears the denominator and uses $27=3^3$. |
| 2 | $5^{x-1}=3^{3+2x}$ | M1W1 | 2 | Combines powers of 3. |
| 3 | $\log(5^{x-1})=\log(3^{3+2x})$ | M1 | 1 | Takes logarithms. |
| 4 | $(x-1)\log5=(3+2x)\log3$ | M1W1 | 2 | Uses the power law. |
| 5 | $x\log5-\log5=3\log3+2x\log3$ |  | 0 | Expands. |
| 6 | $x[\log5-2\log3]=3\log3+\log5$ |  | 0 | Collects $x$ terms. |
| 7 | $x=\dfrac{3\log3+\log5}{\log5-2\log3}$ |  | 0 | Rearranges. |
| 8 | $x=-8.35$ | W1 | 1 | Final value. |
| 9 | $(b)\quad \log(2x+3)-\log(4x+1)=\log(x+3)-\log(2x+3)$ | M2W1 | 3 | Uses AP condition. |
| 10 | $\log\left(\dfrac{2x+3}{4x+1}\right)=\log\left(\dfrac{x+3}{2x+3}\right)$ | M1W1 | 2 | Uses quotient law. |
| 11 | $\dfrac{2x+3}{4x+1}=\dfrac{x+3}{2x+3}$ | M1 | 1 | Equates arguments. |
| 12 | $(2x+3)^2=(x+3)(4x+1)$ |  | 0 | Cross-multiplies. |
| 13 | $4x^2+12x+9=4x^2+13x+3$ |  | 0 | Expands. |
| 14 | $x=6$ | W1 | 1 | Final value. |

### Final Answer

`(a) x=-8.35`; `(b) x=6`.

### What the Examiner Wanted

Part (a) rewards correct logarithmic solving with unlike bases. Part (b) rewards translating the arithmetic progression condition into an equation of logarithms.

## Solution to Question 18: C2 June 2019 Question 7

**Question ID:** AS1LogarithmsAndExponentialsQ018  
**Source:** Mark Scheme PDF p.14  
**Original reference:** C2 June 2019 Question 7  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 18  
**Marks available:** 12  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad p=\log_ax\quad\text{and}\quad q=\log_ay$ | M1 | 1 | Defines two logarithms. |
| 2 | $a^p=x\quad\text{and}\quad a^q=y$ | MW1 | 1 | Converts to exponential form. |
| 3 | $\dfrac{x}{y}=\dfrac{a^p}{a^q}$ | M1 | 1 | Substitutes. |
| 4 | $\dfrac{x}{y}=a^{p-q}$ | MW1 | 1 | Uses index law. |
| 5 | $\log_a\dfrac{x}{y}=p-q$ | M1 | 1 | Converts back to log form. |
| 6 | $\log_a\dfrac{x}{y}=\log_ax-\log_ay$ | MW1 | 1 | Completes proof. |
| 7 | $(ii)\quad \log_2\left(\dfrac{x^2-5x+14}{x+1}\right)=1$ | M1W1 | 2 | Uses quotient law. |
| 8 | $\dfrac{x^2-5x+14}{x+1}=2$ | M1W1 | 2 | Converts to exponential form. |
| 9 | $x^2-5x+14=2x+2$ |  | 0 | Rearranges. |
| 10 | $x^2-7x+12=0$ | W1 | 1 | Forms quadratic. |
| 11 | $(x-3)(x-4)=0$ |  | 0 | Factorises. |
| 12 | $x=3,\ x=4$ | MW1 | 1 | Final values. |

### Final Answer

`(i)` proved; `(ii) x=3` or `x=4`.

### What the Examiner Wanted

The quotient law proof underpins the equation. Both final answers satisfy the logarithm domains.

## Solution to Question 19: C3 January 2010 Question 6

**Question ID:** AS1LogarithmsAndExponentialsQ019  
**Source:** Mark Scheme PDF p.14  
**Original reference:** C3 January 2010 Question 6  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 19  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad H=10+60e^0=70^\circ$ | M1W1 | 2 | Uses $t=0$. |
| 2 | $(ii)\quad 20=10+60e^{-30k}$ | M1 | 1 | Substitutes $t=30$ and $H=20$. |
| 3 | $e^{-30k}=\dfrac16$ |  | 0 | Rearranges. |
| 4 | $k=-\dfrac{1}{30}\ln\dfrac16$ | M1W1 | 2 | Uses natural logs. |
| 5 | $k=0.0597253=0.0597$ | W1 | 1 | Shows the required value. |
| 6 | $(iii)\quad \dfrac{dH}{dt}=-60ke^{-kt}$ | M1W1 | 2 | Differentiates the model. |
| 7 | $t=60,\quad \dfrac{dH}{dt}=-0.099542^\circ/\text{s}$ | M1 | 1 | Substitutes one minute. |
| 8 | $=-0.0995^\circ/\text{s}$ | W1 | 1 | Final rate. |

### Final Answer

`(i) 70°C`; `(ii) k=0.0597`; `(iii) -0.0995°C/s`.

### What the Examiner Wanted

This old C3 question uses exponential modelling and differentiation. The negative rate indicates cooling.

## Solution to Question 20: C3 June 2010 Question 8(b)

**Question ID:** AS1LogarithmsAndExponentialsQ020  
**Source:** Mark Scheme PDF p.15  
**Original reference:** C3 June 2010 Question 8(b)  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 20  
**Marks available:** 5  
**Match confidence:** Medium


**Note:** The questions PDF labels this as C3 June 2010 Question 8(b), while the matching mark scheme page is headed C3 June 2010 Question 6(b).

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(b)(i)\quad \dfrac12N_0=N_0e^{-k5730}$ | M1 | 1 | Uses the half-life condition. |
| 2 | $\ln\dfrac12=\ln e^{-5730k}$ | M1 | 1 | Takes natural logs. |
| 3 | $k=\dfrac{\ln2}{5730}=0.000121$ | MW1 | 1 | Final value of $k$. |
| 4 | $(ii)\quad N_0e^{-1000\left(\frac{\ln2}{5730}\right)}$ | MW1 | 1 | Substitutes $t=1000$. |
| 5 | $=88.6\%$ | W1 | 1 | Final percentage. |

### Final Answer

`k=\ln2/5730=0.000121`; `88.6%` left after 1000 years.

### What the Examiner Wanted

The examiner wanted the half-life condition used to find $k$, then the same decay model applied to 1000 years.

## Solution to Question 21: C3 January 2011 Question 3

**Question ID:** AS1LogarithmsAndExponentialsQ021  
**Source:** Mark Scheme PDF p.16  
**Original reference:** C3 January 2011 Question 3  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 21  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ021TikZ-002 | See solution diagram in AS1_logarithms_and_exponentials_tikz.md | Purpose: sketch of $y=\ln(x+2)$ for part (i)]

[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ021TikZ-003 | See solution diagram in AS1_logarithms_and_exponentials_tikz.md | Purpose: sketch of $y=\lvert\ln(x+2)\rvert$ for part (ii)]

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)$ Sketch of $y=\ln(x+2)$ with vertical asymptote $x=-2$. | MW1 | 1 | Correct asymptote. |
| 2 | Correct translated logarithmic curve. | MW1 | 1 | Horizontal shift left 2. |
| 3 | $A\prime=(-1,0)$ | W1 | 1 | Image of $A$. |
| 4 | $(ii)$ Correct sketch of $y=\lvert\ln(x+2)\rvert$. | M1 | 1 | Reflects negative branch. |
| 5 | Curve has minimum at $A\prime=(-1,0)$. | W1 | 1 | Key point retained. |
| 6 | $(iii)\quad \ln(x+2)=2\quad\text{or}\quad \ln(x+2)=-2$ | M1 W2 | 3 | Uses modulus definition. |
| 7 | $x=e^2-2\quad\text{or}\quad x=e^{-2}-2$ | MW2 | 2 | Exact solutions. |

### Final Answer

`A'=(-1,0)`; exact solutions `x=e^2-2` or `x=e^{-2}-2`.

### What the Examiner Wanted

The sketch marks depend on the horizontal translation and modulus reflection. The equation marks come from considering both positive and negative cases.

## Solution to Question 22: C3 June 2011 Question 4

**Question ID:** AS1LogarithmsAndExponentialsQ022  
**Source:** Mark Scheme PDF p.17  
**Original reference:** C3 June 2011 Question 4  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 22  
**Marks available:** 7  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad t=0,\quad N=15000$ | MW1 | 1 | Initial population. |
| 2 | $(ii)\quad 45000=15000e^{0.7t}$ | M1W1 | 2 | Sets population to treble. |
| 3 | $3=e^{0.7t}$ | M1W1 | 2 | Simplifies. |
| 4 | $t=\dfrac{\ln3}{0.7}$ | MW1 | 1 | Solves with natural logs. |
| 5 | $=1.57\text{ hours}$ | W1 | 1 | Final time. |

### Final Answer

`15000`; `1.57 hours`.

### What the Examiner Wanted

The solution interprets the model at $t=0$ and then uses logarithms to solve the trebling equation.

## Solution to Question 23: C3 January 2013 Question 1

**Question ID:** AS1LogarithmsAndExponentialsQ023  
**Source:** Mark Scheme PDF p.17  
**Original reference:** C3 January 2013 Question 1  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 23  
**Marks available:** 4  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $3000=5000e^{-0.007t}$ | M1 | 1 | Substitutes $B=3000$. |
| 2 | $0.6=e^{-0.007t}$ | W1 | 1 | Simplifies. |
| 3 | $\ln0.6=-0.007t$ | M1 | 1 | Takes natural logs. |
| 4 | $t=73.0\text{ sec}$ | W1 | 1 | Final time. |

### Final Answer

`t=73.0 seconds`.

### What the Examiner Wanted

The marks come from substituting into the exponential decay model and solving with natural logarithms.

## Solution to Question 24: C3 June 2013 Question 5

**Question ID:** AS1LogarithmsAndExponentialsQ024  
**Source:** Mark Scheme PDF p.17  
**Original reference:** C3 June 2013 Question 5  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 24  
**Marks available:** 2  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $12+80e^{-20/30}$ | M1 | 1 | Substitutes $t=20$. |
| 2 | $C=53.0734=53.1^\circ$ | W1 | 1 | Final temperature. |

### Final Answer

`C=53.1°`.

### What the Examiner Wanted

This is a direct substitution into the exponential cooling model.

## Solution to Question 25: C3 June 2015 Question 2

**Question ID:** AS1LogarithmsAndExponentialsQ025  
**Source:** Mark Scheme PDF p.17  
**Original reference:** C3 June 2015 Question 2  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 25  
**Marks available:** 8  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(i)\quad \text{When }t=0,\ N_0=5$ | MW1 | 1 | Initial number. |
| 2 | $(ii)\quad 2N_0=5e^{0.25t}$ | MW1 | 1 | Sets the number to double. |
| 3 | $2=e^{0.25t}$ |  | 0 | Uses $N_0=5$. |
| 4 | $\ln2=0.25t$ | M1 | 1 | Takes natural logs. |
| 5 | $4\ln2=t=2.77258\ldots$ |  | 0 | Solves for $t$. |
| 6 | $t=3\text{ yrs}$ | W1 | 1 | Complete years. |
| 7 | $(iii)\quad \dfrac{dN}{dt}=\dfrac54e^{0.25t}$ | M1W1 | 2 | Differentiates. |
| 8 | $\text{When }t=4,\quad \dfrac{dN}{dt}=3.3978=3.40\text{ (3 s.f.)}$ | MW1 | 1 | Evaluates at $t=4$. |
| 9 | Rate of increase in the number of goldfish when $t=4$. | M1 | 1 | Interprets the derivative. |

### Final Answer

`5 goldfish`; `3 complete years`; `3.40`, the rate of increase in the number of goldfish when `t=4`.

### What the Examiner Wanted

This old C3 item tests modelling, solving by logarithms, differentiating the model, and interpreting the derivative in context.

## Solution to Question 26: C3 June 2016 Question 6

**Question ID:** AS1LogarithmsAndExponentialsQ026  
**Source:** Mark Scheme PDF p.18  
**Original reference:** C3 June 2016 Question 6  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 26  
**Marks available:** 6  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | Let $N_0$ be the initial mass of radium. |  | 0 | Defines initial amount. |
| 2 | $N_0(1-0.04)^t=N$ | M1 W1 | 2 | Forms decay model per century. |
| 3 | At half-life, $N=\dfrac{N_0}{2}$. |  | 0 | Half-life condition. |
| 4 | $N_0\,0.96^t=\dfrac{N_0}{2}$ | MW1 | 1 | Substitutes half-life. |
| 5 | $0.96^t=0.5$ |  | 0 | Cancels $N_0$. |
| 6 | $\ln0.96^t=\ln0.5$, so $t\ln0.96=\ln0.5$ | M1 | 1 | Takes logarithms. |
| 7 | $t=16.9797$ | W1 | 1 | Half-life in centuries. |
| 8 | $=1697.97\text{ yr}=1700\text{ yr (3 s.f.)}$ | W1 | 1 | Converts to years. |

### Final Answer

`1700 years` to 3 significant figures.

### What the Examiner Wanted

The key issue is that the 4% loss is per century, so the logarithmic solution is first in centuries and then converted into years.

## Solution to Question 27: C3 June 2018 Question 3(b)

**Question ID:** AS1LogarithmsAndExponentialsQ027  
**Source:** Mark Scheme PDF p.18  
**Original reference:** C3 June 2018 Question 3(b)  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 27  
**Marks available:** 4  
**Match confidence:** Medium


**Note:** The questions PDF includes only part (b)(i). The mark scheme page also contains part (b)(ii), which is listed later under unmatched mark scheme entries.

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(b)(i)\quad N=N_0e^{kt}$ |  | 0 | Given model. |
| 2 | $t=10,\quad N=2N_0$ |  | 0 | Uses doubling condition. |
| 3 | $2N_0=N_0e^{kt}$ | M1 | 1 | Substitutes into model. |
| 4 | $2=e^{10k}$ | W1 | 1 | Cancels $N_0$. |
| 5 | $\ln2=10k$ | M1 | 1 | Takes natural logs. |
| 6 | $k=\dfrac{1}{10}\ln2=0.0693$ | MW1 | 1 | Final value. |

### Final Answer

`k=(1/10)\ln2=0.0693`.

### What the Examiner Wanted

The examiner wanted the doubling condition substituted into the exponential model and then solved using natural logarithms.

## Solution to Question 28: AS1 (new spec) June 2019 Question 3

**Question ID:** AS1LogarithmsAndExponentialsQ028  
**Source:** Mark Scheme PDF p.19  
**Original reference:** AS1 (new spec) June 2019 Question 3  
**Related question:** See `AS1_logarithms_and_exponentials_questions.md`, Question 28  
**Marks available:** 10  
**Match confidence:** High

### Official Mark Scheme Solution

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $(a)(i)\quad a=8$ | MW1 | 1 | Converts from log form. |
| 2 | $(a)(ii)\quad \log_2\left(\dfrac{x}{x-1}\right)=3$ | M1 W1 | 2 | Uses quotient law. |
| 3 | $\dfrac{x}{x-1}=8$ | M1 W1 | 2 | Converts to exponential form. |
| 4 | $x=8x-8$, so $7x=8$ and $x=\dfrac87$ | W1 | 1 | Solves for $x$. |
| 5 | $(b)\quad 3e^{2x}=4$ | M1 | 1 | Rearranges. |
| 6 | $e^{2x}=\dfrac43$ | W1 | 1 | Divides by 3. |
| 7 | $2x=\ln\dfrac43$ | M1 | 1 | Takes natural logs. |
| 8 | $x=\dfrac12\ln\dfrac43$ | W1 | 1 | Exact solution. |

### Final Answer

`a=8`; `x=8/7`; `x=(1/2)\ln(4/3)`.

### What the Examiner Wanted

This new-spec AS1 question rewards log laws, domain-aware solving, and exact answers using natural logarithms.



## Unmatched Mark Scheme Entries

### C3 June 2018 Question 3(b)(ii)

**Source:** Mark Scheme PDF p.18  
**Status:** Matching question text was not found in the supplied questions PDF. The questions PDF only shows part (b)(i) of this question.

| Step | Official working / result | Mark code | Mark awarded | Brief annotation |
|---:|---|---|---:|---|
| 1 | $N=N_0e^{0.0693t}$ |  | 0 | Uses part (i). |
| 2 | $N_0=3000$, $t=120$ seconds |  | 0 | Substitutes given data from missing question part. |
| 3 | $N=3000e^{0.0693\times120}$ |  | 0 | Calculates population. |
| 4 | $N=12300000$ to 3 s.f. $(12266316.5)$ | MW1 | 1 | Final answer shown in mark scheme. |

## 7. Diagram Assets

## 7.1 Mermaid Assets

### Source File Metadata

```yaml
filename: "AS1_logarithms_and_exponentials_mermaid.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions/AS1_logarithms_and_exponentials_mermaid.md"
lines: 6
bytes_utf8: 292
sha256: "ae9e29bd97fa2bf24a6df326d8f9be92495159034db5364f80c67a1253cd8e9b"
```

### Preserved Source Content: AS1_logarithms_and_exponentials_mermaid.md

# Mermaid Diagrams for CCEA AS1 Pure Mathematics Logarithms and Exponentials

**Pack ID:** AS1LogarithmsAndExponentials

No Mermaid diagrams were required for this question pack. The supplied and mark-scheme visual assets are mathematical graph sketches, so TikZ is the most suitable format.

## 7.2 SVG Assets

### Source File Metadata

```yaml
filename: "AS1_logarithms_and_exponentials_svg.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions/AS1_logarithms_and_exponentials_svg.md"
lines: 6
bytes_utf8: 257
sha256: "074496bcd2c3f36d8b4e9c022e802b4e63e0ee3a860850e16007806859b2069a"
```

### Preserved Source Content: AS1_logarithms_and_exponentials_svg.md

# SVG Diagrams for CCEA AS1 Pure Mathematics Logarithms and Exponentials

**Pack ID:** AS1LogarithmsAndExponentials

No SVG diagrams were required for this question pack. The visual assets are formal graph sketches and have been recreated in the TikZ file.

## 7.3 TikZ Assets

### Source File Metadata

```yaml
filename: "AS1_logarithms_and_exponentials_tikz.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions/AS1_logarithms_and_exponentials_tikz.md"
lines: 163
bytes_utf8: 6369
sha256: "1d1e34599c3a5a1c4639869ffc115247dd216b68645f7b016bb83351aa9f2cb8"
```

### Preserved Source Content: AS1_logarithms_and_exponentials_tikz.md

# TikZ Diagrams for CCEA AS1 Pure Mathematics Logarithms and Exponentials

**Pack ID:** AS1LogarithmsAndExponentials

These diagrams use standard TikZ. For compiling in LaTeX, include:

```latex
\\usepackage{tikz}
\\usetikzlibrary{arrows.meta}
```

## AS1LogarithmsAndExponentialsQ004TikZ-001: Mark scheme sketch of $y=3^x$ and $y=3^{x+2}$

**Source:** Mark Scheme PDF p.4  
**Related question:** Question 4  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ004TikZ-001 | ...]`  
**Purpose:** Shows the two exponential curves required by the official solution.

### Creation Notes

TikZ is used because this is a formal coordinate graph sketch. The diagram marks the relative shift, the $y$-intercepts 1 and 9, and the point $x=-2$ where $3^{x+2}=1$.

```latex
\begin{tikzpicture}[scale=0.8, >=Stealth]
  \draw[->] (-3.2,0) -- (3.2,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,5.5) node[above] {$y$};
  \draw[domain=-3:1.78, smooth, samples=80] plot ({\x}, {0.45*exp(ln(3)*\x)}) node[right] {$y=3^x$};
  \draw[domain=-3:0.1, smooth, samples=80] plot ({\x}, {0.45*exp(ln(3)*(\x+2))}) node[above right] {$y=3^{x+2}$};
  \draw (-0.08,0.45) -- (0.08,0.45) node[right] {$1$};
  \draw (-0.08,4.05) -- (0.08,4.05) node[right] {$9$};
  \draw (-2,0.08) -- (-2,-0.08) node[below] {$-2$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ006TikZ-001: Fig. 3 sketch of $y=4^x-3$

**Source:** Questions PDF p.4  
**Related question:** Question 6  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1LogarithmsAndExponentialsQ006TikZ-001 | ...]`  
**Purpose:** Recreates the supplied figure showing the graph crossing the axes at $A$ and $B$.

### Creation Notes

The curve is drawn to match the question diagram, with intercepts labelled $A$ and $B$. The exact positions are governed by $A=(\log_4 3,0)$ and $B=(0,-2)$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-2.5,0) -- (3,0) node[right] {$x$};
  \draw[->] (0,-3.4) -- (0,3.5) node[above] {$y$};
  \draw[domain=-2.2:1.45, smooth, samples=100] plot ({\x}, {exp(ln(4)*\x)-3});
  \fill (0.792,0) circle (1.5pt) node[below right] {$A$};
  \fill (0,-2) circle (1.5pt) node[below right] {$B$};
  \node at (1.4,-3.0) {Fig. 3};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ010TikZ-001: Mark scheme sketch of $y=4^{-x}$

**Source:** Mark Scheme PDF p.8  
**Related question:** Question 10  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ010TikZ-001 | ...]`  
**Purpose:** Shows the decreasing exponential graph required in the official solution.

### Creation Notes

The graph passes through $(0,1)$, decreases as $x$ increases, and has horizontal asymptote $y=0$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-3,0) -- (4,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,4.2) node[above] {$y$};
  \draw[domain=-1.2:3.4, smooth, samples=100] plot ({\x}, {exp(-ln(4)*\x)});
  \fill (0,1) circle (1.5pt) node[right] {$1$};
  \node[below left] at (0,0) {$0$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ013TikZ-001: Mark scheme sketch of $y=2^x-5$

**Source:** Mark Scheme PDF p.10  
**Related question:** Question 13  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ013TikZ-001 | ...]`  
**Purpose:** Shows the exponential sketch and the intercepts $(0,-4)$ and $(\log_2 5,0)$.

### Creation Notes

The diagram includes the two intercepts that the mark scheme explicitly awards.

```latex
\begin{tikzpicture}[scale=0.8, >=Stealth]
  \draw[->] (-3,0) -- (5,0) node[right] {$x$};
  \draw[->] (0,-5.6) -- (0,4.2) node[above] {$y$};
  \draw[domain=-3:3.1, smooth, samples=100] plot ({\x}, {exp(ln(2)*\x)-5});
  \draw[dashed] (-3,-5) -- (4.5,-5) node[right] {$y=-5$};
  \fill (0,-4) circle (1.5pt) node[left] {$(0,-4)$};
  \fill (2.322,0) circle (1.5pt) node[below] {$2.32$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ021TikZ-001: Fig. 1 graph of $y=\ln x$

**Source:** Questions PDF p.9  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL PLACEHOLDER: AS1LogarithmsAndExponentialsQ021TikZ-001 | ...]`  
**Purpose:** Recreates the supplied Fig. 1 showing $y=\ln x$ and point $A$.

### Creation Notes

The graph shows the logarithmic curve, the vertical asymptote at the $y$-axis, and the point $A=(1,0)$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-1.2,0) -- (4.2,0) node[right] {$x$};
  \draw[->] (0,-2.4) -- (0,2.4) node[above] {$y$};
  \draw[domain=0.08:4, smooth, samples=100] plot ({\x}, {ln(\x)}) node[right] {$y=\ln x$};
  \fill (1,0) circle (1.5pt) node[below right] {$A$};
  \node at (2,-2.0) {Fig. 1};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ021TikZ-002: Mark scheme sketch of $y=\ln(x+2)$

**Source:** Mark Scheme PDF p.16  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ021TikZ-002 | ...]`  
**Purpose:** Shows the translated logarithmic graph, the asymptote $x=-2$, and $A'=(-1,0)$.

### Creation Notes

The graph is a left shift of $y=\ln x$ by 2 units.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};
  \draw[->] (0,-2.5) -- (0,2.8) node[above] {$y$};
  \draw[dashed] (-2,-2.4) -- (-2,2.5) node[above] {$x=-2$};
  \draw[domain=-1.92:3.5, smooth, samples=100] plot ({\x}, {ln(\x+2)}) node[right] {$y=\ln(x+2)$};
  \fill (-1,0) circle (1.5pt) node[below right] {$A'(-1,0)$};
\end{tikzpicture}
```

## AS1LogarithmsAndExponentialsQ021TikZ-003: Mark scheme sketch of $y=\lvert\ln(x+2)\rvert$

**Source:** Mark Scheme PDF p.16  
**Related question:** Question 21  
**Used in placeholder:** `[VISUAL REFERENCE: AS1LogarithmsAndExponentialsQ021TikZ-003 | ...]`  
**Purpose:** Shows the modulus transformation of $y=\ln(x+2)$.

### Creation Notes

The negative branch of $\ln(x+2)$ is reflected in the $x$-axis, giving a minimum at $A'=(-1,0)$.

```latex
\begin{tikzpicture}[scale=0.9, >=Stealth]
  \draw[->] (-3.2,0) -- (3.8,0) node[right] {$x$};
  \draw[->] (0,-0.3) -- (0,3.0) node[above] {$y$};
  \draw[dashed] (-2,-0.2) -- (-2,2.8);
  \draw[domain=-1.92:-1, smooth, samples=80] plot ({\x}, {-ln(\x+2)});
  \draw[domain=-1:3.5, smooth, samples=100] plot ({\x}, {ln(\x+2)}) node[right] {$y=\lvert\ln(x+2)\rvert$};
  \fill (-1,0) circle (1.5pt) node[below] {$A'(-1,0)$};
\end{tikzpicture}
```

## 8. Interactive Widgets

## 8.1 Widget Assets

### Source File Metadata

```yaml
filename: "AS1_logarithms_and_exponentials_widgets.md"
absolute_path: "/Users/evanward/Documents/AS Portal - New /AS1 Files/07. Expoentials & Logarithms-Questions/AS1_logarithms_and_exponentials_widgets.md"
lines: 6
bytes_utf8: 370
sha256: "57425b4c98917c71affaa1f7e2aa9e93d78a4593a472911c624ad37009b5fe38"
```

### Preserved Source Content: AS1_logarithms_and_exponentials_widgets.md

# Interactive Widgets for CCEA AS1 Pure Mathematics Logarithms and Exponentials

**Pack ID:** AS1LogarithmsAndExponentials

No interactive widgets were required for this question pack. The questions are better practised through written exam-style working, especially because several questions require proof, exact logarithmic manipulation, or hand-drawn graph sketches.

## 9. Agent Retrieval Notes

Use Section 5 as the authoritative question source and Section 6 as the solution/mark-scheme source. Do not merge question wording with solutions unless a user explicitly asks for worked examples or marking guidance.
