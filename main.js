/* DESKTOP MENU */

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', showDesktopMenu);

function showDesktopMenu() {  
  /* para que no se pueda abrir el menu + el carrito al mismo tiempo */

    myOrderDesktop.classList.add('inactive'); /* el add activa la clase inactive. O sea que que si esta abierto, lo cierra. */
    desktopMenu.classList.toggle('inactive'); 
};

/* MOBILE MENU */

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', showMobileMenu);

function showMobileMenu() {
  /* para que no se pueda abrir el menu + el carrito al mismo tiempo */

    myOrderDesktop.classList.add('inactive'); /* el add activa la clase inactive. O sea que que si esta abierto, lo cierra. */
    mobileMenu.classList.toggle('inactive');
};

/* SHOPPING KART */

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrderDesktop = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', showMyOrder);

function showMyOrder() {
  /* para que no se pueda abrir el menu + el carrito al mismo tiempo */

    mobileMenu.classList.add('inactive'); /* el add activa la clase inactive. O sea que que si esta abierto, lo cierra. */
    myOrderDesktop.classList.toggle('inactive');
};
