const linav = document.querySelector(".navbar-email")
const desmenu = document.querySelector(".desktop-menu")
const burguer = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carrito = document.querySelector(".navbar-shopping-cart")
const listaProductos = document.querySelector(".product-detail")

linav.addEventListener('click', desplegable)
burguer.addEventListener('click', hamburguesa)
carrito.addEventListener('click', car)

function desplegable() {
    desmenu.classList.toggle('inactive')
}

function hamburguesa() {
    mobileMenu.classList.toggle('burguerI')
}

function car() {
    listaProductos.classList.toggle('inactive')
}