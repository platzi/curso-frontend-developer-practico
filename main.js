const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const carrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    const isCarritoClosed = carrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        carrito.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isCarritoClosed = carrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        carrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuEmailClosed = menuEmail.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive')
    }
    carrito.classList.toggle('inactive')
}