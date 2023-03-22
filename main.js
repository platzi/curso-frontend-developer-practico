const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const container = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
   const isAsideClosed = aside.classList.contains('inactive');

   if(!isAsideClosed)
      aside.classList.add('inactive');

   desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
   const isAsideClosed = aside.classList.contains('inactive');

   if(!isAsideClosed) 
      aside.classList.add('inactive');

   mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if(!isMobileMenuClosed)
      mobileMenu.classList.add('inactive');
   
   if(!isDesktopMenuClosed)
      desktopMenu.classList.add('inactive');

   aside.classList.toggle('inactive');
   
}

function renderProducts(arr){
   for (product of arr){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      
      const img = document.createElement('img');
      img.src = product.image;
      productCard.appendChild(img);
      
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
      productCard.appendChild(productInfo);
      
      const divProductInfo = document.createElement('div');
      productInfo.appendChild(divProductInfo);
   
      const priceProduct = document.createElement('p');
      priceProduct.innerText = '$' + product.price;
   
      const nameProduct = document.createElement('p');
      nameProduct.innerText = product.name;
   
      divProductInfo.appendChild(priceProduct);
      divProductInfo.appendChild(nameProduct);
   
      const figureProduct = document.createElement('figure')
      divProductInfo.appendChild(figureProduct);
   
      const imgFigureProduct = document.createElement('img');
      imgFigureProduct.src = './icons/bt_add_to_cart.svg'
   
      figureProduct.appendChild(imgFigureProduct);
   
      container.appendChild(productCard);
   
      console.log("-->",productCard);
   }
}


const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: 'Monitor',
   price: 750,
   image: 'https://images.pexels.com/photos/11276365/pexels-photo-11276365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
   name: 'Paid',
   price: 70,
   image: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

renderProducts(productList);