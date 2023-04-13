const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuIcon = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    } 

    desktopMenu.classList.toggle('inactive')
}

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

if (!isAsideClosed) {
    aside.classList.add('inactive')
}

    menuMobile.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside () {
const isMobileMenuClosed = menuMobile.classList.contains('inactive');
const isNavBarEmailClosed = menuEmail.classList.contains('inactive')

if (!isMobileMenuClosed) {
    menuMobile.classList.add('inactive')
} else {desktopMenu.classList.add('inactive')}

aside.classList.toggle('inactive');
}