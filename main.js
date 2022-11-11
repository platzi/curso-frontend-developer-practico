const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//Cada vez que le den click al correo de arriba a la derecha,
//esta funcion hara un toggle
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        //Si esta abierto el aside, cerrarlo
        aside.classList.add('inactive')
    };

    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        //Si esta abierto el aside, cerrarlo
        aside.classList.add('inactive')
    };

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        //Si esta abierto el mobileMenu, cerrarlo
        mobileMenu.classList.add('inactive')
    };

    if(!isDesktopMenuClosed) {
        //Si esta abierto el aside, cerrarlo
        desktopMenu.classList.add('inactive')
    };

    aside.classList.toggle('inactive');
}