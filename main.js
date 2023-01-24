let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBook() {
  const books = document.querySelector('.books');
    myLibrary.forEach(myLibrary => {
      const card = document.createElement('div');
      card.classList.add('card');
      books.appendChild(card);
      for (let key in myLibrary) {
        console.log(key + ":" + myLibrary[key]);
        const para = document.createElement('p');
        para.textContent = (key + ":" + myLibrary[key]);
        card.appendChild(para);
      }
    })
}

/*function intakeFormData() {
  let title = document.getElementsByName("title").value;
  let author = document.getElementsByName("author").value;
  let pages = document.getElementsByName("pages").value;
  let read = document.getElementsByName("read").value;

  if ((title === "") || (author === "") || (pages === "") || (read === "")){
    return;
  }*/

addBookToLibrary("The Hobbit", " J.R.R. Tolkien", 250, "Yes");
addBookToLibrary("Animal Farm", " J.R.R. Tolkien", 500, "Yes");
addBookToLibrary("Beauty and the Beast", " J.R.R. Tolkien", 700, "Not Yet");
addBookToLibrary("The Hostage", " J.R.R. Tolkien", 400, "Not yet");
displayBook();