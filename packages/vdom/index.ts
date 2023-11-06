/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

type Attributes = Record<string, any>;

export type VElement =
  | {
      tagName: string;
      attributes: Attributes;
      children: VElement[];
    }
  | string
  | number
  | boolean
  | null
  | undefined;

export function createElement(
  tagName = "",
  attributes: Attributes = {},
  ...children: (VElement | VElement[])[]
) {
  const vElement: VElement = {
    tagName,
    attributes,
    children: children.flat(),
  };
  return vElement;
}

export function render(vElement: VElement) {
  if (
    vElement === null ||
    vElement === undefined ||
    typeof vElement === "boolean"
  ) {
    return;
  }

  if (typeof vElement === "string" || typeof vElement === "number") {
    return document.createTextNode(vElement.toString());
  } else if (typeof vElement === "object") {
    const element = document.createElement(vElement.tagName);

    if (vElement.attributes) {
      Object.keys(vElement.attributes).forEach((key) => {
        if (key.startsWith("on")) {
          const event = key.substring(2).toLowerCase();
          element.addEventListener(event, vElement.attributes[key]);
        } else {
          element.setAttribute(key, vElement.attributes[key]);
        }
      });
    }

    if (vElement.children && Array.isArray(vElement.children)) {
      vElement.children.forEach((child) => {
        const childElement = render(child);

        if (childElement) {
          element.append(childElement);
        }
      });
    }

    return element;
  }

  return;
}

export type { JSX } from "./types";
