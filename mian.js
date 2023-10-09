const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguesaMenu = document.querySelector(".menu");
const MobilMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".car-detail");
const cardsContainer = document.querySelector(".cards-container");

let productDetail = document.querySelector(".product-detail");

let closeProductDetail;

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
const producto2 = new product ("camera",1250, "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","An elegant relic of yesteryears, this vintage camera is a testament to enduring charm and timeless memories.");
const producto3 = new product ("scooter",6480, "https://images.pexels.com/photos/18127120/pexels-photo-18127120/free-photo-of-red-vespa-scooter-parked-in-a-cozy-yard-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=600","An urban icon, this scooter embodies sleek style and effortless mobility.");

const productList = [];
productList.push(producto1, producto2, producto3);

productList.forEach((producto) => {
    imprimirProductos = `
    <div class="product-card">
          <img src=${producto.image} id=${producto.nombre}>
          <div class="product-info">
          <div>
            <p>$${producto.price}</p>
            <p>${producto.nombre}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      `
      cardsContainer.innerHTML += imprimirProductos

      bci = document.getElementById("bike");
      cmera = document.getElementById("camera");
      scooter = document.getElementById("scooter");
      
    })

bci.addEventListener("click", aparecerProductDetail1);
camera.addEventListener("click",aparecerProductDetail2);
scooter.addEventListener("click",aparecerProductDetail3);

function aparecerProductDetail1(){
    imprimirDetalleProducto =`
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src=${producto1.image} alt="bike">
    <div class=".product-info-from-product-detail">
        <p>$${producto1.price}</p>
        <p>${producto1.nombre}</p>
        <p>${producto1.description}</p>
        <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        <p>Add to cart</p>
        </button>
    </div>
        `
        productDetail.innerHTML += imprimirDetalleProducto;
        aparecerDetallesProducto ()
        closeProductDetail = document.querySelector(".product-detail-close"); 
        closeProductDetail.addEventListener("click", OcultarProductDetail); 
        bci.removeEventListener("click",aparecerProductDetail1);
        camera.removeEventListener("click",aparecerProductDetail2);
        scooter.removeEventListener("click",aparecerProductDetail3);
            
}
    
function aparecerProductDetail2 () {
    imprimirDetalleProducto =`
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src=${producto2.image} alt="bike">
    <div class=".product-info-from-product-detail">
        <p>${producto2.price}</p>
        <p>${producto2.nombre}</p>
        <p>${producto2.description}</p>
        <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        <p>Add to cart</p>
        </button>
    </div>
`
    productDetail.innerHTML += imprimirDetalleProducto
    aparecerDetallesProducto ()
    closeProductDetail = document.querySelector(".product-detail-close");
    closeProductDetail.addEventListener("click", OcultarProductDetail);
    bci.removeEventListener("click",aparecerProductDetail1);
    camera.removeEventListener("click",aparecerProductDetail2);
    scooter.removeEventListener("click",aparecerProductDetail3);
}

function aparecerProductDetail3 () {
    imprimirDetalleProducto =`
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src=${producto3.image} alt="bike">
    <div class=".product-info-from-product-detail">
        <p>$${producto3.price}</p>
        <p>${producto3.nombre}</p>
        <p>${producto3.description}</p>
        <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        <p>Add to cart</p>
        </button>
    </div>
`
    productDetail.innerHTML += imprimirDetalleProducto
    aparecerDetallesProducto ()
    closeProductDetail = document.querySelector(".product-detail-close");
    closeProductDetail.addEventListener("click", OcultarProductDetail);
    bci.removeEventListener("click",aparecerProductDetail1);
    camera.removeEventListener("click",aparecerProductDetail2);
    scooter.removeEventListener("click",aparecerProductDetail3);
}

function OcultarProductDetail () {
    productDetail.innerHTML = "";
    productDetail.classList.add("inactive");
    bci.addEventListener("click", aparecerProductDetail1);
    camera.addEventListener("click",aparecerProductDetail2);
    scooter.addEventListener("click",aparecerProductDetail3);
}

