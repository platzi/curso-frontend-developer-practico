const menuEmail = document.querySelector('.navbar-email');//creo una variable 
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);/* toggleDesktopMenu es una funcion */

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {//si el aside(carrito) no esta cerrado
        aside.classList.toggle('inactive');//cierro el aside(carrito) con este metodo
    }
    desktopMenu.classList.toggle('inactive');
}

/* Para que aparezca y desaparezca el menu hamburguesa */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {//si el aside no esta cerrado
        aside.classList.toggle('inactive');//cierro el aside con este metodo
    }
    mobileMenu.classList.toggle('inactive');
}

/* Para que aparezca o desaparezca el Carrito de Compras */

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleCarritoAside(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){ //si el MenuMobile esta abierto
        mobileMenu.classList.toggle('inactive');//cierro el menu mobile
    }
    if(!isDesktopMenu){
        desktopMenu.classList.toggle('inactive');//cierro el desktop menu
    }

    aside.classList.toggle('inactive');

}





