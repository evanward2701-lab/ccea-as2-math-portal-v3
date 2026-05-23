import fs from 'node:fs';
import path from 'node:path';

const SOURCE_DIR = '/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-M2-Kinematics';
const OUTPUT_FILE = path.join(
  SOURCE_DIR,
  'AS2_kinematics_motion_graphs_uniform_acceleration_combined.md'
);

const SOURCE_FILES = {
  questions: 'AS2_kinematics_motion_graphs_uniform_acceleration_questions.md',
  solutions: 'AS2_kinematics_motion_graphs_uniform_acceleration_solutions.md',
  mermaid: 'AS2_kinematics_motion_graphs_uniform_acceleration_mermaid.md',
  svg: 'AS2_kinematics_motion_graphs_uniform_acceleration_svg.md',
  tikz: 'AS2_kinematics_motion_graphs_uniform_acceleration_tikz.md',
  widgets: 'AS2_kinematics_motion_graphs_uniform_acceleration_widgets.md',
} as const;

const REQUIRED_VISUALS_BY_QUESTION: Record<number, string> = {
  3: 'AS2KinematicsMotionGraphsUniformAccelerationQ003TikZ-001',
  5: 'AS2KinematicsMotionGraphsUniformAccelerationQ005SVG-001',
  7: 'AS2KinematicsMotionGraphsUniformAccelerationQ007TikZ-001',
  14: 'AS2KinematicsMotionGraphsUniformAccelerationQ014SVG-001',
  16: 'AS2KinematicsMotionGraphsUniformAccelerationQ016SVG-001',
};

const APPENDIX_WIDGET_ID = 'AS2KinematicsMotionGraphsUniformAccelerationSupportWidget-001';

type VisualLanguage = 'svg' | 'latex' | 'mermaid' | 'html';

interface NumberedSection {
  number: number;
  title: string;
  questionId: string;
  body: string;
}

interface VisualBlock {
  id: string;
  title: string;
  sourceFile: string;
  language: VisualLanguage;
  code: string;
  purpose: string;
}

interface VisualReference {
  id: string;
  placeholder: string;
  resolved: boolean;
  sourceFile?: string;
}

function readSourceFile(fileName: string): string {
  const filePath = path.join(SOURCE_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing source file: ${filePath}`);
  }

  return fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
}

function cleanSectionBody(body: string): string {
  return body.trim().replace(/\n---\s*$/u, '').trim();
}

function extractQuestionId(body: string, context: string): string {
  const match = body.match(/\*\*Question ID:\*\*\s*(AS2[A-Za-z0-9_-]+)/u);
  if (!match) {
    throw new Error(`Could not find Question ID in ${context}`);
  }

  return match[1];
}

function parseQuestionSections(content: string): NumberedSection[] {
  const sections: NumberedSection[] = [];
  const regex =
    /^## Question\s+(\d+):\s*(.*?)\n([\s\S]*?)(?=^## Question\s+\d+:|^## Optional Interactive Checking Tool|(?![\s\S]))/gmu;

  for (const match of content.matchAll(regex)) {
    const number = Number.parseInt(match[1], 10);
    const title = match[2].trim();
    const body = cleanSectionBody(match[3]);

    sections.push({
      number,
      title,
      questionId: extractQuestionId(body, `Question ${number}`),
      body,
    });
  }

  return sections.sort((a, b) => a.number - b.number);
}

function parseSolutionSections(content: string): NumberedSection[] {
  const sections: NumberedSection[] = [];
  const regex =
    /^## Solution to Question\s+(\d+):\s*(.*?)\n([\s\S]*?)(?=^## Solution to Question\s+\d+:|^## Unmatched Mark Scheme Entries|(?![\s\S]))/gmu;

  for (const match of content.matchAll(regex)) {
    const number = Number.parseInt(match[1], 10);
    const title = match[2].trim();
    const body = cleanSectionBody(match[3]);

    sections.push({
      number,
      title,
      questionId: extractQuestionId(body, `Solution ${number}`),
      body,
    });
  }

  return sections.sort((a, b) => a.number - b.number);
}

function extractPurpose(text: string, fallback: string): string {
  const match = text.match(/\bPurpose:\s*([^\]\n|]+)/iu);
  return (match?.[1] ?? fallback).trim();
}

function parseVisualFile(fileName: string, fallbackLanguage: VisualLanguage): VisualBlock[] {
  const content = readSourceFile(fileName);
  const sections: VisualBlock[] = [];
  const regex = /^##\s+([A-Za-z0-9_-]+):\s*(.*?)\n([\s\S]*?)(?=^##\s+[A-Za-z0-9_-]+:|(?![\s\S]))/gmu;

  for (const match of content.matchAll(regex)) {
    const id = match[1].trim();
    const title = match[2].trim();
    const body = match[3];
    const fencedBlock = body.match(/```([A-Za-z0-9_-]+)?\s*\n([\s\S]*?)```/u);

    if (!fencedBlock) {
      continue;
    }

    const language = ((fencedBlock[1] || fallbackLanguage).toLowerCase() as VisualLanguage);
    sections.push({
      id,
      title,
      sourceFile: fileName,
      language,
      code: fencedBlock[2].trim(),
      purpose: extractPurpose(body, title),
    });
  }

  return sections;
}

function buildVisualRegistry(): Map<string, VisualBlock> {
  const registry = new Map<string, VisualBlock>();
  const visualSources: Array<[string, VisualLanguage]> = [
    [SOURCE_FILES.svg, 'svg'],
    [SOURCE_FILES.tikz, 'latex'],
    [SOURCE_FILES.mermaid, 'mermaid'],
    [SOURCE_FILES.widgets, 'html'],
  ];

  for (const [fileName, language] of visualSources) {
    for (const visual of parseVisualFile(fileName, language)) {
      registry.set(visual.id, visual);
    }
  }

  return registry;
}

function renderVisualBlock(visual: VisualBlock): string {
  return [
    `> Visual: ${visual.id}  `,
    `> Source: ${visual.sourceFile}  `,
    `> Purpose: ${visual.purpose}`,
    '',
    `\`\`\`${visual.language}`,
    visual.code,
    '```',
  ].join('\n');
}

