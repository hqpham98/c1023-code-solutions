# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& returns true if both the left and right operands are true.
|| returns true if at least one of the left or the right operands are true.

They can be used whenever a boolean expression is needed.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Short-circuiting is when an operand may not be evaluated at all.
For example, for a && b , if a is false, then don't evaluate b. For a || b if a is true, then don't evaluate b. When evaluating a short-circuited operator, the left operand is always evaluated. The right operand will only be evaluated if the left operand cannot determine the result of the operation.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

The ?? operator returns the right hand side operand when its left hand side operand is null or undefined. For example, the result of null ?? 'default string' would equal 'default string'. || returns a boolean if either of the operands are true.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

It takes three operands. A condition followed by a question mark then an expression to execute if the condition is truthy followed by a colon and finally the expression to execute if the condition is falsy. Can be used in place of an if-else.

- What is the `?.` (optional chaining) operator? When would you use it?

The optional chaining operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

Example:

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

- What is `...` (spread) syntax? How do you use it with arrays and objects?

Allows an iterable such as an array or strsing to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

- What data types can be spread into an array? Into an object?

Iterable values like Array and String.
For an object, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

- How does spread syntax differ from rest syntax?

Rest syntax is defining a function with ... in the parameters to allow the funciton to accept an infinite number of arguments as an array.

Example:
function f(a, b, ...theArgs) {
// …
}

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
