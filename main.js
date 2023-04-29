const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {
  const isCarritoMenuClosed = carritoMenu.classList.contains('inactive')
  
  if(!isCarritoMenuClosed){
    carritoMenu.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isCarritoMenuClosed = carritoMenu.classList.contains('inactive')
  
  if(!isCarritoMenuClosed){
    carritoMenu.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
function toggleCarritoMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
  
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

  carritoMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'bike',
  price: 120.00,
  imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  addCartIcon: './icons/bt_add_to_cart.svg'
});
productList.push({
  name: 'car',
  price: 12000.00,
  imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  addCartIcon: './icons/bt_add_to_cart.svg'
});
productList.push({
  name: 'mountain bag',
  price: 75.00,
  imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  addCartIcon: './icons/bt_add_to_cart.svg'
});
productList.push({
  name: 'flag',
  price: 25.00,
  imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  addCartIcon: './icons/bt_add_to_cart.svg'
});
productList.push({
  name: 'map',
  price: 33.00,
  imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  addCartIcon: './icons/bt_add_to_cart.svg'
});
productList.push({
  name: 'totem',
  price: 210.00,
  imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  addCartIcon: './icons/bt_add_to_cart.svg'
});

function renderProducts(arr) {
  arr.forEach(product => {
    const productCard = document.createElement('div');
    const productImage = document.createElement('img');
    const productInfo = document.createElement('div');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    const figureIcon = document.createElement('figure');
    const cartIcon = document.createElement('img');
  
  
    productCard.classList.add('product-card');
    productImage.setAttribute('src', product.imageUrl);
    productImage.setAttribute('alt', 'product image');
    productInfo.classList.add('product-info');
    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;
    cartIcon.setAttribute('src', product.addCartIcon);
    cartIcon.setAttribute('alt', 'add cart icon');
  
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
  
    figureIcon.appendChild(cartIcon);
    productInfo.appendChild(figureIcon);
    
  
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard); 
  })
}  

renderProducts(productList);
