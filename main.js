var menuEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
var mainMenu = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu");
var carritoMenu = document.querySelector(".navbar-shopping-cart");
var aside = document.querySelector(".product-detail");
var cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
mainMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
  var isCarritoMenuClosed = aside.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  var isCarritoMenuClosed = aside.classList.contains("inactive");

  if (!isCarritoMenuClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  var isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

var productList = [];
productList.push({
  name: "Bike",
  price: 120.0,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 220.0,
  image:
    "https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Computer",
  price: 640.0,
  image:
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
</div>; */

function renderProducts(arr) {
  for (product of arr) {
    var productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {name, price, image} -> product.image
    var productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    var productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    var productInfoDiv = document.createElement("div");

    var productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    var productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    var productInfoFigure = document.createElement("figure");
    var productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
