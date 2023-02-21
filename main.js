const navMenuImail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


navMenuImail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

}