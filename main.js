//Codigo de JS para unir Proyecto de HTML y CSS - Curso Practico Frontend
const navEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
     desktopMenu.classList.toggle('inactive');
}