import src from './src';
import eslintrc from './.eslintrc.squirrelly';
import gitignore from './.gitignore.squirrelly';
import prettierrc from './.prettierrc.squirrelly';
import packageJson from './package.json.squirrelly';
import readme from './README.md.squirrelly';
import tsconfig from './tsconfig.json.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  src: { fileName: 'src', aptitude: 'any' },
  eslintrc: { fileName: '.eslintrc', aptitude: 'any' },
  gitignore: { fileName: '.gitignore', aptitude: 'any' },
  prettierrc: { fileName: '.prettierrc', aptitude: 'any' },
  packageJson: { fileName: 'package.json', aptitude: 'any' },
  readme: { fileName: 'README.md', aptitude: 'any' },
  tsconfig: { fileName: 'tsconfig.json', aptitude: 'any' }
};

export default {
  src,
  eslintrc,
  gitignore,
  prettierrc,
  packageJson,
  readme,
  tsconfig,
  fileMap
};
