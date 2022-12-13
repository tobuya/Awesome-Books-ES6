import './modules/button.js';
import './modules/time.js';
import { addBooks } from './modules/booklist.js';
import { CheckLocalStorage, Books } from './modules/onload.js';
import './modules/store.js';

window.onload = () => {
  CheckLocalStorage();
  addBooks(Books);
};
