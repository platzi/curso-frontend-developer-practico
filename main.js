//Se selecciona el elemento con la clase .navbar-email es el cual se le da clic
const navEmail = document.querySelector(".navbar-email");
//Se selecciona el elemento con la clase .desktop-menu es el cual se va a ocultar
const desktopMenu = document.querySelector(".desktop-menu");

//Se selecciona el elemento con la clase .nmenu es el cual se le da clic
const hamMobileMenu = document.querySelector(".menu");
//Se selecciona el elemento con la clase .desktop-menu es el cual se va a ocultar
const mobileMenu = document.querySelector(".mobile-menu");

//Se selecciona el icono del carrito
const icoCarrito = document.querySelector(".navbar-shopping-cart");
//Se selecciona el aside con la clase product-detail
const productDetail = document.querySelector(".product-detail");

//Se seleccionar el product detail container
const productCardContainer = document.querySelector(".product-detail-right");

//Se selecciona el botón que cierra el product-detail
const closeProductDetail = document.querySelector('.product-detail-close');

//Menú desktop
navEmail.addEventListener("click", toggleDesktopMenu);
//Menú mobile
hamMobileMenu.addEventListener("click", toggleMobileMenu);
//Icono carrito
icoCarrito.addEventListener("click", toggleProductDetail);
//Icono cerrar product detail
closeProductDetail.addEventListener("click",closeProductDetailAside);

//Cards-Container
const cardsContainer = document.querySelector(".cards-container");

function toggleDesktopMenu() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }

  if (!productCardContainer.classList.contains("inactive")) {
    productCardContainer .classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }

  if (!productCardContainer.classList.contains("inactive")) {
    productCardContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  if (!productCardContainer.classList.contains("inactive")) {
    productCardContainer.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
}

function openProductDetailAside() {
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }

  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }

  if (!productDetail.classList.contains("inactive")) {
    productDetail .classList.add("inactive");
  }
  productCardContainer.classList.remove("inactive");
}

function closeProductDetailAside () {
  productCardContainer.classList.add('inactive')
}
const productList = [];
productList.push({
  name: "Biclicleta",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Casco",
  price: 20,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Guantes",
  price: 20,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `$ ${product.price}`;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productFigure = document.createElement("figure");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productImg);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
