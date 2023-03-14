console.log('main.js loaded');

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const botonMenuMovil = document.querySelector('#boton-menu-movil');
const menuMovil = document.querySelector('.mobile-menu');

const botonCarrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
botonMenuMovil.addEventListener('click', toggleMobileMenu);
botonCarrito.addEventListener('click', toggleCarrito);


function toggleDesktopMenu(){
  // si el menuCarrito esta abierto, lo cierro
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  if (!asideProducto.classList.contains('inactive')){
    closeProductDetailAside();
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  // si el menuCarrito esta abierto, lo cierro
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  if (!asideProducto.classList.contains('inactive')){
    closeProductDetailAside();
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
    closeProductDetailAside();
  }
  menuCarrito.classList.toggle('inactive');
}

function openProductDetailAside(){
  if(!desktopMenu.classList.contains('inactive')){
    toggleDesktopMenu();
  }
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  if(!menuMovil.classList.contains('inactive')){
    toggleMobileMenu();
  }
  asideProducto.classList.remove('inactive');
}

function closeProductDetailAside(){
  asideProducto.classList.add('inactive');
}

const productList = [
  {
    name: 'Guitar',
    price: 120,
    image: 'https://i.ibb.co/9wGxjc2/pexels-photo-92069.jpg',
    description: 'This guitar is a sophisticated instrument with a unique design. It is made of high quality materials and has a great sound. It is perfect for beginners and professionals alike.'
  },
  {
    name: 'Sunglasses',
    price: 50,
    image: 'https://i.ibb.co/pdzHyKz/sunglasses.jpg',
    description: 'These stylish sunglasses provide both fashion and function with their polarized lenses and UV protection. Perfect for sunny days.'
  },
  {
    name: 'Running Shoes',
    price: 90,
    image: 'https://i.ibb.co/W39zkCr/pexels-photo-5730956.jpg',
    description: 'These running shoes are designed for comfort and performance, with breathable materials and durable soles. Perfect for your next workout.'
  },
  {
    name: 'Leather Bag',
    price: 180,
    image: 'https://i.ibb.co/DgrtwsB/pexels-photo-2081199.jpg',
    description: 'This leather bag is both stylish and practical, with plenty of compartments and a classic design. Perfect for work or travel.'
  },
  {
    name: 'Wireless Earbuds',
    price: 120,
    image: 'https://i.ibb.co/McpBdSG/2023-03-14-131642.jpg',
    description: 'These wireless earbuds offer high-quality sound and long battery life, with a comfortable fit and easy-to-use controls. Perfect for on-the-go listening.'
  },
  {
    name: 'Smartwatch',
    price: 250,
    image: 'https://i.ibb.co/cQRX8qL/2023-03-14-131718.jpg',
    description: 'This smartwatch provides a range of features including fitness tracking, messaging, and music control. Perfect for staying connected throughout the day.'
  },
  {
    name: 'Wireless Speaker',
    price: 80,
    image: 'https://i.ibb.co/3MPGSnZ/pexels-photo-1706694.jpg',
    description: 'This wireless speaker offers high-quality sound and a sleek design, with long battery life and easy pairing. Perfect for indoor or outdoor use.'
  },
  {
    name: 'Backpack',
    price: 70,
    image: 'https://i.ibb.co/cgNSBLj/2023-03-14-131742.jpg',
    description: 'This backpack is both functional and stylish, with plenty of compartments and a comfortable fit. Perfect for school or travel.'
  },
  {
    name: 'Digital Camera',
    price: 300,
    image: 'https://i.ibb.co/rcCKt5D/2023-03-14-131811.jpg',
    description: 'This digital camera offers high-quality images and video, with a range of features including Wi-Fi and Bluetooth connectivity. Perfect for capturing memories on the go.'
  }
];

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
      showProductInfo(product);
    });
    
    function showProductInfo(product){
      // código para mostrar la información del producto
      const aside= document.querySelector('.aside-producto');

      //borro todos los hijos del aside
      while (aside.firstChild) {
        aside.removeChild(aside.firstChild);
      }
      
      const divBotonClose = document.createElement('div');
      divBotonClose.classList.add('aside-producto-close');
      divBotonClose.addEventListener('click', closeProductDetailAside);
      
    
      const asideClose = document.createElement('img');
      asideClose.src='./icons/icon_close.png';
      asideClose.id='close-aside-producto';
    
      const asideImage = document.createElement('img');
      asideImage.src=product.image;
    
      const asideProductInfo = document.createElement('div');
      asideProductInfo.classList.add('aside-product-info');
    
      const asideProductPrice = document.createElement('p');
      asideProductPrice.innerHTML=product.price + '€';
    
      const asideProductName = document.createElement('p');
      asideProductName.innerHTML=product.name;

      const asideProductDescription = document.createElement('p');
      asideProductDescription.innerHTML=product.description;
    
      const asideAddButton = document.createElement('button');
      asideAddButton.classList.add('primary-button', 'add-to-cart-button');
      asideAddButton.innerHTML='Add to cart';
    
      const asideAddButtonImg = document.createElement('img');
      asideAddButtonImg.src='./icons/bt_add_to_cart.svg';
      
      aside.appendChild(divBotonClose);
      divBotonClose.appendChild(asideClose);
      aside.appendChild(asideImage);
      aside.appendChild(asideProductInfo);
      asideProductInfo.appendChild(asideProductPrice);
      asideProductInfo.appendChild(asideProductName);
      asideProductInfo.appendChild(asideProductDescription);
      asideProductInfo.appendChild(asideAddButton);
      asideAddButton.appendChild(asideAddButtonImg);
    
      openProductDetailAside();
    }
  });
  
}

renderProducts(productList);
