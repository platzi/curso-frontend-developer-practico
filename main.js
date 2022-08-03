/* Traemos los datos del HTML */ 
const email = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuMobil = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const misOrdenes = document.querySelector('.product-detail');

/*  Creamos un evento para cada tipo de accion */
email.addEventListener('click', toggleMenuDesktop);
menuHamburguesa.addEventListener('click', toggleMenuMobil);
carrito.addEventListener('click', toggleOrdenes);

/* Creamos las funciones que vamos a ejecutar en el menu desktop*/
function toggleMenuDesktop() {
    misOrdenes.classList.add('inactivo');
    menuDesktop.classList.toggle('inactivo');
}
/* Creamos las funciones que vamos a ejecutar en el menu mobil*/
function toggleMenuMobil() {
    /* Cuando haga 'click' se agrege la clase 'inactivo'*/
    misOrdenes.classList.add('inactivo');
    menuMobil.classList.toggle('inactivo');
}
/* Creamos las funciones que vamos a ejecutar en el carrito de compras*/
function toggleOrdenes() {
    /* Evitamos que las vistas se choquen*/
    /* Cuando haga 'click' se agrege la clase 'inactivo' a menuMobil*/
    menuMobil.classList.add('inactivo');
    /* Cuando haga 'click' se agrege la clase 'inactivo' a menuDesktop*/
    menuDesktop.classList.add('inactivo');
    misOrdenes.classList.toggle('inactivo');
}