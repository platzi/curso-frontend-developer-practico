const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDescktopMenu);

function toggleDescktopMenu() {
	cartDetail.classList.contains('inactive') ? null : toggleShoppingCart();
	descktopMenu.classList.toggle('inactive');
}

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
	cartDetail.classList.contains('inactive') ? null : toggleShoppingCart();
	mobileMenu.classList.toggle('inactive');
}

shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
	mobileMenu.classList.contains('inactive') ? null : toggleMobileMenu();
	descktopMenu.classList.contains('inactive') ? null : toggleDescktopMenu();
	cartDetail.classList.toggle('inactive');
}
