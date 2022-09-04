//Seleccionamos la clase de la etiqueta a la que se le va a dar click.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');

//Le añadimos el evento.
menuEmail.addEventListener('click', toggleDesktopMenu);

//Por defecto está inactiva, con cada click aparece y con otro desaparece.
function toggleDesktopMenu() {
       desktopMenu.classList.toggle('inactive'); //
}