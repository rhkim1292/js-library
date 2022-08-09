const USER_NAME = prompt("What is your name?");

const flexContainer = document.querySelector("div.flex-container");
const flexContainerH1 = document.querySelector("div.flex-container h1");
const bookGrid = document.querySelector("div.flex-container div.book-grid");
const newBookBtn = document.querySelector("#new-book-btn");
const form = document.querySelector("form");
flexContainerH1.textContent = `${USER_NAME}'s Book Library`;

var myLibrary = [];

function Book(author, title, numOfPages, readFlag) {
	// the constructor
	this.author = author;
	this.title = title;
	this.numOfPages = numOfPages;
	readFlag === null ? this.readFlag = false : this.readFlag = true;
}

function addBookToLibrary(formData) {
	const newBook = new Book(
		formData.get("author_name"),
		formData.get("title_name"),
        formData.get("num_of_pages"),
        formData.get("read_flag")
	);
    myLibrary.push(newBook);
}

newBookBtn.addEventListener("mouseup", (e) => {
	newBookBtn.style.display = "none";
	form.style.display = "block";
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	addBookToLibrary(formData);
	form.reset();
	newBookBtn.style.display = "block";
	form.style.display = "none";
});

const testBook = new Book("rndi", "test", 1337);
const newBookCard = document.createElement("div");
const newBookTitle = document.createElement("h3");
const newBookAuthor = document.createElement("p");
const newBookPgCount = document.createElement("p");
const newBookRead = document.createElement("p");
newBookElement.classList.add("book-card");
newBookElement.appendChild("");
myLibrary.push(testBook);

bookGrid.appendChild(newBookElement);
