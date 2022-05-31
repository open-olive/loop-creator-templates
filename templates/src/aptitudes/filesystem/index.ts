import filesystemExampleTest from './filesystemExample.test.ts.squirrelly';
import filesystemExample from './filesystemExample.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  filesystemExampleTest: {
    fileName: 'filesystemExample.test.ts',
    aptitude: 'filesystem'
  },
  filesystemExample: { fileName: 'filesystemExample.ts', aptitude: 'filesystem' }
};

export default {
  filesystemExampleTest,
  filesystemExample,
  fileMap
};
