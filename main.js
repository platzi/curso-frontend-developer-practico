// Desktop menu toggle
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");

// Menu carrito toggle
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const carrito = document.querySelector(".product-detail");


// Event listeners
menuEmail.addEventListener("click", () => {
	toogleMenu(desktopMenu, carrito);
});
menuHamIcon.addEventListener("click", () => {
	toogleMenu(mobileMenu, carrito)
});
menuCarrito.addEventListener("click", () => {
	toogleMenu(carrito, [mobileMenu, desktopMenu]);
});

// functions
function toogleMenu(menuOpen, menusClose) {
	// Verfiy if the menusClose is an array
	menusClose = Array.isArray(menusClose) ? menusClose : [menusClose];

	closeMenu(menusClose);

	menuOpen.classList.toggle("inactive");
}

function closeMenu(elements) {
	elements.forEach((element) => {
		element.classList.add("inactive");
	});
}
