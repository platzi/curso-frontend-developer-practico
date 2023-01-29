const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');

const toggleDesktopMenu = () => {

  desktopMenu.classList.toggle('inactive')

}

navEmail.addEventListener('click', toggleDesktopMenu);

