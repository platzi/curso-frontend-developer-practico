const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);


//Se agrega la clase inactive o quita cada que el usuario da click al "correo"
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
