const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileBoton = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
/* QuerySelector selecciona cualquier selector ya sea clase/id */

menuEmail.addEventListener("click", toggleDesktopMenu); 
menuMobileBoton.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    /* El método "toogle" lo que hace es alternar entre on y off
    
    En este caso lo que hace es cambiar el display: none que previamente hemos especificado en el CSS*/
}

function toggleMobileMenu(){
    menuMobile.classList.toggle("inactive");
}