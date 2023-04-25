'use strict'

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', toggleDesktopMenu);

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