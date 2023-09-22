/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot, type Component } from "react";

const App: Component = () => {
  return (
    <div style="color: red; font-family: sans-serif">
      <div style="margin-bottom: 8">Hello World!!!</div>
      <img src="https://cataas.com/cat" width="200px" alt="Meow" />
    </div>
  );
};

const container = document.getElementById("app");

if (container) {
  const app = createRoot(container);
  app.render(App);
}
