const varEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const varMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.asaideShoppingCar');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardContainer = document.querySelector('.cards-container');




varEmail.addEventListener('click',togleDesktopMenu);
varMenu.addEventListener('click',togleMobileMenu);
navCarrito.addEventListener('click',togleCarMenu);
productDetailClose.addEventListener('click', closeProductDetail);


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
function closeProductDetail(){
  productDetail.classList.add('inactive');
};

const productsContent = [];
productsContent.push({
name:'compu',
price:'$120,00',
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsContent.push({
name:'compu',
price:'$120,00',
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsContent.push({
name:'compu',
price:'$120,00',
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsContent.push({
name:'compu',
price:'$120,00',
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

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
}
productList(productsContent);
