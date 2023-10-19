const menuCart = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');

menuCart.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');