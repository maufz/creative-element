import { JSDOM } from "jsdom";

const { document } = new JSDOM().window;

type Stringable = string | number | boolean;

type ElementAttributes = Record<string, Stringable>;

type Args = {
  content?: string | HTMLElement;
  attributes?: ElementAttributes;
  data?: ElementAttributes;
  className?: string;
  id?: string;
};

const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const element = <Tag extends keyof HTMLElementTagNameMap>(tag: Tag, { attributes, data, className }: Args, ...content: (string | HTMLElement | DocumentFragment)[]): HTMLElementTagNameMap[Tag] => {
  const el = document.createElement(String(tag)) as HTMLElementTagNameMap[Tag];
  if (content) {
    content.forEach((element) => {
      if (typeof element === "string") {
        el.innerHTML += element;
      } else if (typeof element === "object") {
        el.appendChild(element);
      }
    })
  }
  const mergedAttributes: Args['attributes'] = {...attributes};
  if (className) {
    if (attributes && attributes.class) {
      mergedAttributes.class = String(attributes.class) + ' ' + className;
      console.log('here');
    } else {
      mergedAttributes.class = className;
    }
  }
  if (data) {
    Object.entries(data).forEach(([key, value]) =>
      el.setAttribute(`data-${key}`, String(value))
    );
  }
  if (!isEmptyObject(mergedAttributes)) {
    Object.entries(mergedAttributes).forEach(([key, value]) =>
      el.setAttribute(key, String(value))
    );
  }
  return el;
};

export const style = <ElType extends HTMLElement>(element: ElType, styles: Partial<Record<keyof (CSSStyleDeclaration) | `--${string}`, string | number>>): ElType => {
  for (const style in styles) {
    if (!(style in element.style) && !style.startsWith('--')) continue;
    if (styles[style as keyof typeof styles]) {
      element.style.setProperty(style, String(styles[style as keyof typeof styles]));
    }
  }
  return element;
}

export default element;
