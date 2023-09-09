const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const HamIconMenu = document.querySelector(".menu");

const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
HamIconMenu.addEventListener("click", toggleMobileMenu);
cartMenuIcon.addEventListener("click", toggleCartMenuIcon);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  /*
    if(desktopMenu.classList.contains("inactive"))
    {
        desktopMenu.classList.remove("inactive");
    }
    else
    {
        desktopMenu.classList.add("inactive");
    }
    */
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCartMenuIcon() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "TV",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Chair",
  price: 50,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Chair",
  price: 50,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
</div>
*/

function renderProducts(arr) {
  for (product of arr) {
    const productCart = document.createElement("div");
    productCart.classList.add("product-card");

    const productCartImg = document.createElement("img");
    productCartImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerHTML = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productInfoFigureImg = document.createElement("img");

    productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoFigureImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCart.appendChild(productCartImg);
    productCart.appendChild(productInfo);

    cardsContainer.appendChild(productCart);
  }
}

renderProducts(productList);
