import * as M1 from './M1';
import * as M2 from './M2';
import * as M3 from './M3';
import * as S1 from './S1';
import * as S2 from './S2';
import * as S3 from './S3';
import * as S4 from './S4';

export const VisualRegistry = { M1, M2, M3, S1, S2, S3, S4 } as const;
export type ModuleKey = keyof typeof VisualRegistry;

/**
 * AS2-Specific Short ID Mapping
 */
export const AS2_SHORT_ID_MAPPING: Record<string, { module: ModuleKey; component: string }> = {
  // M1
  "M1-Bridge": { module: "M1", component: "FmaBridgeSVG" },
  "M1-ScalarVector": { module: "M1", component: "ScalarVectorSVG" },
  "M1-Modelling": { module: "M1", component: "ModellingAssumptionsSVG" },
  "M1-Towing": { module: "M1", component: "TowingModelSVG" },
  "M1-Lift": { module: "M1", component: "LiftPhysicsSVG" },
  "M1-ExamTrap": { module: "M1", component: "M1ExamTrapSVG" },
  "M1-SIUnits": { module: "M1", component: "M1SIUnitDerivationSVG" },
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
