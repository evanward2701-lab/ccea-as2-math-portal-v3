// ==========================================
// IMPORTS: MECHANICS (M1 - M3)
// ==========================================

// M1 Imports
import { FMaBridge, SIUnitDerivationTree } from "./Visuals/M1/M1-Mermaid";
import { 
  ScalarVectorSVG, 
  ModellingAssumptionsSVG, 
  TowingModelSVG, 
  LiftPhysicsSVG,
  M1ExamTrapSVG,
  ScalarVectorSpatialMapSVG,
  M1FreeBodyDiagram,
  M1KinematicNotationPanel
} from "./Visuals/M1/M1-SVG";

// M2 Imports - UPDATED TO MATCH REFACTORED COMPONENT NAMES
import {
  M2KinematicsMaster,
  M2GravitySignConvention,
  M2VectorMagnitudeTrap,
  M2VelocityTimeGraphEngine,
  M2SuvatMatrix,
  M2KinematicTrack,
  M2SignConventionSplit
} from "./Visuals/M2/M2-SVG";

// M3 Imports
import { M3ConnectedParticlesMermaid } from './Visuals/M3/M3-Mermaid';
import { 
  RoughHorizontalPlaneSVG, 
  PulleySystemSVG, 
  InclinedPlaneSVG, 
  LiftSystemSVG, 
  ConnectedInclinedPulleySVG,
  M3InclinedPlaneResolver,
  M3ConnectedParticlesEngine,
  M3FrictionSimulator
} from './Visuals/M3/M3-SVG';


// ==========================================
// IMPORTS: STATISTICS (S1 - S4)
// ==========================================

// S1 Imports
import { DataTypeTree } from "./Visuals/S1/S1-Mermaid";
import {
  SamplingTableSVG,
  StratifiedProportionVisual,
  S1TaxonomyDecisionTree,
  S1HistogramBoundaryMorph,
  S1StratifiedSamplingSimulator
} from "./Visuals/S1/S1-SVG"; 

// S2 Imports
import { StdDevDecisionTree } from "./Visuals/S2/S2-Mermaid";
import {
  HistogramDensitySVG,
  PMCCPanelSVG,
  ScatterClustersSVG,
  InterpolationLineSVG,
  ResidualAnalysisSVG,
  S2FrequencyDensityAreaEngine,
  S2CumulativeBoxPlotProjector,
  S2OutlierThresholdSandbox,
  S2ResidualPatternClassifier
} from "./Visuals/S2/S2-SVG";

// S3 Imports
import { ProbabilityTree } from "./Visuals/S3/S3-Mermaid";
import {
  VennMutExSVG,
  TwoWayTableSVG,
  BayesResolutionSVG,
  S3DynamicVennSpaceEngine,
  S3ConditionalMatrixReducer,
  S3ProbabilityTreeEngine
} from "./Visuals/S3/S3-SVG";

// S4 Imports 
import { BinomialTree } from "./Visuals/S4/S4-Mermaid";
import {
  InequalityPanelSVG,
  NormalDistributionSVG,
  BinomialConditionsChecklistSVG,
  S4BinomialMorphEngine,
  S4ContinuityCorrectionLens,
  S4NormalStandardizer,
  S4InequalityTranslator
} from "./Visuals/S4/S4-SVG";


// ==========================================
// ROUTER COMPONENT
// ==========================================

interface LessonVisualProps {
  visualId: string;
}

