const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconBurgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Despliegue de menú para Desktop
menuEmail.addEventListener('click', toggleMenuDesktop); // "toggle" significa intercambiar  

function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');           // El método ".classList.toggle()" se encarga de añadir y quitar la clase ".inactive" (Es como un botón de una lampára)
}


// Despliegue de menú para Mobile
iconBurgerMenu.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){
    mobileMenu.classList.toggle('oculto');              // Acá usé otra transición para mostra el menú para mobile
}

