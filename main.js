const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');    /*llamado menuHamIcon en la clase de Platzi*/
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart') 
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurger.addEventListener('click',toggleMobileMenu);  /*llamado menuHamIcon en la clase de Platzi*/
menuCartIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if (isshoppingCartContainerClosed == true){   //Esta lógica se crea para que cuando abramos el menu desktop se cierre el carrito de compras (y evitar que se superpongan)
  }
  else{
    shoppingCartContainer.classList.toggle('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
  const isproductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

  if (isshoppingCartContainerClosed == true){   //Esta lógica se crea para que cuando abramos el menu mobile se cierre el carrito de compras (y evitar que se superpongan)
  }
  else{
    shoppingCartContainer.classList.toggle('inactive');
  }
  if (!isproductDetailContainerClosed){         //Esta lógica se crea para que cuando abramos el menu mobile se cierre el product detail y funcione bien el menu.
    productDetailContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (isMobileMenuClosed == true){   //Esta lógica se crea para que cuando abramos el carrito se cierre el menu mobile (y evitar que se superpongan)
  }
  else {
    mobileMenu.classList.add('inactive');
  }

  if (isDesktopMenuClosed == true){    //Esta lógica se crea para que cuando se abra el carrito se cierre el menu desktop (y evitar que se quede abierto si se cierra el carrito)
  }
  else {
    desktopMenu.classList.add('inactive');
  }

  if (!isProductDetailClosed){      //Esta lógica es la misma que las dos anteriores, sirve para que cuando se abra el carrito se cierre el aside de Detail Product.
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){

  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isshoppingCartContainerClosed){    //Esta lógica se crea para cerrar el carrito de compras antes de abrir el product detail
    shoppingCartContainer.classList.add('inactive');
  }

  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

const productList = [];

// recordemos que product = {name, price, image}  

productList.push({
  name: 'Bike',
  price: '220',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Sombrilla',
  price: '25',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Libreta',
  price: '40',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Calculadora',
  price: '90',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arra){
  for (product of arra){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
   // recordemos que product = {name, price, image} ->  product.image (esta imagen varia dependiendo de cada producto)
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');  // esta imagen es la misma para todas las tarjetas
  
    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);

  }
}

renderProducts(productList);