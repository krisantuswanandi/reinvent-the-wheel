import { createApp, createElement, type Component } from "vue";

const App: Component = {
  setup() {
    return () => {
      return createElement(
        "div",
        { style: "color: red; font-family: sans-serif" },
        [
          createElement("div", { style: "margin-bottom: 8px" }, [
            "Hello World!!!",
          ]),
          createElement("img", {
            src: "https://cataas.com/cat",
            width: "200px",
          }),
        ]
      );
    };
  },
};

const app = createApp(App);
app.mount("#app");
