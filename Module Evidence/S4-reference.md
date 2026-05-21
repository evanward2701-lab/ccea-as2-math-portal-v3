# S4 Statistics Evidence Reference

Source document: `S4 Statistics.docx`

Use this as module-specific evidence when expanding or checking the portal lesson and practice-bank content.

## 1. Lesson TitleS4: Statistical Distributions (Discrete Probability and the Binomial Model)

## 2. Source Groups Used

S4: Statistical Distributions

V1: Exam Materials

V2: Rules

Deep Research Report: Gap Fill

CCEA AS2 Mathematics Exam Requirements and Methods

## 3. Specification Focus

Demonstrate understanding of discrete probability distributions.

Demonstrate understanding of and use the binomial distribution as an example of a discrete probability distribution.

Calculate probabilities using the binomial distribution.

Link binomial probabilities to the binomial expansion and tree diagrams.

## 4. Learning OutcomesBy the end of this lesson, you should be able to:

Identify situations that can be modelled using the binomial distribution by checking the four required conditions.

Properly define a discrete random variable in context using the notation $X \sim \text{Bin}(n, p)$ or $X \sim B(n, p)$.

Calculate exact binomial probabilities using the binomial formula.

Calculate cumulative binomial probabilities (such as "at most" or "at least") by manually summing terms or converting inequalities for calculator validation.

Explain how binomial coefficients connect to the number of successful paths on a probability tree diagram and the terms of a binomial expansion.

## 5. Key Vocabulary

Discrete Random Variable: A variable whose possible values are distinct, countable outcomes (e.g., number of successes).

Binomial Distribution: A specific probability distribution for the number of successes in a fixed number of independent trials.

Trial: One single repeat of an experiment (e.g., flipping one coin, testing one component).

Success/Failure: The two mutually exclusive outcomes of a single binomial trial.

Independent Trials: The outcome of one trial has absolutely no effect on the probability of outcomes in subsequent trials.

Coefficient: The mathematical value $\binom{n}{x}$ or $^nC_x$ that counts the number of different ways to arrange $x$ successes among $n$ trials.

Cumulative Probability: The sum of probabilities up to and including a specific value (e.g., $P(X \leq x)$).

## 6. Prior Knowledge

Confident use of basic probability laws (Addition and Multiplication laws).

Drawing and multiplying along branches of a probability tree diagram.

Evaluating combinations using the $^nC_r$ button on a calculator.

Basic familiarity with the algebraic binomial expansion $(a+b)^n$.

## 7. Full Theory Explanation

Discrete Probability DistributionsA discrete random variable (usually denoted by a capital letter like $X$) has a specific set of countable outcomes. The probability of each outcome is written as $P(X = x)$. For any valid discrete probability distribution, the sum of all individual probabilities must equal exactly 1.

The Binomial Model and its ConditionsThe binomial distribution is the most common discrete distribution tested in AS2. You can only use the binomial model if the real-world situation satisfies four strict conditions:

There is a fixed number of trials (denoted by $n$).

There are exactly two possible outcomes for each trial, usually labelled "success" and "failure".

The probability of success (denoted by $p$) is constant for every trial.

The trials are completely independent of each other.

If a scenario meets these conditions, we define the random variable in context (e.g., "Let $X$ be the number of faulty frames") and write its distribution as:$$X \sim B(n, p)$$

Exact Binomial ProbabilitiesTo find the probability of exactly $x$ successes out of $n$ trials, we use the formula:$$P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}$$Here, $p^x$ represents the probability of the successes, $(1-p)^{n-x}$ represents the probability of the failures, and the coefficient $\binom{n}{x}$ represents the number of different ways those successes and failures can be arranged.

Link to Tree Diagrams and Binomial ExpansionIf you draw a tree diagram for 4 trials and want exactly 2 successes, paths like Success-Success-Failure-Failure ($SSFF$) and Success-Failure-Success-Failure ($SFSF$) both have a probability of $p^2(1-p)^2$. The binomial coefficient $\binom{4}{2} = 6$ simply counts that there are exactly 6 of these successful paths on the tree. This directly mirrors the terms in the algebraic binomial expansion of $((1-p) + p)^n$. The binomial formula is effectively a compressed, mathematical shortcut for a massive tree diagram.

Cumulative Probabilities and InequalitiesAs far as the Binomial is concerned, the cumulative frequency is not really a separate topic. There is no need for any extra resources; candidates just need to be shown how to use tables or a calculator function safely. Because the data is discrete (countable whole numbers), inequalities must be handled with extreme care:

"Fewer than 3" means $X < 3$, which is exactly the same as $X \leq 2$. You only sum $P(X=0) + P(X=1) + P(X=2)$.

