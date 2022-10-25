const menuEmail = document.querySelector('.navbar-email');
const menuHabIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHabIcon.addEventListener('click', togglemobileHabMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideMenuClosed = aside.classList.contains('inactive');
    // si el menu aside está abierto, entonces hay que cerrarlo
    if (!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileHabMenu () {
    const isAsideMenuClosed = aside.classList.contains('inactive');
    // si el menu aside está abierto, entonces hay que cerrarlo
    if (!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isEmailMenuClosed = menuEmail.classList.contains('inactive');
    // si el Mobile Menu está abierto, hay que cerrarlo
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isEmailMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

