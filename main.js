const navEmail = document.querySelector(".navbar-email");
const navEmailSubMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector("#shoppingCardContainer");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const cardContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopmenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleMenuCarrito);

function toggleDesktopmenu() {
  const isAsideClosed = productDetail.classList.contains("inactive");
  if (!isAsideClosed) {
    productDetail.classList.add("inactive");
  }
  navEmailSubMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = productDetail.classList.contains("inactive");
  if (!isAsideClosed) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
function toggleMenuCarrito() {
  const isMobilemenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobilemenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  productDetail.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Pantall',
  price: 280,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Computador',
  price: 60,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
function renderProducts(arr) {
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFig = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFig.appendChild(productImgCard);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFig);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardContainer.appendChild(productCard)
  
  } 
}
renderProducts(productList)
