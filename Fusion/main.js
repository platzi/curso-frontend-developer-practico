const emailNav = document.querySelector('.navbar-email');
const deskNav = document.querySelector('.desktop-menu')

emailNav.addEventListener('click', togglesDesktopMenu);

function togglesDesktopMenu() {
    deskNav.classList.toggle('inactive');
}