import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxInject: "import { createElement } from 'vue'",
    jsxFactory: "createElement",
  },
});
