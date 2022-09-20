const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamb = document.querySelector('.menu-hamb');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



// Menu desktop, aparece y desaparece
menuEmail.addEventListener('click', toggleDesktopMenu);

//Menu mobile, aparece y desaparece
menuHamb.addEventListener('click', toggleMenuMobile);

//Menu-Aside
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


 function toggleCarritoAside() {
    
    //Guardo en una constante el valor de true o false de su clase inactive
    const isMobileMenuClosed =  mobileMenu.classList.contains("inactive");
    const isDesktopMenu =  desktopMenu.classList.contains("inactive");
    //Si está abierto el munú mobile, lo cierro
    if (!isMobileMenuClosed) {
         mobileMenu.classList.toggle("inactive");
    // Si está abierto el menu Desktop, lo cierro
    } else if (!isDesktopMenu) {
        desktopMenu.classList.toggle("inactive");
    }
    //abro el aside
    aside.classList.toggle('inactive');
}


function toggleDesktopMenu() {
    const isAsideMenuClosed =  aside.classList.contains("inactive");
    //Si esta abierto el menú aside, lo cierro
    if (!isAsideMenuClosed ) {
        aside.classList.toggle("inactive");
   }
    desktopMenu.classList.toggle('inactive')
}



function toggleMenuMobile () {

    const isAsideMenuClosed =  aside.classList.contains("inactive");

    //Si esta abierto el menu aside, lo cierro
    if (!isAsideMenuClosed) {
        aside.classList.toggle("inactive");
   }
    mobileMenu.classList.toggle('inactive');
}






