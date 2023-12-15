# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?

Express is a routing and middleware web framework. An Express application is essentially a series of middleware function calls.

- What is Express middleware useful for?

Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next. Middleware functions can execute any code, make changes to the req and res objects, end the req res cycle, and call the next middleware function in the stack.

- How do you mount a middleware with an Express application?

app.use(callbackFn)

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req res next objects

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
