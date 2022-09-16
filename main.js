// codigo js para mostrar y deshacer el menu cuando el usuario de un click
const menuEmail = document.querySelector('.navbar-email');
// este es el menu para desktop
const desktopMenu = document.querySelector('.desktop-menu');
// este es el menu para icono del carro
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
// este es el menu icono para modile
const menuHamIcon = document.querySelector('.menu');
// y esta es la clase mobiñe menu su contenido
const mobileMenu = document.querySelector('.mobile-menu');
// este es el aside d3l producto del carrito
const aside = document.querySelector('.product-detail');

// este es el menu para desktop
menuEmail.addEventListener('click', toggleDesktopMenu);
// este es el menu para mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);
// este es el aside del producto con el icono carrito
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


// El add()método de la DOMTokenListinterfaz agrega los tokens dados a la lista, omitiendo los que ya están presentes.
// El toggle()método de la DOMTokenListinterfaz elimina un token existente de la lista y lo devuelve false. Si el token no existe, se agrega y la función devuelve true.


// function para hacer que aparecer o desaparecer el menú principal cunando el usuario de un click
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    // const isAsideClosed = aside.classList.contains('inactive');  

    // if(!isAsideClosed) {
    //     aside.classList.add('inactive');
    // }

    // desktopMenu.classList.toggle('inactive');
}

// esta es la funcion del el icono del menu para mobile
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    // const isAsideClosed = aside.classList.contains('inactive');  

    // if(!isAsideClosed) {
    //     aside.classList.add('inactive');
    // }

    // mobileMenu.classList.toggle('inactive');
}

// esta es la function del carrito del aside producto
function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    // const isMobileClosed = mobileMenu.classList.contains('inactive');  

    // if(!isMobileClosed) {
    //     mobileMenu.classList.add('inactive');
    // }

    // aside.classList.toggle('inactive');
}
