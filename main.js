const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carShoppingIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


// Navbar Menu
menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('.inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('.inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


// Shopping Car
carShoppingIcon.addEventListener('click', toggleShoppingCar);

function toggleShoppingCar() {
    const isMobileMenuClosed = mobileMenu.classList.contains('.inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('.inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}