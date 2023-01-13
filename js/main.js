const emailMenu = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop__menu');

const burguerMenu = document.querySelector('.navbar__menu');
const mobileMenu = document.querySelector('.mobile__menu');

const menuCarritoIcon = document.querySelector('.navbar__shopping__cart');
const aside = document.querySelector('.product__detail');

emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toogleCarritoAside() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
}