const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguesaMenu = document.querySelector(".menu");
const MobilMenu = document.querySelector(".mobile-menu")
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".car-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector(".product-detail");



menuEmail.addEventListener("click", ghost);
//hamburguesaMenu.addEventListener("click", aparecerMenuHamburguesa);
carritoIcon.addEventListener("click", aparecerCarritoDeCompras);


function ghost (){
    if (!asideCarrito.classList.contains("inactive") && desktopMenu.classList.contains("inactive") ) {
        asideCarrito.classList.add("inactive")
    } 
    desktopMenu.classList.toggle("inactive");
} 
/*
function ghost1 (){
    if (!asideCarrito.classList.contains("inactive") && !desktopMenu.classList.contains("inactive") ) {
        asideCarrito.classList.add("inactive")
    } 
    desktopMenu.classList.toggle("inactive");
}     
    

function aparecerMenu () {
    if (!asideCarrito.classList.contains("inactive")) {
        asideCarrito.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function aparecerMenuHamburguesa () {
    if (!asideCarrito.classList.contains("inactive")) {
        asideCarrito.classList.add("inactive")
    }
    MobilMenu.classList.toggle("inactive");
}
*/
function aparecerCarritoDeCompras(){
    if (!MobilMenu.classList.contains("inactive") && !desktopMenu.classList.contains("inactive")) {
        MobilMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")
    }
    asideCarrito.classList.toggle("inactive");
}

const productList = [];

productList.push({
    Nombre: "bike",
    Price: 120,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    Description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace"  
});
productList.push({
    Nombre: "Camera",
    Price: 1250,
    Image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Description: "This is a camera"
});
productList.push({
    Nombre: "scooter",
    Price: 6480,
    Image: "https://images.pexels.com/photos/18127120/pexels-photo-18127120/free-photo-of-red-vespa-scooter-parked-in-a-cozy-yard-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=600",
    Description: "This is a scooter"
});


function showProducts (array) {
    for (product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src", product.Image);
        img.addEventListener("click", aparecerProductDetail);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const newDiv = document.createElement("div");

        const textoPrice = document.createElement("p");
        textoPrice.innerText = "$" + product.Price;

        const textoNombre = document.createElement("p");
        textoNombre.innerText = product.Nombre;
        
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

showProducts (productList);

function aparecerProductDetail () {

    const productDetailClose = document.createElement("div");
    productDetailClose.classList.add("product-detail-close");

    const imgClose = document.createElement("img");
    imgClose.setAttribute("src", "./icons/icon_close.png");

    const imgProducto = document.createElement("img");
    imgProducto.setAttribute("src", product.Image);
    
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