"At least 3" means $X \geq 3$. Because the total probability is 1, it is much faster to calculate $1 - P(X \leq 2)$.

## 8. Formulae and Notation

Binomial Distribution Notation: $X \sim B(n, p)$ or $X \sim \text{Bin}(n, p)$

Exact Probability Formula: $P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}$ (or $^nC_x p^x q^{n-x}$ where $q = 1-p$)

Complement Rule for "At Least": $P(X \geq x) = 1 - P(X \leq x-1)$

## 9. Step-by-Step Methods

### Method: Solving Binomial Probability Problems

Define the random variable: Write "Let $X$ be the number of..." in the context of the question.

State the distribution: Write $X \sim B(n, p)$, filling in the numbers for $n$ and $p$.

Translate the wording: Convert phrases like "at most" or "fewer than" into precise strict/inclusive inequalities ($P(X \leq x)$).

Substitute into the formula: For an exact value, substitute directly into $\binom{n}{x} p^x (1-p)^{n-x}$. For cumulative values, sum the individual exact term substitutions.

Calculate and round: Keep intermediate values to at least 4 significant figures, and give the final answer to 3 significant figures.

## 10. Worked Examples with Full Written Working

Example 1: Exact and Cumulative Probabilities Targeted PracticePaul plants ten snowdrop bulbs. He knows from experience that the bulbs have a 65% chance of flowering in the spring.Find the probability that:(i) exactly 7 snowdrops flower in the spring;(ii) at most 7 snowdrops flower in the spring.

Step 1: Define variables and distributionLet $X$ be the number of snowdrops flowering.$X \sim B(10, 0.65)$

Step 2: Solve (i) Exact Probability$P(X=7) = \binom{10}{7} (0.65)^7 (0.35)^3$$P(X=7) = 120 \times 0.04902... \times 0.042875$$P(X=7) = 0.2522... = 0.252 \text{ (to 3 s.f.)}$

Step 3: Solve (ii) Cumulative Probability"At most 7" means we want $P(X \leq 7)$. The fastest way is to use the complement of 8, 9, and 10.$P(X \leq 7) = 1 - P(X=8) + P(X=9) + P(X=10)$$P(X=8) = \binom{10}{8} (0.65)^8 (0.35)^2 = 0.1756...$$P(X=9) = \binom{10}{9} (0.65)^9 (0.35)^1 = 0.07249...$$P(X=10) = \binom{10}{10} (0.65)^{10} (0.35)^0 = 0.01346...$$P(X \leq 7) = 1 - 0.1756 + 0.07249 + 0.01346 = 1 - 0.2616... = 0.738 \text{ (to 3 s.f.)}$

Example 2: Conditions and Zeros Exam-StyleState two of the conditions necessary for a random variable to be modelled by a binomial distribution. The probability that a boy chosen at random has a birthday on a Saturday this year is $\frac{1}{7}$. 8 boys are chosen at random. Find the probability that none of these boys has a birthday on a Saturday this year.

Step 1: State ConditionsTrials must be independent.There must be a fixed number of trials.

Step 2: Define distributionLet $X$ be the number of boys with a Saturday birthday.$X \sim B(8, \frac{1}{7})$

Step 3: Calculate for none (X=0)$P(X=0) = \binom{8}{0} (\frac{1}{7})^0 (\frac{6}{7})^8$$P(X=0) = 1 \times 1 \times 0.2917...$$P(X=0) = 0.292 \text{ (to 3 s.f.)}$

## 11. Diagrams, Tables, or Graph Descriptions Where Useful

Diagram 1: Small-$n$ Binomial Tree Collapsed to Formula Term

Where it belongs in the lesson: Under the "Link to Tree Diagrams and Binomial Expansion" theory section.

What it should show: A probability tree diagram for 3 trials ($n=3$). Highlight all the distinct branch paths that lead to exactly 2 successes ($SSF, SFS, FSS$).

Required labels: Label each branch with $p$ or $(1-p)$. At the end of the paths, group them together with a bracket pointing to the formula term: $\binom{3}{2} p^2 (1-p)^1$.

Caption: The binomial coefficient $\binom{n}{x}$ counts the number of successful branch pathways on a tree diagram, avoiding the need to draw massive trees for large values of $n$.

Misconception it helps prevent: Helps prevent students from forgetting the binomial coefficient $^nC_x$ by showing it physically represents the number of valid path arrangements.

Diagram 2: Cumulative Binomial Inequality Panel

Where it belongs in the lesson: Under "Cumulative Probabilities and Inequalities".

What it should show: A 2-column translation table converting English phrases into mathematical discrete inequalities.

Required labels:

"Fewer than 4" $\rightarrow P(X < 4) \rightarrow \text{Calculate } P(X \leq 3)$

