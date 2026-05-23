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

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const reactId = useId();
  const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let isMounted = true;

    mermaid
      .render(diagramId, chart)
      .then(({ svg }) => {
        if (isMounted) setSvg(svg);
      })
      .catch((error) => {
        console.error("Mermaid render failed", error);
        if (isMounted) setSvg("");
      });

    return () => {
      isMounted = false;
    };
  }, [chart, diagramId]);

  return (
    <div
      className="mermaid-diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
