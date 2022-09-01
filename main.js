const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const btnCart = document.querySelector(".navbar-shopping-cart");
const productsDetails = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
btnCart.addEventListener("click", toggleCartAside);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

function toggleDesktopMenu() {
  const isAsideClosed = productsDetails.classList.contains("inactive");
  if (!isAsideClosed) {
    productsDetails.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleCartAside() {
  productsDetails.classList.toggle("inactive");
}

const productsList = [];
productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "PC",
  price: 500,
  image:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productsList.push({
  name: "Phone",
  price: 220,
  image:
    "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productsList.push({
  name: "Kitchen",
  price: 1200,
  image:
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productsList.push({
  name: "Motorcycle",
  price: 60,
  image:
    "https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr) {
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

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoDiv.append(productPrice, productName);
    productInfoFigure.append(productImgCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.append(productCard);
  }
}

renderProducts(productsList);
