const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.hamburger');

const toggleDesktopMenu = () => desktopMenu.classList.toggle('toggle');
const toggleMobileMenu = () => mobileMenu.classList.toggle('mobile-menu-toggle');

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);

window.addEventListener("click",  ({ target }) => {
  if(desktopMenu.classList.contains('toggle') && target != desktopMenu && target != navbarEmail) {
    toggleDesktopMenu();
  }
});