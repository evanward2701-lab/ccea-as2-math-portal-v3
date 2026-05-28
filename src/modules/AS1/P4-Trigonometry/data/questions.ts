import { PracticeQuestion } from '@/core/types';

export const P4_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1TrigonometryQ001",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Right triangle with hypotenuse $q$, opposite $p$, adjacent $\\sqrt{q^2-p^2}$. | M1W1 | 2 | Constructs a suitable triangle using Pythagoras. |\n| 2 | $\\displaystyle \\tan A=\\frac{p}{\\sqrt{q^2-p^2}}$ | MW1 | 1 | Forms tangent from opposite over adjacent. |\n| 3 | $\\displaystyle \\tan^2 A=\\frac{p^2}{q^2-p^2}$ | MW1 | 1 | Squares the tangent expression. |\n| 4 | $\\displaystyle \\frac12\\tan x-\\sin x=0$ | — | 0 | Starting equation. |\n| 5 | $\\displaystyle \\frac12\\frac{\\sin x}{\\cos x}-\\sin x=0$ | MW1 | 1 | Uses $\\tan x=\\sin x/\\cos x$. |\n| 6 | $\\displaystyle \\sin x\\left(\\frac{1}{2\\cos x}-1\\right)=0$ | MW1 | 1 | Factorises using $\\sin x$. |\n| 7 | $\\sin x=0$ or $\\cos x=\\frac12$ | MW2 | 2 | Splits into cases. |\n| 8 | $x=0^\\circ,\\pm180^\\circ,\\pm60^\\circ$ | MW3 | 3 | Lists all solutions in the required interval. |\n\n### Final Answer\n\n`(a) $\\displaystyle \\tan^2 A=\\frac{p^2}{q^2-p^2}$; (b) $x=0^\\circ,\\pm 60^\\circ,\\pm 180^\\circ$`\n\n### What the Examiner Wanted\n\nUse a right triangle to express $\\tan A$ in terms of $p$ and $q$, then solve the trigonometric equation by rewriting tangent as sine divided by cosine and considering every solution in the given interval.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ002",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 17,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ002TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $3\\sin^2x+8\\cos x=0$ | — | 0 | Starting equation. |\n| 2 | $3(1-\\cos^2x)+8\\cos x=0$ | M1 | 1 | Uses $\\sin^2x=1-\\cos^2x$. |\n| 3 | $3-3\\cos^2x+8\\cos x=0$ | W1 | 1 | Expands correctly. |\n| 4 | $3\\cos^2x-8\\cos x-3=0$ | — | 0 | Rearranged quadratic. |\n| 5 | $(3\\cos x+1)(\\cos x-3)=0$ | — | 0 | Factorises. |\n| 6 | $\\cos x=-\\frac13$ or $\\cos x=3$ | MW2 | 2 | Finds possible cosine values and rejects impossible branch later. |\n| 7 | $x=\\pm1.91^c$, no solution from $\\cos x=3$ | MW3 | 3 | Solves in radians over $-\\pi\\le x<\\pi$. |\n| 8 | Distances after 3 hours: $72$ and $45$ nautical miles; included angle $110^\\circ$. | MW3 | 3 | Builds the triangle for the positions at 1200. |\n| 9 | $d^2=72^2+45^2-2\\times72\\times45\\cos110^\\circ$ | M1W1 | 2 | Applies cosine rule. |\n| 10 | $d=97.1$ nm | W1 | 1 | Distance from D to C. |\n| 11 | $\\displaystyle \\frac{\\sin\\theta}{45}=\\frac{\\sin110^\\circ}{97.1}$ | M1W1 | 2 | Applies sine rule to find bearing angle. |\n| 12 | $\\theta=25.8^\\circ$ | W1 | 1 | Finds angle. |\n| 13 | Bearing $=180^\\circ+30^\\circ-25.8^\\circ=184^\\circ$ | MW1 | 1 | Converts angle to bearing. |\n\n### Final Answer\n\n`(a) $x=\\pm1.91^c$; (b) distance $=97.1$ nm, bearing $=184^\\circ$`\n\n### What the Examiner Wanted\n\nPart (a) required conversion to a quadratic in $\\cos x$. Part (b) required converting speeds into distances travelled after 3 hours, then using the cosine rule and sine rule in the bearing diagram.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ003",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ003TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\frac{AC}{\\sin120^\\circ}=\\frac{150}{\\sin35^\\circ}$ | M1 | 1 | Uses sine rule in triangle ABC. |\n| 2 | $AC=226.48=226\\text{ m}$ | W1 | 1 | Finds length of $AC$. |\n| 3 | $\\displaystyle \\text{Area}=\\frac12ab\\sin C=\\frac12\\times150\\times226.48\\times\\sin25^\\circ$ | M1W1 | 2 | Uses included angle $25^\\circ$. |\n| 4 | $\\text{Area}=7178.59=7180\\text{ m}^2$ | W1 | 1 | Area of triangle ABC. |\n| 5 | $226.48^2=300^2+200^2-2\\times300\\times200\\cos D$ | M1W1 | 2 | Uses cosine rule in triangle ADC. |\n| 6 | $D=49.013^\\circ=49.0^\\circ$ | W1 | 1 | Angle $ADC$. |\n| 7 | $\\displaystyle \\text{Area ADC}=\\frac12\\times300\\times200\\sin49.013^\\circ$ | MW1 | 1 | Area of triangle ADC. |\n| 8 | $\\text{Area ADC}=22645.69$ and field area $=22645.69+7178.59=29824.28=29800\\text{ m}^2$ | MW1 | 1 | Adds the two triangle areas. |\n\n### Final Answer\n\n`(i) $AC=226$ m; (ii) $7180\\text{ m}^2$; (iii) $49.0^\\circ$; (iv) $29800\\text{ m}^2$`\n\n### What the Examiner Wanted\n\nThe key was splitting the quadrilateral into two triangles and applying the sine rule, area formula, cosine rule and area formula again.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ004",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Sketch of $y=\\tan2x$ for $-180^\\circ<x<180^\\circ$, with correct repeating tangent branches and asymptotes. | M1 W1 | 2 | Correct graph shape and key features. |\n| 2 | Period $=90^\\circ$ | MW1 | 1 | Uses period of $\\tan(2x)$. |\n| 3 | $2x=71.565^\\circ, 251.565^\\circ, -108.435^\\circ, -288.435^\\circ$ | MW2 | 2 | Solves $\\tan2x=3$ for possible $2x$ values. |\n| 4 | $x=35.8^\\circ,126^\\circ,-54.2^\\circ,-144^\\circ$ | MW2 | 2 | Divides by 2 and keeps values in interval. |\n| 5 | $\\displaystyle \\text{LHS}=\\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta}$ | MW1 | 1 | Uses $1-\\cos^2\\theta=\\sin^2\\theta$. |\n| 6 | $\\displaystyle =\\frac{\\sin\\theta}{\\cos\\theta}$ | MW1 | 1 | Cancels a common factor. |\n| 7 | $=\\tan\\theta$ | MW1 | 1 | Completes the proof. |\n\n### Final Answer\n\n`Period $=90^\\circ$; $x=35.8^\\circ,126^\\circ,-54.2^\\circ,-144^\\circ$; identity proved.`\n\n### What the Examiner Wanted\n\nA correct tangent graph with period $90^\\circ$, all four solutions to the tangent equation in the interval, and a proof using $1-\\cos^2\\theta=\\sin^2\\theta$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ005",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\tan\\theta=3$ | M1 W1 | 2 | Divides by $\\cos\\theta$. |\n| 2 | $\\theta=1.25$ or $\\theta=4.39$ | MW2 | 2 | Gives two radian solutions in $0\\le\\theta\\le2\\pi$. |\n| 3 | $\\cos^2\\theta+2\\sin\\theta\\cos\\theta+\\sin^2\\theta+\\cos^2\\theta-2\\sin\\theta\\cos\\theta+\\sin^2\\theta$ | M1 W1 | 2 | Expands both brackets. |\n| 4 | $2\\cos^2\\theta+2\\sin^2\\theta=2(\\sin^2\\theta+\n\\cos^2\\theta)$ | MW1 | 1 | Collects terms. |\n| 5 | $=2$ | M1 W1 | 2 | Uses $\\sin^2\\theta+\n\\cos^2\\theta=1$. |\n\n### Final Answer\n\n`(a) $\\theta=1.25,4.39$ radians; (b) identity proved.`\n\n### What the Examiner Wanted\n\nThe first part required reducing to a tangent equation. The proof required expanding both squared brackets and using the Pythagorean identity.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ006",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 13,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ006TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $1+\\cos\\theta=2(1-\\cos^2\\theta)$ | M1 W1 | 2 | Converts to a quadratic in $\\cos\\theta$. |\n| 2 | $2\\cos^2\\theta+\n\\cos\\theta-1=0$ | — | 0 | Rearranged quadratic. |\n| 3 | $(2\\cos\\theta-1)(\\cos\\theta+1)=0$ | — | 0 | Factorisation. |\n| 4 | $\\cos\\theta=\\frac12$ or $\\cos\\theta=-1$ | M1 W1 | 2 | Finds possible cosine values. |\n| 5 | $\\theta=60^\\circ,300^\\circ$ or $\\theta=180^\\circ$ | MW2 | 2 | Gives all solutions. |\n| 6 | $t=0$, $A=6\\Rightarrow 6=p\\cos0$ | M1 | 1 | Uses initial condition. |\n| 7 | $p=6$ | W1 | 1 | Finds $p$. |\n| 8 | $t=5$, $A=0\\Rightarrow0=6\\cos5q$ and $90=5q\\Rightarrow q=18$ | W2 | 2 | Uses first zero on cosine curve. |\n| 9 | $2=6\\cos18t$ | M1 | 1 | Sets up equation for $A=2$. |\n| 10 | $18t=70.529$ | W1 | 1 | Solves for the first positive angle. |\n| 11 | $t=3.92$ seconds | MW1 | 1 | Finds first time. |\n\n### Final Answer\n\n`(a) $\\theta=60^\\circ,180^\\circ,300^\\circ$; (b)(i) $p=6$, $q=18$; (ii) $t=3.92$ seconds`\n\n### What the Examiner Wanted\n\nPart (a) required a quadratic in cosine. Part (b) required reading model information from the graph and using the first zero of cosine to identify $q$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ007",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ007TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\frac{12}{\\sin22^\\circ}=\\frac{28}{\\sin B}$ | M1 | 1 | Uses sine rule. |\n| 2 | $B=60.937^\\circ$ | W1 | 1 | Finds acute value first. |\n| 3 | $ABC=119.063^\\circ \\approx 119^\\circ$ | MW1 | 1 | Uses the obtuse condition. |\n| 4 | $ACB=38.937^\\circ$ | MW1 | 1 | Uses triangle angle sum. |\n| 5 | $\\displaystyle \\text{Area}=\\frac12\\times28\\times12\\times\\sin38.937^\\circ$ | M1 | 1 | Uses area formula. |\n| 6 | $\\text{Area}=105.58\\approx106\\text{ cm}^2$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n`(i) $\\angle ABC=119^\\circ$; (ii) area $=106\\text{ cm}^2$`\n\n### What the Examiner Wanted\n\nThe key mark came from recognising the ambiguous sine rule and selecting the obtuse angle specified in the question.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ008",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $40^2=30^2+20^2-2\\times30\\times20\\cos B$ | M1 | 1 | Applies cosine rule. |\n| 2 | $B=104.4775^\\circ\\approx104^\\circ$ | W1 | 1 | Finds angle $ABC$. |\n| 3 | $\\displaystyle \\text{Area}=\\frac12\\times20\\times30\\sin104.4775^\\circ$ | M1 | 1 | Uses area formula. |\n| 4 | $\\text{Area}=290.474\\approx290\\text{ cm}^2$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n`(i) $104^\\circ$; (ii) $290\\text{ cm}^2$`\n\n### What the Examiner Wanted\n\nUse the cosine rule to find the included angle, then use the non-right triangle area formula.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ009",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Sketch of $y=\\cos2x$ over $0\\le x\\le2\\pi$ with two complete cosine cycles. | MW2 | 2 | Correct graph shape and key points. |\n| 2 | Period $=\\pi$ (or $180^\\circ$) | MW1 | 1 | Period of $\\cos2x$. |\n| 3 | $2x=\\frac\\pi3,\\frac{5\\pi}{3},\\frac{7\\pi}{3},\\frac{11\\pi}{3}$ | MW4 | 4 | Finds all values of $2x$. |\n| 4 | $x=\\frac\\pi6,\\frac{5\\pi}{6},\\frac{7\\pi}{6},\\frac{11\\pi}{6}$ | MW1 | 1 | Divides by 2 and keeps values in interval. |\n\n### Final Answer\n\n`Period $=\\pi$; $x=\\frac\\pi6,\\frac{5\\pi}{6},\\frac{7\\pi}{6},\\frac{11\\pi}{6}$`\n\n### What the Examiner Wanted\n\nA correct graph over two cosine periods and a complete set of solutions for $\\cos2x=1/2$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ010",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**Note:** Arithmetic Progression is now on A2 Mathematics.\n\n4 A triangle ABC has a perimeter of 19 cm.  \n$AB$ is the shortest side and has length 4 cm.  \nThe lengths of the sides of the triangle form an arithmetic progression.\n\n(i) Using the sum of an arithmetic progression show that the lengths of the other two sides are $6\\frac13$ cm and $8\\frac23$ cm.\n\n[4]\n\n(ii) Find the angle $BCA$.\n\n[3]\n\n(iii) Find the area of the triangle.\n\n[2]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $S_n=\\frac n2[2a+(n-1)d]$ | M1 | 1 | Uses arithmetic progression sum formula. |\n| 2 | $19=\\frac32[8+2d]$ and $19=12+3d$ | — | 0 | Substitutes $n=3$, first term 4. |\n| 3 | $d=\\frac73$ | W1 | 1 | Finds common difference. |\n| 4 | Other sides are $6\\frac13$ cm and $8\\frac23$ cm. | MW2 | 2 | Shows required lengths. |\n| 5 | $c^2=a^2+b^2-2ab\\cos C$ | M1 | 1 | Applies cosine rule. |\n| 6 | $\\displaystyle \\cos C=\\frac{(8\\frac23)^2+(6\\frac13)^2-4^2}{2\\times8\\frac23\\times6\\frac13}$ | W1 | 1 | Substitutes correct side lengths. |\n| 7 | $\\widehat C=25.33^\\circ=25.3^\\circ$ | W1 | 1 | Finds $BCA$. |\n| 8 | $\\displaystyle \\text{Area}=\\frac12ab\\sin C=\\frac12\\times8\\frac23\\times6\\frac13\\times\\sin25.33^\\circ$ | M1 | 1 | Uses area formula. |\n| 9 | $=11.7\\text{ cm}^2$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n`(i) other sides $6\\frac13$ cm and $8\\frac23$ cm; (ii) $25.3^\\circ$; (iii) $11.7\\text{ cm}^2$`\n\n### What the Examiner Wanted\n\nThe official solution first uses the arithmetic progression condition, then applies cosine rule and area formula to the triangle.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ011",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | At $t=\\pi$, $x=7\\sin\\pi-4\\cos^2\\pi+2$ | MW1 | 1 | Substitutes $t=\\pi$. |\n| 2 | $x=-2$ cm | W1 | 1 | Evaluates displacement. |\n| 3 | At O, $x=0$: $7\\sin t-4\\cos^2 t+2=0$ | MW1 | 1 | Sets displacement to zero. |\n| 4 | $7\\sin t-4(1-\\sin^2t)+2=0$ | M1 | 1 | Converts to sine. |\n| 5 | $4\\sin^2t+7\\sin t-2=0$ | W1 | 1 | Forms quadratic in $\\sin t$. |\n| 6 | $(4s-1)(s+2)=0$ | — | 0 | Factorises with $s=\\sin t$. |\n| 7 | $\\sin t=\\frac14$ or $-2$ impossible | M1 W1 | 2 | Solves possible sine value and rejects impossible value. |\n| 8 | $t=0.253$ or $2.89$ | MW2 | 2 | Gives the two times in $0\\le t\\le2\\pi$. |\n\n### Final Answer\n\n`(i) $x=-2$ cm; (ii) $t=0.253$ s or $t=2.89$ s`\n\n### What the Examiner Wanted\n\nSet $x=0$, convert the equation into a quadratic in $\\sin t$, reject the impossible solution and list both valid times in the interval.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ012",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ012TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Angle $PQR=70^\\circ$ | W1 | 1 | Uses bearing geometry. |\n| 2 | $PR^2=50^2+40^2-2\\times50\\times40\\cos70^\\circ$ | M1 | 1 | Applies cosine rule. |\n| 3 | $PR=52.268\\approx52.3$ miles | W1 | 1 | Finds distance. |\n| 4 | $\\displaystyle \\frac{40}{\\sin P}=\\frac{52.268}{\\sin70^\\circ}$ | M1 | 1 | Applies sine rule. |\n| 5 | $P=45.983^\\circ$ | W1 | 1 | Finds angle at P. |\n| 6 | Bearing $=146^\\circ$ | MW1 | 1 | Converts to required bearing. |\n\n### Final Answer\n\n`(i) $PR=52.3$ miles; (ii) bearing $=146^\\circ$`\n\n### What the Examiner Wanted\n\nThe solution required the included angle from bearings, cosine rule for the direct distance, then sine rule plus bearing interpretation.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ013",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Sketch of $y=\\tan3x$ over $0\\le x\\le\\pi$ with asymptotes at $\\frac\\pi6$, $\\frac\\pi2$, $\\frac{5\\pi}{6}$. | M1 MW1 | 2 | Correct tangent graph over interval. |\n| 2 | Period $=\\frac\\pi3$ (or $60^\\circ$) | MW1 | 1 | Period of $\\tan3x$. |\n| 3 | $\\tan3x=\\sqrt3$ | MW1 | 1 | Reduces equation by dividing by cosine. |\n| 4 | $3x=\\frac\\pi3,\\frac{4\\pi}{3},\\frac{7\\pi}{3}$ | MW3 | 3 | Finds all values for $3x$. |\n| 5 | $x=\\frac\\pi9,\\frac{4\\pi}{9},\\frac{7\\pi}{9}$ | MW1 | 1 | Divides by 3. |\n\n### Final Answer\n\n`Period $=\\frac\\pi3$; $x=\\frac\\pi9,\\frac{4\\pi}{9},\\frac{7\\pi}{9}$`\n\n### What the Examiner Wanted\n\nThe examiner wanted a correct transformed tangent graph and all tangent-equation solutions in the interval.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ014",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ014TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $BD^2=5.4^2+4.9^2-2\\times5.4\\times4.9\\cos35^\\circ$ | M1 | 1 | Applies cosine rule. |\n| 2 | $BD=3.133776\\approx3.13$ km | W1 | 1 | Finds $DB$. |\n| 3 | $\\displaystyle \\frac{5.4}{\\sin B}=\\frac{3.13376}{\\sin35^\\circ}$ | M1 | 1 | Uses sine rule. |\n| 4 | $B=81.253^\\circ\\approx81.3^\\circ$ | W1 | 1 | Finds angle $ABD$. |\n| 5 | $\\Delta ABC=\\frac12\\times5.4\\times4.9\\times\\sin35^\\circ=7.58842$ | M1 W1 | 2 | Finds area of triangle ABD (as labelled in mark scheme). |\n| 6 | $DBC=48.747^\\circ$ and $\\Delta DBC=\\frac12\\times2.1\\times3.13376\\times\\sin48.7474^\\circ=2.4738$ | MW1 | 1 | Finds remaining area. |\n| 7 | Area $=10.1\\text{ km}^2$ | MW1 | 1 | Adds triangle areas. |\n\n### Final Answer\n\n`(i) $DB=3.13$ km; (ii) $\\angle ABD=81.3^\\circ$; (iii) area $=10.1\\text{ km}^2$`\n\n### What the Examiner Wanted\n\nUse cosine rule to find a diagonal, sine rule to find an angle, then split the quadrilateral into two triangles and add the areas.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ015",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 12,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $4-\\sin\\theta=6(1-\\sin^2\\theta)$ | M1 W1 | 2 | Converts to sine. |\n| 2 | $6\\sin^2\\theta-\\sin\\theta-2=0$ | MW1 | 1 | Rearranges quadratic. |\n| 3 | $(2\\sin\\theta+1)(3\\sin\\theta-2)=0$ | — | 0 | Factorises. |\n| 4 | $\\sin\\theta=-\\frac12$ or $\\sin\\theta=\\frac23$ | MW2 | 2 | Finds sine values. |\n| 5 | $\\theta=210^\\circ,330^\\circ$ or $\\theta=41.8^\\circ,138^\\circ$ | MW2 | 2 | Lists all solutions. |\n| 6 | $\\displaystyle \\text{LHS}=\\frac{\\sin\\theta}{\\cos\\theta}+\\frac{\\cos\\theta}{\\sin\\theta}$ | M1 W1 | 2 | Rewrites tangent and reciprocal. |\n| 7 | $\\displaystyle =\\frac{\\sin^2\\theta+\n\\cos^2\\theta}{\\sin\\theta\\cos\\theta}$ | M1 W1 | 2 | Combines fractions. |\n| 8 | $\\displaystyle =\\frac1{\\sin\\theta\\cos\\theta}=\\text{RHS}$ | MW1 | 1 | Uses Pythagorean identity. |\n\n### Final Answer\n\n`(a) $\\theta=41.8^\\circ,138^\\circ,210^\\circ,330^\\circ$; (b) identity proved.`\n\n### What the Examiner Wanted\n\nPart (a) requires converting the equation into a quadratic in $\\sin\\theta$. Part (b) requires writing both tangent terms as sine/cosine and combining fractions.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ016",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ016TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Angle $BRH=100^\\circ$ | MW1 | 1 | Finds included angle from bearings. |\n| 2 | $BH^2=80^2+70^2-2\\times80\\times70\\cos100^\\circ$ | M1 | 1 | Applies cosine rule. |\n| 3 | $BH=115.086\\approx115$ km | W1 | 1 | Finds direct distance to base. |\n| 4 | $\\displaystyle \\frac{70}{\\sin H}=\\frac{115.086}{\\sin100^\\circ}$ | M1 | 1 | Applies sine rule. |\n| 5 | $H=36.798^\\circ$ | W1 | 1 | Finds angle at hospital. |\n| 6 | Bearing $=247^\\circ$ | MW1 | 1 | Converts angle to bearing. |\n\n### Final Answer\n\n`(i) $115$ km; (ii) bearing $247^\\circ$`\n\n### What the Examiner Wanted\n\nThe problem required extracting the included angle from bearings, applying the cosine rule and then determining the bearing from the hospital back to the base.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ017",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 14,
    "questionMarkdown": "### Question\n\n**Note:** Trapezium Rule is now on A2 Mathematics.\n\n6 (a) (i) Sketch the graph of\n\n$$\ny = \\sin 2x\n$$\n\nfor $0 \\le x \\le 2\\pi$.\n\n[2]\n\n(ii) Use the trapezium rule with 5 ordinates to find an approximate value for\n\n$$\n\\int_0^1 \\sin 2x\\,dx\n$$\n\n[5]\n\n(b) Solve\n\n$$\n2\\cos\\theta = 3\\tan\\theta\n$$\n\nfor $0^\\circ < \\theta < 360^\\circ$.\n\n[7]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Sketch of $y=\\sin2x$ for $0\\le x\\le2\\pi$. | MW2 | 2 | Correct sine graph with two cycles. |\n| 2 | Table with $x=0,0.25,0.5,0.75,1$ and $y=0,0.47943,0.84147,0.99749,0.90930$; $h=0.25$. | MW1, MW2 | 3 | Uses five ordinates for trapezium rule. |\n| 3 | $\\displaystyle \\int_0^1\\sin2x\\,dx=\\frac12\\times0.25(0+2(0.47943+0.84147+0.99749)+0.90930)$ | M1 | 1 | Applies trapezium rule. |\n| 4 | $=0.69326\\approx0.693$ | W1 | 1 | Approximate integral. |\n| 5 | $2\\cos\\theta=\\frac{3\\sin\\theta}{\\cos\\theta}$ | MW1 | 1 | Uses tangent definition. |\n| 6 | $2\\cos^2\\theta=3\\sin\\theta$ | MW1 | 1 | Multiplies by $\\cos\\theta$. |\n| 7 | $2(1-\\sin^2\\theta)=3\\sin\\theta$ | MW1 | 1 | Converts to sine. |\n| 8 | $2\\sin^2\\theta+3\\sin\\theta-2=0$ | W1 | 1 | Forms quadratic. |\n| 9 | $(2\\sin\\theta-1)(\\sin\\theta+2)=0$ | — | 0 | Factorises. |\n| 10 | $\\sin\\theta=\\frac12$ or $\\sin\\theta=-2$; $\\theta=30^\\circ$ or impossible; $\\theta=150^\\circ$ | MW1, W2 | 3 | Solves and rejects impossible value. |\n\n### Final Answer\n\n`(a)(i) graph of $y=\\sin2x$; (ii) $0.693$; (b) $\\theta=30^\\circ,150^\\circ$`\n\n### What the Examiner Wanted\n\nThis question combines graph sketching, a trapezium rule calculation and a trigonometric equation reduced to a quadratic in sine.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ018",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $1+\\sin\\theta+\n\\cos^2\\theta-2\\sin^2\\theta=0$ | — | 0 | Starting equation. |\n| 2 | Rearranging and using $\\cos^2\\theta=1-\\sin^2\\theta$ gives $2\\sin^2\\theta+\n\\sin^2\\theta-1-\n\\sin\\theta-1=0$ | M1 | 1 | Converts to sine. |\n| 3 | $3\\sin^2\\theta-\n\\sin\\theta-2=0$ | W1 | 1 | Simplifies quadratic. |\n| 4 | $(3\\sin\\theta+2)(\\sin\\theta-1)=0$ | M1 | 1 | Factorises. |\n| 5 | $\\sin\\theta=-\\frac23$ or $\\sin\\theta=1$ | W1 | 1 | Finds sine values. |\n| 6 | $\\theta=-138^\\circ,-41.8^\\circ$ or $90^\\circ$ | MW1 | 1 | Lists all interval solutions. |\n\n### Final Answer\n\n`$\\theta=-138^\\circ,-41.8^\\circ,90^\\circ$`\n\n### What the Examiner Wanted\n\nConvert the equation to a quadratic in $\\sin\\theta$, factorise, and list the valid values in the interval.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ019",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Suitable triangle diagram for the oak tree and path. | MW1 | 1 | Sets up bearing geometry. |\n| 2 | $180^\\circ-(110^\\circ+40^\\circ)=30^\\circ$ | MW1 | 1 | Finds angle in triangle. |\n| 3 | $\\displaystyle \\frac{200}{\\sin30^\\circ}=\\frac{x}{\\sin40^\\circ}$ | M1 | 1 | Applies sine rule. |\n| 4 | $x=257.115\\ldots$ | W1 | 1 | Finds distance to oak tree from the middle position. |\n| 5 | $\\displaystyle \\sin70^\\circ=\\frac{y}{257.115\\ldots}$ | M1 | 1 | Uses right-triangle relation for shortest distance. |\n| 6 | $y=242\\text{ m}$ (3 s.f.) | MW1 | 1 | Shortest distance from path. |\n| 7 | $z^2=200^2+257.115^2-2(200)(257.115)\n\\cos70^\\circ$ | M1 W1 | 2 | Applies cosine rule after Patrick walks further. |\n| 8 | $z=266\\text{ m}$ (3 s.f.) | W1 | 1 | Final distance. |\n\n### Final Answer\n\n`(i) $242$ m; (ii) $266$ m`\n\n### What the Examiner Wanted\n\nTranslate bearings into triangle angles, use the sine rule to find a distance, then apply right-triangle geometry and cosine rule.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ020",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\frac{2\\cos^2\\theta}{\\sin^2\\theta}+8-\\frac{7}{\\sin\\theta}=0$ | M1W1 | 2 | Rewrites using $1/\\tan^2\\theta=\\cos^2\\theta/\\sin^2\\theta$. |\n| 2 | $2\\cos^2\\theta+8\\sin^2\\theta-7\\sin\\theta=0$ | MW1 | 1 | Multiplies by $\\sin^2\\theta$. |\n| 3 | $2(1-\\sin^2\\theta)+8\\sin^2\\theta-7\\sin\\theta=0$ | M1 | 1 | Converts to sine. |\n| 4 | $6\\sin^2\\theta-7\\sin\\theta+2=0$ | W1 | 1 | Forms quadratic. |\n| 5 | $(3\\sin\\theta-2)(2\\sin\\theta-1)=0$ | — | 0 | Factorises. |\n| 6 | $\\sin\\theta=\\frac23$ or $\\sin\\theta=\\frac12$ | MW2 | 2 | Finds sine values. |\n| 7 | $\\theta=41.8^\\circ,138^\\circ,30^\\circ,150^\\circ$ | MW2 | 2 | Lists all solutions in interval. |\n\n### Final Answer\n\n`$\\theta=30^\\circ,41.8^\\circ,138^\\circ,150^\\circ$`\n\n### What the Examiner Wanted\n\nThe key was rewriting the reciprocal tangent expression and reducing the equation to a quadratic in $\\sin\\theta$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ021",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ021TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $9.8=\\frac12(6.9)(3.5)\\sin C\\widehat BA$ | M1 W1 | 2 | Uses area formula to find angle at B. |\n| 2 | $\\sin C\\widehat BA=0.81159\\ldots$ | — | 0 | Rearranged sine value. |\n| 3 | $C\\widehat BA=54.251\\ldots^\\circ=54.3^\\circ$ | W1 | 1 | Finds angle. |\n| 4 | $AC^2=6.9^2+3.5^2-2(6.9)(3.5)\\cos(54.251\\ldots^\\circ)$ | M1 W1 | 2 | Applies cosine rule in triangle ABC. |\n| 5 | $AC^2=31.642$ and $AC=5.6251\\ldots$ cm | W1 | 1 | Finds $AC$. |\n| 6 | $\\displaystyle \\frac{5.625\\ldots}{\\sin28^\\circ}=\\frac{11.6}{\\sin C\\widehat AD}$ | M1 W1 | 2 | Applies sine rule in triangle ACD. |\n| 7 | $\\sin C\\widehat AD=0.96813\\ldots$ and $C\\widehat AD=75.5^\\circ$ or $104.5^\\circ$ | — | 0 | Ambiguous sine values. |\n| 8 | $C\\widehat AD=104.5^\\circ=105^\\circ$ (3 sf) | W1 | 1 | Uses obtuse condition. |\n\n### Final Answer\n\n`(i) $54.3^\\circ$; (ii) $105^\\circ$`\n\n### What the Examiner Wanted\n\nUse the area formula first, then cosine rule to find $AC$, then sine rule and the obtuse condition to select the correct angle.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ022",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\displaystyle \\frac{(1-\\cos\\theta)(1+\n\\cos\\theta)}{\\sin\\theta\\cos\\theta}=\\frac{1-\n\\cos^2\\theta}{\\sin\\theta\\cos\\theta}$ | MW1 | 1 | Expands numerator as difference of squares. |\n| 2 | $\\displaystyle =\\frac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta}$ | M1 | 1 | Uses Pythagorean identity. |\n| 3 | $\\displaystyle =\\frac{\\sin\\theta}{\\cos\\theta}$ | W1 | 1 | Cancels common factor. |\n| 4 | $=\\tan\\theta$ | W1 | 1 | Completes proof. |\n| 5 | From part (i), $\\tan\\theta=2-\\tan^2\\theta$ | M1 | 1 | Uses proved identity. |\n| 6 | $\\tan^2\\theta+\\tan\\theta-2=0$ | W1 | 1 | Rearranges. |\n| 7 | $(\\tan\\theta+2)(\\tan\\theta-1)=0$ | M1 | 1 | Factorises. |\n| 8 | $\\tan\\theta=-2$ or $\\tan\\theta=1$ | W1 | 1 | Finds tangent values. |\n| 9 | $\\theta=2.03^c,5.18^c,\\frac\\pi4,\\frac{5\\pi}{4}$ | W2 | 2 | Gives all solutions in $0\\le\\theta\\le2\\pi$. |\n\n### Final Answer\n\n`(i) identity proved; (ii) $\\theta=2.03,5.18,\\frac\\pi4,\\frac{5\\pi}{4}$ radians`\n\n### What the Examiner Wanted\n\nPart (i) uses the difference of squares and Pythagorean identity. Part (ii) uses the identity to reduce to a quadratic in $\\tan\\theta$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ023",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $2\\sin\\theta\\cos\\theta-3\\cos\\theta=0$ | — | 0 | Rearranges equation. |\n| 2 | $\\cos\\theta(2\\sin\\theta-3)=0$ | M1 | 1 | Factorises. |\n| 3 | $\\cos\\theta=0$ or $\\sin\\theta=\\frac32$ | MW2 | 2 | Splits into cases and identifies impossible sine value. |\n| 4 | $\\theta=90^\\circ,270^\\circ$; no solutions from $\\sin\\theta=\\frac32$ | MW1 W1 | 2 | Gives valid solutions and rejects impossible branch. |\n\n### Final Answer\n\n`$\\theta=90^\\circ,270^\\circ$`\n\n### What the Examiner Wanted\n\nFactor out $\\cos\\theta$ rather than dividing by it, because dividing by $\\cos\\theta$ would lose solutions where $\\cos\\theta=0$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ024",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n(b) At the beginning of a game of snooker, the 15 red balls each of diameter 52.5 mm are arranged in a triangular pattern as shown in Fig. 3 below.\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ024TikZ-001]\n\nA plastic frame in the shape of an equilateral triangle is used to arrange the balls into this pattern, as shown in Fig. 4 below.\n\nCalculate the length of one side of the frame.\n\n[5 marks]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ024TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Diagram decomposes the equilateral frame side into $x+4(52.5)+x$. | M1 | 1 | Models the geometry of the frame and row of balls. |\n| 2 | Uses a $30^\\circ$ right triangle with opposite side $26.25$ and adjacent $x$. | — | 0 | Geometric setup. |\n| 3 | $\\displaystyle \\tan30^\\circ=\\frac{26.25}{x}$ | MW1 | 1 | Uses tangent in right triangle. |\n| 4 | $x=45.466\\ldots$ | W1 | 1 | Finds side gap $x$. |\n| 5 | $L=2x+4(52.5)$ | M1 | 1 | Builds full side length. |\n| 6 | $L=2(45.466\\ldots)+210=301$ mm | W1 | 1 | Final side length. |\n\n### Final Answer\n\n`$301$ mm`\n\n### What the Examiner Wanted\n\nRecognise that the frame side consists of four ball diameters plus two equal triangular gaps, and use a $30^\\circ$ right-triangle calculation to find each gap.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ025",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $2(1-\\sin^2\\theta)+\\sin\\theta=1$ | M1 W1 | 2 | Uses $\\cos^2\\theta=1-\\sin^2\\theta$ and rearranges. |\n| 2 | $2-2\\sin^2\\theta+\\sin\\theta=1$ | — | 0 | Expands. |\n| 3 | $0=2\\sin^2\\theta-\n\\sin\\theta-1$ | MW1 | 1 | Forms quadratic. |\n| 4 | $0=(2\\sin\\theta+1)(\\sin\\theta-1)$ | M1 | 1 | Factorises. |\n| 5 | $\\sin\\theta=-\\frac12$ or $\\sin\\theta=1$ | W1 | 1 | Finds sine values. |\n| 6 | $\\theta=210^\\circ$, $\\theta=90^\\circ$, $\\theta=330^\\circ$ | MW2 | 2 | Lists all solutions. |\n\n### Final Answer\n\n`$\\theta=90^\\circ,210^\\circ,330^\\circ$`\n\n### What the Examiner Wanted\n\nConvert to a quadratic in sine, factorise, and find all solutions over $0^\\circ\\le\\theta\\le360^\\circ$.\n\n---"
  },
  {
    "id": "AS1TrigonometryQ026",
    "moduleId": "P4",
    "topic": "Trigonometry",
    "type": "Exam-Style",
    "marks": 12,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Trigonometry-Questions-AS1TrigonometryQ026TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $AD^2=r^2+x^2-2xr\\cos(180^\\circ-\\theta)$ | M1 W1 | 2 | Applies cosine rule in triangle AOD. |\n| 2 | $=r^2+x^2+2xr\\cos\\theta$ | MW1 | 1 | Uses $\\cos(180^\\circ-\n\\theta)=-\\cos\\theta$. |\n| 3 | From $\\triangle OBD$, $\\cos\\theta=\\frac{x}{r}\\Rightarrow x=r\\cos\\theta$ | M1, W1 | 2 | Uses right triangle OBD. |\n| 4 | $AD^2=r^2+r^2\\cos^2\\theta+2r^2\\cos^2\\theta$ | M1 | 1 | Substitutes $x=r\\cos\\theta$. |\n| 5 | $=r^2+3r^2\\cos^2\\theta=r^2(1+3\\cos^2\\theta)$ | W1 | 1 | Completes required proof. |\n| 6 | When $BD$ bisects $OS$, $x=\\frac r2$ | MW1 | 1 | Uses midpoint condition. |\n| 7 | From $\\triangle OBD$, $\\cos\\theta=(\\frac r2)\\div r$ | M1 | 1 | Finds cosine. |\n| 8 | $\\cos\\theta=\\frac12$ | W1 | 1 | Simplifies. |\n| 9 | $AD^2=r^2\\left[1+3\\left(\\frac14\\right)\\right]=\\frac74r^2$ | M1 | 1 | Substitutes into result from part (i). |\n| 10 | $AD=\\frac r2\\sqrt7\\Rightarrow k=7$ | W1 | 1 | Matches required form. |\n\n### Final Answer\n\n`(i) $AD^2=r^2(1+3\\cos^2\\theta)$ shown; (ii) $k=7$`\n\n### What the Examiner Wanted\n\nApply the cosine rule exactly as requested, use the right triangle to express $x$ in terms of $r$ and $\\theta$, then use the bisection condition to find $\\cos\\theta$ and compare with the given form.\n\n---\n\n## Unmatched Mark Scheme Entries\n\nThe supplied mark scheme contains the following entry that does not appear in the supplied questions PDF.\n\n### C2 January 2012 Question 7(b)\n\n\n**Status:** Official solution present, but matching question text not found in supplied questions PDF.  \n**Most likely topic:** Arc length / sector area with radians.\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $108=2r+r\\theta$ | M1 | 1 | Uses perimeter-type relation. |\n| 2 | $\\theta=(108-2r)/r$ | W1 | 1 | Rearranges. |\n| 3 | $720=\\frac12r^2\\theta$ | M1 | 1 | Uses sector area formula. |\n| 4 | $720=\\frac12r^2(108-2r)/r$ | MW1 | 1 | Substitutes for $\\theta$. |\n| 5 | $2r^2-108r+1440=0$ | MW1 | 1 | Forms quadratic. |\n| 6 | $(r-24)(r-30)=0$; $r=24$ or $r=30$ | MW2 | 2 | Solves for $r$. |\n| 7 | $\\theta=2.5$ or $\\theta=1.6$ radians | MW2 | 2 | Finds corresponding angles. |"
  }
];
