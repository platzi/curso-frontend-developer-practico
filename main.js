// Diferentes seleccionadores de elementos html
const menuEmail = document.querySelector('.navbar-email');
const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const menuHamImg = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

// Escuchador de eventos "clicks"
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamImg.addEventListener('click', toggleMobileMenu);
menuCarroIcon.addEventListener('click', toggleAside);

// Funciones para manejar eventos en el html
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
function toggleAside() {
    aside.classList.toggle('inactive');
}