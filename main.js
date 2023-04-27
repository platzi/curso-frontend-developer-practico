'use strict'

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//Añadiendo los menús para dispositivos móviles
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//Añadiendo el carrito de compras y los detalles de los productos.

const carrito = document.querySelector(".navbar-shopping-cart");
const productDetails = document.querySelector(".product-detail");

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

//Añadiendo el addEventListener al carrito para mandar a llamar a los detalles de los productos.
carrito.addEventListener('click', toggleProductDetail);

//Solución del profesor

/* function toggleDesktopMenu(){

    //.classList.toggle('x') nos permite añadir o quitar una clase
    //a un elemento dependiendo si éste la tiene o no
    desktopMenu.classList.toggle('inactive');
} */


//Mi solución
function toggleDesktopMenu(){
    if(desktopMenu.classList.contains('inactive') == false){
        desktopMenu.classList.add('inactive');

    }else{
        desktopMenu.classList.remove('inactive');
    }

    productDetails.classList.add('inactive')
}

//Función que nos permite hacer que desaparezcan o aparezcan los menús.

function toggleMobileMenu(){
    //Manda a agregar la clase "inactive" a los detalles de los productos para que desaparezcan cada vez que se abre el menú de móvil.
    productDetails.classList.add("inactive")
    mobileMenu.classList.toggle('inactive');
}

//Función que nos permite que aparezcan o desaparezcan los detalles de los productos.

function toggleProductDetail(){
    productDetails.classList.toggle("inactive");

    //Le añade la clase 'inactive' al menú de teléfono y al menú de pc cada vez que se abran los detalles de los productos.
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}