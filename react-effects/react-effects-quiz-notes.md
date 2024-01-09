# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?

When it first appears

- What is a React Effect?

Something that is run after a component is rendered.

- When should you use an Effect and when should you not use an Effect?

Synchronization with something external to React like the DOM or an API.
Don't use for calculation.

- When do Effects run?

When component first mounts, after every render, or a dependency changes.

- What function is used to declare an Effect?

useEffect

- What are Effect dependencies and how do you declare them?

It's a [] passed as the second argument for useEffect().

- Why would you want to clean up from an Effect?

If a component creates a connection, it should close connection when the component unmounts or it will have multiple simultaneous connections.

- How do you clean up from an Effect?

Return cleanup function in useEffect().

- When does the cleanup function run?

Cleanup functions run each time before the Effect runs again and when the component gets unmounted.

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
