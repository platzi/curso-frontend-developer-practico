const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const menuCarro = document.querySelector (".navbar-shopping-cart");
const aside = document.querySelector (".product-detail");


menuEmail.addEventListener('click', toggleMenu);
menuIcon.addEventListener ('click', toggleMobile);
menuCarro.addEventListener ('click', toggleCarro);


function toggleMenu (){
    const isAsideClosed = aside.classList.contains('inactivo');
    if( !isAsideClosed){
        aside.classList.add('inactivo')
    }
    desktopMenu.classList.toggle('inactivo');

}

function toggleMobile (){
    const isAsideClosed = aside.classList.contains('inactivo');
    if( !isAsideClosed){
        aside.classList.add('inactivo')
    }
    mobileMenu.classList.toggle('inactivo');

}

function toggleCarro (){
    const isMobilClosed = mobileMenu.classList.contains('inactivo');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactivo')
        if( !isMobilClosed){
        mobileMenu.classList.add('inactivo')
    }
    aside.classList.toggle('inactivo')
   
    if( !isDesktopMenuClosed){
        desktopMenu.classList.add('inactivo')
    }
    mobileMenu.classList.toggle('inactivo')
}


