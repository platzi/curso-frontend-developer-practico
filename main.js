// ----- SELECCIONES ------
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// ----- AÑADIR ESCUCHA DE EVENTOS -----
navbarEmail.addEventListener('click', cambiarDesktopMenu);

// ----- Función que oculta o muestra la clase inactive -----
function cambiarDesktopMenu() {
  desktopMenu.classList.toggle('inactive'); //la clase no se le pone el punto
}