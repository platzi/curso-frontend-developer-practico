const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);

function toggleDesktopMenu() {
  console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
  mobileMenu.classList.toggle('inactive')
}
