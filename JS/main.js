const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIco = document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const ShoppingIco = document.querySelector(".navbar-shopping-cart");
const menuCarritoIco = document.querySelector(".navbar-shopping-cart");
const closeProductDetailIco = document.querySelector(".product-detail-close");
const carritoDetalle = document.querySelector("#shoppingCarContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

/* menu interactivo Email */
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenuIco.addEventListener("click", toggleMovilMenu);
menuCarritoIco.addEventListener("click", toggleCarrito);
closeProductDetailIco.addEventListener("click", closeProductDetailaside);

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactivo");
  carritoDetalle.classList.add("inactivo");
  menuMovil.classList.add("inactivo");
  desktopMenu.classList.add("inactivo");
  /*   const isMenuMovilclosed = menuMovil.classList.contains("inactivo");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactivo");
  productDetailContainer.classList.contains("inactivo");
  const isCarritoDetalleClosed = carritoDetalle.classList.contains("inactivo");
  if (!isCarritoDetalleClosed || !isMenuMovilclosed || !isMenuDesktopClosed) {
    carritoDetalle.classList.add("inactivo");
    menuMovil.classList.add("inactivo");
    desktopMenu.classList.add("inactivo");
  } */
}

function closeProductDetailaside() {
  productDetailContainer.classList.add("inactivo");
}

/* Arreglo que guarda mis productos de catalogo */
const productList = [];
productList.push({
  name: "Bici",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  precio: 220,
  image:
    "https://cdni.russiatoday.com/actualidad/public_images/5b0/5b09719338f07164d4d9781d7edd7f0e_article.jpg",
});
productList.push({
  name: "CPU",
  precio: 500,
  image:
    "https://loopulo.com/wp-content/uploads/2020/10/modding-san-miguel-ordenador-inspirado-fabrica-futurista-cerveza-loopulo-00.jpg",
});
productList.push({
  name: "Silla Gamer",
  precio: 350,
  image:
    "https://dlcdnimgs.asus.com/websites/global/products/lfuhfxz4b9lmxdqm/img/main/bg-07-m.jpg",
});

/* muestra los articulos del catalogo */
renderProducts(productList);
