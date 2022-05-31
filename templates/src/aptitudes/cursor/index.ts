import cursorListener from './cursorListener.ts.squirrelly';
import cursorListenerTest from './cursorListener.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  cursorListenerTest: {
    fileName: 'cursorListener.test.ts',
    aptitude: 'cursor',
  },
  cursorListener: { fileName: 'cursorListener.ts', aptitude: 'cursor' },
};

export default {
  cursorListenerTest,
  cursorListener,
  fileMap,
};
