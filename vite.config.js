import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import terser from "@rollup/plugin-terser";
import path from "path";
import fs from "fs";
function readFileContentAsString(filepath) {
  try {
    return fs.readFileSync(filepath, "utf-8");
  } catch (err) {
    console.error(`Error reading file ${filepath}:`, err);
    return "";
  }
}

function VitePluginReadFiles() {
  return {
    name: "vite-plugin-read-files",
    transform(code, id) {
      if (id.endsWith(".svelte")) {
        const cssPath = path.resolve(path.dirname(id), "Xuggon.css");
        const cssContent = readFileContentAsString(cssPath);
        code = code.replace(
          "<script>",
          `<script>
           const css = \`${cssContent}\`;
           `
        );
        // console.log(cssContent, id, code);
      }
      return code;
    },
  };
}
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: `${__dirname}/dist`,
    emptyOutDir: true,
    minify: true,
    cssCodeSplit: false,
    manifest: true,
    target: "esnext",
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          let typePath = "static/styles";
          const type = asset.name.split(".").at(1);
          if (/png|jpe?g|webp|svg|gif|tiff|bmp|ico/i.test(type)) {
            typePath = "static/images";
          }
          return `${typePath}/[name]-[hash][extname]`;
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        plugins: [terser()],
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
