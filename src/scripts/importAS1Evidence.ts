import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '../..');
const SOURCE_ROOT = path.join(REPO_ROOT, 'Module Evidence/AS1');
const SPEC_PATH = path.join(REPO_ROOT, 'Module Evidence/CCEA_GCE_Mathematics_Specification_Map.md');
const TARGET_ROOT = path.join(REPO_ROOT, 'src/modules/AS1');

type VisualKind = 'mermaid' | 'svg' | 'latex' | 'html' | 'pending';
type VisualRole = 'lesson' | 'practice';

interface ModuleConfig {
  key: string;
  folder: string;
  title: string;
  specTopic: string;
  overview: string;
  sourceFolders: SourceFolderConfig[];
}

interface SourceFolderConfig {
  folder: string;
  scope: string;
  role: VisualRole;
  kind: 'lesson' | 'questions';
  topic?: string;
}

interface VisualAsset {
  id: string;
  rawId: string;
  title: string;
  kind: VisualKind;
  moduleKey: string;
  role: VisualRole;
  componentName: string;
  sourceContent: string;
  sourceFile: string;
  questionId?: string;
}

interface PracticeQuestionOut {
  id: string;
  moduleId: string;
  topic: string;
  type: 'Exam-Style' | 'Targeted Practice' | 'Definition';
  questionMarkdown: string;
  markSchemeMarkdown: string;
  marks: number;
}

interface SpecOutcome {
  id: string;
  official: string;
  studentMeaning: string;
  guidance: string;
}

