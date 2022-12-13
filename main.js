const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu-buguer");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCar = document.querySelector(".navbar-shopping-cart");
const productDetailCar = document.querySelector(".product-detail");
const productDetailCarSecundary = document.querySelector(
  ".product-detail-secundary"
);
const productDetailCloseSecundary = document.querySelector(
  ".product-detail-close-secundary"
);
const mainContainer = document.querySelector(".main-container");

navbarEmail.addEventListener("click", toggleDescktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
iconCar.addEventListener("click", toggleIconCar);
productDetailCloseSecundary.addEventListener("click", closeProductDetail);

function toggleDescktopMenu() {
  desktopMenu.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  productDetailCar.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  productDetailCar.classList.add("inactive");
}

function toggleIconCar() {
  productDetailCar.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}

function openProductDetailAside() {
  productDetailCarSecundary.classList.remove("inactive");
  mainContainer.classList.add("inactive");
}

function closeProductDetail() {
  productDetailCarSecundary.classList.add("inactive");
  mainContainer.classList.remove("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Box",
  price: 12,
  image:
    "https://res.cloudinary.com/combariza/image/upload/v1643213357/Servilla/delivery3_imei5v.webp",
});

productList.push({
  name: "Delivery",
  price: 7,
  image:
    "https://res.cloudinary.com/combariza/image/upload/v1643213349/Servilla/delivery2_djawkh.jpg",
});

{
  /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */
}

function renderProducts(arr) {
  for (product of arr) {
    const cardContainer = document.querySelector(".cards-container");
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", openProductDetailAside);
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerHTML = product.name;
    const figure = document.createElement("figure");
    figure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, figure);
    productCard.append(img, productInfo);
    cardContainer.appendChild(productCard);
  }
}

renderProducts(productList);
