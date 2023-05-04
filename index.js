const accountMenu = document.querySelector('.navbar-email');
const accountMenuDropdown = document.querySelector('.desktop-menu');

accountMenu.addEventListener('click', toggleAccountMenu);

function toggleAccountMenu() {
    accountMenuDropdown.classList.toggle('inactive')
}