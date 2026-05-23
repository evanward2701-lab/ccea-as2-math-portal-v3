import { M1_MODULE } from './modules/M1';
import { M2_MODULE } from './modules/M2';
import { M3_MODULE } from './modules/M3';
import { S1_MODULE } from './modules/S1';
import { S2_MODULE } from './modules/S2';
import { S3_MODULE } from './modules/S3';
import { S4_MODULE } from './modules/S4';

export const LESSONS = [
  ...M1_MODULE.lessons,
  ...M2_MODULE.lessons,
  ...M3_MODULE.lessons,
  ...S1_MODULE.lessons,
  ...S2_MODULE.lessons,
  ...S3_MODULE.lessons,
  ...S4_MODULE.lessons,
];
