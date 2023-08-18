const menuMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartAside = document.querySelector(".product-detail");

menuMail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  if (!shoppingCartAside.classList.contains("inactive")) {
    shoppingCartAside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  if (!shoppingCartAside.classList.contains("inactive")) {
    shoppingCartAside.classList.add("inactive");
  }
}

function toggleShoppingCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isAsideCarritoOpen = !shoppingCartAside.classList.contains("inactive");

  if (isAsideCarritoOpen) {
    // its open
    shoppingCartAside.classList.add("inactive");
  } else {
    // its close
    shoppingCartAside.classList.remove("inactive");
    isMobileMenuOpen == true ? mobileMenu.classList.add("inactive") : "";
  }

  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
}

const productsList = [];
productsList.push(
  {
    nombre: "Bike",
    precio: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nombre: "Computadora",
    precio: 2400,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
  },
  {
    nombre: "Scooter",
    precio: 1200,
    image:
      "https://solarscooters.co.uk/cdn/shop/products/wb1Purple.jpg?v=1674056128",
  }
);

function renderProducts(arr) {
  const cardsContainer = document.querySelector(".cards-container");
  for (product of productsList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="product-info">
                    <div>
                        <p>${Number(product.precio).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "USD",
                        })}</p>
                        <p>${product.nombre}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>`;
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productsList);
