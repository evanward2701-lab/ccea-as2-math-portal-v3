import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_ROOT = '/Users/evanward/Documents/AS Portal - New /AS2 Files/';
const TARGET_FILE = path.join(__dirname, '../data/generated/as2Questions.ts');
const LESSON_VISUAL_PATH = path.join(__dirname, '@/core/components/VisualRenderer.tsx');

interface PracticeQuestion {
  id: string;
  moduleId: string;
  topic: string;
  type: string;
  questionMarkdown: string;
  markSchemeMarkdown: string;
  marks: number;
  visualId?: string;
}

// 1. Build Visual ID Map
function getVisualIdMap() {
  if (!fs.existsSync(LESSON_VISUAL_PATH)) return {};
  const content = fs.readFileSync(LESSON_VISUAL_PATH, 'utf-8');
  const mapping: Record<string, string> = {};
  const regex = /"([^"]+)":\s*{\s*module:\s*"[^"]+",\s*component:\s*"([^"]+)"\s*}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    mapping[match[2].toLowerCase()] = match[1];
  }
  return mapping;
}

const componentToVisualId = getVisualIdMap();

const KEYWORD_MAP: Record<string, string> = {
  "velocity-time": "M2-VTGraphEngine",
  "displacement-time": "M2-VTS",
  "force diagram": "M1-FreeBody",
  "suvat": "M2-SUVATMatrix",
  "friction": "M3-FrictionSimulator",
  "incline": "M3-Incline",
  "pulley": "M3-Pulley",
  "lift": "M3-Lift",
  "sampling": "S1-Sampling",
  "histogram": "S2-Histogram",
  "pmcc": "S2-PMCC",
  "scatter": "S2-Scatter",
  "venn": "S3-Venn",
  "tree": "S3-Tree",
  "binomial": "S4-Binomial",
  "normal": "S4-Normal",
  "connected": "M3-Connected",
  "acceleration": "M2-KinematicTrack"
};

function parseMarkdownPack(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.split('\n---').map(s => s.trim());
}

function extractQuestionData(section: string) {
  const idMatch = section.match(/\*\*Question ID:\*\*\s*(AS2[A-Za-z0-9_-]+)/);
  const marksMatch = section.match(/\*\*Marks:\*\*\s*(\d+)/);
  const questionContentMatch = section.match(/### Question\s+([\s\S]*?)(?=\s+###|$)/);
  
  if (!idMatch) return null;

  let questionMarkdown = (questionContentMatch ? questionContentMatch[1] : '').trim();
  questionMarkdown = questionMarkdown.split('### Space for Working')[0].trim();

  let visualId: string | undefined = undefined;
  const visualMatch = section.match(/\[VISUAL (?:PLACEHOLDER|REFERENCE):\s*([^\]|]+)(?:\|[^\]]*)?\]/);
  
  if (visualMatch) {
    const rawId = visualMatch[1].trim().toLowerCase();
    for (const [compName, vid] of Object.entries(componentToVisualId)) {
      if (rawId.includes(compName)) {
        visualId = vid;
        break;
      }
    }
    if (!visualId) {
      for (const [kw, vid] of Object.entries(KEYWORD_MAP)) {
        if (rawId.includes(kw)) {
          visualId = vid;
          break;
        }
      }
    }
  }

  return {
    id: idMatch[1],
    marks: parseInt(marksMatch ? marksMatch[1] : '0'),
    questionMarkdown,
    visualId
  };
}

function extractFullSolutionData(section: string) {
  const idMatch = section.match(/\*\*Question ID:\*\*\s*(AS2[A-Za-z0-9_-]+)/);
  if (!idMatch) return null;

  let solutionContent = section
    .replace(/\*\*Question ID:\*\*.*$/m, '')
    .replace(/\*\*Source:\*\*.*$/m, '')
    .replace(/\*\*Original reference:\*\*.*$/m, '')
    .trim();

  const officialMissing = solutionContent.includes('Official solution not found') || 
                          solutionContent.includes('No official mark scheme content available');
  const generatedBlock = solutionContent.includes('### Generated solution');
  const finalAnswerBlock = solutionContent.includes('### Final Answer');

  if (officialMissing && generatedBlock) {
    solutionContent = solutionContent.replace('### Generated solution', '> **Note:** Official mark scheme unavailable. Generated solution shown for study support.\n\n### Generated solution');
  } else if (officialMissing && !generatedBlock && finalAnswerBlock) {
    solutionContent = solutionContent.replace('### Final Answer', '> **Note:** Step-by-step working unavailable. Displaying final answer only.\n\n### Final Answer');
  }

  return {
    id: idMatch[1],
    markSchemeMarkdown: solutionContent
  };
}

function runIngestion() {
  console.log('\x1b[1m\x1b[34m--- AS2 Question Bank Ingestion ---\x1b[0m\n');
  
  if (!fs.existsSync(SOURCE_ROOT)) {
    console.error(`Error: Source directory ${SOURCE_ROOT} not found.`);
    return;
  }

  const allQuestions: PracticeQuestion[] = [];
  const folders = fs.readdirSync(SOURCE_ROOT).filter(f => fs.statSync(path.join(SOURCE_ROOT, f)).isDirectory());

  folders.forEach(folder => {
    const folderPath = path.join(SOURCE_ROOT, folder);
    const files = fs.readdirSync(folderPath);

    const questionsFile = files.find(f => f.endsWith('_questions.md'));
    const solutionsFile = files.find(f => f.endsWith('_solutions.md'));

    if (questionsFile && solutionsFile) {
      console.log(`Processing Pack: ${folder}`);
      
      const qSections = parseMarkdownPack(path.join(folderPath, questionsFile));
      const sSections = parseMarkdownPack(path.join(folderPath, solutionsFile));

      const questionMap: Record<string, any> = {};
      
      qSections.forEach(s => {
        const data = extractQuestionData(s);
        if (data) questionMap[data.id] = data;
      });

      sSections.forEach(s => {
        const data = extractFullSolutionData(s);
        if (data && questionMap[data.id]) {
          questionMap[data.id].markSchemeMarkdown = data.markSchemeMarkdown;
        }
      });

      const moduleMatch = folder.match(/([MS][1-4])/i);
      const moduleId = moduleMatch ? moduleMatch[1].toUpperCase() : 'Unknown';
      let topic = folder;
      if (moduleMatch) {
        topic = folder.split(moduleMatch[0])[1].replace(/^[- ]+/, '').trim();
      }

      Object.values(questionMap).forEach(q => {
        allQuestions.push({
          id: q.id,
          moduleId,
          topic: topic || 'General',
          type: "Exam-Style",
          questionMarkdown: q.questionMarkdown,
          markSchemeMarkdown: q.markSchemeMarkdown || '_Solution content pending recovery._',
          marks: q.marks,
          visualId: q.visualId
        });
      });
    }
  });

  const output = `import { PracticeQuestion } from '@/core/types';\n\nexport const AS2_GENERATED_QUESTIONS: PracticeQuestion[] = ${JSON.stringify(allQuestions, null, 2)};\n`;
  
  if (!fs.existsSync(path.dirname(TARGET_FILE))) {
    fs.mkdirSync(path.dirname(TARGET_FILE), { recursive: true });
  }
  
  fs.writeFileSync(TARGET_FILE, output);
  console.log(`\n\x1b[32m✅ Ingestion Complete! ${allQuestions.length} questions written to ${TARGET_FILE}\x1b[0m`);
}

runIngestion();
