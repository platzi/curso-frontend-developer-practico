const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // Validar si este elemento contiene la clase especificada
    // True  > elimina
    // False > agrega
    desktopMenu.classList.toggle('inactive');
}