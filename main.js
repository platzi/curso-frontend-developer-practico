const menuMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartAside = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

menuMail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleShoppingCart);

function collisionManager(arrToClose) {
  for (windowToClose of arrToClose) {
    windowToClose.classList.contains("inactive") == true
      ? ""
      : windowToClose.classList.add("inactive");
  }
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");

  collisionManager([shoppingCartAside, productDetailContainer]);
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  collisionManager([shoppingCartAside, productDetailContainer]);
}

function toggleShoppingCart() {
  shoppingCartAside.classList.toggle("inactive");
  collisionManager([desktopMenu, mobileMenu, productDetailContainer]);
}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");

  // Close btn
  productDetailCloseIcon.addEventListener("pointerdown", (e) => {
    productDetailContainer.classList.add("inactive");
  });

  collisionManager([desktopMenu, mobileMenu, shoppingCartAside]);
}

const productsList = [];
productsList.push(
  {
    nombre: "Bike",
    precio: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image_alt: "Image of a Bicicle",
  },
  {
    nombre: "Computadora",
    precio: 2400,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
    image_alt: "Macbook Pro M1 Laptop",
  },
  {
    nombre: "Scooter",
    precio: 1200,
    image:
      "https://solarscooters.co.uk/cdn/shop/products/wb1Purple.jpg?v=1674056128",
    image_alt: "Electric Scooter",
  }
);

function renderProducts(arr) {
  // <!-- <div class="product-card">
  //     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  //         alt="">
  //     <div class="product-info">
  //         <div>
  //             <p>$120,00</p>
  //             <p>Bike</p>
  //         </div>
  //         <figure>
  //             <img src="./icons/bt_add_to_cart.svg" alt="">
  //         </figure>
  //     </div>
  // </div> -->

  const cardsContainer = document.querySelector(".cards-container");
  for (product of productsList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.image_alt);
    productImage.addEventListener("pointerdown", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = Number(product.precio).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: "currency",
      currency: "USD",
    });

    const productName = document.createElement("p");
    productName.innerText = product.nombre;

    productInfoDiv.append(productPrice, productName);

    const figure = document.createElement("figure");
    const addButtonImage = document.createElement("img");
    addButtonImage.setAttribute("src", "./icons/bt_add_to_cart.svg");
    addButtonImage.setAttribute("alt", "Add to Cart");

    figure.appendChild(addButtonImage);

    productInfo.append(productInfoDiv, figure);

    // Build the product card with image & info
    productCard.append(productImage, productInfo);

    // Add each product card into the cards Container
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);
