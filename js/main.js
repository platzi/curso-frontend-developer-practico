
var navEmail = document.querySelector(".navbar-email");
var panelEmail = document.querySelector(".desktop-menu");

var navMenu = document.querySelector(".menu");
var menuMovil = document.querySelector(".mobile-menu");

var navOrdenCar = document.querySelector(".navbar-shopping-cart");
var productoDetalle = document.querySelector(".product-detail");

// --------------------------- MOSTRAR PRODUCTOS ---------------------------
window.addEventListener("load", mostrarProductos);

// --------------------------- MENU LATERAL DERECHO DE SESIONES PC ---------------------------
navEmail.addEventListener("click", function() {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');

    if(!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    }

    panelEmail.classList.toggle('ocultar');
});

// --------------------------- MENU LATERAL IZQUIERDO MOVIL ---------------------------
navMenu.addEventListener("click", function() {
    const isMobileMenuClose = productoDetalle.classList.contains('ocultar');

    if(!isMobileMenuClose) {
        productoDetalle.classList.add('ocultar');
    }

    menuMovil.classList.toggle('ocultar');
});

// --------------------------- MENU ORDEN CARRITO ---------------------------
navOrdenCar.addEventListener("click", function() {
    const isMobileMenuClose = menuMovil.classList.contains('ocultar');
    const isPcPanelSesion = panelEmail.classList.contains('ocultar');

    if(!isMobileMenuClose) {
        menuMovil.classList.add('ocultar');
    } else if(!isPcPanelSesion) {
        panelEmail.classList.add('ocultar');
    }

    productoDetalle.classList.toggle('ocultar');
});

// --------------------------- MENU ORDEN CARRITO ---------------------------
const contenedorProd = document.querySelector(".cards-container");
var productos = `<div class="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="">
                    <div class="product-info">
                        <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                        </div>
                        <figure>
                            <img src="./icons/bt_add_to_cart.svg" alt="">
                        </figure>
                    </div>
                </div>`;

function mostrarProductos() {
    for(let i = 0; i <= 10; i++) {
        contenedorProd.innerHTML += productos;
    }
}