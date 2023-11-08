# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?

The className property gets and sets the value of the class attribute of the specified element.

- How do you update the CSS class attribute of an element using JavaScript?

elem.className = "class"

- What is the `textContent` property of element objects?

The textContent gets the text content of all elements, including <script> and <style> elements.

- How do you update the text within an element using JavaScript?
  innerText or textContent

```javascript
const elem = document.querySelector('selector');
elem.innerText = 'string'; //option a
elem.textContent = 'string'; //option b
```

- Is the `event` parameter of an event listener callback always useful?

Yes. To access properties regarding the event object such as .bubbles, .type, .target, etc.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

More complicated because it is easier to add a number to a string instead of keeping track of the text number in the innerText of the element.

- Why is storing information about a program in variables better than only storing it in the DOM?

To refer to information locally without having to manipulate content intended for viewing in a browser.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
