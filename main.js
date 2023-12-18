const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const dark = document.querySelector('.dark');
const imageDetail = document.querySelector('.imageDetail');
const productInfoPrice = document.querySelector('.product-info_price');
const productInfoName = document.querySelector('.product-info_name');
const productInfoMsg = document.querySelector('.product-info_msg');

navbarEmail.addEventListener('click', toggleDesktopMenu);
carritoMenu.addEventListener('click', toogleCarritoAside);

function closeDark() {
  dark.classList.remove('inactive');
}

dark.addEventListener('click', () => {
  dark.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
});

function toggleDesktopMenu() {
    closeDark();
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
      dark.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');    
}

burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');     
});

function toogleCarritoAside() {    
    closeDark();
    const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isCarritoAsideClosed){
      dark.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); 
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');       
}

/* Detalles de los productos */

function openProductDetailAside(e) {
  closeDark(); 
  productDetailContainer.classList.remove('inactive'); 
  shoppingCartContainer.classList.add('inactive');      

  //Objengo la imagen sobre la cual se hace clic
  imageDetail.src = e.target.src;
  
  // Obtengo el contendor padre
  var contenedor = e.target.parentElement;  
  //Buscamos el elemento dentro del contenedor padre
  var precioElement = contenedor.querySelector('.price');
  var messageElement = contenedor.querySelector('.message');
  var nameElement = contenedor.querySelector('.name');
  productInfoPrice.innerText = precioElement.innerText;
  productInfoName.innerText = nameElement.innerText;
  productInfoMsg.innerText = messageElement.innerText;  
}

productDetailCloseIcon.addEventListener('click', () => {
  dark.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
});

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    msg: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    class: 'imageBike_1',
});

productList.push({
    name: 'iMac',
    price: 220,
    image: 'https://images.pexels.com/photos/10963241/pexels-photo-10963241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    msg: 'iMac A1419 2017 8gb 1tb Video 4gb',
    class: 'imageImac_1',
});

productList.push({
    name: 'portátil',
    price: 620,
    image: 'https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    msg: 'Portátil Dell Inspiron 3511 negra 15.6", Intel Core i5 1135G7 8GB de RAM 256GB SSD',
    class: 'imagePortatil_1',
});

productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  msg: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
  class: 'imageBike_2',
});

productList.push({
  name: 'iMac',
  price: 220,
  image: 'https://images.pexels.com/photos/10963241/pexels-photo-10963241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  msg: 'iMac A1419 2017 8gb 1tb Video 4gb',
  class: 'imageImac_2',
});

productList.push({
  name: 'portátil',
  price: 620,
  image: 'https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  msg: 'Portátil Dell Inspiron 3511 negra 15.6", Intel Core i5 1135G7 8GB de RAM 256GB SSD',
  class: 'imagePortatil_2',
});

function renderProducts(arr) {
  for (product of arr) {
    // Creamos el elemento div (como estaba en el HTML)
    const productCard = document.createElement('div');
    // Le añadimos la clase (al igual como en el HTML)
    productCard.classList.add('product-card');
  
    // Vamos a crear una imagen
    const productImg = document.createElement('img');
    // A esta imagen no tenemos que agregarle una clase sino un atributo src
    // Pero esa imagen no tiene que ser la url sino la propiedad image de cada uno de los objetos dentro del array
    productImg.setAttribute('src', product.image);
    productImg.classList.add(product.class);
    // product = {name, price, image} -> product.image
        
    const productoInfo = document.createElement('div');
    productoInfo.classList.add('product-info');
  
    const productoInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.classList.add('name');
    productName.innerText = product.name;
    const message = document.createElement('p');
    message.classList.add('message');    
    message.classList.add('inactive');  
    message.innerText = product.msg; 
    productoInfoDiv.append(productPrice, productName, message);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);
  
    productoInfo.append(productoInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productoInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

cardsContainer.addEventListener('click', openProductDetailAside);
