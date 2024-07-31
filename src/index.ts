type Stringable = string | number;

interface AttributeObject {
  [key: string]: Stringable | AttributeObject;
}

const isEmptyObject = (obj: object): boolean => {
  return Object.entries(obj).length === 0;
};

const validateAttributes = (attributes?: AttributeObject) => {
  return (
    typeof attributes === "object" &&
    !Array.isArray(attributes) &&
    !isEmptyObject(attributes)
  );
};

export const element = <Tag extends keyof HTMLElementTagNameMap>(
  tag: Tag,
  attributes?: AttributeObject,
  ...content: (string | HTMLElement | DocumentFragment)[]
): HTMLElementTagNameMap[Tag] => {
  // Creates the element
  const el = document.createElement(String(tag)) as HTMLElementTagNameMap[Tag];

  // Recursive function that sets the attributes
  const handleAttribute = (
    key: string,
    value: Stringable | AttributeObject
  ) => {
    if (typeof value === "string" || typeof value === "number") {
      el.setAttribute(key, String(value));
    } else if (typeof value === "object") {
      for (const attributeObject in value) {
        handleAttribute(`${key}-${attributeObject}`, value[attributeObject]);
      }
    }
  };

  if (attributes && validateAttributes(attributes)) {
    for (const attributeKey in attributes) {
      handleAttribute(attributeKey, attributes[attributeKey]);
    }
  }

  // Insert a text node or append an element or fragment
  const contentFragment = document.createDocumentFragment();
  content.forEach((element) => {
    if (typeof element === "string") {
      const textNode = document.createTextNode(element);
      contentFragment.appendChild(textNode);
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
