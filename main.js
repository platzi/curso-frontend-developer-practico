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
    id: 1,
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 400,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    name: "Laptop",
    price: 800,
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

document.addEventListener("DOMContentLoaded", () => {
  // const checkoutButton = document.querySelector(
  //   "#my-order-section .primary-button"
  // );
  // checkoutButton.addEventListener("click", () => {
  //   // Obtener los productos del carrito
  //   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  //   // Guardar los productos en el localStorage
  //   localStorage.setItem("orderItems", JSON.stringify(cartItems));

  //   // Redirigir al usuario a la página de "My Order"
  //   window.location.href = "./my-order.html";
  // });
});

createProductCards(productList, cardsContainer);

let totalPrice = 0;
let numItems = 0;
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

    // Agregando evento de click al botón "addToCartButton"
    addToCartButton.addEventListener("click", () => {
      // Creando un nuevo elemento de shopping-cart
      const orderSection = document.querySelector(".my-order-content");
      const orderElement = orderSection.querySelector(".order");

      const newCartItem = document.createElement("div");
      newCartItem.classList.add("shopping-cart");
      newCartItem.innerHTML = `
    <figure>
      <img src="${product.image}" alt="${product.name}">
    </figure>
    <p>${product.name}</p>
    <p>$${product.price}</p>
    <img class="remove-item" src="./icons/icon_close.png" alt="close" style="cursor: pointer;">
  `;

      const removeItemButton = newCartItem.querySelector(".remove-item");
      removeItemButton.addEventListener("click", () => {
        newCartItem.remove();
        totalPrice -= parseFloat(product.price);
        numItems--;

        // Actualizar el número de elementos en el carrito
        const navbarShoppingCart = document.querySelector(
          ".navbar-shopping-cart div"
        );
        navbarShoppingCart.textContent = numItems.toString();
        updateTotalPrice();

        cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const index = cartItems.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          cartItems.splice(index, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      });

      if (orderElement !== null) {
        const parentElement = orderElement.parentNode;
        parentElement.insertBefore(newCartItem, orderElement);
      }
      
      totalPrice += product.price;
      numItems++;

      // Actualizar el número de elementos en el carrito
      const navbarShoppingCart = document.querySelector(
        ".navbar-shopping-cart div"
      );
      navbarShoppingCart.textContent = numItems.toString();
      updateTotalPrice();

      // Obtener los elementos del carrito del localStorage
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Agregar el nuevo elemento al arreglo
      cartItems.push(product);

      // Guardar el arreglo actualizado en el localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });

    cardsContainer.appendChild(productCard);
  }
}

function updateTotalPrice() {
  const totalElement = document.querySelector(
    "#my-order-content .order p:last-of-type"
  );
  if (totalElement) {
    totalElement.textContent = "$" + totalPrice.toFixed(2);
  }
}
const orderElement = orderSection.querySelector(".order");

const cartItemElements = cartItems.map((item) => {
  return `
    <div class="shopping-cart">
      <figure>
        <img src="${item.image}" alt="${item.name}">
      </figure>
      <p>${item.name}</p>
      <p>${item.price ? `$${item.price.toFixed(2)}` : ""}</p>
      <img src="./icons/icon_close.png" alt="close" data-id="${
        item.id
      }" class="remove-item">
    </div>
  `;
});
const myOrderContent = document.getElementById("my-order-content");
myOrderContent.innerHTML = cartItemElements.join("");

const removeItemButtons = document.querySelectorAll(".remove-item");
removeItemButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemId = button.dataset.id;
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    location.reload(); // recargar la página para actualizar la lista de productos
  });
});

const arrowImage = document.querySelector("#my-order-section img");
arrowImage.addEventListener("click", () => {
  if (!orderSection.classList.contains("inactive")) {
    orderSection.classList.add("inactive");
  } else {
    closeAllElements();
    orderSection.classList.remove("inactive");
  }
});

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
