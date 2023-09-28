/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { render, type VElement } from "vdom";

export interface Component {
  setup: () => () => VElement;
}

let update: null | (() => void) = null;

export function ref<T>(initialValue: T) {
  return new Proxy(
    { value: initialValue },
    {
      get(target, key) {
        if (key !== "value") {
          return;
        }
        return target[key];
      },
      set(target, key, value) {
        if (key !== "value") {
          return false;
        }

        target[key] = value;

        if (update) {
          update();
        }
        return true;
      },
    }
  );
}

export function createApp(rootComponent: Component) {
  return {
    mount(selector: string) {
      let rootContainer = document.querySelector(selector);

      if (!rootContainer) {
        return;
      }

      const componentRender = rootComponent.setup();

      update = () => {
        const rootVElement = componentRender();
        const rootElement = render(rootVElement);

        if (rootContainer && rootElement) {
          rootContainer.replaceChildren(rootElement);
        }
      };

      update();
    },
  };
}

export * from "vdom";
