const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoaside);

function toggleDesktopMenu (){
    const isAsideClosed =   aside.classList.contains('inactive');
   
   if(!isAsideClosed){
    aside.classList.add('inactive');
}
desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed =   aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//click a carrito
function toggleCarritoaside() {
    //cierra el mobile menu cada que se le da click al carrito
    const isMobileMenuClosed =   mobileMenu.classList.contains('inactive');
        desktopMenu.classList.add('inactive');
    
    //Si esta abuierto el menu mobile
     if(!isMobileMenuClosed){
        // lo cierra
        mobileMenu.classList.add('inactive');
    }// si esta cerrado lo abre y viceversa
    aside.classList.toggle('inactive');
}



