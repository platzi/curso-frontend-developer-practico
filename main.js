// Elementos HTML
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// Escuchar eventos
emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carMenuIcon.addEventListener('click', toggleCarAside);

// Funciones tras los eventos
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    // alternar clase inactive
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarAside() {
    // verificar si los menús están cerrados
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // si no están cerrados, los cierra
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}