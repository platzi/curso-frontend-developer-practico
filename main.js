const toggleDesktopMenu = () => {
	desktopMenu.classList.toggle('inactive')
}
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', toggleDesktopMenu);
