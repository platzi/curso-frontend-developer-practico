const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".shoppingCart");
const productCartDetail = document.querySelector(".productCart-detail");
const productFloatDetail = document.querySelector(".productFloat-detail");
const cardsContainer = document.querySelector(".cards-container");
const productFloatButClose = document.querySelector(
  ".productFloat-detail-close"
);

navBarEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
});

burgerMenu.addEventListener("click", () => {
  const productCartDetailClosed =
    productCartDetail.classList.contains("inactive");

  if (!productCartDetailClosed) {
    productCartDetail.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
});

shoppingCart.addEventListener("click", () => {
  const isMobileClosedMenu = mobileMenu.classList.contains("inactive");

  if (!isMobileClosedMenu) {
    mobileMenu.classList.add("inactive");
  }
  productCartDetail.classList.toggle("inactive");
});

productFloatButClose.addEventListener("click", () => {
  productFloatDetail.classList.add("inactive");
});

const productList = [];

productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "",
});

productList.push({
  name: "pantalla",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "",
});

productList.push({
  name: "compu",
  price: 1220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "",
});

productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "",
});

productList.push({
  name: "pantalla",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "",
});

productList.push({
  name: "compu",
  price: 1220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  alt: "",
});

function openProductFloatDetail() {
  productFloatDetail.classList.remove("inactive");
}

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", () => {
      openProductFloatDetail();
    });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement("figure");

    const productFigureImg = document.createElement("img");

    productFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productFigureImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
