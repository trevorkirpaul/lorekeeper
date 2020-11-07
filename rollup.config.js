// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    name: "MyBundle",
  },
  plugins: [typescript(), uglify()],
  external: ["discord.js", "dotenv", "lodash", "mongoose"],
};
