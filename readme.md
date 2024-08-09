# creative-element

A lightweight utility which simplifies the creation of HTML elements

## Install

```bash
$ npm install creative-element
```

## Usage

```js
import element from "creative-element";
// or
import { element, html } from "creative-element";

// element()
const anchor = element(
  "a",
  {
    href: "https://github.com/maufz/",
    target: "_blank",
    className: "cta",
  },
  "Inner text"
);

// append into an existing element
document.body.appendChild(anchor);

// nested elements
const section = element(
  "section",
  {
    id: "hero-section",
  },
  element("h1", {}, "creative-element"),
  element("p", {}, "A lightweight library to easily create HTML elements")
);

// data attribute
const button = element("button", {
  data: {
    target: "#dropdown",
  },
});

// html()

// create a document fragment and append it to the body
const fragment = html(
  `
    <header></header>
    <main></main>
    <footer></footer>
  `
);

document.body.appendChild(fragment);

// pass a created fragment to the element function
const p = element("p", {}, html("Hello <strong>world</strong>!"));
```

## Function reference

### element(tag, attributes, content)

Returns `HTMLElement`

#### tag `string`

HTML tag name for the element (e.g. a, div, section)

#### attributes `[key: string]: string | number | object;`

Object of attributes, can take an string or number as a value.

`data-*` and `aria-*` can be set using an object.

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

This function is useful when you need to pass an html string to the element function.

It also allows to create document fragments with ease.

#### innerHTML `string`

The HTML string to be converted into a DocumentFragment.
