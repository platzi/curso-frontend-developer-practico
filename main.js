var menuEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
var menuMobile = document.querySelector(".mobile-menu");
var menuMobiles = document.querySelector(".menu");
var emailMobile = document.querySelector(".email");
var listaShop = document.querySelector(".cards-container");
var carrito = document.querySelector(".navbar-shopping-cart");
var menuCarrito = document.querySelector("#ShoppingCartContainer");
var menuCompra = document.querySelector("#productDetail");





var artículos = [];
let lista;

artículos.push({
    nombre: "Bike",
    price : 120,
    link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
artículos.push({
    nombre: "Pantalla",
    price : 180,
    link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
artículos.push({
    nombre: "Teléfono",
    price : 120,
    link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
function renderProduct(arr) {
    arr.forEach(element => {
        lista = `
          <div class="product-card">
            <div>
              <img src=${element.link}" alt="">
            <div class="product-info">
              <div>
              <p>${element.price}</p>
              <p>${element.nombre}</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" class = "añadirAlCarrito">
              </figure>
            </div>
            </div> 
    
            
          </div>
          `
        listaShop.innerHTML += lista;
    });
}



function toggleDesktopMenu() {
    var menuCarritoClosed = menuCarrito.classList.contains('inactive')

    var menuCompraClosed = menuCompra.classList.contains('inactive');
    console.log("funciona");
    if (!menuCarritoClosed || !menuCompraClosed) {
        menuCarrito.classList.add('inactive');
        menuCompra.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
    
}
function toggleMenuMobile() {
    
    var menuCarritoClosed = menuCarrito.classList.contains('inactive')
    var menuCompraClosed = menuCompra.classList.contains('inactive');
    if (!menuCarritoClosed || !menuCompraClosed) {
        menuCarrito.classList.add('inactive');
        menuCompra.classList.add("inactive");
    }
    menuMobile.classList.toggle("inactive");
    console.log("funciona");
}
function toggleCarrito() {
    var desktopMenuClosed = desktopMenu.classList.contains('inactive')
    var menuMobileClosed = menuMobile.classList.contains('inactive')
    var menuCompraClosed = menuCompra.classList.contains('inactive');
    if (!desktopMenuClosed || !menuMobileClosed || !menuCompraClosed) {
        desktopMenu.classList.add('inactive');
        menuMobile.classList.add('inactive');
        menuCompra.classList.add("inactive");
    }
    menuCarrito.classList.toggle("inactive");

    console.log("funciona");
}


function toggleproductDetail() {
    var menuCarritoClosed = menuCarrito.classList.contains('inactive');
    var desktopMenuClosed = desktopMenu.classList.contains('inactive');
    var menuMobileClosed = menuMobile.classList.contains('inactive');
    if (!desktopMenuClosed || !menuMobileClosed || !menuCarritoClosed) {
        desktopMenu.classList.add('inactive');
        menuMobile.classList.add('inactive');
        menuCarrito.classList.add('inactive');
    }
    menuCompra.classList.toggle("inactive");

    console.log("funciona");
}
renderProduct(artículos);
var buttonCarrito = document.querySelector("añadirAlCarrito");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobiles.addEventListener('click', toggleMenuMobile);
carrito.addEventListener('click', toggleCarrito);
buttonCarrito.addEventListener('click', toggleproductDetail);