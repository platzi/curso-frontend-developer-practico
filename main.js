const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuhamicon = document.querySelector(".menuhamicon");
const movileleftMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuhamicon.addEventListener("click", togglmovileMenu);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle("inactive");
}


function togglmovileMenu() {
	movileleftMenu.classList.toggle("inactive");
}