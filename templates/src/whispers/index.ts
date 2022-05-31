import browserWhisperTest from './BrowserWhisper.test.ts.squirrelly';
import browserWhisper from './BrowserWhisper.ts.squirrelly';
import clipboardWhisperTest from './ClipboardWhisper.test.ts.squirrelly';
import clipboardWhisper from './ClipboardWhisper.ts.squirrelly';
import cursorWhisperTest from './CursorWhisper.test.ts.squirrelly';
import cursorWhisper from './CursorWhisper.ts.squirrelly';
import configWhisperTest from './ConfigWhisper.test.ts.squirrelly';
import configWhisper from './ConfigWhisper.ts.squirrelly';
import documentWhisper from './DocumentWhisper.ts.squirrelly';
import documentWhisperTest from './DocumentWhisper.test.ts.squirrelly';
import filesystemWhisperTest from './FilesystemWhisper.test.ts.squirrelly';
import filesystemWhisper from './FilesystemWhisper.ts.squirrelly';
import index from './index.ts.squirrelly';
import introWhisperTest from './IntroWhisper.test.ts.squirrelly';
import introWhisper from './IntroWhisper.ts.squirrelly';
import introWhisperSimpleTest from './IntroWhisperSimple.test.ts.squirrelly';
import introWhisperSimple from './IntroWhisperSimple.ts.squirrelly';
import keyboardWhisperTest from './KeyboardWhisper.test.ts.squirrelly';
import keyboardWhisper from './KeyboardWhisper.ts.squirrelly';
import networkWhisperTest from './NetworkWhisper.test.ts.squirrelly';
import networkWhisper from './NetworkWhisper.ts.squirrelly';
import processWhisperTest from './ProcessWhisper.test.ts.squirrelly';
import processWhisper from './ProcessWhisper.ts.squirrelly';
import searchWhisper from './SearchWhisper.ts.squirrelly';
import searchWhisperTest from './SearchWhisper.test.ts.squirrelly';
import systemWhisperTest from './SystemWhisper.test.ts.squirrelly';
import systemWhisper from './SystemWhisper.ts.squirrelly';
import uiWhisperTest from './UiWhisper.test.ts.squirrelly';
import uiWhisper from './UiWhisper.ts.squirrelly';
import userWhisperTest from './UserWhisper.test.ts.squirrelly';
import userWhisper from './UserWhisper.ts.squirrelly';
import vaultWhisperTest from './VaultWhisper.test.ts.squirrelly';
import vaultWhisper from './VaultWhisper.ts.squirrelly';
import windowWhisperTest from './WindowWhisper.test.ts.squirrelly';
import windowWhisper from './WindowWhisper.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  browserWhisperTest: {
    fileName: 'BrowserWhisper.test.ts',
    aptitude: 'browser'
  },
  browserWhisper: {
    fileName: 'BrowserWhisper.ts',
    aptitude: 'browser'
  },
  clipboardWhisperTest: {
    fileName: 'ClipboardWhisper.test.ts',
    aptitude: 'clipboard',
  },
  clipboardWhisper: { fileName: 'ClipboardWhisper.ts', aptitude: 'clipboard' },
  cursorWhisperTest: { fileName: 'CursorWhisper.test.ts', aptitude: 'cursor' },
  cursorWhisper: { fileName: 'CursorWhisper.ts', aptitude: 'cursor' },
  configWhisperTest: { fileName: 'ConfigWhisper.test.ts', aptitude: 'config'},
  configWhisper: { fileName: 'ConfigWhisper.ts', aptitude: 'config' },
  documentWhisperTest: {
    fileName: 'DocumentWhisper.test.ts',
    aptitude: 'document',
  },
  documentWhisper: { fileName: 'DocumentWhisper.ts', aptitude: 'document' },
  filesystemWhisperTest: {
    fileName: 'FilesystemWhisper.test.ts',
    aptitude: 'filesystem',
  },
  filesystemWhisper: {
    fileName: 'FilesystemWhisper.ts',
    aptitude: 'filesystem',
  },
  index: { fileName: 'index.ts', aptitude: 'any' },
  introWhisperTest: { fileName: 'IntroWhisper.test.ts', aptitude: 'any' },
  introWhisper: { fileName: 'IntroWhisper.ts', aptitude: 'any' },
  introWhisperSimpleTest: {
    fileName: 'IntroWhisperSimple.test.ts',
    aptitude: 'any',
  },
  introWhisperSimple: { fileName: 'IntroWhisperSimple.ts', aptitude: 'any' },
  keyboardWhisperTest: {
    fileName: 'KeyboardWhisper.test.ts',
    aptitude: 'keyboard',
  },
  keyboardWhisper: { fileName: 'KeyboardWhisper.ts', aptitude: 'keyboard' },
  networkWhisperTest: {
    fileName: 'NetworkWhisper.test.ts',
    aptitude: 'network',
  },
  networkWhisper: { fileName: 'NetworkWhisper.ts', aptitude: 'network' },
  processWhisperTest: {
    fileName: 'ProcessWhisper.test.ts',
    aptitude: 'process',
  },
  processWhisper: { fileName: 'ProcessWhisper.ts', aptitude: 'process' },
  searchWhisper: { fileName: 'SearchWhisper.ts', aptitude: 'search' },
  searchWhisperTest: {
    fileName: 'SearchWhisper.test.ts',
    aptitude: 'search',
  },
  systemWhisperTest: {
    fileName: 'SystemWhisper.test.ts',
    aptitude: 'system',
  },
  systemWhisper: { fileName: 'SystemWhisper.ts', aptitude: 'system'},
  uiWhisperTest: { fileName: 'UiWhisper.test.ts', aptitude: 'ui' },
  uiWhisper: { fileName: 'UiWhisper.ts', aptitude: 'ui' },
  userWhisperTest: { fileName: 'UserWhisper.test.ts', aptitude: 'user' },
  userWhisper: { fileName: 'UserWhisper.ts', aptitude: 'user' },
  vaultWhisperTest: { fileName: 'VaultWhisper.test.ts', aptitude: 'vault' },
  vaultWhisper: { fileName: 'VaultWhisper.ts', aptitude: 'vault' },
  windowWhisperTest: { fileName: 'WindowWhisper.test.ts', aptitude: 'window' },
  windowWhisper: { fileName: 'WindowWhisper.ts', aptitude: 'window' },
};

export default {
  browserWhisperTest,
  browserWhisper,
  clipboardWhisperTest,
  clipboardWhisper,
  cursorWhisperTest,
  cursorWhisper,
  configWhisperTest,
  configWhisper,
  documentWhisper,
  documentWhisperTest,
  filesystemWhisperTest,
  filesystemWhisper,
  index,
  introWhisperTest,
  introWhisper,
  introWhisperSimpleTest,
  introWhisperSimple,
  keyboardWhisperTest,
  keyboardWhisper,
  networkWhisperTest,
  networkWhisper,
  processWhisperTest,
  processWhisper,
  searchWhisper,
  searchWhisperTest,
  systemWhisperTest,
  systemWhisper,
  uiWhisperTest,
  uiWhisper,
  userWhisperTest,
  userWhisper,
  vaultWhisperTest,
  vaultWhisper,
  windowWhisperTest,
  windowWhisper,
  fileMap,
};
