const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCart);

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");
  // If the aside is open, close it
  if (isAsideOpen) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
  // adds or removes .inactve to toggle the desktop menu
}

function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");
  if (isAsideOpen) {
    aside.classList.toggle("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCart() {
  // whenever we open our shopping cart, mobileMenu and desktopMenu are closed
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

  if (isDesktopMenuOpen) {
    // if the desktopMenu is open when we click the cart, close it
    desktopMenu.classList.add("inactive");
  }
  if (isMobileMenuOpen) {
    // if the mobileMenu is open when we click the cart, close it
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

// List of products
// Format: {name: String, price: int, image: url}
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computer",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Car",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/* <div class="product-card">
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
          </div>
        </div> */

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  // product = {name, price, img}
  img.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productName = document.createElement("p");
  productPrice.innerText = product.name;
  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
}
