declare module 'react-mermaid2' {
  import React from 'react';
  
  interface MermaidProps {
    chart: string;
  }
  
  const Mermaid: React.FC<MermaidProps>;
  export default Mermaid;
}