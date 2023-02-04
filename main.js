/*General variables*/
const carShopIcon = document.querySelector(".navbar-shopping-cart");
const carShopView = document.querySelector(".product-detail");
const body = document.querySelector("body");
/*Desktop Menu*/
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
/*Mobile menu*/
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu ");

carShopIcon.addEventListener("click", () => {
  carShopView.classList.toggle("activeCarShop");
  mobileMenu.classList.remove("activeMobile");
  desktopMenu.classList.remove("activeDesktop");
});

navEmail.addEventListener("click", () => {
  desktopMenu.classList.toggle("activeDesktop");
  carShopView.classList.remove("activeCarShop");
});

burguerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("activeMobile");
  carShopView.classList.remove("activeCarShop");
});

const productList = [];

productList.push({
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 120,
  name: "Bike",
});
productList.push({
  Image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
  price: 60,
  name: "Bicycle helmet",
});
productList.push({
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 320,
  name: "gloves",
});

for (const products of productList) {

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", products.Image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + products.price;
  const productName = document.createElement("p");
  productName.innerText = products.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);


  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  const cardContainer = document.querySelector('.cards-container')

  cardContainer.appendChild(productCard);
}
/*
<!-- 
       -->
      */
