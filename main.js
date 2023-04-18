const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobilepMenu);
shoppingCartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle('inactive');
	shoppingCartMenu.classList.add('inactive');
}

function toggleMobilepMenu() {
	mobileMenu.classList.toggle('inactive');
	shoppingCartMenu.classList.add('inactive');
}

function toggleCartMenu() {
	shoppingCartMenu.classList.toggle('inactive');
	mobileMenu.classList.add('inactive');
	desktopMenu.classList.add('inactive');
}
