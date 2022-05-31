import networkExampleTest from './networkExample.test.ts.squirrelly';
import networkExample from './networkExample.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  networkExampleTest: { fileName: 'networkExample.test.ts', aptitude: 'network' },
  networkExample: { fileName: 'networkExample.ts', aptitude: 'network' }
};

export default {
  networkExampleTest,
  networkExample,
  fileMap
};
