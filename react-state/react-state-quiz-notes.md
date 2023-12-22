# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

Must be called at the top level of a component.
Can't be called inside conditions, loops, or other nested functions.
They start with use\_\_\_

- What is the purpose of state in React?

A state variable to retain the data between renders. A state setter function to update the variable and trigger React to render the component again.

- Why can't we just maintain state in a local variable?

When a local variable is changed, React will not re-render the component. Components are re-rendered based on when the states changed. Local variables are not saved when components are re-rendered.

- What two actions happen when you call a `state setter` function?

Component is re-rendered and the state is updated.

- When does the local `state variable` get updated with the new value?

When the component is re-rendered.

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
