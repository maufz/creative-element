type Stringable = string | number;

interface AttributeObject {
  [key: string]: Stringable | AttributeObject;
}

const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const element = <Tag extends keyof HTMLElementTagNameMap>(
  tag: Tag,
  attributes: AttributeObject,
  ...content: (string | HTMLElement | DocumentFragment)[]
): HTMLElementTagNameMap[Tag] => {
  
  const el = document.createElement(String(tag)) as HTMLElementTagNameMap[Tag];

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

  if (content) {
    content.forEach((element) => {
      if (typeof element === "string") {
        el.innerHTML += element;
      } else if (typeof element === "object") {
        el.appendChild(element);
      }
    });
  }
  if (typeof attributes === 'object' && !isEmptyObject(attributes)) {
    Object.entries(attributes).forEach(([key, value]) => handleAttribute(key, value));
  }
  return el;
};

export default element;
