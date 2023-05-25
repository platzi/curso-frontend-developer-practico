const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//Esto hara que al picarle al emial, se abra el menu secundario
menuEmail.addEventListener('click', toggleDesktopMenu);


//Con la funcion classList.toggle hacemos que este o no este nuestra clase seleccionada.
function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
};