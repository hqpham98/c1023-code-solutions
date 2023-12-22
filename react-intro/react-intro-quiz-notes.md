# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?

Front end web framework

- What is a React component?

A function that returns JSX markup.
React component names always start with a capital letter.
Parameters must be 0 or 1 paramter (an object).

- How do you mount a React app (root component) to the DOM?

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<App />
</React.StrictMode>,
)

- What are some other popular frontend frameworks?

Angular, Vue

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
