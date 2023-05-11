
const desplegable = document.querySelector('.desktop-menu');
const correo = document.querySelector('.navbar-email');
const hamburger = document.querySelector('.menu');
const menuView = document.querySelector('.mobile-menu');

correo.addEventListener('click', toogleClass);


function toogleClass(){
    desplegable.classList.toggle('inactive');
}

hamburger.addEventListener('click', menuHamburger);

function menuHamburger(){
    menuView.classList.toggle('inactive');
}