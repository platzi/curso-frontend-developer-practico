const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDectailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDectailContainer = document.querySelector('#productDectail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDectailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
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
      mobileMenu.classList.toggle('inactive'); 
    }
    const isProductDectailClosed = productDectailContainer.classList.contains('inactive');
    if (!isProductDectailClosed){
      productDectailContainer.classList.add('inactive');
    }

  shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDectailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
  productDectailContainer.classList.add('inactive');
}
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAtr9hrc2rMCgB5sUTq9hZrwzDO2YqSsccA&usqp=CAU',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx72vd9oNaiyhYIfCNDNHu9_erC7XFQjQ2eg&usqp=CAU',
});
productList.push({
  name: 'audifonos',
  price: 100,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW5GRN9qO-_TPUJVfmIA9561wqT6QmkcCjvousjrOz6JiXsBS56wedqHrVkX9bFKcUME&usqp=CAU',
});
productList.push({
    name: 'lapto',
    price: 700,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8GjyPexC74rgmt5WHQWX46f00X0WFu54sA&usqp=CAU',
  });
  productList.push({
    name: 'movil',
    price: 650,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY87m_6Fn6Ohf08NxlvC9ZvbJOZDdnifzbhw&usqp=CAU',
  });
  productList.push({
    name: 'table',
    price: 300,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9A8LU9eTGF4j9A2oIAYLFzKmYJqaw-mQi5g&usqp=CAU',
  });

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
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