const emailMenuIcon = document.querySelector('.navbar-email');
//Elemento al que hago click para que aparezca o desaparezca el menu
const emailDesktopMenu = document.querySelector('.desktop-menu'); //Menu que se despliega
//En el parametro del querySelector, se seleccionan las clases que quiera usar para poder manipular el menu

const burguerMenuIcon = document.querySelector('.menu');
const burguerMobileMenu = document.querySelector('.mobile-menu');


const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');//Icono del carrito
const menuShoppingCart = document.querySelector('.product-detail');//Menu desplegable del carrito


emailMenuIcon.addEventListener('click', showDesktopMenu);
burguerMenuIcon.addEventListener('click', showMobileMenu);
shoppingCartIcon.addEventListener('click', showShoppingMenu);

//Cuando se le añade un addEventListener a alguna variable, se pone lo que disparara la funcion... En este caso 'click' 
//y luego la funcion que se disparara cuando se cumpla ese evento

function showDesktopMenu(){
    emailDesktopMenu.classList.toggle('inactive');
    menuShoppingCart.classList.add('inactive');
}

function showMobileMenu(){
    burguerMobileMenu.classList.toggle('inactive');
    menuShoppingCart.classList.add('inactive');
}

function showShoppingMenu(){
    menuShoppingCart.classList.toggle('inactive');
    emailDesktopMenu.classList.add('inactive');
    burguerMobileMenu.classList.add('inactive');
}
//el metodo classList se usa para activar o desactivar, añadir o borrar la propiedad 'inactive' en este caso
//Cuando se pone toggle, se activa o desactiva con el click del addEventListener.
//Cuando se pone add, se añade la funcion 'inactive' por defecto.
//Recordar que inactive es una propiedad  
