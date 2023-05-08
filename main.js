
const desplegable = document.querySelector('.desktop-menu');
const correo = document.querySelector('.navbar-email');

correo.addEventListener('click', toogleClass);

function toogleClass(){
    desplegable.classList.toggle('inactive');
}