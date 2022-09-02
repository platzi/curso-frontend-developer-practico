// Fusión Desktop menu con la navBar Mail
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
	asideCart.classList.add('inactive');
	desktopMenu.classList.toggle('inactive');
}

// Fusión Mobile menu con la navBar Menú Hamburguesa
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
	asideCart.classList.add('inactive');
	mobileMenu.classList.toggle('inactive');
}

// Fusión Menú Cart con la navBar-Hamburguesa
const menuCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');

menuCart.addEventListener('click', toggleCartMenuAside);

function toggleCartMenuAside() {
	desktopMenu.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	asideCart.classList.toggle('inactive');
}