const VISUAL_ID_ALIASES: Record<string, string> = {
  "M3-Inclined": "M3-Incline",
  "S4-BinomialTree": "S4-Binomial",
  "S3-Bayes": "S3-BayesResolution",
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
    case "M1-ExamTrap": return <M1ExamTrapSVG />;
    case "M1-SIUnits": return <SIUnitDerivationTree />;
    case "M1-ScalarVectorMap": return <ScalarVectorSpatialMapSVG />;
    case "M1-ModellingSandbox": return <ModellingAssumptionsSVG />;
    case "M1-FreeBody": return <M1FreeBodyDiagram />;
    case "M2-VTGraphEngine": return <M2VelocityTimeGraphEngine />;
    case "M2-SUVATMatrix": return <M2SuvatMatrix />;
    case "M2-KinematicTrack": return <M2KinematicTrack />;
    case "M1-Notation": return <M1KinematicNotationPanel />;

    // ------------------------------------------
    // MECHANICS M2 
    // ------------------------------------------
    case "M2-VTS": return <M2KinematicsMaster />;
    case "M2-Traffic": return <M2VectorMagnitudeTrap />;
    case "M2-Gravity": return <M2GravitySignConvention />;
    case "M2-SignConventionSplit": return <M2SignConventionSplit />;
    
    // ------------------------------------------
    // MECHANICS M3
    // ------------------------------------------
    case "M3-Rough": return <RoughHorizontalPlaneSVG />;
    case "M3-Pulley": return <PulleySystemSVG />;
    case "M3-Incline": return <InclinedPlaneSVG />;
    case "M3-Lift": return <LiftSystemSVG />;
    case "M3-Connected": return <ConnectedInclinedPulleySVG />;
    case "M3-Flow": return <M3ConnectedParticlesMermaid />;
    case "M3-InclineResolver": return <M3InclinedPlaneResolver />;
    case "M3-PulleyEngine": return <M3ConnectedParticlesEngine />;
    case "M3-FrictionSimulator": return <M3FrictionSimulator />;

    // ------------------------------------------
    // STATISTICS S1
    // ------------------------------------------
    case "S1-Tree": return <DataTypeTree />;
    case "S1-Sampling": return <SamplingTableSVG />;
    case "S1-Stratified": return <StratifiedProportionVisual />; 
    case "S1-TaxonomyDecision": return <S1TaxonomyDecisionTree />;
    case "S1-HistogramBoundaries": return <S1HistogramBoundaryMorph />;
    case "S1-StratifiedSampler": return <S1StratifiedSamplingSimulator />;


    // ------------------------------------------
    // STATISTICS S2
    // ------------------------------------------
    case "S2-StdDev": return <StdDevDecisionTree />;
    case "S2-Histogram": return <HistogramDensitySVG />;
    case "S2-PMCC": return <PMCCPanelSVG />;
    case "S2-Scatter": return <ScatterClustersSVG />;
    case "S2-Interpolate": return <InterpolationLineSVG />;
    case "S2-Residual": return <ResidualAnalysisSVG />;
    case "S2-FrequencyDensityEngine": return <S2FrequencyDensityAreaEngine />;
    case "S2-CFBoxPlot": return <S2CumulativeBoxPlotProjector />;
    case "S2-OutlierSandbox": return <S2OutlierThresholdSandbox />;
    case "S2-ResidualClassifier": return <S2ResidualPatternClassifier />;

    // ------------------------------------------
    // STATISTICS S3
    // ------------------------------------------
    case "S3-Tree": return <ProbabilityTree />;
    case "S3-Venn": return <VennMutExSVG />;
    case "S3-Table": return <TwoWayTableSVG />;
    case "S3-BayesResolution": return <BayesResolutionSVG />;
    case "S3-DynamicVenn": return <S3DynamicVennSpaceEngine />;
    case "S3-ConditionalTable": return <S3ConditionalMatrixReducer />;
    case "S3-TreeEngine": return <S3ProbabilityTreeEngine />;

// ------------------------------------------
    // STATISTICS S4
    // ------------------------------------------
    case "S4-Binomial": return <BinomialTree />;
    case "S4-Inequality": return <InequalityPanelSVG />;
    case "S4-Normal": return <NormalDistributionSVG />;
    case "S4-BinomialConditions": return <BinomialConditionsChecklistSVG />;
    case "S4-BinomialEngine": return <S4BinomialMorphEngine />;
    case "S4-ContinuityCorrection": return <S4ContinuityCorrectionLens />;
    case "S4-NormalStandardizer": return <S4NormalStandardizer />;
    case "S4-InequalityTranslator": return <S4InequalityTranslator />;

    // ------------------------------------------
    // FALLBACK
    // ------------------------------------------
    default:
      console.warn(`Visual ID "${visualId}" not found in LessonVisual.tsx router.`);
      return (
        <div className="my-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-400">
          Diagram unavailable: {visualId}
        </div>
      );
  }
}

function normalizeVisualId(visualId: string) {
  return VISUAL_ID_ALIASES[visualId] ?? visualId;
}
