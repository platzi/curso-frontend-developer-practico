// Primero se crean constnates para llamar a las clases de HTML

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Está atento a cuando se hace click en navbar-email y al hacer click ejecuta la función toggleDesktopMenu

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
   desktopMenu.classList.toggle('inactive')
};