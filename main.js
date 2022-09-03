// Toggle Menu Desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle("inactive");
}

// Toggle Menu Mobile
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu-icon");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
	mobileMenu.classList.toggle("inactive");
}

// Toggle Aside-Carrito
const asideCartMenu = document.querySelector(".product-detail");
const cartIcon = document.querySelector(".navbar-shopping-cart");

cartIcon.addEventListener("click", toggleCarrito);

function toggleCarrito() {
	asideCartMenu.classList.toggle("inactive");
}
