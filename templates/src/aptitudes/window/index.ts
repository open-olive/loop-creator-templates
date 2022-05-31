import activeWindowListenerTest from './activeWindowListener.test.ts.squirrelly';
import activeWindowListener from './activeWindowListener.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  activeWindowListenerTest: { fileName: 'activeWindowListener.test.ts', aptitude: 'window' },
  activeWindowListener: { fileName: 'activeWindowListener.ts', aptitude: 'window' }
};

export default {
  activeWindowListenerTest,
  activeWindowListener,
  fileMap
};
