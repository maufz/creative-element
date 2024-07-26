import { element, style } from "../dist";
import { test, expect } from "vitest";
import { JSDOM } from "jsdom";

global.document = new JSDOM().window.document;

test('Create a paragraph element with the text "Hello World!"', () => {
  const paragraph = element('p', {}, "Hello world!");
  
  expect(paragraph.innerHTML).toBe("Hello world!");
})

test('Create a div element and set a class and an ID', () => {
  const div = element('div', {
    attributes: {
      class: 'testClass',
      id: 'testID'
    }
  })

  expect(div.classList.contains('testClass')).toBeTruthy();
  expect(div.getAttribute('id')).toBe('testID');
})

test('Style a div with an orange color', () => {
  const div = style(element('div'), {color: 'orange'});
  
  expect(div.style.color).toBe('orange');
})


test('Create a section and add a h1 element with the text "Hello world!"', () => {
  const section = element('section', {},
    element('h1', {}, 'Hello world!')
  )
  const h1 = section.querySelector('h1');

  expect(section.children.length).toBe(1);
  expect(h1.innerHTML).toBe('Hello world!');
})
