# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

Debugging

- What is the purpose of events and event handling?

Do certain functions when certain events occur. Ex: Change colors if button is pressed.

- Are all possible parameters required to use a JavaScript method or function?

No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener()

- What is a callback function?

A function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?

Event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The thing that was interacted with that triggered the event. Console.log()

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

In the first snippet, you are passing a reference to a function so that the function will be called when the event is handled.

In the second snippet, the function will be executed immediately because it is being called and the output of that function will be passed as an argument.

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
