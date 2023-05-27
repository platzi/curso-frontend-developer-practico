const menuEmail = document.querySelector('.navbar-email'); //seleccionamos la clase, y al hacer click en esa clase queremos que aparezca el menu email.

const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}