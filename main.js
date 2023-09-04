const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBarIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBarIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', togglesaide);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');     
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}


function togglesaide() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }else if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}