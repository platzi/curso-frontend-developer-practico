const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

const carMenu = document.querySelector(".navbar-shopping-cart");
const productMenu = document.querySelector(".product-detail");
const isProductMenuClosed = productMenu.classList.contains("inactive");

menuEmail.addEventListener("click", toggleDesktopMenu);

burgerMenu.addEventListener("click", toggleMobileMenu);

carMenu.addEventListener("click", toggleProductMenu);

function toggleDesktopMenu() {
	if (isProductMenuClosed) {
		productMenu.classList.add("inactive");
	}
	desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
	if (isProductMenuClosed) {
		productMenu.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
}

function toggleProductMenu() {
	if (isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}
	if (isDesktopMenuClosed) {
		desktopMenu.classList.add("inactive");
	}
	productMenu.classList.toggle("inactive");
}
