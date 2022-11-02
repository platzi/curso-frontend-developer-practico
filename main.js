const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  // const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add("inactive");
  // }

  // closeProductDetailAside();

  // desktopMenu.classList.toggle("inactive");

  /* Esta es otra solucion */
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
  // const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add("inactive");
  // }

  // closeProductDetailAside();

  // mobileMenu.classList.toggle("inactive");

  /* Esta es otra solucion */
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function toggleCarritoAside() {
  // const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add("inactive");
  // }

  // const isProductDetailContainerClosed =
  //   productDetailContainer.classList.contains("inactive");

  // if (!isProductDetailContainerClosed) {
  //   productDetailContainer.classList.add("inactive");
  // }

  // const desktopMenuClosed = desktopMenu.classList.contains("inactive");

  // if (!desktopMenuClosed) {
  //   desktopMenu.classList.add("inactive");
  // }

  // shoppingCartContainer.classList.toggle("inactive");

  /* Esta es otra solucion */
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
  // shoppingCartContainer.classList.add("inactive");
  // desktopMenu.classList.add("inactive");

  // productDetailContainer.classList.remove("inactive");

  /* Esta es otra solucion */
  productDetailContainer.classList.remove("inactive");
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function closeProductDetailAside() {
  // productDetailContainer.classList.add("inactive");

  /* Esta es otra solucion */
  productDetailContainer.classList.add("inactive");
  // shoppingCartContainer.classList.add("inactive");
  // mobileMenu.classList.add("inactive");
  // desktopMenu.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Yeezy",
  price: 120,
  image:
    "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Pants",
  price: 90,
  image:
    "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Cap",
  price: 70,
  image:
    "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {name,price,image}-> product.image
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
    const productImgCard = document.createElement("productImg");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
