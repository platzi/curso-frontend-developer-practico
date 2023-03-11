const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburger = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburger.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClose = aside.classList.contains("inactive");

  if (!isAsideClose) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClose = aside.classList.contains("inactive");

  if (!isAsideClose) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenu = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isDesktopMenu) {
    desktopMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "bike",
  price: 130,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "pc",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "motocicle",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*<div class="product-card">
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
      </div>*/

function renderProducts(arr) {
  for (product of productList) {
    const productCart = document.createElement("div");
    productCart.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice);
    productInfoDiv.append(productName);
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv);
    productInfo.append(productInfoFigure);

    productCart.append(productImg);
    productCart.append(productInfo);

    cardsContainer.append(productCart);
  }
}

renderProducts(productList);
