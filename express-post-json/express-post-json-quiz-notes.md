# express-post-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `express.json()` middleware do and when would you need it?

It retuns middleware that parses JSON and only looks at requests where the Content-Type header matches the type option. A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body) or an empty object ({}) if there was no body to parse, the COntent-Type was not matched, or an error occurred.

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
