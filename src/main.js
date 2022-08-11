const menuEmail = document.querySelector('li.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const toggleDesktopMenu = () => desktopMenu.classList.toggle('inactive');

menuEmail.addEventListener('click',toggleDesktopMenu)