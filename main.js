const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');


navbar_email.addEventListener('mouseenter',toggleDesktopMenu);
desktop_menu.addEventListener('mouseleave',toggleDesktopMenu);

/**Para que funciona toggle? Esta propiedad de classList, lo que hace es revisar, si el elemento actual, tiene esta clase, si la tiene
 * procede a removersela, sino la tiene, procede agregar esa cLASE. Esto ahorra codigo, permitiendo ahorrar un add or remove de un classList
 */
function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
}