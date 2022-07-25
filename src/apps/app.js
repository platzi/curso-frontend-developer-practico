// SELECCION DE ELEMENTOS HTML
let menuEmail = document.querySelector('.desktop-menu');
let email = document.querySelector('.navbar-email');
let iconMenu= document.querySelector('#iconMenu');
let menuBurger= document.querySelector('.mobile-menu');

let showMenuEmail = ()=>{  // mostrar el menu del email
    menuEmail.classList.toggle('inactive');
}

let showMenuMobile = ()=>{
    menuBurger.classList.toggle('inactive');
}

email.addEventListener('click',showMenuEmail);
iconMenu.addEventListener('click', showMenuMobile);