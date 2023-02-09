const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuBurger.addEventListener('click' , toggleMobileMenu);
menuCarrito.addEventListener('click' , toggleAside);

function toggleDesktopMenu() {
   const isAideMenuClosed = aside.classList.contains('inactive');

   if (!isAideMenuClosed) {
      aside.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const isAideMenuClosed = aside.classList.contains('inactive');

   if (!isAideMenuClosed) {
      aside.classList.add('inactive');
   }

   menuMobile.classList.toggle('inactive');
}

function toggleAside() {
   const isMobileMenuClosed = menuMobile.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
      menuMobile.classList.add('inactive');
   }
   if (!isDesktopMenuClosed) {
      desktopMenu.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');
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