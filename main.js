const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

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
  closeProductDetailAside;
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const ismobileMenuClosed = !mobileMenu.classList.contains("inactive");

  if (!ismobileMenuClosed) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}
const productList = [];
productList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Echo Dot",
  price: 999,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/61Rr8uxmREL._AC_UL300_SR300,200_.jpg",
});
productList.push({
  name: "Fire TV Stick",
  price: 899,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51glVwLlgaL._AC_UL600_SR600,400_.jpg",
});
productList.push({
  name: "TP-Link Tapo C200",
  price: 684.98,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/61W8vUtB2GL._AC_UL600_SR600,400_.jpg",
});
productList.push({
  name: "Nuevo Echo Dot",
  price: 1299,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71xoR4A6q-L._AC_UL600_SR600,400_.jpg",
});
productList.push({
  name: "Power Bank",
  price: 188.79,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/61m99DgaWbL._AC_UL600_SR600,400_.jpg",
});
productList.push({
  name: "Luffy Skeleton",
  price: 309,
  image: "https://m.media-amazon.com/images/I/6125WhkKKSL._AC_UL320_.jpg",
});
productList.push({
  name: "Gorro",
  price: 600,
  image: "https://m.media-amazon.com/images/I/71KKeQAg+aL._AC_UL320_.jpg",
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
      </div>*/

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
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
