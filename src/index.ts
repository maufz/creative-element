type Stringable = string | number;

interface AttributeObject {
  [key: string]: Stringable | AttributeObject;
}

// Recursive function that sets the attributes
const handleAttribute = <ElType extends HTMLElement>(
  el: ElType,
  key: string,
  value: Stringable | AttributeObject
) => {
  if (typeof value === "string" || typeof value === "number") {
    el.setAttribute(key, String(value));
  } else if (typeof value === "object") {
    for (const attributeObject in value) {
      handleAttribute(el, `${key}-${attributeObject}`, value[attributeObject]);
    }
  }
};

export const element = <Tag extends keyof HTMLElementTagNameMap>(
  tag: Tag,
  attributes?: AttributeObject,
  ...content: (string | HTMLElement | DocumentFragment)[]
): HTMLElementTagNameMap[Tag] => {
  // Create the element
  const el = document.createElement(String(tag)) as HTMLElementTagNameMap[Tag];

  // Handle element attributes
  if (typeof attributes === "object" && !Array.isArray(attributes)) {
    for (const attributeKey in attributes) {
      handleAttribute<HTMLElementTagNameMap[Tag]>(el, attributeKey, attributes[attributeKey]);
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
