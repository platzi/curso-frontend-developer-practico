const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarrito);

// Menu del Desktop
function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

//Menu Mobil
function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

// Carrit0 de compras
function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopClose) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }


    aside.classList.toggle('inactive');

}