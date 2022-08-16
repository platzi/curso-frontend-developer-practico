const $menuEmail = document.querySelector(".navbar-email");
const $desktopMenu = document.querySelector(".desktop-menu");
const $iconHamburgerMenu = document.querySelector(".menu");
const $mobileMenu = document.querySelector(".mobile-menu");
const $shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const $menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const $productContainer = document.querySelector(".cards-container");
const $productDetail = document.querySelector("#productDetail");
const $btnProducDetailClose = document.querySelector(".product-detail-close");

$menuEmail.addEventListener("click", toggleMenuDesktop);
$iconHamburgerMenu.addEventListener("click", toggleMenuMobile);
$menuCarritoIcon.addEventListener("click", toggleCarritoAside);
$btnProducDetailClose.addEventListener("click", toggleProductDetail);

function toggleMenuDesktop() {
  $shoppingCardContainer.classList.add("inactive");
  $productDetail.classList.add("inactive");
  $desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  $shoppingCardContainer.classList.add("inactive");
  $productDetail.classList.add("inactive");
  $mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  $desktopMenu.classList.add("inactive");
  $mobileMenu.classList.add("inactive");
  $productDetail.classList.add("inactive");
  $shoppingCardContainer.classList.toggle("inactive");
}

function toggleProductDetail() {
  $desktopMenu.classList.add("inactive");
  $mobileMenu.classList.add("inactive");
  $shoppingCardContainer.classList.add("inactive");
  $productDetail.classList.toggle("inactive");
}

const productList = [];

productList.push({
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Bike",
  price: 120,
});
productList.push({
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Pantalla",
  price: 300,
});
productList.push({
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Computadora",
  price: 620,
});
productList.push({
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Bike",
  price: 120,
});
productList.push({
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Pantalla",
  price: 300,
});
productList.push({
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Computadora",
  price: 620,
});

function renderProduct(arr) {
  for (let product of arr) {
    const { image, name, price } = product;
    const $productCard = document.createElement("div");
    $productCard.classList.add("product-card");

    const $productImg = document.createElement("img");
    $productImg.setAttribute("src", image);
    $productImg.onclick = toggleProductDetail; // $productImg.addEventListner("click",toggleProductDetail);

    const $productInfo = document.createElement("div");
    $productInfo.classList.add("product-info");

    const $productInfoDiv = document.createElement("div");

    const $productPrice = document.createElement("p");
    $productPrice.innerText = `$ ${price}`;

    const $productName = document.createElement("p");
    $productName.innerText = name;

    $productInfoDiv.appendChild($productPrice);
    $productInfoDiv.appendChild($productName);

    const $productInfoFigure = document.createElement("figure");

    const $productImgCard = document.createElement("img");
    $productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    $productInfoFigure.appendChild($productImgCard);

    $productInfo.appendChild($productInfoDiv);
    $productInfo.appendChild($productInfoFigure);

    $productCard.appendChild($productImg);
    $productCard.appendChild($productInfo);

    $productContainer.appendChild($productCard);
  }
}

renderProduct(productList);
