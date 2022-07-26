const menuEmail = document.querySelector('.navbar-right'); // las clases de CSS se 
const desktopMenu = document.querySelector('.desktop-menu'); // importan con un punto al inicio

menuEmail.addEventListener('click', toggleDesktopMenu); // El segundo parametro es una funcion a ejecutarse cuando se hace click (primero parametro)

function toggleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
}



