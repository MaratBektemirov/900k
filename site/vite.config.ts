import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  root: __dirname,

  resolve: {
    alias: {
      site: __dirname,
    },
  },

  base:
    process.env.GITHUB_DOMAIN === "yes"
      ? process.env.BASE_PATH ?? "/"
      : "/",

  build: {
    outDir: path.resolve(__dirname, "../dist-site"),
    emptyOutDir: true,
    sourcemap: true,
  },
});
