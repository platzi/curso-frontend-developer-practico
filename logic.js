const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');

const shader = document.querySelector('.shade');


const asideProductCart = document.querySelector('.product-detail-Cart');
const asideProductCartIcon = document.querySelector('.product-detail-Cart-close');
asideProductCartIcon.addEventListener('click', closeProductDetail);

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shader.classList.toggle('inactive');
  if (!asideProductDetail.classList.contains('inactive')) {
    asideProductDetail.classList.add('inactive');
    shader.classList.toggle('inactive');
  } else if (!asideProductCart.classList.contains('inactive')) {
    closeProductDetail();
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shader.classList.toggle('inactive');
  if (!asideProductDetail.classList.contains('inactive')) {
    asideProductDetail.classList.add('inactive');
  }
}

function toggleProductDetail() {
  asideProductDetail.classList.toggle('inactive');
  shader.classList.toggle('inactive');
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  } else if (!asideProductCart.classList.contains('inactive')) {
    closeProductDetail();
  }
}

const cardsContainer = document.querySelector('.cards-container');


const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'screen',
  price: 220,
  image:'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
  name: 'ipod',
  price: 720,
  image:'https://images.pexels.com/photos/164827/pexels-photo-164827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})


//otra utilidad de las funciones es la organización, podemos tener el ciclo for of por dentro de una funcion para poder reutilizar el mismo código cada vez que mandemos a llamar a la funcion. Esto nos permite activar el ciclo cada vez que hagamos click a un determinado boton u otra cosa.

function renderProducts(arr) {
  for (product of arr) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');
    
    //product = {name, price, image} -> product.image
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', showProductDetail);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');  
  
    const productDescription = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
    
    productDescription.appendChild(productName) 
    productDescription.appendChild(productPrice);
  
    productInfo.appendChild(productDescription) 
    productInfo.appendChild(productInfoFigure);
  
    productCart.appendChild(productImage);
    productCart.appendChild(productInfo);
  
    cardsContainer.appendChild(productCart);
  }
}

renderProducts(productList);

function showProductDetail() {
  asideProductCart.classList.remove('inactive');
  shader.classList.toggle('inactive');
  if (!asideProductDetail.classList.contains('inactive')) {
    asideProductDetail.classList.add('inactive');
  } else if (!desktopMenu.classList.contains('inactive')) {
    toggleDesktopMenu();
    asideProductCart.classList.remove('inactive');
  }
}
function closeProductDetail() {
  asideProductCart.classList.add('inactive');
  shader.classList.toggle('inactive');
}

