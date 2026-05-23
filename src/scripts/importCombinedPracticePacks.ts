import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMBINED_PACKS = [
  {
    moduleId: "S4",
    topic: "Binomial Distribution",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-S4-Binomial Distribution/AS2_binomial_distribution_probability_combined.md"
  },
  {
    moduleId: "M3",
    topic: "Connected Particles",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-M3-Forces & Newtowns Laws/AS2_connected_particles_combined.md"
  },
  {
    moduleId: "M3",
    topic: "Forces & Newton's Laws",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-M3-Forces & Newtowns Laws/AS2_forces_newtons_laws_combined.md"
  },
  {
    moduleId: "M3",
    topic: "Inclined Planes",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-M3-Forces & Newtowns Laws/AS2_inclined_planes_combined.md"
  },
  {
    moduleId: "M2",
    topic: "Kinematics",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-M2-Kinematics/AS2_kinematics_motion_graphs_uniform_acceleration_combined.md"
  },
  {
    moduleId: "S2",
    topic: "Mean & Standard Deviation",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-S2-Standard Deviation/AS2_mean_standard_deviation_combined.md"
  },
  {
    moduleId: "S3",
    topic: "Probability",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-S3-Probability/AS2_probability_combined.md"
  },
  {
    moduleId: "S2",
    topic: "Product Moment Correlation Coefficient",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-S2-Correlation/AS2_product_moment_correlation_coefficient_combined.md"
  },
  {
    moduleId: "M3",
    topic: "Statics",
    path: "/Users/evanward/Documents/AS Portal - New /AS2 Files/Practice Questions-M3-Forces & Newtowns Laws/AS2_statics_combined.md"
  }
];

const TARGET_FILE = path.join(__dirname, '../modules/AS2/data/generated/as2Questions.ts');
const VISUALS_ROOT = path.join(__dirname, '../modules/AS2');
const MANIFEST_PATH = path.join(VISUALS_ROOT, 'visualManifest.tsx');
const REPORT_PATH = path.join(__dirname, '../modules/AS2/data/generated/extractionReport.json');

interface VisualEntry {
  id: string;
  kind: "mermaid" | "svg" | "latex" | "html" | "pending";
  componentName: string;
  module: string;
  questionId?: string;
  sourceContent?: string;
}

const allQuestions: any[] = [];
const manifest: Record<string, VisualEntry> = {};
const moduleExports: Record<string, Set<string>> = {
  M1: new Set(), M2: new Set(), M3: new Set(),
  S1: new Set(), S2: new Set(), S3: new Set(), S4: new Set()
};

const report = {
  foldersScanned: COMBINED_PACKS.length,
  totalQuestionsFound: 0,
  totalQuestionsImported: 0,
  questionsNoSolution: [] as string[],
  generatedOnlySolutions: [] as string[],
  finalAnswerOnlySolutions: [] as string[],
  placeholdersFound: 0,
  visualsExtracted: 0,
  unmatchedVisualIDs: [] as string[]
};

const extractedIDs = new Set<string>();

function generateComponentName(id: string) {
  let name = id.replace(/[^a-zA-Z0-9]/g, '');
  if (/^\d/.test(name)) name = 'V' + name;
  return name.slice(0, 100);
}

function cleanSvgForJsx(svg: string) {
  return svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/stroke="black"/g, 'stroke="currentColor"')
    .replace(/fill="black"/g, 'fill="currentColor"')
    .replace(/fill="white"/g, 'fill="transparent"')
    .replace(/<rect[^>]*fill="white"[^>]*\/>/g, '')
    .replace(/stroke-width="[34]"/g, 'stroke-width="1.5"')
    .replace(/font-size="\d+"/g, 'font-size="12"')
    .replace(/font-family="serif"/g, 'font-family="Inter, sans-serif"')
    .replace(/xmlns:xlink="[^"]*"/g, '')
    .replace(/xml:space="[^"]*"/g, '')
    .replace(/class=/g, 'className=');
}

