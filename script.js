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
	readFlag === null ? (this.readFlag = false) : (this.readFlag = true);
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

function removeBookFromLibrary(index) {
	myLibrary.splice(index, 1);
	reloadLibraryDisplay();
}

function toggleReadFlag(index) {
	myLibrary[index].readFlag = !myLibrary[index].readFlag;
	reloadLibraryDisplay();
}

function reloadLibraryDisplay() {
	bookGrid.innerHTML = ""; // Clear the book grid element of its children

	// Then re-populate the book grid with book card elements
	myLibrary.forEach((book, index) => {
		bookGrid.appendChild(createBookCardDOMElement(book, index));
	});
}

function createBookCardDOMElement(book, index) {
	const newBookCard = document.createElement("div");
	newBookCard.setAttribute("class", "book-card");

	const newBookTitle = document.createElement("h3");
	newBookTitle.setAttribute("class", "book-title");
	newBookTitle.textContent = book.title;

	const newBookAuthor = document.createElement("p");
	newBookAuthor.setAttribute("class", "book-author");
	newBookAuthor.textContent = `by ${book.author}`;

	const newBookPgCount = document.createElement("p");
	newBookPgCount.setAttribute("class", "book-pg-count");
	newBookPgCount.textContent = `# of pages: ${book.numOfPages}`;

	const newBookRead = document.createElement("p");
	newBookRead.setAttribute("class", "book-read");
	newBookRead.textContent = book.readFlag ? "Read?: Yes" : "Read?: No";

	const newBookMarkReadBtn = document.createElement("button");
	newBookMarkReadBtn.setAttribute("class", "book-read-btn");
	newBookMarkReadBtn.setAttribute("onclick", `toggleReadFlag(${index})`);
	newBookMarkReadBtn.textContent = book.readFlag
		? "Mark as unread"
		: "Mark as read";

	const newBookDeleteBtn = document.createElement("button");
	newBookDeleteBtn.setAttribute("class", "book-del-btn");
	newBookDeleteBtn.setAttribute("onclick", `removeBookFromLibrary(${index})`);
	newBookDeleteBtn.textContent = "Remove Book";

	newBookCard.append(
		newBookTitle,
		newBookAuthor,
		newBookPgCount,
		newBookRead,
		newBookMarkReadBtn,
		newBookDeleteBtn
	);

	return newBookCard;
}

function enableForm() {
	newBookBtn.style.display = "none";
	form.style.display = "block";
}

function disableForm() {
	form.reset();
	newBookBtn.style.display = "block";
	form.style.display = "none";
}

newBookBtn.addEventListener("mouseup", (e) => {
	enableForm();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	addBookToLibrary(formData);
	reloadLibraryDisplay();
	disableForm();
});