"At most 4" $\rightarrow \text{Calculate } P(X \leq 4)$

"At least 4" $\rightarrow P(X \geq 4) \rightarrow \text{Calculate } 1 - P(X \leq 3)$

"More than 4" $\rightarrow P(X > 4) \rightarrow \text{Calculate } 1 - P(X \leq 4)$

Caption: Because binomial data is discrete, strict inequalities ($<, >$) must be carefully converted into inclusive inequalities ($\leq, \geq$) before calculating.

Misconception it helps prevent: Prevents students from incorrectly calculating $1 - P(X \leq 4)$ when asked for "at least 4".

## 12. Common Traps

Forgetting the Coefficient: Calculating $p^x (1-p)^{n-x}$ but forgetting to multiply by $\binom{n}{x}$. This represents finding the probability of only one specific path on the tree diagram, rather than all possible arrangements.

Mixing up $<$, $\leq$, $>$, and $\geq$: Discrete data does not flow continuously. The value $X < 2$ means exactly $X=0, 1$. It does not include $1.99$. Therefore $P(X < 2)$ is exactly the same as $P(X \leq 1)$.

Failing to justify the model: If an exam question asks "Why might a binomial distribution not be suitable?", look for a violation of the conditions. Often, the probability $p$ is not constant over time, or the events are not truly independent.

Giving "naked" calculator answers: Writing down just a final decimal answer directly from a calculator without defining $X \sim B(n, p)$ or showing the formula substitution will result in zero method marks.

## 13. Calculator ValidationThe V1 Exam Support rules state: "When using a calculator to find binomial probabilities this can be simply calculated by using the PD Probability Distribution or CD Cumulative Distribution function." However, you must write down your working first. The rules strictly require you to describe the random variable as $X \sim B(n,p)$ on your paper. Use your calculator's CD function to quickly check that your manual sum of exact probabilities ($P(X=0) + P(X=1) + P(X=2)$) is completely correct, but do not let the calculator replace your written method.

> **⚠️ EXAM WARNING: CALCULATOR USAGE PROTOCOLCCEA strictly requires candidates to show the development of their answers to secure Method M1 and Working W1 marks. While you are fully expected to use your calculator's functions, you must not write down just the final answer.According to V1 guidelines, when using a calculator's CD function to find $P(X \leq 3)$, candidates should explicitly indicate that the calculator is finding $P(X \leq 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)$. Providing a "naked" final answer directly from your calculator runs a massive risk: if you made a minor typo when entering the data, you will score zero marks for the entire question because the examiner cannot see your method.**

## 14. Exam Technique

Identify the 3 numbers: Every binomial question gives you $n$ (the number of trials) and $p$ (the probability of success). The sub-parts of the question will then give you $x$ (the target number).

Define your variables: Examiners look for explicit definitions. "Let $X$ be the number of faulty frames. $X \sim B(8, 0.2)$."

Rounding: Always round your final answers to 3 significant figures, but preserve at least 5 decimal places during the intermediate steps of cumulative addition.

> **⚠️ EXAM WARNING: THE "MULTIPLE RESPONSES" RULEIf you are unsure of how to tackle a problem and you provide two different methods or answers on your page in the hope that the examiner will select the correct one, you will be heavily penalised.Official CCEA examiner guidance dictates that if a candidate provides multiple responses clearly trying to cover all options without crossing one out, the examiner will mark all attempts and award the marks for the POOREST solution.If you restart a question or change your mind about a mathematical model, you must decisively cross out the incorrect attempt with a single diagonal line so that only your intended, final solution remains active.**

## 15. Exam-Style Questions

Question 1 Exam-StyleAt a local airport, planes cannot land if there are severe cross winds. During the winter months the probability of this happening on a given day is 0.04. Find the probability that in a period of 7 winter days severe winds prevent landings on:(i) no days;(ii) 2 or more days.(iii) State why this distribution would not be suitable to calculate the probability of landing being prevented in all months of the year.

Question 2 Exam-StyleA factory makes porcelain picture frames. It is known that 20% of the picture frames are faulty. A random sample of 8 picture frames is taken and examined for faults. The number of faulty picture frames in the sample is denoted by $X$.Find the probability that:(i) none of the picture frames inspected are faulty;(ii) at most one quarter of those inspected is faulty.

Question 3 Exam-StyleSandra is employed by a large supermarket chain to oversee the management of four of its branches. The supermarket chain reports that nationally the probability of branches increasing their yearly profit is 0.38.(i) What important assumption has to be made in order to model this situation using the Binomial distribution?Find the probability that there is an increase in this year’s profits for:(ii) all four of Sandra's branches;(iii) fewer than two of Sandra's branches.

