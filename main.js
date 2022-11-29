
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // toggle quita o pone la clase, dependiendo de si la tiene o no
    desktopMenu.classList.toggle('inactive'); 
    
}