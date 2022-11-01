/*
    Metodo visto para agregar o quitar contenido html de forma dinamica:

    1. Agregarle estilos al componente
    2. Agregar la clase inactive al contenedor padre
    3. Colocarle display; none utuilizando la clase inactive
    4. Seleccionar en JS el elemento que disparará el evente
    5. Seleccionar en JS el elemento que se verá afectado
    6. Crear la función que acceda al elemento modificado:
       - ClassList: Propiedad que contiene los valores de una clase
       - toggle(): Metodo que agrega y quita el valor de una clase
    7. Disparar el evento

    Problema en toggleProductDetail()

*/

let navEmail = document.querySelector(".navbar-email");
let mobileIconMenu = document.querySelector(".menu");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let carritoIconMenu = document.querySelector(".icon-product-detail");
let productDetailAside = document.querySelector(".product-detail");


const toogleDesktopMenu = function () { // quitar y agregar la clase inactive
    desktopMenu.classList.toggle("inactive");
}

const toogleMobileMenu = function () {
    mobileMenu.classList.toggle("inactive");
}

navEmail.addEventListener("click", toogleDesktopMenu);
mobileIconMenu.addEventListener("click", toogleMobileMenu);
carritoIconMenu.addEventListener("click", toogleProductDetail);