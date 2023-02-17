const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const productDetailClose = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", function () {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
});

burguerMenu.addEventListener("click", function () {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
});

shoppingCar.addEventListener("click", function () {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
});

productDetailClose.addEventListener("click", function () {
  productDetail.classList.add("inactive");
});

const productList = [];

const addProduct = function (name, price, image) {
  productList.push({
    name: name,
    price: `$${price},00`,
    image: image,
  });
};

addProduct(
  "Bike",
  120,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

addProduct(
  "Bike",
  120,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

addProduct(
  "Bike",
  120,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

addProduct(
  "Bike",
  120,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

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

const renderProducts = function (arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", `${product.image}`);
    productImg.addEventListener("click", function () {
      productDetail.classList.remove("inactive");
      shoppingCartContainer.classList.add("inactive");
    });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.textContent = `${product.price}`;

    const productName = document.createElement("p");
    productName.textContent = `${product.name}`;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");

    const productImgCar = document.createElement("img");
    productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCar);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
};

renderProducts(productList);
