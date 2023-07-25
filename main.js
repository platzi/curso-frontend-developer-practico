const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {

  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");

  // classList.remove sirve para quitar de la clase
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(params) {
  productDetailContainer.classList.add("inactive");
}

// Representacion de API al Backend
const productList = [];

// Agregando productos al array
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 1200,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computador",
  price: 1500,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 1200,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computador",
  price: 1500,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});



function renderProducts(arr) {

  // Maquetacion de cada producto en html
  for (product of arr) {

    // con createElement creamos las diferentes etiquetas
    const productCart = document.createElement("div");
    // con classList modificamos la clase
    productCart.classList.add("product-card");
    
    // product = {name, price, img} -> product.name
    const productImg = document.createElement("img");
    // con setAttribute modificamos un atributo en especifico
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    // con appendChild organizamos cada etiqueta dentro de otra etiqueta, "metemos las cajas hijas en las padres"
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCart.appendChild(productImg);
    productCart.appendChild(productInfo);
  
    cardContainer.appendChild(productCart);

    // Esta es la maquetacion que hicimos, de HTML a JS
    // <div class="product-card">
    //             <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    //                 alt="">
    //             <div class="product-info">
    //                 <div>
    //                     <p>$120,00</p>
    //                     <p>Bike</p>
    //                 </div>
    //                 <figure>
    //                     <img src="./icons/bt_add_to_cart.svg" alt="">
    //                 </figure>
    //             </div>
    //         </div>
          
  }
}

renderProducts(productList);