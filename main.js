const menuIconEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIconCarrito = document.querySelector(".navbar-shopping-cart");
const carritoMenu = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardContainer = document.querySelector(".cards-container");

//Menu desktop
menuIconEmail.addEventListener("click", toggleDesktopMenu);
//Menu mobile
menuIconMobile.addEventListener("click", toggleMobileMenu);
//menu carrito
menuIconCarrito.addEventListener("click", toggleCarritoMenu);
//Cerrar detalles del producto
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

//Menu desktop
function toggleDesktopMenu() {
  const isCarritoMenuClosed = carritoMenu.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    carritoMenu.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive"); //para que lo muestre o no dependiendo si esta activo
}

//Menu mobile
function toggleMobileMenu() {
  const isCarritoMenuClosed = carritoMenu.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    carritoMenu.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive"); //para que lo muestre o no dependiendo si esta activo
}

//Menu carrito
function toggleCarritoMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  } else if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  carritoMenu.classList.toggle("inactive");
}

function openProductDetailAside() {
  desktopMenu.classList.add("inactive");
  carritoMenu.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});

productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://www.noticias3d.com/articulos/202201/la_era_de_las_pantallas/imagenes/la-era-de-las-pantallas-mig.jpg",
});

productList.push({
  name: "Computador",
  price: 620,
  image:
    "https://www.tiendatoshiba.es/327-525-large/portatil-toshiba-satellite-l850-150.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}

renderProducts(productList);
