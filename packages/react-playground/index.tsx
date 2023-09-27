/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot, type Component } from "react";

const App: Component = () => {
  function onClick() {
    alert("Hello World!!!");
  }

  return (
    <div style="color: red; font-family: sans-serif">
      <div>Hello World!!!</div>
      <div style="margin: 4px 0">
        <button onClick={onClick}>Click me</button>
      </div>
      <img src="https://cataas.com/cat" width="200px" alt="Meow" />
    </div>
  );
};

const container = document.getElementById("app");

if (container) {
  const app = createRoot(container);
  app.render(App);
}
