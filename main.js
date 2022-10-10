/* Para que el menu aparezca y desaparezca cuando se la da click */

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); /* cada vez que le den click a ese elemento de email en el menu,
      se va a ejecutar esta funcion. */
}