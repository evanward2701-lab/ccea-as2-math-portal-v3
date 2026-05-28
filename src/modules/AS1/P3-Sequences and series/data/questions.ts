import { PracticeQuestion } from '@/core/types';

export const P3_QUESTIONS: PracticeQuestion[] = [
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ001",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\nFind the term in $x^3$ in the binomial expansion of\n\n$$\n(2-x)^{10}\n$$\n\n$[4]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\dfrac{10\\times9\\times8}{1\\times2\\times3}\\,2^7(-x)^3$ | MW3 | 3 | Selects the $r=3$ term. |\n| 2 | $=-15360x^3$ | W1 | 1 | Simplifies the term. |\n\n### Final Answer\n\n`-15360x^3`\n\n### What the Examiner Wanted\n\nThe key step was identifying the term containing $x^3$ in $(2-x)^{10}$. The sign comes from $(-x)^3$, so the final coefficient is negative.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ002",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "### Question\n\n**5 (i)** Find the first four terms in the binomial expansion, in ascending powers of $x$, of\n\n$$\n(1+3x)^4\n$$\n\n$[4]$\n\nThe first three terms in the binomial expansion, in ascending powers of $x$, of\n\n$$\n(1+x)^{12}\n$$\n\nare\n\n$$\n1+12x+66x^2\n$$\n\nFor a certain value of $x$, where $x\\ne 0$, the sum of the first three terms in the binomial expansion of $(1+x)^{12}$ is equal to the sum of the first four terms in the binomial expansion in (i).\n\n**(ii)** Find $x$.\n\n$[3]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(1+3x)^4=1+4\\times3x+\\dfrac{4\\times3}{1\\times2}(3x)^2+\\dfrac{4\\times3\\times2}{1\\times2\\times3}(3x)^3$ | MW3 | 3 | Uses binomial coefficients. |\n| 2 | $=1+12x+54x^2+108x^3$ | W1 | 1 | First four terms simplified. |\n| 3 | $1+12x+66x^2=1+12x+54x^2+108x^3$ | M1 | 1 | Equates the two sums. |\n| 4 | $0=108x^3-12x^2$ | W1 | 1 | Rearranges correctly. |\n| 5 | $0=12x^2(9x-1)$ | - | 0 | Factorisation step. |\n| 6 | $\\Rightarrow x=0$ or $\\dfrac{1}{9}$ | W1 | 1 | Solves the equation. |\n\n### Final Answer\n\n`(i) 1 + 12x + 54x^2 + 108x^3`  \n`(ii) x = 1/9` because the question states $x\\ne0$.\n\n### What the Examiner Wanted\n\nPart (i) required the first four binomial terms. Part (ii) required equating the two finite sums and rejecting $x=0$ using the condition in the question.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ003",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\nIf\n\n$$\n(1+ax)^n=1-4x+7x^2+\\cdots\n$$\n\nfind the values of $a$ and $n$.\n\n$[10]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(1+ax)^n=1+n(ax)+\\dfrac{n(n-1)}{2}(ax)^2=1-4x+7x^2$ | M1 W2 | 3 | Writes the first three terms. |\n| 2 | $na=-4$ | M1 W1 | 2 | Compares coefficients of $x$. |\n| 3 | $\\dfrac{n(n-1)a^2}{2}=7$ | MW1 | 1 | Compares coefficients of $x^2$. |\n| 4 | $a=-\\dfrac{4}{n}$ | MW1 | 1 | Rearranges from $na=-4$. |\n| 5 | $\\left(\\dfrac{n(n-1)}{2}\\right)\\left(-\\dfrac{4}{n}\\right)^2=7$ | M1 | 1 | Substitutes for $a$. |\n| 6 | $8n-8=7n$ | - | 0 | Simplifies equation. |\n| 7 | $n=8$ | W1 | 1 | Solves for $n$. |\n| 8 | $a=-\\dfrac{1}{2}$ | MW1 | 1 | Finds $a$. |\n\n### Final Answer\n\n`n = 8, a = -1/2`\n\n### What the Examiner Wanted\n\nThe examiner wanted comparison of coefficients after writing the first three binomial terms. The main trap is forgetting that $(ax)^2=a^2x^2$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ004",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**4 (i)** Use the Binomial theorem to expand\n\n$$\n(2+x)^5\n$$\n\n$[4]$\n\n**(ii)** Hence expand\n\n$$\n(2-\\sqrt5)^5\n$$\n\nand express your answer in the form $a+b\\sqrt5$.\n\n$[2]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(2^5)+(5\\times2^4\\times x)+(10\\times2^3\\times x^2)+(10\\times2^2\\times x^3)+(5\\times2\\times x^4)+x^5$ | MW3 | 3 | Expands using row 5. |\n| 2 | $32+80x+80x^2+40x^3+10x^4+x^5$ | MW1 | 1 | Simplifies expansion. |\n| 3 | $32-80\\sqrt5+400-200\\sqrt5+250-25\\sqrt5$ | M1 | 1 | Substitutes $x=-\\sqrt5$. |\n| 4 | $682-305\\sqrt5$ | W1 | 1 | Combines like surd terms. |\n\n### Final Answer\n\n`(i) 32 + 80x + 80x^2 + 40x^3 + 10x^4 + x^5`  \n`(ii) 682 - 305\\sqrt5`\n\n### What the Examiner Wanted\n\nPart (ii) depended on substituting $x=-\\sqrt5$ into the expansion from part (i). The required form was $a+b\\sqrt5$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ005",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**(c)** Find the coefficient of $x^5$ in the binomial expansion of\n\n$$\n(1-2x)^9\n$$\n\n$[4]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | ${}^9C_5(1)^4(-2x)^5$ | MW3 | 3 | Selects the $x^5$ term. |\n| 2 | $126\\times(-32)$ | - | 0 | Simplifies the coefficient parts. |\n| 3 | $-4032$ | MW1 | 1 | Final coefficient. |\n\n### Final Answer\n\n`-4032`\n\n### What the Examiner Wanted\n\nThe coefficient of $x^5$ comes from the term with $r=5$. The sign is negative because $(-2x)^5$ is negative.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ006",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**4 (a)** Expand\n\n$$\n\\left(1+\\frac{x}{5}\\right)^{10}\n$$\n\nup to and including the term in $x^3$.\n\n$[4]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $1+10\\left(\\dfrac{x}{5}\\right)+45\\left(\\dfrac{x}{5}\\right)^2+120\\left(\\dfrac{x}{5}\\right)^3+\\cdots$ | M1 W2 | 3 | Uses first four terms. |\n| 2 | $1+2x+\\dfrac{9}{5}x^2+\\dfrac{24}{25}x^3$ | MW1 | 1 | Simplifies up to $x^3$. |\n\n### Final Answer\n\n`1 + 2x + (9/5)x^2 + (24/25)x^3`\n\n### What the Examiner Wanted\n\nThe expansion needed to stop at, and include, the term in $x^3$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ007",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\nFind the term independent of $x$ in the binomial expansion of\n\n$$\n\\left(3x+\\frac{1}{x^2}\\right)^9\n$$\n\n$[5]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Required term: $X^6Y^3$ | - | 0 | Identifies the constant term structure. |\n| 2 | ${}^9C_6(3x)^6\\left(\\dfrac{1}{x^2}\\right)^3$ | M1 W3 | 4 | Chooses the term independent of $x$. |\n| 3 | $=84\\times729x^6\\times\\dfrac{1}{x^6}$ | - | 0 | Simplifies powers. |\n| 4 | $=61236$ | W1 | 1 | Final constant term. |\n\n### Final Answer\n\n`61236`\n\n### What the Examiner Wanted\n\nThe powers had to cancel: $(3x)^6$ contributes $x^6$ and $(1/x^2)^3$ contributes $x^{-6}$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ008",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\nUse the binomial theorem to find the first four terms in the expansion, in ascending powers of $x$, of\n\n$$\n\\left(1-\\frac{x}{2}\\right)^8\n$$\n\n$[4]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\left(1-\\dfrac{x}{2}\\right)^8=1+\\dfrac{8}{1}\\left(-\\dfrac{x}{2}\\right)+\\dfrac{8\\cdot7}{1\\cdot2}\\left(-\\dfrac{x}{2}\\right)^2+\\dfrac{8\\cdot7\\cdot6}{1\\cdot2\\cdot3}\\left(-\\dfrac{x}{2}\\right)^3+\\cdots$ | M1 MW2 | 3 | Uses first four terms. |\n| 2 | $=1-4x+7x^2-7x^3+\\cdots$ | W1 | 1 | Simplifies terms. |\n\n### Final Answer\n\n`1 - 4x + 7x^2 - 7x^3 + ...`\n\n### What the Examiner Wanted\n\nThe alternating signs come from powers of $-x/2$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ009",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\n**6 (a)** In the Binomial expansion of\n\n$$\n\\left(1+\\frac{x}{3}\\right)^n\n$$\n\nthe coefficient of $x^2$ is 4.\n\nFind the value of $n$, where $n$ is a positive integer.\n\n$[6]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | ${}^nC_2\\left(\\dfrac{x}{3}\\right)^2=4x^2$ | M1 | 1 | Sets coefficient of $x^2$. |\n| 2 | $\\dfrac{n(n-1)}{2}\\times\\dfrac{1}{9}=4$ | M1 MW1 | 2 | Converts ${}^nC_2$ and coefficient. |\n| 3 | $n^2-n-72=0$ | M1 | 1 | Forms quadratic equation. |\n| 4 | $(n-9)(n+8)=0$ | MW1 | 1 | Factorises. |\n| 5 | $n=9$ | W1 | 1 | Chooses positive integer. |\n\n### Final Answer\n\n`n = 9`\n\n### What the Examiner Wanted\n\nThe key was using the $x^2$ term, then rejecting $n=-8$ because $n$ is a positive integer.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ010",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**(b)** Find the coefficient of $x^5$ in the binomial expansion of\n\n$$\n(3-x)^7\n$$\n\n$[4]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | ${}^7C_5\\times3^2\\times(-x)^5=-189x^5$ | MW4 | 4 | Finds and simplifies the $x^5$ term. |\n| 2 | $-189$ | - | 0 | Coefficient requested. |\n\n### Final Answer\n\n`-189`\n\n### What the Examiner Wanted\n\nThe term in $x^5$ uses $r=5$. The negative sign comes from $(-x)^5$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ011",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "### Question\n\nFind the first three terms, in descending powers of $x$, in the binomial expansion of\n\n$$\n\\left(2x-\\frac{5}{x^2}\\right)^9\n$$\n\n$[5]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | ${}^9C_0(2x)^9+{}^9C_1(2x)^8(-5x^{-2})+{}^9C_2(2x)^7(-5x^{-2})^2$ | MW4 | 4 | Writes first three descending terms. |\n| 2 | $512x^9-11520x^6+115200x^3$ | W1 | 1 | Simplifies powers and coefficients. |\n\n### Final Answer\n\n`512x^9 - 11520x^6 + 115200x^3`\n\n### What the Examiner Wanted\n\nThe first three descending powers start from $(2x)^9$, then decrease by powers of $x^3$ because the second term contains $x^{-2}$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ012",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 10,
    "questionMarkdown": "### Question\n\nIn the binomial expansion, in ascending powers of $x$, of\n\n$$\n\\left(1+\\frac{x}{k}\\right)^n \\qquad k\\ne0 \\qquad n\\ne0\n$$\n\nthe coefficients of $x$ and $x^2$ are equal and non-zero.\n\n**(i)** Form an equation in $n$ and $k$.\n\n$[4]$\n\nThe coefficient of $x^4$ is four times the coefficient of $x^5$.\n\n**(ii)** Show that $4n=5k+16$.\n\n$[4]$\n\n**(iii)** Hence find $n$ and $k$.\n\n$[2]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $n\\left(\\dfrac{1}{k}\\right)=\\dfrac{n(n-1)}{2!}\\left(\\dfrac{1}{k}\\right)^2$ | M1 MW2 | 3 | Equates coefficients of $x$ and $x^2$. |\n| 2 | $\\dfrac{1}{k}=\\dfrac{n-1}{2k^2}$ | - | 0 | Cancels non-zero $n$. |\n| 3 | $2k=n-1$ | - | 0 | Rearranges. |\n| 4 | $n=2k+1$ | MW1 | 1 | Equation from part (i). |\n| 5 | $\\dfrac{n(n-1)(n-2)(n-3)}{4!}\\left(\\dfrac{1}{k}\\right)^4=4\\left(\\dfrac{n(n-1)(n-2)(n-3)(n-4)}{5!}\\right)\\left(\\dfrac{1}{k}\\right)^5$ | MW2 M1 | 3 | Uses the $x^4$ and $x^5$ coefficients. |\n| 6 | $\\dfrac{1}{24k^4}=\\dfrac{n-4}{30k^5}$ | - | 0 | Cancels common factors. |\n| 7 | $\\dfrac{1}{24}=\\dfrac{n-4}{30k}$ | - | 0 | Rearranges. |\n| 8 | $24n=30k+96$ | - | 0 | Clears fractions. |\n| 9 | $4n=5k+16$ | MW1 | 1 | Required result. |\n| 10 | $1.25k+4=2k+1$ | M1 | 1 | Combines the two equations. |\n| 11 | $0.75k=3$ | - | 0 | Rearranges. |\n| 12 | $k=4$ and $n=9$ | W1 | 1 | Final values. |\n\n### Final Answer\n\n`n = 9, k = 4`\n\n### What the Examiner Wanted\n\nThe examiner wanted coefficient comparison, then simultaneous solution of the two equations. The non-zero conditions justify cancellation.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ013",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "### Question\n\nUse the binomial theorem to expand, in ascending powers of $x$,\n\n$$\n(2+x-x^2)^6\n$$\n\nas far as the term in $x^3$.\n\n$[6]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $[2+(x-x^2)]^6$ | MW1 | 1 | Rewrites the expression. |\n| 2 | $2^6+6\\cdot2^5(x-x^2)+\\dfrac{6\\times5}{1\\times2}2^4(x-x^2)^2+\\dfrac{6\\times5\\times4}{1\\times2\\times3}2^3(x-x^2)^3+\\cdots$ | M1 MW3 | 4 | Expands enough terms. |\n| 3 | $=64+192x-192x^2+240x^2-480x^3+160x^3+\\cdots$ | - | 0 | Collects contributions to $x^3$. |\n| 4 | $=64+192x+48x^2-320x^3$ | W1 | 1 | Final simplified expansion. |\n\n### Final Answer\n\n`64 + 192x + 48x^2 - 320x^3`\n\n### What the Examiner Wanted\n\nThe expression must be treated as $2+(x-x^2)$. Terms beyond $(x-x^2)^3$ are not needed for powers up to $x^3$.\n\n### Alternative Method\n\nOfficial alternative method from the supplied mark scheme:\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(2+x-x^2)^6=2^6\\left(1+\\dfrac{1}{2}(x-x^2)\\right)^6$ | MW2 | 2 | Factors out $2^6$. |\n| 2 | $2^6\\left[1+6\\cdot\\dfrac12(x-x^2)+\\dfrac{6\\times5}{1\\times2}\\cdot\\dfrac14(x-x^2)^2+\\dfrac{6\\times5\\times4}{1\\times2\\times3}\\cdot\\dfrac18(x-x^2)^3\\right]$ | M1 MW2 | 3 | Expands the bracket. |\n| 3 | $64\\left[1+3x+\\dfrac34x^2-5x^3+\\cdots\\right]$ | - | 0 | Simplifies inside bracket. |\n| 4 | $=64+192x+48x^2-320x^3$ | W1 | 1 | Final simplified expansion. |\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ014",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "### Question\n\n**5 (i)** Use the binomial theorem to expand\n\n$$\n(3+x)^5\n$$\n\nin ascending powers of $x$.\n\n$[4]$\n\n**Note:** The supplied questions PDF shows only part (i) of this original question. The supplied mark scheme includes an extra part (ii), which is recorded separately in the solutions file as an unmatched mark scheme entry.",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(3+x)^5={5\\choose0}(x)^0(3)^5+{5\\choose1}(x)^1(3)^4+{5\\choose2}(x)^2(3)^3+{5\\choose3}(x)^3(3)^2+{5\\choose4}(x)^4(3)^1+{5\\choose5}(x)^5(3)^0$ | MW3 | 3 | Full binomial expansion. |\n| 2 | $=243+405x+270x^2+90x^3+15x^4+x^5$ | W1 | 1 | Simplifies terms. |\n\n### Final Answer\n\n`243 + 405x + 270x^2 + 90x^3 + 15x^4 + x^5`\n\n### What the Examiner Wanted\n\nThe supplied questions PDF only asks for part (i), so the relevant official solution is the expansion in ascending powers of $x$.\n\n---"
  },
  {
    "id": "AS1SequencesSeriesBinomialExpansionQ015",
    "moduleId": "P3",
    "topic": "Binomial Expansion",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "### Question\n\n**8 (a) (i)** Find the first four terms, in ascending powers of $x$, in the binomial expansion of\n\n$$\n\\left(1-\\frac{x}{3}\\right)^8\n$$\n\n$[4\\text{ marks}]$\n\n**(ii)** Hence find the term independent of $x$ in the expansion of\n\n$$\n\\left(2+\\frac{1}{x^2}\\right)\\left(1-\\frac{x}{3}\\right)^8\n$$\n\n$[4\\text{ marks}]$",
    "markSchemeMarkdown": "### Official Mark Scheme Solution\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\left(1-\\dfrac{x}{3}\\right)^8=1+8\\left(-\\dfrac{x}{3}\\right)+\\dfrac{8\\cdot7}{2!}\\left(-\\dfrac{x}{3}\\right)^2+\\dfrac{8\\cdot7\\cdot6}{3!}\\left(-\\dfrac{x}{3}\\right)^3$ | M1 MW2 | 3 | First four terms. |\n| 2 | $=1-\\dfrac{8}{3}x+\\dfrac{28}{9}x^2-\\dfrac{56}{27}x^3$ | W1 | 1 | Simplifies terms. |\n| 3 | $\\left(2+\\dfrac{1}{x^2}\\right)\\left(1-\\dfrac{x}{3}\\right)^8=\\left(2+\\dfrac{1}{x^2}\\right)\\left(1+\\cdots+\\dfrac{28}{9}x^2\\right)$ | M1 | 1 | Identifies needed terms. |\n| 4 | Required term $=2+\\dfrac{28}{9}$ | MW2 | 2 | Adds constant contributions. |\n| 5 | $=\\dfrac{46}{9}$ | W1 | 1 | Final independent term. |\n\n### Final Answer\n\n`(i) 1 - (8/3)x + (28/9)x^2 - (56/27)x^3`  \n`(ii) 46/9`\n\n### What the Examiner Wanted\n\nThe constant term in part (ii) comes from $2\\times1$ and $\\dfrac{1}{x^2}\\times\\dfrac{28}{9}x^2$.\n\n---\n\n## 4. Unmatched Mark Scheme Entries\n\n### C2 June 2018 Question 5, part (ii)\n\n\n**Status:** The supplied questions PDF shows only part (i) of this question. The following mark scheme lines appear in the supplied mark scheme but the matching question text is not visible in the questions PDF.\n\n| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $(3+x)^5-(3-x)^5=(243+405x+270x^2+90x^3+15x^4+x^5)-(243-405x+270x^2-90x^3+15x^4-x^5)$ | M1 W1 | 2 | Uses the two expansions. |\n| 2 | $=810x+180x^3+2x^5$ | - | 0 | Simplifies difference. |\n| 3 | $\\therefore P=810,\\ Q=180,\\ R=2$ | W2 | 2 | Final coefficients. |\n\n### Final Answer\n\n`P = 810, Q = 180, R = 2`"
  }
];
