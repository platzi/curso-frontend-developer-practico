const navMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navMail.addEventListener('click', toggleDesktopMenu);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toggleAside() {
  aside.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}
  

