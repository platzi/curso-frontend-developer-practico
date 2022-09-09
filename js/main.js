const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const arrowAsideClose = document.querySelector('.arrow-close');

const mobileMenuLine = document.querySelector('.mobile-menu ul:nth-child(1)');

const toggleDesktopMenu = () => {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
};

const toggleCarritoAside = () => {
    const isMobileMenuOpen = mobileMenu.classList.contains('active');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen || !isDesktopMenuClose) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
};

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
arrowAsideClose.addEventListener('click', toggleCarritoAside);
