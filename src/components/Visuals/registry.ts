import * as M1 from './M1';
import * as M2 from './M2';
import * as M3 from './M3';
import * as S1 from './S1';
import * as S2 from './S2';
import * as S3 from './S3';
import * as S4 from './S4';

export const VisualRegistry = { M1, M2, M3, S1, S2, S3, S4 } as const;
export type ModuleKey = keyof typeof VisualRegistry;
