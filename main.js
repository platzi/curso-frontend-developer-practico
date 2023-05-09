const emailMenu = document.querySelector(".navbar-email");
const hamIconMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartContainer = document.querySelector("#shopingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const productDetailIcon = document.querySelector(".product-detail-close")

emailMenu.addEventListener("click", toggleMenuDesktop);
hamIconMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShopingCartContainerCart);
productDetailIcon.addEventListener("click",closeProductDetail)

function toggleMenuDesktop() {
  if (!shopingCartContainer.classList.contains("inactive")) {
    shopingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");

  closeProductDetail();
}

function toggleMobileMenu() {
  if (!shopingCartContainer.classList.contains("inactive")) {
    shopingCartContainer.classList.add("inactive");
  }

  closeProductDetail();

  mobileMenu.classList.toggle("inactive");
}

function toggleShopingCartContainerCart() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }

  closeProductDetail();

  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }

  shopingCartContainer.classList.toggle("inactive");

  
}

function openProductDetail(){

  productDetail.classList.remove("inactive")

  shopingCartContainer.classList.add("inactive");

  desktopMenu.classList.add("inactive");

}

function closeProductDetail(){
  productDetail.classList.add("inactive")
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

function renderProducts(productList) {
  for (const product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click",openProductDetail)

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

renderProducts(productList);


