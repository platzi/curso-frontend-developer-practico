const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const burgerButtom= document.querySelector('.burger-menu');
const burgerMenu= document.querySelector('.mobile-menu');
const cardsContainer= document.querySelector('.cards-container');
const cartButtom= document.querySelector('.navbar-shopping-cart');
const articuloDetailCloseIcon=document.querySelector('.articulo-detail-close')
const productDetail= document.querySelector('.product-detail');
const articuloDetailContainer=document.querySelector('.articulo-detail')

 menuEmail.addEventListener('click', toggleDesktopMenu);
 burgerButtom.addEventListener('click', toggleBurgerMenu);
 cartButtom.addEventListener('click', toggleCartButton);
 articuloDetailCloseIcon.addEventListener('click', closeArticuloDetail);


//  DestokMenu
 function toggleDesktopMenu(){
   const isProductDetailClosed= productDetail.classList.contains ('inactive');
   if(!isProductDetailClosed){
      productDetail.classList.add('inactive');
   }

   closeArticuloDetail()

    desktopMenu.classList.toggle('inactive');
 }

// mobile menu  
function toggleBurgerMenu(){
   const isProductDetailClosed= productDetail.classList.contains ('inactive');
   if(!isProductDetailClosed){
      productDetail.classList.add('inactive');
   }

   closeArticuloDetail();

   burgerMenu.classList.toggle('inactive');
}

//cart detail
function toggleCartButton(){
   const isMobileMenuClosed= burgerButtom.classList.contains ('inactive');
   const isDestokMenuClosed= desktopMenu.classList.contains ('inactive');
   const isArticuloDetailClosed= articuloDetailContainer.classList.contains('inactive');

   if(!isMobileMenuClosed){
      burgerMenu.classList.add('inactive');
   }

   if(!isDestokMenuClosed){
      desktopMenu.classList.add('inactive')
   }
   productDetail.classList.toggle('inactive');
   if(!isArticuloDetailClosed){
      articuloDetailContainer.classList.add('inactive');
   }
}

// Articulo Detail Ventana
function openArticuloDetail() {
   productDetail.classList.add('inactive'); 
   desktopMenu.classList.add('inactive')

   articuloDetailContainer.classList.remove('inactive');
}

function closeArticuloDetail(){
   articuloDetailContainer.classList.add('inactive');
}

// lista de productos

// {* <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> */}


const productList=[];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
   name: 'Moto',
   price: 160,
   image: 'https://images.pexels.com/photos/4577731/pexels-photo-4577731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
   name: 'Patineta',
   price: 200,
   image: 'https://images.pexels.com/photos/1018484/pexels-photo-1018484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
 
for (product of productList){
   

   const productCard= document.createElement('div');
   productCard.classList.add('product-card');

   const productImg=document.createElement('img');
   productImg.setAttribute('src', product.image);
   productImg.addEventListener('click', openArticuloDetail);

   const productInfo=document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv=document.createElement('div');

   const productPrice=document.createElement('p');
   productPrice.innerText='$'+ product.price;
   const productName= document.createElement('p');
   productName.innerText=product.name;
   

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);


   const productInfoFigure=document.createElement('figure');
   const productImgCart=document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
}

 