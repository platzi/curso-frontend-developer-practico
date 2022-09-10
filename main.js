//ACTIVAR EL MENU DEL EMAIL
const activarEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
//ACTIVAR EL MENU BURGERICON
const burgerIcon= document.querySelector('.menu');
const movilMenu= document.querySelector('.mobile-menu');
//ACTIVAR MY ORDER
const shoppingCart= document.querySelector('.navbar-shopping-cart');
const myOrder= document.querySelector('.productList-detail');
//DETALLE DEL PRODUCTO
const productImg= document.querySelector('.product-img');
const productDetail= document.querySelector('.product-detail');
const productDetailClosed = document.querySelector('.product-detail-closed');
//CARDS CONTAINER
const cardsContainer = document.querySelector('.cards-container');


activarEmail.addEventListener('click', toggleMenuEmail);
burgerIcon.addEventListener('click', toggleMenuMobil);
shoppingCart.addEventListener('click', togglemyOrder);
//productImg.addEventListener('click', productDetailOpen);
productDetailClosed.addEventListener('click', closedProductDetail);


function toggleMenuEmail(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobil(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   productDetail.classList.add('inactive');
   movilMenu.classList.toggle('inactive');
}

function togglemyOrder(){
   const ismovilMenuClosed= movilMenu.classList.contains('inactive'); 

   if (!ismovilMenuClosed){
      movilMenu.classList.add('inactive');
   } 
   myOrder.classList.toggle('inactive');
}

function openProductDetail(){
   myOrder.classList.add('inactive');
   productDetail.classList.remove('inactive');
   
}

function closedProductDetail(){
   productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 150,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Computadora',
   price: 350,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Televisor',
   price: 250,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Sonido',
   price: 250,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Impresora',
   price: 100,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Tablet',
   price: 400,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr){
   for (product of arr){
      
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetail);

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
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
            
      productInfoFigure.appendChild(productImgCart);
      
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
   }
}
renderProducts(productList);
