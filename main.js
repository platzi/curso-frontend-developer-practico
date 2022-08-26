// account menu

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
	let isAsideClosed = aside.classList.contains("inactive");

	if (!isAsideClosed) {
		aside.classList.add("inactive");
	}

	desktopMenu.classList.toggle("inactive");
}

// hamburger responsive menu

const menuHamIcon = document.querySelector(".menu-hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
	let isAsideClosed = aside.classList.contains("inactive");

	if (!isAsideClosed) {
		aside.classList.add("inactive");
	}

	mobileMenu.classList.toggle("inactive");
}

// cart navbar

const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuCartIcon.addEventListener("click", toggleMenuCartIcon);

function toggleMenuCartIcon() {
	let isMobileMenuClosed = mobileMenu.classList.contains("inactive");
	let isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}
	if (!isDesktopMenuClosed) {
		desktopMenu.classList.add("inactive");
	}

	aside.classList.toggle("inactive");
}
