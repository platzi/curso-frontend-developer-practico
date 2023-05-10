const navbarEmailButton = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(
  'img.menu[src="./icons/icon_menu.svg"]'
);
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const orderSection = document.querySelector("#my-order-section");

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
const productDetail = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

createProductCards(productList, cardsContainer);

function createProductCards(productList, cardsContainer) {
  for (const product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.style.cursor = "pointer"; // Agregando el cursor pointer
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", "");
    productImage.addEventListener("click", () => {
      if (productDetail.classList.contains("inactive")) {
        closeAllElements();
        productDetail.classList.remove("inactive");
      }
    });
    productCard.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.appendChild(productInfo);

    const orderSections = document.createElement("div");
    orderSections.classList.add("product-details");
    productInfo.appendChild(orderSections);

    const productPrice = document.createElement("p");
    productPrice.textContent = "$" + product.price;
    orderSections.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    orderSections.appendChild(productName);

    const addToCartButton = document.createElement("figure");
    addToCartButton.style.cursor = "pointer"; // Agregando el cursor pointer
    addToCartButton.innerHTML = '<img src="./icons/bt_add_to_cart.svg" alt="">';
    productInfo.appendChild(addToCartButton);

    cardsContainer.appendChild(productCard);
  }
}

// Agregar un evento de escucha al botón de cierre de detalles del producto para ocultar la sección de detalles del producto cuando se hace clic en él.
productDetailClose.addEventListener("click", () => {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
});

// Añadir evento de control para el botón del carrito de compras
shoppingCart.addEventListener("click", () => {
  if (!orderSection.classList.contains("inactive")) {
    orderSection.classList.add("inactive");
  } else {
    closeAllElements();
    orderSection.classList.remove("inactive");
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
  if (!orderSection.classList.contains("inactive")) {
    orderSection.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}
