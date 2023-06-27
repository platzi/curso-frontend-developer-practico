/*Para seleccionar la clase con document.querySelector se utiliza el punto(.)*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconHamMenu =document.querySelector('.menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconHamMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    // si inactive está presente la elimina, de lo contrario la añade
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}

