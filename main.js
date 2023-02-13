//Con esta logica hacemos que el menu aparezca y desaparezca cuando damos click sobre el correo, primero llamamos a los elementos HTML con el query selector y luego con el addEventListener los escuchamos y le decimos el evento y lo que debe hacer con la funcion que creamos

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/*
// esta es la forma que se plantea con condicionales

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }

    mobileMenu.classList.toggle('inactive');    

}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');    
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');    
    }

    aside.classList.toggle('inactive');

}*/

// no es necesario aplicar la dependencia entre el mobileMenu y el desktopMenu ya que por los media query estos menus nunca estan al mismo tiempo.

//Basicamente primero garantizo que el resto de menus esten ocultos para luego mostrar el menu que debe salir.

function toggleDesktopMenu() 
{
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}