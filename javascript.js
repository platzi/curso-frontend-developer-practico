const navEmail = document.querySelector(".navbar-email");
const deskTop = document.querySelector(".desktop-menu");
const icono = document.querySelector(".menu");
const movilMenu = document.querySelector(".mobile-menu")
const carrito = document.querySelector(".navbar-shopping-cart")
const producto = document.querySelector(".product-detail")

navEmail.addEventListener("click", showMenu)
icono.addEventListener("click", toggleMenu)
carrito.addEventListener("click", toggleCarrito)

function showMenu() {
	const productClosed = producto.classList.contains("inactive");
	if (!productClosed) {
		producto.classList.add("inactive")
	}
	deskTop.classList.toggle("inactive")
}

function toggleMenu() {
	const productClosed = producto.classList.contains("inactive");
	if (!productClosed){
			producto.classList.add("inactive")
		}
	
	movilMenu.classList.toggle("inactive")
	
}

function toggleCarrito() {

	const movileClosed = movilMenu.classList.contains("inactive");
    const deskTopClosed = deskTop.classList.contains("inactive")
	if (!movileClosed){
			movilMenu.classList.add("inactive")
		}
	if (!deskTopClosed){
		deskTop.classList.add("inactive")
	}
	producto.classList.toggle("inactive")
	
}