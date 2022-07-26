const menuEmail = document.querySelector('.navbar-right'); // las clases de CSS se 
const desktopMenu = document.querySelector('.desktop-menu'); // importan con un punto al inicio
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu); // El segundo parametro es una funcion a ejecutarse cuando se hace click (primero parametro)

function toggleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
}

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu()
{
    mobileMenu.classList.toggle('inactive');
}

