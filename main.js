const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

const toggleDesktopMenu = () => {
	const isAsideClosed = aside.classList.contains("inactive");

	if (!isAsideClosed) {
		aside.classList.add("inactive");
	}

	desktopMenu.classList.toggle("inactive");
};

menuEmail.addEventListener("click", toggleDesktopMenu);

const toggleMobileMenu = () => {
	const isAsideClosed = aside.classList.contains("inactive");

	if (!isAsideClosed) {
		aside.classList.add("inactive");
	}

	mobileMenu.classList.toggle("inactive");
};

menuHamIcon.addEventListener("click", toggleMobileMenu);

const toogleCarritoAside = () => {
	const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}

	aside.classList.toggle("inactive");
};

menuCarritoIcon.addEventListener("click", toogleCarritoAside);
