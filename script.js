/*Variables para mostrar menu desktop */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Variables para mostrar menu mobile */
const menu = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');

/*Variables para mostrar carrito de compras */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

/*Mostramos menu desktop */
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

/*Mostramos menu mobile */
menu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
}

/*Mostramos carrito de compras */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

