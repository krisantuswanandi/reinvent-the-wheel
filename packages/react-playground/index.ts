/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot, createElement, type Component } from "react";

const App: Component = () => {
  return createElement(
    "div",
    { style: "color: red; font-family: sans-serif" },
    [
      createElement("div", { style: "margin-bottom: 8px" }, ["Hello World!!!"]),
      createElement("img", {
        src: "https://cataas.com/cat",
        width: "200px",
      }),
    ]
  );
};

const container = document.getElementById("app");

if (container) {
  const app = createRoot(container);
  app.render(App);
}