function unresolvedVisualBlock(placeholder: string): string {
  return `${placeholder}\n\n> Diagram source not found in supplied visual markdown files.`;
}

const visualReferenceRegex =
  /\[(VISUAL|INTERACTIVE)\s+(PLACEHOLDER|REFERENCE):\s*([^|\]\n]+)([^\]]*)\]/giu;

function replaceQuestionVisuals(
  body: string,
  visualRegistry: Map<string, VisualBlock>
): { body: string; references: VisualReference[] } {
  const references: VisualReference[] = [];

  const replaced = body.replace(visualReferenceRegex, (placeholder: string, _kind, _referenceType, rawId) => {
    const id = rawId.trim();
    const visual = visualRegistry.get(id);
    references.push({
      id,
      placeholder,
      resolved: Boolean(visual),
      sourceFile: visual?.sourceFile,
    });

    return visual ? renderVisualBlock(visual) : unresolvedVisualBlock(placeholder);
  });

  return { body: replaced, references };
}

function replaceSolutionVisuals(
  body: string,
  visualRegistry: Map<string, VisualBlock>,
  questionVisualIds: Set<string>
): {
  body: string;
  references: VisualReference[];
  solutionVisuals: VisualBlock[];
} {
  const references: VisualReference[] = [];
  const solutionVisuals = new Map<string, VisualBlock>();

  const replaced = body.replace(visualReferenceRegex, (placeholder: string, _kind, _referenceType, rawId) => {
    const id = rawId.trim();
    const visual = visualRegistry.get(id);
    references.push({
      id,
      placeholder,
      resolved: Boolean(visual),
      sourceFile: visual?.sourceFile,
    });

    if (!visual) {
      return unresolvedVisualBlock(placeholder);
    }

    if (questionVisualIds.has(id)) {
      return `> Uses the diagram shown above: ${id}`;
    }

    solutionVisuals.set(id, visual);
    return `> See solution visual below: ${id}`;
  });

  return {
    body: replaced,
    references,
    solutionVisuals: [...solutionVisuals.values()],
  };
}

function renderDiagramSummary(references: VisualReference[]): string {
  if (references.length === 0) {
    return '_No question-specific diagram placeholders._';
  }

  return [
    '> Question visual source blocks are inserted inline above at their original placeholder positions.',
    '',
    ...references.map((reference) => {
      const status = reference.resolved ? `resolved from ${reference.sourceFile}` : 'unresolved';
      return `- ${reference.id} (${status})`;
    }),
  ].join('\n');
}

