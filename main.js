const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menuHamIcon");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 520,
  image:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?cs=srgb&dl=pexels-xxss-is-back-777001.jpg&fm=jpg",
});
productList.push({
  name: "Carro",
  price: 1150,
  image:
    "https://images.pexels.com/photos/9881677/pexels-photo-9881677.jpeg?cs=srgb&dl=pexels-kader-duygun-9881677.jpg&fm=jpg",
});
productList.push({
  name: "Moto",
  price: 850,
  image: "https://images.pexels.com/photos/5192247/pexels-photo-5192247.jpeg?cs=srgb&dl=pexels-cottonbro-5192247.jpg&fm=jpg",
});
productList.push({
  name: "Nintendo Swicht",
  price: 500,
  image: "https://images.pexels.com/photos/7196477/pexels-photo-7196477.jpeg?cs=srgb&dl=pexels-erik-mclean-7196477.jpg&fm=jpg",
});
productList.push({
  name: "Computador",
  price: 450,
  image: "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?cs=srgb&dl=pexels-bich-tran-1714341.jpg&fm=jpg",
});
productList.push({
  name: "Casco",
  price: 250,
  image: "https://images.pexels.com/photos/1323201/pexels-photo-1323201.jpeg?cs=srgb&dl=pexels-mixu-1323201.jpg&fm=jpg",
});
productList.push({
  name: "Mando",
  price: 150,
  image: "https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?cs=srgb&dl=pexels-stas-knop-2520829.jpg&fm=jpg",
});
productList.push({
  name: "Balon Basketball",
  price: 50,
  image: "https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?cs=srgb&dl=pexels-bk-aguilar-945471.jpg&fm=jpg",
});
productList.push({
  name: "Batman Figura accion",
  price: 60,
  image: "https://images.pexels.com/photos/69314/pexels-photo-69314.jpeg?cs=srgb&dl=pexels-lukas-horak-69314.jpg&fm=jpg",
});

function renderProduct(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

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
    const productImgCart = document.createElement("img");

    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProduct(productList);
