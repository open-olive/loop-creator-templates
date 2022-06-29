import cursorExample from './cursorExample.ts.squirrelly';
import cursorExampleTest from './cursorExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  cursorExampleTest: {
    fileName: 'cursorExample.test.ts',
    aptitude: 'cursor',
  },
  cursorExample: { fileName: 'cursorExample.ts', aptitude: 'cursor' },
};

export default {
  cursorExampleTest,
  cursorExample,
  fileMap,
};
