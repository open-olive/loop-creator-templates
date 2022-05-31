import keyboardListenerTest from './keyboardListener.test.ts.squirrelly';
import keyboardListener from './keyboardListener.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  keyboardListenerTest: { fileName: 'keyboardListener.test.ts', aptitude: 'keyboard' },
  keyboardListener: { fileName: 'keyboardListener.ts', aptitude: 'keyboard' }
};

export default {
  keyboardListenerTest,
  keyboardListener,
  fileMap
};
