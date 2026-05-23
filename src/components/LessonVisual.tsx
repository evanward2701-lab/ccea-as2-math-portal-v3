import { VisualRegistry, ModuleKey } from "./Visuals/registry";

// ==========================================
// ROUTER COMPONENT
// ==========================================

interface LessonVisualProps {
  visualId: string;
}

/**
 * Maps incoming lesson visual IDs (e.g., "M1-Towing") to the specific
 * React component exported from the module's diagrams folder.
 */
const VISUAL_MAPPING: Record<string, { module: ModuleKey; component: string }> = {
  // M1
  "M1-Bridge": { module: "M1", component: "M1FmaBridgeMermaid" },
  "M1-ScalarVector": { module: "M1", component: "ScalarVectorSVG" },
  "M1-Modelling": { module: "M1", component: "ModellingAssumptionsSVG" },
  "M1-Towing": { module: "M1", component: "TowingModelSVG" },
  "M1-Lift": { module: "M1", component: "LiftPhysicsSVG" },
  "M1-ExamTrap": { module: "M1", component: "M1ExamTrapSVG" },
  "M1-SIUnits": { module: "M1", component: "M1SIUnitDerivationMermaid" },
  "M1-ScalarVectorMap": { module: "M1", component: "ScalarVectorSpatialMapSVG" },
  "M1-ModellingSandbox": { module: "M1", component: "M1ModellingSandboxSVG" },
  "M1-FreeBody": { module: "M1", component: "M1FreeBodyDiagram" },
  "M1-ModellingTable": { module: "M1", component: "M1ModellingSummaryTable" },
  "M1-Notation": { module: "M1", component: "M1KinematicNotationPanel" },

  // M2
  "M2-VTS": { module: "M2", component: "M2KinematicsMaster" },
  "M2-Traffic": { module: "M2", component: "M2VectorMagnitudeTrap" },
  "M2-Gravity": { module: "M2", component: "M2GravitySignConvention" },
  "M2-VTCrossing": { module: "M2", component: "M2CrossingAxisVTGraph" },
  "M2-SignConventionSplit": { module: "M2", component: "M2SignConventionSplit" },
  "M2-VTGraphEngine": { module: "M2", component: "M2VelocityTimeGraphEngine" },
  "M2-SUVATMatrix": { module: "M2", component: "M2SuvatMatrix" },
  "M2-KinematicTrack": { module: "M2", component: "M2KinematicTrack" },

  // M3
  "M3-Rough": { module: "M3", component: "RoughHorizontalPlaneSVG" },
  "M3-Pulley": { module: "M3", component: "PulleySystemSVG" },
  "M3-Incline": { module: "M3", component: "InclinedPlaneSVG" },
  "M3-Inclined": { module: "M3", component: "InclinedPlaneSVG" }, // Alias
  "M3-Lift": { module: "M3", component: "LiftSystemSVG" },
  "M3-Connected": { module: "M3", component: "ConnectedInclinedPulleySVG" },
  "M3-Flow": { module: "M3", component: "M3ConnectedParticlesMermaid" },
  "M3-InclineResolver": { module: "M3", component: "M3InclinedPlaneResolver" },
  "M3-PulleyEngine": { module: "M3", component: "M3ConnectedParticlesEngine" },
  "M3-FrictionSimulator": { module: "M3", component: "M3FrictionSimulator" },

  // S1
  "S1-Tree": { module: "S1", component: "DataTypeTree" },
  "S1-Sampling": { module: "S1", component: "SamplingTableSVG" },
  "S1-Stratified": { module: "S1", component: "StratifiedProportionVisual" },
  "S1-TaxonomyDecision": { module: "S1", component: "S1TaxonomyDecisionTree" },
  "S1-HistogramBoundaries": { module: "S1", component: "S1HistogramBoundaryMorph" },
  "S1-StratifiedSampler": { module: "S1", component: "S1StratifiedSamplingSimulator" },

  // S2
  "S2-StdDev": { module: "S2", component: "StdDevDecisionTree" },
  "S2-Histogram": { module: "S2", component: "HistogramDensitySVG" },
  "S2-PMCC": { module: "S2", component: "PMCCPanelSVG" },
  "S2-Scatter": { module: "S2", component: "ScatterClustersSVG" },
  "S2-Interpolate": { module: "S2", component: "InterpolationLineSVG" },
  "S2-Residual": { module: "S2", component: "ResidualAnalysisSVG" },
  "S2-FrequencyDensityEngine": { module: "S2", component: "S2FrequencyDensityAreaEngine" },
  "S2-CFBoxPlot": { module: "S2", component: "S2CumulativeBoxPlotProjector" },
  "S2-OutlierSandbox": { module: "S2", component: "S2OutlierThresholdSandbox" },
  "S2-ResidualClassifier": { module: "S2", component: "S2ResidualPatternClassifier" },

  // S3
  "S3-Tree": { module: "S3", component: "ProbabilityTree" },
  "S3-Venn": { module: "S3", component: "VennMutExSVG" },
  "S3-Table": { module: "S3", component: "TwoWayTableSVG" },
  "S3-BayesResolution": { module: "S3", component: "BayesResolutionSVG" },
  "S3-Bayes": { module: "S3", component: "BayesResolutionSVG" }, // Alias
  "S3-DynamicVenn": { module: "S3", component: "S3DynamicVennSpaceEngine" },
  "S3-ConditionalTable": { module: "S3", component: "S3ConditionalMatrixReducer" },
  "S3-TreeEngine": { module: "S3", component: "S3ProbabilityTreeEngine" },

  // S4
  "S4-Binomial": { module: "S4", component: "BinomialTree" },
  "S4-BinomialTree": { module: "S4", component: "BinomialTree" }, // Alias
  "S4-Inequality": { module: "S4", component: "InequalityPanelSVG" },
  "S4-Normal": { module: "S4", component: "NormalDistributionSVG" },
  "S4-BinomialConditions": { module: "S4", component: "BinomialConditionsChecklistSVG" },
  "S4-BinomialEngine": { module: "S4", component: "S4BinomialMorphEngine" },
  "S4-ContinuityCorrection": { module: "S4", component: "S4ContinuityCorrectionLens" },
  "S4-NormalStandardizer": { module: "S4", component: "S4NormalStandardizer" },
  "S4-InequalityTranslator": { module: "S4", component: "S4InequalityTranslator" },
};

export function LessonVisual({ visualId }: LessonVisualProps) {
  const mapping = VISUAL_MAPPING[visualId];

  if (!mapping) {
    console.warn(`Visual ID "${visualId}" not found in LessonVisual.tsx mapping.`);
    return (
      <div className="my-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-400">
        Diagram unavailable: {visualId}
      </div>
    );
  }

  const { module, component } = mapping;
  const ModuleRegistry = VisualRegistry[module];
  const Component = (ModuleRegistry as any)[component];

  if (!Component) {
    console.error(`Component "${component}" not found in module "${module}" registry.`);
    return (
      <div className="my-8 rounded-2xl border border-rose-800/40 bg-rose-900/10 p-6 text-sm text-rose-400">
        Error loading diagram: {component}
      </div>
    );
  }

  return <Component />;
}
