let navbarEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
    desktopMenu.classList.toggle('inactive');
}