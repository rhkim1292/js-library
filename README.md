# js-library
A small library app that allows users to store books with small descriptions.

## Plan
- Does my program have a user interface? What will it look like? What functionality will the interface have?

  - The user interface will be a simple page that displays all the current books in the library in the form of a card grid. There will also be a "New Book" button that, when clicked, displays a form for the user to input book details and another button that submits the entry. Each existing book will also have a button that allows the user to remove the book from the library and another button that allows the user to mark the book as read.

- What inputs will my program have? Will the user enter data or will I get input from somewhere else?

  - This program will have button click inputs and also a form that will allow text inputs from the user.

- What's the desired output?

  - The desired output for when the user clicks the "New Book" button would be to display the form for the user. The desired output for when the user submits the form is the add the book to the library and display it as a card in the grid. The desired output for when the user clicks the "Remove" button on a book is to remove the book from the library. The desired output for when the user clicks the "Mark as Read" button on a book is to convey to the user visually that the book has been read.

- Given my inputs, what are the steps necessary to return the desired output?

  1. Implement the logic that displays the book cards on the page in a grid.
  2. Add a button that allows the user to add new books to the library using a form.
  3. Make sure each card entry for each book has a remove button and a mark as read button.
  4. Implement the removal of books from the library when the user has clicked the remove button.
  5. Implement the marking of books as read when the user has clicked the mark as read button.
