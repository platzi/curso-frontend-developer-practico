const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu')
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const mobileMenu = document.querySelector ('.mobile-menu');
const aside = document.querySelector ('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu ( ) {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}



function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside() {

    //Guardo en una constante el valor true o false de su clase inactive
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // Si está abierto el menu mobile lo cierro
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    // Si está abierto el menu desktop lo cierro
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }

    //abro el aside
    aside.classList.toggle('inactive');
 
}

