# Gemini Reference: CCEA AS2 Applied Mathematics Learning Outcomes

Use this file as a stable reference when asking Gemini Chat Assist in VS Code to expand or check the AS2 Mathematics portal.

Source basis:
- `Specification.pdf`
- `Elaboration Document.pdf`
- local evidence packs such as `M1 Mechanics.docx`
- current portal files in `src/data/lessons.ts` and `src/data/questions.ts`

Important instruction for Gemini:
Do not invent new specification content. Use these outcomes to decide what each lesson must teach, what practice questions should test, and what warnings or exclusions should be included.

## AS2 Applied Mathematics Structure

AS2 Applied Mathematics is split evenly:
- Section A: Mechanics, worth 50% of AS2.
- Section B: Statistics, worth 50% of AS2.

The AS2 exam is a 1 hour 15 minute written paper with 5-10 questions and 70 raw marks. Students answer all questions.

Portal module mapping:
- `M1`: Mechanics foundations, quantities, units, modelling assumptions.
- `M2`: Kinematics, graphs, SUVAT, gravity, vectors.
- `M3`: Forces, Newton's laws, equilibrium, friction, connected particles.
- `S1`: Sampling, population/sample, census, data types.
- `S2`: Data presentation, histograms, spread, outliers, PMCC, correlation.
- `S3`: Probability laws, Venn diagrams, two-way tables, tree diagrams.
- `S4`: Statistical distributions, especially binomial distribution.

## Global AS2 Outcomes

Every AS2 lesson should help students:
- translate a real situation into a mathematical model;
- identify and use modelling assumptions;
- interpret answers in context;
- use diagrams, tables, graphs, and notation accurately;
- show enough method to earn marks, not just calculator answers;
- use correct SI units and appropriate rounding;
- avoid excluded content unless clearly marked as extension or caution.

Calculator guidance:
- Calculators may be used for numerical checking and statistical/binomial functions.
- Students must still show mathematical setup and working.
- Calculators with computer algebra system functionality are not permitted in exams.

## M1: Quantities, Units, Modelling Foundations

Students should be able to:
- identify SI base quantities and units for length, time, and mass;
- use metres, seconds, and kilograms consistently before calculation;
- understand and use derived quantities and units for velocity, acceleration, force, and weight;
- distinguish mass from weight;
- calculate weight using `W = mg`;
- explain that force is measured in newtons and that `1 N = 1 kg m s^-2`;
- understand scalar and vector quantities;
- distinguish distance from displacement and speed from velocity;
- find the scalar magnitude of a 2D vector using Pythagoras;
- recognise modelling assumptions in mechanics questions;
- explain the effects of terms such as particle, smooth surface, rough surface, light string, inextensible string, smooth pulley, and rigid rod;
- connect M1 ideas to later mechanics topics through `F = ma`.

M1 lesson should include:
- learning outcomes;
- key vocabulary;
- prior knowledge: algebra, Pythagoras, simple vectors, basic force ideas;
- SI unit conversion method;
- vector magnitude method;
- modelling assumptions table or visual;
- worked examples for unit conversion/weight and vector magnitude;
- calculator validation note for squaring negative vector components;
- exam warnings on units, rounding, mass vs weight, and multiple responses;
- caution that variable acceleration using calculus is not part of AS2 foundations.

M1 practice should include:
- modelling assumptions question;
- velocity vs speed and vector magnitude question;
- tonne-to-kilogram conversion and weight question.

## M2: Kinematics, Graphs, SUVAT

Students should be able to:
- use the language of kinematics: position, displacement, distance, velocity, speed, and acceleration;
- interpret displacement-time graphs using gradient;
- interpret velocity-time graphs using gradient and area under the graph;
- use constant acceleration formulae for straight-line motion;
- choose a positive direction and apply signs consistently;
- solve vertical motion under gravity using `g = 9.8 m s^-2` unless stated otherwise;
- use constant acceleration formulae in two dimensions with vectors;
- apply SUVAT component-by-component in vector questions;
- find the magnitude of a final displacement or velocity vector when asked for distance or speed.

M2 lesson should include:
- graph interpretation method;
- SUVAT variable definitions;
- gravity sign convention warning;
- 2D vector SUVAT method;
- worked examples for velocity-time area, vertical motion, and 2D vectors;
- common traps: confusing distance/displacement, treating `s` as speed, squaring vectors directly, and giving speed at impact as zero.

M2 practice should include:
- constant acceleration distance/acceleration question;
- falling object under gravity question;
- vector displacement or velocity question.

## M3: Forces, Newton's Laws, Friction, Connected Particles

Students should be able to:
- understand and use Newton's first law and the concept of force;
- resolve forces in two dimensions;
- add forces to find a resultant force;
- use Newton's second law, including where forces are given as 2D vectors;
- use gravitational acceleration `g`, including different levels of accuracy when specified;
- solve weight and motion under gravity problems;
- understand and use Newton's third law;
- solve lift problems;
- solve connected particle problems using Newton's second and third laws;
- handle connected particles on horizontal surfaces, vertical arrangements, pulleys, and inclined planes;
- solve equilibrium problems for a particle;
- use the friction model `F <= mu R`;
- understand coefficient of friction;
- solve rough surface motion problems;
- solve limiting friction and statics problems.

M3 lesson should include:
- force diagrams;
- resolving forces horizontally, vertically, and on slopes;
- resultant force versus individual force;
- friction as inequality and limiting equality;
- lift method: whole system for cable tension, passenger-only system for normal reaction;
- connected particles method: whole system for acceleration, isolated particle for tension;
- pulley method: separate equations with equal tension and equal acceleration magnitude;
- worked examples for vector forces, rough table motion, lift dynamics, hill/incline tractive force, and connected particles.

