const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon =document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// toggleDestokMenu
menuEmail.addEventListener('click', () => {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
});

// toggleMobileMenu
menuHamIcon.addEventListener('click', () => {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
});

// toggleMobileMenu
menuCarIcon.addEventListener('click', () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
});