// cada que le damos click al email debe aparecer el menu.
const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
    // cada que le demos click se hara la funcion 
menuMail.addEventListener('click', toggleDEsktopMenu);

function toggleDEsktopMenu() {
    // lo que vamos  a hacer es colocarle o quitarle la clase inactive si ya la tiene o no
    desktopMenu.classList.toggle('inactive');
}