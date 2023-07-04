// Obtención de elementos HTML.
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const asideProductDetail = document.querySelector(".product-detail");
const asideProductDescription = document.querySelector(".product-description");
const productDescriptionClose = document.querySelector(
  ".product-description-close"
);

// Asignación de escuchadores de eventos.
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDescriptionClose.addEventListener("click", closeProductDescription);

// Creación de funciones.
function toggleDesktopMenu() {
  const isAsideClosed = asideProductDetail.classList.contains("inactive");

  if (!isAsideClosed) {
    asideProductDetail.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = asideProductDetail.classList.contains("inactive");

  if (!isAsideClosed) {
    asideProductDetail.classList.add("inactive");
  }

  closeProductDescription();
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDescriptionClosed =
    asideProductDescription.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  if (!isProductDescriptionClosed) {
    asideProductDescription.classList.add("inactive");
  }

  asideProductDetail.classList.toggle("inactive");
}

function openProductDescription() {
  asideProductDetail.classList.add("inactive");

  asideProductDescription.classList.remove("inactive");
}

function closeProductDescription() {
  asideProductDescription.classList.add("inactive");
}

const productList = [];

// La idea de hacerlo así es que en el futuro se pueda llenar con una API.

productList.push({
  name: "Teclado Gamer",
  price: 120,
  image:
    "https://xavierventas.com/wp-content/uploads/2021/11/Combo-Teclado-Gamer-ONIKUMA-G26-CW905-6.jpg",
});

productList.push({
  name: "Computador Gamer",
  price: 1000,
  image:
    "https://media.cnn.com/api/v1/images/stellar/prod/210910130214-gaming-pcs.jpg?q=x_0,y_0,h_900,w_1599,c_fill/h_720,w_1280",
});

productList.push({
  name: "Monitor Gamer",
  price: 250,
  image: "https://i.blogs.es/19315c/mejores-monitores-gaming/840_560.jpeg",
});

// Construir el elemento general a partir de JS para que itere sobre todos los productos
function renderProducts(array) {
  for (const product of array) {
    // Constantes y agregar clases
    const cardsContainer = document.querySelector(".cards-container");
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoInnerDiv = document.createElement("div");
    const priceParagraph = document.createElement("p");
    const nameParagraph = document.createElement("p");
    const productInfoFigure = document.createElement("figure");
    const figureImg = document.createElement("img");
    const productImg = document.createElement("img");

    // Modificación de atributos
    productImg.setAttribute("src", product.image);
    priceParagraph.innerText = `$${product.price}`;
    nameParagraph.innerText = product.name;
    figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // Asignación de escuchadores de eventos
    productImg.addEventListener("click", openProductDescription);

    // Unión de elementos HTML
    cardsContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoInnerDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoInnerDiv.appendChild(priceParagraph);
    productInfoInnerDiv.appendChild(nameParagraph);
    productInfoFigure.appendChild(figureImg);
  }
}

renderProducts(productList);
