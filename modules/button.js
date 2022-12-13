const ListMenu = document.querySelector('.list');
const AddMenu = document.querySelector('.add');
const ContactMenu = document.querySelector('.contact');

ListMenu.addEventListener('click', () => {
  document.querySelector('.books').style.display = 'block';
  document.querySelector('.add-books').style.display = 'none';
  document.querySelector('.contact-us').style.display = 'none';
});

AddMenu.addEventListener('click', () => {
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.add-books').style.display = 'block';
  document.querySelector('.contact-us').style.display = 'none';
});

ContactMenu.addEventListener('click', () => {
  document.querySelector('.books').style.display = 'none';
  document.querySelector('.add-books').style.display = 'none';
  document.querySelector('.contact-us').style.display = 'block';
});
