/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

type Attributes = Record<string, string>;

export type VElement =
  | {
      tagName: string;
      attributes: Attributes;
      children: VElement | VElement[] | string;
    }
  | string
  | null
  | undefined;

export function createElement(
  tagName = "",
  attributes: Attributes = {},
  ...children: VElement[]
) {
  return {
    tagName,
    attributes,
    children,
  } as VElement;
}

export function render(vElement: VElement) {
  if (!vElement) {
    return;
  }

  if (typeof vElement === "string") {
    return document.createTextNode(vElement);
  }

  const element = document.createElement(vElement.tagName);

  Object.keys(vElement.attributes).forEach((key) => {
    element.setAttribute(key, vElement.attributes[key]);
  });

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

export type { JSX } from "./types";
