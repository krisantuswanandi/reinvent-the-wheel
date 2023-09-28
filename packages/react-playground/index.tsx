/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot, useState, type Component } from "react";

const App: Component = () => {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <div style="color: red; font-family: sans-serif">
      <div>Count: {count}</div>
      <div style="margin: 4px 0">
        <button onClick={onClick}>Increment</button>
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
