import { PracticeQuestion } from '@/core/types';

export const P2_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1CoordinateGeometryCircleQ001",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\nPoints A and B have coordinates $(1,5)$ and $(-2,y)$ respectively.\n\n**(i)** Find an expression for the gradient of the straight line joining A and B. `[2]`\n\nPoint C has coordinates $(2,-3)$.\n\nThe angle $ABC$ is $90^\\circ$.\n\n**(ii)** Find the possible values of $y$. `[5]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $m_{AB}=\\dfrac{y-5}{-2-1}=\\dfrac{y-5}{-3}$ | M1 W1 | 2 | Uses the gradient formula for AB. |\n| 2 | $m_{BC}=\\dfrac{y+3}{-4}$ | MW1 | 1 | Finds the gradient involving B and C. |\n| 3 | $\\dfrac{y-5}{-3}\\times\\dfrac{y+3}{-4}=-1$ | M1 | 1 | Uses the perpendicular gradient condition. |\n| 4 | $(y-5)(y+3)=-12$ | MW1 | 1 | Rearranges the perpendicular condition. |\n| 5 | $y^2-2y-3=0$ | M1 | 1 | Forms the quadratic equation. |\n| 6 | $(y-3)(y+1)=0$ | — | 0 | Factorises the quadratic. |\n| 7 | $y=3$ or $y=-1$ | W1 | 1 | Gives both possible values. |\n\n### Final Answer\n\n`$m_{AB}=\\dfrac{y-5}{-3}$; $y=3$ or $y=-1$`\n\n### What the Examiner Wanted\n\nUse the gradient formula, apply the perpendicular-gradient condition because $\\angle ABC=90^\\circ$, then solve the resulting quadratic. Common losses are sign errors in the gradients and giving only one value of $y$.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ002",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\nA and B are the points $(4,-7)$ and $(-2,3)$ respectively.\n\n**(i)** Find the midpoint P of AB. `[1]`\n\n**(ii)** Find the equation of the line through P which is perpendicular to AB. `[5]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Midpoint $P=(1,-2)$ | MW1 | 1 | Finds the midpoint correctly. |\n| 2 | $\\text{grad }AB=\\dfrac{3-(-7)}{-2-4}=-\\dfrac{5}{3}$ | M1 W1 | 2 | Uses gradient formula for AB. |\n| 3 | Perpendicular gradient $=\\dfrac{3}{5}$ | MW1 | 1 | Uses negative reciprocal gradient. |\n| 4 | $y+2=\\dfrac{3}{5}(x-1)$ | M1 W1 | 2 | Forms the perpendicular line through P. |\n| 5 | $3x-5y-13=0$ | — | 0 | Final rearranged equation. |\n\n### Final Answer\n\n`$P=(1,-2)$; $3x-5y-13=0$`\n\n### What the Examiner Wanted\n\nFind the midpoint, calculate the gradient of AB, invert and change sign for the perpendicular gradient, and substitute the midpoint into the line equation.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ003",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\nPoints A, B, C and D form the vertices of a kite as shown in Fig. 1 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ003TikZ-001]\n\nPoint A has coordinates $(2,1)$ and point C has coordinates $(4,-5)$.\n\nFind the equation of the diagonal BD. `[6]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ003TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Midpoint of AC $=(3,-2)$ | MW1 | 1 | Finds where the diagonals meet. |\n| 2 | Gradient of AC $=\\dfrac{y_2-y_1}{x_2-x_1}=\\dfrac{-5-1}{4-2}=-3$ | M1 W1 | 2 | Uses gradient formula. |\n| 3 | Perpendicular gradient $=\\dfrac{1}{3}$ | MW1 | 1 | Uses perpendicular diagonals of a kite. |\n| 4 | $y+2=\\dfrac{1}{3}(x-3)$ | M1 | 1 | Forms the line BD through the midpoint. |\n| 5 | $3y=x-9$ | W1 | 1 | Gives the final equation. |\n\n### Final Answer\n\n`$3y=x-9$`\n\n### What the Examiner Wanted\n\nUse the fact that the diagonals of the kite are perpendicular and meet at the midpoint of AC, then find the equation of BD.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ004",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\nThe straight line\n\n$$\ny = 5 - 2x\n$$\n\ncrosses the $x$-axis at the point A.\n\n**(i)** Find the coordinates of A. `[1]`\n\nThe straight line\n\n$$\n3x + 5y = 15\n$$\n\ncrosses the $y$-axis at the point B.\n\n**(ii)** Find the coordinates of B. `[1]`\n\n**(iii)** Find the equation of the line parallel to AB passing through the point $(1,-5)$. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $A=(2.5,0)$ | MW1 | 1 | Sets $y=0$ for the $x$-intercept. |\n| 2 | $B=(0,3)$ | MW1 | 1 | Sets $x=0$ for the $y$-intercept. |\n| 3 | $\\text{grad }AB=\\dfrac{y_2-y_1}{x_2-x_1}=-\\dfrac{6}{5}$ | M1 W1 | 2 | Finds the gradient of AB. |\n| 4 | $y+5=-\\dfrac{6}{5}(x-1)$ | M1 | 1 | Uses parallel gradient through $(1,-5)$. |\n| 5 | $5y+6x+19=0$ | W1 | 1 | Gives the final rearranged equation. |\n\n### Final Answer\n\n`$A=(2.5,0)$; $B=(0,3)$; $5y+6x+19=0$`\n\n### What the Examiner Wanted\n\nFind both intercepts, calculate the gradient of AB, then use the same gradient for the parallel line through $(1,-5)$.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ005",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**(a)** A straight line passes through the points A $(-1,1)$ and B $(5,13)$.\n\n**(i)** Find the gradient of AB. `[2]`\n\n**(ii)** Hence find the equation of the line through A perpendicular to AB. `[3]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\text{grad }AB=\\dfrac{13-1}{5-(-1)}=2$ | M1 W1 | 2 | Finds the gradient of AB. |\n| 2 | Perpendicular gradient $=-\\dfrac{1}{2}$ | MW1 | 1 | Uses the negative reciprocal. |\n| 3 | $y-1=-\\dfrac{1}{2}(x+1)$ | M1 | 1 | Forms the perpendicular line through A. |\n| 4 | $2y=1-x$ | W1 | 1 | Gives the final simplified equation. |\n\n### Final Answer\n\n`$2y=1-x$`\n\n### What the Examiner Wanted\n\nFind the gradient of AB and then use the perpendicular gradient through the given point A.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ006",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\nA and B are the points $(2,-5)$ and $(4,1)$ respectively.\n\n**(i)** Find the equation of the line AB. `[3]`\n\n**(ii)** The point $(t,-3)$ lies on the line AB.\n\nFind the value of $t$. `[2]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Gradient $=\\dfrac{1+5}{4-2}=3$ | MW1 | 1 | Uses the gradient formula. |\n| 2 | $-5=2(3)+c$, so $c=-11$ | — | 0 | Substitutes point $(2,-5)$ to find the intercept. |\n| 3 | $y=3x-11$ | M1 W1 | 2 | Gives the equation of AB. |\n| 4 | Substitute $y=-3$: $-3=3t-11$ | — | 0 | Uses the point $(t,-3)$ on the line. |\n| 5 | $3t=8$ | M1 | 1 | Rearranges correctly. |\n| 6 | $t=\\dfrac{8}{3}$ | W1 | 1 | Final value of $t$. |\n\n### Final Answer\n\n`$y=3x-11$; $t=\\dfrac{8}{3}$`\n\n### What the Examiner Wanted\n\nFind the equation of AB using the two given points, then substitute the coordinates of the point on the line.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ007",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\nAn outline for an airline logo is in the shape of an isosceles triangle as shown in Fig. 1 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ007TikZ-001]\n\n$$\nAB = AC\n$$\n\nB has coordinates $(-1,1)$.\n\nC has coordinates $(5,3)$.\n\nD is the midpoint of BC.\n\n**(i)** Find the coordinates of D. `[2]`\n\n**(ii)** Hence find the equation of the line AD. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ007TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $D=\\left(\\dfrac{-1+5}{2},\\dfrac{1+3}{2}\\right)=(2,2)$ | M1 W1 | 2 | Finds the midpoint of BC. |\n| 2 | Gradient of BC $=\\dfrac{3-1}{5-(-1)}=\\dfrac{1}{3}$ | MW1 | 1 | Finds the base gradient. |\n| 3 | Gradient of AD $=-3$ | MW1 | 1 | Uses the perpendicular height in an isosceles triangle. |\n| 4 | $y-2=-3(x-2)$ | M1 | 1 | Forms the equation of AD through D. |\n| 5 | $y=-3x+8$ | W1 | 1 | Gives the final line equation. |\n\n### Final Answer\n\n`$D=(2,2)$; $y=-3x+8$`\n\n### What the Examiner Wanted\n\nUse D as the midpoint of BC, then use the perpendicular relationship between the isosceles height AD and the base BC.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ008",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\nL is the line whose equation is\n\n$$\ny + 2x = 10.\n$$\n\nL crosses the $y$-axis at A and the $x$-axis at B.\n\n**(i)** Write down the coordinates of A and B. `[2]`\n\n**(ii)** Find the equation of the perpendicular bisector of the line AB. `[6]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $A=(0,10)$ | MW1 | 1 | Finds the $y$-intercept. |\n| 2 | $B=(5,0)$ | MW1 | 1 | Finds the $x$-intercept. |\n| 3 | Gradient of AB $=\\dfrac{0-10}{5-0}=-2$ | MW1 | 1 | Finds the gradient of AB. |\n| 4 | Perpendicular gradient $=\\dfrac{1}{2}$ | MW1 | 1 | Uses negative reciprocal. |\n| 5 | Midpoint $=\\left(2.5,5\\right)$ | MW2 | 2 | Finds midpoint of AB. |\n| 6 | $y=mx+c$ | M1 | 1 | Starts line equation for perpendicular bisector. |\n| 7 | $5=\\dfrac{1}{2}\\left(\\dfrac{5}{2}\\right)+c$, so $c=\\dfrac{15}{4}$ | — | 0 | Substitutes the midpoint. |\n| 8 | $y=\\dfrac{1}{2}x+\\dfrac{15}{4}$ | W1 | 1 | Final equation. |\n\n### Final Answer\n\n`$A=(0,10)$; $B=(5,0)$; $y=\\dfrac{1}{2}x+\\dfrac{15}{4}$`\n\n### What the Examiner Wanted\n\nIdentify both intercepts, find the midpoint and perpendicular gradient, then write the perpendicular bisector equation.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ009",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**(a)** Find the equation of the line which passes through the point $(-3,4)$ and is perpendicular to the line\n\n$$\ny = 7 - 2x.\n$$\n\n`[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Gradient of given line $=-2$ | MW1 | 1 | Reads the gradient from $y=7-2x$. |\n| 2 | Perpendicular gradient $=\\dfrac{1}{2}$ | MW1 | 1 | Uses negative reciprocal. |\n| 3 | $y=mx+c$ and $4=\\dfrac{1}{2}(-3)+c$ | M1 | 1 | Substitutes the point $(-3,4)$. |\n| 4 | $y=\\dfrac{1}{2}x+\\dfrac{11}{2}$, so $2y=x+11$ | W1 | 1 | Final equation. |\n\n### Final Answer\n\n`$2y=x+11$`\n\n### What the Examiner Wanted\n\nUse the perpendicular-gradient rule and substitute the given point to find the constant.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ010",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\nThe points A and B have coordinates $(a,-2a)$ and $(3,10)$ respectively.\n\n**(i)** The gradient of the line AB is 2.\n\nShow that $a=-1$. `[3]`\n\n**(ii)** Hence find the equation of the line perpendicular to AB passing through the point $(5,4)$.\n\nLeave your answer in the form $ax+by+c=0$, where $a$, $b$ and $c$ are integers. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\dfrac{10+2a}{3-a}=2$ | M1 | 1 | Uses gradient formula with parameter $a$. |\n| 2 | $10+2a=6-2a$ | W1 | 1 | Rearranges correctly. |\n| 3 | $4a=-4$, so $a=-1$ | MW1 | 1 | Shows the required value. |\n| 4 | Perpendicular gradient $=-\\dfrac{1}{2}$ | MW1 | 1 | Uses gradient 2 for AB. |\n| 5 | $4=-\\dfrac{1}{2}(5)+c$ | M1 | 1 | Substitutes point $(5,4)$. |\n| 6 | $c=\\dfrac{13}{2}$ | W1 | 1 | Finds the constant. |\n| 7 | $y=-\\dfrac{1}{2}x+\\dfrac{13}{2}$, so $x+2y-13=0$ | W1 | 1 | Final answer in required form. |\n\n### Final Answer\n\n`$a=-1$; $x+2y-13=0$`\n\n### What the Examiner Wanted\n\nUse the given gradient to form an equation for $a$, then find the perpendicular line and give it in the required integer-coefficient form.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ011",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**(b)** The straight line $L_1$ has equation\n\n$$\ny - 2x + 1 = 0.\n$$\n\nThe straight line $L_2$ passes through the point $(4,2)$.\n\n$L_2$ is perpendicular to $L_1$.\n\nFind the coordinates of the point of intersection of $L_1$ and $L_2$. `[6]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $L_1$ has gradient $2$ | MW1 | 1 | Reads gradient from $y=2x-1$. |\n| 2 | $L_2$ has gradient $-\\dfrac{1}{2}$ | MW1 | 1 | Uses perpendicular gradient. |\n| 3 | $y=mx+c$ and $2=-\\dfrac{1}{2}(4)+c$ | M1 | 1 | Substitutes the point $(4,2)$. |\n| 4 | $c=4$, so $y=-\\dfrac{1}{2}x+4$ | W1 | 1 | Finds equation of $L_2$. |\n| 5 | $-\\dfrac{1}{2}x+4=2x-1$, so $x=2$ | M1 | 1 | Solves the simultaneous line equations. |\n| 6 | $y=3$, hence $(2,3)$ | W1 | 1 | Final intersection point. |\n\n### Final Answer\n\n`$(2,3)$`\n\n### What the Examiner Wanted\n\nFind $L_2$ using the perpendicular gradient and its given point, then solve the two line equations simultaneously.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ012",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\nFig. 3 below shows the rhombus ABCD.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ012TikZ-001]\n\nPoint A has coordinates $(-2,1)$.\n\nPoint C has coordinates $(3,11)$.\n\nFind the equation of the line BD.\n\nLeave your answer in the form $ax+by+c=0$, where $a$, $b$ and $c$ are integers. `[6]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ012TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Gradient of AC $=\\dfrac{11-1}{3-(-2)}=2$ | M1 W1 | 2 | Finds the gradient of diagonal AC. |\n| 2 | Gradient of BD $=-\\dfrac{1}{2}$ | MW1 | 1 | Uses perpendicular diagonals of a rhombus. |\n| 3 | Midpoint of AC $=\\left(\\dfrac{1}{2},6\\right)$ | MW1 | 1 | Finds where the diagonals meet. |\n| 4 | $6=-\\dfrac{1}{2}\\left(\\dfrac{1}{2}\\right)+c$ | M1 | 1 | Substitutes midpoint into line BD. |\n| 5 | $c=\\dfrac{25}{4}$ and $y=-\\dfrac{1}{2}x+\\dfrac{25}{4}$ | — | 0 | Intermediate equation. |\n| 6 | $2x+4y-25=0$ | W1 | 1 | Final answer in required form. |\n\n### Final Answer\n\n`$2x+4y-25=0$`\n\n### What the Examiner Wanted\n\nUse the fact that the diagonals of a rhombus bisect each other and are perpendicular, then form the line BD through their midpoint.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ013",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\nPoint A has coordinates $(7,-2)$.\n\nPoint B has coordinates $(1,10)$.\n\n**(i)** Find the gradient of the line AB. `[2]`\n\n**(ii)** Hence find the equation of the line AB. `[2]`\n\nThe line AB cuts the $x$-axis at the point P.\n\n**(iii)** Find the exact distance BP. `[3]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\text{grad }AB=\\dfrac{10-(-2)}{1-7}=-2$ | M1 W1 | 2 | Finds gradient of AB. |\n| 2 | $y=mx+c$ and $10=-2(1)+c$ | M1 | 1 | Substitutes point B. |\n| 3 | $c=12$, so $y=-2x+12$ | W1 | 1 | Gives equation of AB. |\n| 4 | $y=0 \\Rightarrow x=6$, so $P=(6,0)$ | MW1 | 1 | Finds $x$-axis intercept. |\n| 5 | $BP=\\sqrt{5^2+10^2}$ | M1 | 1 | Uses distance formula. |\n| 6 | $BP=\\sqrt{125}=5\\sqrt{5}$ units | W1 | 1 | Gives exact distance. |\n\n### Final Answer\n\n`$y=-2x+12$; $BP=5\\sqrt{5}$ units`\n\n### What the Examiner Wanted\n\nFind the line equation from the gradient, locate the $x$-intercept, then apply the distance formula.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ014",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n**(b)** Fig. 2 below shows a sketch of a curve and a straight line.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ014TikZ-001]\n\nThe straight line has equation\n\n$$\ny=x-2.\n$$\n\nThe curve has equation\n\n$$\ny=\\frac{3}{x}.\n$$\n\nThey intersect at the points A and B.\n\n**(i)** Find the coordinates of A and B. `[5]`\n\n**(ii)** Hence find the midpoint of the line AB. `[2]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ014TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $x-2=\\dfrac{3}{x}$ | M1 | 1 | Equates line and curve. |\n| 2 | $x^2-2x-3=0$ | W1 | 1 | Forms the quadratic equation. |\n| 3 | $(x-3)(x+1)=0$ | M1 | 1 | Factorises. |\n| 4 | $x=3$ or $x=-1$ | — | 0 | Solves for $x$. |\n| 5 | $y=1$ or $y=-3$ | W2 | 2 | Finds corresponding $y$ values. |\n| 6 | $A=(-1,-3),\\ B=(3,1)$ | — | 0 | States the intersection coordinates. |\n| 7 | Midpoint $=\\left(\\dfrac{-1+3}{2},\\dfrac{-3+1}{2}\\right)$ | M1 | 1 | Uses midpoint formula. |\n| 8 | $=(1,-1)$ | W1 | 1 | Final midpoint. |\n\n### Final Answer\n\n`$A=(-1,-3)$, $B=(3,1)$; midpoint $(1,-1)$`\n\n### What the Examiner Wanted\n\nEquate the line and curve to get a quadratic, solve for intersections, then use the midpoint formula.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ015",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n**(i)** Write down the centre of the circle whose equation is\n\n$$\nx^2+y^2+4y-21=0\n$$\n\nand find the circle’s radius. `[4]`\n\n**(ii)** Find the gradient of the tangent to this circle at the point $(3,2)$. `[3]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Centre $(0,-2)$ | MW2 | 2 | Reads centre from general circle form. |\n| 2 | Radius $=\\sqrt{g^2+f^2-c}$ | M1 | 1 | Uses radius formula for $x^2+y^2+2gx+2fy+c=0$. |\n| 3 | $=\\sqrt{25}=5$ | W1 | 1 | Finds radius. |\n| 4 | Gradient of radius $=\\dfrac{2+2}{3-0}=\\dfrac{4}{3}$ | M1 W1 | 2 | Uses centre and tangent point. |\n| 5 | Gradient of tangent $=-\\dfrac{3}{4}$ | MW1 | 1 | Uses perpendicularity of radius and tangent. |\n\n### Final Answer\n\n`Centre $(0,-2)$, radius $5$; tangent gradient $-\\dfrac{3}{4}$`\n\n### What the Examiner Wanted\n\nIdentify centre and radius, then use the radius to the point $(3,2)$ and the perpendicular-gradient rule for the tangent.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ016",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\nA circle is given by the equation\n\n$$\nx^2-2x+y^2+4y=4.\n$$\n\n**(i)** Find the centre and radius of the circle. `[4]`\n\nA tangent is drawn to the circle from the point A $(5,6)$.\n\nThe tangent touches the circle at the point B as shown in Fig. 3 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ016TikZ-001]\n\n**(ii)** Find the length AB. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ016TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(x-1)^2-1+(y+2)^2-4=4$ | M1 | 1 | Completes the square. |\n| 2 | $(x-1)^2+(y+2)^2=9$ | W1 | 1 | Rearranges to centre-radius form. |\n| 3 | Centre $=(1,-2)$, radius $=3$ | MW2 | 2 | Gives centre and radius. |\n| 4 | $d=\\sqrt{(5-1)^2+(6+2)^2}=\\sqrt{80}=4\\sqrt5=8.94427$ | M1 W1 | 2 | Finds distance from centre to A. |\n| 5 | $(\\sqrt{80})^2=3^2+l^2$ | M1 | 1 | Uses right triangle formed by radius and tangent. |\n| 6 | $l=\\sqrt{71}=8.43$ | W1 | 1 | Finds length AB. |\n\n### Final Answer\n\n`Centre $(1,-2)$, radius $3$; $AB=\\sqrt{71}\\approx 8.43$`\n\n### What the Examiner Wanted\n\nComplete the square to find the centre and radius, then use the fact that radius to tangent point is perpendicular to the tangent.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ017",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\nThe line joining the points A $(-7,4)$ and B $(1,-2)$ is a diameter of a circle.\n\n**(i)** Find the coordinates of the centre of the circle. `[1]`\n\n**(ii)** Find the radius of the circle. `[1]`\n\n**(iii)** Hence write down the equation of the circle. `[2]`\n\nThe point $(0,t)$ lies on the circumference of the circle.\n\n**(iv)** Find the two possible values of $t$. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Midpoint = centre $=(-3,1)$ | MW1 | 1 | Uses diameter midpoint. |\n| 2 | Radius $=\\sqrt{4^2+3^2}=5$ | MW1 | 1 | Finds radius from centre to an endpoint. |\n| 3 | $(x+3)^2+(y-1)^2=25$ | M1 W1 | 2 | Writes circle equation. |\n| 4 | $9+(t-1)^2=25$ | M1 W1 | 2 | Substitutes $(0,t)$ into the circle. |\n| 5 | $(t-1)^2=16$ or $t^2-2t-15=0$ | — | 0 | Intermediate equation. |\n| 6 | $t-1=\\pm4$ or $(t-5)(t+3)=0$ | M1 | 1 | Solves quadratic/square. |\n| 7 | $t=5$ or $t=-3$ | W1 | 1 | Gives both values. |\n\n### Final Answer\n\n`Centre $(-3,1)$, radius $5$, equation $(x+3)^2+(y-1)^2=25$, $t=5$ or $t=-3$`\n\n### What the Examiner Wanted\n\nUse the diameter midpoint for the centre, find the radius, write the equation and substitute the point on the circle.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ018",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\nThe edge of the network coverage of a radio mast can be modelled by a circle as shown in Fig. 7 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ018TikZ-001]\n\nPoints A, B and C lie on the circumference of the circle.\n\n$$\nA=(0,6), \\qquad B=(0,-2), \\qquad C=(1,5).\n$$\n\nFind the equation of the circle. `[7]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ018TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Use $x^2+y^2+2gx+2fy+c=0$ | — | 0 | General circle equation. |\n| 2 | $(0,6)\\Rightarrow 36+12f+c=0$ | M1 W1 | 2 | Substitutes point A. |\n| 3 | $(0,-2)\\Rightarrow 4-4f+c=0$ | MW1 | 1 | Substitutes point B. |\n| 4 | $32+16f=0\\Rightarrow f=-2$ | MW1 | 1 | Solves for $f$. |\n| 5 | $c=-12$ | MW1 | 1 | Finds $c$. |\n| 6 | $(1,5)\\Rightarrow 1+25+2g+10f+c=0$ | M1 | 1 | Substitutes point C. |\n| 7 | $g=3$ | MW1 | 1 | Finds $g$. |\n| 8 | $x^2+y^2+6x-4y-12=0$ | — | 0 | Final equation. |\n\n### Final Answer\n\n`$x^2+y^2+6x-4y-12=0$`\n\n### What the Examiner Wanted\n\nSubstitute all three points into the general equation of a circle and solve for $g$, $f$ and $c$.\n\n### Alternative Method\n\nOfficial alternative shown in the mark scheme:\n\n| Step | Official alternative working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Use $(x-a)^2+(y-b)^2=r^2$ | — | 0 | Alternative centre-radius form. |\n| 2 | $(0,6)\\Rightarrow a^2+(6-b)^2=r^2$ | M1 W1 | 2 | Substitutes A. |\n| 3 | $(0,-2)\\Rightarrow a^2+(-2-b)^2=r^2$ | MW1 | 1 | Substitutes B. |\n| 4 | $32-16b=0\\Rightarrow b=2$ | MW1 | 1 | Finds $b$. |\n| 5 | $a^2+16=r^2$ | — | 0 | Intermediate result. |\n| 6 | $(1,5)\\Rightarrow (1-a)^2+9=r^2$ | M1 | 1 | Substitutes C. |\n| 7 | $a=-3$ | MW1 | 1 | Finds $a$. |\n| 8 | $r=5$ | MW1 | 1 | Finds radius. |\n| 9 | $(x+3)^2+(y-2)^2=25$ | — | 0 | Equivalent final equation. |\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ019",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\nA circle has the equation\n\n$$\n(x-1)^2+(y-2)^2=13.\n$$\n\n**(i)** Write down the centre of this circle. `[2]`\n\nThe circle cuts the positive $x$-axis at the point A.\n\n**(ii)** Find the coordinates of A. `[3]`\n\n**(iii)** Find the gradient of the tangent to the circle at the point A. `[3]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Centre $(1,2)$ | MW2 | 2 | Reads centre from centre-radius form. |\n| 2 | On $x$-axis, $y=0$: $(x-1)^2+(-2)^2=13$ | M1 | 1 | Substitutes $y=0$. |\n| 3 | $(x-1)^2=9$ | — | 0 | Rearranges. |\n| 4 | $x-1=\\pm3$, so $x=-2$ or $x=4$ | MW1 | 1 | Solves for $x$. |\n| 5 | $x=4$ and $A=(4,0)$ | W1 | 1 | Chooses positive $x$-axis point. |\n| 6 | Gradient of radius $=\\dfrac{2-0}{1-4}=-\\dfrac{2}{3}$ | M1 | 1 | Finds radius gradient. |\n| 7 | Gradient of tangent $=\\dfrac{3}{2}$ | MW1 | 1 | Uses perpendicular gradient. |\n\n### Final Answer\n\n`Centre $(1,2)$; $A=(4,0)$; tangent gradient $\\dfrac{3}{2}$`\n\n### What the Examiner Wanted\n\nRead the centre, find the positive $x$-axis intersection, then use the perpendicularity of radius and tangent.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ020",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\nA and B are the points $(5,1)$ and $(2,-3)$ respectively.\n\nAD is the diameter of a circle with centre B as shown in Fig. 1 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ020TikZ-001]\n\n**(i)** Find the equation of the circle. `[4]`\n\n**(ii)** Verify that D is the point $(-1,-7)$. `[2]`\n\nThe point C has coordinates $(3,-10)$.\n\n**(iii)** Prove that CD is a tangent to the circle. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ020TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Centre $(2,-3)$ gives radius $\\sqrt{(5-2)^2+(1+3)^2}=5$ | M1 W1 | 2 | Uses B as centre and A on circle. |\n| 2 | Equation of circle $(x-a)^2+(y-b)^2=r^2$ | M1 | 1 | Uses centre-radius form. |\n| 3 | $(x-2)^2+(y+3)^2=25$ | W1 | 1 | Final circle equation. |\n| 4 | A$(5,1)$ and D$(-1,-7)$ have midpoint $(2,-3)$ | M1 W1 | 2 | Verifies D using midpoint of diameter. |\n| 5 | Gradient of radius BD $=\\dfrac{-7+3}{-1-2}=\\dfrac{4}{3}$ | M1 W1 | 2 | Finds radius gradient. |\n| 6 | Gradient of CD $=\\dfrac{-7+10}{-1-3}=-\\dfrac{3}{4}$ | MW1 | 1 | Finds tangent-line gradient. |\n| 7 | $\\dfrac{4}{3}\\times\\left(-\\dfrac{3}{4}\\right)=-1$, therefore CD is a tangent | MW1 | 1 | Uses perpendicularity of radius and tangent. |\n\n### Final Answer\n\n`$(x-2)^2+(y+3)^2=25$; D is $(-1,-7)$; CD is a tangent`\n\n### What the Examiner Wanted\n\nUse the diameter/centre relationship, verify the endpoint D, then prove tangent by showing CD is perpendicular to the radius at D.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ021",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\nThe chain on a bicycle passes over two sprockets. The sprockets can be modelled as two circles A and B as shown in Fig. 4 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ021TikZ-001]\n\nCircular sprocket A has a radius of 6 cm and touches both the $x$- and $y$-axes.\n\n**(i)** Find the equation of circle A. `[3]`\n\nThe equation of circle B is\n\n$$\nx^2+12x+y^2+6y+41=0.\n$$\n\n**(ii)** Find the length of the radius and the coordinates of the centre of circle B. `[4]`\n\n**(iii)** Find the shortest distance between the two sprockets. `[3]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ021TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Centre of circle A $=(6,6)$ | M1 | 1 | Uses circle touching both axes with radius 6. |\n| 2 | $(x-6)^2+(y-6)^2=36$ | M1 W1 | 2 | Equation of circle A. |\n| 3 | $(x+6)^2-36+(y+3)^2-9+41=0$ | M1 | 1 | Completes the square for circle B. |\n| 4 | $(x+6)^2+(y+3)^2=4$ | W1 | 1 | Centre-radius form. |\n| 5 | Radius $=2$ | MW1 | 1 | Radius of circle B. |\n| 6 | Centre $=(-6,-3)$ | MW1 | 1 | Centre of circle B. |\n| 7 | Distance between centres $=\\sqrt{12^2+9^2}=15$ | M1 W1 | 2 | Finds centre-to-centre distance. |\n| 8 | Shortest distance $=15-6-2=7$ | MW1 | 1 | Subtracts both radii. |\n\n### Final Answer\n\n`Circle A: $(x-6)^2+(y-6)^2=36$; circle B radius $2$, centre $(-6,-3)$; shortest distance $7$ cm`\n\n### What the Examiner Wanted\n\nModel the two sprockets as circles, find each centre and radius, then subtract radii from the distance between centres.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ022",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n**(b)** The circle\n\n$$\nx^2-6x+y^2+10y+18=0\n$$\n\nhas its centre at the point C.\n\nTangents drawn from the point A $(-2,4)$ meet the circle at the points B and D respectively, as shown in Fig. 4 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ022TikZ-001]\n\nFind the area of the kite ABCD. `[7]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ022TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(x-3)^2-9+(y+5)^2-25+18=0$ | — | 0 | Completes the square. |\n| 2 | $(x-3)^2+(y+5)^2=16$ | M1 | 1 | Centre-radius form. |\n| 3 | Centre $(3,-5)$, $r=4$ | MW1 W1 | 2 | Finds centre and radius. |\n| 4 | $AC=\\sqrt{(3-(-2))^2+(-5-4)^2}=\\sqrt{106}$ | MW1 | 1 | Finds distance from A to centre. |\n| 5 | $AC^2=AD^2+DC^2$, so $106=4^2+AD^2$ | — | 0 | Uses tangent-radius right triangle. |\n| 6 | $AD=\\sqrt{90}$ | MW1 | 1 | Finds tangent length. |\n| 7 | Area $=2\\times\\dfrac{1}{2}\\times 4\\times\\sqrt{90}$ | M1 | 1 | Uses two congruent right triangles. |\n| 8 | Area $=37.9$ units$^2$ | W1 | 1 | Final area. |\n\n### Final Answer\n\n`Area of kite ABCD $\\approx 37.9$ units$^2$`\n\n### What the Examiner Wanted\n\nFind centre and radius, use right-angle tangent geometry to find tangent length, then calculate the area as two congruent right triangles.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ023",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\nA jeweller is making a pendant for a necklace.\n\nIt can be modelled as two touching circles as shown in Fig. 1 below.\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ023TikZ-001]\n\nThe equation of the larger circle is\n\n$$\nx^2-6x+y^2-8y+21=0.\n$$\n\n**(i)** Find the centre and radius of this circle. `[4]`\n\nThe diameter of the smaller circle is half the diameter of the larger circle.\n\nThe centre of the smaller circle is vertically above the centre of the larger circle.\n\n**(ii)** Find the equation of the smaller circle. `[3]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Coordinate-Geometry-Questions-AS1CoordinateGeometryCircleQ023TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(x-3)^2-9+(y-4)^2-16+21=0$ | M1 | 1 | Completes the square. |\n| 2 | $(x-3)^2+(y-4)^2=4$ | W1 | 1 | Centre-radius form for the larger circle. |\n| 3 | Centre $(3,4)$ | MW1 | 1 | Finds centre. |\n| 4 | Radius $=2$ | MW1 | 1 | Finds radius. |\n| 5 | Smaller circle centre $(3,5)$ | MW1 | 1 | Uses vertical alignment and internal touching. |\n| 6 | Smaller circle radius $=1$ | MW1 | 1 | Smaller diameter is half the larger diameter. |\n| 7 | $(x-3)^2+(y-5)^2=1$ | MW1 | 1 | Equation of smaller circle. |\n\n### Final Answer\n\n`Larger circle: centre $(3,4)$, radius $2$; smaller circle: $(x-3)^2+(y-5)^2=1$`\n\n### What the Examiner Wanted\n\nComplete the square for the larger circle, then use the geometry of two internally touching circles with vertical centres.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ024",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\nA circle has centre $(a,b)$ and radius $r$.\n\nThe centre of this circle lies on the line $y=2$.\n\n**(i)** Write down the value of $b$. `[1]`\n\nThe circle passes through the points $(1,5)$ and $(-6,6)$.\n\n**(ii)** Find the equation of this circle. `[10]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $b=2$ | MW1 | 1 | Uses the centre lying on $y=2$. |\n| 2 | $(x-a)^2+(y-b)^2=r^2$ | M1 | 1 | Uses centre-radius form. |\n| 3 | $(x-a)^2+(y-2)^2=r^2$ | MW1 | 1 | Substitutes $b=2$. |\n| 4 | For $(1,5)$: $(1-a)^2+(5-2)^2=r^2$, so $(1-a)^2+9=r^2$ | MW1 | 1 | Substitutes first point. |\n| 5 | For $(-6,6)$: $(-6-a)^2+(6-2)^2=r^2$, so $(-6-a)^2+16=r^2$ | MW1 | 1 | Substitutes second point. |\n| 6 | $(1-a)^2+9=(-6-a)^2+16$ | M1 W1 | 2 | Equates the two expressions for $r^2$. |\n| 7 | $1-2a+a^2+9=36+12a+a^2+16$ | — | 0 | Expands. |\n| 8 | $-2a+10=52+12a$ | — | 0 | Simplifies. |\n| 9 | $a=-3$ | W1 | 1 | Finds centre coordinate. |\n| 10 | Radius from $(1,5)$ to $(-3,2)$: $\\sqrt{4^2+3^2}=5$ | M1 W1 | 2 | Finds radius. |\n| 11 | $(x+3)^2+(y-2)^2=25$ | W1 | 1 | Final circle equation. |\n\n### Final Answer\n\n`$b=2$; $(x+3)^2+(y-2)^2=25$`\n\n### What the Examiner Wanted\n\nUse the fixed $y$-coordinate of the centre, equate squared distances from the centre to the two points, then form the circle equation.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ025",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\nThe equation of a circle is\n\n$$\nx^2+y^2+2x-4y=0.\n$$\n\n**(i)** Find the centre and radius of this circle. `[4]`\n\n**(ii)** Find the equation of the tangent to this circle at the point $(-3,3)$. `[4]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(x+1)^2-1+(y-2)^2-4=0$ | M1 | 1 | Completes the square. |\n| 2 | $(x+1)^2+(y-2)^2=5$ | — | 0 | Centre-radius form. |\n| 3 | Centre $=(-1,2)$ | W1 | 1 | Finds centre. |\n| 4 | Radius $=\\sqrt5$ | M1 W1 | 2 | Finds radius. |\n| 5 | Gradient of radius to $(-3,3)$ is $\\dfrac{3-2}{-3-(-1)}=-\\dfrac{1}{2}$ | MW1 | 1 | Uses centre and point of contact. |\n| 6 | Gradient of tangent $=2$ | MW1 | 1 | Uses perpendicular gradient. |\n| 7 | $y-y_1=m(x-x_1)$ | M1 | 1 | Uses point-gradient form. |\n| 8 | $y-3=2(x+3)$ | — | 0 | Substitutes point and gradient. |\n| 9 | $y=2x+9$ | W1 | 1 | Final tangent equation. |\n\n### Final Answer\n\n`Centre $(-1,2)$, radius $\\sqrt5$; tangent $y=2x+9$`\n\n### What the Examiner Wanted\n\nComplete the square, then use the radius gradient and perpendicularity to obtain the tangent equation.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ026",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n**(a)** Find the centre and radius of the circle with equation\n\n$$\nx^2+y^2-6x+2y+6=0.\n$$\n\n`[4 marks]`\n\n**(b)** The line joining the points $(-3,8)$ and $(1,-4)$ is a diameter of a circle.\n\nFind the equation of this circle. `[4 marks]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Centre $(3,-1)$ | M1 W1 | 2 | Finds centre from completing the square. |\n| 2 | $r=\\sqrt{(-3)^2+(1)^2-6}$ | M1 | 1 | Finds radius. |\n| 3 | $r=2$ | W1 | 1 | Final radius. |\n| 4 | Centre of diameter circle $=\\left(\\dfrac{-3+1}{2},\\dfrac{8-4}{2}\\right)=(-1,2)$ | MW1 | 1 | Uses midpoint of diameter. |\n| 5 | $r^2=(-3-(-1))^2+(8-2)^2$ | M1 | 1 | Uses squared distance to an endpoint. |\n| 6 | $r^2=40$ | W1 | 1 | Finds radius squared. |\n| 7 | $(x+1)^2+(y-2)^2=40$ | MW1 | 1 | Final circle equation. |\n\n### Final Answer\n\n`(a) centre $(3,-1)$, radius $2$; (b) $(x+1)^2+(y-2)^2=40$`\n\n### What the Examiner Wanted\n\nFor part (a), complete the square. For part (b), use the midpoint of the diameter as the centre and the squared distance to an endpoint as $r^2$.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ027",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**(b)** Find the centre and area of the circle given by the equation\n\n$$\nx^2-4x+y^2+6y-3=0.\n$$\n\n`[6]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(x-2)^2+(y+3)^2-4-9-3=0$ | M1 W1 | 2 | Completes the square. |\n| 2 | $(x-2)^2+(y+3)^2=16$ | — | 0 | Centre-radius form. |\n| 3 | Centre $(2,-3)$ | MW1 | 1 | Finds centre. |\n| 4 | Radius $=4$ | M1 W1 | 2 | Finds radius. |\n| 5 | Area $=16\\pi$ units$^2$ | MW1 | 1 | Uses area of circle $\\pi r^2$. |\n\n### Final Answer\n\n`Centre $(2,-3)$; area $16\\pi$ units$^2$`\n\n### What the Examiner Wanted\n\nComplete the square to identify the radius, then use the formula for area of a circle.\n\n---"
  },
  {
    "id": "AS1CoordinateGeometryCircleQ028",
    "moduleId": "P2",
    "topic": "Coordinate Geometry and Circles",
    "type": "Exam-Style",
    "marks": 13,
    "questionMarkdown": "### Question\n\nThe points A and B have coordinates $(2a,a^2)$ and $(a+1,a)$ respectively, where $a\\ne 0$.\n\n**(i)** A straight line, perpendicular to AB and passing through the point A, cuts the $x$-axis at the point P.\n\nFind, in terms of $a$, the coordinates of the point P. `[8]`\n\n**(ii)** The midpoint of the line AB has equal $x$ and $y$ ordinates.\n\nFind the possible values of $a$ in their simplest surd form. `[5]`",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\text{grad}_{AB}=\\dfrac{a-a^2}{(a+1)-2a}=\\dfrac{a(1-a)}{1-a}=a$ | M1 W1 | 2 | Finds gradient of AB in terms of $a$. |\n| 2 | Perpendicular gradient $=-\\dfrac{1}{a}$ | MW1 | 1 | Uses perpendicular gradient. |\n| 3 | $y=mx+c$ | M1 | 1 | Starts equation of perpendicular line. |\n| 4 | $a^2=-\\dfrac{1}{a}(2a)+c$ | — | 0 | Substitutes point A. |\n| 5 | $a^2+2=c$ | — | 0 | Finds the constant. |\n| 6 | $y=-\\dfrac{x}{a}+(a^2+2)$ | W1 | 1 | Equation of line through A. |\n| 7 | Cuts $x$-axis $\\Rightarrow y=0$ | M1 | 1 | Uses intercept condition. |\n| 8 | $\\dfrac{x}{a}=a^2+2$ | — | 0 | Rearranges. |\n| 9 | $x=a^3+2a$ | W1 | 1 | Finds $x$-coordinate. |\n| 10 | $P=(a^3+2a,0)$ | W1 | 1 | Coordinates of P. |\n| 11 | Midpoint $=\\left(\\dfrac{3a+1}{2},\\dfrac{a^2+a}{2}\\right)$ | M1 W1 | 2 | Uses midpoint formula. |\n| 12 | $3a+1=a^2+a$ | M1 | 1 | Equates $x$ and $y$ ordinates. |\n| 13 | $0=a^2-2a-1$ | MW1 | 1 | Forms the quadratic. |\n| 14 | $0=(a-1)^2-2$ | — | 0 | Completes the square. |\n| 15 | $(a-1)^2=2$ | — | 0 | Rearranges. |\n| 16 | $a-1=\\pm\\sqrt2$ | — | 0 | Solves. |\n| 17 | $a=1\\pm\\sqrt2$ | MW1 | 1 | Final surd values. |\n\n### Final Answer\n\n`$P=(a^3+2a,0)$; $a=1\\pm\\sqrt2$`\n\n### What the Examiner Wanted\n\nWork algebraically with the coordinate expressions, use perpendicular gradients, find the $x$-intercept of the perpendicular line, then equate midpoint ordinates and solve the resulting quadratic.\n\n---\n\n## 4. Unmatched Mark Scheme Entries\n\nThe following mark scheme content appears in the supplied mark scheme PDF but does not have a matching question in the supplied questions PDF.\n\n| Source | Mark scheme content | Notes |\n|---|---|---|\n| Mark Scheme PDF p.3, C1 June 2012 Question 3(b) | $\\dfrac{dy}{dx}=12x^2+\\dfrac{1}{3}x^{-4}$, awarded `MW2` | The questions PDF includes only C1 June 2012 Question 3(a), the coordinate-geometry part. This calculus part is therefore not included as a pack question. |"
  }
];
