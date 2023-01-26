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
  displayBook();
}

function displayBook() {
  const books = document.querySelector('.books');

  const removeDivs = document.querySelectorAll('.card');
  console.log('show me the node count of current card divs...', removeDivs);
  for (let i=0; i < removeDivs.length; i++) {
  removeDivs[i].remove();
}

    myLibrary.forEach(myLibrary => {
      const card = document.createElement('div');
      card.classList.add('card');
      books.appendChild(card);
      for (let key in myLibrary) {
        console.log(key + ":" + myLibrary[key]);
        const para = document.createElement('p');
        para.innerText = (key + ":" + myLibrary[key]);
        card.appendChild(para);
    }
    })
    const button = document.createElement('button');
    const text = document.createTextNode('Remove book');
    button.classList = "second btn";
    button.appendChild(text);
    books.appendChild(button);
    button.onclick = removeBook(Book);
    /*addEventListener('click', event => {
      event.target.parentNode.remove();
      myLibrary = myLibrary.filter(v => v[1] !== event.target);
    })*/
}

function removeBook(Book) {
  console.log('Library', myLibrary);
  myLibrary.pop(Book);
  }

function showForm() {
  document.getElementById('newBook').style.display = 'block';
}

function intakeFormData() {
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  let read = document.querySelector(".read").value;

  if ((title === "") || (author === "") || (pages === "") || (read === "")){
    return;
  }
  addBookToLibrary(title, author, pages, read);
  document.getElementById("newBook").reset();
}

/*addBookToLibrary("The Hobbit", " J.R.R. Tolkien", 250, "Yes");
addBookToLibrary("Animal Farm", " J.R.R. Tolkien", 500, "Yes");
addBookToLibrary("Beauty and the Beast", " J.R.R. Tolkien", 700, "Not Yet");
addBookToLibrary("The Hostage", " J.R.R. Tolkien", 400, "Not yet");
displayBook();*/

const signupForm = document.querySelector('#newBook');
signupForm.addEventListener("submit",
function(event) {
  console.log(event);
  event.preventDefault();
});
