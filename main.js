const menuEmail = document.querySelector('.navbar-email');
const hamIconMenu = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoshoppingCartContainer);

function toggleDesktopMenu(){
  const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive')
  
  if(isshoppingCartContainerOpen){
  shoppingCartContainer.classList.add('inactive')
  }  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive')
  
  if(isshoppingCartContainerOpen){
    shoppingCartContainer.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
  
  if(isMobileMenuOpen){
    mobileMenu.classList.add('inactive')
  }
  if(isDesktopMenuOpen){
    desktopMenu.classList.add('inactive')
  }
  shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Pantalla",
  price: 220,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Desktop",
  price: 1020,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    
    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
  
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
  
  
    productCard.append(img , productInfo);
    productInfo.append(productInfoDiv, productInfoFigure);
    productInfoDiv.append(productPrice, productName);
  
    productInfoFigure.appendChild(productInfoFigureImg);
  
    cardContainer.appendChild(productCard)
  }
}

renderProducts(productList)