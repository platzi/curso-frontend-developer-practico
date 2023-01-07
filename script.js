const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerIcon.addEventListener('click',toggleMobileMenu);
carritoIcon.addEventListener('click',togglecarritoaside);

function toggleDesktopMenu(){
    //Vamos a preguntar si el elemento con la clase mobileMenu tiene la clase inative
    //Almacenas true o false en la varible
    const isAsideClosed = aside.classList.contains('inactive');
    
    //Primero preguntamos si el otro menú está abierto para que no aparezca uno sobre el otro
    if(!isAsideClosed){//Si está abierto
        aside.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    //Primero preguntamos si el otro menú está abierto para que no aparezca uno sobre el otro
    if(!isAsideClosed){//Si está abierto
        aside.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }
    
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoaside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    //Primero preguntamos si el otro menú está abierto para que no aparezca uno sobre el otro
    if(!isMobileMenuClosed){//Si está abierto
        mobileMenu.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }

    if(!isDesktopMenuClosed){//Si está abierto
        desktopMenu.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }
    //Hacemos que aparezca el aside quitandole la clase inactive
    aside.classList.toggle('inactive');
}

