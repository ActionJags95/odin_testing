const myLibary = []
const dialog = document.querySelector('#book-dialog');
const addBtn = document.querySelector('#add-btn');
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn')




function Book(title, author, pages, read) {
  if(!new.target) {
    throw Error("Create only using 'new' keyword");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
};
Book.prototype.alterRead = function() {
  this.read = !this.read;
};

function updateLibrary() {
  const booksArea = document.querySelector('.books-area');
  const books = booksArea.querySelectorAll('.book');

  books.forEach(book => {
    booksArea.removeChild(book);
  });
  
  myLibary.forEach(book => {
    // Setting the Book card item
    const bookCard = document.createElement('div');
    bookCard.setAttribute('id', book.id);
    bookCard.setAttribute('class', 'book');

    // Title of the book
    const title = document.createElement('h1');
    title.textContent = `${book.title}`;

    // Author of the book
    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    // No.of pages of the book
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    // Interactive area of the book card
    const buttonArea = document.createElement('div');
    buttonArea.setAttribute('class', 'book-btn');
    // Button toggling the read status of the book
    const readBtn = document.createElement('button');
    readBtn.setAttribute('onclick', 'changeReadStatus(this)');
    readBtn.textContent = book.read? "Read" : "Not Read";
    // Button to delete the book
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute('onclick', 'deleteBook(this)')
    // Appeding the buttons to the interactive area
    buttonArea.appendChild(readBtn);
    buttonArea.appendChild(deleteBtn);

    // Appending all the elements to the book card
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonArea);

    const booksArea = document.querySelector('.books-area');
    booksArea.appendChild(bookCard);

  });
}

function addToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('read').checked;

  const book = new Book(title, author, pages, isRead);
  myLibary.push(book);
  updateLibrary();

  // console.log(myLibary);
}

function changeReadStatus(btn) {
  // NOTE: 'closest' method will fetch the DOM element closest to the given element
  // In this case closest DOM to btn with class '.book'
  const bookId = btn.closest('.book').id;
  // console.log(bookId);
  const book = myLibary.find(book => book.id === bookId);
  // console.log(book);
  book.alterRead();
  btn.textContent = book.read? "Read" : "Not read";
}

function deleteBook(btn) {
  const bookId = btn.closest('.book').id;
  const book = myLibary.find(book => book.id === bookId);
  const index = myLibary.indexOf(book);
  myLibary.splice(index, 1);
  updateLibrary();
}

// Event listeners to the buttons
addBtn.addEventListener('click', ()=>{
  dialog.showModal()
});
closeBtn.addEventListener('click', ()=>{
  dialog.close()
});
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  dialog.close();
  addToLibrary();
});