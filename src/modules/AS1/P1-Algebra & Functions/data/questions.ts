import { PracticeQuestion } from '@/core/types';

export const P1_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1IndicesAndSurdsQ001",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**(b)** The area of a rectangular garden is $(20 + 4\\sqrt{5})\\ \\mathrm{m}^2$.\n\nThe length of one side is $(3 + \\sqrt{5})\\ \\mathrm{m}$.\n\nFind the length of the other side of the garden in the form $a + b\\sqrt{5}$, where $a$ and $b$ are rational numbers.  **[5]**\n\n**(c)** Solve the equation\n\n$$\n\\frac{16^x}{2^{x-1}} = 2^{\\frac12}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle \\frac{20+4\\sqrt5}{3+\\sqrt5}\\)` | M1 | 1 | Forms length as area divided by side. |\n| 2 | `\\(\\displaystyle \\frac{20+4\\sqrt5}{3+\\sqrt5}\\times\\frac{3-\\sqrt5}{3-\\sqrt5}\\)` | M1W1 | 2 | Uses the conjugate. |\n| 3 | `\\(\\displaystyle \\frac{40-8\\sqrt5}{4}=10-2\\sqrt5\\)` | MW2 | 2 | Simplifies to required form. |\n| 4 | `(c) \\(\\displaystyle \\frac{2^{4x}}{2^{x-1}}=2^{\\frac12}\\)` | M1W1 | 2 | Writes powers with base 2. |\n| 5 | `\\(\\displaystyle 2^{3x+1}=2^{\\frac12}\\)` | M1W1 | 2 | Applies index laws. |\n| 6 | `\\(\\displaystyle 3x+1=\\frac12\\)` | M1 | 1 | Equates exponents. |\n| 7 | `\\(\\displaystyle x=-\\frac16\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\nPart (b): `\\(10-2\\sqrt5\\)`  \nPart (c): `\\(x=-\\frac16\\)`\n\n### What the Examiner Wanted\n\n- Divide the area by the given side length.\n- Rationalise the denominator using the conjugate.\n- Convert all powers to base 2 and equate exponents.\n- The official mark scheme shows a marginal total of `17` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ002",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**(b)** Rationalise the denominator of\n\n$$\n\\frac{3-\\sqrt{7}}{\\sqrt{7}-2}.\n$$\n\n**[4]**\n\n**(c)** Solve the equation\n\n$$\n3^{x+1} = \\frac{27^x}{9}.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle \\frac{(3-\\sqrt7)(\\sqrt7+2)}{(\\sqrt7-2)(\\sqrt7+2)}\\)` | M1W1 | 2 | Multiplies by the conjugate. |\n| 2 | `\\(\\displaystyle \\frac{3\\sqrt7+6-7-2\\sqrt7}{7-4}=\\frac{\\sqrt7-1}{3}\\)` | MW2 | 2 | Expands and simplifies. |\n| 3 | `(c) \\(\\displaystyle 3^{x+1}=\\frac{3^{3x}}{3^2}\\)` | M1W1 | 2 | Writes \\(27^x/9\\) in base 3. |\n| 4 | `\\(\\displaystyle 3^{x+1}=3^{3x-2}\\)` | MW1 | 1 | Applies index laws. |\n| 5 | `\\(\\displaystyle x+1=3x-2\\)` | M1 | 1 | Equates exponents. |\n| 6 | `\\(\\displaystyle x=\\frac32\\)` | W1 | 1 | Solves the linear equation. |\n\n### Final Answer\n\nPart (b): `\\(\\displaystyle \\frac{\\sqrt7-1}{3}\\)`  \nPart (c): `\\(\\displaystyle x=\\frac32\\)`\n\n### What the Examiner Wanted\n\n- Use the conjugate \\(\\sqrt7+2\\) to remove the denominator surd.\n- Express \\(27\\) and \\(9\\) as powers of 3 before solving.\n- The official mark scheme shows a marginal total of `14` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ003",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 11,
    "questionMarkdown": "### Question\n\n**(b)** A rectangle has an area of $12\\ \\mathrm{cm}^2$.\n\nIts length is $(\\sqrt{7}+2)\\ \\mathrm{cm}$.\n\nFind the width of the rectangle in the form $(a\\sqrt{b}+c)$.  **[5]**\n\n**(c)** Solve the equation\n\n$$\nx^{\\frac13} = 2 + 15x^{-\\frac13}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle \\text{width}=\\frac{12}{\\sqrt7+2}\\)` | M1 | 1 | Forms width as area divided by length. |\n| 2 | `\\(\\displaystyle \\frac{12}{\\sqrt7+2}\\times\\frac{\\sqrt7-2}{\\sqrt7-2}\\)` | M1 W1 | 2 | Uses the conjugate. |\n| 3 | `\\(\\displaystyle \\frac{12\\sqrt7-24}{3}=4\\sqrt7-8\\)` | MW2 | 2 | Simplifies to the required form. |\n| 4 | `(c) \\(\\displaystyle x^{\\frac23}=2x^{\\frac13}+15\\)` | M1 | 1 | Multiplies through by \\(x^{1/3}\\). |\n| 5 | `\\(\\displaystyle x^{\\frac23}-2x^{\\frac13}-15=0\\)` | W1 | 1 | Rearranges to quadratic form. |\n| 6 | `\\(\\displaystyle (x^{\\frac13}+3)(x^{\\frac13}-5)=0\\)` | M1 | 1 | Factorises in \\(x^{1/3}\\). |\n| 7 | `\\(\\displaystyle x^{\\frac13}=-3\\quad\\text{or}\\quad x^{\\frac13}=5\\)` | W1 | 1 | Finds possible cube roots. |\n| 8 | `\\(\\displaystyle x=-27\\quad\\text{or}\\quad x=125\\)` | M1 W1 | 2 | Cubes both values. |\n\n### Final Answer\n\nPart (b): `\\(4\\sqrt7-8\\)`  \nPart (c): `\\(x=-27\\)` or `\\(x=125\\)`\n\n### What the Examiner Wanted\n\n- Rationalise the denominator correctly in part (b).\n- Recognise the fractional-index equation as a quadratic in \\(x^{1/3}\\).\n- The official mark scheme shows a marginal total of `13` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ004",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n**3 (a)** Solve the equation\n\n$$\n25^{x-1} = 5\\sqrt{5}.\n$$\n\n**[5]**\n\n**(b)** Simplify as far as possible\n\n$$\n\\frac{2+\\sqrt{5}}{3-\\sqrt{5}}+\\frac{5}{3+\\sqrt{5}}.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(a) \\(\\displaystyle (5^2)^{x-1}=5\\times 5^{\\frac12}\\)` | M1 W1 | 2 | Converts all terms to powers of 5. |\n| 2 | `\\(\\displaystyle 5^{2x-2}=5^{\\frac32}\\)` | MW1 | 1 | Applies index laws. |\n| 3 | `\\(\\displaystyle 2x-2=\\frac32\\)` | M1 | 1 | Equates exponents. |\n| 4 | `\\(\\displaystyle x=\\frac74\\)` | W1 | 1 | Solves for \\(x\\). |\n| 5 | `(b) \\(\\displaystyle \\frac{(2+\\sqrt5)(\\sqrt5+3)+5(3-\\sqrt5)}{(3-\\sqrt5)(\\sqrt5+3)}\\)` | M1 W1 | 2 | Uses a common rationalised denominator. |\n| 6 | `\\(\\displaystyle \\frac{2\\sqrt5+6+5+3\\sqrt5+(15-5\\sqrt5)}{4}\\)` | MW2 | 2 | Expands numerator and denominator. |\n| 7 | `\\(\\displaystyle \\frac{26}{4}=\\frac{13}{2}\\)` | MW1 | 1 | Simplifies the final value. |\n\n### Final Answer\n\nPart (a): `\\(\\displaystyle x=\\frac74\\)`  \nPart (b): `\\(\\displaystyle \\frac{13}{2}\\)`\n\n### What the Examiner Wanted\n\n- Convert \\(25\\) and \\(5\\sqrt5\\) into powers of 5.\n- In part (b), use a common denominator and simplify the surd terms fully.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ005",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n**4 (a)** Rationalise the denominator of\n\n$$\n\\frac{14}{3-\\sqrt{2}}.\n$$\n\n**[4]**\n\n**(b)** Solve the equation\n\n$$\n2^{x+1}=8^{1-x}.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(a) \\(\\displaystyle \\frac{14}{3-\\sqrt2}\\times\\frac{3+\\sqrt2}{3+\\sqrt2}\\)` | M1 | 1 | Multiplies by the conjugate. |\n| 2 | `\\(\\displaystyle \\frac{42+14\\sqrt2}{7}\\)` | MW2 | 2 | Expands and simplifies the denominator. |\n| 3 | `\\(\\displaystyle 6+2\\sqrt2\\)` | MW1 | 1 | Final simplified form. |\n| 4 | `(b) \\(\\displaystyle 2^{x+1}=(2^3)^{1-x}\\)` | M1W1 | 2 | Writes \\(8\\) as \\(2^3\\). |\n| 5 | `\\(\\displaystyle 2^{x+1}=2^{3-3x}\\)` | MW1 | 1 | Applies index laws. |\n| 6 | `\\(\\displaystyle x+1=3-3x\\)` | M1 | 1 | Equates exponents. |\n| 7 | `\\(\\displaystyle 4x=2,\\quad x=\\frac12\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\nPart (a): `\\(6+2\\sqrt2\\)`  \nPart (b): `\\(\\displaystyle x=\\frac12\\)`\n\n### What the Examiner Wanted\n\n- Rationalise with \\(3+\\sqrt2\\).\n- Convert \\(8^{1-x}\\) to a power of 2, then equate exponents.\n- The official mark scheme shows a marginal total of `9`.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ006",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**(b)** The area of a triangle is $(9+2\\sqrt{3})\\ \\mathrm{cm}^2$.\n\nThe length of the base is $\\sqrt{3}\\ \\mathrm{cm}$.\n\nFind the perpendicular height of the triangle, giving your answer in the form $(a\\sqrt{b}+c)$.  **[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle \\frac12\\times\\sqrt3\\times h=(9+2\\sqrt3)\\)` | MW1 | 1 | Uses triangle area formula. |\n| 2 | `\\(\\displaystyle \\sqrt3\\,h=18+4\\sqrt3\\)` | W1 | 1 | Rearranges for \\(h\\). |\n| 3 | `\\(\\displaystyle h=\\frac{18+4\\sqrt3}{\\sqrt3}\\)` | W1 | 1 | Divides by \\(\\sqrt3\\). |\n| 4 | `\\(\\displaystyle h=\\frac{18}{\\sqrt3}+4\\)` | M1 | 1 | Separates the fraction. |\n| 5 | `\\(\\displaystyle h=6\\sqrt3+4\\)` | MW2 | 2 | Rationalises and simplifies. |\n\n### Final Answer\n\n`\\(\\displaystyle h=6\\sqrt3+4\\)`\n\n### What the Examiner Wanted\n\n- Apply \\(\\text{area}=\\frac12 \\times \\text{base}\\times \\text{height}\\).\n- Manipulate the surd denominator correctly.\n- The official mark scheme shows a marginal total of `14` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ007",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**(b)** Solve the equation\n\n$$\n\\frac{8^{x+1}}{2^x}=16.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle \\frac{2^{3(x+1)}}{2^x}=2^4\\)` | M1 W1 | 2 | Converts all terms to base 2. |\n| 2 | `\\(\\displaystyle 2^{3x+3}=2^{x+4}\\)` or `\\(\\displaystyle 2^{2x+3}=2^4\\)` | MW1 | 1 | Applies index laws. |\n| 3 | `\\(\\displaystyle 3x+3=x+4\\)` or `\\(\\displaystyle 2x+3=4\\)` | M1 W1 | 2 | Equates and solves exponents. |\n\n### Final Answer\n\n`\\(\\displaystyle x=\\frac12\\)`\n\n### What the Examiner Wanted\n\n- Convert \\(8\\) and \\(16\\) into powers of 2.\n- Apply index division correctly.\n\n### Alternative Method\n\nOfficial alternative shown: simplify the left-hand side to \\(2^{2x+3}\\) and then set \\(2x+3=4\\), giving \\(x=\\frac12\\).\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ008",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**3** Rationalise the denominator of\n\n$$\n\\frac{5+\\sqrt{3}}{1-2\\sqrt{3}}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `\\(\\displaystyle \\frac{5+\\sqrt3}{1-2\\sqrt3}\\times\\frac{1+2\\sqrt3}{1+2\\sqrt3}\\)` | M1 W1 | 2 | Uses the conjugate. |\n| 2 | `\\(\\displaystyle \\frac{5+10\\sqrt3+\\sqrt3+6}{1-12}\\)` | MW1 MW1 | 2 | Expands numerator and denominator. |\n| 3 | `\\(\\displaystyle \\frac{11+11\\sqrt3}{-11}\\)` | MW1 | 1 | Simplifies numerator and denominator. |\n| 4 | `\\(\\displaystyle -1-\\sqrt3\\)` | MW1 | 1 | Final simplified form. |\n\n### Final Answer\n\n`\\(-1-\\sqrt3\\)`\n\n### What the Examiner Wanted\n\n- Rationalise using \\(1+2\\sqrt3\\).\n- Simplify the denominator \\(1-12=-11\\).\n- The official mark scheme shows a marginal total of `6`.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ009",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n**(b)** Find $x$ given that\n\n$$\n3^{x+1}\\times 9^x = \\frac{1}{3\\sqrt{3}}.\n$$\n\n**[7]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle 3^{x+1}\\times 3^{2x}=3^{-\\frac32}\\)` | M1 W2 | 3 | Converts \\(9^x\\) and right-hand side to base 3. |\n| 2 | `\\(\\displaystyle 3^{3x+1}=3^{-\\frac32}\\)` | M1 W1 | 2 | Applies index laws. |\n| 3 | `\\(\\displaystyle 3x+1=-\\frac32\\)` | M1 | 1 | Equates exponents. |\n| 4 | `\\(\\displaystyle x=-\\frac56\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\n`\\(\\displaystyle x=-\\frac56\\)`\n\n### What the Examiner Wanted\n\n- Recognise \\(\\frac{1}{3\\sqrt3}=3^{-3/2}\\).\n- Combine powers of 3 before equating exponents.\n- The official mark scheme shows a marginal total of `14` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ010",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**(b)** Simplify as far as possible\n\n$$\n\\frac{(1-\\sqrt{2})^2}{2+\\sqrt{2}}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle (1-\\sqrt2)^2=1-2\\sqrt2+2=3-2\\sqrt2\\)` | M1 W1 | 2 | Expands the square correctly. |\n| 2 | `\\(\\displaystyle \\frac{3-2\\sqrt2}{2+\\sqrt2}\\times\\frac{2-\\sqrt2}{2-\\sqrt2}=\\frac{6-7\\sqrt2+4}{4-2}\\)` | M1 W1 | 2 | Rationalises the denominator. |\n| 3 | `\\(\\displaystyle \\frac{10-7\\sqrt2}{2}\\)` | MW1 MW1 | 2 | Final simplified expression. |\n\n### Final Answer\n\n`\\(\\displaystyle \\frac{10-7\\sqrt2}{2}\\)`\n\n### What the Examiner Wanted\n\n- Expand the numerator first.\n- Rationalise using \\(2-\\sqrt2\\).\n- The official mark scheme shows a marginal total of `12` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ011",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**(b)** Solve\n\n$$\n9^{x^2-1}=27^{2x-1}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle 3^{2(x^2-1)}=3^{3(2x-1)}\\)` | M1 W1 | 2 | Converts both sides to base 3. |\n| 2 | `\\(\\displaystyle 2x^2-2=6x-3\\)` | M1 MW1 | 2 | Equates exponents. |\n| 3 | `\\(\\displaystyle 2x^2-6x+1=0\\)` | — | 0 | Rearranges to quadratic form. |\n| 4 | `\\(\\displaystyle x=\\frac{3\\pm\\sqrt7}{2}\\)` | M1 W1 | 2 | Solves the quadratic. |\n\n### Final Answer\n\n`\\(\\displaystyle x=\\frac{3+\\sqrt7}{2}\\)` or `\\(\\displaystyle x=\\frac{3-\\sqrt7}{2}\\)`\n\n### What the Examiner Wanted\n\n- Use \\(9=3^2\\) and \\(27=3^3\\).\n- Equate exponents and solve the resulting quadratic.\n- The official mark scheme shows a marginal total of `11` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ012",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**6 (a)** Solve\n\n$$\n5^{4x-3}\\times (0.2)^x = \\sqrt{5}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(a) \\(\\displaystyle 5^{4x-3}\\times(5^{-1})^x=5^{\\frac12}\\)` | M1 | 1 | Converts \\(0.2\\) and \\(\\sqrt5\\). |\n| 2 | `\\(\\displaystyle 5^{4x-3}\\times5^{-x}=5^{\\frac12}\\)` | W1 | 1 | Applies power of a power. |\n| 3 | `\\(\\displaystyle 5^{3x-3}=5^{\\frac12}\\)` | M1 | 1 | Combines powers of 5. |\n| 4 | `\\(\\displaystyle 3x-3=\\frac12\\)` | W1 | 1 | Equates exponents. |\n| 5 | `\\(\\displaystyle 3x=3\\frac12\\)` | M1 | 1 | Rearranges. |\n| 6 | `\\(\\displaystyle x=\\frac76\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\n`\\(\\displaystyle x=\\frac76\\)`\n\n### What the Examiner Wanted\n\n- Recognise \\(0.2=5^{-1}\\) and \\(\\sqrt5=5^{1/2}\\).\n- Combine powers of 5 correctly before equating exponents.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ013",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**1** Simplify as far as possible\n\n$$\n\\frac{1-\\sqrt{5}}{\\sqrt{5}+3}.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `\\(\\displaystyle \\frac{1-\\sqrt5}{\\sqrt5+3}\\times\\frac{\\sqrt5-3}{\\sqrt5-3}\\)` | M1 W1 | 2 | Uses the conjugate. |\n| 2 | `\\(\\displaystyle \\frac{\\sqrt5-3-5+3\\sqrt5}{5+3\\sqrt5-3\\sqrt5-9}\\)` | MW1 MW1 | 2 | Expands numerator and denominator. |\n| 3 | `\\(\\displaystyle \\frac{-8+4\\sqrt5}{-4}\\)` | — | 0 | Intermediate simplification. |\n| 4 | `\\(\\displaystyle 2-\\sqrt5\\)` | MW1 | 1 | Final simplified form. |\n\n### Final Answer\n\n`\\(\\displaystyle 2-\\sqrt5\\)`\n\n### What the Examiner Wanted\n\n- Multiply by \\(\\sqrt5-3\\).\n- Expand and simplify carefully.\n- The official mark scheme shows `AVAILABLE MARKS` and a marginal total of `5`.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ014",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**3** Solve\n\n$$\n\\frac{81}{3^{x-1}}=\\sqrt{27}.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `\\(\\displaystyle \\frac{3^4}{3^{x-1}}=3^{\\frac32}\\)` | M1 W1 | 2 | Converts \\(81\\) and \\(\\sqrt{27}\\). |\n| 2 | `\\(\\displaystyle 3^{4-(x-1)}=3^{\\frac32}\\)` | M1 | 1 | Applies division law. |\n| 3 | `\\(\\displaystyle 3^{5-x}=3^{\\frac32}\\)` | W1 | 1 | Simplifies exponent. |\n| 4 | `\\(\\displaystyle 5-x=\\frac32\\)` | M1 | 1 | Equates exponents. |\n| 5 | `\\(\\displaystyle x=\\frac72\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\n`\\(\\displaystyle x=\\frac72\\)`\n\n### What the Examiner Wanted\n\n- Express both sides as powers of 3.\n- Carefully simplify \\(4-(x-1)\\).\n- The official mark scheme shows a marginal total of `6`.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ015",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**3** A piece of timber, in the shape of a trapezium, is shown in **Fig. 2** below.\n\n[VISUAL REFERENCE: AS1-Indices-Surds-Questions-AS1IndicesAndSurdsQ015TikZ-001]\n\nThe parallel sides of the trapezium have lengths $(6-4\\sqrt{2})$ metres and $\\sqrt{8}$ metres.\n\nThe area of the piece of timber is $7\\ \\mathrm{m}^2$.\n\nFind the exact value of $h$, leaving your answer in the form $a+\\sqrt{b}$.  **[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Indices-Surds-Questions-AS1IndicesAndSurdsQ015TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `\\(\\displaystyle \\frac12[6-4\\sqrt2+\\sqrt8]\\times h=7\\)` | M1 W1 | 2 | Uses trapezium area formula. |\n| 2 | `\\(\\displaystyle \\frac12[6-2\\sqrt2]\\times h=7\\)` | MW1 | 1 | Simplifies \\(\\sqrt8=2\\sqrt2\\). |\n| 3 | `\\(\\displaystyle h=\\frac{7}{3-\\sqrt2}\\)` | — | 0 | Rearranges for \\(h\\). |\n| 4 | `\\(\\displaystyle h=\\frac{7}{3-\\sqrt2}\\times\\frac{3+\\sqrt2}{3+\\sqrt2}\\)` | M1 W1 | 2 | Rationalises the denominator. |\n| 5 | `\\(\\displaystyle h=\\frac{7(3+\\sqrt2)}{7}\\)` | — | 0 | Simplifies denominator. |\n| 6 | `\\(\\displaystyle h=3+\\sqrt2\\)` | MW1 | 1 | Final exact height. |\n\n### Final Answer\n\n`\\(\\displaystyle h=3+\\sqrt2\\)`\n\n### What the Examiner Wanted\n\n- Use \\(\\frac12(a+b)h\\) for trapezium area.\n- Simplify \\(\\sqrt8\\) before solving for \\(h\\).\n- Rationalise to leave the answer in the requested form.\n- The official mark scheme shows a marginal total of `6`.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ016",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**(b)** Solve\n\n$$\n8^x\\times \\left(\\frac{1}{32}\\right)^{1-x}=1.\n$$\n\n**[6]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle (2^3)^x\\times(2^{-5})^{1-x}=2^0\\)` | M1 | 1 | Converts all terms to base 2. |\n| 2 | `\\(\\displaystyle 2^{3x}\\times2^{5x-5}=2^0\\)` | W1 | 1 | Expands powers. |\n| 3 | `\\(\\displaystyle 2^{8x-5}=2^0\\)` | M1 W1 | 2 | Combines powers. |\n| 4 | `\\(\\displaystyle 8x-5=0\\)` | M1 | 1 | Equates exponents. |\n| 5 | `\\(\\displaystyle x=\\frac58\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\n`\\(\\displaystyle x=\\frac58\\)`\n\n### What the Examiner Wanted\n\n- Recognise \\(8=2^3\\) and \\(\\frac1{32}=2^{-5}\\).\n- Avoid sign errors when expanding \\(-5(1-x)\\).\n- The official mark scheme shows a marginal total of `12` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ017",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**(b)** Show that\n\n$$\n\\frac{a-1}{a+\\sqrt{a}}\n\\qquad [a>0]\n$$\n\ncan be written in the form\n\n$$\n1-a^y,\n$$\n\nstating the value of $y$.  **[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle \\frac{a-1}{a+\\sqrt a}\\times\\frac{a-\\sqrt a}{a-\\sqrt a}=\\frac{(a-1)(a-\\sqrt a)}{a^2-a}\\)` | M1 W1 | 2 | Uses conjugate and denominator difference of squares. |\n| 2 | `\\(\\displaystyle =\\frac{a-\\sqrt a}{a}\\)` | MW1 | 1 | Cancels \\(a-1\\). |\n| 3 | `\\(\\displaystyle =1-a^{-\\frac12}\\)` | MW1 | 1 | Rewrites \\(\\sqrt a/a\\) using indices. |\n| 4 | `\\(\\displaystyle \\Rightarrow y=-\\frac12\\)` | MW1 | 1 | Identifies the exponent \\(y\\). |\n\n### Final Answer\n\n`\\(\\displaystyle \\frac{a-1}{a+\\sqrt a}=1-a^{-\\frac12}\\)`, so `\\(\\displaystyle y=-\\frac12\\)`\n\n### What the Examiner Wanted\n\n- Rationalise the denominator using \\(a-\\sqrt a\\).\n- Convert \\(\\sqrt a/a\\) into \\(a^{-1/2}\\).\n- The official mark scheme shows a marginal total of `11` for the original full question.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ018",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**1 (a)** Simplify as far as possible\n\n$$\n\\frac{\\sqrt{2}-1}{3-2\\sqrt{2}}.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\nOfficial solution not found in supplied mark scheme PDF.\n\n### Generated Solution, Not From Official Mark Scheme\n\n| Step | Working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `\\(\\displaystyle \\frac{\\sqrt2-1}{3-2\\sqrt2}\\times\\frac{3+2\\sqrt2}{3+2\\sqrt2}\\)` | Generated | — | Uses the conjugate. |\n| 2 | `\\(\\displaystyle \\frac{3\\sqrt2+4-3-2\\sqrt2}{9-8}\\)` | Generated | — | Expands numerator and denominator. |\n| 3 | `\\(\\displaystyle \\frac{1+\\sqrt2}{1}=1+\\sqrt2\\)` | Generated | — | Simplifies the fraction. |\n\n### Final Answer\n\n`\\(\\displaystyle 1+\\sqrt2\\)`\n\n### What the Examiner Wanted\n\n- The official mark allocation is not available in the supplied mark scheme.\n- The natural method is to rationalise using \\(3+2\\sqrt2\\).\n- This generated solution should be treated as a checking aid, not as official mark scheme wording.\n\n---"
  },
  {
    "id": "AS1IndicesAndSurdsQ019",
    "moduleId": "P1",
    "topic": "Indices & Surds",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n**(b)** Solve\n\n$$\n36\\times 6^x=\\left(\\frac{1}{6}\\right)^{x-3}.\n$$\n\n**[5]**",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | `(b) \\(\\displaystyle 6^2\\times6^x=(6^{-1})^{x-3}\\)` | M1 | 1 | Converts \\(36\\) and reciprocal base. |\n| 2 | `\\(\\displaystyle 6^{2+x}=6^{-x+3}\\)` | MW2 | 2 | Applies index laws. |\n| 3 | `\\(\\displaystyle 2+x=-x+3\\)` | M1 | 1 | Equates exponents. |\n| 4 | `\\(\\displaystyle 2x=1\\)` | — | 0 | Rearranges. |\n| 5 | `\\(\\displaystyle x=\\frac12\\)` | W1 | 1 | Solves for \\(x\\). |\n\n### Final Answer\n\n`\\(\\displaystyle x=\\frac12\\)`\n\n### What the Examiner Wanted\n\n- Convert \\(36\\) to \\(6^2\\).\n- Interpret \\(\\left(\\frac16\\right)^{x-3}\\) as \\((6^{-1})^{x-3}\\).\n- The official mark scheme shows a marginal total of `10` for the original full question.\n\n---\n\n## Unmatched Mark Scheme Entries\n\nNo unmatched mark scheme entries were identified.  Question 18 is the reverse case: it appears in the questions PDF but no matching official solution was found in the supplied mark scheme PDF."
  },
  {
    "id": "AS1CurveSketchingQ001",
    "moduleId": "P1",
    "topic": "Curve Sketching",
    "type": "Exam-Style",
    "marks": 9,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Sketch of $y=\\frac{10}{x}$ with branches in quadrants I and III and asymptotes the coordinate axes | M1W1 | 2 | Correct reciprocal-curve shape and placement. |\n| 2 | Sketch of the line $y=3x+13$ on the same diagram, with intercepts indicated (y-intercept $13$, x-intercept $-\\frac{13}{3}$) | MW1 | 1 | Correct straight-line sketch on the same axes. |\n| 3 | $3x+13=\\frac{10}{x}$ | M1 | 1 | Equates the curve and line. |\n| 4 | $3x^2+13x-10=0$ | W1 | 1 | Rearranges to a quadratic equation. |\n| 5 | $(3x-2)(x+5)=0$ | M1 | 1 | Factorises the quadratic. |\n| 6 | $x=\\frac{2}{3}$ or $x=-5$ | W2 | 2 | Finds both x-coordinates. |\n| 7 | $y=15$ or $y=-2$ | W1 | 1 | Finds the corresponding y-coordinates. |\n\n### Final Answer\n\nThe points of intersection are\n\n$$\n\\left(\\frac{2}{3},15\\right)\n\\quad\\text{and}\\quad\n(-5,-2).\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted a correct reciprocal-curve sketch, a correct straight line on the same axes, and an algebraic solution of the simultaneous equations by equating $3x+13$ and $\\frac{10}{x}$. Marks were mainly lost for not multiplying by $x$ correctly, not factorising the quadratic correctly, or giving x-values without the corresponding y-values.\n\n---"
  },
  {
    "id": "AS1CurveSketchingQ002",
    "moduleId": "P1",
    "topic": "Curve Sketching",
    "type": "Exam-Style",
    "marks": 14,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $x(9-x^2)=0$ | M1 | 1 | Sets the expression equal to zero to find x-intercepts. |\n| 2 | $x=0$ or $x=3$ or $x=-3$; hence $(0,0)$, $(3,0)$, $(-3,0)$ | W2 | 2 | Finds all three intercepts. |\n| 3 | $\\frac{dy}{dx}=9-3x^2$ | M1 W1 | 2 | Differentiates correctly. |\n| 4 | $9-3x^2=0$ | M1 | 1 | Sets the derivative equal to zero. |\n| 5 | $x=\\sqrt{3}$ or $x=-\\sqrt{3}$ | W1 | 1 | Finds the stationary x-values. |\n| 6 | If $x=\\sqrt{3}$, $y=6\\sqrt{3}$ | M1 | 1 | Substitutes into the curve. |\n| 7 | If $x=-\\sqrt{3}$, $y=-6\\sqrt{3}$ | W1 | 1 | Finds the second stationary y-value. |\n| 8 | $\\frac{d^2y}{dx^2}=-6x$ | M1 | 1 | Uses the second derivative to classify stationary points. |\n| 9 | $(\\sqrt{3},6\\sqrt{3})$ is a maximum turning point | W1 | 1 | Correctly identifies the maximum. |\n| 10 | $(-\\sqrt{3},-6\\sqrt{3})$ is a minimum turning point | W1 | 1 | Correctly identifies the minimum. |\n| 11 | Sketch of $y=9x-x^3$ showing roots $-3$, $0$, $3$ and turning points at $(-\\sqrt{3},-6\\sqrt{3})$ and $(\\sqrt{3},6\\sqrt{3})$ | MW2 | 2 | Completes the sketch using the results found. |\n\n### Final Answer\n\nThe curve crosses the x-axis at\n\n$$\n(-3,0),\\quad (0,0),\\quad (3,0).\n$$\n\nThe stationary points are\n\n$$\n(-\\sqrt{3},-6\\sqrt{3})\\ \\text{minimum},\n\\quad\n(\\sqrt{3},6\\sqrt{3})\\ \\text{maximum}.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted the roots found from the factorised expression, the stationary points found using differentiation, and the nature of each point justified using the second derivative. The sketch had to use the intercepts and stationary points consistently.\n\n---"
  },
  {
    "id": "AS1CurveSketchingQ003",
    "moduleId": "P1",
    "topic": "Curve Sketching",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Curve-Sketching-Questions-AS1CurveSketchingQ003TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(x+p)(x+q)^2=0$ | M1 | 1 | Uses the factor form to link roots to factors. |\n| 2 | $p=-3,\\quad q=1$ | MW2 | 2 | Reads the root at $x=3$ and the repeated root at $x=-1$. |\n| 3 | $y=(x-3)(x+1)^2$ | M1 | 1 | Substitutes the found values into the equation. |\n| 4 | $c=-3$ | W1 | 1 | Finds the y-intercept by setting $x=0$. |\n| 5 | $C=(0,-3)$ | Included in W1 | 0 | States the coordinates of $C$. |\n\n### Final Answer\n\n$$\np=-3,\\quad q=1,\\quad C=(0,-3).\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted students to read the simple crossing root and repeated/touching root correctly from the sketch. The y-intercept then follows by substituting $x=0$ into the completed equation.\n\n---"
  },
  {
    "id": "AS1CurveSketchingQ004",
    "moduleId": "P1",
    "topic": "Curve Sketching",
    "type": "Exam-Style",
    "marks": 2,
    "questionMarkdown": "### Question\n\n(b) Fig. 2 below shows a sketch of the curve with equation\n\n$$\ny=q(x+p)^2\n$$\n\n[VISUAL REFERENCE: AS1-Curve-Sketching-Questions-AS1CurveSketchingQ004TikZ-001]\n\nWrite down the values of $p$ and $q$.\n\n[2]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n[VISUAL REFERENCE: AS1-Curve-Sketching-Questions-AS1CurveSketchingQ004TikZ-001]\n\n### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $p=-2$ | MW1 | 1 | The vertex occurs at $x=2$, so $x+p=0$ at $x=2$. |\n| 2 | $q=-1$ | MW1 | 1 | Uses the y-intercept $-4$ and $p=-2$: $q(-2)^2=-4$. |\n\n### Final Answer\n\n$$\np=-2,\\quad q=-1.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted the vertex position to be interpreted from the factor/vertex form and the y-intercept used to find the value of $q$.\n\n---"
  },
  {
    "id": "AS1CurveSketchingQ005",
    "moduleId": "P1",
    "topic": "Curve Sketching",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\n(b) Sketch the curve with equation\n\n$$\ny=x^3-x^2\n$$\n\nclearly indicating all relevant points.\n\n[10]",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $x=0,\\ y=0$; $x^3-x^2=0$; $x^2(x-1)=0$; $x=0$ repeated, $x=1$ | MW2 | 2 | Finds and interprets the x-intercepts, including the repeated root. |\n| 2 | $\\frac{dy}{dx}=3x^2-2x$ | MW1 | 1 | Differentiates the cubic. |\n| 3 | $3x^2-2x=0$ | M1 | 1 | Sets the derivative equal to zero. |\n| 4 | $x(3x-2)=0$; $x=0,\\ x=\\frac{2}{3}$ | W1 | 1 | Finds stationary x-values. |\n| 5 | $y=0,\\ y=-\\frac{4}{27}$ | W1 | 1 | Finds stationary y-values. |\n| 6 | $\\frac{d^2y}{dx^2}=6x-2$ | MW1 | 1 | Uses the second derivative. |\n| 7 | $x=0 \\Rightarrow$ maximum; $x=\\frac{2}{3} \\Rightarrow$ minimum | MW1 | 1 | Classifies stationary points. |\n| 8 | Sketch of $y=x^3-x^2$ showing $(0,0)$ as a repeated root/maximum, $(1,0)$ as the other intercept, and minimum at $\\left(\\frac{2}{3},-\\frac{4}{27}\\right)$ | MW2 | 2 | Completes the curve sketch with relevant points. |\n\n### Final Answer\n\nThe graph has:\n\n$$\n(0,0)\\ \\text{as a repeated root and local maximum},\n\\quad\n(1,0)\\ \\text{as an x-intercept},\n\\quad\n\\left(\\frac{2}{3},-\\frac{4}{27}\\right)\\ \\text{as a local minimum}.\n$$\n\n### What the Examiner Wanted\n\nThe examiner wanted all relevant points marked clearly: roots, repeated root behaviour, stationary points and their nature. Marks were mainly available for factorising the cubic, differentiating, solving for stationary points, classifying them and producing a consistent sketch."
  },
  {
    "id": "AS1GraphTransformationsQ001",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x-4)$; $A'=(3,4)$ | M1 | 1 | Correct horizontal translation right by 4. |\n| 2 | (i): Sketch of $y=f(x-4)$; $A'=(3,4)$ | W1 | 1 | Image of A correctly labelled. |\n| 3 | (ii): Sketch of $y=3f(x)$; $A'=(-1,12)$ | M1 | 1 | Correct vertical stretch by factor 3. |\n| 4 | (ii): Sketch of $y=3f(x)$; $A'=(-1,12)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x-4)$; $A'=(3,4)$; (ii) Sketch of $y=3f(x)$; $A'=(-1,12)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ002",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x)-1$; $A'=(5,3)$ | M1 | 1 | Correct shift down 1. |\n| 2 | (i): Sketch of $y=f(x)-1$; $A'=(5,3)$ | W1 | 1 | Image of A correctly labelled. |\n| 3 | (ii): Sketch of $y=-f(x)$; $A'=(5,-4)$ | M1 | 1 | Correct reflection in the x-axis. |\n| 4 | (ii): Sketch of $y=-f(x)$; $A'=(5,-4)$ | W1 | 1 | Image of A correctly labelled. |\n| 5 | (iii): Sketch of $y=f(2x)$; $A'=(2.5,4)$ | M1 | 1 | Correct horizontal compression by factor 1/2. |\n| 6 | (iii): Sketch of $y=f(2x)$; $A'=(2.5,4)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x)-1$; $A'=(5,3)$; (ii) Sketch of $y=-f(x)$; $A'=(5,-4)$; (iii) Sketch of $y=f(2x)$; $A'=(2.5,4)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ003",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 2,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (a): Sketch of $y=f(x+2)$; image of A is $A'=(1,2)$ | M1 | 1 | Correct shift left 2. |\n| 2 | (a): Sketch of $y=f(x+2)$; image of A is $A'=(1,2)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(a) Sketch of $y=f(x+2)$; image of A is $A'=(1,2)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ004",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 2,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (c): Sketch of $y=-f(x)$; image of A is $A'=(-2,-1)$ | M1 | 1 | Correct reflection in the x-axis. |\n| 2 | (c): Sketch of $y=-f(x)$; image of A is $A'=(-2,-1)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(c) Sketch of $y=-f(x)$; image of A is $A'=(-2,-1)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ005",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=3f(x)$; $P'=(2,12)$ | M1 | 1 | Correct vertical stretch by factor 3. |\n| 2 | (i): Sketch of $y=3f(x)$; $P'=(2,12)$ | W1 | 1 | Image of P correctly labelled. |\n| 3 | (ii): Sketch of $y=f(2x)$; $P'=(1,4)$ | M1 | 1 | Correct horizontal compression by factor 1/2. |\n| 4 | (ii): Sketch of $y=f(2x)$; $P'=(1,4)$ | W1 | 1 | Image of P correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=3f(x)$; $P'=(2,12)$; (ii) Sketch of $y=f(2x)$; $P'=(1,4)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ006",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x-1)$; $A'=(2,2)$ | M1 | 1 | Correct shift right 1. |\n| 2 | (i): Sketch of $y=f(x-1)$; $A'=(2,2)$ | W1 | 1 | Image of A correctly labelled. |\n| 3 | (ii): Sketch of $y=f(-x)$; $A'=(-1,2)$ | M1 | 1 | Correct reflection in the y-axis. |\n| 4 | (ii): Sketch of $y=f(-x)$; $A'=(-1,2)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x-1)$; $A'=(2,2)$; (ii) Sketch of $y=f(-x)$; $A'=(-1,2)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ007",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\nOfficial solution not found in supplied mark scheme PDF.  The supplied mark scheme page appears to repeat the question rather than provide a worked answer.\n\n### Generated solution, not from official mark scheme\n\n| Step | Working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i) $y=f(x)+2$ shifts the graph up 2, so $A'=(3,4)$. | Generated | — | Applies vertical shift. |\n| 2 | (ii) $y=f(\tfrac12 x)$ stretches horizontally by factor 2, so $A'=(6,2)$. | Generated | — | Applies horizontal stretch. |\n\n### Final Answer\n\n`(i) $A'=(3,4)$; (ii) $A'=(6,2)$.`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ008",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): $f(x-1)$ | M1 | 1 | Recognises a horizontal shift. |\n| 2 | (i): $f(x-1)$ | W1 | 1 | Correct function notation. |\n| 3 | (ii): $-f(x)$ | MW2 | 2 | Correct reflection notation. |\n\n### Final Answer\n\n`(i) $f(x-1)$; (ii) $-f(x)$`\n\n### What the Examiner Wanted\n\nIdentify the single transformation shown and express it correctly in function notation.  Marks are mainly for recognising the type of transformation and writing the correct notation."
  },
  {
    "id": "AS1GraphTransformationsQ009",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x)-1$; $P'=(3,0)$ | M1 | 1 | Correct shift down 1. |\n| 2 | (i): Sketch of $y=f(x)-1$; $P'=(3,0)$ | W1 | 1 | Image of P correctly labelled. |\n| 3 | (ii): Sketch of $y=f(x-2)$; $P'=(5,1)$ | M1 | 1 | Correct shift right 2. |\n| 4 | (ii): Sketch of $y=f(x-2)$; $P'=(5,1)$ | W1 | 1 | Image of P correctly labelled. |\n| 5 | (iii): Sketch of $y=f(3x)$; $P'=(1,1)$ | M1 | 1 | Correct horizontal compression by factor 1/3. |\n| 6 | (iii): Sketch of $y=f(3x)$; $P'=(1,1)$ | W1 | 1 | Image of P correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x)-1$; $P'=(3,0)$; (ii) Sketch of $y=f(x-2)$; $P'=(5,1)$; (iii) Sketch of $y=f(3x)$; $P'=(1,1)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ010",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=2f(x)$; $A'=(2,6)$ | M1 | 1 | Correct vertical stretch by factor 2. |\n| 2 | (i): Sketch of $y=2f(x)$; $A'=(2,6)$ | W1 | 1 | Image of A correctly labelled. |\n| 3 | (ii): Sketch of $y=f(-x)$; $A'=(-2,3)$ | M1 | 1 | Correct reflection in the y-axis. |\n| 4 | (ii): Sketch of $y=f(-x)$; $A'=(-2,3)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=2f(x)$; $A'=(2,6)$; (ii) Sketch of $y=f(-x)$; $A'=(-2,3)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ011",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x-3)$; $T'=(5,4)$ | M1 | 1 | Correct shift right 3. |\n| 2 | (i): Sketch of $y=f(x-3)$; $T'=(5,4)$ | W1 | 1 | Image of T correctly labelled. |\n| 3 | (ii): Sketch of $y=f(2x)$; $T'=(1,4)$ | M1 | 1 | Correct horizontal compression by factor 1/2. |\n| 4 | (ii): Sketch of $y=f(2x)$; $T'=(1,4)$ | W1 | 1 | Image of T correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x-3)$; $T'=(5,4)$; (ii) Sketch of $y=f(2x)$; $T'=(1,4)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ012",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x)+1$; $A'=(2,4)$ | M1 | 1 | Correct shift up 1. |\n| 2 | (i): Sketch of $y=f(x)+1$; $A'=(2,4)$ | W1 | 1 | Image of A correctly labelled. |\n| 3 | (ii): Sketch of $y=f(\tfrac12 x)$; $A'=(4,3)$ | M1 | 1 | Correct horizontal stretch by factor 2. |\n| 4 | (ii): Sketch of $y=f(\tfrac12 x)$; $A'=(4,3)$ | W1 | 1 | Image of A correctly labelled. |\n| 5 | (iii): $a=-4$ | MW1 | 1 | Correct value of the shift parameter. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x)+1$; $A'=(2,4)$; (ii) Sketch of $y=f(\tfrac12 x)$; $A'=(4,3)$; (iii) $a=-4$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ013",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): $f(x+2)$ | M1 | 1 | Recognises shift left 2. |\n| 2 | (i): $f(x+2)$ | W1 | 1 | Correct function notation. |\n| 3 | (ii): $\tfrac12 f(x)$ | M1 | 1 | Recognises vertical scale factor 1/2. |\n| 4 | (ii): $\tfrac12 f(x)$ | W1 | 1 | Correct function notation. |\n| 5 | (iii): $f(-x)$ | M1 | 1 | Recognises reflection in the y-axis. |\n| 6 | (iii): $f(-x)$ | W1 | 1 | Correct function notation. |\n\n### Final Answer\n\n`(i) $f(x+2)$; (ii) $\tfrac12 f(x)$; (iii) $f(-x)$`\n\n### What the Examiner Wanted\n\nIdentify the single transformation shown and express it correctly in function notation.  Marks are mainly for recognising the type of transformation and writing the correct notation."
  },
  {
    "id": "AS1GraphTransformationsQ014",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): Sketch of $y=f(x)+1$; $A'=(3,7)$ | M1 | 1 | Correct shift up 1. |\n| 2 | (i): Sketch of $y=f(x)+1$; $A'=(3,7)$ | W1 | 1 | Image of A correctly labelled. |\n| 3 | (ii): Sketch of $y=\tfrac13 f(x)$; $A'=(3,2)$ | M1 | 1 | Correct vertical compression by factor 1/3. |\n| 4 | (ii): Sketch of $y=\tfrac13 f(x)$; $A'=(3,2)$ | W1 | 1 | Image of A correctly labelled. |\n| 5 | (iii): Sketch of $y=f(-x)$; $A'=(-3,6)$ | M1 | 1 | Correct reflection in the y-axis. |\n| 6 | (iii): Sketch of $y=f(-x)$; $A'=(-3,6)$ | W1 | 1 | Image of A correctly labelled. |\n\n### Final Answer\n\n`(i) Sketch of $y=f(x)+1$; $A'=(3,7)$; (ii) Sketch of $y=\tfrac13 f(x)$; $A'=(3,2)$; (iii) Sketch of $y=f(-x)$; $A'=(-3,6)$`\n\n### What the Examiner Wanted\n\nSketch the correct transformed shape and label the image of the named point.  The key marks come from the correct transformation and the correctly labelled image point."
  },
  {
    "id": "AS1GraphTransformationsQ015",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i): $f(x-1)$ | M1 | 1 | Recognises shift right 1. |\n| 2 | (i): $f(x-1)$ | W1 | 1 | Correct function notation. |\n| 3 | (ii): $\tfrac12 f(x)$ | M1 | 1 | Recognises vertical compression by factor 1/2. |\n| 4 | (ii): $\tfrac12 f(x)$ | W1 | 1 | Correct function notation. |\n| 5 | (iii): $f(\tfrac12 x)$ | M1 | 1 | Recognises horizontal stretch by factor 2. |\n| 6 | (iii): $f(\tfrac12 x)$ | W1 | 1 | Correct function notation. |\n\n### Final Answer\n\n`(i) $f(x-1)$; (ii) $\tfrac12 f(x)$; (iii) $f(\tfrac12 x)$`\n\n### What the Examiner Wanted\n\nIdentify the single transformation shown and express it correctly in function notation.  Marks are mainly for recognising the type of transformation and writing the correct notation."
  },
  {
    "id": "AS1GraphTransformationsQ016",
    "moduleId": "P1",
    "topic": "Graph Transformations",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (a)(i): $(0,2)$ | M1 | 1 | Correct vertical shift of point A. |\n| 2 | (a)(i): $(0,2)$ | W1 | 1 | Coordinate written correctly. |\n| 3 | (a)(ii): $(3,1)$ | M1 | 1 | Correct horizontal shift right 3. |\n| 4 | (a)(ii): $(3,1)$ | W1 | 1 | Coordinate written correctly. |\n| 5 | (a)(iii): $(0,1)$ | M1 | 1 | Correct reflection in the y-axis. |\n| 6 | (a)(iii): $(0,1)$ | W1 | 1 | Coordinate written correctly. |\n| 7 | (b): $y=-2$ | MW1 | 1 | Correct transformed asymptote. |\n\n### Final Answer\n\n`(a)(i) $(0,2)$; (a)(ii) $(3,1)$; (a)(iii) $(0,1)$; (b) $y=-2$`\n\n### What the Examiner Wanted\n\nTrack the image of point A under each transformation and update the horizontal asymptote under the vertical shift.\n\n---\n\n## Unmatched Mark Scheme Entries\n\nThe mark scheme PDF contains an additional entry for **June 2015 Question 1 (iii)** showing the answers `$2f(x)$` and `$f(x)+4$` with mark codes `MW1` and `MW1`.  This part is not visible in the supplied questions PDF page for June 2015 Question 1, so it has not been added to the questions file."
  }
];
