const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcom = document.querySelector(".menu-ham-icon");
const menuCartIcom = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCart = document.querySelector("#product-detail-cart");
const productDetailDetail = document.querySelector("#product-detail-detail");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcom.addEventListener("click", toggleMobileMenu);
menuCartIcom.addEventListener("click", toggleCartproductDetailCart);

function toggleDesktopMenu() {
  console.log("Click Email");
  const isCartproductDetailCartOpen = !productDetailCart.classList.contains("inactive");
  if (isCartproductDetailCartOpen) {
    console.log("productDetailCart: " + isCartproductDetailCartOpen);
    productDetailCart.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  console.log("Click Mobile Menu");

  const isCartproductDetailCartOpen = !productDetailCart.classList.contains("inactive");
  if (isCartproductDetailCartOpen) {
    productDetailCart.classList.toggle("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCartproductDetailCart() {
  console.log("Click Cart Icon");

  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  if (isDesktopMenuOpen) {
    desktopMenu.classList.toggle("inactive");
  }

  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  if (isMobileMenuOpen) {
    mobileMenu.classList.toggle("inactive");
  }

  productDetailCart.classList.toggle("inactive");
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
