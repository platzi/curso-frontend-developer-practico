const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toogleMenu);

function toogleMenu() {
	desktopMenu.classList.toggle("inactive");
}
