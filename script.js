const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerpMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartShoppingMenu = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerpMenuIcon.addEventListener("click", toggleMobileMenu);
cartShoppingMenu.addEventListener("click", toggleCartShoppingMenu);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  // para abrir el menu desktop tenemos que ocultar el aside si estaba abierto y darle click al menu desktop.
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    // para abrir el menu mobil tenemos que ocultar el aside si estaba abierto y darle click al menu mobile para abrirlo.
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCartShoppingMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    // para abrir el carrito de compras(aside) tenemos que ocultar el menu mobil si estaba abierto y darle click al carrito de compras.
    mobileMenu.classList.add("inactive");
  } else if (!isdesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

// Products List

let productsList = [];
productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
  name: "Computer",
  price: 6400,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productsList.push({
  name: "Mouse",
  price: 30,
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

// Creando los elementos del HTML anterior con Js

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product = {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    // insercion del price y name a su elemento papa -> la div productInfo
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const iconCart = document.createElement("img");
    iconCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // insercion del iconCart a su elemento papá -> el figure
    productInfoFigure.appendChild(iconCart);

    // inserción del figure y del productInfoDiv al papa -> la div product-info
    productInfo.appendChild(productInfoDiv);
    productInfoDiv.appendChild(productInfoFigure);

    // inserción de la div product-info y de la productImg al papa -> la div product-card
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // inserción de la div productCard a la div padre -> cards-container que esta en el HTML
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);
