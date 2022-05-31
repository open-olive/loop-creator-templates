import aptitudes from './aptitudes';
import whispers from './whispers';
import indexTest from './index.test.ts.squirrelly';
import index from './index.ts.squirrelly';
import jestGlobalSetup from './jestGlobalSetup.js.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  aptitudes: { fileName: 'aptitudes', aptitude: 'any' },
  whispers: { fileName: 'whispers', aptitude: 'any' },
  indexTest: { fileName: 'index.test.ts', aptitude: 'any' },
  index: { fileName: 'index.ts', aptitude: 'any' },
  jestGlobalSetup: { fileName: 'jestGlobalSetup.js', aptitude: 'any' }
};

export default {
  aptitudes,
  whispers,
  indexTest,
  index,
  jestGlobalSetup,
  fileMap
};
