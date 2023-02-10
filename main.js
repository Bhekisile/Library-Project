let myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  // do stuff here
  let book = new Book(title, author, pages, status);
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
        para.textContent = (key + ":" + myLibrary[key]);
        card.appendChild(para);
    }
    const button = document.createElement('button');
    const text = document.createTextNode('Remove book');
    button.classList = "second btn";
    button.appendChild(text);
    card.appendChild(button);
    button.addEventListener('click', event => {
      event.target.parentNode.remove();
      myLibrary = myLibrary.filter(v => v[1] !== event.target);
    })
    })
}

function showForm() {
  document.getElementById('newBook').style.display = 'block';
}

function intakeFormData() {
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  let status = document.querySelector(".status").value;

  if ((title === "") || (author === "") || (pages === "") || (status === "")){
    return;
  }
  addBookToLibrary(title, author, pages, status);
  document.getElementById("newBook").reset();
}

const signupForm = document.querySelector('#newBook');
signupForm.addEventListener("submit",
function(event) {
  console.log(event);
  event.preventDefault();
});

function toggleStatus() {
  const toggle = document.querySelector('.status');
    if (toggle.value === 'unread') {
      toggle.value = 'read';
    } else if (toggle.value === 'read') {
      toggle.value = 'unread'
    } 
}