function aparecerCarritoDesktopMenu (){
    if (!asideCarrito.classList.contains("inactive") || !productDetail.classList.contains("inactive")){
        asideCarrito.classList.add("inactive");
        OcultarProductDetail ();
    } 
    desktopMenu.classList.toggle("inactive");
}
function aparecerCarritoDeCompras () {
    if (!desktopMenu.classList.contains("inactive") || !MobilMenu.classList.contains("inactive") || !productDetail.classList.contains("inactive")) {    
        desktopMenu.classList.add("inactive");
        MobilMenu.classList.add("inactive");
        OcultarProductDetail ();
    } 
    asideCarrito.classList.toggle("inactive")
}
function aparecerDetallesProducto () {
    if (!desktopMenu.classList.contains("inactive") || !MobilMenu.classList.contains("inactive") || !asideCarrito.classList.contains("inactive")) {    
        desktopMenu.classList.add("inactive");
        MobilMenu.classList.add("inactive");
        asideCarrito.classList.add("inactive");
    } 
    productDetail.classList.remove("inactive");   
}
function aparecerMenuHamburguesa () {
    if (!asideCarrito.classList.contains("inactive") || !productDetail.classList.contains("inactive")){
        asideCarrito.classList.add("inactive")
        OcultarProductDetail ();
    }
    MobilMenu.classList.toggle("inactive");
}



/*function showProducts (array) {
    for (let i=0; i<productList.length; i++){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src", productList.image);
        img.addEventListener("click", aparecerProductDetail);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const newDiv = document.createElement("div");

        const textoPrice = document.createElement("p");
        textoPrice.innerText = "$" + productList.price;

        const textoNombre = document.createElement("p");
        textoNombre.innerText = productList.nombre;
        
        const figure = document.createElement("figure");

        const figureCarrito = document.createElement("img");
        figureCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg");

        figure.appendChild(figureCarrito);

        newDiv.appendChild(textoPrice);
        newDiv.appendChild(textoNombre);

        productInfo.appendChild(newDiv);
        productInfo.appendChild(figure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
    
}
*/
//showProducts (productList);
/*
function aparecerProductDetail () {

    const productDetailClose = document.createElement("div");
    productDetailClose.classList.add("product-detail-close");

    const imgClose = document.createElement("img");
    imgClose.setAttribute("src", "./icons/icon_close.png");

    const imgProducto = document.createElement("img");
    imgProducto.setAttribute("src", "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    
    const productInfoFromProductDetail = document.createElement("div");
    productInfoFromProductDetail.classList.add("product-info-from-product-detail");

    const textoPrice = document.createElement("p");
    textoPrice.innerText = "$" + product.Price;

    const textoNombre = document.createElement("p");
    textoNombre.innerText = product.Nombre;

    const textoDescription = document.createElement("p");
    textoDescription.innerText = product.Description;

    const buttonAddToCart = document.createElement("button");
    buttonAddToCart.classList.add("primary-button-add-to-cart-button");

    const imgAddToCart = document.createElement("img");
    imgAddToCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    const textoAddToCart = document.createElement("p");
    textoAddToCart.innerText = "Add to Cart";

    buttonAddToCart.appendChild(textoAddToCart);
    buttonAddToCart.appendChild(imgAddToCart);

    productInfoFromProductDetail.appendChild(textoPrice);
    productInfoFromProductDetail.appendChild(textoNombre);
    productInfoFromProductDetail.appendChild(textoDescription);
    productInfoFromProductDetail.appendChild(buttonAddToCart);

    productDetailClose.appendChild(imgClose);

    productDetail.appendChild(productDetailClose);
    productDetail.appendChild(imgProducto);
    productDetail.appendChild(productInfoFromProductDetail);

    productDetail.classList.remove("inactive");

    const ProductDetailCloseClose = document.querySelector(".product-detail-close");
    ProductDetailCloseClose.addEventListener("click", OcultarProductDetail)

    function OcultarProductDetail () {
    productDetail.classList.add("inactive");
    }
}
*/
/*
      <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      <div class=".product-info-from-product-detail">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
         <p>Add to cart</p>
        </button>
      </div>
*/


