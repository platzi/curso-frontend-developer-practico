
// Menu correo electronico desktop
const menuEmail = document.querySelector('.navbar-email'); // creo la variable que va a tener el click
const desktopMenu = document.querySelector('.desktop-menu'); // creo la variable que se va a ejecutar despues del click
// Menu movile
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggledesktopMenu); // Escucho el evento desktop
burguerMenu.addEventListener('click', toggleMovileMenu); // Escucho el evento movile

function toggledesktopMenu(){ // creo mi funcion "toggle" es intercambiar ene español
    desktopMenu.classList.toggle('inctive'); // con classList.toggle lo que hacemso es quitar o poner la clase dependiendo si el elemento ya la tiene o no
}

function toggleMovileMenu(){ // creo mi funcion "toggle" es intercambiar ene español
    mobileMenu.classList.toggle('inctive'); // con classList.toggle lo que hacemso es quitar o poner la clase dependiendo si el elemento ya la tiene o no
}



