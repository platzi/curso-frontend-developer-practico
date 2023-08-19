// Selectors
const menuMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartBtn = document.querySelector(".navbar-shopping-cart");
const shoppingCartQty = shopingCartBtn.querySelector("div");
const cardsContainer = document.querySelector(".cards-container");

// Asides selectors
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartAside = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailInfoContainer =
  productDetailContainer.querySelector(".product-info");
const myOrderContent = shoppingCartAside.querySelector(".my-order-content");
const shoppingCartTotal = shoppingCartAside.querySelector(
  ".cart-footer .order p:nth-child(2)"
);

const productDetailImg =
  productDetailContainer.querySelector("img.product-image");
const productDetailInfo = {
  price: productDetailInfoContainer.querySelector("p:nth-child(1)"),
  name: productDetailInfoContainer.querySelector("p:nth-child(2)"),
  description: productDetailInfoContainer.querySelector("p:nth-child(3)"),
};

menuMail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleShoppingCart);

/**
 * if the current DOM selector is active then it will add the inactive class
 *
 * @param {} arrToClose - array of DOM selectors to manage
 */
function collisionManager(arrToClose) {
  for (windowToClose of arrToClose) {
    windowToClose.classList.contains("inactive") == true
      ? ""
      : windowToClose.classList.add("inactive");
  }
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");

  collisionManager([shoppingCartAside, productDetailContainer]);
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  collisionManager([shoppingCartAside, productDetailContainer]);
}

function toggleShoppingCart() {
  shoppingCartAside.classList.toggle("inactive");
  collisionManager([desktopMenu, mobileMenu, productDetailContainer]);
}

function openProductDetailAside(e) {
  const asin = e.target.parentNode.parentElement.dataset.asin;

  const productDataByAsin = productsList.find(
    (element) => element.asin == asin
  );
  productDetailImg.setAttribute("src", productDataByAsin.image);
  productDetailInfo.price.innerText = displayMoneyWithLocale(
    productDataByAsin.precio
  );
  productDetailInfo.name.innerText = productDataByAsin.nombre;
  productDetailInfo.description.innerText = productDataByAsin.description;

  // Display the aside product detail
  productDetailContainer.classList.remove("inactive");

  // Close btn
  productDetailCloseIcon.addEventListener("pointerdown", (e) => {
    productDetailContainer.classList.add("inactive");
  });

  collisionManager([desktopMenu, mobileMenu, shoppingCartAside]);
}

function addItemToCart(e) {
  const itemAsin = e.target.parentNode.dataset.asin;

  // if the item isn't in the list add it
  if (!shoppingCart.find((element) => element.asin == itemAsin)) {
    const grabData = productsList.find((item) => item.asin == itemAsin);
    shoppingCart.push(grabData);
  }
  //Update counter
  updateShoppingCartNumberIcon();

  // Update Shopping Cart Items to be displayed
  renderShoppingCart();
}

const productsList = [];
productsList.push(
  {
    asin: "B07BNDPKL5",
    nombre: "Bike",
    precio: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    image_alt: "Image of a Bicicle",
    description:
      "Steel frames have higher strength. The circular steel tube gives the bike a retro aesthetic.These types of bicycles are especially efficient in cities with few slopes.",
  },
  {
    asin: "MBPM12K22",
    nombre: "Macbook pro M1",
    precio: 2400,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
    image_alt: "Macbook Pro M1 Laptop",
    description: `Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance
Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever
Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games
16-core Neural Engine for up to 11x faster machine learning performance, Longer battery life, up to 17 hours`,
  },
  {
    asin: "EVS2K2311",
    nombre: "Scooter",
    precio: 499.99,
    image:
      "https://solarscooters.co.uk/cdn/shop/products/wb1Purple.jpg?v=1674056128",
    image_alt: "Electric Scooter",
    description: `350W Powerful Electric Scooter: Equipped with a powerful Nominal Power 350W (Max Power 500W) motor and 6.7inch wide deck, the Gotrax G4 electric scooter was powerful enough to move easily. What’s more, the front fork is made of aluminum alloy forging process, very strong and durable.`,
  },
  {
    asin: "ESP32WT32",
    nombre: "WT32-ETH01 Development Board, ESP32",
    precio: 16.99,
    image: "https://m.media-amazon.com/images/I/617s-2l1dwL._AC_SX679_.jpg",
    image_alt: "Development Board",
    description: `ESP32 series ICs are SOCs that integrate 2.4GHz Wi-Fi and Bluetooth dual-mode, with ultra-high stability, versatility, reliability, and ultra-low power consumption.`,
  },
  {
    asin: "K665CHRON",
    nombre: "Keychron K6 65% Compact",
    precio: 84.99,
    image: "https://m.media-amazon.com/images/I/61lxqfGeZ0S._AC_SX679_.jpg",
    image_alt: "Teclado geek",
    description:
      "The Keychron K6 is a hot-swappable compact 65% layout white backlight Bluetooth mechanical keyboard made for Mac and Windows. Customize per-key typing experience to maximize your productivity on the K6 hot-swappable version without the need to solder.",
  },
  {
    asin: "BOOKBLITZ",
    nombre:
      "Blitzscaling: The Lightning-Fast Path to Building Massively Valuable Companies",
    precio: 14.39,
    image:
      "https://m.media-amazon.com/images/I/51qN-2iD34L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    image_alt: "Cobertura de Libro",
    description:
      "What entrepreneur or founder doesn’t aspire to build the next Amazon, Facebook, or Airbnb?  Yet those who actually manage to do so are exceedingly rare.  So what separates the startups that get disrupted and disappear from the ones who grow to become global giants?",
  },
  {
    asin: "ASUS271080P",
    nombre: `ASUS 27" 1080P Monitor`,
    precio: 129,
    image:
      "https://m.media-amazon.com/images/I/81z2Hp8TLjL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    image_alt: "Monitor",
    description: `Full HD Resolution: Experience sharp, vivid images on this 27" computer screen. Enjoy the full 1920x1080 resolution and indulge in razor-sharp visuals with this ASUS monitor.`,
  },
  {
    asin: "SUBZEROHOPE",
    nombre: "Thermal Paste",
    precio: 8.88,
    image:
      "https://m.media-amazon.com/images/I/5114EthElbL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    image_alt: "Jeringa con pasta térmica para chips",
    description:
      "THERMAL COMPOUND: SYY thermal paste Edition 2020 formula has excellent component heat dissipation performance and has the stability to push the system to the limit.",
  },
  {
    asin: "IMPROVECODE",
    nombre:
      "Clean Code Principles and Patterns: A Software Practitioner's Handbook",
    precio: 27.99,
    image:
      "https://m.media-amazon.com/images/I/41-WdbOCx1L._SX384_BO1,204,203,200_.jpg",
    image_alt: "Portada de Libro",
    description:
      "Clean Code Principles and Patterns is one of the most comprehensive no-fluff guides for software developers to help them write clean code every day. The author Petri Silen has almost 30 years of industry experience in designing and implementing software, and now he puts all his knowledge gained during the years into this book.",
  }
);

