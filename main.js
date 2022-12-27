/* crear variables para seleccionar elementos del html. */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

/* escuchar el metodo click que al presionar el email, aparesca y  desaparesca el menu pequeño. */
/* toogle significa intercambiar */
menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/* se crea la funcion que utilizara la propiedad classList para poner o quitar la clase inactive que cree en el archivo styles.css */
/* Se agrega una condicional que verifica si la etiqueta <aside> esta cerrada o no al presionar el email del usuario. */
function toogleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

/* Creo una nueva funcion para hacer aparecer y desaparecer el menu hamburguesa al presionar el icono de las 3 rayas. */
/* Se agrega una condicional que verifica si la etiqueta <aside> esta cerrada o no al presionar el icono de 3 rayas. */
function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
    
}


/* Creo una nueva funcion para hacer aparecer y desaparecer el menu aside al presionar el icono carrito de compra. */
function toggleCarritoAside() {
    /* Se produce un problema en la vista, si abro el menu de hamburguesa, y tambien el menu del carrito de compra, ambos textos se montan entre ellos, por lo que utilizando JS, se creara una regla que evite esto. */

    /* Creo una variable, la cual se encargara de ver si mobileMenu "contiene" la clase inactive. */
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    /* Utilizando el condicional if() mas ! creo una pregunta con negacion, es decir:  */
    /* Si mobileMenu NO tiene la clase inactive, utilizando add se la agrego. */
    if (!isMobileMenuClosed) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
}