# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?

npm is a software registry and can be used through the command line. npm is used to share and download packages and standalone tools.

- What is a package?

A directory with one or more files in it that contains code that can be shared and downloaded. It has a file called package.json with some metadata about this package.

- What are some other popular package managers?

Yarn, pnpm

- How can you create a `package.json` with `npm`?

npm init --yes

- What is a dependency and how do you add one to a package?

It specifies the packages that you need to run your code. npm install.

- What happens when you add a dependency to a package with `npm`?

The dependency is added to package.json.

- What is a devDependency and how do you add one to a package?

DevDependencies are the packages a developer needs during development. npm install --save-dev

- How do you define and run `npm` scripts? Why are these useful?

Adding a scripts object to the package.json that contains keys with values that are scripts. Scripts can be used to make dev commands easily executable without having to remember long arguments and to make them easily shareable.

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
