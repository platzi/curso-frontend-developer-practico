const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobilepMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');
   shoppingCartContainer.classList.add('inactive');
   productDetailContainer.classList.add('inactive');
}

function toggleMobilepMenu() {
   mobileMenu.classList.toggle('inactive');
   shoppingCartContainer.classList.add('inactive');
   productDetailContainer.classList.add('inactive');
   
}

function toggleCarritoAside() {
   shoppingCartContainer.classList.toggle('inactive');
   mobileMenu.classList.add('inactive');
   productDetailContainer.classList.add('inactive')
   desktopMenu.classList.add('inactive');
}

function openProductDetailAside() {
   productDetailContainer.classList.remove('inactive')
   shoppingCartContainer.classList.add('inactive');
   desktopMenu.classList.add('inactive');
  
}

function closeProductDetailAside() {
   productDetailContainer.classList.add('inactive')
   
}

const productList = [];
productList.push({
   name: "Bike",
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: "Scooter",
   price: 99,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: "Skate",
   price: 60,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
   for (product of productList) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card')
      
      /* product = {name, price, image} -> product.image */
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
      
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info')
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;   
      const productName = document.createElement('p');
      productName.innerHTML = product.name;
   
      productInfoDiv.append(productPrice, productName);
      
      
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.append(productInfoDiv, productInfoFigure);
   
      productCard.append(productImg, productInfo)
   
      cardsContainer.appendChild(productCard);
      
   }
}

renderProducts(productList);