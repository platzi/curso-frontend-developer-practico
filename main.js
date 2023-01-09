const navMail = document.querySelector('li.navbar-email');
const navMenu = document.querySelector('.desktop-menu');

navMail.addEventListener('click', toggleMenu);

function toggleMenu(){
    navMenu.classList.toggle ('inactive')
}