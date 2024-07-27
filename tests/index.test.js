import { element, styled } from "../dist";
import { test, expect, describe } from "vitest";
import { JSDOM } from "jsdom";

global.document = new JSDOM().window.document;

test('Create a paragraph element with the text "Hello World!"', () => {
  const paragraph = element("p", {}, "Hello world!");

  expect(paragraph.innerHTML).toBe("Hello world!");
});

describe('element function', () => {
  test("Create a div element and set a class and an ID", () => {
    const div = element("div", {
      class: "testClass",
      id: "testID",
    });
    expect(div.classList.contains("testClass")).toBeTruthy();
    expect(div.getAttribute("id")).toBe("testID");
  });
  
  test('Create a section and add a h1 element with the text "Hello world!"', () => {
    const section = element("section", {}, element("h1", {}, "Hello world!"));
    const h1 = section.querySelector("h1");
    
    expect(section.children.length).toBe(1);
    expect(h1.innerHTML).toBe("Hello world!");
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
})

describe('styled function', () => {
  test("Style a div with an orange color", () => {
    const div = styled(element("div"), { color: "orange" });
  
    expect(div.style.color).toBe("orange");
  });
})


