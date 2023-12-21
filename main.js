// 
const menuEmail = document.querySelector('.navbar-email');  // seleccionamos el elemento al que le damos click
const desktopMenu = document.querySelector('.desktop-menu'); // selecciona la clase que señalamos 
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu) // le damos la instruccion 
menuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')  //ejecuta la clase y pone o quita la lista 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')  
}