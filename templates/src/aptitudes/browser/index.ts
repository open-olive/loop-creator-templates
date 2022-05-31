import browserExample from './browserExample.ts.squirrelly';
import browserExampleTest from './browserExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
    browserExampleTest: {
    fileName: 'browserExample.test.ts',
    aptitude: 'browser',
  },
  browserExample: { fileName: 'browserExample.ts', aptitude: 'browser' },
};

export default {
    browserExampleTest,
    browserExample,
    fileMap,
};
