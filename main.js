// desktop ///////////////////////////////////////////

// boton para mostrar u ocultar el desktop menu
const navbarEmail = document.querySelector('.navbar-email');
// desktop menu
const desktopMenu = document.querySelector('.desktop-menu');

///////// mobile //////////////////////////////////////////////////

// icono hamburguesa - boton
const burgerIcon = document.querySelector('.menu')
// mobile menu - menu desplegable
const mobileMenu = document.querySelector('.mobile-menu');

/// aside shopping cart ///////////////////////////////////////////
// boton shopping cart 
const shoppingCart = document.querySelector('.navbar-shopping-cart');
// muestra aside navbar shopping cart 
const asideShoppingCart = document.querySelector('.product-detail')

//////////////////////////// EVENTOS //////////////////////////
// desktop menu 
navbarEmail.addEventListener('click',toggleDesktopMenu);

// mobile menu 
burgerIcon.addEventListener('click',toggleMobileMenu);

// Aside shopping cart 
shoppingCart.addEventListener('click',toggleAsideShoppingCart);

/////////////////////////// FUNCIONES /////////////////////////

// desktop 
function toggleDesktopMenu(){
    // intercambiamos entre agregar o quitar la clase 
    desktopMenu.classList.toggle('inactive')
    // si estuviera activo el asideShoppingCart, lo oculto 
    asideShoppingCart.classList.add('inactive');
}

// mobile 
// activa transicion del menu mobile 
function toggleMobileMenu(){
    mobileMenu.classList.toggle('menuMobile-activo')

    // corroboro si esta abierto el aside shopping cart 
    if(!asideShoppingCart.classList.contains('inactive')){
        // si esta abierto, lo cierro 
        console.log('esta abierto');
        asideShoppingCart.classList.toggle('inactive');
    }
}

// aside shopping cart 
function toggleAsideShoppingCart(){
    asideShoppingCart.classList.toggle('inactive');

    // si esta abierto el menu mobile, lo cierro 
    // metodo contains corrobora si ese elemento contiene la clase 
    if(mobileMenu.classList.contains('menuMobile-activo')){
        mobileMenu.classList.toggle('menuMobile-activo')
    }

    // intento de ocultar y mostrar menu 
    // asideShoppingCart.classList.toggle('aside-activo');
    
    // si estuviera activo el desktopMenu, lo oculto 
    desktopMenu.classList.add('inactive');
}