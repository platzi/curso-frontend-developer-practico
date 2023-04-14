const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

// If the aside is open, close it
function toggleDesktopMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

  if (isAsideOpen) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
  // adds or removes .inactve to toggle the desktop menu
}

function toggleMobileMenu() {
  const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");
  if (isAsideOpen) {
    shoppingCartContainer.classList.toggle("inactive");
  }
  // We close the productDetail before opening the mobileMenu
  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

// whenever we open our shopping cart, mobileMenu and desktopMenu are closed
function toggleCart() {
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isProductDetailOpen =
    !productDetailContainer.classList.contains("inactive");

  if (isDesktopMenuOpen) {
    // if the desktopMenu is open when we click the cart, close it
    desktopMenu.classList.add("inactive");
  }

  if (isProductDetailOpen) {
    productDetailContainer.classList.add("inactive");
  }

  if (isMobileMenuOpen) {
    // if the mobileMenu is open when we click the cart, close it
    mobileMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

// List of products to be displayed in the cards-container
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

// This function creates each product-card in the cards-container instead of having
// to write the HTML code for each product card
function renderProducts(arr) {
  for (product of arr) {
    // We create the first div
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // We create the image that gets data from the productList array
    const productImg = document.createElement("img");
    // product = {name, price, img}

    productImg.setAttribute("src", product.image);

    // We cannot select the productImg with the querySelector because it doesn't exist
    // yet. After we create it, we add an EventListener to it so it can listen to the
    // click event and display the productDetail
    productImg.addEventListener("click", openProductDetailAside);

    // We create the second div which contains the product info together with the
    // add to cart button
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    // We create the div where the product name and price is
    const productInfoDiv = document.createElement("div");

    const productName = document.createElement("p");
    productName.innerText = product.name;
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    // We append the name and price of each product to the div where the info is.
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    // We create and append the add to cart button
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // Finally, we add every product card created into the main cardContainer
    cardsContainer.appendChild(productCard);
  }
}
// This recreates the product card for each product in the productList
// based on the HTML code above which represents a product card

// We only call the function with the product list with the format we have
// which is {name: String, price: int, image: url}
renderProducts(productList);