## 16. Full Worked Solutions

### Question 1Let $X$ be the number of days severe winds prevent landings.$X \sim B(7, 0.04)$ M1(i) $P(X=0) = \binom{7}{0}(0.04)^0(0.96)^7$ MW1$P(X=0) = 0.7514... = 0.751 \text{ (to 3 s.f.)}$ W1

(ii) "2 or more" means $P(X \geq 2)$.$P(X \geq 2) = 1 - P(X \leq 1)$$P(X \geq 2) = 1 - P(X=0) + P(X=1)$ MW1$P(X=1) = \binom{7}{1}(0.04)^1(0.96)^6 = 0.21917...$ M1$P(X \geq 2) = 1 - 0.751447... + 0.21917...$$P(X \geq 2) = 1 - 0.9706 = 0.02938... = 0.0294 \text{ (to 3 s.f.)}$ W1

(iii) It is not suitable because the probability of severe cross winds is not constant throughout the whole year (it is much likelier in winter than summer). MW1

### Question 2$X \sim B(8, 0.2)$ M1(i) $P(X=0) = \binom{8}{0}(0.2)^0(0.8)^8$ MW1$P(X=0) = 0.1677... = 0.168 \text{ (to 3 s.f.)}$ W1

(ii) "At most one quarter of those inspected". The sample is 8. A quarter of 8 is 2. Therefore we need $P(X \leq 2)$. M1$P(X \leq 2) = P(X=0) + P(X=1) + P(X=2)$$P(X=1) = \binom{8}{1}(0.2)^1(0.8)^7 = 0.3355...$$P(X=2) = \binom{8}{2}(0.2)^2(0.8)^6 = 0.2936...$ MW2$P(X \leq 2) = 0.1677... + 0.3355... + 0.2936... = 0.7969...$$P(X \leq 2) = 0.797 \text{ (to 3 s.f.)}$ W1

### Question 3(i) We must assume that the branches perform independently of one another. M1

(ii) Let $X$ be the number of branches increasing profit. $X \sim B(4, 0.38)$.$P(X=4) = \binom{4}{4}(0.38)^4(0.62)^0$ M1$P(X=4) = 0.02085... = 0.0209 \text{ (to 3 s.f.)}$ W1

(iii) "Fewer than two" means $X < 2$, which is exactly $X=0$ or $X=1$.$P(X < 2) = P(X=0) + P(X=1)$$P(X=0) = (0.62)^4 = 0.1477...$$P(X=1) = \binom{4}{1}(0.38)^1(0.62)^3 = 0.3622...$ MW2$P(X < 2) = 0.1477... + 0.3622... = 0.5100... = 0.510 \text{ (to 3 s.f.)}$ W1

## 17. Final Answers

Q1: (i) $0.751$, (ii) $0.0294$, (iii) Probability is not constant throughout the year.

Q2: (i) $0.168$, (ii) $0.797$.

Q3: (i) Branches are independent. (ii) $0.0209$, (iii) $0.510$.

## 18. Quick Recall Checklist

Can I list the 4 conditions required for a binomial distribution?

Do I define the random variable contextually ($X \sim B(n, p)$) before answering?

Do I remember to include the binomial coefficient $\binom{n}{x}$?

Can I confidently convert English phrases like "at least 3" into strict inequalities $1 - P(X \leq 2)$?

Do I show my written substitution before checking the answer with my calculator's CD/PD function?

## 19. End-of-Lesson SummaryThe Binomial Distribution provides a massive algebraic shortcut for complex probability tree diagrams. As long as the four strict conditions (fixed $n$, two outcomes, constant $p$, independence) are met, the formula $\binom{n}{x}p^x(1-p)^{n-x}$ instantly gives the exact probability of $x$ successes. Mastery of this topic relies almost entirely on your ability to correctly translate English phrases ("fewer than", "at most") into precise discrete mathematical inequalities before applying the formula or checking with your calculator.

## 20. Source Gaps or Caution Notes

> **Caution - Mean and Variance Exclusions: While reviewing past paper materials (e.g., S1 Jan 2014 Q4), you may see questions asking to "Calculate the mean and standard deviation/variance of the number of...". The V1 Exam Support rules explicitly state that calculating $EX = np$ and $\text{Var}X = npq$ for the Binomial distribution is not needed until Further Maths (A2). These have been strictly excluded from the active teaching methods in this lesson.**

> **Caution - Excluded Content (Hypothesis Testing): The AS2 specification requires exact and cumulative probabilities using the binomial distribution. It strictly excludes carrying out binomial hypothesis tests (using critical regions, significance levels, or p-values). Do not apply these extension topics to AS2 binomial calculations.**
