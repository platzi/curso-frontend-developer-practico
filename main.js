const navbarEmailButton = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(
  'img.menu[src="./icons/icon_menu.svg"]'
);
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const productList = [
  {
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Smartphone",
    price: 400,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Laptop",
    price: 800,
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const cardsContainer = document.querySelector(".cards-container");

createProductCards(productList, cardsContainer);

function createProductCards(productList, cardsContainer) {
  for (const product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", "");
    productCard.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.appendChild(productInfo);

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    productInfo.appendChild(productDetails);

    const productPrice = document.createElement("p");
    productPrice.textContent = "$" + product.price;
    productDetails.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productDetails.appendChild(productName);

    const addToCartButton = document.createElement("figure");
    addToCartButton.style.cursor = "pointer"; // Agregando el cursor pointer
    addToCartButton.innerHTML = '<img src="./icons/bt_add_to_cart.svg" alt="">';
    productInfo.appendChild(addToCartButton);

    cardsContainer.appendChild(productCard);
  }
}

// Añadir evento de control para el botón del carrito de compras
shoppingCart.addEventListener("click", () => {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  } else {
    closeAllElements();
    productDetail.classList.remove("inactive");
  }
});

// Añadir evento de control para el botón del correo electrónico en el menú de escritorio
navbarEmailButton.addEventListener("click", () => {
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  } else {
    closeAllElements();
    desktopMenu.classList.remove("inactive");
  }
});

// Añadir evento de control para el icono del menú en dispositivos móviles
menuIcon.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  } else {
    closeAllElements();
    mobileMenu.classList.remove("inactive");
  }
});

// Función para cerrar todos los elementos abiertos
function closeAllElements() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
}
