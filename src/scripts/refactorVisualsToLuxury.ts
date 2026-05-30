import fs from 'fs';
import path from 'path';

function walkDir(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(file));
    } else { 
      if (file.endsWith('.tsx') && file.includes('/visuals/')) {
        results.push(file);
      }
    }
  });
  return results;
}

const targetDir = path.join(process.cwd(), 'src/modules');
const files = walkDir(targetDir);

const COLOR_REPLACEMENTS: [RegExp, string | ((match: string) => string)][] = [
  // Backgrounds
  [/bg-zinc-950(?:\/\d+)?/g, 'bg-card'],
  [/bg-zinc-925/g, 'bg-card'],
  [/bg-zinc-900(?:\/\d+)?/g, 'bg-primary/5'],
  [/bg-zinc-800(?:\/\d+)?/g, 'bg-muted/30'],
  [/bg-zinc-700(?:\/\d+)?/g, 'bg-muted/50'],
  
  // Borders
  [/border-zinc-800(?:\/\d+)?/g, 'border-primary/20'],
  [/border-zinc-700(?:\/\d+)?/g, 'border-primary/10'],
  [/border-zinc-600(?:\/\d+)?/g, 'border-border'],

  // Text colors
  [/text-zinc-500/g, 'text-muted-foreground'],
  [/text-zinc-400/g, 'text-muted-foreground'],
  [/text-zinc-300/g, 'text-foreground'],
  [/text-zinc-200/g, 'text-foreground'],
  [/text-zinc-100/g, 'text-foreground'],
  [/text-zinc-50/g, 'text-foreground'],

  // Emerald/Blue/Amber to Primary (soft gold)
  [/(?:bg|border|text)-emerald-\d+(?:\/\d+)?/g, (match) => match.replace(/emerald-\d+/, 'primary')],
  [/(?:bg|border|text)-amber-\d+(?:\/\d+)?/g, (match) => match.replace(/amber-\d+/, 'primary')],
  [/(?:bg|border|text)-blue-\d+(?:\/\d+)?/g, (match) => match.replace(/blue-\d+/, 'primary')],

  // Rose to Destructive
  [/(?:bg|border|text)-rose-\d+(?:\/\d+)?/g, (match) => match.replace(/rose-\d+/, 'destructive')],

  // Hex codes typically used in inline SVGs (dark mode)
  [/"#09090b"/g, '"var(--background)"'],
  [/"#18181b"/g, '"var(--card)"'],
  [/"#27272a"/g, '"var(--border)"'],
  [/"#ffffff"/g, '"var(--foreground)"'],
  [/"#a1a1aa"/g, '"var(--muted-foreground)"'],
  [/"#71717a"/g, '"var(--muted-foreground)"'],
];

let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // 1. Semantic Class Replacements
  for (const [regex, replacement] of COLOR_REPLACEMENTS) {
    if (regex.test(content)) {
      if (typeof replacement === 'function') {
        content = content.replace(regex, replacement as any);
      } else {
        content = content.replace(regex, replacement as string);
      }
      modified = true;
    }
  }

  // 2. SVG Wrapper Replacement
  // Matches: <div className="..." dangerouslySetInnerHTML={{ __html: svgSource }} />
  // Note: the className could span multiple lines, so we use [\s\S]*?
  const dangerouslySetInnerHTMLRegex = /<div\s+className="([^"]+)"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*([a-zA-Z0-9_]+)\s*\}\}\s*\/>/g;
  
  if (dangerouslySetInnerHTMLRegex.test(content)) {
    content = content.replace(dangerouslySetInnerHTMLRegex, '<LuxurySVGWrapper svgSource={$2} className="$1" />');
    modified = true;
  }
  
  // Ensure LuxurySVGWrapper is imported if used
  if (content.includes('<LuxurySVGWrapper') && !content.includes("import { LuxurySVGWrapper }")) {
    const importStatement = `import { LuxurySVGWrapper } from '@/core/diagram-engine/LuxurySVGWrapper';\n`;
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const nextLineIndex = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, nextLineIndex + 1) + importStatement + content.slice(nextLineIndex + 1);
    } else {
      content = importStatement + content;
    }
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Refactored: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nSuccessfully refactored ${updatedCount} visual files.`);
