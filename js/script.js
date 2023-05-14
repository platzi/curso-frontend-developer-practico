const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

function toggleMenu(){
    menuDesktop.classList.toggle('inactive');
}
menuEmail.addEventListener('click', toggleMenu);