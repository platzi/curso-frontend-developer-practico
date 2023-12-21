// 
const menuEmail = document.querySelector('.navbar-email');  // seleccionamos el elemento al que le damos click
const desktopMenu = document.querySelector('.desktop-menu'); // selecciona la clase que señalamos 

menuEmail.addEventListener('click', toggleDesktopMenu) // le damos la instruccion 

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')  //ejecuta la clase y pone o quita la lista 
}