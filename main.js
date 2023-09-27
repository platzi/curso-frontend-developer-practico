const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamDesktop = document.querySelector('.menu');
const desktopMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamDesktop.addEventListener('click', tooggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}

function tooggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
     }

    desktopMobile.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = desktopMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    if(!isMobileMenuClosed) {
       desktopMobile.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

