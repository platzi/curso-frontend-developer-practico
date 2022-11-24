const menuEMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCar = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('#shoppingCartCOntainer');
const cardsContainer = document.querySelector('.cards-container');

menuEMail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMObileMenu);
menuCar.addEventListener('click', toggleCart);

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  const iscartMenuClose = cartMenu.classList.contains('inactive');

  mobileMenu.classList.toggle('inactive');
  if(!iscartMenuClose){ 
    cartMenu.classList.add('inactive');
    
  }
}

function toggleMObileMenu(){
  const iscartMenuClose = cartMenu.classList.contains('inactive');

  mobileMenu.classList.toggle('inactive');
  if(!iscartMenuClose){ 
    cartMenu.classList.add('inactive');
  }
}
function toggleCart(){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenu = desktopMenu.classList.contains('inactive');
  cartMenu.classList.toggle('inactive');
  if(!isMobileMenuClose){ 
    mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenu){
    desktopMenu.classList.add('inactive');
  }
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Pantall',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bikes',
  price: 20,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
  name: 'Pantalla',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Pantall',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bikes',
  price: 20,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
  name: 'Pantalla',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Pantall',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Bikes',
  price: 20,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
  name: 'Pantalla',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  
})

function renderProduct(arr){
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
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

renderProduct(productList);


