/**
 * An object to map how a template should render
 * @fileName The file name, including extension, of the template after its rendered
 * @aptitude The aptitude that this template uses. `'any'` is for files that render
 * no matter what. `'nonzero'` is like `'any'`, but only renders if there's at least
 * one aptitude in the project.
 */
export type TemplateFile = {
  fileName: string;
  aptitude:
    | 'any'
    | 'nonzero'
    | 'browser'
    | 'clipboard'
    | 'cursor'
    | 'config'
    | 'document'
    | 'filesystem'
    | 'keyboard'
    | 'network'
    | 'process'
    | 'search'
    | 'system'
    | 'ui'
    | 'user'
    | 'vault'
    | 'window';
};

export type FileMap = {
  [key: string]: TemplateFile;
};

export type TemplatesObject = {
  [key: string]: string | object;
  fileMap: FileMap;
};
