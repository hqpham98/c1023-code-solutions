# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How can `useEffect` be used to load data for a component?

After a component has been rendered, useEffect can make any necessary calls without triggering a re-render of the parent component.

- What browser function can be used to make HTTP requests to a server in React?

fetch

- How do you use `useEffect` to load component data just once when the component mounts?

Pass an empty dependency array

- How do you use `useEffect` to load component data every time the data key changes?

Add the data key as a dependency to useEffect.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

Having a third-party data management library to manage all the data accesses. React Query and Vercel SWR.

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
