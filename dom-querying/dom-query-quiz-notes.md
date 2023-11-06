# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

For debugging

- What is a "model"?

How the document is structured behind the scenes.

- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document.

- What is the word "object" referring to in the phrase Document Object Model?

Elements in the document such as tags.

- What is a DOM Tree?
  Every HTML tag is an object and nested tags are children of the enclosing tag. Text inside of a tag is an object as well. Each of these objects are represented as nodes and nested nodes.

- Give two examples of `document` methods that retrieve a single element from the DOM.

querySelector() , getElementById()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?

For later reference without querying again

- What `console` method allows you to inspect the properties of a DOM element object?

dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

So that all the html elements have been parsed and can be accessed.

- What does `document.querySelector()` take as its argument and what does it return?

Takes a selector as a string and returns the first occurence.

- What does `document.querySelectorAll()` take as its argument and what does it return?

Takes a selector as a string and returns a NodeList.

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
