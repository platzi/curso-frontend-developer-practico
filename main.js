//Selectores
const menuEmail = document. querySelector ('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Llamadas
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', togglemobilMenu)


function toggleDesktopMenu() {
console. log('Click');
desktopMenu.classList.toggle('inactive');
}

function togglemobilMenu() {
    console. log('Click');
    mobileMenu.classList.toggle('inactive');
    }