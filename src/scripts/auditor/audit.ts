import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { LESSONS } from '../../data/lessons.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SPEC_PATH = path.join(__dirname, './ccea-as2-spec.md');

interface LearningOutcome {
  id: string;
  text: string;
}

function runAudit() {
  console.log('\x1b[1m\x1b[34m--- CCEA Master Topic Index Audit ---\x1b[0m\n');

  if (!fs.existsSync(SPEC_PATH)) {
    console.error('Error: ccea-as2-spec.md not found.');
    return;
  }

  const specContent = fs.readFileSync(SPEC_PATH, 'utf-8');
  const lines = specContent.split('\n');

  const unitMap: Record<string, LearningOutcome[]> = {};
  let currentUnit = '';

  // 1. Parse Spec File
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    // Detect Unit Header (e.g., # AS2, # A22)
    if (trimmed.startsWith('# ')) {
      currentUnit = trimmed.replace('# ', '');
      unitMap[currentUnit] = [];
      return;
    }

    // Detect LO line: [ID] text
    const match = trimmed.match(/^\[(.*?)\]\s+(.*)$/);
    if (match && currentUnit) {
      unitMap[currentUnit].push({
        id: match[1],
        text: match[2]
      });
    }
  });

  // 2. Gather Covered IDs from lessons.ts
  const coveredIds = new Set<string>();
  LESSONS.forEach(lesson => {
    if (lesson.loIds) {
      lesson.loIds.forEach(id => coveredIds.add(id.trim()));
    }
  });

  // 3. Generate Report
  Object.keys(unitMap).forEach(unitName => {
    console.log(`\x1b[1m\x1b[36m[Unit: ${unitName}]\x1b[0m`);
    
    const outcomes = unitMap[unitName];
    const covered = outcomes.filter(lo => coveredIds.has(lo.id));
    const missing = outcomes.filter(lo => !coveredIds.has(lo.id));

    console.log('\x1b[32m[✓] Found:\x1b[0m');
    if (covered.length === 0) {
      console.log('  (None)');
    } else {
      covered.forEach(lo => {
        console.log(`  \x1b[2m[${lo.id}]\x1b[0m ${lo.text.substring(0, 80)}${lo.text.length > 80 ? '...' : ''}`);
      });
    }

    console.log('\x1b[31m[✗] Missing:\x1b[0m');
    if (missing.length === 0) {
      console.log('  (None)');
    } else {
      missing.forEach(lo => {
        console.log(`  \x1b[31m[${lo.id}]\x1b[0m ${lo.text.substring(0, 80)}${lo.text.length > 80 ? '...' : ''}`);
      });
    }

    console.log(''); // Spacing
  });

  const totalLOs = Object.values(unitMap).flat().length;
  const totalCovered = outcomesCoveredCount(unitMap, coveredIds);
  const percentage = ((totalCovered / totalLOs) * 100).toFixed(1);

  console.log(`\x1b[1m--- Audit Summary ---\x1b[0m`);
  console.log(`Coverage: ${totalCovered} / ${totalLOs} (${percentage}%)`);
}

function outcomesCoveredCount(unitMap: Record<string, LearningOutcome[]>, coveredIds: Set<string>): number {
  let count = 0;
  Object.values(unitMap).forEach(outcomes => {
    outcomes.forEach(lo => {
      if (coveredIds.has(lo.id)) count++;
    });
  });
  return count;
}

runAudit();
