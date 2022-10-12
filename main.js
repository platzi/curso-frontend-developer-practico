const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const menuDetailIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const detailMenu = document.querySelector(".product_detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);
menuDetailIcon.addEventListener("click", closedProductDetailAside);

function toggleDesktopMenu() {
  const isAsideMenuClosed = asideMenu.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    asideMenu.classList.add("inactive");
  }

  const isDetailMenuClosed = detailMenu.classList.contains("inactive");

  if (!isDetailMenuClosed) {
    detailMenu.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideMenuClosed = asideMenu.classList.contains("inactive");

  if (!isAsideMenuClosed) {
    asideMenu.classList.add("inactive");
  }

  closedProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  const isDetailMenuClosed = detailMenu.classList.contains("inactive");

  if (!isDetailMenuClosed) {
    detailMenu.classList.add("inactive");
  }

  asideMenu.classList.toggle("inactive");
}

function openProductDetailAside() {
  desktopMenu.classList.add("inactive");

  asideMenu.classList.add("inactive");

  detailMenu.classList.remove("inactive");
}

function closedProductDetailAside() {
  detailMenu.classList.add("inactive");
}

const productlist = [];
productlist.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name: "Monitor",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name: "Computadora",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name: "Teclado",
  price: 60,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name: "Lentes",
  price: 20,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name: "Camara",
  price: 300,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(productArray) {
  for (product of productArray) {
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

    productInfoDiv.append(productPrice, productName);

    const productInfoFig = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFig.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFig);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productlist);
