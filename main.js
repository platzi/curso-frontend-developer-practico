const navEmail = document.getElementsByClassName("navbar-email")[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
const hamburgerMenuIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const cartMenuIcon = document.getElementsByClassName("navbar-shopping-cart")[0];
const cartMenu = document.getElementsByClassName("shoppingCartContainer")[0];
const cardsContainer = document.getElementsByClassName("cards-container")[0];
const productDetailContainer =
  document.getElementsByClassName("product-detail")[0];
const productDetailsClosedIcon = document.getElementsByClassName(
  "product-detail-close"
)[0];

navEmail.addEventListener("click", toggleDesktopNav);
hamburgerMenuIcon.addEventListener("click", toggleMobileMenu);
cartMenuIcon.addEventListener("click", toggleCartMenu);

/* Creo el evento para invocar a la función renderProductList cuando se 
cargue el DOM y cuando invoco   renderProductList le paso como argumento el array productList;
 */
document.addEventListener("DOMContentLoaded", function () {
  renderProductList(productList);
});

function toggleDesktopNav() {
  const isCartMenuClosed = cartMenu.classList.contains("inactive");
  const isproductDetailsClosed =
    productDetailContainer.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");
  if (!isCartMenuClosed) {
    cartMenu.classList.add("inactive");
  } else if (!isproductDetailsClosed) {
    productDetailContainer.classList.add("inactive");
  } else if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isCartMenuClosed = cartMenu.classList.contains("inactive");
  const isproductDetailsClosed =
    productDetailContainer.classList.contains("inactive");
  const isproductDetailClosed =
    productDetailContainer.classList.contains("inactive");
  if (!isCartMenuClosed) {
    cartMenu.classList.add("inactive");
  } else if (!isproductDetailsClosed) {
    productDetailContainer.classList.add("inactive");
  } else if (!isproductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isproductDetailClosed =
    productDetailContainer.classList.contains("inactive");
  !isMobileMenuClosed
    ? mobileMenu.classList.add("inactive")
    : !isDesktopMenuClosed
    ? desktopMenu.classList.add("inactive")
    : !isproductDetailClosed
    ? productDetailContainer.classList.add("inactive")
    : null;
  cartMenu.classList.toggle("inactive");
}

function openProductDetail(id) {
  cartMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
  showProductDetails(id);
}

function closedProductDetails() {
  productDetailContainer.classList.add("inactive");
}

// Product List
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
    name: "Teclado",
    price: 180,
    image:
      "https://media.istockphoto.com/id/1313504623/es/foto/teclado-arco-iris-teclado-para-juegos-con-luz-rgb-teclado-retroiluminado-en-una-habitaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=84SyIvxQk6SVe_aJHDRiuN6qqmgpPaocTAjZbRXpn7I=",
  },
  {
    id: 3,
    name: "Computadora",
    price: 900,
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Tablet",
    price: 600,
    image:
      "https://images.pexels.com/photos/3944396/pexels-photo-3944396.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Audífonos",
    price: 200,
    image:
      "https://images.pexels.com/photos/13650607/pexels-photo-13650607.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Pantalla",
    price: 240,
    image:
      "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Celulares",
    price: 700,
    image:
      "https://images.pexels.com/photos/7742555/pexels-photo-7742555.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Cornetas",
    price: 700,
    image:
      "https://images.pexels.com/photos/5907127/pexels-photo-5907127.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Mouse",
    price: 200,
    image:
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "Cargador",
    price: 300,
    image:
      "https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Set cámara digital",
    price: 900,
    image:
      "https://images.pexels.com/photos/4164088/pexels-photo-4164088.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Artículos",
    price: 900,
    image:
      "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Product Details
const productDetails = productList.map((product) => ({
  ...product,
  imgIconClosed: "./icons/icon_close.png",
  imgCartIcon: "./icons/bt_add_to_cart.svg",
  description:
    product.name === "Bike"
      ? "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
      : product.name === "Teclado"
      ? "Backlit gaming keyboard with metal panel."
      : product.name === "Computadora"
      ? "A screen with anti-glare protection reduces the amount of ambient light."
      : product.name === "Tablet"
      ? "This Samsung tablet is the ideal companion."
      : product.name === "Audífonos"
      ? "Red wireless headphones."
      : product.name === "Pantalla"
      ? "Gaming monitor LED display for PC with a 75Hz refresh rate."
      : product.name === "Celulares"
      ? "The iPhone 14 Pro allows you to capture incredible details thanks to its 48 MP wide-angle camera."
      : product.name === "Cornetas"
      ? "JBL Charge 5 portable Bluetooth waterproof speaker, in red color and compatible with both 110V and 220V power."
      : product.name === "Mouse"
      ? "Mouse inalámbrico Genius NX-7000 elegant."
      : product.name === "Cargador"
      ? "Wireless charger for cell phones."
      : product.name === "Set cámara digital"
      ? "Pro digital camera set with 5 interchangeable parts, black color."
      : product.name === "Artículos"
      ? "Office supplies set."
      : null,
  toAdd: "Add to cart",
}));

// Función Genérica para renderizar la lista de productos
function renderProductList(arr) {
  const fragment = document.createDocumentFragment();

  for (let product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.addEventListener("click", function () {
      openProductDetail(product.id);
    });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const price = document.createElement("p");
    price.textContent = `$ ${product.price}`;

    const name = document.createElement("p");
    name.textContent = product.name;

    productInfoDiv.appendChild(price);
    productInfoDiv.appendChild(name);

    const productInfoFigure = document.createElement("figure");
    const imgIcon = document.createElement("img");
    imgIcon.src = "./icons/bt_add_to_cart.svg";

    productInfoFigure.appendChild(imgIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    fragment.appendChild(productCard);
  }

  cardsContainer.appendChild(fragment);
}

/* //función para renderizar el Detalle del producto */

function showProductDetails(id) {
  let product = productDetails.find((p) => p.id === id);
  productDetailContainer.innerHTML = "";
  createProductDetails(product);
}

// Función que crea el Detalle del producto dinamicamente
function createProductDetails(product) {
  const productDetailClose = document.createElement("div");
  productDetailClose.classList.add("product-detail-close");

  const img = document.createElement("img");
  img.setAttribute("src", product.imgIconClosed);
  img.addEventListener("click", function () {
    closedProductDetails();
  });

  const igmPrincipal = document.createElement("img");
  igmPrincipal.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const price = document.createElement("p");
  price.innerText = `$ ${product.price}`;

  const name = document.createElement("p");
  name.innerText = product.name;

  const description = document.createElement("p");
  description.innerText = product.description;

  const button = document.createElement("button");
  button.classList.add("primary-button", "add-to-cart-button");

  const cartIcon = document.createElement("img");
  cartIcon.setAttribute("src", product.imgCartIcon);
  cartIcon.setAttribute("alt", product.toAdd);
  button.textContent = product.toAdd;

  productDetailClose.appendChild(img);
  productInfo.append(price, name, description, button);
  button.insertBefore(cartIcon, button.firstChild);

  productDetailContainer.append(productDetailClose, igmPrincipal, productInfo);
}
