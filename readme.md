# creative-element

A lightweight utility which simplifies the creation of HTML elements

## Install

```bash
$ npm install creative-element
```

## Usage

### Creating a new element

```js
import { element } from "creative-element";

const anchor = element(
  "a", // tag
  {
    href: "https://github.com/maufz/creative-element",
    target: "_blank",
    className: "cta",
  }, // attributes object
  "Inner text", // content
);
```

### Appending it to the DOM

```js
document.body.appendChild(anchor);
```

#### Result

```html
<a href="https://github.com/maufz/creative-element" target="_blank" class="cta"
  >Inner text</a
>
```

### Multiple children

```js
const section = element(
  "section",
  {
    id: "hero-section",
  },
  element("h1", {}, "creative-element"),
  element("p", {}, "A lightweight library to easily create HTML elements"),
);
```

#### Result

```html
<section id="hero-section">
  <h1>creative-element</h1>
  <p>A lightweight library to easily create HTML elements</p>
</section>
```

### Adding html tags inside element content

```js
// use the html() helper if you need to add markup inside your element
const p = element("p", {}, html("Hello <strong>world</strong>!"));
```

#### Result

```html
<p>Hello <strong>world</strong>!</p>
```

## Function reference

### element(tag, attributes, content)

Returns `HTMLElement`

#### tag `string`

HTML tag name for the element (e.g. a, div, section)

#### attributes `[key: string]: string | number | object;`

Object of attributes, can take an string or number as a value.

`data-*` and `aria-*` can be set using an object:

```js
// Creates a data-target="#dropdown" attribute
element("button", {
  data: {
    target: "#dropdown",
  },
});
```

#### ...content `(string | HTMLElement)`

Inner content of the created element.

Accepts HTMLElements as children.

### html (innerHTML)

Returns `DocumentFragment`

Creates a DocumentFragment from the provided HTML string.

#### innerHTML `string`

The HTML content.
