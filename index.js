const navbarEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toogleMenu);

function toogleMenu() {
    console.log('click')
    menuDesktop.classList.toggle('inactive');
};