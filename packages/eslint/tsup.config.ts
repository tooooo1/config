import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  target: [
    "chrome51",
    "firefox53",
    "edge18",
    "safari11",
    "ios11",
    "opera38",
    "es6",
    "node14",
  ],
  sourcemap: true,
  dts: true,
});
