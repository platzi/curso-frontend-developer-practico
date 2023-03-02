const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = !aside.classList.contains('inactive');
  if (isAsideClosed) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
  
}

function toggleMobileMenu() {
  const isAsideClosed = !aside.classList.contains('inactive');
  if (isAsideClosed) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
  // aside.classList.toggle('inactive');
    if (isMobileMenuClosed) {
      mobileMenu.classList.add('inactive');
    }
    // si el mobileMenu esta abierto, hay que cerrarlo
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'Monitor',
  price: 220,
  image: 'https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
  name: 'Laptop',
  price: 650,
  image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'Monitor',
  price: 220,
  image: 'https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
  name: 'Laptop',
  price: 650,
  image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    //product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
  
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

renderProducts(productList);
