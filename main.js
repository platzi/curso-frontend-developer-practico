const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const botonMemuMB = document.querySelector('.menu');
const menumobile = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const BarraCarrito = document.querySelector('.product-detail');
//fin de variables
menuEmail.addEventListener('click', menuDesplegable);
botonMemuMB.addEventListener('click', toggleMenuMobile);
iconCarrito.addEventListener('click', Carritotoggle);
function menuDesplegable() {
    let closeBarraCarrito = BarraCarrito.classList.contains('inactive');
    if (!closeBarraCarrito) {
        BarraCarrito.classList.add('inactive')
    }
    menuDesktop.classList.toggle('inactive');
}
function toggleMenuMobile() {
    let closeBarraCarrito = BarraCarrito.classList.contains('inactive');
    if (!closeBarraCarrito) {
        BarraCarrito.classList.add('inactive')
    }
    menumobile.classList.toggle('inactive');
}
function Carritotoggle(){
    let closemenumobile = menumobile.classList.contains('inactive');
    let closemenuDesktop  = menuDesktop.classList.contains('inactive');
    if (!closemenumobile) {
        menumobile.classList.add('inactive')
    }
    if (!closemenuDesktop) {
        menuDesktop.classList.add('inactive')
    }
    BarraCarrito.classList.toggle('inactive');
}