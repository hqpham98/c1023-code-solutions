# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?

It exposes a directory or a file to a particular URL so its contents can be public accessed. In this case it would be images.

- What does `express.static()` return?

A middleware function.

- What are several examples of static files?

Images, Javascript files, HTML files, CSS files.

- What is a good way to serve application images using Express?

Storing images in a directory such as public/ and passing public to express.static() and adding it to the application with app.use().

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
