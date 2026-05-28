import { PracticeQuestion } from '@/core/types';

export const P5_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1LogarithmsAndExponentialsQ001",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 15,
    "questionMarkdown": "### Question\n\n**7**\n\n**(a)** Write as a single logarithm in base 5\n\n$$\n\\log_5 15 + 2\\log_5 2 - \\log_{25} 9\n$$\n\n[8]\n\n**(b)** A country's population at the end of each year is 5% greater than at the start of that year.\nModel the population to be increasing at a constant rate.\n\n**(i)** Find an expression for the population after $t$ years. [2]\n\n**(ii)** Find how many years it will take for the population to increase by 50%. [5]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\log_{25}9=\\dfrac{\\log_5 9}{\\log_5 25}$ | M1W1 | 2 | Uses change of base. |\n| 2 | $=\\dfrac12\\log_5 9$ | W1 | 1 | Simplifies the base conversion. |\n| 3 | $\\log_5 15+\\log_5 4-\\log_5 3$ | M1W1 | 2 | Uses the power law. |\n| 4 | $\\log_5\\dfrac{15\\times4}{3}$ | M2 | 2 | Combines logs using product and quotient laws. |\n| 5 | $\\log_5 20$ | W1 | 1 | Final single logarithm. |\n| 6 | $(b)(i)\\quad P(1+0.05)^t$ | MW2 | 2 | Correct compound growth model. |\n| 7 | $(b)(ii)\\quad P(1+0.05)^t=\\dfrac32P$ | MW1 | 1 | Sets up 50% increase. |\n| 8 | $\\log(1+0.05)^t=\\log\\dfrac32$ | M1 | 1 | Takes logarithms. |\n| 9 | $t\\log(1+0.05)=\\log\\dfrac32$ | M1W1 | 2 | Uses the power law. |\n| 10 | $t=\\dfrac{\\log1.5}{\\log1.05}=8.31\\text{ years}$ | W1 | 1 | Final time. |\n\n### Final Answer\n\n`(a) \\log_5 20`; `(b)(i) P(1.05)^t`; `(b)(ii) 8.31 years`.\n\n### What the Examiner Wanted\n\nThe key marks came from converting the base-25 logarithm, combining logarithms into one term, setting up compound growth correctly, and solving the exponential equation with logarithms."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ002",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 15,
    "questionMarkdown": "### Question\n\n**8**\n\n**(a)** Find $x$ given that\n\n$$\n3^{2x}=7\n$$\n\n[4]\n\n**(b)** Find $x$ given that\n\n$$\n\\log x+\\log x^2+2\\log x^3=1\n$$\n\n[5]\n\n**(c)** Given that\n\n$$\n\\log_2 x-\\log_2 y=6\n$$\n\nand that\n\n$$\n2^3=\\frac{1}{z}\n$$\n\nshow that\n\n$$\ny=z^2x\n$$\n\n[6]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n**Note:** The questions PDF labels this as C2 January 2010 Question 8, while the mark scheme page labels the matching solution as C2 June 2010 Question 8.\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)\\quad \\log(3^{2x})=\\log7$ | M1 | 1 | Takes logs of both sides. |\n| 2 | $2x\\log3=\\log7$ | M1W1 | 2 | Uses the power law. |\n| 3 | $x=\\dfrac{\\log7}{2\\log3}=0.886$ | W1 | 1 | Final value. |\n| 4 | $(b)\\quad \\log x+2\\log x+6\\log x=1$ | M1W1 | 2 | Uses the power law. |\n| 5 | $\\log x=\\dfrac19$ | MW1 | 1 | Collects like log terms. |\n| 6 | $x=1.29$ | M1W1 | 2 | Converts from logarithmic form. |\n| 7 | Alternative: $\\log x+\\log x^2+\\log x^6=1$ | M1W1 | 2 | Combines through powers. |\n| 8 | $\\log x^9=1$ | MW1 | 1 | Combines the logarithms. |\n| 9 | $x^9=10$, so $x=1.29$ | M1W1 | 2 | Equivalent route to the answer. |\n| 10 | $(c)\\quad \\log_2\\dfrac{x}{y}=6$ | M1W1 | 2 | Uses the quotient law. |\n| 11 | $2^6=\\dfrac{x}{y}$ | MW1 | 1 | Converts to exponential form. |\n| 12 | $2^3\\times2^3=\\dfrac{x}{y}$ | M1 | 1 | Splits the power. |\n| 13 | $\\dfrac{1}{z^2}=\\dfrac{x}{y}$ | MW1 | 1 | Uses the given relation. |\n| 14 | $y=xz^2$ | W1 | 1 | Required result. |\n\n### Final Answer\n\n`(a) x=0.886`; `(b) x=1.29`; `(c) y=xz^2`.\n\n### What the Examiner Wanted\n\nThe mark scheme rewards correct use of logarithms, conversion between log and exponential form, and careful algebraic rearrangement."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ003",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**7**\n\n**(a)** **(i)** Rewrite as a single logarithm\n\n$$\n\\log_3 8-3\\log_3 x\n$$\n\n[3]\n\n**(ii)** Hence solve the equation\n\n$$\n\\log_3 8-3\\log_3 x=3\n$$\n\n[4]\n\n**(b)** A solution by trial and improvement is not acceptable.\n\nA patch of mould increases its area by 12% each day.\nInitially the patch of mould has an area of $A_0$.\nFind after how many days the area of the patch of mould is 17 times $A_0$. [4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)(i)\\quad \\log_3 8-\\log_3 x^3$ | M2 | 2 | Uses the power law. |\n| 2 | $\\log_3\\dfrac{8}{x^3}$ | MW1 | 1 | Combines into one logarithm. |\n| 3 | $(a)(ii)\\quad \\log_3\\dfrac{8}{x^3}=3$ | M1 | 1 | Uses the result from part (i). |\n| 4 | $3^3=\\dfrac{8}{x^3}$ | M1W1 | 2 | Converts to exponential form. |\n| 5 | $x^3=\\dfrac{8}{27}$ |  | 0 | Rearranges. |\n| 6 | $x=\\dfrac23$ | MW1 | 1 | Final solution. |\n| 7 | $(b)\\quad A=(1.12)^nA_0=17A_0$ | M1W1 | 2 | Sets up growth model. |\n| 8 | $n\\log1.12=\\log17$ | M1 | 1 | Takes logs. |\n| 9 | $n=25\\text{ days}$ | W1 | 1 | Final number of days. |\n\n### Final Answer\n\n`(a)(i) \\log_3(8/x^3)`; `(a)(ii) x=2/3`; `(b) 25 days`.\n\n### What the Examiner Wanted\n\nThe important features are applying log laws before solving and using logarithms rather than trial and improvement for the growth model."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ004",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**2**\n\n**(i)** Sketch the graphs of\n\n$$\ny=3^x\n$$\n\nand\n\n$$\ny=3^{x+2}\n$$\n\non the same axes. [3]\n\n**(ii)** Solve the equation\n\n$$\n3^{x+2}=2\n$$\n\n[3]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ004TikZ-001]\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)$ Correct sketches of $y=3^x$ and $y=3^{x+2}$ on the same axes. | MW1 | 1 | Shows the increasing exponential shapes. |\n| 2 | Labels/features include $y=3^x$, $y=3^{x+2}$, intercepts $1$ and $9$, and the left shift of 2 units. | M1W1 | 2 | Key sketch features. |\n| 3 | $(ii)\\quad (x+2)\\log3=\\log2$ | M2 | 2 | Takes logs and uses the power law. |\n| 4 | $x=-1.37$ | W1 | 1 | Final solution. |\n| 5 | Alternative: $\\log_3 2=x+2$, so $0.63=x+2$ and $x=-1.37$. | M2 W1 | 3 | Equivalent method. |\n\n### Final Answer\n\n`(i)` See sketch; `(ii) x=-1.37`.\n\n### What the Examiner Wanted\n\nThe sketch marks require the relative horizontal shift and key intercept behaviour. The equation marks require converting the exponential equation using logarithms."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ005",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n**8**\n\nSolve the equation\n\n$$\n1+2\\log_5 x=\\log_5(16x-3)\n$$\n\n[8]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $1+\\log_5 x^2=\\log_5(16x-3)$ | M1W1 | 2 | Uses the power law. |\n| 2 | $1=\\log_5(16x-3)-\\log_5x^2=\\log_5\\left(\\dfrac{16x-3}{x^2}\\right)$ | M1W1 | 2 | Uses quotient law. |\n| 3 | $5=\\dfrac{16x-3}{x^2}$ | M1W1 | 2 | Converts to exponential form. |\n| 4 | $5x^2-16x+3=0$ |  | 0 | Forms a quadratic. |\n| 5 | $(5x-1)(x-3)=0$ | M1 | 1 | Factorises. |\n| 6 | $x=\\dfrac15\\quad\\text{or}\\quad x=3$ | W1 | 1 | Final values. |\n\n### Final Answer\n\n`x=1/5` or `x=3`.\n\n### What the Examiner Wanted\n\nThe examiner wanted log laws used to form a quadratic, followed by valid solutions satisfying the logarithm domains."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ006",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**5**\n\n**(a)** The graph of\n\n$$\ny=4^x-3\n$$\n\nis sketched in Fig. 3 below.\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ006TikZ-001]\n\nThe graph crosses the axes at $A$ and $B$ as shown.\n\nFind the coordinates of $A$ and $B$. [3]\n\n**(b)** Solve the equation\n\n$$\n\\log_2 x+\\log_2(17-2x)=3\n$$\n\n[6]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ006TikZ-001]\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)\\quad A=(0.792,0)$ | M1W1 | 2 | Finds the $x$-intercept. |\n| 2 | $B=(0,-2)$ | MW1 | 1 | Finds the $y$-intercept. |\n| 3 | $(b)\\quad \\log_2\\{x(17-2x)\\}=3$ | M1W1 | 2 | Combines logarithms. |\n| 4 | $2^3=17x-2x^2$ | M1W1 | 2 | Converts to exponential form. |\n| 5 | $2x^2-17x+8=0$, so $(2x-1)(x-8)=0$ | M1 | 1 | Forms and factorises a quadratic. |\n| 6 | $x=\\dfrac12\\quad\\text{or}\\quad x=8$ | W1 | 1 | Final values. |\n\n### Final Answer\n\n`A=(0.792,0)`, `B=(0,-2)`; `x=1/2` or `x=8`.\n\n### What the Examiner Wanted\n\nPart (a) uses intercepts of an exponential graph. Part (b) rewards combining logs first, then solving the resulting quadratic."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ007",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**8**\n\n**(i)** Prove that\n\n$$\n\\log_a x=\\frac{\\log_b x}{\\log_b a}\n$$\n\n[5]\n\n**(ii)** Hence solve the equation\n\n$$\n\\log_4 x+\\log_x 16=3\n$$\n\n[6]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad y=\\log_a x$ | M1 | 1 | Starts with a definition. |\n| 2 | $a^y=x$ | MW1 | 1 | Converts to exponential form. |\n| 3 | $\\log_b a^y=\\log_b x$ | MW1 | 1 | Takes logs to base $b$. |\n| 4 | $y\\log_b a=\\log_b x$ | MW1 | 1 | Uses the power law. |\n| 5 | $y=\\log_a x=\\dfrac{\\log_b x}{\\log_b a}$ | MW1 | 1 | Proves change of base. |\n| 6 | $(ii)\\quad \\log_4x+\\dfrac{\\log_416}{\\log_4x}=3$ | M1W1 | 2 | Uses change of base. |\n| 7 | $(\\log_4x)^2+2=3\\log_4x$ | MW1 | 1 | Forms a quadratic in $\\log_4x$. |\n| 8 | $(\\log_4x)^2-3\\log_4x+2=0$ |  | 0 | Rearranges. |\n| 9 | $(\\log_4x-2)(\\log_4x-1)=0$ |  | 0 | Factorises. |\n| 10 | $\\log_4x=2\\quad\\text{or}\\quad\\log_4x=1$ | MW2 | 2 | Solves the log quadratic. |\n| 11 | $x=16\\quad\\text{or}\\quad x=4$ | MW1 | 1 | Final values. |\n\n### Final Answer\n\n`(i)` proved; `(ii) x=16` or `x=4`.\n\n### What the Examiner Wanted\n\nThe key evidence is a clear proof of change of base and a quadratic substitution in the logarithmic equation."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ008",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 13,
    "questionMarkdown": "### Question\n\n**8**\n\n**(a)** A solution by trial and improvement will not be accepted.\n\nThe cost of living is increasing by 15% per year.\nIf this rate is maintained and the cost of living this year is £$L$, then the cost of living after $t$ years can be modelled by £$L(1.15)^t$.\n\nFind how many complete years it will take for the cost of living to treble. [5]\n\n**(b)** Find the exact values of $x$ and $y$ given that\n\n$$\n\\log_y x=3\n$$\n\nand\n\n$$\n\\log_3 x-\\log_3 y=5\n$$\n\n[8]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n**Note:** The questions PDF heading says C2 January 2013 Question 4, but the question body and supplied mark scheme use Question 8.\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)\\quad 3L=L(1.15)^t$ | MW1 | 1 | Sets cost to treble. |\n| 2 | $3=(1.15)^t$ |  | 0 | Cancels $L$. |\n| 3 | $\\log3=\\log(1.15)^t$ | M1 | 1 | Takes logs. |\n| 4 | $\\log3=t\\log(1.15)$ | MW1 | 1 | Uses power law. |\n| 5 | $t=\\dfrac{\\log3}{\\log1.15}=7.86\\text{ yrs}$ | MW1 | 1 | Finds continuous value. |\n| 6 | After 8 years. | W1 | 1 | Rounds up to complete years. |\n| 7 | $(b)\\quad \\log_yx=3$, so $y^3=x$ | M1W1 | 2 | Converts to exponential form. |\n| 8 | $\\log_3x-\\log_3y=5$, so $\\log_3\\dfrac{x}{y}=5$ | M1W1 | 2 | Uses quotient law. |\n| 9 | $\\log_3\\dfrac{y^3}{y}=5$, so $\\log_3y^2=5$ | MW1 | 1 | Substitutes $x=y^3$. |\n| 10 | $y^2=3^5$ | MW1 | 1 | Converts to exponential form. |\n| 11 | $y=3^{5/2}$ | MW1 | 1 | Exact value of $y$. |\n| 12 | $x=3^{15/2}$ | MW1 | 1 | Exact value of $x$. |\n\n### Alternative Method from the Mark Scheme\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\log_yx=3$, so $y^3=x$ | M1W1 | 2 | Converts to exponential form. |\n| 2 | $\\log_3y^3-\\log_3y=5$ | MW1 | 1 | Substitutes into the second equation. |\n| 3 | $3\\log_3y-\\log_3y=5$ | M1W1 | 2 | Uses the power law. |\n| 4 | $2\\log_3y=5$ |  | 0 | Collects terms. |\n| 5 | $\\log_3y=\\dfrac52$ | MW1 | 1 | Solves for the log. |\n| 6 | $y=3^{5/2}$ | MW1 | 1 | Exact value of $y$. |\n| 7 | $x=3^{15/2}$ | MW1 | 1 | Exact value of $x$. |\n\n### Final Answer\n\n`(a)` after 8 years; `(b) x=3^{15/2}`, `y=3^{5/2}`.\n\n### What the Examiner Wanted\n\nThe examiner wanted logarithmic equations converted and manipulated exactly. In part (a), the word complete means the decimal time must be rounded up."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ009",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**8**\n\n**(i)** Prove that\n\n$$\n\\log_a x+\\log_a y=\\log_a(xy)\n$$\n\n[6]\n\n**(ii)** Find $a$ given that\n\n$$\n2\\log_a 3+3\\log_a 4=5\n$$\n\n[5]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad \\text{Let }\\log_ax=b\\Rightarrow a^b=x$ | M1W1 | 2 | Defines one logarithm. |\n| 2 | $\\text{and }\\log_ay=c\\Rightarrow a^c=y$ | MW1 | 1 | Defines the second logarithm. |\n| 3 | $\\log_a(xy)=\\log_a(a^ba^c)$ | M1 | 1 | Substitutes using exponential form. |\n| 4 | $=\\log_a a^{b+c}$ | MW1 | 1 | Uses index law. |\n| 5 | $=b+c=\\log_ax+\\log_ay$ | MW1 | 1 | Completes the proof. |\n| 6 | $(ii)\\quad \\log_a3^2+\\log_a4^3=5$ | M1W1 | 2 | Uses the power law. |\n| 7 | $\\log_a(9\\times64)=5$ | M1W1 | 2 | Uses the product law. |\n| 8 | $a^5=576$ |  | 0 | Converts to exponential form. |\n| 9 | $a=3.57$ | MW1 | 1 | Final value. |\n\n### Final Answer\n\n`(i)` proved; `(ii) a=3.57`.\n\n### What the Examiner Wanted\n\nThe proof needs definitions of logarithms and index laws. The equation then uses the proved product law and the power law."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ010",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**2**\n\n**(b)** **(i)** Sketch the graph of\n\n$$\ny=4^{-x}\n$$\n\n[2]\n\n**(ii)** Solve the equation\n\n$$\n4^{-x}=10\n$$\n\n[2]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ010TikZ-001]\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(b)(i)$ Correct decreasing exponential sketch of $y=4^{-x}$ through $(0,1)$ with horizontal asymptote $y=0$. | M1W1 | 2 | Sketch features. |\n| 2 | $(b)(ii)\\quad \\log(4^{-x})=\\log10$ | M1 | 1 | Takes logs. |\n| 3 | $x=-1.66$ | W1 | 1 | Final solution. |\n\n### Final Answer\n\n`(i)` See sketch; `(ii) x=-1.66`.\n\n### What the Examiner Wanted\n\nMarks come from the correct decreasing exponential shape and from using logarithms to solve the equation."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ011",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**8**\n\nSolve the equation\n\n$$\n3\\log_8 x=5+2\\log_x 8\n$$\n\n[9]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $3\\left(\\dfrac{\\log_xx}{\\log_x8}\\right)=5+2\\log_x8$ | M1W1 | 2 | Uses change of base. |\n| 2 | $\\dfrac{3}{\\log_x8}=5+2\\log_x8$ | MW1 | 1 | Uses $\\log_xx=1$. |\n| 3 | $3=5\\log_x8+2(\\log_x8)^2$ | M1 | 1 | Forms a quadratic. |\n| 4 | Let $Y=\\log_x8$, then $2Y^2+5Y-3=0$ | W1 | 1 | Correct quadratic. |\n| 5 | $Y=\\dfrac12\\quad\\text{or}\\quad Y=-3$ | MW2 | 2 | Solves the quadratic. |\n| 6 | $\\log_x8=\\dfrac12\\quad\\text{or}\\quad\\log_x8=-3$ |  | 0 | Substitutes back. |\n| 7 | $x=64\\quad\\text{or}\\quad x=\\dfrac12$ | MW2 | 2 | Final values. |\n\n### Final Answer\n\n`x=64` or `x=1/2`.\n\n### What the Examiner Wanted\n\nThe examiner wanted change of base, a quadratic in $\\log_x8$, and conversion back to values of $x$."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ012",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**8**\n\nSolve the simultaneous equations\n\n$$\n\\log_4 x+\\log_4 y=2\n$$\n\n$$\n\\log_9 x-\\log_9 y=-\\frac{1}{2}\n$$\n\n[10]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\log_4xy=2$ | M1W1 | 2 | Combines the first equation. |\n| 2 | $\\log_9\\dfrac{x}{y}=-\\dfrac12$ | M1W1 | 2 | Combines the second equation. |\n| 3 | $xy=16$ | MW1 | 1 | Converts first equation. |\n| 4 | $\\dfrac{x}{y}=\\dfrac13$ | MW1 | 1 | Converts second equation. |\n| 5 | $x=\\dfrac{y}{3}$ | M1 | 1 | Rearranges ratio. |\n| 6 | $\\dfrac{y^2}{3}=16$ | W1 | 1 | Substitutes into $xy=16$. |\n| 7 | $y=4\\sqrt3$ | MW1 | 1 | Solves for positive $y$. |\n| 8 | $x=\\dfrac{4\\sqrt3}{3}$ | W1 | 1 | Finds $x$. |\n\n### Final Answer\n\n`x=4\\sqrt3/3`, `y=4\\sqrt3`.\n\n### What the Examiner Wanted\n\nThe solution relies on combining logarithms, converting both equations to algebraic equations, and respecting positive log domains."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ013",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 12,
    "questionMarkdown": "### Question\n\n**8**\n\n**(a)** Sketch the graph of\n\n$$\ny=2^x-5\n$$\n\nclearly indicating where it crosses the $x$-axis and the $y$-axis. [3]\n\n**(b)** If $\\log_4 x=k$, express the following in terms of $k$:\n\n**(i)**\n\n$$\n\\log_4 x^3\n$$\n\n[1]\n\n**(ii)**\n\n$$\n\\log_4 \\frac{\\sqrt[3]{x}}{16}\n$$\n\n[2]\n\n**(iii)**\n\n$$\n\\log_2 x\n$$\n\n[2]\n\n**(iv)** Hence solve for $x$\n\n$$\n\\log_4 x^3+\\log_4\\frac{\\sqrt[3]{x}}{16}=\\log_2 x\n$$\n\n[4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ013TikZ-001]\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)$ Correct exponential sketch of $y=2^x-5$. | MW1 | 1 | Sketch shape. |\n| 2 | $(0,-4)$ | MW1 | 1 | Correct $y$-intercept. |\n| 3 | $(2.32,0)$ or $(\\log_2 5,0)$ | MW1 | 1 | Correct $x$-intercept. |\n| 4 | $(b)(i)\\quad 3k$ | MW1 | 1 | Uses power law. |\n| 5 | $(b)(ii)\\quad \\dfrac13k-2$ | M1W1 | 2 | Uses root and quotient laws. |\n| 6 | $(b)(iii)\\quad \\dfrac{\\log_4x}{\\log_42}=2k$ | M1W1 | 2 | Uses change of base. |\n| 7 | $(b)(iv)\\quad 3k+\\dfrac13k-2=2k$ | M1 | 1 | Uses earlier parts. |\n| 8 | $k=1.5$ | W1 | 1 | Solves for $k$. |\n| 9 | $\\log_4x=\\dfrac32$ | M1 | 1 | Substitutes back. |\n| 10 | $x=8$ | W1 | 1 | Final value. |\n\n### Final Answer\n\n`(a)` See sketch; `(b)(i) 3k`; `(b)(ii) k/3-2`; `(b)(iii) 2k`; `(b)(iv) x=8`.\n\n### What the Examiner Wanted\n\nThe marks focus on a correctly positioned exponential graph and using log laws consistently before solving the final equation."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ014",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**6**\n\n**(a)** Evaluate\n\n$$\n2\\log_2 a+\\log_4 4a^2-3\\log_2 2a\n$$\n\n[6]\n\n**(b)** Given that\n\n$$\n3(2^{2x})+2(2^x)-1=0\n$$\n\nfind $x$. [5]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)\\quad 2\\log_2a+\\dfrac{\\log_2(4a^2)}{2}-3\\log_2(2a)$ | M1W1 | 2 | Changes the base-4 logarithm. |\n| 2 | $\\log_2a^2+\\log_2(4a^2)^{1/2}-\\log_2(2a)^3$ | M2 | 2 | Uses the power law. |\n| 3 | $=\\log_2a^2+\\log_22a-\\log_28a^3$ |  | 0 | Simplifies powers. |\n| 4 | $=\\log_2\\dfrac{a^2\\times2a}{8a^3}$ | MW1 | 1 | Combines logs. |\n| 5 | $=\\log_2\\dfrac14$ |  | 0 | Simplifies. |\n| 6 | $=-2$ | MW1 | 1 | Final value. |\n| 7 | $(b)\\quad \\text{Let }y=2^x$ |  | 0 | Substitution. |\n| 8 | $3y^2+2y-1=0$ | M1 | 1 | Forms quadratic. |\n| 9 | $(3y-1)(y+1)=0$ |  | 0 | Factorises. |\n| 10 | $y=\\dfrac13\\quad\\text{or}\\quad y=-1$ | MW1 | 1 | Solves quadratic. |\n| 11 | $2^x=\\dfrac13$; $2^x=-1$ gives no solution. | M1 | 1 | Rejects impossible exponential value. |\n| 12 | $x=\\dfrac{\\log(1/3)}{\\log2}$ | M1 | 1 | Takes logs. |\n| 13 | $x=-1.58\\text{ (3 s.f.)}$ | W1 | 1 | Final value. |\n\n### Final Answer\n\n`(a) -2`; `(b) x=-1.58` to 3 significant figures.\n\n### What the Examiner Wanted\n\nPart (a) tests exact log-law simplification. Part (b) tests reducing an exponential equation to a quadratic and rejecting the impossible negative exponential value."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ015",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**4**\n\n**(a)** A girl invests £1000 at 8% per annum compound interest added annually.\n\n**(i)** Find the value of the investment at the end of $n$ years. [1]\n\n**(ii)** Hence find how many years it will be until the value of the investment exceeds £2000. [3]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)(i)\\quad I=1000(1.08)^n$ | MW1 | 1 | Correct compound interest model. |\n| 2 | $(a)(ii)\\quad 1000(1.08)^n>2000$ | M1 | 1 | Sets up inequality. |\n| 3 | $(1.08)^n>2$ |  | 0 | Simplifies. |\n| 4 | $n>\\dfrac{\\log2}{\\log1.08}$ | MW1 | 1 | Solves with logarithms. |\n| 5 | $n>9.01\\text{ yrs}$, therefore after 10 years. | W1 | 1 | Rounds to whole years. |\n\n### Final Answer\n\n`I=1000(1.08)^n`; the investment exceeds £2000 after 10 years.\n\n### What the Examiner Wanted\n\nThe key point is to solve an exponential inequality and round up because the investment must exceed £2000."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ016",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 12,
    "questionMarkdown": "### Question\n\n**7**\n\n**(i)** Prove that\n\n$$\n\\log_a x^n=n\\log_a x\n$$\n\n[6]\n\n**(ii)** Find $x$ given that\n\n$$\n\\log_a x=\\log_{a^2}(x+6)\n$$\n\n[6]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad \\text{Let }\\log_ax=y$ | M1 | 1 | Defines the logarithm. |\n| 2 | $a^y=x$ | MW1 | 1 | Converts to exponential form. |\n| 3 | $\\text{L.H.S. }\\log_ax^n=\\log_a(a^y)^n$ | M1 | 1 | Substitutes. |\n| 4 | $=\\log_aa^{yn}$ | W1 | 1 | Uses index law. |\n| 5 | $=yn$ | MW1 | 1 | Uses definition. |\n| 6 | $\\therefore \\log_ax^n=n\\log_ax$ | MW1 | 1 | Completes proof. |\n| 7 | $(ii)\\quad \\log_ax=\\log_{a^2}(x+6)$ |  | 0 | Given equation. |\n| 8 | $=\\dfrac{\\log_a(x+6)}{\\log_aa^2}$ | M1 | 1 | Uses change of base. |\n| 9 | $=\\dfrac{\\log_a(x+6)}{2}$ | MW1 | 1 | Simplifies denominator. |\n| 10 | $2\\log_ax=\\log_a(x+6)$ |  | 0 | Rearranges. |\n| 11 | $\\log_ax^2=\\log_a(x+6)$ | M1 | 1 | Uses power law. |\n| 12 | $x^2=x+6$ | MW1 | 1 | Equates arguments. |\n| 13 | $x^2-x-6=0$, so $(x-3)(x+2)=0$ |  | 0 | Solves quadratic. |\n| 14 | $x=3\\text{ or }-2\\text{ (not possible)}$ | MW1 | 1 | Applies log domain. |\n| 15 | $x=3$ | W1 | 1 | Final value. |\n\n### Final Answer\n\n`(i)` proved; `(ii) x=3`.\n\n### What the Examiner Wanted\n\nThe proof uses the definition of logarithm. The equation uses change of base and the power law, then rejects the invalid logarithm argument."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ017",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 15,
    "questionMarkdown": "### Question\n\n**8**\n\n**(a)** Given that\n\n$$\n\\frac{5^{x-1}}{3^{2x}}=27\n$$\n\nfind $x$. [8]\n\n**(b)** The first three terms in an arithmetic progression are\n\n$$\n\\log(4x+1),\\quad \\log(2x+3),\\quad \\log(x+3)\n$$\n\nFind the value of $x$. [7]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)\\quad 5^{x-1}=3^3\\times3^{2x}$ | M1W1 | 2 | Clears the denominator and uses $27=3^3$. |\n| 2 | $5^{x-1}=3^{3+2x}$ | M1W1 | 2 | Combines powers of 3. |\n| 3 | $\\log(5^{x-1})=\\log(3^{3+2x})$ | M1 | 1 | Takes logarithms. |\n| 4 | $(x-1)\\log5=(3+2x)\\log3$ | M1W1 | 2 | Uses the power law. |\n| 5 | $x\\log5-\\log5=3\\log3+2x\\log3$ |  | 0 | Expands. |\n| 6 | $x[\\log5-2\\log3]=3\\log3+\\log5$ |  | 0 | Collects $x$ terms. |\n| 7 | $x=\\dfrac{3\\log3+\\log5}{\\log5-2\\log3}$ |  | 0 | Rearranges. |\n| 8 | $x=-8.35$ | W1 | 1 | Final value. |\n| 9 | $(b)\\quad \\log(2x+3)-\\log(4x+1)=\\log(x+3)-\\log(2x+3)$ | M2W1 | 3 | Uses AP condition. |\n| 10 | $\\log\\left(\\dfrac{2x+3}{4x+1}\\right)=\\log\\left(\\dfrac{x+3}{2x+3}\\right)$ | M1W1 | 2 | Uses quotient law. |\n| 11 | $\\dfrac{2x+3}{4x+1}=\\dfrac{x+3}{2x+3}$ | M1 | 1 | Equates arguments. |\n| 12 | $(2x+3)^2=(x+3)(4x+1)$ |  | 0 | Cross-multiplies. |\n| 13 | $4x^2+12x+9=4x^2+13x+3$ |  | 0 | Expands. |\n| 14 | $x=6$ | W1 | 1 | Final value. |\n\n### Final Answer\n\n`(a) x=-8.35`; `(b) x=6`.\n\n### What the Examiner Wanted\n\nPart (a) rewards correct logarithmic solving with unlike bases. Part (b) rewards translating the arithmetic progression condition into an equation of logarithms."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ018",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 12,
    "questionMarkdown": "### Question\n\n**7**\n\n**(i)** Prove that\n\n$$\n\\log_a\\frac{x}{y}=\\log_a x-\\log_a y\n$$\n\n[6 marks]\n\n**(ii)** Hence solve the equation\n\n$$\n\\log_2(x^2-5x+14)-\\log_2(x+1)=1\n$$\n\n[6 marks]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad p=\\log_ax\\quad\\text{and}\\quad q=\\log_ay$ | M1 | 1 | Defines two logarithms. |\n| 2 | $a^p=x\\quad\\text{and}\\quad a^q=y$ | MW1 | 1 | Converts to exponential form. |\n| 3 | $\\dfrac{x}{y}=\\dfrac{a^p}{a^q}$ | M1 | 1 | Substitutes. |\n| 4 | $\\dfrac{x}{y}=a^{p-q}$ | MW1 | 1 | Uses index law. |\n| 5 | $\\log_a\\dfrac{x}{y}=p-q$ | M1 | 1 | Converts back to log form. |\n| 6 | $\\log_a\\dfrac{x}{y}=\\log_ax-\\log_ay$ | MW1 | 1 | Completes proof. |\n| 7 | $(ii)\\quad \\log_2\\left(\\dfrac{x^2-5x+14}{x+1}\\right)=1$ | M1W1 | 2 | Uses quotient law. |\n| 8 | $\\dfrac{x^2-5x+14}{x+1}=2$ | M1W1 | 2 | Converts to exponential form. |\n| 9 | $x^2-5x+14=2x+2$ |  | 0 | Rearranges. |\n| 10 | $x^2-7x+12=0$ | W1 | 1 | Forms quadratic. |\n| 11 | $(x-3)(x-4)=0$ |  | 0 | Factorises. |\n| 12 | $x=3,\\ x=4$ | MW1 | 1 | Final values. |\n\n### Final Answer\n\n`(i)` proved; `(ii) x=3` or `x=4`.\n\n### What the Examiner Wanted\n\nThe quotient law proof underpins the equation. Both final answers satisfy the logarithm domains."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ019",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**6**\n\nThe temperature, $H^\\circ$ centigrade, of the heating element in an electric heater, $t$ seconds after it has been switched off, is given by\n\n$$\nH=10+60e^{-kt}\n$$\n\nwhere $k$ is a constant.\n\n**(i)** Find the initial temperature of the element. [2]\n\nThe heating element takes 30 seconds to reach $20^\\circ\\mathrm{C}$.\n\n**(ii)** Show that $k=0.0597$ to 3 significant figures. [4]\n\n**(iii)** Find the rate at which the temperature of the element is changing after 1 minute. [4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad H=10+60e^0=70^\\circ$ | M1W1 | 2 | Uses $t=0$. |\n| 2 | $(ii)\\quad 20=10+60e^{-30k}$ | M1 | 1 | Substitutes $t=30$ and $H=20$. |\n| 3 | $e^{-30k}=\\dfrac16$ |  | 0 | Rearranges. |\n| 4 | $k=-\\dfrac{1}{30}\\ln\\dfrac16$ | M1W1 | 2 | Uses natural logs. |\n| 5 | $k=0.0597253=0.0597$ | W1 | 1 | Shows the required value. |\n| 6 | $(iii)\\quad \\dfrac{dH}{dt}=-60ke^{-kt}$ | M1W1 | 2 | Differentiates the model. |\n| 7 | $t=60,\\quad \\dfrac{dH}{dt}=-0.099542^\\circ/\\text{s}$ | M1 | 1 | Substitutes one minute. |\n| 8 | $=-0.0995^\\circ/\\text{s}$ | W1 | 1 | Final rate. |\n\n### Final Answer\n\n`(i) 70°C`; `(ii) k=0.0597`; `(iii) -0.0995°C/s`.\n\n### What the Examiner Wanted\n\nThis old C3 question uses exponential modelling and differentiation. The negative rate indicates cooling."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ020",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**(b)** The amount of the Carbon-14 isotope remaining in a substance after $t$ years can be written as\n\n$$\nN=N_0e^{-kt}\n$$\n\nwhere $N_0$ is the amount of the substance when $t=0$.\n\nThe half-life of the Carbon-14 isotope is 5730 years.\n\n**(i)** Find the value of the constant $k$. [3]\n\n**(ii)** Calculate what percentage of the isotope will be left after 1000 years. [2]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n**Note:** The questions PDF labels this as C3 June 2010 Question 8(b), while the matching mark scheme page is headed C3 June 2010 Question 6(b).\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(b)(i)\\quad \\dfrac12N_0=N_0e^{-k5730}$ | M1 | 1 | Uses the half-life condition. |\n| 2 | $\\ln\\dfrac12=\\ln e^{-5730k}$ | M1 | 1 | Takes natural logs. |\n| 3 | $k=\\dfrac{\\ln2}{5730}=0.000121$ | MW1 | 1 | Final value of $k$. |\n| 4 | $(ii)\\quad N_0e^{-1000\\left(\\frac{\\ln2}{5730}\\right)}$ | MW1 | 1 | Substitutes $t=1000$. |\n| 5 | $=88.6\\%$ | W1 | 1 | Final percentage. |\n\n### Final Answer\n\n`k=\\ln2/5730=0.000121`; `88.6%` left after 1000 years.\n\n### What the Examiner Wanted\n\nThe examiner wanted the half-life condition used to find $k$, then the same decay model applied to 1000 years."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ021",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**3**\n\nFig. 1 below shows the graph of $y=\\ln x$.\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-001]\n\n**(i)** Sketch the graph of\n\n$$\ny=\\ln(x+2)\n$$\n\nshowing the vertical asymptote.\nWrite down the coordinates of $A'$, the image of the point $A$. [3]\n\n**(ii)** Sketch the graph of\n\n$$\ny=\\lvert \\ln(x+2)\\rvert\n$$\n\n[2]\n\n**(iii)** Find the exact values of $x$ for which\n\n$$\n\\lvert \\ln(x+2)\\rvert=2\n$$\n\n[5]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-002]\n\n[VISUAL REFERENCE: AS1-Exponentials-Logarithms-Questions-AS1LogarithmsAndExponentialsQ021TikZ-003]\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)$ Sketch of $y=\\ln(x+2)$ with vertical asymptote $x=-2$. | MW1 | 1 | Correct asymptote. |\n| 2 | Correct translated logarithmic curve. | MW1 | 1 | Horizontal shift left 2. |\n| 3 | $A\\prime=(-1,0)$ | W1 | 1 | Image of $A$. |\n| 4 | $(ii)$ Correct sketch of $y=\\lvert\\ln(x+2)\\rvert$. | M1 | 1 | Reflects negative branch. |\n| 5 | Curve has minimum at $A\\prime=(-1,0)$. | W1 | 1 | Key point retained. |\n| 6 | $(iii)\\quad \\ln(x+2)=2\\quad\\text{or}\\quad \\ln(x+2)=-2$ | M1 W2 | 3 | Uses modulus definition. |\n| 7 | $x=e^2-2\\quad\\text{or}\\quad x=e^{-2}-2$ | MW2 | 2 | Exact solutions. |\n\n### Final Answer\n\n`A'=(-1,0)`; exact solutions `x=e^2-2` or `x=e^{-2}-2`.\n\n### What the Examiner Wanted\n\nThe sketch marks depend on the horizontal translation and modulus reflection. The equation marks come from considering both positive and negative cases."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ022",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n**4**\n\nA population of microorganisms grows according to the rule\n\n$$\nN=15000e^{0.7t}\n$$\n\nwhere $N$ is the size of the population at time $t$ hours.\n\n**(i)** Find the initial population. [1]\n\n**(ii)** Find how long it will take for the population to treble. [6]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad t=0,\\quad N=15000$ | MW1 | 1 | Initial population. |\n| 2 | $(ii)\\quad 45000=15000e^{0.7t}$ | M1W1 | 2 | Sets population to treble. |\n| 3 | $3=e^{0.7t}$ | M1W1 | 2 | Simplifies. |\n| 4 | $t=\\dfrac{\\ln3}{0.7}$ | MW1 | 1 | Solves with natural logs. |\n| 5 | $=1.57\\text{ hours}$ | W1 | 1 | Final time. |\n\n### Final Answer\n\n`15000`; `1.57 hours`.\n\n### What the Examiner Wanted\n\nThe solution interprets the model at $t=0$ and then uses logarithms to solve the trebling equation."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ023",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**1**\n\nA radioactive substance decays at a rate which can be modelled by the equation\n\n$$\nB=5000e^{-0.007t}\n$$\n\nwhere $B$ is the number of particles of the substance remaining at any time $t$ seconds.\n\nFind the value of $t$ when 3000 particles remain. [4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $3000=5000e^{-0.007t}$ | M1 | 1 | Substitutes $B=3000$. |\n| 2 | $0.6=e^{-0.007t}$ | W1 | 1 | Simplifies. |\n| 3 | $\\ln0.6=-0.007t$ | M1 | 1 | Takes natural logs. |\n| 4 | $t=73.0\\text{ sec}$ | W1 | 1 | Final time. |\n\n### Final Answer\n\n`t=73.0 seconds`.\n\n### What the Examiner Wanted\n\nThe marks come from substituting into the exponential decay model and solving with natural logarithms."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ024",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 2,
    "questionMarkdown": "### Question\n\n**5**\n\n**(a)** The temperature, $C$, of an ingot of cooling metal can be modelled by\n\n$$\nC=12+80e^{-\\frac{t}{30}}\n$$\n\nwhere $t$ is measured in minutes.\n\nFind $C$ when $t=20$. [2]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $12+80e^{-20/30}$ | M1 | 1 | Substitutes $t=20$. |\n| 2 | $C=53.0734=53.1^\\circ$ | W1 | 1 | Final temperature. |\n\n### Final Answer\n\n`C=53.1°`.\n\n### What the Examiner Wanted\n\nThis is a direct substitution into the exponential cooling model."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ025",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n**2**\n\nA number of goldfish were introduced into a garden pond.\nAfter $t$ years the number of goldfish, $N$, can be modelled by the equation\n\n$$\nN=5e^{0.25t}\\qquad t\\geq 0\n$$\n\n**(i)** Find the number of goldfish that were introduced into the garden pond. [1]\n\n**(ii)** Find the number of complete years it would take for the number of goldfish to double. [3]\n\n**(iii)** Evaluate $\\dfrac{dN}{dt}$ when $t=4$ and state what this value represents. [4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(i)\\quad \\text{When }t=0,\\ N_0=5$ | MW1 | 1 | Initial number. |\n| 2 | $(ii)\\quad 2N_0=5e^{0.25t}$ | MW1 | 1 | Sets the number to double. |\n| 3 | $2=e^{0.25t}$ |  | 0 | Uses $N_0=5$. |\n| 4 | $\\ln2=0.25t$ | M1 | 1 | Takes natural logs. |\n| 5 | $4\\ln2=t=2.77258\\ldots$ |  | 0 | Solves for $t$. |\n| 6 | $t=3\\text{ yrs}$ | W1 | 1 | Complete years. |\n| 7 | $(iii)\\quad \\dfrac{dN}{dt}=\\dfrac54e^{0.25t}$ | M1W1 | 2 | Differentiates. |\n| 8 | $\\text{When }t=4,\\quad \\dfrac{dN}{dt}=3.3978=3.40\\text{ (3 s.f.)}$ | MW1 | 1 | Evaluates at $t=4$. |\n| 9 | Rate of increase in the number of goldfish when $t=4$. | M1 | 1 | Interprets the derivative. |\n\n### Final Answer\n\n`5 goldfish`; `3 complete years`; `3.40`, the rate of increase in the number of goldfish when `t=4`.\n\n### What the Examiner Wanted\n\nThis old C3 item tests modelling, solving by logarithms, differentiating the model, and interpreting the derivative in context."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ026",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**6**\n\nA sample of radium loses mass at a rate of 4% per century.\n\nFind, in years, the half-life of radium, i.e. the time taken for its mass to be halved. [6]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Let $N_0$ be the initial mass of radium. |  | 0 | Defines initial amount. |\n| 2 | $N_0(1-0.04)^t=N$ | M1 W1 | 2 | Forms decay model per century. |\n| 3 | At half-life, $N=\\dfrac{N_0}{2}$. |  | 0 | Half-life condition. |\n| 4 | $N_0\\,0.96^t=\\dfrac{N_0}{2}$ | MW1 | 1 | Substitutes half-life. |\n| 5 | $0.96^t=0.5$ |  | 0 | Cancels $N_0$. |\n| 6 | $\\ln0.96^t=\\ln0.5$, so $t\\ln0.96=\\ln0.5$ | M1 | 1 | Takes logarithms. |\n| 7 | $t=16.9797$ | W1 | 1 | Half-life in centuries. |\n| 8 | $=1697.97\\text{ yr}=1700\\text{ yr (3 s.f.)}$ | W1 | 1 | Converts to years. |\n\n### Final Answer\n\n`1700 years` to 3 significant figures.\n\n### What the Examiner Wanted\n\nThe key issue is that the 4% loss is per century, so the logarithmic solution is first in centuries and then converted into years."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ027",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**(b)** The number of bacteria in a Petri dish can be modelled by the equation\n\n$$\nN=N_0e^{kt}\n$$\n\nwhere $N$ is the number of bacteria present after $t$ seconds and $N_0$ is the initial number of bacteria.\n\n**(i)** If it takes 10 seconds for the number of bacteria to double, find the value of $k$. [4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n**Note:** The questions PDF includes only part (b)(i). The mark scheme page also contains part (b)(ii), which is listed later under unmatched mark scheme entries.\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(b)(i)\\quad N=N_0e^{kt}$ |  | 0 | Given model. |\n| 2 | $t=10,\\quad N=2N_0$ |  | 0 | Uses doubling condition. |\n| 3 | $2N_0=N_0e^{kt}$ | M1 | 1 | Substitutes into model. |\n| 4 | $2=e^{10k}$ | W1 | 1 | Cancels $N_0$. |\n| 5 | $\\ln2=10k$ | M1 | 1 | Takes natural logs. |\n| 6 | $k=\\dfrac{1}{10}\\ln2=0.0693$ | MW1 | 1 | Final value. |\n\n### Final Answer\n\n`k=(1/10)\\ln2=0.0693`.\n\n### What the Examiner Wanted\n\nThe examiner wanted the doubling condition substituted into the exponential model and then solved using natural logarithms."
  },
  {
    "id": "AS1LogarithmsAndExponentialsQ028",
    "moduleId": "P5",
    "topic": "Exponentials & Logarithms",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**3**\n\n**(a)** **(i)** Given that\n\n$$\n\\log_2 a=3\n$$\n\nstate the value of $a$. [1]\n\n**(ii)** Hence solve the equation\n\n$$\n\\log_2 x-\\log_2(x-1)=3\n$$\n\n[5]\n\n**(b)** Find the exact solution of the equation\n\n$$\n3e^{2x}-4=0\n$$\n\n[4]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(a)(i)\\quad a=8$ | MW1 | 1 | Converts from log form. |\n| 2 | $(a)(ii)\\quad \\log_2\\left(\\dfrac{x}{x-1}\\right)=3$ | M1 W1 | 2 | Uses quotient law. |\n| 3 | $\\dfrac{x}{x-1}=8$ | M1 W1 | 2 | Converts to exponential form. |\n| 4 | $x=8x-8$, so $7x=8$ and $x=\\dfrac87$ | W1 | 1 | Solves for $x$. |\n| 5 | $(b)\\quad 3e^{2x}=4$ | M1 | 1 | Rearranges. |\n| 6 | $e^{2x}=\\dfrac43$ | W1 | 1 | Divides by 3. |\n| 7 | $2x=\\ln\\dfrac43$ | M1 | 1 | Takes natural logs. |\n| 8 | $x=\\dfrac12\\ln\\dfrac43$ | W1 | 1 | Exact solution. |\n\n### Final Answer\n\n`a=8`; `x=8/7`; `x=(1/2)\\ln(4/3)`.\n\n### What the Examiner Wanted\n\nThis new-spec AS1 question rewards log laws, domain-aware solving, and exact answers using natural logarithms.\n\n\n\n## Unmatched Mark Scheme Entries\n\n### C3 June 2018 Question 3(b)(ii)\n\n\n**Status:** Matching question text was not found in the supplied questions PDF. The questions PDF only shows part (b)(i) of this question.\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $N=N_0e^{0.0693t}$ |  | 0 | Uses part (i). |\n| 2 | $N_0=3000$, $t=120$ seconds |  | 0 | Substitutes given data from missing question part. |\n| 3 | $N=3000e^{0.0693\\times120}$ |  | 0 | Calculates population. |\n| 4 | $N=12300000$ to 3 s.f. $(12266316.5)$ | MW1 | 1 | Final answer shown in mark scheme. |"
  }
];
