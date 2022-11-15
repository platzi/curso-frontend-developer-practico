const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const hamburMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideCarrito = document.querySelector('.product-detail')
const carritoIcon = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburMenuIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {
    let isAsideCarritoOpen = !asideCarrito.classList.toggle('inactive');
    if(isAsideCarritoOpen) {
        asideCarrito.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isAsideCarritoOpen = !asideCarrito.classList.toggle('inactive');
    if(isAsideCarritoOpen) {
        asideCarrito.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    let isMobileMenu = !mobileMenu.classList.toggle('inactive');
    let isDesktopMenu = !desktopMenu.classList.toggle('inactive');
    if(isMobileMenu) {
        mobileMenu.classList.toggle('inactive');
    } else if(isDesktopMenu) {
        desktopMenu.classList.toggle('inactive');
    }
    asideCarrito.classList.toggle('inactive');
}
