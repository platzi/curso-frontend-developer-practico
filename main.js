// Variables: ==========================================
const deskTopEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");
const deskTopShoppingCartIcon = document.querySelector(".navbar-shopping-cart");

const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideDiv = document.querySelector(".product-detail");

// Funtions: ==========================================
const toggleDeskMenu = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  deskTopMenu.classList.toggle("inactive");
};

const toggleMobileMenu = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
};

const toggleShoppingCartAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDeskTopMenuClose = deskTopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDeskTopMenuClose) {
    deskTopMenu.classList.add("inactive");
  }

  asideDiv.classList.toggle("inactive");
};

// Escuchando eventos: ==========================================
function lanzarListener(param1, param2) {
  return param1.addEventListener("click", param2);
}

lanzarListener(deskTopEmail, toggleDeskMenu);
lanzarListener(mobileMenuIcon, toggleMobileMenu);
lanzarListener(deskTopShoppingCartIcon, toggleShoppingCartAside);

// Products Array: ==========================================
const productsList = new Array();
productsList.push(
  {
    name: "Bike",
    price: 120,
    image: "./images/BikeImage.png",
  },
  {
    name: "Hola",
    price: 120,
    image: "./images/BikeImage.png",
  },
  {
    name: "SS",
    price: 120,
    image: "./images/BikeImage.png",
  }
);
/* 
  <div class="product-card">
<img src="./images/BikeImage.png" alt="bike">
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
const productsContainer = document.querySelector(".cards-container");

for (let i = 0; i < productsList.length; i++) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", productsList[i].image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const paragraphPrice = document.createElement("p");
  let paragraphPriceContent = document.createTextNode(
    "$" + productsList[productsList[i].price]
  );
  paragraphPrice.appendChild(paragraphPriceContent);

  const paragraphName = document.createElement("p");
  let paragraphNameContent = document.createTextNode(productsList.name);
  paragraphName.appendChild(paragraphNameContent);

  const productInfoFigure = document.createElement("figure");
  const figureImage = document.createElement("img");
  figureImage.setAttribute("src", "./icons/bt_add_to_cart.svg");

  // Add Elements:
  productInfoFigure.appendChild(figureImage);

  productInfo.append(productInfoDiv);
  productInfo.append(productInfoFigure);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);

  productsContainer.appendChild(productCard);
}
