const USER_NAME = prompt("What is your name?");

const flexContainer = document.querySelector("div.flex-container");
const flexContainerH1 = document.querySelector("div.flex-container h1");
const bookGrid = document.querySelector("div.flex-container div.book-grid");
const newBookBtn = document.querySelector("#new-book-btn");
const form = document.querySelector("form");
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

newBookBtn.addEventListener("mouseup", (e) => {
    newBookBtn.style.display = "none";
    form.style.display = "block";
    // const form = document.createElement("form");
    // form.setAttribute("action", "");
    // form.setAttribute("method", "get");
    // form.classList.add("new-book-form");
    // const titleLabel = document.createElement("label");
    // titleLabel.setAttribute("for", "titleName");
    // titleLabel.textContent = "Title:";
    // const titleInput = document.createElement("input");
    // titleInput.setAttribute("type", "text");
    // titleInput.setAttribute("id", "titleName");
    // titleInput.setAttribute("name", "title_name");
    // titleInput.setAttribute("placeholder", "Sick Title");
    // const submitBtn = document.createElement("button");
    // submitBtn.setAttribute("type", "submit");
    // submitBtn.textContent = "Add Book";
    // form.appendChild(titleLabel);
    // form.appendChild(titleInput);
    // form.appendChild(submitBtn);
    // flexContainer.appendChild(form);
});

form.addEventListener()

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