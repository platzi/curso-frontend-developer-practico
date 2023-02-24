const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailBox = document.querySelector('.product-detail-box');
const closeBtn = document.querySelector('.product-detail-box-close');

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuBurger.addEventListener('click' , toggleMobileMenu);
menuCarrito.addEventListener('click' , toggleAside);


function toggleDesktopMenu() {
   const isAsideMenuClosed = aside.classList.contains('inactive');
   const isProductDeailClosed = productDetailBox.classList.contains('inactive');

   if (!isAsideMenuClosed) {
      aside.classList.add('inactive');
   }
   if (!isProductDeailClosed) {
     productDetailBox.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const isAsideMenuClosed = aside.classList.contains('inactive');
   const isProductDeailClosed = productDetailBox.classList.contains('inactive');

   if (!isAsideMenuClosed) {
      aside.classList.add('inactive');
   }
   if (!isProductDeailClosed) {
     productDetailBox.classList.add('inactive');
   }

   menuMobile.classList.toggle('inactive');
}

function toggleAside() {
   const isMobileMenuClosed = menuMobile.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isProductDeailClosed = productDetailBox.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      menuMobile.classList.add('inactive');
   }
   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }
   if (!isProductDeailClosed) {
     productDetailBox.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');
}

function addCard() {
   const isMobileMenuClosed = menuMobile.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isAsideMenuClosed = aside.classList.contains('inactive');

   if (!isAsideMenuClosed) {
      aside.classList.add('inactive');
   }
   if (!isMobileMenuClosed) {
      menuMobile.classList.add('inactive');
   }
   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }
   
   productDetailBox.classList.remove('inactive');
}

function closeCard() {
   const isMobileMenuClosed = menuMobile.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isAsideMenuClosed = aside.classList.contains('inactive');

   if (!isAsideMenuClosed) {
      aside.classList.add('inactive');
   }
   if (!isMobileMenuClosed) {
      menuMobile.classList.add('inactive');
   }
   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }
   
   productDetailBox.classList.add('inactive');
}

const productList = [];

productList.push ({
   name:'Bike',
   price: 120.00 ,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
   name:'Nintendo Switch',
   price: 300.00 ,
   image: "https://images.pexels.com/photos/4523030/pexels-photo-4523030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'TV',
   price: 1696.99 ,
   image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'Bike',
   price: 120.00 ,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
   name:'Nintendo Switch',
   price: 300.00 ,
   image: "https://images.pexels.com/photos/4523030/pexels-photo-4523030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'TV',
   price: 1696.99 ,
   image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'Bike',
   price: 120.00 ,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
   name:'Nintendo Switch',
   price: 300.00 ,
   image: "https://images.pexels.com/photos/4523030/pexels-photo-4523030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'TV',
   price: 1696.99 ,
   image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'Bike',
   price: 120.00 ,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
   name:'Nintendo Switch',
   price: 300.00 ,
   image: "https://images.pexels.com/photos/4523030/pexels-photo-4523030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'TV',
   price: 1696.99 ,
   image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'Bike',
   price: 120.00 ,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push ({
   name:'Nintendo Switch',
   price: 300.00 ,
   image: "https://images.pexels.com/photos/4523030/pexels-photo-4523030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push ({
   name:'TV',
   price: 1696.99 ,
   image: "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

function renderProduct(arr){
   for (product of arr) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   productImg.addEventListener('click', addCard);
   closeBtn.addEventListener('click', closeCard);
   
   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');
   
   const productInfoDiv = document.createElement('div');
   
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;
   
   productInfoDiv.append(productPrice, productName);
   
   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
   productInfoFigure.append(productImgCart);

   productInfo.append(productInfoDiv, productInfoFigure);

   productCard.append(productImg , productInfo);
   
   cardsContainer.append(productCard);

}
}

renderProduct(productList);