import { useEffect, useId, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  theme: "dark",
  themeVariables: {
    background: "transparent",
    primaryColor: "#27272a",     // zinc-800
    primaryTextColor: "#f4f4f5", // zinc-100
    lineColor: "#52525b",        // zinc-600
  }
});

interface MermaidDiagramProps {
  chart: string;
}

function quoteLabel(label: string): string {
  const trimmed = label.trim();
  if (/^["'`]/.test(trimmed)) return label;
  return `"${label.replace(/"/g, '\\"')}"`;
}

function sanitizeMermaidChart(chart: string): string {
  return chart
    .replace(/(^|[\s>;])([A-Za-z][\w-]*)\[\[([^\]\n]+)\]\]/g, (_match, prefix, node, label) => `${prefix}${node}[[${quoteLabel(label)}]]`)
    .replace(/(^|[\s>;])([A-Za-z][\w-]*)\{\{([^}\n]+)\}\}/g, (_match, prefix, node, label) => `${prefix}${node}{{${quoteLabel(label)}}}`)
    .replace(/(^|[\s>;])([A-Za-z][\w-]*)\{([^}\n]+)\}/g, (_match, prefix, node, label) => `${prefix}${node}{${quoteLabel(label)}}`)
    .replace(/(^|[\s>;])([A-Za-z][\w-]*)\(\[([^\]\n]+)\]\)/g, (_match, prefix, node, label) => `${prefix}${node}([${quoteLabel(label)}])`)
    .replace(/(^|[\s>;])([A-Za-z][\w-]*)\(\(([^)\n]+)\)\)/g, (_match, prefix, node, label) => `${prefix}${node}((${quoteLabel(label)}))`)
    .replace(/(^|[\s>;])([A-Za-z][\w-]*)\[([^\]\n]+)\]/g, (_match, prefix, node, label) => `${prefix}${node}[${quoteLabel(label)}]`);
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const reactId = useId();
  const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [svg, setSvg] = useState("");
  const [fallbackChart, setFallbackChart] = useState("");

  useEffect(() => {
    let isMounted = true;
    const renderableChart = sanitizeMermaidChart(chart);

    mermaid
      .render(diagramId, renderableChart)
      .then(({ svg }) => {
        if (isMounted) {
          setSvg(svg);
          setFallbackChart("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setSvg("");
          setFallbackChart(chart);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [chart, diagramId]);

  if (fallbackChart) {
    return (
      <pre className="w-full whitespace-pre-wrap rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 text-left font-mono text-xs leading-relaxed text-zinc-300">
        {fallbackChart}
      </pre>
    );
  }

  return (
    <div
      className="mermaid-diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
