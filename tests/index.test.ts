import { element } from "../src/index";
import { test, expect, describe } from "vitest";
import { JSDOM } from "jsdom";

const dom = new JSDOM()

global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.DocumentFragment = dom.window.DocumentFragment;

describe('element function', () => {
  test('Create a paragraph element with the text "Hello World!"', () => {
    const paragraph = element("p", {}, "Hello world!");
  
    expect(paragraph.innerHTML).toBe("Hello world!");
  });

  test("Create a div element and set a class and an ID", () => {
    const div = element("div", {
      class: "testClass",
      id: "testID"
    });
    expect(div.classList.contains("testClass")).toBeTruthy();
    expect(div.getAttribute("id")).toBe("testID");
  });
  
  test('Create a section and add a h1 element with the text "Hello world!"', () => {
    const section = element("section", {}, element("h1", {}, "Hello world!"));
    const h1 = section.querySelector("h1");
    
    expect(section.children.length).toBe(1);
    expect(h1?.innerHTML).toBe("Hello world!");
  });
  
  test('Set a "data-key" attribute of "test" using nested objects', () => {
    const span = element('span', {
      data: {
        key: 'test'
      }
    })
    const dataKey = span.dataset.key;
    
    expect(dataKey).toBe('test');
  })

  test('Create a empty paragraph element', () => {
    const paragraph = element('p');
  })

  test('Set an aria-hidden attribute to true and false', () => {
    const div = element('div', {
      hidden: true,
      aria: {
        hidden: true
      }
    })
    
    const ariaHidden = div.getAttribute('aria-hidden');
    expect(ariaHidden).toBe('true');
    expect(div.hidden).toBeTruthy();
    
    const div2 = element('div', {
      aria: {
        hidden: false
      }
    })
    const ariaHidden2 = div2.getAttribute('aria-hidden');
    expect(ariaHidden2).toBe('false');
  })

  test('Create an audio element with controls and the src attribute set to "audio.mp3"', () => {
    const audio = element('audio', {
      src: 'audio.mp3',
      controls: true,
    })
    
    const src = audio.getAttribute('src');

    expect(src).toBe('audio.mp3');
    expect(audio.controls).toBeTruthy();
  })
})
