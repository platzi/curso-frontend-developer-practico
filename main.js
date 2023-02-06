const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const toggleDesktopMenu = () => {
	console.log("Toggle desktop menu");
	desktopMenu.classList.toggle("inactive");
};

menuEmail.addEventListener("click", toggleDesktopMenu);
