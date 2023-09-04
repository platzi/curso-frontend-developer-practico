// Funcion para darle interactividad al menu desktop dando click al correo.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBarIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBarIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
