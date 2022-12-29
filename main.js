const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('#iconMobileMenu');
const iconCarrito = document.querySelector('#iconCarrito');
const carrito = document.querySelector('.product-detail');


menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

iconMobileMenu.addEventListener('click', () => {
    let isCarritoOpen = !carrito.classList.contains('inactive');
    if(isCarritoOpen) {
        carrito.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
});

iconCarrito.addEventListener('click', () => {
    let isMobileMenu = !mobileMenu.classList.contains('inactive');
    if(isMobileMenu) {
        mobileMenu.classList.toggle('inactive');
    }
    carrito.classList.toggle('inactive');
});
