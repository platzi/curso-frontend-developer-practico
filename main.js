const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    deskMenu.classList.toggle('inactive')
}