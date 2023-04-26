'use strict'

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//Añadiendo los menús para dispositivos móviles
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

//Solución del profesor

/* function toggleDesktopMenu(){

    //.classList.toggle('x') nos permite añadir o quitar una clase
    //a un elemento dependiendo si éste la tiene o no
    desktopMenu.classList.toggle('inactive');
} */


//Mi solución
function toggleDesktopMenu(){
    if(desktopMenu.classList.contains('inactive') == false){
        desktopMenu.classList.add('inactive');

    }else{
        desktopMenu.classList.remove('inactive');
    }
}

//Función que nos permite hacer que desaparezcan o aparezcan los menús.

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}