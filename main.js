const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const burguerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShoppingCart = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burguerIconMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCartIcon.addEventListener('click', toggleAsideShoppingCart);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle('inactive');
	asideShoppingCart.classList.add('inactive');
}

function toggleMobileMenu() {
	asideShoppingCart.classList.add('inactive');
	mobileMenu.classList.toggle('inactive');
}

function toggleAsideShoppingCart() {
	mobileMenu.classList.add('inactive');
	desktopMenu.classList.add('inactive');
	asideShoppingCart.classList.toggle('inactive');
}
