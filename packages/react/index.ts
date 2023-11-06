import { render, type VElement } from "vdom";

export type Component = () => VElement;

let update: (() => void) | null = null;

const states: any[] = [];
let stateIndex = 0;

export function useState<T>(initialState: T) {
  const _stateIndex = stateIndex++;
  states[_stateIndex] = states[_stateIndex] ?? initialState;

  function setState(state: T) {
    states[_stateIndex] = state;
    if (update) {
      update();
    }
  }

  return [states[_stateIndex], setState];
}

export function createRoot(rootContainer: Element) {
  return {
    render(rootComponent: Component) {
      if (!rootContainer) {
        return;
      }

      update = () => {
        stateIndex = 0;
        const rootVElement = rootComponent();
        const rootElement = render(rootVElement);

        if (rootElement) {
          rootContainer.replaceChildren(rootElement);
        }
      };

      update();
    },
  };
}

export * from "vdom";
