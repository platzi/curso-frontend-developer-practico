const menuEmail = document.getElementById('menu-email');
const desktopContextMenu = document.getElementById('desktop-menu');
const burguerButton = document.getElementById('burguer-menu');
const mobileMenu = document.getElementById('mobile-menu');
const cartDetail = document.getElementById('cart-detail');
const cartButton = document.getElementById('cart-button');

menuEmail.addEventListener('click', () => {
  desktopContextMenu.classList.toggle('inactive');

  cartDetail.classList.add('inactive');
});

burguerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('inactive');

  cartDetail.classList.add('inactive');
});

cartButton.addEventListener('click', () => {
  cartDetail.classList.toggle('inactive');

  mobileMenu.classList.add('inactive');

  desktopContextMenu.classList.add('inactive');
});