const menuEmail = document.querySelector(".navbar-email");
const menuBurger = document.querySelector(".menu");
const cartList = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
cartList.addEventListener("click", toggleCartList);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}
function toggleCartList() {
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: "120.00",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Cellphone",
  price: "520.00",
  image:
    "https://www.fda.gov/files/styles/main_image_medium/public/smartphone.jpg?itok=Iqc_wjqn",
});
productList.push({
  name: "Pantalla",
  price: "220.00",
  image:
    "https://oasis.opstatics.com/content/dam/oasis/page/frankfurt/27-share.jpg",
});
productList.push({
  name: "Compu",
  price: "620.00",
  image:
    "https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
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

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
