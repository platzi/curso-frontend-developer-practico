const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const ShoppingCartContainer = document.querySelector("#ShoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

let toggleDesktopMenu = () => {
  const isAsideClosed = ShoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    ShoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
};

let toogleMobileMenu = () => {
  const isAsideClosed = ShoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    ShoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
};

let toogleCarritoAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  ShoppingCartContainer.classList.toggle("inactive");
};

let openProductDetailAside = () =>{
  ShoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

let closeProductDetailAside = () =>{
  productDetailContainer.classList.add('inactive');
}

const productList = new Array();
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 620,
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
let renderProducts = (arr) => {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click',openProductDetailAside);

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
};

renderProducts(productList);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);
