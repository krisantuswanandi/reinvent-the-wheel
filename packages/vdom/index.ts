/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

type Attributes = Record<string, string>;

export type VElement =
  | {
      tagName: string;
      attributes: Attributes;
      children: VElement[];
    }
  | string;

export function createElement(
  tagName = "",
  attributes: Attributes = {},
  children: VElement[] = []
) {
  return {
    tagName,
    attributes,
    children,
  } as VElement;
}

export function render(vElement: VElement) {
  if (typeof vElement === "string") {
    return document.createTextNode(vElement);
  }

  const element = document.createElement(vElement.tagName);

  Object.keys(vElement.attributes).forEach((key) => {
    element.setAttribute(key, vElement.attributes[key]);
  });

  vElement.children.forEach((child) => {
    const childElement = render(child);
    element.append(childElement);
  });

  return element;
}
