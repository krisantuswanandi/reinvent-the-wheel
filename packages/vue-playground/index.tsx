import { createApp, ref, type Component } from "vue";

const App: Component = {
  setup() {
    const count = ref(0);

    function onClick() {
      count.value++;
    }

    return () => (
      <div style="color: red; font-family: sans-serif">
        <div>Count: {count.value}</div>
        <div style="margin: 4px 0">
          <button onClick={onClick}>Increment</button>
        </div>
        <img src="https://cataas.com/cat" width="200px" alt="Meow" />
      </div>
    );
  },
};

const app = createApp(App);
app.mount("#app");
