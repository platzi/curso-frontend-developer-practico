
const navEmail = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.info-product-detail');
const productCloseIcon = document.querySelector('.info-product-detail-close')

// Menu desktop
function toggleMenu(){
  const isAsideOpen =! aside.classList.contains('inactive');
  const isProductOpen =! productDetailContainer.classList.contains('inactive');
  if(isProductOpen){
    productDetailContainer.classList.add('inactive');
  }
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  desktop.classList.toggle('inactive');
}

// Menu mobile
function toggleMenuMobile(){
  const isProductOpen =! productDetailContainer.classList.contains('inactive');
  const isAsideOpen =! aside.classList.contains('inactive');
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  if(isProductOpen){
    productDetailContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

// Carrito
const toggleCart = () => {
  const isMobileMenuOpen =! mobileMenu.classList.contains('inactive');
  const isDesktopOpen =! desktop.classList.contains('inactive');
  const isProductOpen =! productDetailContainer.classList.contains('inactive');
  if(isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  }
  if(isDesktopOpen){
    desktop.classList.add('inactive');
  }
  if(isProductOpen){
    productDetailContainer.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}

// Productos
const productList = [];
productList.push({
  nombre: 'Dunk low',
  precio: '$100',
  imagen: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a447e0eb-b47c-464b-91df-5387f958582d/dunk-low-zapatillas-CR94Ck.png',
});
productList.push({
  nombre: 'Dunk low',
  precio: '$100',
  imagen: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a447e0eb-b47c-464b-91df-5387f958582d/dunk-low-zapatillas-CR94Ck.png',
});
productList.push({
  nombre: 'Dunk low',
  precio: '$100',
  imagen: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a447e0eb-b47c-464b-91df-5387f958582d/dunk-low-zapatillas-CR94Ck.png'
});
/*
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
*/
function createProductCard(array){
  for(product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.imagen);
    productImage.addEventListener('click',open);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = `${product.precio}`;
    const productName = document.createElement('p');
    productName.innerText = product.nombre;
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productDiv);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productName);
    productInfo.appendChild(productInfoFigure);
    productInfoFigure.appendChild(productImgCard);
    cardsContainer.appendChild(productCard);
  }
}
createProductCard(productList);

// Abrir Producto
function open(){
  const isDesktopOpen =! desktop.classList.contains('inactive');('inactive');
  const isAsideOpen =! aside.classList.contains('inactive');
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  if(isDesktopOpen){
    desktop.classList.add('inactive');
  }
  console.log('abrir');
  productDetailContainer.classList.remove('inactive');
}
// cerrar Producto
function close(){
  console.log('cerrar');
  productDetailContainer.classList.add('inactive');
}

navEmail.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleCart);
productCloseIcon.addEventListener('click', close);