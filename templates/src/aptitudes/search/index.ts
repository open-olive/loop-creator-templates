import searchExample from './searchExample.ts.squirrelly';
import searchExampleTest from './searchExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  searchExampleTest: {
    fileName: 'searchExample.test.ts',
    aptitude: 'search',
  },
  searchExample: { fileName: 'searchExample.ts', aptitude: 'search' },
};

export default {
  searchExample,
  searchExampleTest,
  fileMap,
};
