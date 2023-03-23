const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const container = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toogleDesktopMenu(){
   const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

   if(!isShoppingCartContainerClosed)
   shoppingCartContainer.classList.add('inactive');

   desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
   const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
   const isProductDetailAsideClosed = productDetail.classList.contains('inactive');
   
   if(!isShoppingCartContainerClosed) 
      shoppingCartContainer.classList.add('inactive');

   if( !isProductDetailAsideClosed )
      productDetail.classList.add('inactive');

   mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isProductDetailAsideClosed = productDetail.classList.contains('inactive');

   if(!isMobileMenuClosed)
      mobileMenu.classList.add('inactive');
   
   if(!isDesktopMenuClosed)
      desktopMenu.classList.add('inactive');

   if( !isProductDetailAsideClosed )
      productDetail.classList.add('inactive');

   shoppingCartContainer.classList.toggle('inactive');
   
}

function openProductDetailAside(){
   productDetail.classList.remove('inactive');

   const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

   if(!isShoppingCartContainerClosed) 
      shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside(){
   productDetail.classList.add('inactive');
}

function renderProducts(arr){
   for (product of arr){
      const productCard = document.createElement('div');
      productCard.id = 'product-card';
      productCard.classList.add('product-card');
      productCard.addEventListener('click', openProductDetailAside)
      
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
      productInfo.appendChild(figureProduct);
   
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

/*
<aside class="product-detail">
    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  </aside>
*/