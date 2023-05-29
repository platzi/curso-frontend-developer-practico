const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const carrito = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu(){

    // // mi solucion
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }else{
    //     desktopMenu.classList.add('inactive');
    // }

    // solucion mas corta
    carrito.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    carrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    carrito.classList.toggle('inactive');
}