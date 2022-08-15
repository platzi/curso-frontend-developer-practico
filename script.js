const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive');
}
