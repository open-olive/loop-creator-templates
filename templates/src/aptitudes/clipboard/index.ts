import clipboardListenerTest from './clipboardListener.test.ts.squirrelly';
import clipboardListener from './clipboardListener.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  clipboardListenerTest: {
    fileName: 'clipboardListener.test.ts',
    aptitude: 'clipboard'
  },
  clipboardListener: { fileName: 'clipboardListener.ts', aptitude: 'clipboard' }
};

export default {
  clipboardListenerTest,
  clipboardListener,
  fileMap
};
