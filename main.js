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
productDetailsClosedIcon.addEventListener("click", closedProductDetails);

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

function openProductDetail() {
  cartMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}

function closedProductDetails() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Teclado",
  price: 180,
  image:
    "https://media.istockphoto.com/id/1313504623/es/foto/teclado-arco-iris-teclado-para-juegos-con-luz-rgb-teclado-retroiluminado-en-una-habitaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=84SyIvxQk6SVe_aJHDRiuN6qqmgpPaocTAjZbRXpn7I=",
});
productList.push({
  name: "Computadora",
  price: 900,
  image:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Tablet",
  price: 600,
  image:
    "https://images.pexels.com/photos/3944396/pexels-photo-3944396.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Audífonos",
  price: 200,
  image:
    "https://images.pexels.com/photos/13650607/pexels-photo-13650607.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Pantalla",
  price: 240,
  image:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Celulares",
  price: 700,
  image:
    "https://images.pexels.com/photos/7742555/pexels-photo-7742555.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Cornetas",
  price: 700,
  image:
    "https://images.pexels.com/photos/5907127/pexels-photo-5907127.jpeg?auto=compress&cs=tinysrgb&w=600",
});

// Función Genérica para renderizar la lista de productos
function renderProductList(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const price = document.createElement("p");
    price.innerText = `$ ${product.price}`;

    const name = document.createElement("p");
    name.innerText = product.name;

    productInfoDiv.appendChild(price);
    productInfoDiv.appendChild(name);

    const productInfoFigure = document.createElement("figure");
    const imgIcon = document.createElement("img");
    imgIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(imgIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
