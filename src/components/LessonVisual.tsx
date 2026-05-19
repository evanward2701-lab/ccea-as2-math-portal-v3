import React from "react";

// ==========================================
// IMPORTS: MECHANICS (M1 - M3)
// ==========================================

// M1 Imports
import { FMaBridge } from "./Visuals/M1/M1-Mermaid";
import { 
  ScalarVectorSVG, 
  ModellingAssumptionsSVG, 
  TowingModelSVG, 
  LiftPhysicsSVG 
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

const VISUAL_ID_ALIASES: Record<string, string> = {
  M1: "M1-Bridge",
  "M3-RoughPlane": "M3-Rough",
  "M3-LiftSystem": "M3-Lift",
  "S1-DataTree": "S1-Tree",
  "S4-BinomialTree": "S4-Binomial",
};

export function LessonVisual({ visualId }: LessonVisualProps) {
  const canonicalVisualId = normalizeVisualId(visualId);

  switch (canonicalVisualId) {
    // ------------------------------------------
    // MECHANICS M1
    // ------------------------------------------
    case "M1-Bridge": return <FMaBridge />;
    case "M1-ScalarVector": return <ScalarVectorSVG />;
    case "M1-Modelling": return <ModellingAssumptionsSVG />;
    case "M1-Towing": return <TowingModelSVG />;
    case "M1-Lift": return <LiftPhysicsSVG />;

    // ------------------------------------------
    // MECHANICS M2
    // ------------------------------------------
    case "M2-VTS": return <VTSshapesSVG />;
    case "M2-Traffic": return <TrafficLightTriangleSVG />;
    case "M2-Gravity": return <VerticalSignConventionSVG />;

    // ------------------------------------------
    // MECHANICS M3
    // ------------------------------------------
    case "M3-Rough": return <RoughHorizontalPlaneSVG />;
    case "M3-Pulley": return <PulleySystemSVG />;
    case "M3-Inclined": return <InclinedPlaneSVG />;
    case "M3-Lift": return <LiftSystemSVG />;

    // ------------------------------------------
    // STATISTICS S1
    // ------------------------------------------
    case "S1-Tree": return <DataTypeTree />;
    case "S1-Sampling": return <SamplingTableSVG />;

    // ------------------------------------------
    // STATISTICS S2
    // ------------------------------------------
    case "S2-StdDev": return <StdDevDecisionTree />;
    case "S2-Histogram": return <HistogramDensitySVG />;
    case "S2-PMCC": return <PMCCPanelSVG />;
    case "S2-Scatter": return <ScatterClustersSVG />;
    case "S2-Interpolate": return <InterpolationLineSVG />;

    // ------------------------------------------
    // STATISTICS S3
    // ------------------------------------------
    case "S3-Tree": return <ProbabilityTree />;
    case "S3-Venn": return <VennMutExSVG />;
    case "S3-Table": return <TwoWayTableSVG />;

    // ------------------------------------------
    // STATISTICS S4
    // ------------------------------------------
    case "S4-Binomial": return <BinomialTree />;
    case "S4-Inequality": return <InequalityPanelSVG />;
    case "S4-Normal": return <NormalDistributionSVG />;

    // ------------------------------------------
    // FALLBACK
    // ------------------------------------------
    default:
      console.warn(`Visual ID "${visualId}" not found in LessonVisual.tsx router.`);
      return null;
  }
}

function normalizeVisualId(visualId: string) {
  return VISUAL_ID_ALIASES[visualId] ?? visualId;
}
