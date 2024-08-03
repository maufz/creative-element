import type { ElementAttributesMap } from "./types";

const handleAttribute = <ElType extends HTMLElementTagNameMap[Tag], Tag extends keyof HTMLElementTagNameMap>(
  el: ElType,
  key: string,
  value: ElementAttributesMap[Tag]
) => {
  if ((typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number') && key in el) {
    el[key as keyof ElType] = value;
  }
  else if (typeof value === "object" && (key === "data" || key === "aria")) {
    for (const attributeObject in value) {
      el.setAttribute(`${key}-${attributeObject}`, String(value[attributeObject]));
    }
  }
  else if (typeof value === "string" || typeof value === "number") {
    el.setAttribute(key, String(value));
  }
  else {
    console.warn('Invalid attribute value for key: "' + key + '"');
  }
};

export const element = <Tag extends keyof HTMLElementTagNameMap>(
  tag: Tag,
  attributes?: ElementAttributesMap[Tag],
  ...content: (string | HTMLElement | DocumentFragment)[]
): HTMLElementTagNameMap[Tag] => {
  // Create the element
  const el = document.createElement(String(tag)) as HTMLElementTagNameMap[Tag];

  // Handle element attributes
  if (typeof attributes === "object" && !Array.isArray(attributes)) {
    for (const attributeKey in attributes) {
      handleAttribute<HTMLElementTagNameMap[Tag], Tag>(el, attributeKey, attributes[attributeKey]);
    }
  }

  // Insert a text node or append an element / fragment
  const contentFragment = document.createDocumentFragment();
  content.forEach((element) => {
    if (typeof element === "string") {
      contentFragment.appendChild(document.createTextNode(element));
    } else if (
      element instanceof HTMLElement ||
      element instanceof DocumentFragment
    ) {
      contentFragment.appendChild(element);
    }
  });
  el.appendChild(contentFragment);

  return el;
};

export default element;
