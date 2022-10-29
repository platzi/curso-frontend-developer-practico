const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobilepMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
   mobileMenu.classList.toggle('inactive');
   aside.classList.add('inactive');
}

function toggleCarritoAside() {
   aside.classList.toggle('inactive');
   mobileMenu.classList.add('inactive');
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


for (product of productList) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card')

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image)
   /* product = {name, price, image} -> product.image */

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