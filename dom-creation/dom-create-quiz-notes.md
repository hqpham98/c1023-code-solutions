# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?

No. It just creates a node ready to be appended to the document.

- How do you add an element as a child to another element?

element.appendChild(childElement)

- What do you pass as the arguments to the `element.setAttribute()` method?

attribute, value

- What steps do you need to take in order to insert a new element into the page?

Create an element with document.createElement()
Query the DOM for an element to append the new element to.
element.appendChild(childElement)

- What is the `textContent` property of an element object for?
  textContent gets the text content of all elements including <script> and <style> elements, not just the visible text content.

- Name two ways to set the `class` attribute of a DOM element.
  element.classList.add("class")
  element.className = "class"

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

Allowing the reuse of code to condense and simplify code.
Creating a more dynamic webpage by building DOM trees with different sets of data depending on user input without overcomplicating the base HTML code.

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
