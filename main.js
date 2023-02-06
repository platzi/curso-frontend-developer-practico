const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu()
{
  // toggle('class') pone o quita la clase dependiendo si existe o no
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
  mobileMenu.classList.toggle('inactive');
}











