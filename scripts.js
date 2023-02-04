const email = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

email.addEventListener("click", toggleMenuDesktop);
burgerMenu.addEventListener("click", toggleMenuMobile);
cartIcon.addEventListener("click", toggleOrders);

function toggleMenuDesktop() {
  let isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  let isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleOrders() {
  let isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  let isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
  }
  productDetail.classList.toggle("inactive");
}

const products = [];

products.push({
  name: "Bike",
  price: 60,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

products.push({
  name: "Display",
  price: 150,
  img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

products.push({
  name: "Laptop",
  price: 300,
  img: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(array) {
  /* Reference
    <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="product img" />
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="" />
        </figure>
      </div>
    </div>
  */

  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const div = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    div.append(productPrice, productName);

    const figure = document.createElement("figure");
    const imgCart = document.createElement("img");
    imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    // Con Element.append() podemos agregar varios nodos y texto
    // mientras que con Element.appendChild() solo podemos agregar un nodo.

    figure.appendChild(imgCart);

    productInfo.append(div, figure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(products);
