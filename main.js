const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const menuBurguerIcon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const menuCarritoIco = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');


navbar_email.addEventListener('click',toggleDesktopMenu);
desktop_menu.addEventListener('mouseleave',toggleDesktopMenu);


menuBurguerIcon.addEventListener('click',toggleMobileMenu);


menuCarritoIco.addEventListener('click',toggleShopMenu);
asideMenu.addEventListener('mouseleave',toggleShopMenu);

/**Para que funciona toggle? Esta propiedad de classList, lo que hace es revisar, si el elemento actual, tiene esta clase, si la tiene
 * procede a removersela, sino la tiene, procede agregar esa cLASE. Esto ahorra codigo, permitiendo ahorrar un add or remove de un classList
 */
function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
    if(!asideMenu.classList.contains('inactive')){
        asideMenu.classList.toggle('inactive');
    }
}

function toggleMobileMenu(){
    mobile_menu.classList.toggle('inactive');
    if(!asideMenu.classList.contains('inactive')){
        asideMenu.classList.toggle('inactive');
    }
}

function toggleShopMenu(){
    asideMenu.classList.toggle('inactive');

    if(!desktop_menu.classList.contains('inactive')){
        desktop_menu.classList.toggle('inactive');
    }

    if(!mobile_menu.classList.contains('inactive')){
        mobile_menu.classList.toggle('inactive');
    }
}