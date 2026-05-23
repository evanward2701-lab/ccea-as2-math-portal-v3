import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_ROOT = '/Users/evanward/Documents/AS Portal - New /AS2 Files/';
const TARGET_FILE = path.join(__dirname, '../data/imported_questions.ts');
const LESSON_VISUAL_PATH = path.join(__dirname, '../components/LessonVisual.tsx');

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

// 1. Build Visual ID Map from LessonVisual.tsx
// We want to map component names to their slug IDs (e.g., "M2KinematicsMaster" -> "M2-VTS")
function getVisualIdMap() {
  if (!fs.existsSync(LESSON_VISUAL_PATH)) return {};
  const content = fs.readFileSync(LESSON_VISUAL_PATH, 'utf-8');
  const mapping: Record<string, string> = {};
  
  // Look for "visual-id": { module: "...", component: "ComponentName" }
  const regex = /"([^"]+)":\s*{\s*module:\s*"[^"]+",\s*component:\s*"([^"]+)"\s*}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    mapping[match[2].toLowerCase()] = match[1]; // lowercase ComponentName -> visual-id
  }
  return mapping;
}

const componentToVisualId = getVisualIdMap();

// Keyword mapping for common visual types if ID mapping fails
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
  // Split by horizontal rules that separate questions
  const sections = content.split('\n---').map(s => s.trim());
  return sections;
}

function extractQuestionData(section: string) {
  const idMatch = section.match(/\*\*Question ID:\*\*\s*(AS2[A-Za-z0-9]+)/);
  const marksMatch = section.match(/\*\*Marks:\*\*\s*(\d+)/);
  const questionContentMatch = section.match(/### Question\s+([\s\S]*?)(?=\s+###|$)/);
  
  if (!idMatch) return null;

  let questionMarkdown = (questionContentMatch ? questionContentMatch[1] : '').trim();
  
  // Cleanup: Remove "Space for Working" if present
  questionMarkdown = questionMarkdown.split('### Space for Working')[0].trim();

  // 2. Linking Logic: Scan for visual placeholders
  let visualId: string | undefined = undefined;
  const visualMatch = section.match(/\[VISUAL (?:PLACEHOLDER|REFERENCE):\s*([^\]|]+)(?:\|[^\]]*)?\]/);
  
  if (visualMatch) {
    const rawId = visualMatch[1].trim();
    const lowerId = rawId.toLowerCase();
    
    // a. Try to find a component name in the string
    for (const [compName, vid] of Object.entries(componentToVisualId)) {
      if (lowerId.includes(compName)) {
        visualId = vid;
        break;
      }
    }

    // b. Fallback to keyword mapping
    if (!visualId) {
      for (const [kw, vid] of Object.entries(KEYWORD_MAP)) {
        if (lowerId.includes(kw)) {
          visualId = vid;
          break;
        }
      }
    }

    if (visualId) {
      console.log(`   🔗 Bound visual "${visualId}" to ${idMatch[1]}`);
    }
  }

  return {
    id: idMatch[1],
    marks: parseInt(marksMatch ? marksMatch[1] : '0'),
    questionMarkdown,
    visualId
  };
}

function extractSolutionData(section: string) {
  const idMatch = section.match(/\*\*Question ID:\*\*\s*(AS2[A-Za-z0-9]+)/);
  const solutionMatch = section.match(/### Official Mark Scheme Solution\s+([\s\S]*?)(?=\s+###|$)/);
  
  if (!idMatch) return null;

  return {
    id: idMatch[1],
    markSchemeMarkdown: (solutionMatch ? solutionMatch[1] : '').trim()
  };
}

function runIngestion() {
  console.log('\x1b[1m\x1b[34m--- AS2 Question Bank Ingestion ---\x1b[0m\n');
  
  if (!fs.existsSync(SOURCE_ROOT)) {
    console.error(`Error: Source directory ${SOURCE_ROOT} not found.`);
    return;
  }

  const allQuestions: PracticeQuestion[] = [];
  const folders = fs.readdirSync(SOURCE_ROOT).filter(f => {
    const fullPath = path.join(SOURCE_ROOT, f);
    return fs.statSync(fullPath).isDirectory();
  });

  folders.forEach(folder => {
    const folderPath = path.join(SOURCE_ROOT, folder);
    const files = fs.readdirSync(folderPath);

    const questionsFile = files.find(f => f.endsWith('_questions.md'));
    const solutionsFile = files.find(f => f.endsWith('_solutions.md'));

    if (questionsFile && solutionsFile) {
      console.log(`\x1b[1mProcessing Pack: ${folder}\x1b[0m`);
      
      const qSections = parseMarkdownPack(path.join(folderPath, questionsFile));
      const sSections = parseMarkdownPack(path.join(folderPath, solutionsFile));

      const questionMap: Record<string, any> = {};
      
      qSections.forEach(s => {
        const data = extractQuestionData(s);
        if (data) questionMap[data.id] = data;
      });

      sSections.forEach(s => {
        const data = extractSolutionData(s);
        if (data && questionMap[data.id]) {
          questionMap[data.id].markSchemeMarkdown = data.markSchemeMarkdown;
        }
      });

      // 3. Module Detection: Folder name contains 'M2', 'S3', etc.
      const moduleMatch = folder.match(/([MS][1-4])/i);
      const moduleId = moduleMatch ? moduleMatch[1].toUpperCase() : 'Unknown';
      
      // Topic derivation: everything after the module code
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
          markSchemeMarkdown: q.markSchemeMarkdown || '_Solution content missing from pack._',
          marks: q.marks,
          visualId: q.visualId
        });
      });
    }
  });

  const output = `import { PracticeQuestion } from '../types';

export const IMPORTED_QUESTIONS: PracticeQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;

  fs.writeFileSync(TARGET_FILE, output);
  console.log(`\n\x1b[32m✅ Ingestion Complete!\x1b[0m`);
  console.log(`Total questions imported: ${allQuestions.length}`);
  console.log(`Output: src/data/imported_questions.ts`);
}

runIngestion();
