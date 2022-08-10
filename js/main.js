const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    // display: block; switch to none
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

window.onresize = function () {
    document.documentElement.scrollWidth <= 640 && desktopMenu.classList.add('inactive');
    document.documentElement.scrollWidth >= 641 && mobileMenu.classList.add('inactive');
  };
  onresize();