M3 practice should include:
- inclined plane/hill tractive force;
- lift tension and reaction;
- two connected particles with friction;
- vector force resultant problem.

## S1: Sampling, Data Types, Inference

Students should be able to:
- define population and sample;
- understand and use the term census;
- use samples to make informal inferences about a population;
- understand qualitative, quantitative, discrete, and continuous data;
- use and describe simple random sampling;
- use and describe stratified sampling;
- calculate proportional stratified sample sizes;
- select or critique sampling methods in context;
- explain that different samples can lead to different conclusions;
- identify bias and limitations in a sampling process.

S1 lesson should include:
- data type classification flow;
- census versus sample comparison;
- sampling frame idea;
- simple random sampling steps;
- stratified sampling formula and worked example;
- critique examples for biased samples;
- common traps: confusing census/sample, missing sampling frame, rounding strata incorrectly, and ignoring representativeness.

S1 practice should include:
- census/sample definition question;
- biased sampling critique question;
- stratified sampling and data type question.

## S2: Data Presentation, Spread, Outliers, PMCC

Students should be able to:
- interpret diagrams for single-variable data;
- understand that histogram area represents frequency;
- connect histogram frequency density to probability;
- interpret measures of central tendency and variation;
- calculate variance and standard deviation for a population or a sample;
- use summary statistics to calculate variance and standard deviation;
- estimate a median from grouped frequency data;
- work with grouped data and class midpoints;
- choose `sigma_n` or `sigma_{n-1}` appropriately;
- interpret scatter diagrams and regression lines;
- recognise distinct sections or clusters in a scatter diagram;
- identify independent and dependent variables;
- interpret correlation informally using terms such as positive, negative, strong, and weak;
- calculate and interpret PMCC;
- understand that correlation does not imply causation;
- recognise and interpret outliers;
- use a given outlier rule, such as IQR boundaries or mean plus/minus two standard deviations;
- select or critique data presentation techniques;
- clean data by considering missing data, errors, and outliers.

S2 lesson should include:
- histogram frequency density method;
- grouped median interpolation method;
- variance and standard deviation formulae for population and sample;
- PMCC formula and interpretation;
- scatter diagram cluster warning;
- interpolation/extrapolation distinction;
- outlier rules and worked examples;
- data cleaning notes.

S2 practice should include:
- outlier/IQR question;
- PMCC calculation and interpretation question;
- histogram frequency/probability question;
- grouped median or standard deviation question.

## S3: Probability Laws, Venn Diagrams, Two-Way Tables, Trees

Students should be able to:
- use addition and multiplication laws of probability;
- understand and use set notation;
- understand mutually exclusive events;
- understand exhaustive events;
- understand statistical dependence and independence;
- test independence using probabilities;
- calculate combined probabilities for up to three events;
- use tree diagrams, Venn diagrams, and two-way tables.

Important AS2 exclusion:
- Formal conditional probability formula methods are not required.
- If conditional notation or Bayes-style language appears, mark it as extension or remove it from AS2 core material.

S3 lesson should include:
- addition law;
- multiplication law for independent events;
- mutually exclusive versus overlapping Venn diagrams;
- exhaustive event condition;
- complement rule;
- two-way table method;
- tree diagram branch multiplication;
- clear warning that formal conditional probability/Bayes methods are beyond AS2 core.

S3 practice should include:
- mutually exclusive versus independent algebra question;
- two-way table probability question;
- biased die or probability-sum algebra question;
- tree diagram combined probability question if kept within AS2 expectations.

## S4: Statistical Distributions, Binomial Distribution

Students should be able to:
- understand the binomial distribution as a discrete probability distribution;
- identify the four binomial conditions: fixed number of trials, two outcomes, constant probability, independent trials;
- use notation such as `X ~ Bin(n, p)` or `X ~ B(n, p)`;
- calculate exact binomial probabilities;
- calculate cumulative binomial probabilities;
- link binomial probabilities to tree diagrams and the binomial expansion;
- use calculator or formula booklet functions for binomial cumulative distribution when appropriate;
- translate wording such as "at most", "fewer than", "at least", and "more than" into correct inequalities.

S4 lesson should include:
- binomial model suitability checklist;
- exact probability formula;
- tree diagram/binomial coefficient explanation;
- inequality translation table;
- worked examples for exact and cumulative probabilities;
- calculator protocol: define the variable and show setup before calculator answer;
- common traps: forgetting coefficient, mixing strict/inclusive inequalities, unjustified model, naked calculator answers.

S4 practice should include:
- exact and cumulative binomial question;
- model suitability/constant probability question;
- independence assumption question;
- strict inequality translation question.

## How Gemini Should Use This Reference

When adding or improving a lesson:
- start from the relevant module outcomes above;
- check the evidence doc for the detailed classroom wording;
- preserve the portal's existing dark revision style;
- keep visuals close to the theory they support;
- include concise exam warnings as blockquotes;
- avoid making the lesson a wall of text by using headings, bullets, worked examples, and practice prompts;
- do not add A2-only content to AS2 core lessons.

When adding practice questions:
- give every question a unique ID;
- match the module code exactly (`M1`, `M2`, `M3`, `S1`, `S2`, `S3`, `S4`);
- include topic, type, marks, question markdown, and mark scheme markdown;
- make mark schemes explicit enough to show method, working, and accuracy marks;
- avoid duplicate questions unless intentionally labelled as variants.

When checking coverage:
- compare the portal lesson, portal questions, evidence doc, and this reference;
- report covered, missing, thin, and potentially excluded content;
- flag any mismatch between AS2 core requirements and extension material.
