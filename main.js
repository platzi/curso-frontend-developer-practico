const navMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navMail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}