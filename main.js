const menuEmail = document.querySelector('.navbar-email');
const menuDrop = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
    menuDrop.classList.toggle('inactive');
}