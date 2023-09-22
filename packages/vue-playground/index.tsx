import { createApp, type Component } from "vue";

const App: Component = {
  setup() {
    return () => (
      <div style="color: red; font-family: sans-serif">
        <div style="margin-bottom: 8">Hello World!!!</div>
        <img src="https://cataas.com/cat" width="200px" alt="Meow" />
      </div>
    );
  },
};

const app = createApp(App);
app.mount("#app");
