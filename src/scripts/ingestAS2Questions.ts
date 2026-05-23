import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_ROOT = '/Users/evanward/Documents/AS Portal - New /AS2 Files/';
const TARGET_FILE = path.join(__dirname, '../data/imported_questions.ts');
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

// 1. Build Visual ID Map from LessonVisual.tsx
function getVisualIdMap() {
  const content = fs.readFileSync(LESSON_VISUAL_PATH, 'utf-8');
  const mapping: Record<string, string> = {};
  
  // Look for "visual-id": { module: "...", component: "ComponentName" }
  const regex = /"([^"]+)":\s*{\s*module:\s*"[^"]+",\s*component:\s*"([^"]+)"\s*}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    mapping[match[2]] = match[1]; // ComponentName -> visual-id
  }
  return mapping;
}

const componentToVisualId = getVisualIdMap();

function parseMarkdownPack(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const sections = content.split('\n---').map(s => s.trim());
  return sections;
}

// Keyword mapping for visual placeholders
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
  "weight": "M1-FreeBody",
  "tension": "M3-Pulley",
  "connected": "M3-Connected",
  "acceleration": "M2-KinematicTrack"
};

function extractQuestionData(section: string) {
  const idMatch = section.match(/\*\*Question ID:\*\*\s*(AS2[A-Za-z0-9]+)/);
  const marksMatch = section.match(/\*\*Marks:\*\*\s*(\d+)/);
  const questionContentMatch = section.match(/### Question\s+([\s\S]*?)(?=\s+###|$)/);
  
  if (!idMatch) return null;

  let questionMarkdown = (questionContentMatch ? questionContentMatch[1] : '').trim();
  
  // Remove "Space for Working" if present
  questionMarkdown = questionMarkdown.split('### Space for Working')[0].trim();

  // Find visual placeholder
  let visualId: string | undefined = undefined;
  const visualMatch = section.match(/\[VISUAL (?:PLACEHOLDER|REFERENCE):\s*([^\]]+)\]/);
  if (visualMatch) {
    const fullText = visualMatch[1].toLowerCase();
    
    // 1. Try direct component name match
    for (const [compName, vid] of Object.entries(componentToVisualId)) {
      if (fullText.includes(compName.toLowerCase())) {
        visualId = vid;
        break;
      }
    }

    // 2. Try keyword mapping if no component name found
    if (!visualId) {
      for (const [kw, vid] of Object.entries(KEYWORD_MAP)) {
        if (fullText.includes(kw)) {
          visualId = vid;
          break;
        }
      }
    }

    if (visualId) {
      console.log(`   🔗 Bound visual "${visualId}" to question ${idMatch[1]}`);
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
  console.log('--- AS2 Question Ingestion Started ---');
  
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
        const data = extractSolutionData(s);
        if (data && questionMap[data.id]) {
          questionMap[data.id].markSchemeMarkdown = data.markSchemeMarkdown;
        }
      });

      // Extract Module and Topic from folder name "Practice Questions-M2-Kinematics"
      const parts = folder.split('-');
      const moduleId = parts[1] || 'Unknown';
      const topic = parts.slice(2).join(' ') || folder;

      Object.values(questionMap).forEach(q => {
        allQuestions.push({
          id: q.id,
          moduleId,
          topic,
          type: "Exam-Style",
          questionMarkdown: q.questionMarkdown,
          markSchemeMarkdown: q.markSchemeMarkdown || 'Solution not found in pack.',
          marks: q.marks,
          visualId: q.visualId
        });
      });
    }
  });

  const output = `import { PracticeQuestion } from '@/core/types';

export const IMPORTED_QUESTIONS: PracticeQuestion[] = ${JSON.stringify(allQuestions, null, 2)};
`;

  fs.writeFileSync(TARGET_FILE, output);
  console.log(`\n✅ Ingestion Complete! ${allQuestions.length} questions imported to src/data/imported_questions.ts`);
}

runIngestion();
