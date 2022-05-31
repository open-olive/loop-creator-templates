# loop-creator-templates

These are the template files shared and used by our loop creator tools, such as:

- Our `@oliveai/create-loop` [npx command](https://www.npmjs.com/package/@oliveai/create-loop)
- Our [VSCode extension](https://marketplace.visualstudio.com/items?itemName=Olive-AI.vscode-loop-development-kit)

While anybody can technically install this library, it's really only useful to the tools above. If
you're looking to create a loop from a template, we recommend using one of them!

![Flowchart](./loop_generator_flowchart.jpg)

## Overview

- The template files make use of the [Squirrelly template engine](https://squirrelly.js.org/)
and end with `.squirrelly`.
- Every directory contains an `index.ts` containing a `fileMap` object.
    - `fileMap` objects follow this structure, where the `key` is the name of an imported template file or directory of templates:

```ts
{
  [key: string]: {
    fileName: string, // Name that the file should be given when rendered
    aptitude: string, // An enum that determines which aptitudes will cause this to render
  }
}
```

- The loop creators, `loop-creator-npx` and `loop-creator-vscode`, recursively loop through the `fileMap` objects in each directory and determine which files to render based on the aptitudes that the user selects.

## Development

### Prerequisites

- Node
    - Check if you have it: run `node --version` in your terminal, should return a version number
    - If you don’t have it, use [NVM](https://github.com/nvm-sh/nvm)

### Creating/Updating Template Files

There is no VSCode extension for enabling syntax highlighting or other language features for Squirrelly template files. For creating templates, we've found the best luck with one of two methods:

1. Write the "final" code as a standard TypeScript file, then change the file extension to Squirrelly and "template" the TypeScript syntax so it only renders if the user selects TypeScript.
    - We recommend creating a JavaScript Loop to confirm you didn't miss any of the TypeScript syntax, as trying to build a JS file with TS syntax in it will immediately point it out.
2. Put `<script>` at the top of the file and `</script>` at the bottom, then change the language in VSCode to Handlebars. You can freely write JavaScript with templating and get syntax highlighting.

### Development Steps

1. Make changes/additions to the template files and any relevant `fileMap` objects.
2. Run `npm run build` to compile the templates into importable code.
3. Move to the loop creator directory.
4. Update the dependency to point this project as a relative path. Example:

    ```json
    "dependencies": {
        ...
        "@oliveai/loop-templates": "file:../loop-creator-templates",
        ...
    }
    ```

5. Run `npm install`
6. Run `npm run dev` -- this is effectively the same as running `npx @oliveai/create-loop` but it's just using your local script instead of the script in the npm registry.

This will create a Loop with the changes you made in the templates.
