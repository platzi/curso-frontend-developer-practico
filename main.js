/* Eventos del menu desktop */
const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', activeDesktopMenu);

const desktopMenu = document.querySelector('.desktop-menu');

/* Eventos del menu mobile */
const hamburMenu = document.querySelector('.menu')
hamburMenu.addEventListener('click', activeMobileMenu)

const mobileMenu = document.querySelector('.mobile-menu')


/* Eventos del carrito de compra */
const menuCarritoDeCompras = document.querySelector('.navbar-shopping-cart')
menuCarritoDeCompras.addEventListener('click' , showMyOrder)

const porductDetail = document.querySelector('.product-detail')


function activeDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    porductDetail.classList.add('inactive')
}

function activeMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    porductDetail.classList.add('inactive')
}

function showMyOrder(){
    porductDetail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
