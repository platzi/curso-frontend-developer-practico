// Toggle Menu Desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
	const isAsideCartMenuCerrado = asideCartMenu.classList.contains("inactive");
	if (!isAsideCartMenuCerrado) {
		asideCartMenu.classList.add("inactive");
	}
	desktopMenu.classList.toggle("inactive");
}

// Toggle Menu Mobile
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu-icon");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
	const isAsideCartMenuCerrado = asideCartMenu.classList.contains("inactive");
	if (!isAsideCartMenuCerrado) {
		asideCartMenu.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
}

// Toggle Aside-Carrito - Mobile y desktop
const asideCartMenu = document.querySelector(".product-detail");
const cartIcon = document.querySelector(".navbar-shopping-cart");

cartIcon.addEventListener("click", toggleCarrito);

function toggleCarrito() {
	const isMobileMenuCerrado = mobileMenu.classList.contains("inactive");
	const isDesktopMenuCerrado = desktopMenu.classList.contains("inactive");

	if (!isMobileMenuCerrado || !isDesktopMenuCerrado) {
		mobileMenu.classList.add("inactive");
		desktopMenu.classList.add("inactive");
	}
	asideCartMenu.classList.toggle("inactive");
}
