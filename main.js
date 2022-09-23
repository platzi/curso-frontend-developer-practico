const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const MENU_CARRITO_ICON = document.querySelector('.navbar-shopping-cart');
const ASIDE = document.querySelector('.product-detail');

/* Implementación del menú para desktop */
menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    //console.log(desktopMenu.classList.contains('inactive'));
    let isAsideOpen = !ASIDE.classList.contains('inactive')

    if (isAsideOpen) {
        ASIDE.classList.toggle('inactive');
        desktopMenu.classList.toggle('inactive');
    } else {
        desktopMenu.classList.toggle('inactive');
    }

}

/**
 * Implementación del menu para mobile.
 */
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    let isCarMenuOpen = !ASIDE.classList.contains('inactive');

    if (isCarMenuOpen) {
        ASIDE.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    } else {
        mobileMenu.classList.toggle('inactive');
    }
}

/**
 * Implementación de detalles de compra - clase 13
 */
MENU_CARRITO_ICON.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('inactive');
        ASIDE.classList.toggle('inactive');
    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.toggle('inactive')
        ASIDE.classList.toggle('inactive');
    } else {
        ASIDE.classList.toggle('inactive');
    }
}