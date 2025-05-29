const dialog = document.querySelector('#book-dialog');
const addBtn = document.querySelector('#add-btn');
const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn')


class Library {
  #myLibrary = [];

  constructor() {

  }

  getBook(id) {
    return this.#myLibrary.find(book => book.id === id);
  }

  removeBook(id) {
    const book = this.#myLibrary.find(book => book.id === id);
    const index = this.#myLibrary.indexOf(book);
    this.#myLibrary.splice(index, 1);
  }

  addToLibrary() {
    const title = document.getElementById('title').value;
    document.getElementById('title').value = "";

    const author = document.getElementById('author').value;
    document.getElementById('author').value = ""

    const pages = document.getElementById('pages').value;
    document.getElementById('pages').value = "";

    const isRead = document.getElementById('read').checked;
    document.getElementById('read').checked = false;

    const book = new Book(title, author, pages, isRead);
    this.#myLibrary.push(book);
    this.updateLibrary();

    // console.log(myLibary);
  }

  updateLibrary() {
    const booksArea = document.querySelector('.books-area');
    const books = booksArea.querySelectorAll('.book');

    books.forEach(book => {
      booksArea.removeChild(book);
    });
    
    this.#myLibrary.forEach(book => {
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
      readBtn.textContent = book.read? "Finished" : "Not Read";
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
}

function changeReadStatus(btn) {
  // NOTE: 'closest' method will fetch the DOM element closest to the given element
  // In this case closest DOM to btn with class '.book'
  const bookId = btn.closest('.book').id;
  // console.log(bookId);
  const book = library.getBook(bookId);
  // console.log(book);
  book.alterRead();
  btn.textContent = book.read? "Finished" : "Not read";
}
function deleteBook(btn) {
  const bookId = btn.closest('.book').id;
  library.removeBook(bookId);
  library.updateLibrary();
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
  }
  alterRead() {
    this.read = !this.read;
  }
}


const library = new Library();

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
  library.addToLibrary();
});