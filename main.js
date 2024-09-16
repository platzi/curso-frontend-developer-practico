const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".shoppingCart-detail");

const cardsContainer = document.querySelector(".cards-container");

const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productDetail = document.querySelector(".product-detail")

const goBackShoppingCart = document.querySelector(".go-back");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleShoppingDetail);
productDetailCloseIcon.addEventListener("click",closeProductDetail);
goBackShoppingCart.addEventListener("click", closeShoppingDetail)

function toggleDesktopMenu() {
  shoppingCart.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toggleMobileMenu() {
  shoppingCart.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function toggleShoppingDetail() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCart.classList.toggle("inactive");
  productDetail.classList.add("inactive");
}

function closeShoppingDetail() {
  shoppingCart.classList.add("inactive");
}

function closeProductDetail(){
  productDetail.classList.add("inactive");
}

function openProductDetail(){
  productDetail.classList.remove('inactive');
  shoppingCart.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "TV",
  price: 420,
  image:
    "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Laptop",
  price: 500,
  image:
    "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

/* <div class="product-card">
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
        </div> */

function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const divProductInfo = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    divProductInfo.appendChild(productPrice);
    divProductInfo.appendChild(productName);
  
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(divProductInfo);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);