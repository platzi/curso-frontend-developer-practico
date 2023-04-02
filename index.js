const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $iconMenu = document.querySelector('.iconMenu');
const $mobileMenu = document.querySelector('.mobile-menu');



$menuEmail.addEventListener('click', toggleDesktopMenu);
$iconMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
  $desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  $mobileMenu.classList.toggle('inactive');
}