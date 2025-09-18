import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/constants/index.ts",
    "src/utils/index.ts",
    "src/types/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
  splitting: false,
  shims: true,
});
