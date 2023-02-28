const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu(){
    desktopMenu.classList.toggle('inactive')
}