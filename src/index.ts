type Stringable = string | number;

interface AttributeObject {
  [key: string]: Stringable | AttributeObject;
}

const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

const validateAttributes = (attributes?: AttributeObject) => {
  return typeof attributes === 'object' && !Array.isArray(attributes) &&  !isEmptyObject(attributes);
}

export const element = <Tag extends keyof HTMLElementTagNameMap>(
  tag: Tag,
  attributes?: AttributeObject,
  ...content: (string | HTMLElement | DocumentFragment)[]
): HTMLElementTagNameMap[Tag] => {
  
  // Creates the element
  const el = document.createElement(String(tag)) as HTMLElementTagNameMap[Tag];
  
  // Recursive function that sets the attributes
  const handleAttribute = (key: string, value: Stringable | AttributeObject) => {
    if (typeof value === "string" || typeof value === "number") {
      el.setAttribute(key, String(value));
    }
    if (typeof value === "object") {
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

  // Insert the inner text or append a nested element
  if (content) {
    content.forEach((element) => {
      if (typeof element === "string") {
        el.innerHTML += element;
      } else if (typeof element === "object") {
        el.appendChild(element);
      }
    });
  }

  return el;
};

export default element;
