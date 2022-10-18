const navShopCar = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');

navShopCar.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');
}