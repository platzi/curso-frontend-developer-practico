const menuEmail = document.querySelector('.navbar-email');
const desktopMEnu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMEnu.classList.toggle('inactive')


}