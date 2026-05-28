import { PracticeQuestion } from '@/core/types';

export const P7_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1IntegrationQ001",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n**2**  \n**(i)** Given that\n\n$$\n\\frac{(x^2+2)^2}{x^2}=x^2+B+\\frac{C}{x^2},\n$$\n\nshow that $B=C=4$. **[3]**\n\n**(ii)** Hence find\n\n$$\n\\int_1^2 \\frac{(x^2+2)^2}{x^2}\\,dx.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\dfrac{(x^2+2)^2}{x^2}=\\dfrac{x^4+4x^2+4}{x^2}$ | M1W1 | 2 | Expands and forms one fraction. |\n| 2 | $=x^2+4+\\dfrac{4}{x^2}\\;\\therefore\\;B=C=4$ | W1 | 1 | Identifies both constants. |\n| 3 | $\\displaystyle \\int_1^2 \\frac{(x^2+2)^2}{x^2}\\,dx=\\int_1^2\\left(x^2+4+\\frac{4}{x^2}\\right)dx$ | — | 0 | Uses part (i). |\n| 4 | $\\displaystyle \\left[\\frac{x^3}{3}+4x-\\frac{4}{x}\\right]_1^2$ | MW3 | 3 | Integrates correctly. |\n| 5 | $\\displaystyle \\left(\\frac83+8-2\\right)-\\left(\\frac13+4-4\\right)$ | M1 | 1 | Substitutes limits. |\n| 6 | $\\displaystyle 8\\frac13$ | W1 | 1 | Final value. |\n\n### Final Answer\n\n`B = C = 4`, and\n\n$$\n\\int_1^2 \\frac{(x^2+2)^2}{x^2}\\,dx=8\\frac13.\n$$\n\n### What the Examiner Wanted\n\nThe key marks came from expanding the numerator, simplifying the integrand, applying the power rule, and subtracting lower from upper.\n\n---"
  },
  {
    "id": "AS1IntegrationQ002",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**6**  \n**(a)** Find\n\n$$\n\\int \\left(3-x^{-3}\\right)\\,dx.\n$$\n\n**[3]**\n\n**(b)** Fig. 2 below shows a sketch of the graph of\n\n$$\ny=4x^2-x^3\n$$\n\nfor $0\\leq x\\leq a$, where $a>4$.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ002TikZ-001]\n\nGiven that the two shaded regions have equal areas, find $a$. **[8]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ002TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(3-x^{-3})\\,dx=3x+\\frac{x^{-2}}{2}+c$ | MW3 | 3 | Integrates part (a). |\n| 2 | $\\displaystyle \\text{Area}=\\int_0^a(4x^2-x^3)\\,dx$ | M2W1 | 3 | Sets up signed area. |\n| 3 | $\\displaystyle \\left[\\frac{4x^3}{3}-\\frac{x^4}{4}\\right]_0^a$ | MW2 | 2 | Integrates and applies limits. |\n| 4 | $\\displaystyle =\\frac{4a^3}{3}-\\frac{a^4}{4}$ | W1 | 1 | Simplifies result. |\n| 5 | $\\displaystyle \\text{if 2 areas equal then }\\frac{4a^3}{3}-\\frac{a^4}{4}=0$ | M1 | 1 | Uses equal-area condition. |\n| 6 | $\\displaystyle a^3\\left(\\frac43-\\frac{a}{4}\\right)=0$ | — | 0 | Factorisation shown. |\n| 7 | $\\displaystyle a\\ne0\\text{ or }a=\\frac{16}{3}$ | MW1 | 1 | Uses $a>4$. |\n\n### Final Answer\n\n$$\n\\int(3-x^{-3})\\,dx=3x+\\frac{x^{-2}}2+c,\\qquad a=\\frac{16}{3}.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted correct integration of a negative power, then an equation from the equal shaded areas. The condition $a>4$ rejects $a=0$.\n\n### Alternative Method\n\nOfficial alternative method shown in the mark scheme:\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\text{Area}=\\int_0^4(4x^2-x^3)\\,dx$ | M2W1 | 3 | Finds first shaded area. |\n| 2 | $\\displaystyle \\left[\\frac{4x^3}{3}-\\frac{x^4}{4}\\right]_0^4$ | MW2 | 2 | Integrates over $[0,4]$. |\n| 3 | $\\displaystyle =\\frac{256}{3}-64=21\\frac13$ | W1 | 1 | Gets first area. |\n| 4 | $\\displaystyle \\text{Area}=-\\int_4^a(4x^2-x^3)\\,dx$ | M1 | 1 | Uses absolute area below axis. |\n| 5 | $\\displaystyle =-\\left[\\frac{4x^3}{3}-\\frac{x^4}{4}\\right]_4^a$ | — | 0 | Applies limits. |\n| 6 | $\\displaystyle =-\\left(\\frac{4a^3}{3}-\\frac{a^4}{4}-21\\frac13\\right)$ | — | 0 | Rearranges area. |\n| 7 | $\\displaystyle \\text{if 2 areas equal then }21\\frac13=-\\frac{4a^3}{3}$ | — | 0 | Mark scheme line as printed. |\n| 8 | $\\displaystyle \\Rightarrow a=\\frac{16}{3}$ | MW1 | 1 | Final value. |\n\n---"
  },
  {
    "id": "AS1IntegrationQ003",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**5**  \n**(a)** Find\n\n$$\n\\int \\left(6\\sqrt{x}-\\frac{2}{x^3}\\right)\\,dx.\n$$\n\n**[3]**\n\n**(b)** The graphs of\n\n$$\ny=x^2-8x+16\n$$\n\nand\n\n$$\ny=4+6x-x^2\n$$\n\nare shown in Fig. 4 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ003TikZ-001]\n\nThe coordinates of the points of intersection of the curves are $(1,9)$ and $(6,4)$.\n\nFind the area between the 2 curves. **[7]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ003TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int\\left(6\\sqrt{x}-\\frac{2}{x^3}\\right)dx=4x^{3/2}+\\frac{1}{x^2}+c$ | MW3 | 3 | Integrates part (a). |\n| 2 | $\\displaystyle \\int_1^6\\left(4+6x-x^2-(x^2-8x+16)\\right)dx$ | M2 W2 | 4 | Uses top minus bottom. |\n| 3 | $\\displaystyle \\int_1^6(-12+14x-2x^2)dx$ | — | 0 | Simplifies integrand. |\n| 4 | $\\displaystyle \\left[-12x+7x^2-\\frac23x^3\\right]_1^6$ | MW2 | 2 | Integrates and applies limits. |\n| 5 | $\\displaystyle =36-\\left(-5\\frac23\\right)=41\\frac23$ | MW1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n4x^{3/2}+\\frac{1}{x^2}+c,\n\\qquad \\text{area}=41\\frac23.\n$$\n\n### What the Examiner Wanted\n\nThe main method was to integrate the difference of the two curves between the given intersection points.\n\n---"
  },
  {
    "id": "AS1IntegrationQ004",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**5**  \n**(a)** Integrate\n\n$$\n4x^{-2}+3-7x^{1/2}.\n$$\n\n**[4]**\n\n**(b)** A hill walking club has designed a new club logo. The club drew the logo as shown in Fig. 2 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ004TikZ-001]\n\nThe curve can be modelled by the equation\n\n$$\ny=2x^3-8x^2+7x+3.\n$$\n\nThe shaded area is to be coloured green.\n\nCalculate the area of the green part of the logo. **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ004TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(4x^{-2}+3-7x^{1/2})dx$ | — | 0 | Part (a) setup. |\n| 2 | $\\displaystyle -4x^{-1}+3x-\\frac{14}{3}x^{3/2}+c$ | MW4 | 4 | Integrates all terms. |\n| 3 | $\\displaystyle =-\\frac4x+3x-\\frac{14\\sqrt{x^3}}{3}+c$ | — | 0 | Equivalent form. |\n| 4 | $\\displaystyle A=\\int_0^3(2x^3-8x^2+7x+3)dx$ | M1 W2 | 3 | Sets up logo area. |\n| 5 | $\\displaystyle A=\\left[\\frac12x^4-\\frac83x^3+\\frac72x^2+3x\\right]_0^3$ | MW2 | 2 | Integrates and applies limits. |\n| 6 | $\\displaystyle A=[40.5-72+31.5+9]-0=9$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n-4x^{-1}+3x-\\frac{14}{3}x^{3/2}+c,\n\\qquad A=9.\n$$\n\n### What the Examiner Wanted\n\nThe key area step was to integrate the modelled curve from $x=0$ to $x=3$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ005",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**4**  \n**(a)** Find\n\n$$\n\\int \\left(5x^2-7x^{-2}\\right)\\,dx.\n$$\n\n**[3]**\n\n**(b)** The curve\n\n$$\ny=8-x^{3/2}\n$$\n\nis sketched in Fig. 2 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ005TikZ-001]\n\nFind the area bounded by the curve and the axes. **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ005TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(5x^2-7x^{-2})dx=\\frac53x^3+7x^{-1}+c$ | MW3 | 3 | Integrates part (a). |\n| 2 | $\\displaystyle \\int_0^4(8-x^{3/2})dx$ | M2 W1 | 3 | Sets up area. |\n| 3 | $\\displaystyle \\left[8x-\\frac25x^{5/2}\\right]_0^4$ | MW2 | 2 | Integrates and applies limits. |\n| 4 | $\\displaystyle (32-12.8)-(0)=19.2\\text{ units}^2$ | MW1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n\\frac53x^3+7x^{-1}+c,\n\\qquad 19.2\\text{ units}^2.\n$$\n\n### What the Examiner Wanted\n\nThe examiner expected the x-intercept $x=4$ from the diagram and the correct definite integral from $0$ to $4$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ006",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**6**  \n**(a)** Integrate\n\n$$\n5x+x^{1/3}+7.\n$$\n\n**[4]**\n\n**(b)** Part of the graph of\n\n$$\ny=\\frac{1}{x^2}\n$$\n\nis shown in Fig. 3 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ006TikZ-001]\n\nFind the area enclosed between this part of the graph, the $y$-axis and the lines $y=1$ and $y=4$. **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ006TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(5x+x^{1/3}+7)dx=\\frac52x^2+\\frac34x^{4/3}+7x+c$ | MW4 | 4 | Integrates part (a). |\n| 2 | $\\displaystyle \\int_1^4x\\,dy$ | M2W1 | 3 | Sets up area using $y$. |\n| 3 | $\\displaystyle =\\int_1^4 y^{-1/2}\\,dy$ | MW1 | 1 | Uses $x=y^{-1/2}$. |\n| 4 | $\\displaystyle =\\left[2y^{1/2}\\right]_1^4$ | MW1 | 1 | Integrates. |\n| 5 | $\\displaystyle =4-2=2$ | MW1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n\\frac52x^2+\\frac34x^{4/3}+7x+c,\n\\qquad \\text{area}=2.\n$$\n\n### What the Examiner Wanted\n\nThe mark scheme uses integration with respect to $y$, since the region is bounded by horizontal lines $y=1$ and $y=4$.\n\n### Alternative Method\n\nOfficial alternative method shown in the mark scheme:\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int_{1/2}^1x^{-2}\\,dx$ | MW1 | 1 | Uses corresponding x-values. |\n| 2 | $\\displaystyle =[-x^{-1}]_{1/2}^{1}$ | MW1 | 1 | Integrates. |\n| 3 | $\\displaystyle =(-1)-(-2)=1$ | MW1 | 1 | Evaluates integral. |\n| 4 | $\\displaystyle \\text{Area}=1-\\frac12+\\frac32=2$ | MW3 | 3 | Adds/subtracts simple regions. |\n\n---"
  },
  {
    "id": "AS1IntegrationQ007",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**1**  \n**(a)** Find\n\n$$\n\\int \\left(4x^3+2x^{1/2}+7+x^{-2}\\right)\\,dx.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(4x^3+2x^{1/2}+7+x^{-2})dx$ | — | 0 | Setup. |\n| 2 | $\\displaystyle =\\frac{4x^4}{4}+\\frac{2x^{3/2}}{3/2}+7x-x^{-1}+c$ | — | 0 | Applies power rule. |\n| 3 | $\\displaystyle =x^4+\\frac43x^{3/2}+7x-x^{-1}+c$ | MW5 | 5 | Final integrated form. |\n\n### Final Answer\n\n$$\nx^4+\\frac43x^{3/2}+7x-x^{-1}+c.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted all four terms integrated using the power rule and the constant $c$ included.\n\n---"
  },
  {
    "id": "AS1IntegrationQ008",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 13,
    "questionMarkdown": "### Question\n\n**4**  \nFig. 1 below shows sketches of the curve\n\n$$\ny=x^2-4x+4\n$$\n\nand the straight line\n\n$$\ny=x+4.\n$$\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ008TikZ-001]\n\n**(i)** Verify that the curve and the line intersect at the point $(0,4)$. **[2]**\n\n**(ii)** Find the shaded area. **[11]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ008TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $y=x+4$; if $x=0$ then $y=4$ | — | 0 | Checks line. |\n| 2 | $y=x^2-4x+4$; if $x=0$ then $y=4$ | — | 0 | Checks curve. |\n| 3 | $\\therefore$ intersect at $(0,4)$ | MW2 | 2 | Verifies intersection. |\n| 4 | When $y=0$, $x=-4$ for the line | MW1 | 1 | Finds line intercept. |\n| 5 | $y=0:\\;x^2-4x+4=0$ | — | 0 | Curve intercept equation. |\n| 6 | $(x-2)^2=0$, so $x=2$ | M1 W1 | 2 | Finds curve intercept. |\n| 7 | $\\displaystyle \\text{Req. Area}=\\text{area }\\triangle+\\int_0^2(x^2-4x+4)dx$ | M1 M1 W1 | 3 | Sets up composite area. |\n| 8 | $\\displaystyle =\\frac{4\\times4}{2}+\\left[\\frac{x^3}{3}-2x^2+4x\\right]_0^2$ | MW2 | 2 | Integrates and adds triangle. |\n| 9 | $\\displaystyle =8+\\left(\\frac83-8+8\\right)$ | MW1 MW1 | 2 | Evaluates terms. |\n| 10 | $\\displaystyle =10\\frac23\\text{ unit}^2$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n\\text{Shaded area}=10\\frac23\\text{ unit}^2.\n$$\n\n### What the Examiner Wanted\n\nThe method was to split the shaded region into a triangle under the line and an integral under the curve.\n\n---"
  },
  {
    "id": "AS1IntegrationQ009",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 12,
    "questionMarkdown": "### Question\n\n**6**  \n**(a)** Find\n\n$$\n\\int \\left(3x^{1/2}+x^{-2}\\right)\\,dx.\n$$\n\n**[2]**\n\n**(b)** The gradient of a curve at any point on the curve is given by\n\n$$\n\\frac{dy}{dx}=2x-9x^2.\n$$\n\nThe area between the curve, the $x$-axis and the lines $x=0$ and $x=1$ is $\\frac{19}{12}$.\n\nThis area lies above the $x$-axis.\n\nFind the equation of the curve. **[10]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(3x^{1/2}+x^{-2})dx=2x^{3/2}-x^{-1}+c$ | MW2 | 2 | Integrates part (a). |\n| 2 | $\\displaystyle \\frac{dy}{dx}=2x-9x^2$ | — | 0 | Given gradient. |\n| 3 | $\\displaystyle y=x^2-3x^3+c$ | M1 W2 | 3 | Integrates gradient. |\n| 4 | $\\displaystyle \\text{Area}=\\int_0^1(x^2-3x^3+c)dx$ | M1 W1 W1 | 3 | Uses area condition. |\n| 5 | $\\displaystyle =\\left[\\frac{x^3}{3}-\\frac{3x^4}{4}+cx\\right]_0^1$ | MW2 | 2 | Integrates with limits. |\n| 6 | $\\displaystyle \\frac13-\\frac34+c=\\frac{19}{12}$ | M1 | 1 | Forms equation for $c$. |\n| 7 | $\\displaystyle c=\\frac{24}{12}=2$ | — | 0 | Solves for $c$. |\n| 8 | $\\displaystyle \\therefore\\text{ eqn }y=x^2-3x^3+2$ | W1 | 1 | Final equation. |\n\n### Final Answer\n\n$$\ny=x^2-3x^3+2.\n$$\n\n### What the Examiner Wanted\n\nThe important idea was to integrate the gradient first, then use the given area to find the constant of integration.\n\n---"
  },
  {
    "id": "AS1IntegrationQ010",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**5**  \n**(a)** Find\n\n$$\n\\int \\frac{2x+3}{\\sqrt{x}}\\,dx.\n$$\n\n**[4]**\n\n**(b)** The rudder for a boat can be modelled by the area enclosed by the graph of\n\n$$\ny=\\sqrt[3]{x-8},\n$$\n\nthe $y$-axis and the line $y=1$, as shown shaded in Fig. 3 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ010TikZ-001]\n\nFind the area of the rudder. **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ010TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(2x^{1/2}+3x^{-1/2})dx$ | MW1 | 1 | Rewrites integrand. |\n| 2 | $\\displaystyle \\frac43x^{3/2}+6x^{1/2}+c$ | MW3 | 3 | Integrates part (a). |\n| 3 | $\\displaystyle A=\\int_{-2}^{1}(y^3+8)dy$ | M2 MW1 W1 | 4 | Sets up rudder area. |\n| 4 | $\\displaystyle A=\\left[\\frac{y^4}{4}+8y\\right]_{-2}^{1}$ | MW1 | 1 | Integrates with limits. |\n| 5 | $\\displaystyle A=20\\frac14\\text{ units}^2$ | MW1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n\\frac43x^{3/2}+6x^{1/2}+c,\n\\qquad A=20\\frac14\\text{ units}^2.\n$$\n\n### What the Examiner Wanted\n\nThe region is more naturally handled by writing $x=y^3+8$ and integrating with respect to $y$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ011",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**2**  \nFind\n\n$$\n\\int \\left(\\frac{16}{x^2}+x^{1/3}+9x-7\\right)\\,dx.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int\\left(\\frac{16}{x^2}+x^{1/3}+9x-7\\right)dx$ | — | 0 | Setup. |\n| 2 | $\\displaystyle =-16x^{-1}+\\frac34x^{4/3}+\\frac92x^2-7x+c$ | MW5 | 5 | Integrates all terms. |\n\n### Final Answer\n\n$$\n-16x^{-1}+\\frac34x^{4/3}+\\frac92x^2-7x+c.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted correct treatment of $x^{-2}$ and $x^{1/3}$, plus the constant of integration.\n\n---"
  },
  {
    "id": "AS1IntegrationQ012",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**6**  \nThe graphs of the curves\n\n$$\ny=x^2 \\quad \\text{and} \\quad y=8\\sqrt{x}\n$$\n\nare shown in Fig. 5 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ012TikZ-001]\n\nThe curves cross at the point $A$.\n\n**(i)** Find the coordinates of $A$. **[3]**\n\nA garden centre has created a logo by reflecting the area between the curves\n\n$$\ny=x^2 \\quad \\text{and} \\quad y=8\\sqrt{x}\n$$\n\nin the $y$-axis, as shown shaded in Fig. 6 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ012TikZ-002]\n\n**(ii)** Find the area of the logo. **[7]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ012TikZ-001]\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ012TikZ-002]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $x^2=8\\sqrt{x}$ | MW1 | 1 | Equates curves. |\n| 2 | $x^{3/2}=8$ | MW1 | 1 | Simplifies equation. |\n| 3 | $x=4$; $y=16$; $A=(4,16)$ | MW1 | 1 | Coordinates of A. |\n| 4 | $\\displaystyle A=\\int_0^4(8\\sqrt{x}-x^2)dx$ | M2 W1 | 3 | Sets up one lobe area. |\n| 5 | $\\displaystyle A=\\left[\\frac{16x^{3/2}}{3}-\\frac{x^3}{3}\\right]_0^4$ | MW2 | 2 | Integrates with limits. |\n| 6 | $\\displaystyle A=\\frac{64}{3}$ | MW1 | 1 | One lobe area. |\n| 7 | $\\displaystyle \\text{Area}=2\\times\\frac{64}{3}\\approx42.7\\text{ unit}^2$ | MW1 | 1 | Doubles for reflection. |\n\n### Final Answer\n\n$$\nA=(4,16),\n\\qquad \\text{logo area}=\\frac{128}{3}\\approx42.7\\text{ unit}^2.\n$$\n\n### What the Examiner Wanted\n\nThe key was to find the intersection first, integrate top minus bottom for one side, then double because of reflection in the $y$-axis.\n\n---"
  },
  {
    "id": "AS1IntegrationQ013",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**7**  \n**(a)** Integrate\n\n$$\n\\frac{x}{3}+\\frac{4}{x^2}-6\\sqrt{x}\n$$\n\nwith respect to $x$. **[4]**\n\n**(b)** Find the area enclosed by the curve\n\n$$\ny=x^2-4x+3,\n$$\n\nthe $x$-axis and the lines $x=1$ and $x=4$. **[7]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\frac{x^2}{6}-\\frac4x-4x^{3/2}+c$ | MW4 | 4 | Integrates part (a). |\n| 2 | $0=x^2-4x+3$ | — | 0 | Finds x-intercepts. |\n| 3 | $x=1\\text{ or }x=3$ | M1 W1 | 2 | Roots identified. |\n| 4 | $\\displaystyle A=-\\int_1^3(x^2-4x+3)dx+\\int_3^4(x^2-4x+3)dx$ | M2 W1 | 3 | Splits at sign change. |\n| 5 | $\\displaystyle A=-\\left[\\frac{x^3}{3}-2x^2+3x\\right]_1^3+\\left[\\frac{x^3}{3}-2x^2+3x\\right]_3^4$ | MW1 | 1 | Integrates. |\n| 6 | $\\displaystyle A=1\\frac13+1\\frac13=2\\frac23$ | W1 | 1 | Final total area. |\n\n### Final Answer\n\n$$\n\\frac{x^2}{6}-\\frac4x-4x^{3/2}+c,\n\\qquad A=2\\frac23.\n$$\n\n### What the Examiner Wanted\n\nThe area must be split at $x=3$ because the curve changes sign between $x=1$ and $x=4$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ014",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**1**  \n**(a)** The gradient of a curve is given by\n\n$$\n\\frac{dy}{dx}=4+\\frac{1}{x^2}.\n$$\n\nThe point $(1,7)$ lies on the curve.\n\nFind the equation of the curve. **[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle y=\\int\\left(4+\\frac{1}{x^2}\\right)dx$ | M1 | 1 | Integrates gradient. |\n| 2 | $y=4x-x^{-1}+c$ | W2 | 2 | Correct general curve. |\n| 3 | $x=1,\\;y=7\\;\\therefore\\;c=4$ | M1 | 1 | Uses given point. |\n| 4 | $\\displaystyle y=4x-\\frac1x+4$ | W1 | 1 | Final equation. |\n\n### Final Answer\n\n$$\ny=4x-\\frac1x+4.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted the constant of integration found using the point $(1,7)$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ015",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**(b)** The graph of the curve\n\n$$\ny=x^{1/3}+4x\n$$\n\nis shown in Fig. 1 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ015TikZ-001]\n\nFind the area of the region bounded by the curve, the lines $x=1$ and $x=8$ and the $x$-axis. **[4]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ015TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int_1^8(x^{1/3}+4x)dx$ | M1 | 1 | Sets up area. |\n| 2 | $\\displaystyle \\left[\\frac34x^{4/3}+2x^2\\right]_1^8$ | MW2 | 2 | Integrates and applies limits. |\n| 3 | $\\displaystyle [12+128]-\\left[\\frac34+2\\right]$ | — | 0 | Substitutes limits. |\n| 4 | $137.25$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n137.25.\n$$\n\n### What the Examiner Wanted\n\nThe key was setting up the definite integral over $x=1$ to $x=8$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ016",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**1**  \nFind\n\n$$\n\\int \\left(6t^2+t^{1/2}+9-3t^{-3}\\right)\\,dt.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int(6t^2+t^{1/2}+9-3t^{-3})dt$ | — | 0 | Setup. |\n| 2 | $\\displaystyle =2t^3+\\frac{2t^{3/2}}{3}+9t+\\frac{3t^{-2}}{2}+c$ | MW5 | 5 | Integrates all terms. |\n\n### Final Answer\n\n$$\n2t^3+\\frac{2t^{3/2}}{3}+9t+\\frac{3t^{-2}}{2}+c.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted correct handling of fractional and negative powers of $t$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ017",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**3**  \nThe line $y=8$ crosses the curve $y=6x-x^2$ at the points $A$ and $B$.\n\n**(i)** Find the $x$ coordinates of $A$ and $B$. **[2]**\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ017TikZ-001]\n\n**(ii)** Hence find the area bounded by the line $y=8$ and the curve $y=6x-x^2$. **[7]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ017TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $6x-x^2=8$ | — | 0 | Equates line and curve. |\n| 2 | $x^2-6x+8=0$ | — | 0 | Rearranges. |\n| 3 | $(x-2)(x-4)=0$ | — | 0 | Factorises. |\n| 4 | $x=2\\text{ or }4$ | M1 W1 | 2 | Intersection x-values. |\n| 5 | $\\displaystyle \\text{Area}=\\int_2^4(6x-x^2)dx-(4-2)\\times8$ | M2 W1 | 3 | Curve area minus rectangle. |\n| 6 | $\\displaystyle =\\left[3x^2-\\frac{x^3}{3}\\right]_2^4-16$ | MW2 MW1 | 3 | Integrates and subtracts. |\n| 7 | $\\displaystyle =\\left(48-\\frac{64}{3}\\right)-\\left(12-\\frac83\\right)-16$ | — | 0 | Substitution shown. |\n| 8 | $\\displaystyle =\\frac43\\text{ unit}^2$ | MW1 | 1 | Final area. |\n\n### Final Answer\n\n$$\nx=2\\text{ or }4,\n\\qquad \\text{area}=\\frac43\\text{ unit}^2.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted intersection points first, then an area calculation between the curve and horizontal line.\n\n---"
  },
  {
    "id": "AS1IntegrationQ018",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**3**  \n**(a)** Find\n\n$$\n\\int \\left(2x^3-\\sqrt{x}+\\frac{1}{x^4}-3\\right)\\,dx.\n$$\n\n**[5]**\n\n**(b)** The curves with equations\n\n$$\ny=x^2-5x+8\n$$\n\nand\n\n$$\ny=-x^2+5x-4\n$$\n\nintersect at the points $(2,2)$ and $(3,2)$, as shown in Fig. 1 below.\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ018TikZ-001]\n\nFind the area enclosed by the curves. **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ018TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int\\left(2x^3-\\sqrt{x}+\\frac1{x^4}-3\\right)dx$ | — | 0 | Setup. |\n| 2 | $\\displaystyle =\\frac12x^4-\\frac23x^{3/2}-\\frac13x^{-3}-3x+c$ | MW4 W1 | 5 | Integrates part (a). |\n| 3 | $\\displaystyle =\\frac12x^4-\\frac{2\\sqrt{x^3}}3-\\frac{1}{3x^3}-3x+c$ | — | 0 | Equivalent form. |\n| 4 | $\\displaystyle \\text{Area}=\\int_2^3\\left((-x^2+5x-4)-(x^2-5x+8)\\right)dx$ | M2 W1 | 3 | Top minus bottom. |\n| 5 | $\\displaystyle =\\int_2^3(-2x^2+10x-12)dx$ | — | 0 | Simplifies. |\n| 6 | $\\displaystyle =\\left[-\\frac23x^3+5x^2-12x\\right]_2^3$ | MW2 | 2 | Integrates with limits. |\n| 7 | $\\displaystyle =\\left[-\\frac23(3)^3+5(3)^2-12(3)\\right]-\\left[-\\frac23(2)^3+5(2)^2-12(2)\\right]$ | — | 0 | Substitution shown. |\n| 8 | $\\displaystyle =\\frac13\\text{ units}^2$ | MW1 | 1 | Final area. |\n\n### Final Answer\n\n$$\n\\frac12x^4-\\frac23x^{3/2}-\\frac13x^{-3}-3x+c,\n\\qquad \\text{area}=\\frac13\\text{ units}^2.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted the correct top curve identified and the integral evaluated over $x=2$ to $x=3$.\n\n---"
  },
  {
    "id": "AS1IntegrationQ019",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**5**  \n**(a)** Find\n\n$$\n\\int \\left(\\frac{3x^{-3}}{2}-6x\\right)\\,dx.\n$$\n\n**[3 marks]**\n\n**(b)** Fig. 2 below shows a sketch of the curve with equation\n\n$$\nx=y^2-5y+4.\n$$\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ019TikZ-001]\n\nCalculate the shaded area. **[6 marks]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Integration-Questions-AS1IntegrationQ019TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\int\\left(\\frac{3x^{-3}}2-6x\\right)dx$ | — | 0 | Setup. |\n| 2 | $\\displaystyle =-\\frac{3x^{-2}}4-3x^2+c$ | MW3 | 3 | Integrates part (a). |\n| 3 | $\\displaystyle \\int_1^4(y^2-5y+4)dy$ | M1W1 | 2 | Sets up signed area. |\n| 4 | $\\displaystyle =\\left[\\frac{y^3}{3}-\\frac52y^2+4y\\right]_1^4$ | MW2 | 2 | Integrates with respect to $y$. |\n| 5 | $\\displaystyle =\\left[-\\frac83\\right]-\\left[\\frac{11}{6}\\right]$ | — | 0 | Substitutes limits. |\n| 6 | $\\displaystyle =-\\frac92$ | W1 | 1 | Signed integral. |\n| 7 | $\\displaystyle \\text{Area}=\\frac92\\text{ square units}$ | M1 | 1 | Takes absolute area. |\n\n### Final Answer\n\n$$\n-\\frac{3x^{-2}}4-3x^2+c,\n\\qquad \\text{area}=\\frac92\\text{ square units}.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted integration with respect to $y$, then the positive area from the magnitude of the signed integral.\n\n---"
  },
  {
    "id": "AS1IntegrationQ020",
    "moduleId": "P7",
    "topic": "Integration",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**5**  \n**(a)** Given that\n\n$$\n\\int_1^k 2\\sqrt{x}\\,dx=\\frac{28}{3},\n$$\n\nfind the value of $k$. **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\left[\\frac{4x^{3/2}}{3}\\right]_1^k=\\frac{28}{3}$ | M1 W1 | 2 | Integrates and applies limits. |\n| 2 | $\\displaystyle \\frac{4k^{3/2}}3-\\frac43=\\frac{28}{3}$ | M1 W1 | 2 | Substitutes limits. |\n| 3 | $\\displaystyle \\Rightarrow 4k^{3/2}=32$ | M1 | 1 | Rearranges. |\n| 4 | $\\displaystyle k^{3/2}=8$ | — | 0 | Simplifies. |\n| 5 | $\\displaystyle k=4$ | W1 | 1 | Final value. |\n\n### Final Answer\n\n$$\nk=4.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted the definite integral evaluated first, then the resulting equation solved for $k$.\n\n---\n\n## Unmatched Mark Scheme Entries\n\nNo unmatched mark scheme entries were found. All visible mark scheme sections were matched to questions in the supplied questions PDF."
  }
];
