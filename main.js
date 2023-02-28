// ----- SELECCIONES ------
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// ----- AÑADIR ESCUCHA DE EVENTOS -----
navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHam.addEventListener('click', toggleMobileMenu)

// ----- Cambiar clase correo desktopMeu -----
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive'); //la clase no se le pone el punto
}

// ----- Cambiar clase mobileMenu -----
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}