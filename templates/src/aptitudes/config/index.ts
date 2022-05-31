import configExample from './configExample.ts.squirrelly';
import configExampleTest from './configExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
    configExampleTest: {
        fileName: 'configExample.test.ts',
        aptitude: 'config'
      },
    configExample: { fileName: 'configExample.ts', aptitude: 'config' }
  };

export default {
    configExample,
    configExampleTest,
    fileMap
};
