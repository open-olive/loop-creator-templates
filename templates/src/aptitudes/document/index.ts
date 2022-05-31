import documentExample from './documentExample.ts.squirrelly';
import documentExampleTest from './documentExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  documentExampleTest: {
    fileName: 'documentExample.test.ts',
    aptitude: 'document',
  },
  documentExample: { fileName: 'documentExample.ts', aptitude: 'document' },
};

export default {
  documentExample,
  documentExampleTest,
  fileMap,
};
