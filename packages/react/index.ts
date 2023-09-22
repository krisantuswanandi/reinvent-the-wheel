import { render, type VElement } from "vdom";

export type Component = () => VElement;

export function createRoot(rootContainer: Element) {
  return {
    render(rootComponent: Component) {
      if (!rootContainer) {
        return;
      }

      const rootVElement = rootComponent();
      const rootElement = render(rootVElement);

      if (rootElement) {
        rootContainer.append(rootElement);
      }
    },
  };
}

export * from "vdom";
