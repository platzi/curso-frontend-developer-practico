const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// agrega el evento al elemento
emailMenu.addEventListener('click',toggleMenuDesktop);

// agregamos para cambiar la clase al menu
function toggleMenuDesktop(){
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}