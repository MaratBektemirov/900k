import { defineConfig } from "vite";
import path from "node:path";
export default defineConfig({
  root: __dirname,
  base: process.env.BASE_PATH ?? "/",

  build: {
    outDir: path.resolve(__dirname, "../dist-site"),
    emptyOutDir: true,
    sourcemap: true,
  },
});
