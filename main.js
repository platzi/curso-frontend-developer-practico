const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamIconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

emailMenu.addEventListener("click", toggleMenuDesktop);
hamIconMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleAsideCart);

function toggleMenuDesktop() {
  if (!aside.classList.contains("inactive")) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!aside.classList.contains("inactive")) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleAsideCart() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }

  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Drone",
  price: 999,
  image:
    "https://images.pexels.com/photos/14947286/pexels-photo-14947286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
  name: "Airpods",
  price: 350,
  image:
    "https://images.pexels.com/photos/14979014/pexels-photo-14979014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

/*
<div class="product-card">
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
        </div>
*/

function renderProducts(productList){
    for (const product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
      
        const productInfoDiv = document.createElement("div");
      
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      }
}

renderProducts(productList)
