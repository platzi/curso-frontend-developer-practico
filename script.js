const $ = (element) => document.querySelector(element);
const email = $(".navbar-email");
const desktopMenu = $(".desktop-menu");
const menu = $(".menu");
const mobileMenu = $(".mobile-menu");
const btnCart = $(".navbar-shopping-cart");
const shoppingCartContainer = $("#shoppingCartContainer");
const cardContainer = $(".cards-container");
const productDetail = $("#productDetail");
const productDetailClose = $(".product-detail-close");
const imgProductDetail = $(".img-productDetail");
const counter = $(".counter");
const orderContent =$('.my-order-content');
const closeOrder = $('.closeOrderCart');

console.log({ menu });

email.addEventListener("click", toggleDesktop);
menu.addEventListener("click", toggleMenu);
btnCart.addEventListener("click", toggleCart);
closeOrder.addEventListener('click', toggleCart);


function toggleDesktop() {
  let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
  let productDetailClosed = productDetail.classList.contains("inactive");
  if (!isMenuCartClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }
  if (!productDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
function toggleMenu() {
  let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
  let productDetailClosed = productDetail.classList.contains("inactive");
  
  if (!isMenuCartClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }
  if (!productDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  mobileMenu.classList.toggle("slide-right-menu");
}
function toggleCart() {
  let isMobileMenuClosed = !mobileMenu.classList.contains("slide-right-menu");
  let desktopMenuClosed = desktopMenu.classList.contains("inactive");
  let productDetailClosed = productDetail.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("slide-right-menu");
  }
  if (!desktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }
  if (!productDetailClosed) {
    productDetail.classList.toggle("inactive");
  }
  if (shoppingCartContainer.classList.contains("inactive")) {
    renderProductsCart(productListCart);
  }else{
    removeAllChildNodes(orderContent);
  }
  shoppingCartContainer.classList.toggle("inactive");
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const productList = [];
productList.push({
  name: "Bike",
  price: "100",
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "Scooter",
  price: "200",
  image:
    "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
});
productList.push({
  name: "Car",
  price: "300",
  image:
    "https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1807&q=80",
});
productList.push({
  name: "Motorcycle",
  price: "400",
  image:
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
});
productList.push({
  name: "Truck",
  price: "500",
  image:
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
});
productList.push({
  name: "Boat",
  price: "600",
  image:
    "https://images.unsplash.com/photo-1563296291-14f26f10c20f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
});
productList.push({
  name: "Bike",
  price: "100",
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "Scooter",
  price: "200",
  image:
    "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
});
productList.push({
  name: "Car",
  price: "300",
  image:
    "https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1807&q=80",
});
productList.push({
  name: "Motorcycle",
  price: "400",
  image:
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
});
productList.push({
  name: "Truck",
  price: "500",
  image:
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
});
productList.push({
  name: "Boat",
  price: "600",
  image:
    "https://images.unsplash.com/photo-1563296291-14f26f10c20f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
});
productList.push({
  name: "Bike",
  price: "100",
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "Scooter",
  price: "200",
  image:
    "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener('click', () => { 
      displayProductInfo(img.getAttribute('src'));
    }
    );
    productDetailClose.addEventListener('click', closeProductInfo);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const div = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$"+product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;
    div.appendChild(productPrice);
    div.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productInfoFigureImg = document.createElement("img");
    productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigureImg.addEventListener('click', () => {
      let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
      addToCart(productName.innerText, productPrice.innerText.replace('$', ''), img.getAttribute('src'));
      if(!isMenuCartClosed){
        toggleCart();
        toggleCart();
      }
    });

    productInfoFigure.appendChild(productInfoFigureImg);
    productInfo.appendChild(div);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}


function removeFromCart(name, price, image) {
  let arr = productListCart;
  for(let i = 0; i < arr.length; i++){
    
    if(arr[i].name == name && arr[i].price == price && arr[i].image == image){
      arr.splice(i, 1);
      console.log('Se borro un elemento');
    }
  }
}

function renderProductsCart(arr) {
  let TOTAL = 0;
  for (product of arr) {
    const shoppingCart = document.createElement("div");
    shoppingCart.classList.add("shopping-cart");
  
    const shoppingCartFigure = document.createElement("figure");
    const shoppingCartFigureImg = document.createElement("img");
    shoppingCartFigureImg.setAttribute("src", product.image);
    const shoppingCartProductName = document.createElement("p");
    shoppingCartProductName.innerText = product.name;
    const shoppingCartProductPrice = document.createElement("p");
    shoppingCartProductPrice.innerText = product.price;
    TOTAL += parseFloat(product.price);
    //console.log(product.price.typeof);
    const shoppingCartClose = document.createElement("img");
    shoppingCartClose.setAttribute("src", "./icons/icon_close.png");
    shoppingCartClose.addEventListener('click', () => {
      removeFromCart(shoppingCartProductName.innerText, shoppingCartProductPrice.innerText.replace('$', ''), shoppingCartFigureImg.getAttribute('src'));
      counter.innerHTML = parseInt(counter.innerHTML) - 1;
      let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
      if(!isMenuCartClosed){
        toggleCart();
        toggleCart();
      }
    });

    shoppingCartFigure.appendChild(shoppingCartFigureImg);
    shoppingCart.appendChild(shoppingCartFigure);
    shoppingCart.appendChild(shoppingCartProductName);
    shoppingCart.appendChild(shoppingCartProductPrice);
    shoppingCart.appendChild(shoppingCartClose);
    
    orderContent.appendChild(shoppingCart);
  }
  const order = document.createElement("div");
  order.classList.add("order");
  const pOrder = document.createElement("p");
  const spanTotal = document.createElement("span");
  spanTotal.innerText = "Total";
  const pTotal = document.createElement("p");
  pTotal.innerText = TOTAL;
  pOrder.appendChild(spanTotal);
  order.appendChild(pOrder);
  order.appendChild(pTotal);
  
  const buttonCheckout = document.createElement("button");
  buttonCheckout.classList.add("primary-button");
  buttonCheckout.innerText = "Checkout";
  //order.appendChild(buttonCheckout);
  orderContent.appendChild(order);
  orderContent.appendChild(buttonCheckout);
}

//renderProductsCart(productListCart);

const productListCart = [];

addToCart = (name, price, img) => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  productListCart.push({
    name: name,
    price: price,
    image: img,
  });
}


renderProducts(productList);

function displayProductInfo(img) {
  let isMenuCartClosed = shoppingCartContainer.classList.contains("inactive");
  let isMobileMenuClosed = !mobileMenu.classList.contains("slide-right-menu");
  let desktopMenuClosed = desktopMenu.classList.contains("inactive");
  if (!desktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("slide-right-menu");
  }
  if (!isMenuCartClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }
  imgProductDetail.setAttribute("src", img);
  productDetail.classList.remove("inactive");
}
function closeProductInfo() {
  productDetail.classList.add("inactive");
}