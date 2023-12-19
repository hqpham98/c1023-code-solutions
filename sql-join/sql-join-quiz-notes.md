# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?

When the values in a column in one table refers to values in a column of another table.

- How do you join two SQL tables? (Provide at least two syntaxes.)

SELECT \*
FROM "tableA"
JOIN "tableB" USING "colID"

or

SELECT \*
FROM "tableA"
JOIN "tableB" ON "tableA"."colID" = "tableB"."colID"

- How do you temporarily rename columns or tables in a SQL statement?

AS

- How do you create a one-to-many relationship between two tables?

A single join statement

- How do you create a many-to-many relationship between two tables?

Multiple join statements

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
