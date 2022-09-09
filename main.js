const API = "https://api.escuelajs.co/api/v1/products";

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCar = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector(".product-detail");
const body = document;
const cards_container = document.querySelector(".cards-container");
const productsDetails = document.querySelector(".product-detail2");
const buttonClose = document.querySelector(".product-detail2-close");

const arrayProducts = [];

menuCar.addEventListener("click", toggleMenuCar);
body.addEventListener("click", closeDesktopMenu);
menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);

function closeDesktopMenu(event) {
  const isAsideClosed = asideCar.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isproductsDetailsClosed = desktopMenu.classList.contains("inactive");
  if (
    event.target.localName == "img" &&
    event.target.parentNode.className == "product-card"
  ) {
    productsDetails.classList.remove("inactive");
    productsDetails.innerHTML = `<div class="product-detail2-close">
        <img src="./icons/icon_close.png" alt="close">
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      <div class="product-info2">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button2 add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
          Add to cart
        </button>
      </div>
  `;
  } 
  else if (event.target.parentNode.className == "product-detail2-close") {
    productsDetails.classList.add("inactive");
  }
}

function closeProductsDetails() {
  productsDetails.classList.add("inactive");
}

function toggleDesktopMenu() {
  const isProductsDetailsClose = productsDetails.classList.contains("inactive");
  const isAsideClosed = asideCar.classList.contains("inactive");
  if (!isAsideClosed) {
    asideCar.classList.add("inactive");
  } else if (!isProductsDetailsClose) {
    productsDetails.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductsDetailsClosed = productsDetails.classList.contains("inactive");
  const isAsideClosed = asideCar.classList.contains("inactive");
  if (!isAsideClosed) {
    asideCar.classList.add("inactive");
  } else if (!isProductsDetailsClosed) {
    productsDetails.classList.add("inactive");
  }
  else if(!isdesktopMenuClosed){
    desktopMenu.classList.add("inactive");

  }

  mobileMenu.classList.toggle("inactive");
}
function toggleMenuCar() {
  const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductsDetailsClose = productsDetails.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isProductsDetailsClose) {
    productsDetails.classList.add("inactive");
  }
  else if (!isdesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  asideCar.classList.toggle("inactive");
}

async function fetchData(apiData) {
  const response = await fetch(apiData);
  const data = await response.json();
  return data;
}

async function callFetch(apiData) {
  try {
    const products = await fetchData(apiData);

    for (let i = 0; i < 10; i++) {
      arrayProducts.push({
        title: products[i].title,
        price: products[i].price,
        img: products[i].images[0],
      });
    }
    arrayProducts.forEach((product) => {
      cards_container.innerHTML += `
    <div class="product-card">
        <img src=${product.img} alt="">
        <div class="product-info">
          <div>
            <p>${product.price}$</p>
            <p>${product.title}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    `;
    });
  } catch {
    console.log("error");
  }
}
callFetch(API);

/*
<div class="product-detail2-close">
        <img src="./icons/icon_close.png" alt="close">
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      <div class="product-info2">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button2 add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
          Add to cart
        </button>
      </div>
*/
