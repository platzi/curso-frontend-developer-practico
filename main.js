// Desktop menu toggle
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");

// Event listeners
menuEmail.addEventListener("click", () => toogleMenu(desktopMenu));
menuHamIcon.addEventListener("click", () => toogleMenu(mobileMenu));

// functions
function toogleMenu(element) {
	element.classList.toggle("inactive");
}
