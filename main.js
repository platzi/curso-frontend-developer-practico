const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    
    desktopMenu.classList.toggle('inactive');//classList.toggle, quita o pone una clase dependiendo si la tiene o no

}
