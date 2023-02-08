const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const iconFlechaProduc = document.querySelector('#icon-flechita-produc-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
iconFlechaProduc.addEventListener('click', toogleFlechaProduc);
productDetailCloseIcon.addEventListener('click', closeProducDetailAside);

function toggleDesktopMenu()
{
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  // toggle('class') pone o quita la clase dependiendo si existe o no
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
}

function toogleFlechaProduc()
{
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside()
{
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProducDetailAside()
{
  productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Bike', 
  price: 399,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Laptop - HP', 
  price: 2255,
  image: 'https://http2.mlstatic.com/D_NQ_NP_906217-MPE53641734281_022023-O.webp',
});
productList.push({
  name: 'Consola Playstation 5', 
  price: 3249,
  image: 'https://http2.mlstatic.com/D_NQ_NP_701578-MPE53672957563_022023-O.webp',
});



function renderProducts(array){
  for(product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    //Damos un evento al darle click a un producto
    productImg.addEventListener('click', openProductDetailAside);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = 'S/' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    // metemos <img> dentro de <figure>
    productInfoFigure.appendChild(productImgCard);
    
    productInfo.append(productInfoDiv, productInfoFigure);
    
    productCard.append(productImg, productInfo);
    
    // Agregamos los cards al contenedor
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);




