const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    !isAsideClosed ? aside.classList.add('inactive') : true;

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    !isAsideClosed ? aside.classList.add('inactive') : true;

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    !isMobileMenuClosed ? mobileMenu.classList.add('inactive') : true;
    !isDesktopMenuClosed ? desktopMenu.classList.add('inactive') : true;

    aside.classList.toggle('inactive');
}