const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const categoriesMenuIcon = document.querySelector ('.menu');
const carritoMenuIcon = document.querySelector ('.navbar-shopping-cart');
const categories = document.querySelector ('.mobile-menu');
const aside = document.querySelector ('.product-detail');

menuEmail.addEventListener ('click', toggleUserMenu);
categoriesMenuIcon.addEventListener ('click', toggleCatMenu);
carritoMenuIcon.addEventListener ('click', toggleCarritoAside);

function toggleUserMenu () {
   aside.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}

function toggleCatMenu () {
   aside.classList.add('inactive');
   categories.classList.toggle('inactive');
}

function toggleCarritoAside () {
   desktopMenu.classList.add('inactive');
   categories.classList.add('inactive');
   aside.classList.toggle('inactive');
}
