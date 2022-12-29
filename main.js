// toogle = intercambiar

// Menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Menu mobile
const hamburguerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// My order
const carritoIconMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// Menu desktop
menuEmail.addEventListener('click', toogleDesktopMenu);

// Menu mobile
hamburguerIconMenu.addEventListener('click', toogleMobileMenu);

// My order
carritoIconMenu.addEventListener('click', toogleMyCarritoMenu);

function toogleDesktopMenu() {
    const isMyCarritoClosed = aside.classList.contains('inactive');

    if (!isMyCarritoClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    // const isMyCarritoClosed = aside.classList.contains('inactive');

    // if (!isMyCarritoClosed) {
    //     aside.classList.add('inactive');
    // }

    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toogleMyCarritoMenu() {
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    //     mobileMenu.classList.add('inactive');
    //     desktopMenu.classList.add('inactive');
    // }

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
