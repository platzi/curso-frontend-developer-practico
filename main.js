let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu"); 
navbarEmail.addEventListener("click", mostrarMenu);

let mobileMenu = document.querySelector(".mobile-menu");
let imgMobileMenu = document.querySelector(".menu");
imgMobileMenu.addEventListener("click", mostrarMenuMobile);

let carritoDeCompras = document.querySelector(".navbar-shopping-cart");
let productDetail = document.querySelector(".product-detail");
carritoDeCompras.addEventListener("click", mostrandoCarrito);

let cardsContainer = document.querySelector(".cards-container");
function mostrarMenu(){
    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

function mostrarMenuMobile(){
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

function mostrandoCarrito(){
    productDetail.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    
}

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

let productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "pantalla",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "phone",
    price: 820,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});




    for(producto of productList){
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        let imageProduct = document.createElement("img");
        imageProduct.setAttribute("src", producto.image);
        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        let divContenedorAtributos = document.createElement("div");
        let priceProduct = document.createElement("p");
        priceProduct.innerText = "$" + producto.price;
        let nameProduct = document.createElement("p");
        nameProduct.innerText = producto.name;
        let figureProduct = document.createElement("figure");
        let imageAddToCart = document.createElement("img");
        imageAddToCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        cardsContainer.appendChild(productCard);
        productCard.appendChild(imageProduct);
        productCard.appendChild(productInfo);
        productInfo.appendChild(divContenedorAtributos);
        productInfo.appendChild(figureProduct);
        divContenedorAtributos.appendChild(priceProduct);
        divContenedorAtributos.appendChild(priceProduct);
        figureProduct.appendChild(imageAddToCart);
    
    }
    



    
   
