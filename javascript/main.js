// Toggle Menu email, Mobile menu and Shopping cart
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuButton.addEventListener('click', toggleMobileMenu);
shoppingCartButton.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCart.classList.add('inactive');
  rightProductDetail.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCart.classList.add('inactive');
  rightProductDetail.classList.add('inactive');
}

function toggleShoppingCart() {
  shoppingCart.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  rightProductDetail.classList.add('inactive');
}

// Render Cards Products
function renderProducts(products) {
  for (const product of products) {
    const cardsContainer = document.querySelector('.cards-container');
  
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img')
    img.setAttribute('src', product.img);
    img.addEventListener('click', openProductDetail);
    
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');
    productPrice.innerText = `S/. ${product.price}`
    productName.innerText = product.name;
    
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');
    
    const priceName = document.createElement('div');
    priceName.append(productPrice, productName);
    
    const btnAddToCart = document.createElement('figure');
    const imgAddToCart = document.createElement('img');
    imgAddToCart.setAttribute('src', '../icons/bt_add_to_cart.svg');
    btnAddToCart.append(imgAddToCart);
    
    productInfo.append(priceName, btnAddToCart);
    productCard.append(img, productInfo);
    cardsContainer.append(productCard);
  }
}

let productList = [];
productList.push(
  {
    name: 'Bike S',
    price: 400.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike M',
    price: 500.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike L',
    price: 600.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike XL',
    price: 800.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike S',
    price: 400.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike M',
    price: 500.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike L',
    price: 600.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike XL',
    price: 800.0,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
);

renderProducts(productList);

// Product detail
const rightProductDetail = document.querySelector('.right-product-detail');
const closeBtnProductDetail = document.querySelector('.right-product-detail-close');
closeBtnProductDetail.addEventListener('click', closeProductDetail);

function openProductDetail() {
  rightProductDetail.classList.remove('inactive');
  shoppingCart.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

function closeProductDetail() {
  rightProductDetail.classList.add('inactive');
}