// Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const imagenMenu = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside= document.querySelector('.product-detail');

// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
imagenMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrito);

// Funciones
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('INACTIVE');
    if (!isAsideClosed) {
        aside.classList.add('INACTIVE')
    }
    desktopMenu.classList.toggle('INACTIVE')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('INACTIVE');
    if (!isAsideClosed) {
        aside.classList.add('INACTIVE')
    }
    mobileMenu.classList.toggle('INACTIVE')
}

function toggleMenuCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('INACTIVE');
    const isDesktopMenuClosed = desktopMenu.classList.contains('INACTIVE');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('INACTIVE')
    }if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('INACTIVE')
    }
     aside.classList.toggle('INACTIVE')
}
    

    

    
