const DesktopMenu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click',toggleNavEmail);

function toggleNavEmail() {
    DesktopMenu.classList.toggle('inactive');
}
