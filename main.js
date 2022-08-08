const menuEmail = document.querySelector('.navbar-email');
const desktopManu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesltopMenu);

function toggleDesltopMenu(){
    desktopManu.classList.toggle('inactive');
}