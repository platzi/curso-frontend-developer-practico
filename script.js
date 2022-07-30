const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  !isAsideClosed ? aside.classList.add("inactive") : true;

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  !isAsideClosed ? aside.classList.add("inactive") : true;

  mobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  !isMobileMenuClosed ? mobileMenu.classList.add("inactive") : true;
  !isDesktopMenuClosed ? desktopMenu.classList.add("inactive") : true;

  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 20,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 40,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computer",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productList);

function renderProducts(arr) {
  arr.forEach((product) => {
    const cardsContainer = document.querySelector('.cards-container');
    const productCard = document.createElement("div");
    cardsContainer.appendChild(productCard);
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    productCard.appendChild(img);

    const productInfo = document.createElement("div");
    const contentInfo = document.createElement("div");
    const productPrice = document.createElement("p");
    const ProductName = document.createElement("p");
    productInfo.classList.add("product-info");
    productPrice.innerText = `$${product.price}`;
    ProductName.innerText = product.name;
    productCard.appendChild(productInfo);
    productInfo.appendChild(contentInfo);
    contentInfo.appendChild(productPrice);
    contentInfo.appendChild(ProductName);

    const addCartFigure = document.createElement("figure");
    const addCartImg = document.createElement("img");
    addCartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfo.appendChild(addCartFigure);
    addCartFigure.appendChild(addCartImg);
  });
}

