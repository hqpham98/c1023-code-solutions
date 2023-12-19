# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?

INSERT, SELECT, UPDATE, DELETE

- How do you add a row to a SQL table?

INSERT into "table" ("column1", "column2")
VALUES ('val1', 'val2')

- How do you add multiple rows to a SQL table at once?

INSERT into "table" ("column1", "column2")
VALUES ('val1', 'val2'), ('val1', 'val2')

- How do you update rows in a database table?

UPDATE "table"

- How do you delete rows from a database table?

DELETE FROM "table"

- Why is it important to include a `where` clause in your `update` and `delete` statements?

Everything row will be deleted or updated.

- How do you accidentally delete or update all rows in a table?

DELETE FROM "table"
UPDATE "table" SET "col1" = 'val1'

- How do you get back the modified row without a separate `select` statement?

RETURNING \*

- Why did you get an error when trying to delete certain films?

filmID was referenced in another table so those rows could not be deleted.

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
