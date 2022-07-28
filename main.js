//Selectors

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navBarEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
})