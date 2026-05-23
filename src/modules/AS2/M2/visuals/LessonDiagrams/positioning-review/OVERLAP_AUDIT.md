# M2 Diagram Positioning Review

Generated from a browser-rendered audit of `/lessons/M2-Lesson` after fixing the shared `DiagramLabel` transform.

## Diagrams Copied Here For Later Cleanup

| Diagram | Source component | Audit notes |
|---|---|---|
| Fig 1. Velocity-Time Graph Shapes | `M2KinematicsMaster.tsx` | Axis labels overlap and one velocity-axis label sits partly outside the panel. |
| Fig 2. Traffic Lights Triangular Model | `M2KinematicsMaster.tsx` | Small labels around the triangle/area annotation overlap. |
| Fig. Dynamic Velocity-Time Graph | `M2VelocityTimeGraphEngine.tsx` | Axis labels overlap with simple `t`/`v` labels; velocity-axis label is partly outside the panel. |
| Fig. SUVAT Sign Convention Comparison | `M2SignConventionSplit.tsx` | `g`, `u`, `a`, and sign labels overlap in the rendered split diagram. |

## Checked And Not Copied

The audit did not find rendered label collisions in:

- `M2CrossingAxisVTGraph.tsx`
- `M2SuvatMatrix.tsx`
- `M2GravitySignConvention.tsx`
- `M2VectorMagnitudeTrap.tsx`
