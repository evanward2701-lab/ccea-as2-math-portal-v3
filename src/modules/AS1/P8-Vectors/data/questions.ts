import { PracticeQuestion } from '@/core/types';

export const P8_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1VectorsLessonQ001",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\n(a) Let $\\mathbf{a}=\\begin{pmatrix}2\\\\-3\\end{pmatrix}$ and $\\mathbf{b}=\\begin{pmatrix}-4\\\\1\\end{pmatrix}$.  Compute $\\mathbf{a}+\\mathbf{b}$ and $2\\mathbf{a}-3\\mathbf{b}$.",
    "markSchemeMarkdown": "### Worked Solution\n\n**(a)** $\\mathbf{a}+\\mathbf{b} = \\begin{pmatrix}2+(-4)\\\\-3+1\\end{pmatrix}=\\begin{pmatrix}-2\\\\-2\\end{pmatrix}$."
  },
  {
    "id": "AS1VectorsLessonQ002",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nA vector $\\mathbf{p}$ has magnitude $10$ and direction $150^{\\circ}$.  Find its components.  Then find the magnitude and direction of $-2\\mathbf{p}$.",
    "markSchemeMarkdown": "### Worked Solution\n\nA vector of magnitude 10 and direction $150^{\\circ}$ has components"
  },
  {
    "id": "AS1VectorsLessonQ003",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nPoints $A$, $B$ and $C$ have position vectors $\\mathbf{a}=\\begin{pmatrix}4\\\\1\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}-2\\\\5\\end{pmatrix}$ and $\\mathbf{c}=\\begin{pmatrix}1\\\\-3\\end{pmatrix}$ respectively.",
    "markSchemeMarkdown": "### Worked Solution\n\n**(a)** $\\overrightarrow{AB} = \\mathbf{b}-\\mathbf{a} = \\begin{pmatrix}-2\\\\5\\end{pmatrix}-\\begin{pmatrix}4\\\\1\\end{pmatrix} = \\begin{pmatrix}-6\\\\4\\end{pmatrix}$ and $\\overrightarrow{AC} = \\mathbf{c}-\\mathbf{a} = \\begin{pmatrix}1\\\\-3\\end{pmatrix}-\\begin{pmatrix}4\\\\1\\end{pmatrix} = \\begin{pmatrix}-3\\\\-4\\end{pmatrix}$."
  },
  {
    "id": "AS1VectorsLessonQ004",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nIn a parallelogram $OPQR$, $\\overrightarrow{OP}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\overrightarrow{OQ}=\\begin{pmatrix}3\\\\-1\\end{pmatrix}$.  Point $S$ lies on $PQ$ such that $PS:SQ = 1:2$.  Find the position vector of $S$.",
    "markSchemeMarkdown": "### Worked Solution\n\n$\\overrightarrow{OP}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$, $\\overrightarrow{OQ}=\\begin{pmatrix}3\\\\-1\\end{pmatrix}$ and $\\overrightarrow{PQ}=\\overrightarrow{OQ}-\\overrightarrow{OP}=\\begin{pmatrix}2\\\\-3\\end{pmatrix}$.  Point $S$ divides $PQ$ in the ratio 1:2, so using formula (12) with $m=1$, $n=2$ and vectors $\\mathbf{a}=\\overrightarrow{OP}$, $\\mathbf{b}=\\overrightarrow{OQ}$ gives"
  },
  {
    "id": "AS1VectorsLessonQ005",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nA particle moves with velocity $\\mathbf{v}=\\begin{pmatrix}-6\\\\8\\end{pmatrix}$ m s$^{-1}$ for 2 minutes.  Calculate its speed and the distance travelled.",
    "markSchemeMarkdown": "### Worked Solution\n\nSpeed = $|\\mathbf{v}|=\\sqrt{(-6)^2+8^2}=10$ m s$^{-1}$.  Time = 2 min = 120 s.  Distance = speed $\\times$ time = $10\\times120=1200$ m."
  },
  {
    "id": "AS1VectorsLessonQ006",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nShow that the vectors $\\begin{pmatrix}1\\\\2\\end{pmatrix}$, $\\begin{pmatrix}-2\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}3\\\\-6\\end{pmatrix}$ all lie along the same line.",
    "markSchemeMarkdown": "### Worked Solution\n\nThe vectors $\\begin{pmatrix}1\\\\2\\end{pmatrix}$, $\\begin{pmatrix}-2\\\\4\\end{pmatrix}$ and $\\begin{pmatrix}3\\\\-6\\end{pmatrix}$ are scalar multiples of one another: $\\begin{pmatrix}-2\\\\4\\end{pmatrix}=-2\\begin{pmatrix}1\\\\-2\\end{pmatrix}$ (but note the sign difference) and $\\begin{pmatrix}3\\\\-6\\end{pmatrix}=3\\begin{pmatrix}1\\\\-2\\end{pmatrix}$.  Since each is a multiple of the same direction vector, they all lie on the same line through the origin."
  },
  {
    "id": "AS1VectorsLessonQ007",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nGiven $\\mathbf{u}=\\begin{pmatrix}5\\\\-2\\end{pmatrix}$ and $\\mathbf{v}=\\begin{pmatrix}1\\\\1\\end{pmatrix}$, compute $\\mathbf{u}\\cdot\\mathbf{v}$ and hence find the angle between them.",
    "markSchemeMarkdown": "### Worked Solution\n\n$\\mathbf{u}\\cdot\\mathbf{v} = 5\\cdot1 + (-2)\\cdot1 = 3$.  The magnitudes are $|\\mathbf{u}|=\\sqrt{5^2+(-2)^2}=\\sqrt{29}$ and $|\\mathbf{v}|=\\sqrt{1^2+1^2}=\\sqrt{2}$.  Therefore $\\cos\\theta = \\frac{3}{\\sqrt{29}\\sqrt{2}}$ and $\\theta=\\cos^{-1}\\bigl(\\tfrac{3}{\\sqrt{58}}\\bigr) \\approx 63.8^{\\circ}$."
  },
  {
    "id": "AS1VectorsLessonQ008",
    "moduleId": "P8",
    "topic": "Vectors",
    "type": "Targeted Practice",
    "marks": 0,
    "questionMarkdown": "### Question\n\nTriangle $PQR$ has position vectors $\\overrightarrow{OP}=\\begin{pmatrix}1\\\\2\\end{pmatrix}$, $\\overrightarrow{OQ}=\\begin{pmatrix}4\\\\-1\\end{pmatrix}$ and $\\overrightarrow{OR}=\\begin{pmatrix}-2\\\\5\\end{pmatrix}$.  Calculate the area of triangle $PQR$.",
    "markSchemeMarkdown": "### Worked Solution\n\nThe vectors $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$ are $\\overrightarrow{OQ}-\\overrightarrow{OP}$ and $\\overrightarrow{OR}-\\overrightarrow{OP}$.  Compute $\\overrightarrow{PQ}=\\begin{pmatrix}4\\\\-1\\end{pmatrix}-\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}3\\\\-3\\end{pmatrix}$ and $\\overrightarrow{PR}=\\begin{pmatrix}-2\\\\5\\end{pmatrix}-\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}-3\\\\3\\end{pmatrix}$.  The area of triangle $PQR$ is $\\tfrac{1}{2}|\\overrightarrow{PQ}\\times\\overrightarrow{PR}|$.  In two dimensions, the magnitude of the cross product can be found using $|a_xb_y-a_yb_x|$: here $a_x=3,a_y=-3,b_x=-3,b_y=3$ so $|a_xb_y-a_yb_x|=|3\\cdot3-(-3)(-3)|=|9-9|=0$.  The area is $0$, which means the points are collinear and the “triangle” has zero area."
  }
];
