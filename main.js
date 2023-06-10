const menuEmail = document.querySelector('.navbar-email') ; //se crean las variables que provienen de las clases que vamos a trbajar 
const desktopMenu = document.querySelector('.desktop-menu') ;
const menuhamburguer = document.querySelector('.menu') ;
const mobileMenu = document.querySelector('.mobile-menu') ;


menuEmail.addEventListener('click', toggleDesktopMenu); // utilizamos el tan amado addevent con click y la funcion que creamos 
menuhamburguer.addEventListener('click', toggleMobilemenu); // utilizamos el tan amado addevent con click y la funcion que creamos 



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); //creamos la funcion que creamos con toggle que añade o quita segun este o no este 
} //inactive es una clase que creamos que basicamente es display: none

function toggleMobilemenu() {
    mobileMenu.classList.toggle('inactive'); 
} 

