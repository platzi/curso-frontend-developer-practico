const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileBoton = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
/* QuerySelector selecciona cualquier selector ya sea clase/id */

menuEmail.addEventListener("click", toggleDesktopMenu); 
menuMobileBoton.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");
    if(!isAsideClosed){
        aside.classList.add("inactive");
        desktopMenu.classList.remove("inactive");
    }

     /* Si no hay conflictos, que togglée */
    else{
        desktopMenu.classList.toggle("inactive");
    }
    /* El método "toogle" lo que hace es alternar entre on y off
    
    En este caso lo que hace es cambiar el display: none que previamente hemos especificado en el CSS*/
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");
    /* Si el aside está abierto entonces lo cerramos y abrimos este */
    if(!isAsideClosed){
        aside.classList.add("inactive");
        menuMobile.classList.remove("inactive");
    }
    /* De lo contrario que togglée sin problema */
    else{
        menuMobile.classList.toggle("inactive");
    }
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains("inactive");

/*     Si el menú mobile está abierto entonces lo cierras y abrimos este */
    if(!isMobileMenuClosed){
        menuMobile.classList.add("inactive");
        aside.classList.remove("inactive");
    }

     /* Si no hay conflictos, que togglée */
    else{
        aside.classList.toggle("inactive");
    }
}