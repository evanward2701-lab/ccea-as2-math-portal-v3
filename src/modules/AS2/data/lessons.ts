import { M1_MODULE } from '../M1/data/lessons';
import { M2_MODULE } from '../M2/data/lessons';
import { M3_MODULE } from '../M3/data/lessons';
import { S1_MODULE } from '../S1/data/lessons';
import { S2_MODULE } from '../S2/data/lessons';
import { S3_MODULE } from '../S3/data/lessons';
import { S4_MODULE } from '../S4/data/lessons';

export const LESSONS = [
  ...M1_MODULE.lessons,
  ...M2_MODULE.lessons,
  ...M3_MODULE.lessons,
  ...S1_MODULE.lessons,
  ...S2_MODULE.lessons,
  ...S3_MODULE.lessons,
  ...S4_MODULE.lessons,
];
