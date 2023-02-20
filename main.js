const menuEmail = document.querySelector(".navbar-email");
const deskopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

const ProductDetailExtra = document.querySelector(".product-detail-extra");

const ProductDetailExtraCloseButton = document.querySelector(
  ".product-detail-extra-close"
);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleCarritoMenu);

ProductDetailExtraCloseButton.addEventListener("click", closeProductDetailExtra);

function toggleCarritoMenu() {

  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  const isProductDetailExtraClosed = ProductDetailExtra.classList.contains("inactive");


  //Si el menu de mobil esta abierto, cierralo
  if (!isMobileMenuClose) {
    //Cerrando menu
    mobileMenu.classList.add("inactive");
  }
  if(!isProductDetailExtraClosed){
    ProductDetailExtra.classList.add("inactive");
  }
  //El carro de compras aparece si o si al final de esta funcion
  productDetail.classList.toggle("inactive");
}

function toggleDesktopMenu() {
  const isProductDetailClosed = productDetail.classList.contains("inactive");
  const isProductDetailExtraClosed = ProductDetailExtra.classList.contains("inactive");


  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  if(!isProductDetailExtraClosed){
    ProductDetailExtra.classList.add("inactive");
  }

  deskopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailMenuClose = productDetail.classList.contains("inactive");
  const isProductDetailExtraClosed = ProductDetailExtra.classList.contains("inactive");


  //Si el carro de compras esta open, hay que cerrarlo
  if (!isProductDetailMenuClose) {
    //cerrando el product detail
    productDetail.classList.add("inactive");
  }
  if(!isProductDetailExtraClosed){
    ProductDetailExtra.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function OpenProductDetailExtra() {
  const isCloseProductDetail = productDetail.classList.contains("inactive");
  const isCloseDesktopMenu = deskopMenu.classList.contains("inactive");

  if (!isCloseDesktopMenu) {
    deskopMenu.classList.add("inactive");
  }
  if (!isCloseProductDetail) {
    productDetail.classList.add("inactive");
  }

  ProductDetailExtra.classList.remove("inactive");
}

function closeProductDetailExtra() {
  ProductDetailExtra.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computadora",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*
  <div class="product-card">
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
  </div> */

//se va a hacer una iteracion dependiendo cuantos productos tenga nuestro array
for (product of productList) {
  //se añade el primer div del Product card
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  //se añade la img del producto a vender y despues de le añade como atributo
  const img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.addEventListener("click", OpenProductDetailExtra);

  //Añadimos un div que es el pruduct-info
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  //se añade otro div, el cual contendra la infromacion del producto a vender
  const productInfoDiv = document.createElement("div");

  //añadimos un parrafo el cual sera el precio, y despues lo mostraremos
  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  //añadimos un parrafo el cual sera el name, y despues lo mostraremos
  const productName = document.createElement("p");
  productName.innerText = product.name;

  // se añade el figure, el cual contiene la imagen para añadir el carrito
  const productInfoFigure = document.createElement("figure");
  const productImgCard = document.createElement("img");
  //añadimos el atributo de la imagen
  productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

  //finalmente se encarga de mostrar la img
  productInfoFigure.appendChild(productImgCard);

  //esto sirve para que finalmente se muestren en pantalla
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(img);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
