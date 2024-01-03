//DECLARACION E INICIALIZACION DE VARIABLE
const menuEmail = document.querySelector('.navbar-email') // selecionamos el elemento que daremos clickdesktop-menu
const desktopMenu = document.querySelector('.desktop-menu') // selecionamos el elemento mostraremos al dar click desktop-menu


//EVENTOS
menuEmail.addEventListener('click', toggleDesktopMenu) // metodo para ejecutar algo cuando le demos click al elemento selecionado


//FUNCIONES
// funcion para que el menu aparezca y desaparezca 
function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')// le pone o le quita la clase inactive si la tiene o no 
}