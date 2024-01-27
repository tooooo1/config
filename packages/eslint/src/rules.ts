import type { Linter } from "eslint";

export const rules = {
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
} satisfies Linter.FlatConfig["rules"];
