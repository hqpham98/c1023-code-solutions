# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:

  - What does `Array.forEach` do?

  Executes a function once for each array element.

  - What should the callback function do?

  Take an element of the array as the argument and execute the function.

  - What is `Array.forEach` useful for?

  Running a function that needs to include every element of an array. For example, console logging every element individually.

- `Array.map`:

  - What does `Array.map` do?

  Creates a new array popualted with the results of calling a provided function on every element in the calling array.

  - What should the callback function return?

  Return a result that uses an element of the array at each index, to be stored in the new array.

  - What is `Array.map` useful for?

  Returning an array with new values based off of the original array without modifying the original array.

- `Array.filter`:

  - What does `Array.filter` do?

  Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  - What should the callback function return?

  A boolean value. If true, it will the element will be in the shallow copy. If false, it will not be in the shallow copy.

  - What is `Array.filter` useful for?

  Finding elements in an array that match a certain condition.

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
