const menuEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggledesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


function toggledesktopMenu(){
  const IsAsideClosed = aside.classList.contains('inactive')
  if (!IsAsideClosed){
    aside.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const IsAsideClosed = aside.classList.contains('inactive')
  if (!IsAsideClosed){
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }
  aside.classList.toggle('inactive');
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

for (product of ProductList){
  // En esta parte inicial creo cada parte que necesito de los parrafos del index 
  const productcard = document.createElement('div');
  productcard.classList.add('product-card');

  const ProductImg = document.createElement('img');
  ProductImg.setAttribute('src', product.image);

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

 

  productInfoFigure.appendChild(productImgCart);
  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)

  productinfo.appendChild(productInfoDiv);
  productinfo.appendChild(productInfoFigure);

  productcard.appendChild(ProductImg);
  productcard.appendChild(productinfo);

  cardsContainer.appendChild(productcard);

}
