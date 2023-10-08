//VARIABLES PARA SELECCIONAR LOS ELEMENTOS DEL HTML
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

// EVENT LISTENERS PARA MENUS Y LISTA DE COMPRAS
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// MOSTRAR Y OCULTAR MENU DESKTOP
function toggleDesktopMenu() {
  aside.classList.add('inactive')
  desktopMenu.classList.toggle('inactive');
}

//MOSTRAR Y OCULTAR MENU MOBILE
function toggleMobileMenu() {
  aside.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

//MOSTRAR Y OCULTAR ASIDE DE LISTA DE COMPRAS
function toggleCarritoAside() {
  desktopMenu.classList.add('inactive')
  mobileMenu.classList.add('inactive')
  aside.classList.toggle('inactive')
}