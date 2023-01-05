const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconBurgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconBurgerMenu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("active");
  productDetail.classList.add("active");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  productDetail.classList.add("active");
}

function toggleProductDetail() {
  productDetail.classList.toggle("active");
  desktopMenu.classList.add("active");
  mobileMenu.classList.add("active");
}

const productsList = [];
productsList.push({
  name: "Wetsuit",
  price: "120,00",
  image: "https://i.postimg.cc/kBRpwdHL/5c547c7573683cadaa90ff7e1de8631b.jpg",
});
productsList.push({
  name: "Wetsuit short",
  price: "100,00",
  image:
    "https://i.postimg.cc/ftkKLcn1/e7fcbb48a412aff04309c3a6e53c07b3-surfing-pink-black.jpg",
});
productsList.push({
  name: "Men's Wetsuits and Surf Suits",
  price: "190,00",
  image: "https://i.postimg.cc/Q9RpdvqW/2652ecf5edd89e1391e48e4e612c43f2.jpg",
});
productsList.push({
  name: "Diving and snorkel equipment",
  price: "250,00",
  image: "https://i.postimg.cc/nCnXGHMh/95173254cbb4c14d7e294ca09c6263ae.jpg",
});
productsList.push({
  name: "Snorkel and fins",
  price: "180,00",
  image: "https://i.postimg.cc/TLmKC1rp/a2ec3c1fbdf3b078bfa4bd405cd6142e.jpg",
});
productsList.push({
  name: "Kayak boat",
  price: "600,00",
  image: "https://i.postimg.cc/hXfTVS37/27acd65217afdaf67ab65f33b11d94bf.jpg",
});

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

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPriceProduct = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const figure = document.createElement("figure");
    const iconCart = document.createElement("img");
    iconCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figure.appendChild(iconCart);
    productPriceProduct.appendChild(productPrice);
    productPriceProduct.appendChild(productName);

    productInfo.append(productPriceProduct, figure);

    productCard.append(productImage, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productsList);
