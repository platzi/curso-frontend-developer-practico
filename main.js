
//menu desplegable que sale del email (usando una clase de css inactive)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    myOrder.classList.add('inactive');
}

//menu desplegable que sale del menu hamburgueza (usando una clase de css inactive) , no hace falta tocar los @media ya que el menu hamburguesa solo aparece cuando esta en mobile

//@media hace falta para evitar que se queden los menus abiertos si cambian de desktop a mobile

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

iconMenu.addEventListener('click', toggleMobilMenu);

function toggleMobilMenu() {
    mobileMenu.classList.toggle('inactive');
    // El add inactive se usa para obligar a cerrar cualquier otra cosa que no deba estar abierta al mismo tiempo
    myOrder.classList.add('inactive');
}

// Carrito de compras -My order-
const btnCart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('.product-detail');

btnCart.addEventListener('click', toggleCart);

function toggleCart() {

    myOrder.classList.toggle ('inactive');
    //// El add inactive se usa para obligar a cerrar cualquier otra cosa que no deba estar abierta al mismo tiempo
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

}