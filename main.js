const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', ()=>toggleMenu(desktopMenu));
burguerMenu.addEventListener('click', ()=>toggleMenu(mobileMenu));

function toggleMenu(elemento) {
  elemento.classList.toggle('inactive');
}