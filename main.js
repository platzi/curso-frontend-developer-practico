const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu-burger');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        // Si mobileMenu esta abierto, hay que cerrarlo
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive'); 
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        // Si mobileMenu esta abierto, hay que cerrarlo
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive'); 
}

function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // Si mobileMenu esta abierto, hay que cerrarlo
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        // Si desktopMenu esta abierto, hay que cerrarlo
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}
