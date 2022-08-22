const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('#desktopMenu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

}