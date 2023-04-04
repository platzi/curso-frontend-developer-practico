const desktopMenu =  document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');

menuEmail.addEventListener('click', toggleDesktopMenu); 

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}