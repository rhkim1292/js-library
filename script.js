const USER_NAME = prompt("What is your name?");

const flexContainer = document.querySelector("div.flex-container");
const flexContainerH1 = document.querySelector("div.flex-container h1");
const bookGrid = document.querySelector("div.flex-container div.book-grid");
const newBookBtn = document.querySelector("#new-book-btn");
const form = document.querySelector("form");
const titleInput = document.querySelector("input#titleName");
const titleInputError = document.querySelector("#titleName + span.error");
const authorInput = document.querySelector("input#authorName");
const authorInputError = document.querySelector("#authorName + span.error");
const numOfPagesInput = document.querySelector("input#numOfPages");
const numOfPagesInputError = document.querySelector("#numOfPages + span.error");
flexContainerH1.textContent = `${USER_NAME}'s Book Library`;

var myLibrary = [];

// function Book(author, title, numOfPages, readFlag) {
// 	// the constructor
// 	this.author = author;
// 	this.title = title;
// 	this.numOfPages = numOfPages;
// 	readFlag === null ? (this.readFlag = false) : (this.readFlag = true);
// }

class Book {
	constructor(author, title, numOfPages, readFlag) {
		this.author = author;
		this.title = title;
		this.numOfPages = numOfPages;
		readFlag === null ? (this.readFlag = false) : (this.readFlag = true);
	}
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

	const newBookTitleAuthorContainer = document.createElement("div");
	newBookTitleAuthorContainer.setAttribute("class", "book-title-author-container");

	const newBookTitle = document.createElement("h3");
	newBookTitle.setAttribute("class", "book-title");
	newBookTitle.textContent = book.title;

	const newBookAuthor = document.createElement("p");
	newBookAuthor.setAttribute("class", "book-author");
	newBookAuthor.textContent = `by ${book.author}`;

	newBookTitleAuthorContainer.append(newBookTitle, newBookAuthor);

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
		newBookTitleAuthorContainer,
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

titleInput.addEventListener("input", (e) => {
	if (titleInput.validity.valid) {
		titleInputError.textContent = "";
		titleInputError.className = "error";
	} else {
		showError();
	}
});

authorInput.addEventListener("input", (e) => {
	if (authorInput.validity.valid) {
		authorInputError.textContent = "";
		authorInputError.className = "error";
	} else {
		showError();
	}
});

titleInput.addEventListener("input", (e) => {
	if (titleInput.validity.valid) {
		titleInputError.textContent = "";
		titleInputError.className = "error";
	} else {
		showError();
	}
});

numOfPagesInput.addEventListener("input", (e) => {
	if (numOfPagesInput.validity.valid) {
		numOfPagesInputError.textContent = "";
		numOfPagesInputError.className = "error";
	} else {
		showError();
	}
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (!titleInput.validity.valid || !authorInput.validity.valid || !numOfPagesInput.validity.valid) {
		showError();
		return;
	}
	const formData = new FormData(e.target);
	addBookToLibrary(formData);
	reloadLibraryDisplay();
	disableForm();
});

function showError() {
	if (titleInput.validity.valueMissing) {
		titleInputError.textContent = "You must enter a book title.";
		titleInputError.className = "error active";
	}

	if (authorInput.validity.valueMissing) {
		authorInputError.textContent = "You must enter the name of the book author.";
		authorInputError.className = "error active";
	}

	if (numOfPagesInput.validity.valueMissing) {
		numOfPagesInputError.textContent = "You must enter the # of pages in the book.";
		numOfPagesInputError.className = "error active";
	} else if (numOfPagesInput.value < numOfPagesInput.min) {
		numOfPagesInputError.textContent = `The number of pages must be ${numOfPagesInput.min} or greater.`;
		numOfPagesInputError.className = "error active";
	}
}