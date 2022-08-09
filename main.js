const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', taggDesktopMenu);

function taggDesktopMenu(){

    desktopMenu.classList.toggle('inactive')

}