function writeComponent(componentName: string, content: string, module: string) {
  const dir = path.join(VISUALS_ROOT, module, 'visuals/PracticeBankDiagrams');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${componentName}.tsx`), content);
  moduleExports[module].add(componentName);
}

function processVisuals(text: string, questionId: string, moduleId: string): string {
  const blockPattern = /> Visual:\s*([A-Za-z0-9_-]+)[\s\S]*?```(svg|mermaid|latex|html)\s+([\s\S]*?)```/gi;
  
  return text.replace(blockPattern, (match, vId, kind, vContent) => {
    vId = vId.trim();
    kind = kind.toLowerCase();
    vContent = vContent.trim();
    
    extractedIDs.add(vId);
    report.visualsExtracted++;
    const componentName = generateComponentName(vId);

    if (kind === 'svg') {
      const cleanedSvg = cleanSvgForJsx(vContent);
      const tsx = `import React from 'react';\nimport { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';\n\nexport const ${componentName}: React.FC = () => (\n  <DiagramPanel title="${vId}" analysis={null}>\n    <div className=\"text-zinc-500 w-full flex justify-center py-4\">\n      <div className=\"max-w-full max-h-[400px] flex justify-center items-center overflow-hidden\">\n        ${cleanedSvg}\n      </div>\n    </div>\n  </DiagramPanel>\n);\n`;
      writeComponent(componentName, tsx, moduleId);
      manifest[vId] = { id: vId, kind, componentName, module: moduleId, questionId };
    } else if (kind === 'mermaid') {
      const tsx = `import React from 'react';\nimport { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';\nimport { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';\n\nexport const ${componentName}: React.FC = () => (\n  <DiagramPanel title="${vId}" analysis={null}>\n    <div className=\"max-h-[400px] overflow-auto py-4\">\n      <MermaidDiagram chart={\`${vContent}\`} />\n    </div>\n  </DiagramPanel>\n);\n`;
      writeComponent(componentName, tsx, moduleId);
      manifest[vId] = { id: vId, kind, componentName, module: moduleId, questionId };
    } else {
      manifest[vId] = { id: vId, kind, componentName: "", module: moduleId, questionId, sourceContent: vContent };
    }

    return `[VISUAL REFERENCE: ${vId}]`;
  });
}

