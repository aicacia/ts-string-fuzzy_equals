import { dirname } from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import esmImportToUrl from "rollup-plugin-esm-import-to-url";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: dirname(pkg.module),
        format: "es",
        sourcemap: true,
        preserveModules: true,
        plugins: [terser()],
      },
    ],
    plugins: [
      esmImportToUrl({
        imports: {
          tslib: "https://unpkg.com/tslib@2/tslib.es6.js",
        },
      }),
      resolve({ browser: true }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.esm.json",
      }),
    ],
  },
];
