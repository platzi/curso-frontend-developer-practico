//Inicio del menu para que aparesca. 
//vamos a agarrar el objeto email para hacer que el menu aparesca.
const menu_email = document.querySelector('.navbar-email');
const menu_desktop = document.querySelector('.desktop-menu');
menu_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    menu_desktop.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}

// fin Agregando Menu Correo

// inicio MenuHamburguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',toggleMenuHamIcon)
function toggleMenuHamIcon(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}
// fin menu ham


// inicio MenuHamburguesa
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuCarritoIcon.addEventListener('click',toggleMenuCarrito)
aside.addEventListener('click',toggleMenuCarrito)

function toggleMenuCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */
}
// fin menu ham