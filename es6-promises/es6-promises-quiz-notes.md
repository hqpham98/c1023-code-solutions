# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?

When the Promise is created, the Promise task is synchronously put onto the Event Queue. Synchronous execution of the calling code continues until the end of the function(s). When the current functions complete, the Event Loop runs. The Promise task is taken from the Event Queue and executed. After the Promise task completes, it will call the appropriate then/catch/finally handler.

- What are the three states a Promise can be in?

Fulfilled, Rejected, Pending.

- How do you handle the fulfillment of a Promise?

.then()

- How do you handle the rejection of a Promise?

.catch()

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