function renderSolutionVisuals(solutionVisuals: VisualBlock[]): string {
  if (solutionVisuals.length === 0) {
    return '_No additional solution-specific diagrams._';
  }

  return solutionVisuals.map(renderVisualBlock).join('\n\n');
}

function buildCombinedMarkdown(): void {
  const questionSections = parseQuestionSections(readSourceFile(SOURCE_FILES.questions));
  const solutionSections = parseSolutionSections(readSourceFile(SOURCE_FILES.solutions));
  const visualRegistry = buildVisualRegistry();
  const solutionsByNumber = new Map(solutionSections.map((section) => [section.number, section]));

  const unresolvedReferences: VisualReference[] = [];
  const resolvedReferences: VisualReference[] = [];
  const validationErrors: string[] = [];
  const chunks: string[] = [
    '# AS2 Kinematics: Motion Graphs and Uniform Acceleration Combined Study Pack',
    '',
    `Generated from the M2 source markdown files in \`${SOURCE_DIR}\`.`,
    '',
    'This file is ordered question-by-question. Each question is followed immediately by its matching worked solution, with source diagrams embedded as fenced markdown code blocks.',
    '',
    '---',
  ];

  if (questionSections.length !== 17) {
    validationErrors.push(`Expected 17 questions but found ${questionSections.length}.`);
  }

  if (solutionSections.length !== 17) {
    validationErrors.push(`Expected 17 solutions but found ${solutionSections.length}.`);
  }

  for (const question of questionSections) {
    const solution = solutionsByNumber.get(question.number);

    if (!solution) {
      validationErrors.push(`Question ${question.number} has no matching solution section.`);
      continue;
    }

    if (question.questionId !== solution.questionId) {
      validationErrors.push(
        `Question ${question.number} ID mismatch: ${question.questionId} vs ${solution.questionId}.`
      );
    }

    const questionVisualResult = replaceQuestionVisuals(question.body, visualRegistry);
    const questionVisualIds = new Set(questionVisualResult.references.map((reference) => reference.id));
    const solutionVisualResult = replaceSolutionVisuals(
      solution.body,
      visualRegistry,
      questionVisualIds
    );

    for (const reference of [...questionVisualResult.references, ...solutionVisualResult.references]) {
      if (reference.resolved) {
        resolvedReferences.push(reference);
      } else {
        unresolvedReferences.push(reference);
      }
    }

    chunks.push(
      `# Question ${question.number}: ${question.title}`,
      '',
      '## Question',
      '',
      questionVisualResult.body,
      '',
      '## Diagram / Visuals',
      '',
      renderDiagramSummary(questionVisualResult.references),
      '',
      '## Solution',
      '',
      solutionVisualResult.body,
      '',
      '## Solution Visuals',
      '',
      renderSolutionVisuals(solutionVisualResult.solutionVisuals),
      '',
      '---'
    );
  }

  const appendixWidget = visualRegistry.get(APPENDIX_WIDGET_ID);
  chunks.push(
    '# Appendix: Interactive Checking Tool',
    '',
    appendixWidget
      ? renderVisualBlock(appendixWidget)
      : `> Diagram source not found in supplied visual markdown files: ${APPENDIX_WIDGET_ID}`,
    ''
  );

  const output = `${chunks.join('\n').replace(/\n{3,}/gu, '\n\n').trim()}\n`;

  for (const [questionNumber, requiredVisualId] of Object.entries(REQUIRED_VISUALS_BY_QUESTION)) {
    const questionHeading = `# Question ${questionNumber}:`;
    const sectionStart = output.indexOf(questionHeading);
    const nextSectionStart = output.indexOf('\n# Question ', sectionStart + questionHeading.length);
    const section = output.slice(sectionStart, nextSectionStart === -1 ? output.length : nextSectionStart);

    if (!section.includes(requiredVisualId)) {
      validationErrors.push(`Question ${questionNumber} does not include ${requiredVisualId}.`);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, output);

  const report = {
    questionsFound: questionSections.length,
    solutionsFound: solutionSections.length,
    diagramsFound: visualRegistry.size,
    placeholdersResolved: resolvedReferences.length,
    unresolvedPlaceholders: unresolvedReferences.map((reference) => ({
      id: reference.id,
      placeholder: reference.placeholder,
    })),
    validationErrors,
    outputFile: OUTPUT_FILE,
  };

  console.log(JSON.stringify(report, null, 2));

  if (validationErrors.length > 0) {
    process.exitCode = 1;
  }
}

buildCombinedMarkdown();
