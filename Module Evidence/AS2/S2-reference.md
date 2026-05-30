# S2 Statistics Evidence Reference

Source document: `S2 Statistics.docx`

Use this as module-specific evidence when expanding or checking the portal lesson and practice-bank content.

## 1. Lesson Title

S2: Data Presentation and Interpretation

## 2. Source Groups Used

S2: Data Presentation and Interpretation

V1: Exam Materials

V2: Rules

Deep Research Report: Gap Fill

CCEA AS2 Mathematics Exam Requirements and Methods

## 3. Specification Focus

Interpret diagrams for single-variable data, including understanding that area in a histogram represents frequency.

Interpret measures of central tendency and variation, including calculating standard deviation and variance of a population or sample.

Clean data, including dealing with missing data, errors, and recognising/interpreting outliers.

Interpret scatter diagrams and regression lines for bivariate data, including recognition of distinct sections of the population.

Calculate and interpret the product-moment correlation coefficient (PMCC).

Demonstrate understanding that correlation does not imply causation.

## 4. Learning Outcomes

By the end of this lesson, you should be able to:

Estimate the median from grouped data using linear interpolation.

Calculate variance and standard deviation from raw or summary data, distinguishing between sample ($\sigma_{n-1}$) and population ($\sigma_n$) notation.

Draw and interpret histograms with unequal class widths by using frequency density.

Identify outliers using specified rules (e.g., $1.5 \times \text{IQR}$).

Calculate the PMCC ($r$) and interpret its value in context.

Interpret scatter diagrams containing distinct subgroups (clusters) and explain why overall regression lines might be misleading.

## 5. Key Vocabulary

Frequency Density: Frequency divided by class width, used for the vertical axis of a histogram.

Variance: The average squared spread of data from the mean.

Standard Deviation: The square root of the variance, giving a measure of spread in original units.

Interpolation: Estimating a value within a grouped frequency class by assuming data is evenly distributed.

Bivariate Data: Paired data involving two variables for each observation.

PMCC ($r$): Product-moment correlation coefficient, a numerical measure ($-1 \leq r \leq 1$) of the strength and direction of linear correlation.

Outlier: A value that does not fit the overall pattern of the data.

Distinct Sections: Meaningful subgroups or clusters within a population shown on a scatter diagram.

## 6. Prior Knowledge

Calculating the mean of ungrouped and grouped data.

Finding the median position and interquartile range (IQR).

Plotting basic scatter graphs and identifying positive or negative correlation.

Basic algebraic substitution and handling square roots.

## 7. Full Theory Explanation

Histograms and Frequency DensityUnlike an ordinary bar chart where height represents frequency, in a histogram, area represents frequency. This is essential when dealing with continuous grouped data that have unequal class widths.$$\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$$The probability of a randomly selected item falling into a specific class can be estimated using the relative area: $\frac{\text{Area of relevant bars}}{\text{Total area}}$.

Measures of Spread: Variance and Standard DeviationWhile the mean and median measure central location, variance and standard deviation measure spread.

Population: When calculating the spread of an entire population, we use divisor $n$. The notation is $\sigma_n$.

Sample: When estimating the spread of a wider population from a sample, we use divisor $n-1$. The notation is $\sigma_{n-1}$. This produces a slightly larger value to account for sample variability.

Extended Gap Fill Theory on Dispersion:The assessment of variability is a foundational component of the AS2 Statistics module, moving beyond the simple range and interquartile range. In the GCE context, candidates must quantify the spread of data relative to the arithmetic mean. Variance is defined as the arithmetic mean of the squared deviations of each data point from the mean of the dataset. The process of squaring the deviations is not arbitrary; it serves to eliminate the sign of the difference (as the sum of raw deviations would always equal zero) and to disproportionately weight larger outliers, thereby providing a more sensitive measure of spread than absolute deviation. The standard deviation is the positive square root of the variance, a transformation that returns the measure of dispersion to the original units of the data.

