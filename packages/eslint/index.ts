import type { Linter } from "eslint";
// @ts-ignore
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import { rules } from "./src/rules";

export const config = {
  files: ["**/*.{js,jsx,ts,tsx}"],
  rules,
  plugins: {
    "simple-import-sort": simpleImportSortPlugin,
  } as Linter.FlatConfig["plugins"],
} satisfies Linter.FlatConfig;
