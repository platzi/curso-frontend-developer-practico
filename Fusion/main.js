const emailNav = document.querySelector('.navbar-email');
const deskNav = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const carroIcon = document.querySelector('.navbar-shopping-cart');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

emailNav.addEventListener('click', togglesDesktopMenu);
menuIcon.addEventListener('click', togglesMobileMenu);
carroIcon.addEventListener('click', togglesCarritoAside);

function togglesDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    deskNav.classList.toggle('inactive');
}

function togglesMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}

function togglesCarritoAside() {
    const ismenuMobileClosed = menuMobile.classList.contains('inactive')
    const isDeskmenuClosed = deskNav.classList.contains('inactive')
    
    if(!ismenuMobileClosed) {
        menuMobile.classList.add('inactive');
    } else if(!isDeskmenuClosed) {
        deskNav.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}