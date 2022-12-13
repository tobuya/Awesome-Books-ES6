export const Books = [];

export const CheckLocalStorage = () => {
  if (localStorage.getItem('Books')) {
    Books = JSON.parse(localStorage.getItem('Books'));
  }
};