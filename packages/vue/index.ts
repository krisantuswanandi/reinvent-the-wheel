/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { render, type VElement } from "vdom";

export interface Component {
  setup: () => () => VElement;
}

export function createApp(rootComponent: Component) {
  return {
    mount(selector: string) {
      let rootContainer = document.querySelector(selector);

      if (!rootContainer) {
        return;
      }

      const componentRender = rootComponent.setup();
      const rootVElement = componentRender();

      const rootElement = render(rootVElement);

      if (rootElement) {
        rootContainer.append(rootElement);
      }
    },
  };
}

export * from "vdom";
