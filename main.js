const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');  
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');  
} 

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }  
  shoppingCartContainer.classList.toggle('inactive');

}


const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://http2.mlstatic.com/D_NQ_NP_2X_757947-MLA42227126872_062020-F.webp',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://www.cyberpuerta.mx/img/product/XL/CP-XTREMEPCGAMING-XTRMR38GBRENOIRW-1.jpg',
});
productList.push({
  name: 'Laptop',
  price: 720,
  image: 'https://hiraoka.com.pe/media/mageplaza/blog/post/m/e/mejores_laptops_hp-hiraoka.jpg',
});

function renderProducts(arr) {
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
  
    cardContainer.appendChild(productCard);
  }
  
}


renderProducts(productList);