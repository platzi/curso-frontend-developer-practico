const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const toggleDesktopMenu = () => desktopMenu.classList.toggle('toggle');

navbarEmail.addEventListener('click', toggleDesktopMenu);

window.addEventListener("click",  ({ target }) => {
  if(desktopMenu.classList.contains('toggle') && target != desktopMenu && target != navbarEmail) {
    toggleDesktopMenu();
  }
});