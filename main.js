// desktop 

// boton para mostrar u ocultar el desktop menu
const navbarEmail = document.querySelector('.navbar-email');
// desktop menu
const desktopMenu = document.querySelector('.desktop-menu');

///////// mobile ///////

// icono hamburguesa - boton
const burgerIcon = document.querySelector('.menu')
// mobile menu - menu desplegable
const mobileMenu = document.querySelector('.mobile-menu');

// evento desktop menu 
navbarEmail.addEventListener('click',toggleDesktopMenu);

// evento mobile menu 
burgerIcon.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(){
    // intercambiamos entre agregar o quitar la clase 
    desktopMenu.classList.toggle('inactive')
}

// activa transicion del menu mobile 
function toggleMobileMenu(){
    mobileMenu.classList.toggle('menuMobile-activo')
}