/**
 * Displays the product grid based on the array of data pased
 *
 * @param {array} arr - Data feed of products
 */
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("data-asin", product.asin);

    const productImageContainer = document.createElement("div");
    productImageContainer.classList.add("product-image");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.image_alt);
    productImage.addEventListener("pointerdown", openProductDetailAside);
    productImageContainer.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = displayMoneyWithLocale(product.precio);

    const productName = document.createElement("p");
    productName.innerText = product.nombre;

    productInfoDiv.append(productPrice, productName);

    const figure = document.createElement("figure");
    figure.classList.add("add-to-cart");
    figure.setAttribute("data-asin", product.asin);
    const addButtonImage = document.createElement("img");
    addButtonImage.setAttribute("src", "./icons/bt_add_to_cart.svg");
    addButtonImage.setAttribute("alt", `Add ${product.nombre} to Cart`);
    addButtonImage.addEventListener("pointerdown", addItemToCart);

    figure.appendChild(addButtonImage);

    productInfo.append(productInfoDiv, figure);

    // Build the product card with image & info
    productCard.append(productImageContainer, productInfo);

    // Add each product card into the cards Container
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);

/**
 * Formats a numeric value as currency with locale-specific formatting.
 *
 * @param {number} precio - The numeric value to be formatted as currency.
 * @param {object} [options] - Formatting options.
 * @param {string} [options.locale="en-US"] - The locale to use for formatting.
 * @param {string} [options.currency="USD"] - The currency code.
 * @param {string} [options.style="currency"] - The formatting style.
 * @returns {string} The formatted currency value.
 */
function displayMoneyWithLocale(
  precio,
  options = { locale: "en-US", currency: "USD", style: "currency" }
) {
  return Number(precio).toLocaleString(options.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: options.style,
    currency: options.currency,
  });
}

// Shopping Cart
const shoppingCart = [];

function updateShoppingCartNumberIcon() {
  shoppingCartQty.innerText = shoppingCart.length;
}
updateShoppingCartNumberIcon();

/**
 * Remove from shopping cart the element by index of the selected item
 *
 * @param {*} e - Element that launch the event
 */
function removeItemFromShoppingCart(e) {
  const itemToRemove = e.target.parentElement.dataset.asin;

  const indexToRemove = shoppingCart.findIndex(
    (element) => element.asin == itemToRemove
  );

  shoppingCart.splice(indexToRemove, 1);

  // Update shopping Cart Number
  updateShoppingCartNumberIcon();

  // Update items in the list displayed
  renderShoppingCart();
}

/**
 * Render the shopping cart values based on the products Added to the shopping cart
 */
function renderShoppingCart() {
  myOrderContent.innerHTML = "";
  let shoppingCartTotalAmount = 0;
  shoppingCart.length == 0 ? (shoppingCartTotal.innerText = "$0.00") : "";

  for (cartItem of shoppingCart) {
    const shoppingCartItem = document.createElement("div");
    shoppingCartItem.classList.add("shopping-cart");
    shoppingCartItem.setAttribute("data-asin", cartItem.asin);

    const figure = document.createElement("figure");
    const productThumbnail = document.createElement("img");
    productThumbnail.setAttribute("src", cartItem.image);
    productThumbnail.setAttribute("alt", cartItem.image_alt);

    figure.appendChild(productThumbnail);

    const productName = document.createElement("p");
    productName.innerText = cartItem.nombre;
    const productPrice = document.createElement("p");
    productPrice.innerText = displayMoneyWithLocale(cartItem.precio);

    const closeImg = document.createElement("img");
    closeImg.setAttribute("src", "./icons/icon_close.png");
    closeImg.setAttribute("alt", `Delete this item from the shopping cart`);
    closeImg.addEventListener("pointerdown", removeItemFromShoppingCart);

    shoppingCartItem.append(figure, productName, productPrice, closeImg);

    // Display the order products
    myOrderContent.appendChild(shoppingCartItem);

    // Footer
    shoppingCartTotalAmount += cartItem.precio;
    shoppingCartTotal.innerText = displayMoneyWithLocale(
      shoppingCartTotalAmount
    );
  }
}
