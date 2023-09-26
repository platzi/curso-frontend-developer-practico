console.log('JS Conectado');

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

burguerMenuIcon.addEventListener('click',toggleMobileMenu); //Al hacer click en el icono de hamburguesa, ejecuta la función que 'inactiva' el menu Mobile

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');    
}


function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');  //Inactivar menu mobile
    
}