import React from "react";

// ==========================================
// IMPORTS: MECHANICS (M1 - M3)
// ==========================================

// M1 Imports
import { FMaBridge } from "./Visuals/M1/M1-Mermaid";
import { 
  ScalarVectorSVG, 
  ModellingAssumptionsSVG, 
  TowingModelSVG 
} from "./Visuals/M1/M1-SVG";

// M2 Imports 
import {
  VTSshapesSVG,
  TrafficLightTriangleSVG,
  VerticalSignConventionSVG
} from "./Visuals/M2/M2-SVG";

// M3 Imports
import {
  RoughHorizontalPlaneSVG,
  PulleySystemSVG,
  InclinedPlaneSVG,
  LiftSystemSVG
} from "./Visuals/M3/M3-SVG";


// ==========================================
// IMPORTS: STATISTICS (S1 - S4)
// ==========================================

// S1 Imports
import { DataTypeTree } from "./Visuals/S1/S1-Mermaid";
import { SamplingTableSVG } from "./Visuals/S1/S1-SVG";

// S2 Imports
import { StdDevDecisionTree } from "./Visuals/S2/S2-Mermaid";
import {
  HistogramDensitySVG,
  PMCCPanelSVG,
  ScatterClustersSVG,
  InterpolationLineSVG
} from "./Visuals/S2/S2-SVG";

// S3 Imports
import { ProbabilityTree } from "./Visuals/S3/S3-Mermaid";
import { VennMutExSVG, TwoWayTableSVG } from "./Visuals/S3/S3-SVG";

// S4 Imports
import { BinomialTree } from "./Visuals/S4/S4-Mermaid";
import { InequalityPanelSVG, NormalDistributionSVG } from "./Visuals/S4/S4-SVG";


// ==========================================
// ROUTER COMPONENT
// ==========================================

interface LessonVisualProps {
  visualId: string;
}

export function LessonVisual({ visualId }: LessonVisualProps) {
  switch (visualId) {
    
    // ------------------------------------------
    // MECHANICS M1
    // ------------------------------------------
    case "M1": return <FMaBridge />;
    case "M2-1": return <ScalarVectorSVG />; 
    case "M3-1": return <ModellingAssumptionsSVG />;
    case "Q-M1-tow": return <TowingModelSVG />;

    // ------------------------------------------
    // MECHANICS M2 (Kinematics) 
    // ------------------------------------------
    case "M2-VTS": return <VTSshapesSVG />;
    case "M2-Traffic": return <TrafficLightTriangleSVG />;
    case "M2-Gravity": return <VerticalSignConventionSVG />;

    // ------------------------------------------
    // MECHANICS M3 (Dynamics)
    // ------------------------------------------
    case "M3-RoughPlane": return <RoughHorizontalPlaneSVG />;
    case "M3-Pulley": return <PulleySystemSVG />;
    case "M3-InclinedPlane": return <InclinedPlaneSVG />;
    case "M3-LiftSystem": return <LiftSystemSVG />;

    // ------------------------------------------
    // STATISTICS S1 (Data & Sampling)
    // ------------------------------------------
    case "S1-DataTree": return <DataTypeTree />;
    case "S1-Sampling": return <SamplingTableSVG />;

    // ------------------------------------------
    // STATISTICS S2 (Data Presentation)
    // ------------------------------------------
    case "S2-Histogram": return <HistogramDensitySVG />;
    case "S2-PMCC": return <PMCCPanelSVG />;
    case "S2-Scatter": return <ScatterClustersSVG />;
    case "S2-StdDev": return <StdDevDecisionTree />;
    case "S2-Interpolate": return <InterpolationLineSVG />;

    // ------------------------------------------
    // STATISTICS S3 (Probability)
    // ------------------------------------------
    case "S3-Venn": return <VennMutExSVG />;
    case "S3-Table": return <TwoWayTableSVG />;
    case "S3-Tree": return <ProbabilityTree />;

    // ------------------------------------------
    // STATISTICS S4 (Distributions)
    // ------------------------------------------
    case "S4-BinomialTree": return <BinomialTree />;
    case "S4-Inequality": return <InequalityPanelSVG />;
    case "S4-NormalCurve": return <NormalDistributionSVG />;

    // ------------------------------------------
    // FALLBACK
    // ------------------------------------------
    default:
      console.warn(`Visual ID "${visualId}" not found in LessonVisual.tsx router.`);
      return null;
  }
}