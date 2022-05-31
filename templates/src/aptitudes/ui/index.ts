import openHandlerTest from './openHandler.test.ts.squirrelly';
import openHandler from './openHandler.ts.squirrelly';
import searchListenerTest from './searchListener.test.ts.squirrelly';
import searchListener from './searchListener.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  openHandlerTest: { fileName: 'openHandler.test.ts', aptitude: 'any' },
  openHandler: { fileName: 'openHandler.ts', aptitude: 'any' },
  searchListenerTest: { fileName: 'searchListener.test.ts', aptitude: 'ui' },
  searchListener: { fileName: 'searchListener.ts', aptitude: 'ui' }
};

export default {
  openHandlerTest,
  openHandler,
  searchListenerTest,
  searchListener,
  fileMap
};
