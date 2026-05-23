# M1 Diagram Positioning Review

Generated from a browser-rendered audit of `/lessons/M1-Lesson`.

## Shared Fix Already Applied

- `DiagramLabel` had an invalid CSS transform: `translate(-50%, -50%)`.
- This has been corrected to `translate(-50%, -50%)` in `src/core/diagram-engine/primitives/DiagramLabel.tsx`.
- This affects all overlay labels and should reduce a lot of accidental drift.

## Diagrams Copied Here For Later Cleanup

These diagrams still had label-overlap warnings after the shared transform fix:

| Diagram | Source component | Audit notes |
|---|---|---|
| Lift Physics Isolation | `LiftPhysicsSVG.tsx` | Formula/force labels and bottom legend overlap in the rendered panel. |
| Fig 2. Scalar vs Vector | `ScalarVectorSVG.tsx` | Vector component labels overlap with the vector explanation card. |
| Fig. Kinematic Notation Legend | `M1KinematicNotationPanel.tsx` | `O` and `origin` labels overlap slightly. |
| Fig. Interactive Free-Body Diagram | `M1FreeBodyDiagram.tsx` | Object and force labels overlap in the default rendered state. |

## Checked And Not Copied

The audit did not find rendered label collisions in:

- `M1SIUnitDerivationMermaid.tsx`
- `ScalarVectorSpatialMapSVG.tsx`
- `ModellingAssumptionsSVG.tsx`
- `M1ModellingSandboxSVG.tsx`
- `TowingModelSVG.tsx`
- `M1ModellingSummaryTable.tsx`

`TowingModelSVG.tsx` produced an initial false positive because an intentional outline rectangle sits inside the larger background rectangle.
