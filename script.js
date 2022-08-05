const USER_NAME = prompt("What is your name?");

const flexContainerH1 = document.querySelector("div.flex-container h1");
const bookGrid = document.querySelector("div.flex-container div.book-grid");
flexContainerH1.textContent = `${USER_NAME}'s Book Library`;

var myLibrary = [];

function Book(author, title, numOfPages) {
    // the constructor
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = false;
}

function addBookToLibrary() {
}

const testBook = new Book("rndi", "test", 1337);
const newBookCard = document.createElement("div");
const newBookTitle = document.createElement("h3");
const newBookAuthor = document.createElement("p");
const newBookPgCount = document.createElement("p");
const newBookRead = document.createElement("p");
newBookElement.classList.add("book-card");
newBookElement.appendChild("")
myLibrary.push(testBook);


bookGrid.appendChild(newBookElement);