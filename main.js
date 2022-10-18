const navShopCar = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navShopCar.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobilepMenu)

function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
   mobileMenu.classList.toggle('inactive');
}

