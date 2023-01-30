// desplegar menu al dar click al email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click');
    // al ejecutar la funcion classList.toggle va a quitar o colocr la clase inactive dependiendo del evento click a*adido anteriormente
    desktopMenu.classList.toggle('inactive');
}
console.log('js funcionando');