const navEmail = document.querySelector(".navbar-email");
const deskTop = document.querySelector(".desktop-menu")

navEmail.addEventListener("click", showMenu)

function showMenu() {
	console.log("click")
	deskTop.classList.toggle("inactive")
}