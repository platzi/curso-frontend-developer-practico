// var desplegar menu al dar click al email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// var Desplegar menu hamburguesa al dar click al icono 
const burgerIcon = document.querySelector('.burgerIcon');
const mobileMenu = document.querySelector('.mobile-menu');


// desplegar menu al dar click al email
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click');
    // al ejecutar la funcion classList.toggle va a quitar o colocar la clase inactive dependiendo del evento click a*adido anteriormente
    desktopMenu.classList.toggle('inactive');
}
console.log('js funcionando');

// Desplegar menu hamburguesa al dar click al icono 
burgerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    console.log('click');
    // al ejecutar la funcion classList.toggle va a quitar o colocar la clase inactive dependiendo del evento click a*adido anteriormente
    mobileMenu.classList.toggle('inactive');
}