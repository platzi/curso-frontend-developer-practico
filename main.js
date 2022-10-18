// Diferentes seleccionadores de elementos html
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Escuchador de eventos "clicks"
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamImg.addEventListener('click', toggleMobileMenu);

// Funciones para manejar eventos en el html
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}