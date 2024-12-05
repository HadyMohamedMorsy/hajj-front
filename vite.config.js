import { sync } from "glob";
import { resolve } from "path";
import { ViteMinifyPlugin } from "vite-plugin-minify";
export default {
  resolve: {
    alias: {
      "@js": resolve(__dirname, "src/assets/ts"),
    },
  },
  plugins: [ViteMinifyPlugin()],
  appType: "mpa",
  root: "./src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync([
        "./src/**/*.html".replace(/\\/g, "/"),
        "./src/pages/**/*.html".replace(/\\/g, "/"),
      ]),
    },
  },
};
