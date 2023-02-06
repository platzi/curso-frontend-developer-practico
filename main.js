const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleDesktopMenu = () => {
	console.log("Toggle desktop menu");
	desktopMenu.classList.toggle("inactive");
};

menuEmail.addEventListener("click", toggleDesktopMenu);

const toggleMobileMenu = () => {
	mobileMenu.classList.toggle("inactive");
};

menuHamIcon.addEventListener("click", toggleMobileMenu);
