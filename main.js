const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcom = document.querySelector(".menu-ham-icon");
const menuCartIcom = document.querySelector(".navbar-shopping-cart");
const productDetailClose = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCart = document.querySelector("#product-detail-cart");
const productDetail = document.querySelector("#product-detail-detail");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcom.addEventListener("click", toggleMobileMenu);
menuCartIcom.addEventListener("click", toggleCartproductDetailCart);
productDetailClose.addEventListener("click", closeProductDetail);

/* const isCartproductDetailCartOpen = !productDetailCart.classList.contains("inactive"); */
/* const isProductDetailOpen = !productDetail.classList.contains("inactive"); */
/* const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive"); */
/* const isMobileMenuOpen = !mobileMenu.classList.contains("inactive"); */

function toggleDesktopMenu() {
  const isCartproductDetailCartOpen = !productDetailCart.classList.contains("inactive");  
  if (isCartproductDetailCartOpen) {
    productDetailCart.classList.toggle("inactive");
  }
  const isProductDetailOpen = !productDetail.classList.contains("inactive");  
  if (isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isCartproductDetailCartOpen = !productDetailCart.classList.contains("inactive");
  if (isCartproductDetailCartOpen) {
    productDetailCart.classList.add("inactive");
  }
  const isProductDetailOpen = !productDetail.classList.contains("inactive");  
  if (isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCartproductDetailCart() {
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  if (isMobileMenuOpen) {
    mobileMenu.classList.add("inactive");
  }
  const isProductDetailOpen = !productDetail.classList.contains("inactive");  
  if (isProductDetailOpen) {
    productDetail.classList.add("inactive");
  }
  productDetailCart.classList.toggle("inactive");
}

function openProductDetail() {
  const isCartproductDetailCartOpen = !productDetailCart.classList.contains("inactive");  
  if (isCartproductDetailCartOpen) {
    productDetailCart.classList.add("inactive");
  }
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");  
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add("inactive");
  }  
  productDetail.classList.remove("inactive");
}

function closeProductDetail() {
  productDetail.classList.add("inactive");
}

/* 
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-card-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
 */

function renderProduct(arr) {
  for (product of productList) {
    const productCart = document.createElement("div");
    productCart.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click', openProductDetail)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-card-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + product.price;

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

    productCart.appendChild(productImg);
    productCart.appendChild(productInfo);

    cardsContainer.appendChild(productCart);
  }
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
});
productList.push({
  name: "Monitor",
  price: 220,
  image: "https://images.pexels.com/photos/1714204/pexels-photo-1714204.jpeg",
});
productList.push({
  name: "Computer",
  price: 1220,
  image: "https://images.pexels.com/photos/7974/pexels-photo.jpg",
});

renderProduct(productList);

console.log("main.js iniciado en HTML");
