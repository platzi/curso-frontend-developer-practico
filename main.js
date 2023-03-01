const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggledesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
ProductDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggledesktopMenu(){
  const IsAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!IsAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const IsAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!IsAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
  const IsAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!IsAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }
  
  productDetailContainer.classList.remove('inactive')
  
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}
const ProductList = [];

ProductList.push({
  Name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
ProductList.push({
  Name: 'pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
ProductList.push({
  Name: 'computador',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
ProductList.push({
  Name: 'computador',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (product of ProductList){
  // En esta parte inicial creo cada parte que necesito de los parrafos del index 
  const productcard = document.createElement('div');
  productcard.classList.add('product-card');

  const ProductImg = document.createElement('img');
  ProductImg.setAttribute('src', product.image);
  ProductImg.addEventListener('click', openProductDetailAside)

  const productinfo = document.createElement('div');
  productinfo.classList.add('product-info');
  
  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText= '$'+ product.price;

  const productName = document.createElement('p');
  productName.innerText = product.Name;

  

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

  /* con cada uno de los parrafos debo crearlos de adentro hacia afuera  */

  productInfoFigure.appendChild(productImgCart); // 1

  productInfoDiv.appendChild(productPrice) //2
  productInfoDiv.appendChild(productName)//3

  productinfo.appendChild(productInfoDiv);//4
  productinfo.appendChild(productInfoFigure);//5

  productcard.appendChild(ProductImg);//6
  productcard.appendChild(productinfo);//7

  cardsContainer.appendChild(productcard);//8

}
