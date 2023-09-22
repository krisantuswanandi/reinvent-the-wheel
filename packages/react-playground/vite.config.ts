import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxInject: "import { createElement } from 'react'",
    jsxFactory: "createElement",
  },
});
