const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu); // aquí decimos que cuando se de un clic, se ejecute la función toggleDesktopMenu.
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);

// funcion que abre y cierra el menú en desktop
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); // llamamos a nuestra constante/utilizamos la palabra reservada classList para listar una clase / toggle sirve para intercabiar(poner o quitar la clase) / y dentro de los parentesis ponemos la clase que queremos que se intercambie.
};

// funcion que abre y cierra el menú en mobil
function toggleMobileMenu() {
    productDetail.classList.add('inactive'); // Aquí cerramos el product-detail en caso de que este abierto para que no se sobrepongan
    mobileMenu.classList.toggle('inactive'); // llamamos a nuestra constante/utilizamos la palabra reservada classList para listar una clase / toggle sirve para intercabiar(poner o quitar la clase) / y dentro de los parentesis ponemos la clase que queremos que se intercambie.
};

// funcion que abre y cierra el detalle de los productos
function toggleProductDetail() {
    mobileMenu.classList.add('inactive'); // Aquí cerramos el mobile-menu en caso de que este abierto para que no se sobrepongan
    desktopMenu.classList.add('inactive'); // cerramos el menú desktop en caso de que esté abierto
    productDetail.classList.toggle('inactive'); // aquí abrimos el product-detail si esta cerrado o lo cerramos si está abierto. Toggle es un iterable.
}

