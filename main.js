const varEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const varMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.asaideShoppingCar');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardContainer = document.querySelector('.cards-container');

const productsContent = [];
  
varEmail.addEventListener('click',togleDesktopMenu);
varMenu.addEventListener('click',togleMobileMenu);
navCarrito.addEventListener('click',togleCarMenu);
productDetailClose.addEventListener('click', closeProductDetail);



productsContent.push({
  name:'Computer',
  price:'$20000,00',
  image:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productsContent.push({
  name:'Silla',
  price:'$220,00',
  image:'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productsContent.push({
  name:'Bike',
  price:'$999,00',
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });
  productsContent.push({
  name:'Book',
  price:'$120,00',
  image:'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productsContent.push({
  name:'Mueble',
  price:'$15000,00',
  image:'https://www.remodex.com.mx/REMODEX/public/ImagenesRemodex/mueble-de-tv-a22a-9200-Img_Uno-1630450639.jpeg',
  });
  
  productsContent.push({
  name:'Sillón',
  price:'$5200,00',
  image:'https://irp.cdn-website.com/66f87d96/MOBILE/png/236.png',
  });
  productsContent.push({
  name:'dinning',
  price:'$12000,00',
  image:'https://www.liderempresarial.com/wp-content/uploads/2020/11/furniture-964584_960_720-960x570.jpg',
  });
  productsContent.push({
  name:'Wardrobe',
  price:'$10000,00',
  image:'https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/a2765ae1-381d-43c9-9330-434ab8acc95c.65d3e7d64320cbac7ee44486abd852f7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
  });
  productsContent.push({
  name:'Small Table',
  price:'$550,00',
  image:'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/02/11/15499052362149.jpg',
  });
  productsContent.push({
    name:'Tv',
    price:'$12000,00',
    image:'https://www.sony.com.mx/image/de1537232b3c8d6aca5aa94c10801f7a?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
  })


function togleMobileMenu(){
  const isCarMenuClose = shoppingCar.classList.contains('inactive');
  const isProductDetailClose = productDetail.classList.contains('inactive');

  if(!isCarMenuClose){
      shoppingCar.classList.add('inactive');
  }
  if(!isProductDetailClose){
    productDetail.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive')

};
function togleDesktopMenu(){
  const isCarMenuClose = shoppingCar.classList.contains('inactive');
  const isProductDetailClose = productDetail.classList.contains('inactive');

  if(!isCarMenuClose){
      shoppingCar.classList.add('inactive');
  }
  if(!isProductDetailClose){
    productDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
};
function togleCarMenu(){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClode = desktopMenu.classList.contains('inactive');
  const isProductDetailClose = productDetail.classList.contains('inactive');

  if(!isMobileMenuClose){
      mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenuClode){
      desktopMenu.classList.add('inactive');
  }
  if(!isProductDetailClose){
    productDetail.classList.add('inactive');
  }

  shoppingCar.classList.toggle('inactive');
};


{/*
 <aside class="product-detail inactive">
<div class="product-detail-close">
<img src="./icons/icon_close.png" alt="close">
</div>
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info__detail">
<p>$35,00</p>
<p>Bike</p>
<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
<button class="primary-button add-to-cart-button">
<img src="./icons/bt_add_to_cart.svg" alt="add to cart">
Add to cart
</button>
</div>
</aside> 
*/}

function closeProductDetail(){
  productDetail.classList.add('inactive');
};
function openProductDetail(){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isCarMenuClose = shoppingCar.classList.contains('inactive');
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

  if(!isMobileMenuClose){
    mobileMenu.classList.add('inactive');
  }
  if(!isCarMenuClose){
          shoppingCar.classList.add('inactive');
  }
  if(!isDesktopMenuClose){
    desktopMenu.classList.add('inactive');
  }
  productDetail.classList.remove('inactive');
  

};

function productList(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');    
  
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductDetail)
  // -------------------
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');
  
  
         // ---------------------
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerHTML = product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
         // -----------------------
    const productFigure = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
    productFigure.appendChild(productImg);
        // -----------------------
  // ------------------------
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    
    productCard.append(img, productInfo);
  
    cardContainer.appendChild(productCard);
  }
  productDetailInfo();
};
productList(productsContent);



