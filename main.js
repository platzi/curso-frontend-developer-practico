const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu-buguer");
const mobileMenu = document.querySelector(".mobile-menu");

navbarEmail.addEventListener("click", toggleDescktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);

function toggleDescktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
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
