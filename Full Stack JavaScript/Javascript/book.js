function Book(title, author, pages, isRead) {
  if(!new.target) {
    throw Error("Need to use the constructor with 'new' operator");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function() {
    if(isRead == true) return "Read";
    else return "not read yet";
  };

  this.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read()}`);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);

theHobbit.info();