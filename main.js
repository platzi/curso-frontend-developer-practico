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
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // const isAsideClosed = aside.classList.contains('inactive');
    closeDark();
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); 
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');       
}

function openProductDetailAside() {
  closeDark();
  productDetailContainer.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');  
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
});

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/10963241/pexels-photo-10963241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'computador',
    price: 620,
    image: 'https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/10963241/pexels-photo-10963241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
  name: 'computador',
  price: 620,
  image: 'https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    // product = {name, price, image} -> product.image
    productImg.addEventListener('click', openProductDetailAside);  
  
    const productoInfo = document.createElement('div');
    productoInfo.classList.add('product-info');
  
    const productoInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productoInfoDiv.append(productPrice, productName);
  
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
