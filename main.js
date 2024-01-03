//DECLARACION E INICIALIZACION DE VARIABLE
const menuEmail = document.querySelector('.navbar-email') // selecionamos el elemento que daremos click 
const desktopMenu = document.querySelector('.desktop-menu') // selecionamos el elemento mostraremos al dar click 
const menuHamIcon = document.querySelector('.menu') // selecionamos el elemento que daremos clickd
const mobileMenu = document.querySelector('.mobile-menu') // selecionamos el elemento mostraremos al dar click 




//EVENTOS
menuEmail.addEventListener('click', toggleDesktopMenu) // metodo para ejecutar algo cuando le demos click al elemento selecionado
menuHamIcon.addEventListener('click', toggleMobileMenu) // metodo para ejecutar algo cuando le demos click al elemento selecionado



//FUNCIONES
// funcion para que el menu aparezca y desaparezca 
function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')// le pone o le quita la clase inactive si la tiene o no 
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')// le pone o le quita la clase inactive si la tiene o no 
}