const navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productoDetalle = document.querySelector('.product-detail');

navbar.addEventListener('click', toogleMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carrito.addEventListener('click', mostrarProductosCarrito);

function toogleMenu(){
desktopMenu.classList.toggle('inactive');
}


function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function mostrarProductosCarrito(){
    productoDetalle.classList.toggle('inactive');
}

