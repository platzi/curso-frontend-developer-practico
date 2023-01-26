const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
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
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Screen",
  price: 200,
  image:
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Computer",
  price: 600,
  image:
    "https://images.pexels.com/photos/4350767/pexels-photo-4350767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Teddy Bear",
  price: 10,
  image:
    "https://images.pexels.com/photos/5786759/pexels-photo-5786759.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
  name: "Flowers",
  price: 20,
  image:
    "https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProducts(arr) {
  for (product of productList) {
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

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
