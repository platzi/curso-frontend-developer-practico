
// Menu correo electronico

const menuEmail = document.querySelector('.navbar-email'); // creo la variable que va a tener el click
const desktopMenu = document.querySelector('.desktop-menu'); // creo la variable que se va a ejecutar despues del clicl

menuEmail.addEventListener('click', toggledesktopMenu); // Escucho el evento

function toggledesktopMenu(){ // creo mi funcion "toggle" es intercambiar ene español
    desktopMenu.classList.toggle('inctive'); // con classList.toggle lo que hacemso es quitar o poner la clase dependiendo si el elemento ya la tiene o no
}