CCEA Rule: Population ($\sigma_n$) vs. Sample ($\sigma_{n-1}$) Standard DeviationThe AS 2 Exam Support document strictly requires candidates to distinguish between calculating the spread of a population and estimating from a sample:

$\sigma_n$ (Population Standard Deviation): Uses a divisor of exactly $n$. You must use this when the data provided represents the entire target population (a census), or when a question simply asks you to "find the standard deviation of these numbers" without asking you to infer anything about a wider group.

$\sigma_{n-1}$ (Sample Standard Deviation Estimate): Uses a divisor of $n-1$. You must use this when the data is explicitly defined as a sample drawn from a larger population, and you are using that sample to estimate the variance or standard deviation of the whole population. The $(n-1)$ divisor (Bessel's Correction) artificially inflates the result slightly to account for unseen extremes in the wider population, compensating for the loss of a degree of freedom.

Note on Coding Data: If a dataset is transformed by coding, you must understand the effect on measures of central tendency and variation. If each value in a dataset is doubled, both the mean and the standard deviation are doubled. However, if each value is increased by 3 (addition), the mean increases by 3, but the standard deviation remains exactly the same because the spread of the data has not changed.

Linear Interpolation for Continuous Grouped DataWhen data is presented in a grouped frequency table, individual data points are obscured by the class intervals. While the "modal class" and "median class" can be identified directly, determining a specific estimate for the median or quartiles requires linear interpolation. Linear interpolation is a statistical technique used to estimate values located within a class interval by assuming that the observations within that class are distributed uniformly. Geometrically, this assumes that the cumulative frequency curve (ogive) consists of straight lines between the plotted upper class boundaries.

Outliers and Data CleaningAnomalies or outliers are extreme values that don't fit the pattern. They could be recording errors (which should be cleaned/removed) or genuine extreme observations. Exams will specify the outlier rule, commonly a value more than $1.5 \times \text{IQR}$ above the upper quartile ($Q_3$) or below the lower quartile ($Q_1$).

Bivariate Data, Scatter Diagrams, and Distinct SectionsWhen plotting two variables against each other, the resulting scatter diagram might show linear correlation. However, data sometimes splits into distinct sections or clusters (e.g., male/female, older/newer machines). If a scatter diagram contains distinct sections, drawing a single overall regression line can be highly misleading because it masks the true relationship within each subgroup.

Product-Moment Correlation Coefficient (PMCC)The PMCC, denoted by $r$, measures the strength and direction of linear correlation.

$r = 1$ is perfect positive linear correlation.

$r = -1$ is perfect negative linear correlation.

$r = 0$ means no linear correlation.Crucially, correlation does not imply causation. A strong relationship between two variables does not prove that one causes the other; there may be a lurking third variable.

## 8. Formulae and Notation

Frequency from a Histogram: $\text{Frequency} = \text{Frequency Density} \times \text{Class Width}$

Mean from Summary Stats: $\bar{x} = \frac{\sum x}{n}$ or $\frac{\sum fx}{\sum f}$

Population Standard Deviation: $\sigma_n = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$

Sample Standard Deviation: $\sigma_{n-1} = \sqrt{\frac{\sum x^2 - \frac{(\sum x)^2}{n}}{n-1}}$

Variance (Computational Formula): $\text{Variance} = \frac{\sum x^2}{n} - \bar{x}^2$ (or $\frac{\sum fx^2}{\sum f} - \bar{x}^2$ for frequency tables)

PMCC ($r$): $r = \frac{n\sum xy - \sum x \sum y}{\sqrt{\left(n\sum x^{2} - (\sum x)^{2}\right)\left(n\sum y^{2} - (\sum y)^{2}\right)}}$

## 9. Step-by-Step Methods

### Method: Interpolating the Median from Grouped Data

Find the total frequency $\sum f$.

Calculate the median position: $\frac{\sum f}{2}$ (for continuous grouped data).

Identify the median class interval using cumulative frequencies.

Calculate the fraction into the class: $\frac{\text{positions needed into class}}{\text{frequency of class}}$.

Multiply this fraction by the class width, and add it to the lower boundary of the median class.

Expanded Step-by-Step Method: Estimating the Median (Linear Interpolation)

Find the total frequency ($n$ or $\sum f$).

Locate the Median Position: For continuous data, calculate exactly $\frac{n}{2}$.

Identify the Median Class: Keep a running cumulative frequency (CF) to find which class interval contains the target median position.

Calculate the fraction into the class:$$\text{Fraction} = \frac{\text{Target Position} - \text{CF before class}}{\text{Frequency of the median class}}$$

Calculate the Estimate: Multiply this fraction by the class width, and add it to the true lower boundary of the median class.

### Method: Calculating Variance and Standard Deviation

Determine the Mean ($\bar{x}$): Sum all the data values ($\sum x$) and divide by the total number of values ($n$). If using a frequency table, calculate $\frac{\sum fx}{\sum f}$.

Calculate the Sum of Squares ($\sum x^2$): Square each individual data value before adding them together. For frequency tables, this is $\sum fx^2$.

Apply the Variance Formula: Subtract the square of the mean from the mean of the squares: $\text{Variance} = \frac{\sum x^2}{n} - \bar{x}^2$.

Extract the Standard Deviation: Take the square root of your variance result.

### Method: Calculating the PMCC

Read the summary statistics provided: $n, \sum x, \sum y, \sum x^2, \sum y^2, \sum xy$.

Substitute these exactly into the PMCC formula.

Calculate the numerator and denominator brackets carefully to avoid BODMAS errors.

Interpret the result strictly between $-1$ and $1$, describing the strength, direction, and context.

## 10. Worked Examples with Full Written Working

Example 1: Mean and Standard Deviation Targeted PracticeA sample of 12 delivery times, in minutes, has summary statistics: $n = 12$, $\sum x = 180$, $\sum x^2 = 2850$. Find the sample standard deviation using divisor $(n-1)$.

Step 1: Write the formula for sample variance.$\sigma_{n-1}^{2} = \frac{\sum x^{2} - \frac{(\sum x)^{2}}{n}}{n-1}$

Step 2: Substitute the summary values.$\sigma_{n-1}^{2} = \frac{2850 - \frac{180^{2}}{12}}{11}$

Step 3: Calculate the variance.$\sigma_{n-1}^{2} = \frac{2850 - 2700}{11} = \frac{150}{11} = 13.636...$

Step 4: Square root for standard deviation.$\sigma_{n-1} = \sqrt{13.636...} = 3.69 \text{ minutes}$ (to 3 s.f.)

Example 2: Distinct Sections in a Scatter Diagram Exam-StyleA researcher records weekly screen time ($x$) and weekly exercise time ($y$) for 40 students. The scatter diagram shows two distinct clusters: students who play for a sports team, and students who do not. Overall, the data appears to show moderate negative correlation, but within the non-sports-team group, there is no correlation. Explain why the overall correlation may be misleading.

Step 1: Identify the subgroups. The population splits into two distinct sections: sports team and non-sports team.

Step 2: Compare overall to subgroup. The overall negative correlation is driven by the gap between the two distinct clusters, rather than a genuine trend that applies to all students.

Step 3: Conclude. A single overall regression line or correlation is misleading as it hides the true behavior within the separate groups.

### Example 3: Worked Example Targeted Practice (Estimating the Median)The times taken, $t$ minutes, for 20 students to complete a task are recorded in the table below. Estimate the median time using linear interpolation.

Time $t$ (mins),Frequency ($f$),Cumulative Frequency

$0 \leq t < 10$,5,5

$10 \leq t < 20$,12,17

$20 \leq t < 30$,3,20

Step 1 & 2: Target Position. $n = 20$. Median position = $\frac{20}{2} = 10$. M1

Step 3: Identify Class. The 10th position falls in the $10 \leq t < 20$ class.

Step 4: Fraction into class. Positions needed into class = $10 - 5 = 5$. The frequency of this median class is $12$. Fraction = $\frac{5}{12}$. W1

Step 5: Estimate. Lower boundary = $10$. Class width = $10$.$\text{Median} = 10 + \left(\frac{5}{12}\right) \times 10$ M1$\text{Median} = 10 + 4.166... = 14.2 \text{ minutes}$ (to 3 s.f.) A1

## 11. Diagrams, Tables, or Graph Descriptions Where Useful

Diagram 1: Histogram Area/Density

Where it belongs in the lesson: In the "Histograms and Frequency Density" theory section.

What it should show: A histogram with three bars of unequal widths. For example, widths of 10, 10, and 20.

Required labels: Vertical axis labelled "Frequency Density". Horizontal axis labelled "Time". Inside one wide bar, a shaded rectangle labelled "Area = Frequency".

Arrows/axes: Horizontal axis with continuous scale.

Caption: "In a histogram, the area of the bar represents the frequency. Do not read the height as the frequency."

Misconception it helps prevent: Stops students treating the frequency density axis directly as the frequency count when classes are uneven.

Diagram 2: PMCC Formula Panel

Where it belongs in the lesson: Under "Formulae and Notation".

What it should show: A clear, large presentation of the PMCC formula separated from text.

Required labels: $r$, $n$, $\sum x$, $\sum y$, $\sum x^2$, $\sum y^2$, $\sum xy$. Add a warning box: "$-1 \leq r \leq 1$".

Arrows/axes: N/A.

Caption: "The PMCC formula combines summary statistics to measure linear correlation. Always verify your result falls between -1 and 1."

Misconception it helps prevent: Helps students organize the complex substitution without BODMAS errors and prevents them from accepting impossible values like $r = 1.2$.

Diagram 3: Scatter Diagram with Distinct Clusters

Where it belongs in the lesson: In the "Bivariate Data, Scatter Diagrams, and Distinct Sections" theory section.

What it should show: A scatter graph showing two clearly separated clouds of points.

Required labels: Axes $x$ and $y$. One cluster circled and labelled "Group A", another circled and labelled "Group B". A dashed overall line passing through the empty space between them with a warning symbol.

Arrows/axes: Standard $x$ and $y$ axes.

Caption: "An overall regression line can be highly misleading if the population contains distinct sections or subgroups."

Misconception it helps prevent: Stops students blindly trusting a single correlation value or single line of best fit when population structure exists.

Diagram 4: Suggested Diagram: "Which Standard Deviation?" Decision Tree

Where it belongs: Beside the CCEA Rule explanation for standard deviation.

What it should show: A flowchart starting with the question: "Is the data the whole population or a sample used to estimate a population?"

Branches:

Branch 1: "Whole Population / Standalone Data" $\rightarrow$ Points to a box labelled $\sigma_n$ (Divisor $n$).

Branch 2: "Sample estimating a Population" $\rightarrow$ Points to a box labelled $\sigma_{n-1}$ (Divisor $n-1$).

Caption: "Always check the wording of the question before choosing your standard deviation formula."

Diagram 5: Suggested Diagram: Linear Interpolation Double Number Line

Where it belongs: Directly under the Linear Interpolation worked example.

What it should show: Two parallel horizontal lines representing the median class.

Top Line (Cumulative Frequency): Marked with $5$ on the left end, $10$ in the middle, and $17$ on the right end.

Bottom Line (Class Boundaries): Marked with $10$ on the left end, $Q_2$ in the middle, and $20$ on the right end.

Required labels: Draw a bracket showing the gap from $5 \rightarrow 10$ (size 5) over the total gap $5 \rightarrow 17$ (size 12).

Caption: "Interpolation maps the fraction of the frequency directly onto the fraction of the class width."

## 12. Common Traps

Histogram Probability Errors: When finding the probability from a histogram (as noted in V1 examiner reports), students often find the correct frequency for an interval but fail to divide by the total frequency to turn it into a probability.

Standard Deviation Notation: Confusing population SD ($\sigma_n$) and sample SD ($\sigma_{n-1}$). You must select the correct formula based on the wording of the question.

Correlation vs Causation: Stating that one variable causes another to change. You must only state there is an association or correlation.

Ignoring Distinct Sections: Calculating an overall PMCC and ignoring the visual evidence of clusters. A high PMCC across two distinct groups does not mean a linear model is appropriate.

## 13. Calculator Validation

V1 Exam Support strictly notes: when using your calculator's Stats mode to find the mean, standard deviation, or PMCC, you must still write down the intermediate summary statistics ($n, \sum x, \sum x^2, \sum y, \sum y^2, \sum xy$). You can use the 1-VAR or 2-VAR functions to instantly validate your final answer, but simply writing "$r = 0.85$" with no working will result in lost method marks.

> **⚠️ EXAM WARNING: CALCULATOR SUMMARY STATISTICSCCEA strictly requires candidates to show the development of their answers to secure Method M1 and Working W1 marks. While you are fully expected to use your calculator's 1-VAR statistics function to compute the mean and standard deviation, you must not write down just the final answer.According to the AS 2 Exam Support guidelines, if a question provides raw data or a frequency table, you MUST explicitly write down the following intermediate summary statistics from your calculator screen before stating your final answer:**

$n$ (or $\sum f$)

$\sum fx$ (or $\sum x$)

$\sum fx^2$ (or $\sum x^2$)Providing a "naked" final answer directly from your calculator runs a massive risk: if you made a minor typo when entering the data, you will score zero marks for the entire question because the examiner cannot see your method.

## 14. Exam Technique

Context is King: Examiner reports explicitly state that when explaining outliers, bias, or correlation, the marks are withheld if you provide a generic textbook answer. You must mention the specific variables (e.g., "towns further from a railway station", not just "the x variable").

Outlier Rules: Read the prompt carefully. The exam will define an outlier (e.g., more than $1.5 \times (Q_3 - Q_1)$ above $Q_3$). You must use their exact rule, show the substitution, and state clearly whether a target value exceeds this boundary.

> **⚠️ EXAM WARNING: THE "MULTIPLE RESPONSES" RULEIf you are unsure of how to tackle a problem and you provide two different methods or answers on your page in the hope that the examiner will select the correct one, you will be heavily penalised.Official CCEA examiner guidance dictates that if a candidate provides multiple responses clearly trying to cover all options without crossing one out, the examiner will mark all attempts and award the marks for the POOREST solution.If you restart a question or change your mind about a mathematical model, you must decisively cross out the incorrect attempt with a single diagonal line so that only your intended, final solution remains active.**

## 15. Exam-Style Questions

Question 1 Exam-StyleThe weekly incomes, rounded to the nearest pound, of a random sample of 10 households are:221, 248, 251, 255, 259, 263, 264, 272, 291, 374.(a) Show that £374 is an outlier, given that outliers are defined as being more than $1.5 \times (Q_3 - Q_1)$ above $Q_3$.(b) Further investigations suggest the weekly income of £374 was recorded incorrectly and should have been £347. State what effect, if any, this change would have on the interquartile range.

Question 2 Exam-StyleThomas is investigating the correlation between height ($x$ cm) and weight ($y$ kg) of 10 students.Summary values are: $n = 10, \sum x = 1717, \sum y = 755, \sum x^2 = 295511, \sum y^2 = 58655, \sum xy = 130384$.(a) Calculate the product-moment correlation coefficient for this data.(b) Interpret your value in context.

Question 3 Exam-StyleA histogram illustrates the masses of 40 objects. The first group is $1.5 \leq \text{Mass} < 5.5$ and has a frequency density of 1.5.(a) Show that the frequency of this first group is 6.(b) A second group is $5.5 \leq \text{Mass} < 9.5$ and has a frequency density of 2.25. Find the probability that a randomly chosen object from the 40 has a mass between 5.5 and 9.5 kg.

## 16. Full Worked Solutions

Question 1(a) $n = 10$. Data is ordered.Median is between 5th and 6th: $\frac{259+263}{2} = 261$.$Q_1$ is the 3rd value: $251$. M1$Q_3$ is the 8th value: $272$. M1$\text{IQR} = 272 - 251 = 21$.Outlier boundary $= Q_3 + 1.5 \times \text{IQR} = 272 + 1.5(21) = 272 + 31.5 = 303.5$. MW1$374 > 303.5$, therefore £374 is an outlier. W1(b) No effect. A1 (Changing the extreme maximum value does not shift the positions of the quartiles).

Question 2(a) $r = \frac{n\sum xy - \sum x \sum y}{\sqrt{\left(n\sum x^{2} - (\sum x)^{2}\right)\left(n\sum y^{2} - (\sum y)^{2}\right)}}$ M1$r = \frac{10(130384) - (1717)(755)}{\sqrt{\left10(295511) - (1717)^2\right \left10(58655) - (755)^2\right}}$ W1$r = \frac{1303840 - 1296335}{\sqrt{\left2955110 - 2948089\right \left586550 - 570025\right}}$$r = \frac{7505}{\sqrt{(7021)(16525)}}$ MW1$r = 0.6967... = 0.697$ (to 3 s.f.) A1(b) There is a moderate positive linear correlation between height and weight. Taller students generally tend to weigh more. W1

Question 3(a) $\text{Class width} = 5.5 - 1.5 = 4$. M1$\text{Frequency} = \text{Freq Density} \times \text{Class width} = 1.5 \times 4 = 6$. W1(b) $\text{Class width} = 9.5 - 5.5 = 4$.$\text{Frequency} = 2.25 \times 4 = 9$. MW1$\text{Probability} = \frac{9}{40}$. A1

## 17. Final Answers

Q1: (a) Boundary is 303.5, so 374 is an outlier. (b) No effect.

Q2: (a) $r = 0.697$. (b) Moderate positive correlation; taller students tend to weigh more.

Q3: (a) Shown. (b) $\frac{9}{40}$ or $0.225$.

## 18. Quick Recall Checklist

Can I remember that area represents frequency in a histogram?

Do I check whether the question asks for sample ($\sigma_{n-1}$) or population ($\sigma_n$) standard deviation?

Do I show my summary statistics before using the calculator's PMCC feature?

Have I checked my scatter diagrams for distinct clusters/subgroups?

Do I state context variables when interpreting correlation?

## 19. End-of-Lesson Summary

Data Presentation and Interpretation bridges visual graphs with deep numerical analysis. You must be comfortable moving between raw lists, grouped tables, and histograms (where area equals frequency). When exploring relationships (PMCC, regression), always look at the scatter diagram to spot distinct subgroups or outliers that might make a single regression line dangerously misleading. Finally, let the calculator validate your working, but always display the required summary statistics to secure method marks.

## 20. Source Gaps or Caution Notes

> **Caution - Excluded Content (Hypothesis Testing): The AS2 specification requires calculating and interpreting the PMCC ($r$). It strictly excludes carrying out hypothesis tests for the correlation coefficient (using tables of critical values for $r$, p-values, and significance levels). Avoid these extension topics entirely at AS2.**

> **Caution - Excluded Content (Normal Distribution): Do not attempt to fit a continuous Normal curve over the histograms in this module. Normal distribution theory is strictly an A2 topic and is excluded from this unit. Keep all probability bridging strictly to relative area/frequency proportions.**
