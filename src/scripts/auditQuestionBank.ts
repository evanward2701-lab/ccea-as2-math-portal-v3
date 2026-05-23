import { QUESTIONS } from '../modules/AS2/data/questions';
import { VISUAL_MANIFEST } from '../modules/AS2/visualManifest';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runAudit() {
  console.log('🔍 Auditing Integrated Question Bank (Upgraded)...');

  const stats = {
    total: QUESTIONS.length,
    byModule: {} as Record<string, number>,
    missingSolutions: [] as string[],
    generatedOnly: [] as string[],
    finalAnswerOnly: [] as string[],
    withVisuals: 0,
    unresolvedPlaceholders: [] as string[],
    duplicateIDs: [] as string[],
    suspiciousParts: [] as string[]
  };

  const idCounts = new Map<string, number>();

  QUESTIONS.forEach(q => {
    // 1. Duplicate Check
    idCounts.set(q.id, (idCounts.get(q.id) || 0) + 1);
    if (idCounts.get(q.id)! > 1) {
      stats.duplicateIDs.push(q.id);
    }

    // 2. Module Stats
    stats.byModule[q.moduleId] = (stats.byModule[q.moduleId] || 0) + 1;

    // 3. Solution Quality
    const ms = q.markSchemeMarkdown.toLowerCase();
    if (!ms || ms.includes('solution protocol unavailable') || ms.includes('pending recovery')) {
      stats.missingSolutions.push(q.id);
    } else if (ms.includes('generated solution shown for study support')) {
      stats.generatedOnly.push(q.id);
    } else if (ms.includes('displaying final answer only')) {
      stats.finalAnswerOnly.push(q.id);
    }

    // 4. Visual Placeholder Audit
    if (q.visualId) stats.withVisuals++;
    const placeholders = (q.questionMarkdown + q.markSchemeMarkdown).match(/\[(?:VISUAL|INTERACTIVE) (?:PLACEHOLDER|REFERENCE):\s*([^\]|]+)/gi);
    if (placeholders) {
      placeholders.forEach(p => {
        const id = p.match(/:\s*([^\]|]+)/)?.[1].trim();
        if (id && !VISUAL_MANIFEST[id]) {
          stats.unresolvedPlaceholders.push(`${q.id}: ${id}`);
        }
      });
    }

    // 5. Structure Check
    if (q.questionMarkdown.includes('Part I(ii)')) {
       stats.suspiciousParts.push(q.id);
    }
  });

  const report = {
    summary: {
      totalQuestions: stats.total,
      moduleBreakdown: stats.byModule,
      questionsWithMainVisual: stats.withVisuals,
      duplicateIDCount: stats.duplicateIDs.length
    },
    qualityGaps: {
      missingSolutionsCount: stats.missingSolutions.length,
      generatedOnlyCount: stats.generatedOnly.length,
      finalAnswerOnlyCount: stats.finalAnswerOnly.length,
      missingSolutionsList: stats.missingSolutions,
      duplicateIDs: stats.duplicateIDs
    },
    visualAudit: {
      unresolvedCount: stats.unresolvedPlaceholders.length,
      unresolvedList: stats.unresolvedPlaceholders
    }
  };

  const reportPath = path.join(__dirname, '../modules/AS2/data/generated/bankAudit.json');
  if (!fs.existsSync(path.dirname(reportPath))) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  }
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log(`\n✅ Audit Complete.`);
  console.log(`Total Questions: ${stats.total}`);
  console.log(`Unresolved Visuals: ${stats.unresolvedPlaceholders.length}`);
  console.log(`Report saved to: ${reportPath}`);
}

runAudit();
