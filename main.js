// Menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    
    mobileMenu.classList.add('inactive');
    carritoMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

// Menu mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', showMobileMenu);

function showMobileMenu() {
    
    desktopMenu.classList.add('inactive');
    carritoMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// Menu carrito de compras
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');

menuCarrito.addEventListener('click', showCarritoAside);

function showCarritoAside() {
    
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    carritoMenu.classList.toggle('inactive');
}
