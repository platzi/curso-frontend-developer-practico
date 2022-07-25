const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShopCartIcon = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobilepMenu)
menuShopCartIcon.addEventListener('click', toggleShoppingCartepMenu)

function toggleDesktopMenu() {
    const isAsideClosed = asideMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        asideMenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu() {
    const isAsideClosed = asideMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        asideMenu.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartepMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    asideMenu.classList.toggle('inactive')
}