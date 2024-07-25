"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.style = exports.element = void 0;
const jsdom_1 = require("jsdom");
const { document } = new jsdom_1.JSDOM().window;
const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};
const element = (tag, { attributes, data, className }, ...content) => {
    const el = document.createElement(String(tag));
    if (content) {
        content.forEach((element) => {
            if (typeof element === "string") {
                el.innerHTML += element;
            }
            else if (typeof element === "object") {
                el.appendChild(element);
            }
        });
    }
    const mergedAttributes = Object.assign({}, attributes);
    if (className) {
        if (attributes && attributes.class) {
            mergedAttributes.class = String(attributes.class) + ' ' + className;
            console.log('here');
        }
        else {
            mergedAttributes.class = className;
        }
    }
    if (data) {
        Object.entries(data).forEach(([key, value]) => el.setAttribute(`data-${key}`, String(value)));
    }
    if (!isEmptyObject(mergedAttributes)) {
        Object.entries(mergedAttributes).forEach(([key, value]) => el.setAttribute(key, String(value)));
    }
    return el;
};
exports.element = element;
const style = (element, styles) => {
    for (const style in styles) {
        if (!(style in element.style) && !style.startsWith('--'))
            continue;
        if (styles[style]) {
            element.style.setProperty(style, String(styles[style]));
        }
    }
    return element;
};
exports.style = style;
exports.default = exports.element;
