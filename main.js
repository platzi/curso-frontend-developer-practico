const menuEmail = document.querySelector('.navbar-email');
const burguerMenuIcon = document.querySelector('.menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    const isCartOpenMenuClosed = aside.classList.contains('inactive');

    if(!isCartOpenMenuClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}
