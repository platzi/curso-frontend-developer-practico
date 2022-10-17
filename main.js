const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const menuHamburgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector(
  "#shopping-cart-container"
);
const productDetailContainer = document.querySelector("#product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", () => toggleElement(desktopMenu));
menuHamburgerIcon.addEventListener("click", () => toggleElement(mobileMenu));
menuHamburgerIcon.addEventListener("click", () => toggleMobileMenu());
menuCarIcon.addEventListener("click", () => toggleCarritoAside());
navEmail.addEventListener("click", () => toggleEmailMenu());
productDetailContainer.addEventListener("click", closeProductDetailAside);

function toggleElement(element) {
  element.classList.toggle("inactive");
}

function toggleEmailMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.remove("inactive");
  }
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
  }
  productDetailContainer.classList.add("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
}

function openProductDetailAside() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "RTX 4090",
  price: 220,
  image:
    "https://cdn.vox-cdn.com/thumbor/lAgT489nIwLuC7FVU_9Rdv0u4Qo=/0x0:2040x1351/1400x788/filters:focal(1020x676:1021x677)/cdn.vox-cdn.com/uploads/chorus_asset/file/24077469/226321_Nvidia_RTX_4090_twarren_0003.jpg",
});

productList.push({
  name: "Laptop Asus",
  price: 1000,
  image:
    "https://assets2.rockpapershotgun.com/asus-rog-zephyrus-g14-2022-(1).jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/asus-rog-zephyrus-g14-2022-(1).jpg",
});

productList.push({
  name: "Regadero",
  price: 10,
  image:
    "https://tiendareco.com/img/cms/watering-young-seedlings-in-the-garden-with-the-gr-U5E49U5%20(1).jpg",
});

productList.push({
  name: "Makima (Funda de Telefono)",
  price: 1000,
  image: "https://cdn.myanimelist.net/images/characters/4/489561.jpg",
});

function renderProducts(productList) {
  for (let product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

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
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
