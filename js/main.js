const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarIconAside);
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

  closeProductDetailAside()

  mobileMenu.classList.toggle("inactive");
}

function toggleCarIconAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (desktopMenu) {
    desktopMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  } 

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {

  shoppingCartContainer.classList.add('inactive')

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
  name: "Xbox Controller",
  price: 230,
  image:
    "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "Macbook Pro",
  price: 990,
  image:
    "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "Monitor Samsung (x3)",
  price: 2210,
  image:
    "https://images.pexels.com/photos/7915289/pexels-photo-7915289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "Intel Core I7",
  price: 850,
  image:
    "https://images.pexels.com/photos/11559638/pexels-photo-11559638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "Nvidea Titan X",
  price: 1990,
  image:
    "https://images.pexels.com/photos/4581613/pexels-photo-4581613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "AirPods",
  price: 599,
  image:
    "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "iPhone 14 Pro Max",
  price: 1999,
  image:
    "https://images.pexels.com/photos/14942224/pexels-photo-14942224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "iPad Pro",
  price: 895,
  image:
    "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

productList.push({
  name: "Apple Watch",
  price: 560,
  image:
    "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

    const productPrice = document.createElement("div");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("div");
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
