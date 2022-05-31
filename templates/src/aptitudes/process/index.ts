import processExampleTest from "./processExample.test.ts.squirrelly";
import processExample from "./processExample.ts.squirrelly";
import { FileMap } from "@/types";

const fileMap: FileMap = {
  processExampleTest: {
    fileName: "processExample.test.ts",
    aptitude: "process",
  },
  processExample: { fileName: "processExample.ts", aptitude: "process" },
};

export default {
  processExampleTest,
  processExample,
  fileMap,
};
