const menuEmail = document.querySelector('.navbar-email');//para conectar con el elemento del email de barra de navegacion
const menuHamburguerIcon = document.querySelector('.menu');//para conectar con el elemento sanduche dde barra de navegacion
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');//
const mobileMenu = document.querySelector('.mobile-menu');//para conectar con el menu mobile
const desktopMenu = document.querySelector('.desktop-menu');//para conectar con el menu desktop
const aside = document.querySelector('.product-detail');//


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    console.log('clickeando menu desktop');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}

function toggleMobileMenu(){
    console.log('clickeando el menu mobile');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');//toggle -> permite intercambiar
}


function toggleCarritoAside(){
    console.log('clickeando el aside');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');//toggle -> permite intercambiar
}
