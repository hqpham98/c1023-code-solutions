# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?

(parameters) => {statements}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

There is no change in the functionality. If the body of the arrow function is just an expression then no need for curly brace. If there is a statement, then a curly brace is required.

- When using _concise body syntax_, how do you return an object literal?

  Wrap the object literal in parentheses.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

  () => 42

  - How many arguments does the arrow function take?

  None

  - What value does it return?

  42

  - How many arguments are passed to the function `foo`?

  One

  - What type of argument is passed to the function `foo`?

  Arrow function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

  (y) => console.log(`4y = ${4 * y}`);

  - How many arguments does the arrow function take?

  One

  - What value does it return?

  None

  - How many arguments are passed to the function `bar`?

  One

  - What type of argument is passed to the function `bar`?

  Arrow function

  - When does the arrow function's code get executed?

  When bar is called

- How does the value of `this` differ between standard functions and arrow functions?

  Arrow functions captures the "this" value of the enclosing context. A standard function creates its own "this" context.

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