const MODULES: ModuleConfig[] = [
  {
    key: 'P1',
    folder: 'P1-Algebra & Functions',
    title: 'Algebra and Functions',
    specTopic: 'Algebra and functions',
    overview: 'AS1 algebraic foundations: indices, surds, quadratics, inequalities, polynomials, curve sketching and graph transformations.',
    sourceFolders: [
      { folder: '01. Indices & Surds', scope: 'AS1-Indices-Surds-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '02. Quadratics', scope: 'AS1-Quadratics-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '03 Transformations', scope: 'AS1-P1-Transformations-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '01. Indices & Surds-Questions', scope: 'AS1-Indices-Surds-Questions', role: 'practice', kind: 'questions', topic: 'Indices & Surds' },
      { folder: '02. Quadratics-Curve Sketching-Questions', scope: 'AS1-Curve-Sketching-Questions', role: 'practice', kind: 'questions', topic: 'Curve Sketching' },
      { folder: '02. Quadratics-Transformations-Questions', scope: 'AS1-Graph-Transformations-Questions', role: 'practice', kind: 'questions', topic: 'Graph Transformations' },
    ],
  },
  {
    key: 'P2',
    folder: 'P2-Co-ordinate geometry in the 𝒙, 𝒚 plane',
    title: 'Co-ordinate Geometry in the x, y Plane',
    specTopic: 'Co-ordinate geometry in the $x,y$ plane',
    overview: 'Straight lines, gradients, midpoints, distance, circles, tangents and geometric reasoning in the coordinate plane.',
    sourceFolders: [
      { folder: '04. Geometry-Questions', scope: 'AS1-Coordinate-Geometry-Questions', role: 'practice', kind: 'questions', topic: 'Coordinate Geometry and Circles' },
    ],
  },
  {
    key: 'P3',
    folder: 'P3-Sequences and series',
    title: 'Sequences and Series',
    specTopic: 'Sequences and series',
    overview: 'AS1 binomial expansion, factorial notation and combination notation for positive integer powers.',
    sourceFolders: [
      { folder: '05. Binomial Expansion', scope: 'AS1-Binomial-Expansion-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '05. Binomial Expansion-Questions', scope: 'AS1-Binomial-Expansion-Questions', role: 'practice', kind: 'questions', topic: 'Binomial Expansion' },
    ],
  },
  {
    key: 'P4',
    folder: 'P4-Trigonometry',
    title: 'Trigonometry',
    specTopic: 'Trigonometry',
    overview: 'Definitions, graphs, identities, equations, sine and cosine rules, triangle area and transformed trigonometric graphs.',
    sourceFolders: [
      { folder: '04. Geometry & Trigonometry', scope: 'AS1-Trigonometry-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '03 Transformations', scope: 'AS1-Trig-Transformations-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '04. Trigonometry-Questions', scope: 'AS1-Trigonometry-Questions', role: 'practice', kind: 'questions', topic: 'Trigonometry' },
    ],
  },
  {
    key: 'P5',
    folder: 'P5-Exponentials and logarithms',
    title: 'Exponentials and Logarithms',
    specTopic: 'Exponentials and logarithms',
    overview: 'Exponential and logarithmic functions, graph behaviour, log laws, equations, inequalities and growth or decay modelling.',
    sourceFolders: [
      { folder: '07. Expoentials & Logarithms', scope: 'AS1-Exponentials-Logarithms-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '07. Expoentials & Logarithms-Questions', scope: 'AS1-Exponentials-Logarithms-Questions', role: 'practice', kind: 'questions', topic: 'Exponentials & Logarithms' },
    ],
  },
  {
    key: 'P6',
    folder: 'P6-Differentiation',
    title: 'Differentiation',
    specTopic: 'Differentiation',
    overview: 'Derivative notation, first principles, power rule, tangents, normals, stationary points, increasing/decreasing functions and optimisation.',
    sourceFolders: [
      { folder: '08. Differentiation', scope: 'AS1-Differentiation-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '08. Differentiation-Questions', scope: 'AS1-Differentiation-Questions', role: 'practice', kind: 'questions', topic: 'Differentiation' },
    ],
  },
  {
    key: 'P7',
    folder: 'P7-Integration',
    title: 'Integration',
    specTopic: 'Integration',
    overview: 'Indefinite integration as reverse differentiation, power-rule integration, definite integrals and area under a curve.',
    sourceFolders: [
      { folder: '09. Integration', scope: 'AS1-Integration-Lesson', role: 'lesson', kind: 'lesson' },
      { folder: '09. Integration-Questions', scope: 'AS1-Integration-Questions', role: 'practice', kind: 'questions', topic: 'Integration' },
    ],
  },
  {
    key: 'P8',
    folder: 'P8-Vectors',
    title: 'Vectors',
    specTopic: 'Vectors',
    overview: 'Two-dimensional vectors, i and j notation, magnitude, direction, vector addition, scalar multiples, position vectors and distance.',
    sourceFolders: [
      { folder: '06. Vectors', scope: 'AS1-Vectors-Lesson', role: 'lesson', kind: 'lesson', topic: 'Vectors' },
    ],
  },
];

const P1_LESSON_SOURCE_FOLDERS = [
  '01. Indices & Surds',
  '02. Quadratics',
  '03 Transformations',
];

const P1_SECTION_META: Record<string, { title: string; focus: string; outcomes: string[] }> = {
  '01. Indices & Surds': {
    title: 'Indices, Rational Exponents, Surds and Rationalising Denominators',
    focus: 'Use the exact algebra toolkit: index laws, rational exponents, simplest surd form, surd operations and rationalising denominators.',
    outcomes: ['AS1-AF-LO001', 'AS1-AF-LO002'],
  },
  '02. Quadratics': {
    title: 'Quadratic Functions, Equations, Inequalities, Polynomials and Curve Sketching',
    focus: 'Develop the main algebra-and-graph techniques: quadratic structure, solving methods, discriminants, simultaneous equations, inequalities, polynomial manipulation and graph interpretation.',
    outcomes: [
      'AS1-AF-LO003',
      'AS1-AF-LO004',
      'AS1-AF-LO005',
      'AS1-AF-LO006',
      'AS1-AF-LO007',
      'AS1-AF-LO008',
      'AS1-AF-LO009',
      'AS1-AF-LO010',
      'AS1-AF-LO011',
      'AS1-AF-LO012',
      'AS1-AF-LO013',
      'AS1-AF-LO014',
      'AS1-AF-LO015',
    ],
  },
  '03 Transformations': {
    title: 'Graph Transformations',
    focus: 'Connect function notation to sketching associated graphs, including vertical stretches/shifts, horizontal stretches/shifts and reflections.',
    outcomes: ['AS1-AF-LO016'],
  },
};

const report = {
  sourceFolders: 0,
  lessonSourcesImported: 0,
  questionPacksImported: 0,
  totalQuestionsImported: 0,
  vectorLessonQuestionsImported: 0,
  visualsExtracted: 0,
  pendingVisualsCreated: 0,
  duplicateQuestionIds: [] as string[],
  missingSolutionIds: [] as string[],
  unresolvedVisualPlaceholders: [] as string[],
};

const allVisuals: VisualAsset[] = [];
const visualById = new Map<string, VisualAsset>();
const sourceVisualMaps = new Map<string, Map<string, string>>();
const allQuestions: PracticeQuestionOut[] = [];
const questionIds = new Map<string, number>();

function readText(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8');
}

function writeText(filePath: string, content: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function normalizeDashes(value: string): string {
  return value
    .replace(/[‐‑‒–—−]/g, '-')
    .replace(/\u00a0/g, ' ')
    .trim();
}

function normalizeLookupId(value: string): string {
  return normalizeDashes(value).replace(/\s+/g, '').toUpperCase();
}

function visualIdPart(value: string): string {
  return normalizeDashes(value)
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'Visual';
}

function makeVisualId(scope: string, rawId: string): string {
  return `${scope}-${visualIdPart(rawId)}`;
}

function componentNameFromId(id: string): string {
  const cleaned = id.replace(/[^A-Za-z0-9]/g, '');
  const safe = /^\d/.test(cleaned) ? `V${cleaned}` : cleaned;
  return safe.slice(0, 120);
}

function titleCaseFromPath(folder: string): string {
  return folder.replace(/^\d+\.?\s*/, '').replace(/-Questions$/, '').trim();
}

function cleanMarkdownMetadata(section: string): string {
  return section
    .replace(/^\*\*Question ID:\*\*.*$/gm, '')
    .replace(/^\*\*Source:\*\*.*$/gm, '')
    .replace(/^\*\*Original reference:\*\*.*$/gm, '')
    .replace(/^\*\*Related question:\*\*.*$/gm, '')
    .replace(/^\*\*Marks:\*\*.*$/gm, '')
    .replace(/^\*\*Marks available:\*\*.*$/gm, '')
    .replace(/^\*\*Subtopic:\*\*.*$/gm, '')
    .replace(/^\*\*Match confidence:\*\*.*$/gm, '')
    .replace(/^\*\*Source lesson PDF:\*\*.*$/gm, '')
    .trim();
}

function demoteHeadings(markdown: string): string {
  return markdown
    .replace(/^#####\s+/gm, '###### ')
    .replace(/^####\s+/gm, '##### ')
    .replace(/^###\s+/gm, '#### ')
    .replace(/^##\s+/gm, '### ')
    .replace(/^#\s+/gm, '## ');
}

function findMarkdownFiles(folderPath: string, suffix: string): string[] {
  if (!fs.existsSync(folderPath)) return [];
  return fs.readdirSync(folderPath)
    .filter((file) => file.endsWith(suffix))
    .map((file) => path.join(folderPath, file));
}

function detectKind(filePath: string, lang: string): VisualKind {
  const lowerLang = lang.toLowerCase();
  const lowerFile = path.basename(filePath).toLowerCase();
  if (lowerLang === 'mermaid' || lowerFile.includes('mermaid')) return 'mermaid';
  if (lowerLang === 'svg' || lowerFile.includes('svg')) return 'svg';
  if (lowerLang === 'html' || lowerFile.includes('widgets')) return 'html';
  if (lowerLang === 'latex' || lowerLang === 'tex' || lowerFile.includes('tikz')) return 'latex';
  return 'pending';
}

function addVisual(asset: VisualAsset): void {
  if (visualById.has(asset.id)) return;
  visualById.set(asset.id, asset);
  allVisuals.push(asset);
  report.visualsExtracted += asset.kind === 'pending' ? 0 : 1;
}

function ensurePendingVisual(source: SourceFolderConfig, moduleKey: string, rawId: string): string {
  const id = makeVisualId(source.scope, rawId);
  if (!visualById.has(id)) {
    addVisual({
      id,
      rawId,
      title: `${rawId} (pending source asset)`,
      kind: 'pending',
      moduleKey,
      role: source.role,
      componentName: componentNameFromId(id),
      sourceContent: `No renderable source block was found for ${rawId} in ${source.folder}.`,
      sourceFile: source.folder,
    });
    report.pendingVisualsCreated++;
  }
  return id;
}

function parseVisualFile(filePath: string, source: SourceFolderConfig, moduleKey: string): void {
  const text = readText(filePath);
  const headings = [...text.matchAll(/^##\s+(.+?)\s*$/gm)];
  const sourceMap = sourceVisualMaps.get(source.scope) ?? new Map<string, string>();
  sourceVisualMaps.set(source.scope, sourceMap);

  headings.forEach((heading, index) => {
    const headingText = heading[1].trim();
    const start = (heading.index ?? 0) + heading[0].length;
    const end = headings[index + 1]?.index ?? text.length;
    const section = text.slice(start, end);
    const codeMatch = section.match(/```([A-Za-z0-9_-]+)\s*\n([\s\S]*?)```/);
    if (!codeMatch) return;

    const rawId = normalizeDashes(headingText.split(':')[0].trim());
    const title = headingText.includes(':')
      ? headingText.slice(headingText.indexOf(':') + 1).trim()
      : rawId;
    const kind = detectKind(filePath, codeMatch[1]);
    const id = makeVisualId(source.scope, rawId);
    const componentName = componentNameFromId(id);

    sourceMap.set(normalizeLookupId(rawId), id);
    addVisual({
      id,
      rawId,
      title: title || rawId,
      kind,
      moduleKey,
      role: source.role,
      componentName,
      sourceContent: codeMatch[2].trim(),
      sourceFile: path.relative(REPO_ROOT, filePath),
    });
  });
}

function extractVisualsForSource(source: SourceFolderConfig, moduleKey: string): void {
  const folderPath = path.join(SOURCE_ROOT, source.folder);
  ['_mermaid.md', '_svg.md', '_tikz.md', '_widgets.md'].forEach((suffix) => {
    findMarkdownFiles(folderPath, suffix).forEach((file) => parseVisualFile(file, source, moduleKey));
  });
}

function replaceVisualPlaceholders(markdown: string, source: SourceFolderConfig, moduleKey: string): string {
  const sourceMap = sourceVisualMaps.get(source.scope) ?? new Map<string, string>();
  return markdown.replace(
    /\[(VISUAL|INTERACTIVE) (?:PLACEHOLDER|REFERENCE):\s*([^\]|]+)(?:\|[^\]]*)?\]/gi,
    (_match, type, rawId) => {
      const normalized = normalizeLookupId(rawId);
      const scopedId = sourceMap.get(normalized) ?? ensurePendingVisual(source, moduleKey, rawId.trim());
      return `[${String(type).toUpperCase()} REFERENCE: ${scopedId}]`;
    }
  );
}

function extractSpecSection(specText: string, topic: string): string {
  const escapedTopic = topic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^## Topic: ${escapedTopic}\\s*$`, 'm');
  const match = specText.match(regex);
  if (!match || match.index === undefined) return '';
  const start = match.index;
  const rest = specText.slice(start);
  const next = rest.slice(match[0].length).search(/^## Topic: /m);
  return next === -1 ? rest : rest.slice(0, match[0].length + next);
}

function parseSpecOutcomes(specSection: string): SpecOutcome[] {
  const rows = specSection.split('\n').filter((line) => /^\|\s*AS1-/.test(line));
  return rows.map((row) => {
    const cells = row.split('|').map((cell) => cell.trim());
    return {
      id: cells[1] ?? '',
      official: cells[2] ?? '',
      guidance: cells[3] ?? '',
      studentMeaning: cells[4] ?? cells[2] ?? '',
    };
  }).filter((outcome) => outcome.id);
}

function parseTopicSummary(specSection: string): string {
  const match = specSection.match(/### Topic Summary\s*\n([\s\S]*?)(?=\n### )/);
  return match ? match[1].trim() : '';
}

function formatSpecBlock(module: ModuleConfig, outcomes: SpecOutcome[], summary: string): string {
  const outcomeList = outcomes.map((outcome) => `* **${outcome.id}:** ${outcome.official}`).join('\n');
  const studentList = outcomes.map((outcome) => `* ${outcome.studentMeaning || outcome.official}`).join('\n');
  return `## 1. Lesson Title
**${module.key}: ${module.title}**

## 2. Specification Focus
${summary || module.overview}

${outcomeList}

## 3. Learning Outcomes
By the end of this module, you should be able to:
${studentList}

## 4. Imported Evidence Sources
${module.sourceFolders.map((source) => `* \`${source.folder}\``).join('\n')}

## 5. Full Lesson Evidence
The sections below preserve the supplied AS1 evidence packs and organise them under the CCEA AS1 specification topic **${module.specTopic}**.
`;
}

function countMarkdownTableLines(markdown: string): number {
  return (markdown.match(/^\|.*\|$/gm) ?? []).length;
}

function removeNumberedSection(markdown: string, heading: string): string {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `^#{2,6}\\s+\\d+\\.?\\s*${escapedHeading}[\\s\\S]*?(?=^#{2,6}\\s+\\d+\\.?\\s|(?![\\s\\S]))`,
    'gim'
  );
  return markdown.replace(pattern, '');
}

function normalizeLessonMarkdownForPortal(markdown: string): string {
  const withoutSourceAppendices = removeNumberedSection(markdown, 'Supplementary Sources Used');

  return withoutSourceAppendices
    .replace(/^.*\*\*Unit:\*\*.*\*\*Source:\*\*.*\*\*Date generated:\*\*.*(?:\n|$)/gm, '')
    .replace(/^\*\*Unit:\*\*.*(?:\n|$)/gm, '')
    .replace(/^\*\*Source:\*\*.*(?:\n|$)/gm, '')
    .replace(/^\*\*Date generated:\*\*.*(?:\n|$)/gm, '')
    .replace(/^\*\*specification:\*\*.*\.pdf.*(?:\n|$)/gim, '')
    .replace(/【[^】]+】/g, '')
    .replace(/\|\s*Placeholder\s*\|\s*Source\s*\|/gi, '| Placeholder | Role |')
    .replace(/\|\s*Asset\s*\|\s*Source\s*\|/gi, '| Asset | Role |')
    .replace(/\|\s*Asset ID\s*\|\s*Source\s*\|/gi, '| Asset ID | Role |')
    .replace(/\|\s*Visual\s*\|\s*Source\s*\|/gi, '| Visual | Role |')
    .replace(/\|\s*Widget\s*\|\s*Source\s*\|/gi, '| Widget | Role |')
    .replace(/\|\s*Source\s*\|/gi, '| Role |')
    .replace(/\bAI[\u2010-\u2015-]proposed teaching enhancement,?\s*not present in lesson\b/gi, 'Portal visual support')
    .replace(/\bAI[\u2010-\u2015-]proposed teaching enhancement\b/gi, 'Portal visual support')
    .replace(/\bAI[\u2010-\u2015-]proposed\b/gi, 'Portal visual')
    .replace(/\bThis lesson pack builds a complete,\s*beginner[\u2010-\u2015-]friendly introduction to ([^.]+)\.\s+The notes, diagrams and interactive tools are designed for self[\u2010-\u2015-]study\.\s+They follow the CCEA specification and elaboration document for Unit\s+AS1 and extract ideas from the source lesson PDF\.\s*/gi, 'This section gives a complete, self-study introduction to $1. ')
    .replace(/\bWherever the PDF omits material required by the specification \(([^)]*)\), this pack supplements the content to ensure full coverage\./gi, 'Where additional specification detail is needed ($1), this portal includes the required techniques to ensure full coverage.')
    .replace(/\bThe table below summarises how this lesson meets the specification and where to find each element\.\s*Specification statements come from the CCEA GCE Mathematics specification and elaboration document\./gi, 'The table below shows the main specification coverage for this section.')
    .replace(/\bThe lesson PDF contains several diagrams and tables that have been rebuilt or summarised here\.\s*Placeholders indicate where to insert diagrams stored in the separate diagram files\./gi, 'This section includes embedded visual supports for the key diagrams, tables and summaries.')
    .replace(/\bThe lesson contains several diagrams and tables that have been rebuilt or summarised here\.\s*Placeholders indicate where to insert diagrams stored in the separate diagram files\./gi, 'This section includes embedded visual supports for the key diagrams, tables and summaries.')
    .replace(/\bThe notes include placeholders for diagrams and flowcharts\.\s*Each placeholder refers to a separate file containing the code for that visual\.\s*Use the corresponding diagram file when studying or printing\./gi, 'This section includes the key diagrams and flowcharts directly in the portal.')
    .replace(/\bInteractive widgets allow you to experiment with the abstract rules in a hands[\u2010-\u2015-]on way\.\s*Code for each widget is stored separately; follow the .How to Run. instructions in the widgets file\./gi, 'Interactive widgets let you experiment with the abstract rules directly in the portal.')
    .replace(/\bA Mermaid version is stored separately\.\s*Insert it here:/gi, 'Use the portal version here:')
    .replace(/\bInsert it here for quick reference:/gi, 'Use it here for quick reference:')
    .replace(/\bInsert it here:/gi, 'Use it here:')
    .replace(/\bThe lesson PDF lists\b/gi, 'This section uses')
    .replace(/\buploaded PDF\b/gi, 'lesson material')
    .replace(/\bfrom the PDF(?:'s|’s)?\b/gi, 'from this topic')
    .replace(/\bthe PDF(?:'s|’s)?\b/gi, 'this topic')
    .replace(/\bfound in PDF\b/gi, 'found')
    .replace(/\bsource lesson PDF\b/gi, 'specification')
    .replace(/\blesson PDF\b/gi, 'lesson')
    .replace(/\bPDF\b/g, 'lesson')
    .replace(/\bthe source lesson\b/gi, 'the lesson')
    .replace(/\bthis pack\b/gi, 'this section')
    .replace(/\bthis topic does not\b/g, 'This topic does not')
    .replace(/\bwhich This topic\b/g, 'which this topic')
    .replace(/\blesson pack\b/gi, 'lesson section')
    .replace(/\bRecommended Enhancements Not in the PDF\b/gi, 'Recommended Enhancements')
    .replace(/\bRecommended Enhancements Not in this topic\b/gi, 'Recommended Visual Supports')
    .replace(/\bAn Portal visual\b/g, 'A portal visual')
    .replace(/\ban Portal visual\b/g, 'a portal visual')
    .replace(/\bBecause the PDF does not explicitly state\b/gi, 'For a fuller toolkit, this section also states')
    .replace(/Copy the code from the widgets file into a `\.html` file and open it in a browser\./gi, 'Use the embedded portal widgets below.')
    .replace(/Copy the code below into a file named[^.]*\./gi, 'Use the embedded portal widget below.')
    .replace(/Copy the following code into a file named[^.]*\./gi, 'Use the embedded portal widget below.')
    .replace(/Save the code below to a file named[^.]*\./gi, 'Use the embedded portal widget below.');
}

function collectLessonPlaceholderMappings(markdown: string, source: SourceFolderConfig, moduleKey: string) {
  const sourceMap = sourceVisualMaps.get(source.scope) ?? new Map<string, string>();
  return [...markdown.matchAll(/\[(VISUAL|INTERACTIVE) PLACEHOLDER:\s*([^\]|]+)(?:\|[^\]]*)?\]/gi)].map((match) => {
    const rawId = normalizeDashes(match[2].trim());
    const visualId = sourceMap.get(normalizeLookupId(rawId)) ?? ensurePendingVisual(source, moduleKey, rawId);
    const visual = visualById.get(visualId);
    return {
      sourceFolder: source.folder,
      rawId,
      visualId,
      componentName: visual?.componentName ?? null,
      title: visual?.title ?? null,
      kind: visual?.kind ?? null,
    };
  });
}

function formatP1OutcomeMap(outcomes: SpecOutcome[]): string {
  const byId = new Map(outcomes.map((outcome) => [outcome.id, outcome]));
  const rowMap: Record<string, string> = {
    'AS1-AF-LO001': 'Indices',
    'AS1-AF-LO002': 'Surds',
    'AS1-AF-LO003': 'Quadratic functions',
    'AS1-AF-LO004': 'Discriminant',
    'AS1-AF-LO005': 'Completing the square',
    'AS1-AF-LO006': 'Quadratic equations',
    'AS1-AF-LO007': 'Simultaneous equations',
    'AS1-AF-LO008': 'Three-variable systems',
    'AS1-AF-LO009': 'Inequalities',
    'AS1-AF-LO010': 'Polynomials',
    'AS1-AF-LO011': 'Remainder and factor theorems',
    'AS1-AF-LO012': 'Curve sketching',
    'AS1-AF-LO013': 'Reciprocal graphs',
    'AS1-AF-LO014': 'Graphical interpretation',
    'AS1-AF-LO015': 'Graph intersections',
    'AS1-AF-LO016': 'Graph transformations',
  };

  const rows = Object.entries(rowMap).map(([id, strand]) => {
    const outcome = byId.get(id);
    return `| ${strand} | ${outcome?.studentMeaning || outcome?.official || ''} |`;
  });

  return `| Algebra & Functions | Learning Outcome |
|---|---|
${rows.join('\n')}`;
}

function formatP1VisualIndex(visuals: VisualAsset[]): string {
  if (visuals.length === 0) return '_No lesson visuals were extracted for P1._';
  const rows = visuals
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((asset) => `| \`${asset.id}\` | ${asset.title} | ${asset.kind} |`);

  return `| Visual ID | Title | Type |
|---|---|---|
${rows.join('\n')}`;
}

function buildOptimizedP1LessonContent(module: ModuleConfig, specText: string): { content: string; outcomes: SpecOutcome[] } {
  const specSection = extractSpecSection(specText, module.specTopic);
  const outcomes = parseSpecOutcomes(specSection);
  const summary = parseTopicSummary(specSection);
  const lessonSources = module.sourceFolders.filter(
    (source) => source.kind === 'lesson' && P1_LESSON_SOURCE_FOLDERS.includes(source.folder)
  );
  const sourceFileToSubsection: Record<string, string> = {};
  const placeholderMappings: ReturnType<typeof collectLessonPlaceholderMappings> = [];
  const importedLessonFiles: string[] = [];
  let markdownTableLinesPreserved = 0;

  const parts: string[] = [
    `## 1. Specification Focus
${summary || module.overview}

## 2. Learning Outcome Map
${formatP1OutcomeMap(outcomes)}

## 3. Guided Study Route
1. Secure exact algebra with indices, rational exponents and surds.
2. Use quadratics as both algebraic objects and graph objects.
3. Extend solving into simultaneous equations, inequalities, polynomials and factor/remainder theorem work.
4. Interpret equations through graph intersections, curve sketching and reciprocal/simple graph behaviour.
5. Apply graph transformations to associated graphs using function notation.
`,
  ];

  lessonSources.forEach((source, index) => {
    const folderPath = path.join(SOURCE_ROOT, source.folder);
    if (!fs.existsSync(folderPath)) return;
    const meta = P1_SECTION_META[source.folder];
    const lessonFiles = findMarkdownFiles(folderPath, '_lesson.md');

    lessonFiles.forEach((file) => {
      const raw = readText(file);
      const relativeFile = path.relative(SOURCE_ROOT, file);
      const normalized = replaceVisualPlaceholders(normalizeLessonMarkdownForPortal(raw), source, module.key);
      const sectionNumber = index + 4;

      importedLessonFiles.push(relativeFile);
      sourceFileToSubsection[relativeFile] = meta.title;
      markdownTableLinesPreserved += countMarkdownTableLines(raw);
      placeholderMappings.push(...collectLessonPlaceholderMappings(raw, source, module.key));

      parts.push(`
## ${sectionNumber}. ${meta.title}
**Specification strand:** Algebra and Functions

${meta.focus}

${demoteHeadings(normalized)}
`);
      report.lessonSourcesImported++;
    });
  });

  const lessonVisuals = allVisuals.filter((asset) => asset.moduleKey === module.key && asset.role === 'lesson');
  parts.push(`
## 7. P1 Visual and Interactive Tool Index
${formatP1VisualIndex(lessonVisuals)}

## 8. Final P1 Checklist
* I can apply index laws to integer, negative and rational exponents.
* I can simplify surds, combine like surds and rationalise denominators.
* I can solve and interpret quadratic equations using factorising, completing the square, the formula and the discriminant.
* I can solve linear/quadratic simultaneous equations, inequalities and polynomial factor/remainder theorem problems.
* I can sketch and interpret simple curves, reciprocal graphs, intersections and transformed graphs.
* I can choose the right algebraic or graphical method and explain the result using exact notation.
`);

  const content = parts.join('\n');
  const unresolvedPlaceholders = [...content.matchAll(/\[(?:VISUAL|INTERACTIVE) PLACEHOLDER:\s*([^\]]+)\]/gi)]
    .map((match) => match[1].trim());
  const unresolvedReferences = [...content.matchAll(/\[(?:VISUAL|INTERACTIVE) REFERENCE:\s*([^\]]+)\]/gi)]
    .map((match) => match[1].trim())
    .filter((id) => !visualById.has(id));
  const runtimeEvidencePathReferences = [...content.matchAll(/Module Evidence\/[^\s)`]+/g)].map((match) => match[0]);
  const practiceEvidenceSectionsPresent = content.includes('Practice Evidence Source');

  const audit = {
    module: module.key,
    generatedAt: new Date().toISOString(),
    lessonSourcesImported: importedLessonFiles.length,
    sourceLessonFolders: lessonSources.map((source) => source.folder),
    importedLessonFiles,
    sourceFileToSubsection,
    lessonVisualWidgetBlocksImported: lessonVisuals.length,
    markdownTableLinesPreserved,
    placeholderMappings,
    unresolvedPlaceholders,
    unresolvedReferences,
    practiceEvidenceSectionsPresent,
    runtimeEvidencePathReferences,
    runtimeSelfContained: unresolvedPlaceholders.length === 0
      && unresolvedReferences.length === 0
      && !practiceEvidenceSectionsPresent
      && runtimeEvidencePathReferences.length === 0,
  };

  writeText(
    path.join(TARGET_ROOT, module.folder, 'data/p1_lesson_extraction_audit.json'),
    JSON.stringify(audit, null, 2)
  );

  if (unresolvedPlaceholders.length > 0 || unresolvedReferences.length > 0 || practiceEvidenceSectionsPresent || runtimeEvidencePathReferences.length > 0) {
    throw new Error(`P1 lesson extraction audit failed: ${JSON.stringify({
      unresolvedPlaceholders,
      unresolvedReferences,
      practiceEvidenceSectionsPresent,
      runtimeEvidencePathReferences,
    })}`);
  }

  return { content, outcomes };
}

function extractQuestionPackIntro(content: string): string {
  const marker = content.search(/^##\s+4\.\s+Questions/m);
  if (marker === -1) return '';
  return content.slice(0, marker).trim();
}

function buildLessonContent(module: ModuleConfig, specText: string): { content: string; outcomes: SpecOutcome[] } {
  if (module.key === 'P1') {
    return buildOptimizedP1LessonContent(module, specText);
  }

  const specSection = extractSpecSection(specText, module.specTopic);
  const outcomes = parseSpecOutcomes(specSection);
  const summary = parseTopicSummary(specSection);
  const parts: string[] = [formatSpecBlock(module, outcomes, summary)];

  module.sourceFolders.forEach((source) => {
    const folderPath = path.join(SOURCE_ROOT, source.folder);
    if (!fs.existsSync(folderPath)) return;

    if (source.kind === 'lesson') {
      const lessonFiles = findMarkdownFiles(folderPath, '_lesson.md');
      lessonFiles.forEach((file) => {
        const raw = replaceVisualPlaceholders(readText(file), source, module.key);
        parts.push(`\n## Evidence Source: ${titleCaseFromPath(source.folder)}\n\n${demoteHeadings(raw)}\n`);
        report.lessonSourcesImported++;
      });
    } else {
      const questionFiles = findMarkdownFiles(folderPath, '_questions.md');
      questionFiles.forEach((file) => {
        const intro = extractQuestionPackIntro(readText(file));
        if (intro) {
          const normalized = replaceVisualPlaceholders(intro, source, module.key);
          parts.push(`\n## Practice Evidence Source: ${titleCaseFromPath(source.folder)}\n\n${demoteHeadings(normalized)}\n`);
        }
      });
    }
  });

  if (module.key === 'P2' && parts.length === 1) {
    parts.push('\n## Evidence Source: Coordinate Geometry Question Pack\n\nThe supplied AS1 evidence contains coordinate geometry as a question and solution pack. The full practice pack is imported into the AS1 practice bank, while this lesson is structured directly from the official specification map.\n');
  }

  return { content: parts.join('\n'), outcomes };
}

function splitSectionsByHeading(content: string, headingWord: string): string[] {
  const escapedHeadingWord = headingWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const headingRegex = new RegExp(`^#{2,3}\\s+${escapedHeadingWord}[\\s\\u00a0]+\\d+\\b.*$`, 'gmi');
  const matches = [...content.matchAll(headingRegex)];
  return matches.map((match, index) => {
    const start = match.index ?? 0;
    const end = matches[index + 1]?.index ?? content.length;
    return content.slice(start, end).trim();
  });
}

function parseQuestionSections(questionFile: string, source: SourceFolderConfig, moduleKey: string): Map<string, { markdown: string; marks: number }> {
  const content = readText(questionFile);
  const sections = splitSectionsByHeading(content, 'Question');
  const questionMap = new Map<string, { markdown: string; marks: number }>();

  sections.forEach((section) => {
    const idMatch = section.match(/\*\*Question ID:\*\*\s*`?([A-Za-z0-9_-]+)`?/);
    if (!idMatch) return;
    const marksMatch = section.match(/\*\*Marks:\*\*\s*(\d+)/);
    let markdown = cleanMarkdownMetadata(section)
      .replace(/^#{2,3}\s+Question[\s\u00a0]+\d+[^\n]*\n?/, '')
      .replace(/#{3,4}\s+Space for Working[\s\S]*$/i, '')
      .replace(/^####\s+/gm, '### ')
      .trim();
    if (!/^###\s+Question\b/i.test(markdown)) {
      markdown = `### Question\n\n${markdown}`;
    }
    markdown = replaceVisualPlaceholders(markdown, source, moduleKey);
    questionMap.set(idMatch[1], {
      markdown,
      marks: marksMatch ? Number(marksMatch[1]) : 0,
    });
  });

  return questionMap;
}

function parseSolutionSections(solutionFile: string, source: SourceFolderConfig, moduleKey: string): Map<string, string> {
  const content = readText(solutionFile);
  const sections = splitSectionsByHeading(content, 'Solution to Question');
  const solutionMap = new Map<string, string>();

  sections.forEach((section) => {
    const idMatch = section.match(/\*\*Question ID:\*\*\s*`?([A-Za-z0-9_-]+)`?/);
    if (!idMatch) return;
    let markdown = cleanMarkdownMetadata(section)
      .replace(/^#{2,3}\s+Solution to Question[\s\u00a0]+\d+[^\n]*\n?/, '')
      .replace(/^####\s+/gm, '### ')
      .trim();
    if (!/^###\s+(Official Mark Scheme Solution|Worked Solution)\b/i.test(markdown)) {
      markdown = `### Official Mark Scheme Solution\n\n${markdown}`;
    }
    markdown = replaceVisualPlaceholders(markdown, source, moduleKey);
    solutionMap.set(idMatch[1], markdown);
  });

  return solutionMap;
}

function addQuestion(question: PracticeQuestionOut): void {
  const seen = questionIds.get(question.id) ?? 0;
  questionIds.set(question.id, seen + 1);
  if (seen > 0) report.duplicateQuestionIds.push(question.id);
  allQuestions.push(question);
}

function importQuestionPack(source: SourceFolderConfig, moduleKey: string): void {
  const folderPath = path.join(SOURCE_ROOT, source.folder);
  const questionFile = findMarkdownFiles(folderPath, '_questions.md')[0];
  const solutionFile = findMarkdownFiles(folderPath, '_solutions.md')[0];
  if (!questionFile) return;

  const questionMap = parseQuestionSections(questionFile, source, moduleKey);
  const solutionMap = solutionFile ? parseSolutionSections(solutionFile, source, moduleKey) : new Map<string, string>();

  questionMap.forEach((question, id) => {
    const markSchemeMarkdown = solutionMap.get(id) ?? '_Solution content pending recovery._';
    if (!solutionMap.has(id)) report.missingSolutionIds.push(id);
    addQuestion({
      id,
      moduleId: moduleKey,
      topic: source.topic ?? titleCaseFromPath(source.folder),
      type: 'Exam-Style',
      marks: question.marks,
      questionMarkdown: question.markdown,
      markSchemeMarkdown,
    });
  });

  report.totalQuestionsImported += questionMap.size;
  report.questionPacksImported++;
}

function extractNumberedItems(section: string): string[] {
  const itemRegex = /^\s*(\d+)\.\s+([\s\S]*?)(?=^\s*\d+\.\s+|\s*$)/gm;
  return [...section.matchAll(itemRegex)].map((match) => match[2].trim()).filter(Boolean);
}

function importVectorLessonPractice(source: SourceFolderConfig): void {
  const file = path.join(SOURCE_ROOT, source.folder, 'AS1_vectors_lesson.md');
  if (!fs.existsSync(file)) return;
  const content = readText(file);
  const practiceMatch = content.match(/### 11\. Practice Questions\s*([\s\S]*?)(?=### 12\. Worked Solutions)/);
  const solutionMatch = content.match(/### 12\. Worked Solutions\s*([\s\S]*?)(?=### 13\.)/);
  if (!practiceMatch || !solutionMatch) return;

  const questions = extractNumberedItems(practiceMatch[1]);
  const solutions = extractNumberedItems(solutionMatch[1]);
  questions.forEach((questionText, index) => {
    const number = String(index + 1).padStart(3, '0');
    addQuestion({
      id: `AS1VectorsLessonQ${number}`,
      moduleId: 'P8',
      topic: 'Vectors',
      type: 'Targeted Practice',
      marks: 0,
      questionMarkdown: `### Question\n\n${questionText}`,
      markSchemeMarkdown: solutions[index]
        ? `### Worked Solution\n\n${solutions[index]}`
        : '_Solution content pending recovery._',
    });
    if (!solutions[index]) report.missingSolutionIds.push(`AS1VectorsLessonQ${number}`);
  });
  report.vectorLessonQuestionsImported += questions.length;
  report.totalQuestionsImported += questions.length;
}

function p1NativeHtmlWidgetTemplate(asset: VisualAsset): string | null {
  if (asset.moduleKey !== 'P1' || asset.kind !== 'html') return null;

  const title = JSON.stringify(asset.title || asset.id);

  if (asset.id === 'AS1-Indices-Surds-Lesson-WIDGET-001') {
    return `import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(5).replace(/\\.0+$/, '') : 'undefined';

export const ${asset.componentName}: React.FC = () => {
  const [base, setBase] = useState(2);
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(2);
  const safeDenominator = denominator === 0 ? 1 : denominator;
  const value = Math.pow(base, numerator / safeDenominator);
  const absNumerator = Math.abs(numerator);
  const rootForm = numerator >= 0
    ? safeDenominator + 'th root of ' + base + '^' + numerator
    : '1 / (' + safeDenominator + 'th root of ' + base + '^' + absNumerator + ')';
  const repeatedRootForm = numerator >= 0
    ? '(' + safeDenominator + 'th root of ' + base + ')^' + numerator
    : '1 / (' + safeDenominator + 'th root of ' + base + ')^' + absNumerator;

  return (
    <DiagramPanel title={${title}} analysis={<p>Explore rational exponents by changing the base and fractional power. Negative numerators show the reciprocal form.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Base a
            <input className="accent-zinc-200" type="range" min={1} max={10} step={1} value={base} onChange={(event) => setBase(Number(event.target.value))} />
            <span className="text-lg font-mono text-zinc-100">{base}</span>
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Numerator m
            <input className="accent-zinc-200" type="range" min={-5} max={5} step={1} value={numerator} onChange={(event) => setNumerator(Number(event.target.value))} />
            <span className="text-lg font-mono text-zinc-100">{numerator}</span>
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Denominator n
            <input className="accent-zinc-200" type="range" min={1} max={10} step={1} value={denominator} onChange={(event) => setDenominator(Number(event.target.value))} />
            <span className="text-lg font-mono text-zinc-100">{safeDenominator}</span>
          </label>
        </div>
        <div className="mt-6 grid gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm">
          <div className="text-zinc-400">a^(m/n) = <span className="text-zinc-100">{fmt(value)}</span></div>
          <div className="text-zinc-400">Root form: <span className="text-zinc-100">{rootForm}</span></div>
          <div className="text-zinc-400">Repeated root form: <span className="text-zinc-100">{repeatedRootForm}</span></div>
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-Indices-Surds-Lesson-WIDGET-002') {
    return `import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

function simplifySurd(n: number) {
  const limit = Math.floor(Math.sqrt(n));
  let coefficient = 1;
  for (let i = limit; i >= 2; i--) {
    if (n % (i * i) === 0) {
      coefficient = i;
      break;
    }
  }
  const radicand = n / (coefficient * coefficient);
  if (radicand === 1) return String(coefficient);
  return coefficient === 1 ? 'sqrt(' + n + ')' : coefficient + 'sqrt(' + radicand + ')';
}

export const ${asset.componentName}: React.FC = () => {
  const [input, setInput] = useState(72);
  const n = Math.max(1, Math.floor(input || 1));
  const result = simplifySurd(n);

  return (
    <DiagramPanel title={${title}} analysis={<p>Type a positive integer to extract the largest square factor and write the square root in simplest surd form.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Number under the square root
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" min={1} step={1} value={input} onChange={(event) => setInput(Number(event.target.value))} />
        </label>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          sqrt({n}) = <span className="text-xl text-zinc-100">{result}</span>
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-Indices-Surds-Lesson-WIDGET-003') {
    return `import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

function rationalise(input: string) {
  const compact = input.replace(/\\s+/g, '');
  const simple = compact.match(/^sqrt\\((\\d+)\\)$/i);
  if (simple) {
    const a = Number(simple[1]);
    return ['Multiply numerator and denominator by sqrt(' + a + ').', '1 / sqrt(' + a + ') = sqrt(' + a + ') / ' + a + '.'];
  }
  const binomial = compact.match(/^(\\d+)([+-])sqrt\\((\\d+)\\)$/i);
  if (binomial) {
    const a = Number(binomial[1]);
    const sign = binomial[2];
    const b = Number(binomial[3]);
    const opposite = sign === '+' ? '-' : '+';
    return [
      'Use the conjugate ' + a + opposite + 'sqrt(' + b + ').',
      'The denominator becomes ' + a + '^2 - sqrt(' + b + ')^2 = ' + (a * a - b) + '.',
      'So 1 / (' + compact + ') = (' + a + opposite + 'sqrt(' + b + ')) / ' + (a * a - b) + '.',
    ];
  }
  return ['Enter a denominator like sqrt(7), 3+sqrt(2), or 5-sqrt(3).'];
}

export const ${asset.componentName}: React.FC = () => {
  const [denominator, setDenominator] = useState('3+sqrt(2)');
  const steps = useMemo(() => rationalise(denominator), [denominator]);

  return (
    <DiagramPanel title={${title}} analysis={<p>Practise choosing the correct rationalising factor: the same surd for simple denominators or the conjugate for binomial denominators.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Denominator
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" value={denominator} onChange={(event) => setDenominator(event.target.value)} />
        </label>
        <ol className="mt-6 space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300">
          {steps.map((step, index) => <li key={step} className="font-mono">{index + 1}. {step}</li>)}
        </ol>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-Quadratics-Lesson-WIDGET-001') {
    return `import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(2).replace(/\\.00$/, '') : 'undefined';

export const ${asset.componentName}: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const points = useMemo(() => {
    return Array.from({ length: 161 }, (_, i) => {
      const x = -10 + (20 * i) / 160;
      const y = a * x * x + b * x + c;
      const px = ((x + 10) / 20) * 600;
      const py = Math.max(12, Math.min(308, 160 - y * 14));
      return px.toFixed(1) + ',' + py.toFixed(1);
    }).join(' ');
  }, [a, b, c]);
  const discriminant = b * b - 4 * a * c;
  const vertexX = a === 0 ? NaN : -b / (2 * a);
  const vertexY = a === 0 ? NaN : a * vertexX * vertexX + b * vertexX + c;
  const rootSummary = a === 0
    ? 'a = 0, so this is not quadratic'
    : discriminant > 0
      ? 'Two roots: ' + fmt((-b - Math.sqrt(discriminant)) / (2 * a)) + ', ' + fmt((-b + Math.sqrt(discriminant)) / (2 * a))
      : discriminant === 0
        ? 'Repeated root: ' + fmt(-b / (2 * a))
        : 'No real roots';

  return (
    <DiagramPanel title={${title}} analysis={<p>Move the coefficients to connect the algebraic form y = ax^2 + bx + c with shape, turning point and roots.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          {[['a', a, setA, -5, 5], ['b', b, setB, -10, 10], ['c', c, setC, -10, 10]].map(([label, value, setter, min, max]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Coefficient {String(label)}
              <input className="accent-zinc-200" type="range" min={Number(min)} max={Number(max)} step={0.1} value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
              <span className="text-lg font-mono text-zinc-100">{fmt(Number(value))}</span>
            </label>
          ))}
        </div>
        <svg viewBox="0 0 600 320" className="mt-6 h-auto w-full rounded-xl border border-zinc-800 bg-zinc-900">
          <line x1="0" y1="160" x2="600" y2="160" stroke="#71717a" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="320" stroke="#71717a" strokeWidth="1" />
          <polyline points={points} fill="none" stroke="#f4f4f5" strokeWidth="3" />
        </svg>
        <div className="mt-4 grid gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          <div>D = <span className="text-zinc-100">{fmt(discriminant)}</span></div>
          <div>Turning point = <span className="text-zinc-100">({fmt(vertexX)}, {fmt(vertexY)})</span></div>
          <div>{rootSummary}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-Quadratics-Lesson-WIDGET-002') {
    return `import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const ${asset.componentName}: React.FC = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(-4);
  const discriminant = b * b - 4 * a * c;
  const classification = a === 0
    ? 'Enter a non-zero value for a.'
    : discriminant > 0
      ? 'Two distinct real roots'
      : discriminant === 0
        ? 'One repeated real root'
        : 'No real roots';

  return (
    <DiagramPanel title={${title}} analysis={<p>Use the sign of D = b^2 - 4ac to classify roots without solving the equation.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          {[['a', a, setA], ['b', b, setB], ['c', c, setC]].map(([label, value, setter]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              {String(label)}
              <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          D = <span className="text-xl text-zinc-100">{discriminant.toFixed(2)}</span>
          <div className="mt-2 text-zinc-100">{classification}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-Quadratics-Lesson-WIDGET-003') {
    return `import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

function evaluatePolynomial(coefficients: number[], x: number) {
  return coefficients.reduce((acc, coefficient) => acc * x + coefficient, 0);
}

export const ${asset.componentName}: React.FC = () => {
  const [coefficientsText, setCoefficientsText] = useState('1, -6, 11, -6');
  const [testValue, setTestValue] = useState(1);
  const coefficients = useMemo(() => coefficientsText.split(',').map((part) => Number(part.trim())).filter((value) => Number.isFinite(value)), [coefficientsText]);
  const remainder = coefficients.length > 0 ? evaluatePolynomial(coefficients, testValue) : NaN;
  const factorResult = Math.abs(remainder) < 1e-9 ? 'x - ' + testValue + ' is a factor.' : 'Remainder is ' + remainder.toFixed(2) + ', so x - ' + testValue + ' is not a factor.';

  return (
    <DiagramPanel title={${title}} analysis={<p>Use substitution to apply the remainder theorem: when dividing by x - a, the remainder is f(a).</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Coefficients, highest degree first
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" value={coefficientsText} onChange={(event) => setCoefficientsText(event.target.value)} />
        </label>
        <label className="mt-4 flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Test value a
          <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" value={testValue} onChange={(event) => setTestValue(Number(event.target.value))} />
        </label>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          f({testValue}) = <span className="text-xl text-zinc-100">{Number.isFinite(remainder) ? remainder.toFixed(2) : 'undefined'}</span>
          <div className="mt-2 text-zinc-100">{factorResult}</div>
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-P1-Transformations-Lesson-WIDGET-001') {
    return `import React, { useMemo, useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(2).replace(/\\.00$/, '') : 'undefined';

export const ${asset.componentName}: React.FC = () => {
  const [kind, setKind] = useState('sin');
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const safeB = Math.abs(b) < 0.1 ? 0.1 : b;
  const points = useMemo(() => {
    return Array.from({ length: 181 }, (_, i) => {
      const xDeg = (360 * i) / 180;
      const radians = (safeB * xDeg + c) * Math.PI / 180;
      const raw = kind === 'cos' ? Math.cos(radians) : kind === 'tan' ? Math.tan(radians) : Math.sin(radians);
      const clipped = Math.max(-5, Math.min(5, a * raw + d));
      const px = (xDeg / 360) * 600;
      const py = 160 - clipped * 24;
      return px.toFixed(1) + ',' + Math.max(12, Math.min(308, py)).toFixed(1);
    }).join(' ');
  }, [kind, a, safeB, c, d]);
  const parentPeriod = kind === 'tan' ? 180 : 360;
  const period = parentPeriod / Math.abs(safeB);
  const phaseShift = -c / safeB;

  return (
    <DiagramPanel title={${title}} analysis={<p>Explore y = a f(bx + c) + d and watch amplitude, period, phase shift and vertical shift update together.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          Function
          <select className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" value={kind} onChange={(event) => setKind(event.target.value)}>
            <option value="sin">sin</option>
            <option value="cos">cos</option>
            <option value="tan">tan</option>
          </select>
        </label>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[['a', a, setA, -5, 5], ['b', b, setB, -4, 4], ['c', c, setC, -180, 180], ['d', d, setD, -5, 5]].map(([label, value, setter, min, max]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              {String(label)}
              <input className="accent-zinc-200" type="range" min={Number(min)} max={Number(max)} step={String(label) === 'c' ? 5 : 0.1} value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
              <span className="text-lg font-mono text-zinc-100">{fmt(Number(value))}</span>
            </label>
          ))}
        </div>
        <svg viewBox="0 0 600 320" className="mt-6 h-auto w-full rounded-xl border border-zinc-800 bg-zinc-900">
          <line x1="0" y1="160" x2="600" y2="160" stroke="#71717a" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="320" stroke="#71717a" strokeWidth="1" />
          <polyline points={points} fill="none" stroke="#f4f4f5" strokeWidth="3" />
        </svg>
        <div className="mt-4 grid gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          <div>Amplitude: <span className="text-zinc-100">{fmt(Math.abs(a))}</span></div>
          <div>Period: <span className="text-zinc-100">{fmt(period)} degrees</span></div>
          <div>Phase shift: <span className="text-zinc-100">{fmt(phaseShift)} degrees</span></div>
          <div>Vertical shift: <span className="text-zinc-100">{fmt(d)}</span></div>
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  if (asset.id === 'AS1-P1-Transformations-Lesson-WIDGET-002') {
    return `import React, { useState } from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const fmt = (value: number) => Number.isFinite(value) ? value.toFixed(2).replace(/\\.00$/, '') : 'undefined';

export const ${asset.componentName}: React.FC = () => {
  const [xOld, setXOld] = useState(0);
  const [yOld, setYOld] = useState(1);
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const valid = b !== 0;
  const xNew = valid ? (xOld - c) / b : NaN;
  const yNew = a * yOld + d;

  return (
    <DiagramPanel title={${title}} analysis={<p>Map a parent-graph point through y = a f(bx + c) + d using x_new = (x_old - c) / b and y_new = a y_old + d.</p>} wide>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-zinc-100">
        <div className="grid gap-4 md:grid-cols-3">
          {[['x old', xOld, setXOld], ['y old', yOld, setYOld], ['a', a, setA], ['b', b, setB], ['c', c, setC], ['d', d, setD]].map(([label, value, setter]) => (
            <label key={String(label)} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              {String(label)}
              <input className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-base text-zinc-100" type="number" step={0.1} value={Number(value)} onChange={(event) => (setter as React.Dispatch<React.SetStateAction<number>>)(Number(event.target.value))} />
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 font-mono text-sm text-zinc-400">
          {valid ? (
            <>
              <div>x new = <span className="text-xl text-zinc-100">{fmt(xNew)}</span></div>
              <div>y new = <span className="text-xl text-zinc-100">{fmt(yNew)}</span></div>
            </>
          ) : (
            <div className="text-amber-300">b cannot be zero.</div>
          )}
        </div>
      </div>
    </DiagramPanel>
  );
};
`;
  }

  return null;
}

function componentTemplate(asset: VisualAsset): string {
  const nativeP1Widget = p1NativeHtmlWidgetTemplate(asset);
  if (nativeP1Widget) return nativeP1Widget;

  const title = JSON.stringify(asset.title || asset.id);
  const source = JSON.stringify(asset.sourceContent);
  const id = JSON.stringify(asset.id);

  if (asset.kind === 'mermaid') {
    return `import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';

const chart = ${source};

export const ${asset.componentName}: React.FC = () => (
  <DiagramPanel title={${title}} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto py-4">
      <MermaidDiagram chart={chart} />
    </div>
  </DiagramPanel>
);
`;
  }

  if (asset.kind === 'svg') {
    return `import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const svgSource = ${source};

export const ${asset.componentName}: React.FC = () => (
  <DiagramPanel title={${title}} analysis={null}>
    <div
      className="w-full max-h-[560px] overflow-auto text-zinc-100 [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgSource }}
    />
  </DiagramPanel>
);
`;
  }

  if (asset.kind === 'html') {
    return `import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const htmlSource = ${source};

export const ${asset.componentName}: React.FC = () => (
  <DiagramPanel title={${title}} analysis={null} wide>
    <iframe
      title={${id}}
      srcDoc={htmlSource}
      sandbox="allow-scripts"
      className="min-h-[540px] w-full rounded-xl border border-zinc-800 bg-white"
    />
  </DiagramPanel>
);
`;
  }

  return `import React from 'react';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

const sourceContent = ${source};

export const ${asset.componentName}: React.FC = () => (
  <DiagramPanel title={${title}} analysis={null}>
    <div className="w-full max-h-[520px] overflow-auto rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left">
      <div className="mb-3 text-2.5 font-bold uppercase tracking-widest text-zinc-500">${asset.kind === 'pending' ? 'Pending Source Asset' : 'TikZ / LaTeX Source'}</div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-zinc-300">{sourceContent}</pre>
    </div>
  </DiagramPanel>
);
`;
}

function generateVisualComponents(): void {
  const moduleExports: Record<string, { lesson: string[]; practice: string[] }> = {};
  MODULES.forEach((module) => {
    moduleExports[module.key] = { lesson: [], practice: [] };
  });

  allVisuals.forEach((asset) => {
    const module = MODULES.find((item) => item.key === asset.moduleKey);
    if (!module) return;
    const visualDir = path.join(TARGET_ROOT, module.folder, 'visuals', asset.role === 'lesson' ? 'LessonDiagrams' : 'PracticeBankDiagrams');
    writeText(path.join(visualDir, `${asset.componentName}.tsx`), componentTemplate(asset));
    moduleExports[module.key][asset.role].push(asset.componentName);
  });

  MODULES.forEach((module) => {
    const exports = moduleExports[module.key];
    const lessonIndex = exports.lesson.sort().map((name) => `export * from './${name}';`).join('\n');
    const practiceIndex = exports.practice.sort().map((name) => `export * from './${name}';`).join('\n');
    writeText(path.join(TARGET_ROOT, module.folder, 'visuals/LessonDiagrams/index.ts'), `${lessonIndex}\n`);
    writeText(path.join(TARGET_ROOT, module.folder, 'visuals/PracticeBankDiagrams/index.ts'), `${practiceIndex}\n`);
    writeText(path.join(TARGET_ROOT, module.folder, 'index.ts'), `export * from './visuals/LessonDiagrams';\nexport * from './visuals/PracticeBankDiagrams';\n`);
  });
}

function generateLessonFiles(specText: string): void {
  const lessonImports: string[] = [];
  const lessonSpreads: string[] = [];

  MODULES.forEach((module) => {
    const { content, outcomes } = buildLessonContent(module, specText);
    const constName = `${module.key}_CONTENT`;
    const moduleName = `${module.key}_MODULE`;
    const learningOutcomes = outcomes.map((outcome) => ({
      id: outcome.id,
      text: outcome.official,
    }));
    const loIds = outcomes.map((outcome) => outcome.id);
    const lessonFile = `import { Module } from '@/core/types';

const ${constName} = ${JSON.stringify(content)};

export const ${moduleName}: Module = {
  id: ${JSON.stringify(module.key)},
  title: ${JSON.stringify(module.title)},
  type: "Pure",
  overview: ${JSON.stringify(module.overview)},
  learningOutcomes: ${JSON.stringify(learningOutcomes, null, 2)},
  lessons: [
    {
      id: ${JSON.stringify(`${module.key}-Lesson`)},
      title: ${JSON.stringify(module.title)},
      type: "Pure",
      content: ${constName},
      loIds: ${JSON.stringify(loIds)}
    }
  ]
};
`;
    writeText(path.join(TARGET_ROOT, module.folder, 'data/lessons.ts'), lessonFile);
    lessonImports.push(`import { ${moduleName} } from '../${module.folder}/data/lessons';`);
    lessonSpreads.push(`  ...${moduleName}.lessons,`);
  });

  writeText(
    path.join(TARGET_ROOT, 'data/lessons.ts'),
    `${lessonImports.join('\n')}\n\nexport const LESSONS = [\n${lessonSpreads.join('\n')}\n];\n`
  );
}

function generateQuestionFiles(): void {
  const questionImports: string[] = [];
  const questionSpreads: string[] = [];

  MODULES.forEach((module) => {
    const exportName = `${module.key}_QUESTIONS`;
    const moduleQuestions = allQuestions.filter((question) => question.moduleId === module.key);

    writeText(
      path.join(TARGET_ROOT, module.folder, 'data/questions.ts'),
      `import { PracticeQuestion } from '@/core/types';\n\nexport const ${exportName}: PracticeQuestion[] = ${JSON.stringify(moduleQuestions, null, 2)};\n`
    );

    questionImports.push(`import { ${exportName} } from '../${module.folder}/data/questions';`);
    questionSpreads.push(`  ...${exportName},`);
  });

  writeText(
    path.join(TARGET_ROOT, 'data/questions.ts'),
    `import { PracticeQuestion } from '@/core/types';\n${questionImports.join('\n')}\n\nexport const QUESTIONS: PracticeQuestion[] = [\n${questionSpreads.join('\n')}\n];\n`
  );

  const legacyGeneratedQuestions = path.join(TARGET_ROOT, 'data/generated/as1Questions.ts');
  if (fs.existsSync(legacyGeneratedQuestions)) {
    fs.unlinkSync(legacyGeneratedQuestions);
  }
}

function generateRegistryFiles(): void {
  const imports = MODULES.map((module) => `import * as ${module.key} from './${module.folder}';`).join('\n');
  const registry = `{\n${MODULES.map((module) => `  ${module.key},`).join('\n')}\n}`;
  const lessonMappings = allVisuals
    .filter((asset) => asset.role === 'lesson')
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((asset) => `  ${JSON.stringify(asset.id)}: { module: ${JSON.stringify(asset.moduleKey)} as ModuleKey, component: ${JSON.stringify(asset.componentName)} },`)
    .join('\n');

  writeText(
    path.join(TARGET_ROOT, 'registry.ts'),
    `${imports}\n\nexport const VisualRegistry = ${registry} as const;\nexport type ModuleKey = keyof typeof VisualRegistry;\n\nexport const AS1_SHORT_ID_MAPPING: Record<string, { module: ModuleKey; component: string }> = {\n${lessonMappings}\n};\n`
  );

  const practiceImports = MODULES.map((module) => `import * as ${module.key} from './${module.folder}/visuals/PracticeBankDiagrams';`).join('\n');
  const manifestEntries: Record<string, any> = {};
  allVisuals.filter((asset) => asset.role === 'practice').forEach((asset) => {
    manifestEntries[asset.id] = {
      id: asset.id,
      kind: asset.kind,
      componentName: asset.componentName,
      module: asset.moduleKey,
      questionId: asset.questionId,
      sourceContent: asset.kind === 'latex' || asset.kind === 'html' || asset.kind === 'pending' ? asset.sourceContent : undefined,
    };
  });

  writeText(
    path.join(TARGET_ROOT, 'visualManifest.tsx'),
    `import React from 'react';\n${practiceImports}\n\nconst Registry: Record<string, any> = {\n${MODULES.map((module) => `  ${module.key},`).join('\n')}\n};\n\nexport interface VisualEntry {\n  id: string;\n  kind: "mermaid" | "svg" | "latex" | "html" | "pending";\n  componentName: string;\n  module: string;\n  questionId?: string;\n  sourceContent?: string;\n}\n\nexport const VISUAL_MANIFEST: Record<string, VisualEntry> = ${JSON.stringify(manifestEntries, null, 2)};\n\nexport function getAS1PracticeComponent(id: string): React.FC | null {\n  const entry = VISUAL_MANIFEST[id];\n  if (!entry) return null;\n  const moduleRegistry = Registry[entry.module];\n  if (!moduleRegistry || !entry.componentName) return null;\n  return moduleRegistry[entry.componentName] || null;\n}\n`
  );

  writeText(path.join(TARGET_ROOT, 'mermaid.config.ts'), `export const AS1_MERMAID_CONFIG = {};\n`);
  writeText(path.join(TARGET_ROOT, 'index.ts'), `export * from './registry';\nexport * from './visualManifest';\nexport * from './mermaid.config';\nexport * from './data/lessons';\nexport * from './data/questions';\n`);
}

function writeReports(): void {
  const placeholders = allQuestions.flatMap((question) => {
    const combined = `${question.questionMarkdown}\n${question.markSchemeMarkdown}`;
    return [...combined.matchAll(/\[(?:VISUAL|INTERACTIVE) REFERENCE:\s*([^\]]+)\]/gi)]
      .map((match) => match[1].trim())
      .filter((id) => !visualById.has(id));
  });
  report.unresolvedVisualPlaceholders = [...new Set(placeholders)].sort();

  const byModule = allQuestions.reduce<Record<string, number>>((acc, question) => {
    acc[question.moduleId] = (acc[question.moduleId] ?? 0) + 1;
    return acc;
  }, {});

  writeText(path.join(TARGET_ROOT, 'data/generated/extractionReport.json'), JSON.stringify(report, null, 2));
  writeText(path.join(TARGET_ROOT, 'data/generated/bankAudit.json'), JSON.stringify({
    summary: {
      totalQuestions: allQuestions.length,
      moduleBreakdown: byModule,
      visuals: allVisuals.length,
      unresolvedVisualPlaceholders: report.unresolvedVisualPlaceholders.length,
    },
    qualityGaps: {
      missingSolutions: report.missingSolutionIds,
      duplicateQuestionIds: report.duplicateQuestionIds,
    },
    visualAudit: {
      unresolvedList: report.unresolvedVisualPlaceholders,
      pendingVisualsCreated: report.pendingVisualsCreated,
    },
  }, null, 2));
}

function runImport(): void {
  if (!fs.existsSync(SOURCE_ROOT)) {
    throw new Error(`Missing AS1 source root: ${SOURCE_ROOT}`);
  }
  if (!fs.existsSync(SPEC_PATH)) {
    throw new Error(`Missing AS1 specification map: ${SPEC_PATH}`);
  }

  const specText = readText(SPEC_PATH);

  MODULES.forEach((module) => {
    module.sourceFolders.forEach((source) => {
      report.sourceFolders++;
      extractVisualsForSource(source, module.key);
    });
  });

  MODULES.forEach((module) => {
    module.sourceFolders
      .filter((source) => source.kind === 'questions')
      .forEach((source) => importQuestionPack(source, module.key));
    module.sourceFolders
      .filter((source) => source.folder === '06. Vectors')
      .forEach((source) => importVectorLessonPractice(source));
  });

  generateVisualComponents();
  generateLessonFiles(specText);
  generateQuestionFiles();
  generateRegistryFiles();
  writeReports();

  console.log(`AS1 import complete: ${allQuestions.length} questions, ${allVisuals.length} visuals.`);
}

runImport();
