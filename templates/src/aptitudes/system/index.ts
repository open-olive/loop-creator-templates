import systemExample from './systemExample.ts.squirrelly';
import systemExampleTest from './systemExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
    systemExampleTest: {
        fileName: 'systemExample.test.ts',
        aptitude: 'system'
      },
    systemExample: { fileName: 'systemExample.ts', aptitude: 'system' }
  };

export default {
    systemExample,
    systemExampleTest,
    fileMap
};
