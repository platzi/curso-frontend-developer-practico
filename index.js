const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobileMenu);

menuCarritoIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  const isMobileMenuClosed = productDetail.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isMobileMenuClosed = productDetail.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
  const isMobileMenuOpen = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  }

  productDetail.classList.toggle("inactive");
}
//lista de productos
const producList = [];
producList.push({
  name: "bike",
  price: 120,
  imege:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
producList.push({
  name: "pc",
  price: 1200,
  imege:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
producList.push({
  name: "iphone",
  price: 1120,
  imege:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
producList.push({
  name: "mac",
  price: 3120,
  imege:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
producList.push({
  name: "airpods",
  price: 220,
  imege:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
producList.push({
  name: "ios",
  price: 16,
  imege:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});

function maquetacionDeProductos(arrayDeProdutos) {
  for (product of arrayDeProdutos) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imege);
    //product = {name, price, image --> product.imagr}

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");

    const productInfoCart = document.createElement("img");
    productInfoCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

maquetacionDeProductos(producList);