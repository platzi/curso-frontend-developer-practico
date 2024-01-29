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
  name: 'Black chair',
  price: '120.00',
  image: './img/Silla-negra.jpg'
});

productList.push({
  name: 'Curved chair',
  price: '210.00',
  image: './img/Poltrona-curva.jpg'
});

productList.push({
  name: 'Basket white chair',
  price: '120.00',
  image: './img/Silla-tejida.jpg'
});

productList.push({
  name: 'Gray chair',
  price: '100.00',
  image: './img/Silla-gris.jpg'
});

productList.push({
  name: 'Classic chair',
  price: '150.00',
  image: './img/Silla-clasica.jpg'
});

productList.push({
  name: 'Salmon chair',
  price: '130.00',
  image: './img/Silla-tripode.jpg'
});

productList.push({
  name: 'Grid chair',
  price: '100.00',
  image: './img/Silla-rejilla.jpg'
});

productList.push({
  name: 'Basket light-blue chair',
  price: '120.00',
  image: './img/Silla-tejida-gris.jpg'
});

productList.push({
  name: 'Leather armchair',
  price: '200.00',
  image: './img/Poltrona-cafe.jpg'
});

productList.push({
  name: 'Wooden armchair',
  price: '185.00',
  image: './img/Poltrona-blanca.jpg'
});

productList.push({
  name: 'Fabric armchair',
  price: '200.00',
  image: './img/Poltrona-gris.jpg'
});

productList.push({
  name: 'Modern armchair',
  price: '230.00',
  image: './img/Poltrona-moderna.jpg'
});

productList.push({
  name: 'Bicicleta',
  price: '380.00',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


//funcionK
//function obtenersource(ProductImg){
  //const atributo = element.getAttribute('src');
// console.log(ProductImg.getAttribute('src'));
//}

function renderProducts(arra){
  for (product of arra){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    //recordemos que product = {name, price, image} ->  product.image (esta imagen varia dependiendo de cada producto)
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetailAside);
    //productImg.addEventListener('click', obtenersource);
  
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

// funciones de Karen
//const ProductoImg = document.querySelectorAll('img');

//function obtenersource(ProductoImg){
//  const atributo = ProductoImg.getAttribute("src");
//  console.log(atributo);
//}

//ProductoImg.addEventListener('click', obtenersource);