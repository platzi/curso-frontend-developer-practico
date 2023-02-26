const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartButton = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuButton.addEventListener('click', toggleMobileMenu)
shoppingCartButton.addEventListener('click', toggleProductMenu)

function toggleDesktopMenu() {
  const isAsideMenuCosed = shoppingCartContainer.classList.contains('inactive')
  if(!isAsideMenuCosed) {
    shoppingCartContainer.classList.toggle('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideMenuCosed = shoppingCartContainer.classList.contains('inactive')
  if(!isAsideMenuCosed) {
    shoppingCartContainer.classList.toggle('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleProductMenu () {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenu = desktopMenu.classList.contains('inactive')

  if(!isMobileMenuClosed) {
    mobileMenu.classList.toggle('inactive')
  }

  if(!isDesktopMenu) {
    desktopMenu.classList.toggle('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')

}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Pantalla',
  price: 680,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXRK0xTOtZ_dMkSUT0cjaOztnD8RKvXXLzSGQ8eJMlNeSdnjYDUDlLImdNNPDH3EBbqU&usqp=CAU'
})
productList.push({
  name: 'Iphone',
  price: 1200,
  image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg'
})

function renderProducts (arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`
    
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
    
    cardsContainer.appendChild(productCard)
    
  }
}

renderProducts(productList)
