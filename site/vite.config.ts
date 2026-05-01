import { defineConfig } from "vite";
import path from "node:path";
import fs from "node:fs/promises";

const staticAssetsPlugin = () => ({
  name: "copy-static-assets",
  apply: "build" as const,
  async closeBundle() {
    await fs.cp(
      path.resolve(__dirname, "assets"),
      path.resolve(__dirname, "../dist-site/assets"),
      { recursive: true, force: true }
    );
  },
});

export default defineConfig({
  root: __dirname,
  plugins: [staticAssetsPlugin()],

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