function parseCombinedFile(pack: any) {
  if (!fs.existsSync(pack.path)) {
    console.warn(`Warning: Pack file not found: ${pack.path}`);
    return;
  }

  console.log(`Processing Pack: ${pack.topic} (${pack.moduleId})`);
  const content = fs.readFileSync(pack.path, 'utf-8');
  const sections = content.split(/\n# Question \d+:/).slice(1);
  report.totalQuestionsFound += sections.length;

  sections.forEach((section, idx) => {
    const qMatch = section.match(/## Question([\s\S]*?)(?=## Diagram \/ Visuals|## Solution|$)/);
    const dMatch = section.match(/## Diagram \/ Visuals([\s\S]*?)(?=## Solution|$)/);
    const sMatch = section.match(/## Solution([\s\S]*?)(?=## Solution Visuals|$)/);
    const svMatch = section.match(/## Solution Visuals([\s\S]*?)$/);

    const idMatch = section.match(/\*\*Question ID:\*\*\s*`?(AS2[A-Za-z0-9_-]+)`?/);
    const marksMatch = section.match(/\*\*Marks:\*\*\s*(\d+)/);

    if (!idMatch) return;

    const questionId = idMatch[1];
    const marks = parseInt(marksMatch ? marksMatch[1] : '0');

    let questionMarkdown = (qMatch ? qMatch[1] : '').trim();
    questionMarkdown = processVisuals(questionMarkdown, questionId, pack.moduleId);
    
    questionMarkdown = questionMarkdown.replace(/^\*\*Question ID:\*\*.*$/gm, '')
                                       .replace(/^\*\*Source:\*\*.*$/gm, '')
                                       .replace(/^\*\*Original reference:\*\*.*$/gm, '')
                                       .replace(/^\*\*Marks:\*\*.*$/gm, '')
                                       .replace(/^\*\*Subtopic:\*\*.*$/gm, '')
                                       .replace(/### Space for Working[\s\S]*$/g, '')
                                       .trim();

    if (dMatch) {
      processVisuals(dMatch[1], questionId, pack.moduleId);
    }

    let markSchemeMarkdown = (sMatch ? sMatch[1] : '').trim();
    markSchemeMarkdown = processVisuals(markSchemeMarkdown, questionId, pack.moduleId);

    if (svMatch) {
      const svVisuals = processVisuals(svMatch[1], questionId, pack.moduleId);
      if (svVisuals.includes('[VISUAL REFERENCE:')) {
        markSchemeMarkdown += '\n\n' + svVisuals;
      }
    }

    const officialMissing = markSchemeMarkdown.includes('Official solution not found') || 
                            markSchemeMarkdown.includes('No official mark scheme content available');
    const generatedBlock = markSchemeMarkdown.includes('### Generated solution');
    const finalAnswerBlock = markSchemeMarkdown.includes('### Final Answer');

    if (officialMissing) {
      if (generatedBlock) {
        report.generatedOnlySolutions.push(questionId);
        markSchemeMarkdown = markSchemeMarkdown.replace('### Generated solution', '> **Note:** Official mark scheme unavailable. Generated solution shown for study support.\n\n### Generated solution');
      } else if (finalAnswerBlock) {
        report.finalAnswerOnlySolutions.push(questionId);
        markSchemeMarkdown = markSchemeMarkdown.replace('### Final Answer', '> **Note:** Step-by-step working unavailable. Displaying final answer only.\n\n### Final Answer');
      } else {
        report.questionsNoSolution.push(questionId);
      }
    }

    markSchemeMarkdown = markSchemeMarkdown.replace(/^\*\*Question ID:\*\*.*$/gm, '')
                                           .replace(/^\*\*Source:\*\*.*$/gm, '')
                                           .replace(/^\*\*Original reference:\*\*.*$/gm, '')
                                           .replace(/^\*\*Related question:\*\*.*$/gm, '')
                                           .replace(/^\*\*Marks available:\*\*.*$/gm, '')
                                           .replace(/^\*\*Match confidence:\*\*.*$/gm, '')
                                           .trim();

    allQuestions.push({
      id: questionId,
      moduleId: pack.moduleId,
      topic: pack.topic,
      type: "Exam-Style",
      marks,
      questionMarkdown,
      markSchemeMarkdown
    });
    report.totalQuestionsImported++;
  });
}

function runImport() {
  console.log('🚀 Importing Combined AS2 Packs (Hardened)...');

  COMBINED_PACKS.forEach(parseCombinedFile);

  if (!fs.existsSync(path.dirname(REPORT_PATH))) fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  Object.entries(moduleExports).forEach(([module, components]) => {
    const indexPath = path.join(VISUALS_ROOT, module, 'visuals/PracticeBankDiagrams/index.ts');
    let indexContent = `// AUTO-GENERATED PRACTICE DIAGRAMS INDEX\n`;
    components.forEach(comp => { indexContent += `export * from './${comp}';\n`; });
    if (components.size > 0) fs.writeFileSync(indexPath, indexContent);
  });

  let manifestContent = `/**\n * AUTO-GENERATED VISUAL MANIFEST\n */\nimport React from 'react';\nimport * as M1 from './M1/visuals/PracticeBankDiagrams';\nimport * as M2 from './M2/visuals/PracticeBankDiagrams';\nimport * as M3 from './M3/visuals/PracticeBankDiagrams';\nimport * as S1 from './S1/visuals/PracticeBankDiagrams';\nimport * as S2 from './S2/visuals/PracticeBankDiagrams';\nimport * as S3 from './S3/visuals/PracticeBankDiagrams';\nimport * as S4 from './S4/visuals/PracticeBankDiagrams';\n\nconst Registry: Record<string, any> = { M1, M2, M3, S1, S2, S3, S4 };\n\nexport interface VisualEntry {\n  id: string;\n  kind: \"mermaid\" | \"svg\" | \"latex\" | \"html\" | \"pending\";\n  componentName: string;\n  module: string;\n  questionId?: string;\n  sourceContent?: string;\n}\n\nexport const VISUAL_MANIFEST: Record<string, VisualEntry> = ${JSON.stringify(manifest, null, 2)};\n\nexport function getPracticeComponent(id: string): React.FC | null {\n  const entry = VISUAL_MANIFEST[id];\n  if (!entry) return null;\n  \n  if (entry.kind === 'latex' || entry.kind === 'html') {\n    return () => (\n      <div className=\"w-full p-6 bg-zinc-950 rounded-2xl border border-zinc-800 font-mono text-[10px] text-zinc-500 overflow-auto max-h-[300px]\">\n        <div className=\"mb-2 text-zinc-600 uppercase tracking-widest font-bold\">Source {entry.kind.toUpperCase()} Diagram</div>\n        <pre>{entry.sourceContent}</pre>\n      </div>\n    );\n  }\n\n  const moduleRegistry = Registry[entry.module];\n  if (!moduleRegistry || !entry.componentName) return null;\n  return moduleRegistry[entry.componentName] || null;\n}\n`;
  fs.writeFileSync(MANIFEST_PATH, manifestContent);

  const questionsOutput = `import { PracticeQuestion } from '@/core/types';\n\nexport const AS2_GENERATED_QUESTIONS: PracticeQuestion[] = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(TARGET_FILE, questionsOutput);

  console.log(`✅ Import Complete! ${allQuestions.length} questions imported.`);
  console.log(`📊 Report saved to ${REPORT_PATH}`);
}

runImport();
