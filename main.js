const $ = (selector) => document.querySelector(selector);
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");
const menuIcon = $(".menu");
const mobileMenu = $(".mobile-menu");
const productDetail = $(".product-detail");
const navShopCart = $(".navbar-shopping-cart");
const productDetailView = $(".product-detail-view");

const productos = [
  {
    id: 1,
    nombre: "Camiseta",
    precio: 20.0,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 10,
    descripcion: "Camiseta de algodón con corte clásico y cómodo.",
  },
  {
    id: 2,
    nombre: "Pantalón",
    precio: 40.0,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 5,
    descripcion: "Pantalón de mezclilla de corte recto y lavado oscuro.",
  },
  {
    id: 3,
    nombre: "Zapatos",
    precio: 60.0,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 8,
    descripcion: "Zapatos de cuero elegantes y cómodos para cualquier ocasión.",
  },
  {
    id: 4,
    nombre: "Zapatos XX",
    precio: 62.0,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 8,
    descripcion: "Zapatos de cuero elegantes y cómodos para cualquier ocasión.",
  },
  {
    id: 5,
    nombre: "Gorra",
    precio: 15.0,
    imagen:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 20,
    descripcion: "Gorra de béisbol en color negro.",
  },
  {
    id: 6,
    nombre: "Bufanda",
    precio: 25.0,
    imagen:
      "https://images.pexels.com/photos/2234567/pexels-photo-2234567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 15,
    descripcion: "Bufanda de lana suave en color gris.",
  },
  {
    id: 7,
    nombre: "Botas",
    precio: 80.0,
    imagen:
      "https://images.pexels.com/photos/1893559/pexels-photo-1893559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stock: 7,
    descripcion: "Botas de cuero resistentes y cómodas en color marrón.",
  },
]

navbarEmail.addEventListener("click", toogleDesktopMenu);
menuIcon.addEventListener("click", toogleMenuMobile);
navShopCart.addEventListener("click", toogleShoppingCart);

function toogleDesktopMenu() {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
  productDetailView.classList.add("inactive");
}

function toogleMenuMobile() {
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
  productDetailView.classList.add("inactive");
}

function toogleShoppingCart() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
  productDetailView.classList.add("inactive");
}

function toogleCloseIconView() {
  productDetailView.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

const renderProductCard = (producto) => (`
  <div class="product-card">
    <img src="${producto.imagen}" alt="${producto.nombre}" id="product-${producto.id}">
    <div class="product-info">
      <div>
        <p>$ ${producto.precio}</p>
        <p>${producto.nombre}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>
`);

const renderProducts = (products) => {
  const productsContainer =
    document.getElementsByClassName("cards-container")[0];
  productsContainer.innerHTML = products.map(renderProductCard).join("");
  productsContainer.addEventListener("click", (event) => {
    const target = event.target;
    console.log(event)
    if (target.tagName === "IMG" && target.id.startsWith("product-")) {
      const productId = target.id.split("-")[1];
      const producto = products.find((producto) => producto.id == productId);
      renderProductDetail(producto);
    }
  });
};

const renderProductDetail = (producto) => {
  productDetailView.classList.remove("inactive");
  productDetailView.innerHTML = `
    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="${producto.imagen}" alt="bike">
    <div class="product-info-view">
      <p>$ ${producto.precio}</p>
      <p>${producto.nombre}</p>
      <p>${producto.descripcion}</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  `;
  const productDetailClose = document.getElementsByClassName(
    "product-detail-close"
  )[0];
  productDetailClose.addEventListener("click", toogleCloseIconView);
};

renderProducts(productos);
