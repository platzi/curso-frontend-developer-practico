const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguesaMenu = document.querySelector(".menu");
const MobilMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".car-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetail2 = document.querySelector(".product-detail");
const cartShopping = document.querySelector(".my-order-content");
const totalCarritoDeCompras = document.querySelector(".total")
const numeroArticulos = document.querySelector(".n-articulos");

let productDetail;
let imprimirDetalleProducto = "";
let productoId;
let cartId;
let closeId;

precio = [];

menuEmail.addEventListener("click", aparecerCarritoDesktopMenu);
hamburguesaMenu.addEventListener("click", aparecerMenuHamburguesa);
carritoIcon.addEventListener("click", aparecerCarritoDeCompras);


class product {
    constructor (nombre, price, image, description){
        this.nombre = nombre,
        this.price = price,
        this.image = image, 
        this.description = description 
    }
}
const producto1 = new product ("bike", 120,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","With its practical position, this bike also fulfills a decorative function, add your hall or workspace");
const producto2 = new product ("camera",480, "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","An elegant relic of yesteryears, this vintage camera is a testament to enduring charm and timeless memories.");
const producto3 = new product ("scooter",1100, "https://images.pexels.com/photos/18127120/pexels-photo-18127120/free-photo-of-red-vespa-scooter-parked-in-a-cozy-yard-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=600","An urban icon, this scooter embodies sleek style and effortless mobility.");

const productList = [];
productList.push(producto1, producto2, producto3);

const productos = {
    "bike": producto1,
    "camera": producto2,
    "scooter": producto3
};

productList.forEach((producto) => {
    imprimirProductos = `
    <div class="product-card" >
          <img class= "imagen-producto" src=${producto.image} id=${producto.nombre}>
          <div class="product-info">
          <div>
            <p>$${producto.price}</p>
            <p>${producto.nombre}</p>
          </div>
          <figure>
            <img class= "shopping-cart" src="./icons/bt_add_to_cart.svg" alt="" id = ${producto.nombre}>
          </figure>
        </div>
      </div>
      `
      cardsContainer.innerHTML += imprimirProductos;
      productDetail = document.querySelectorAll(".imagen-producto");
      shoppingCart1 = document.querySelectorAll(".shopping-cart");
    })

productDetail.forEach(img => {
    img.addEventListener("click", getImageID);
    function getImageID(){
        productoId = this.getAttribute("id");
        aparecerProductDetail();
    }
})

shoppingCart1.forEach(img =>{
    img.addEventListener("click", getCartId)
    function getCartId () {    
        cartId = this.getAttribute("id");
        agregarProductoAlCarrito();
        precio.push(productos[cartId].price);
        total ();
        nArticulos ();
    }
    });

function aparecerProductDetail(){
    if (imprimirDetalleProducto == ""){
        imprimirDetalleProducto =`
        <div class="product-detail-close">
            <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src=${productos[productoId].image} alt="bike">
        <div class=".product-info-from-product-detail">
            <p>$${productos[productoId].price}</p>
            <p>${productos[productoId].nombre}</p>
            <p>${productos[productoId].description}</p>
            <button class="primary-button add-to-cart-button">
            <img class= "shopping-cart2" src="./icons/bt_add_to_cart.svg" alt="add to cart">
            <p>Add to cart</p>
            </button>
        </div>
            `
        productDetail2.innerHTML += imprimirDetalleProducto;
        productDetail2.classList.remove("inactive");
        const closeProductDetail = document.querySelector(".product-detail-close");
        const botonAgregarAlCarrito = document.querySelector(".add-to-cart-button");
        botonAgregarAlCarrito.addEventListener("click", ejecutar2Funciones);
        closeProductDetail.addEventListener("click", ocultarProductDetail);
        aparecerDetallesProducto ()
    } else{
        return;
    }
    } 

function ejecutar2Funciones(){
    agregarProductoAlCarrito2();
    ocultarProductDetail ()
}
articulo = [];

let retirarArticuloCarrito;

function agregarProductoAlCarrito2(){
    imprimirCarritoDeCompras1 = `
        <div class="shopping-cart">    
        <figure>
            <img src=${productos[productoId].image} alt="bike">
        </figure>
        <p>${productos[productoId].nombre}</p>
        <p>$${productos[productoId].price}</p>
        <img src="./icons/icon_close.png" alt="close" id="close-${productoId}">
        </div>
    `
    articulo.push(imprimirCarritoDeCompras1);
    cartShopping.innerHTML = articulo.join('');
    
    precio.push(productos[productoId].price);
    
    retirarArticuloCarrito = document.querySelectorAll('img[alt="close"]');
    retirarArticuloCarrito.forEach(img => {
        img.addEventListener("click", quitarArticulosDelCarrito);
        function quitarArticulosDelCarrito (){
            closeId = this.getAttribute("id");
            eliminarElementoPorId(closeId);
        }
    })

    nArticulos ();
}


function agregarProductoAlCarrito(){
    imprimirCarritoDeCompras1 = `
        <div class="shopping-cart">    
        <figure>
            <img src=${productos[cartId].image} alt="bike">
        </figure>
        <p>${productos[cartId].nombre}</p>
        <p>$${productos[cartId].price}</p>
        <img src="./icons/icon_close.png" alt="close" id="close-${cartId}">
        </div>
    `
    articulo.push(imprimirCarritoDeCompras1)
    cartShopping.innerHTML = articulo.join('');

    retirarArticuloCarrito = document.querySelectorAll('img[alt="close"]');
    retirarArticuloCarrito.forEach(img => {
        img.addEventListener("click", quitarArticulosDelCarrito);
        function quitarArticulosDelCarrito (){
            closeId = this.getAttribute("id");
            eliminarElementoPorId(closeId);
        }
    })
}

function eliminarElementoPorId(id) {
    articulo = articulo.filter(item => !item.includes(`id="close-${productoId}"`));
    cartShopping.innerHTML = articulo.join('');
    nArticulos ();
    total ();
}

function nArticulos () {
    numeroArticulos.innerHTML = articulo.length
}

function total (){
    suma = precio.reduce((acumulador, ValorActual) => acumulador + ValorActual, 0);
    totalCarritoDeCompras.innerHTML = "$"+suma;
} 

function ocultarProductDetail () {
    productDetail2.innerHTML = "";
    imprimirDetalleProducto = "";
    productDetail2.classList.add("inactive");
}

function aparecerCarritoDesktopMenu (){
    if (!asideCarrito.classList.contains("inactive") || !productDetail2.classList.contains("inactive")){
        asideCarrito.classList.add("inactive");
        ocultarProductDetail ();
    } 
    desktopMenu.classList.toggle("inactive");
}
function aparecerCarritoDeCompras () {
    if (!desktopMenu.classList.contains("inactive") || !MobilMenu.classList.contains("inactive") || !productDetail2.classList.contains("inactive")) {    
        desktopMenu.classList.add("inactive");
        MobilMenu.classList.add("inactive");
        ocultarProductDetail ();
    } 
    asideCarrito.classList.toggle("inactive");
    total ();
}
function aparecerDetallesProducto () {
    if (!desktopMenu.classList.contains("inactive") || !MobilMenu.classList.contains("inactive") || !asideCarrito.classList.contains("inactive")) {    
        desktopMenu.classList.add("inactive");
        MobilMenu.classList.add("inactive");
        asideCarrito.classList.add("inactive");
    } 
    productDetail2.classList.remove("inactive");   
}
function aparecerMenuHamburguesa () {
    if (!asideCarrito.classList.contains("inactive") || !productDetail2.classList.contains("inactive")){
        asideCarrito.classList.add("inactive")
        ocultarProductDetail ();
    }
    MobilMenu.classList.toggle("inactive");
}


