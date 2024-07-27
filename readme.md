# creative-element

A lightweight library to easily create HTML elements

## Install

```bash
$ npm install creative-element
```

## Usage

```js
import { element, styled } from "creative-element";
// default import for the element function
import element from "creative-element";

// element()
element(
  "a",
  {
    href: "https://github.com/maufz/",
    target: "_blank",
  },
  "Inner text"
);

// nested elements
element(
  "section",
  {
    id: "hero-section",
  },
  element("h1", {}, "creative-element"),
  element("p", {}, "A lightweight library to easily create HTML elements")
);

// nested attribute objects
element('button', {
  data: {
    target: '#dropdown'
  }
})

// styled utility function
styled(
  element('p', {}, "Text in orange"),
  {
    color: 'orange'
  }
)
```

## Function reference

### element(tag, attributes, content)

Returns `HTMLElement`

#### tag `string`

HTML tag name for the element (e.g. a, div, section)

#### attributes `[key: string]: string | number | object;`


Object of attributes, can take an string or number as a value.  

Can also take an object as a value, this will concatenate the keys of the object with hyphens.

```js
element('button', {
  data: {
    target: '#dropdown'
  }
})
// Creates a data-target="#dropdown" attribute
```
### ...content `(string | HTMLElement)`

Inner content of the created element.

Accepts HTMLElements as children.

### styled(HTMLElement, styles)

Returns `HTMLElement`

#### HTMLElement `HTMLElement`

#### styles `object`
