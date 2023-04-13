const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCart);

// If the aside is open, close it
function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

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

// whenever we open our shopping cart, mobileMenu and desktopMenu are closed
function toggleCart() {
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
