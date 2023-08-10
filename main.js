const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    //Si el aside esta abierto lo cerramos al hacer click al menu hamburguesa
    if(!isAsideClosed){ 
        aside.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    //Si el aside esta abierto lo cerramos al hacer click al menu hamburguesa
    if(!isAsideClosed){ 
        aside.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //contains: pregunta si existe cierta clase. Nos devuelve true o false
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  
    //Si el menu mobile esta abierto lo cerramos al hacer click al carrito
   if(!isMobileMenuClosed || !isDesktopMenuClosed){ 
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    } 
    

    aside.classList.toggle('inactive'); 
}