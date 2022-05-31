import vaultExampleTest from './vaultExample.test.ts.squirrelly';
import vaultExample from './vaultExample.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
    vaultExampleTest: {
    fileName: 'vaultExample.test.ts',
    aptitude: 'vault'
  },
  vaultExample: { fileName: 'vaultExample.ts', aptitude: 'vault' }
};

export default {
  vaultExampleTest,
  vaultExample,
  fileMap
};
