const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

emailMenu.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
  nombre: "Bike",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  nombre: "Guayos",
  precio: 300,
  image:
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/374/566/products/guayos-puma-hombre-color-gris-negro-sintetica-cancha-tienda-colombia-onlineshoppingcenterg-centro-de-compras-en-linea-osc1-a8499d8ff38c355f3216675078770496-640-0.png",
});

productList.push({
  nombre: "Camiseta",
  precio: 45,
  image:
    "https://img.freepik.com/vector-premium/camiseta-sport-design-camiseta-carreras-vista-frontal-posterior-uniforme-club_294186-567.jpg",
});

productList.push({
  nombre: "Bike",
  precio: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  nombre: "Guayos",
  precio: 300,
  image:
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/374/566/products/guayos-puma-hombre-color-gris-negro-sintetica-cancha-tienda-colombia-onlineshoppingcenterg-centro-de-compras-en-linea-osc1-a8499d8ff38c355f3216675078770496-640-0.png",
});

productList.push({
  nombre: "Camiseta",
  precio: 45,
  image:
    "https://img.freepik.com/vector-premium/camiseta-sport-design-camiseta-carreras-vista-frontal-posterior-uniforme-club_294186-567.jpg",
});

function renderProducts(arrayProducts) {
    for (product of arrayProducts) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
      
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
      
        const divPriceName = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.precio;
        const productName = document.createElement("p");
        productName.innerText = product.nombre;
      
        divPriceName.appendChild(productPrice);
        divPriceName.appendChild(productName);
      
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
      
        productInfoFigure.appendChild(productImgCard);
      
        productInfo.appendChild(divPriceName);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
}

renderProducts(productList)