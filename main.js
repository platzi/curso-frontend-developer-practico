const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


const toggleDesktopMenu = () => {

  desktopMenu.classList.toggle('inactive');

}

const toggleMobileMenu = () => {

  mobileMenu.classList.toggle('inactive');

}

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);

