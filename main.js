//Seleccionamos la clase de la etiqueta a la que se le va a dar click.
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');


//Le añadimos el evento.
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);

//Por defecto está inactiva, con cada click aparece y con otro desaparece.

function toggleDesktopMenu() {
       desktopMenu.classList.toggle('inactive'); //Logica 
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}