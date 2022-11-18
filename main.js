// Variables: ==========================================
const deskTopEmail = document.querySelector(".navbar-email");
const deskTopMenu = document.querySelector(".desktop-menu");
const deskTopShoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailContainer = document.querySelector(".productDetailAside");
const productDetailAsideCloseButton = document.querySelector(
  ".productDetailClose"
);

const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const asideDiv = document.querySelector(".product-detail");

// Funtions: ==========================================
const toggleDeskMenu = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");
  const isProductDetailAsideClose =
    productDetailContainer.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  if (!isProductDetailAsideClose) {
    productDetailContainer.classList.add("inactive");
  }
  deskTopMenu.classList.toggle("inactive");
};

const toggleMobileMenu = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");
  const isProductDetailAsideClose =
    productDetailContainer.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  if (!isProductDetailAsideClose) {
    productDetailContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
};

const toggleShoppingCartAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDeskTopMenuClose = deskTopMenu.classList.contains("inactive");
  const isProductDetailAsideClose =
    productDetailContainer.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDeskTopMenuClose) {
    deskTopMenu.classList.add("inactive");
  }
  if (!isProductDetailAsideClose) {
    productDetailContainer.classList.add("inactive");
  }

  asideDiv.classList.toggle("inactive");
};

const openProductDetailAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDeskTopMenuClose = deskTopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDeskTopMenuClose) {
    deskTopMenu.classList.add("inactive");
  }

  productDetailContainer.classList.remove("inactive");
};

const closeProductDetailAside = () => {
  const isAsideClose = asideDiv.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isAsideClose) {
    asideDiv.classList.add("inactive");
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  productDetailContainer.classList.add("inactive");
};

// Escuchando eventos: ==========================================
function lanzarListener(param1, param2) {
  return param1.addEventListener("click", param2);
}

lanzarListener(deskTopEmail, toggleDeskMenu);
lanzarListener(mobileMenuIcon, toggleMobileMenu);
lanzarListener(deskTopShoppingCartIcon, toggleShoppingCartAside);
lanzarListener(productDetailAsideCloseButton, closeProductDetailAside);

// Products Array: ==========================================
function renderProducts(renderContainer, productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    // Div Padre:
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Product Image:
    const productImage = document.createElement("img");
    productImage.setAttribute("src", productsArray[i].image);
    productImage.addEventListener("click", openProductDetailAside);

    // Div contenedor padre Secundario:
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    // Div contenedor del los Pharagrafs:
    const productInfoDiv = document.createElement("div");

    // Pharagrafo del Precio:
    const paragraphPrice = document.createElement("p");
    let paragraphPriceContent = document.createTextNode(
      "$" + productsArray[i].price
    );
    paragraphPrice.appendChild(paragraphPriceContent);

    // Pharagrafo del Nombre:
    const paragraphName = document.createElement("p");
    let paragraphNameContent = document.createTextNode(productsArray[i].name);
    paragraphName.appendChild(paragraphNameContent);

    // Figure contenedor de la imagen pequeña:
    const productInfoFigure = document.createElement("figure");

    // Imagen pequeña:
    const figureImage = document.createElement("img");
    figureImage.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //==============================================================================

    // AAñadir Elementos:
    productInfoFigure.appendChild(figureImage);

    productInfoDiv.appendChild(paragraphPrice);
    productInfoDiv.appendChild(paragraphName);

    productInfo.append(productInfoDiv);
    productInfo.append(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    renderContainer.appendChild(productCard);
  }
}

const productsContainer = document.querySelector(".cards-container");

const productsList = [];
productsList.push(
  {
    name: "Road Bike",
    price: 699.99,
    image: "./images/RoadBike.png",
  },
  {
    name: "Mountain Bike",
    price: 1000.0,
    image: "./images/MountainBike.png",
  },
  {
    name: "BMX",
    price: 219.99,
    image: "./images/BMXBike.png",
  },
  {
    name: "Touring Bike",
    price: 899.0,
    image: "./images/TouringBike.png",
  }
);

renderProducts(productsContainer, productsList);
