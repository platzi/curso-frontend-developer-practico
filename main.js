const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');  
      }

    desktopMenu.classList.toggle('inactive');      
}

function toggleMobilepMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');  
      }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');    
}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');  
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');  
 }
   
 shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    Image:'https://cdn.shopify.com/s/files/1/0051/9530/0952/products/Wishbone_Bike_3n1_Original_Natural_High_800x.png?v=1569154598'
});
productList.push({
    name: 'Pantalla',
    price: 258,
    Image:'https://img.freepik.com/vector-premium/pantalla-monitor-computadora_1297-434.jpg?w=1800'
});
productList.push({
    name: 'COMPU',
    price: 750,
    Image:'https://www.shutterstock.com/image-vector/realistic-laptop-on-transparent-background-600w-1721982661.jpg'
});

/* 
<div class="product-card">
<productImg src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <productImg src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
       
        // product = {name, price, image} ---> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.addEventListener('click', openProductDetailAside);


       
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
       
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
       
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
       
        productInfoFigure.appendChild(productImgCard);
       
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
       
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
       
        cardsContainer.appendChild(productCard);
       }
}

renderProducts(productList)