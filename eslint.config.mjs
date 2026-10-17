import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    "dist/**",
    ".astro/**",
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
  ]),
]);

export default eslintConfig;
