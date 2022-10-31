const menuEmail = document.querySelector('.navbar-email'); // Selectores
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle('inactive');
}