const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menuHam')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailClose.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  const isproductDetailClosed = productDetailContainer.classList.contains('inactive')

  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }else if(!isproductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  const isproductDetailClosed = productDetailContainer.classList.contains('inactive')

  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }else if(!isproductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
  const isproductDetailClosed = productDetailContainer.classList.contains('inactive')

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }else if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }else if(!isproductDetailClosed){
    productDetailContainer.classList.add('inactive')
  }
  
  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }else if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }

  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
  name: 'Bike',
  precio: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Pantalla',
  precio: 220,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Computador',
  precio: 620,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
  for(producto of arr){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img')
    productImg.setAttribute('src', producto.imagen)//producto = {name, precio, imagen}
    productImg.addEventListener('click', openProductDetailAside)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
  
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + producto.precio
    const productName = document.createElement('p')
    productName.innerText = producto.name
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)