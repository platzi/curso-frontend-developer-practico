console.log('main.js loaded');

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const botonMenuMovil = document.querySelector('#boton-menu-movil');
const menuMovil = document.querySelector('.mobile-menu');

const botonCarrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

const botonCloseAside = document.querySelector('#close-aside-producto');
const asideProducto = document.querySelector('.aside-producto');

navbarEmail.addEventListener('click', toggleDesktopMenu);
botonMenuMovil.addEventListener('click', toggleMobileMenu);
botonCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
  // si el menuCarrito esta abierto, lo cierro
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  if (!asideProducto.classList.contains('inactive')){
    toggleAsideProducto();
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  // si el menuCarrito esta abierto, lo cierro
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  if (!asideProducto.classList.contains('inactive')){
    toggleAsideProducto();
  }
  menuMovil.classList.toggle('inactive');
}

function toggleCarrito(){
  // si el menuMovil esta abierto, lo cierro
  if(!menuMovil.classList.contains('inactive')){
    toggleMobileMenu();
  }
  //si el menu desktop esta abierto, lo cierro
  if(!desktopMenu.classList.contains('inactive')){
    toggleDesktopMenu();
  }
  if (!asideProducto.classList.contains('inactive')){
    toggleAsideProducto();
  }
  menuCarrito.classList.toggle('inactive');
}

function toggleAsideProducto(){
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  if(!desktopMenu.classList.contains('inactive')){
    toggleDesktopMenu();
  }
  asideProducto.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'Guitar',
  price: 250,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Guitar',
  price: 250,
  image: 'https://i.ibb.co/9wGxjc2/pexels-photo-92069.jpg'
});

productList.push({
  name: 'Guitar',
  price: 250,
  image: 'https://i.ibb.co/9wGxjc2/pexels-photo-92069.jpg'
});

const productContainer = document.querySelector('.cards-container');

function renderProducts(arr){
  arr.forEach(function(product){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = product.image;
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productData = document.createElement('div');
    productData.classList.add('product-data');
  
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.innerHTML = product.price + '€';
  
    const productName = document.createElement('p');
    productName.classList.add('product-name');
    productName.innerHTML = product.name;
  
    const productFigure = document.createElement('figure');
  
    const productButton = document.createElement('img');
    productButton.classList.add('product-button');
    productButton.src = './icons/bt_add_to_cart.svg';
    
    productContainer.appendChild(productCard);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productData);
    productData.appendChild(productPrice);
    productData.appendChild(productName);
    productInfo.appendChild(productFigure);
    productFigure.appendChild(productButton);
  
    productImage.addEventListener('click', function(){
      toggleAsideProducto();
    });
  });
  
}

renderProducts(productList);
