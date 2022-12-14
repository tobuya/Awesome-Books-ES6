import {
  title, author, addBooks, registeredBooks, deleteBook,
} from './booklist.js';

import { Books } from './onload.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

document.querySelector('.books').addEventListener('click', (e) => {
  Books.splice(e.target.id, 1);
  localStorage.setItem('Books', JSON.stringify(Books));
  deleteBook(e.target);
});

const addButton = document.querySelector('#add-btn');

addButton.addEventListener('click', (e) => {
  if (title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    const book = new Book(title.value, author.value);
    Books.push(book);
    addBooks(Books);
    localStorage.setItem('Books', JSON.stringify(Books));
    registeredBooks.style.border = '1px solid black';
  }
});