import { defineConfig } from "tsup";

export default defineConfig({
  target: "es2022",
  format: ["cjs", "esm"],
  entry: ["./src/**/*.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
