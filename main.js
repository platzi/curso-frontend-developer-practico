const menuEmail = document.getElementsByClassName('navbar-email');
const desktopMenu = document.getElementsByClassName('desktop-menu');
const menuCarIcon = document.getElementsByClassName('navbar-shopping-cart');
const mbl = document.getElementsByClassName('menu');
const menuMbl = document.getElementsByClassName('mobile-menu');
const aside = document.getElementsByClassName('product-detail');

menuEmail[0].addEventListener('click', toggleDesktopMenu);
mbl[0].addEventListener('click', toggleMenuMobil);
menuCarIcon[0].addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside[0].classList.contains('inactive');

  if (!isAsideClosed) {
    aside[0].classList.add('inactive')
  }

  desktopMenu[0].classList.toggle('inactive')
}

function toggleMenuMobil() {
  const isAsideClosed = aside[0].classList.contains('inactive');

  if (!isAsideClosed) {
    aside[0].classList.add('inactive')
  }

  menuMbl[0].classList.toggle('inactive')
}

function toggleCarAside() {
  const isMobileMenuClosed = menuMbl[0].classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu[0].classList.contains('inactive');

  if (!isMobileMenuClosed) {
    menuMbl[0].classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    desktopMenu[0].classList.add('inactive')
  }

  aside[0].classList.toggle('inactive')
}