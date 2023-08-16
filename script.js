const menuEmail = document.querySelector('.navbar-email');
const menuSelection = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCart = document.querySelector('.product-list');
const productDetailContainer = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuSelection.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleAsideCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  asideCart.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  asideCart.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  asideCart.classList.toggle('inactive');
}

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  asideCart.classList.add('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const producList = [];
producList.push({
  name: 'Bike', 
  price: 250, 
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
producList.push({
  name: 'Skate', 
  price: 130, 
  image:'https://diamondsport.com.co/wp-content/uploads/2022/07/WhatsApp-Image-2022-05-06-at-12.16.12-PM-1-370x370_magic.jpeg'
});
producList.push({
  name: 'Skateboard', 
  price: 100, 
  image:'https://m.media-amazon.com/images/I/71fvZGRIJJL.jpg'
});

function renderProducts(arr) {

  for(product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)
  
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

renderProducts(producList);