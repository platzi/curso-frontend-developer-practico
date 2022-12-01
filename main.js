const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMenuMobile);
menuCarrito.addEventListener("click", toggleMenuCarrito);

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Compu",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productList);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  console.log("hola");
  mobileMenu.classList.toggle("inactive");
  if (!aside.classList.contains("inactive")) {
    aside.classList.toggle("inactive");
  }
}

function toggleMenuCarrito() {
  aside.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  }
}

function renderProducts(productList) {
    for (product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
      
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
      
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
      
        const piDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
      
        const productName = document.createElement("p");
        productName.innerText = product.name;
      
      
        const productFigure = document.createElement("figure");
        const icon = document.createElement("img");
        icon.setAttribute("src", "./icons/bt_added_to_cart.svg");
      
        productFigure.appendChild(icon);
        piDiv.appendChild(productPrice);
        piDiv.appendChild(productName);
        productInfo.appendChild(piDiv);
        productInfo.appendChild(productFigure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
      }
}