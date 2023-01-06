const btnAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMobileMenu = document.querySelector(".btnMobileMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const btnShoppingCart = document.querySelector(".navbar-shopping-cart");
const contentShoppingCart = document.querySelector("#ShoppingCart");
const elementsPopUps = document.querySelectorAll(".popUpElement");
const productsContainer = document.querySelector(".products-container");
const pageTitle = document.querySelector(".page-title");

var toogleFunction = function (btnToggle, contentToggle, eventToogle) {
  // Funcion para identificar los otros elementos popups y cerrarlos
  function closeOtherPopUps() {
    for (let i = 0; i < elementsPopUps.length; i++) {
      elementsPopUps[i].classList.add("inactive");
    }
  }

  btnToggle.addEventListener(eventToogle, function () {
    // 1. Cerramos los popups
    closeOtherPopUps(contentToggle);
    // 2. Abrimos el popups del Evento actual
    contentToggle.classList.toggle("inactive");
  });
};
toogleFunction(btnAccount, desktopMenu, "click");
toogleFunction(btnMobileMenu, mobileMenu, "click");
toogleFunction(btnShoppingCart, contentShoppingCart, "click");

// LISTADO DE PRODUCTOS
// Paso 1. Creación de Arrays de los productos
const productList = [];
productList.push({
  name: "Product name 1",
  price: "4500",
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Product name 2",
  price: "6800",
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Product name 3",
  price: "2300",
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Product name 4",
  price: "9300",
  imgUrl:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
// Paso 2. Creación de la función para renderizar los productos.
function renderProduct(arrProductys, selectorContainer) {
  for (product of productList) {
    const productTeaser = document.createElement("div");
    productTeaser.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.imgUrl);
    productImg.setAttribute("title", product.name);
    productImg.setAttribute("alt", product.name);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoInner = document.createElement("div");
    productInfoInner.classList.add("product-info-inner");

    const productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.innerText = product.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.innerText = "$" + product.price;

    const addToCartWrap = document.createElement("figure");
    const addToCartImg = document.createElement("img");
    addToCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    addToCartImg.setAttribute("alt", "Agregar al carrito de compras.");

    productTeaser.appendChild(productImg);
    productTeaser.appendChild(productInfo);

    productInfo.appendChild(productInfoInner);
    productInfo.appendChild(addToCartWrap);

    productInfoInner.appendChild(productName);
    productInfoInner.appendChild(productPrice);

    addToCartWrap.appendChild(addToCartImg);

    selectorContainer.appendChild(productTeaser);
  }
}
renderProduct(productList, productsContainer);

pageTitle.innerText = 'Contamos con ' + productList.length + ' productos en nuestro catálogo.';
