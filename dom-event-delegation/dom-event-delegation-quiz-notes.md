# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

The most deeply nested element that caused the event / whatever element that caused the element.

- Why is it possible to listen for events on one element that actually happen its descendent elements?

event bubbling. when an event happens on an element, it firsdt runs the handlers on it, then on its parent, then all the way up on other ancestors.

- What DOM element property tells you what type of element it is?

.tagName

- What does the `element.closest()` method take as its argument and what does it return?

It takes a string representing a selector and returns the closest ancestor element or itself, which makes the selector. If there is no such element, null.

- How can you remove an element from the DOM?

element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

Add an event listener on the parent element.

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
