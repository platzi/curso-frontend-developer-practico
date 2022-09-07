const navEmail = document.querySelector('.navbar-email')
const burgerMenu = document.querySelector('.menu')
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)
shoppingCartMenu.addEventListener('click', toggleShoppingCartContainer)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  closeProductDetailAside()
  mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }
  
  const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive')
  if (!isProductDetailAsideClosed) {
    productDetailContainer.classList.add('inactive')
  }
  
  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Drone',
  price: 200,
  img: 'https://img.freepik.com/foto-gratis/vista-cercana-dron-volador_1268-20573.jpg?w=900&t=st=1662177582~exp=1662178182~hmac=6bb445e421b0869c6f2488e62a7a7846f85e95b9ce11469b7e817b4b72b0215a',
})
productList.push({
  name: 'Dobok',
  price: 80,
  img: 'https://img.freepik.com/foto-gratis/chica-karate-kimono-blanco-karate-entrenamiento-cinturon-negro-sobre-fondo-gris_155003-45572.jpg?w=740&t=st=1662177723~exp=1662178323~hmac=f2430d0d25c4f87cc914857eef2baa3028d7c6bc2bc79a9a119f454367091ca3',
})

function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.img)
    productImg.addEventListener('click',openProductDetailAside)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = "$" + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name
    productInfoDiv.appendChild(productName)
    productInfoDiv.appendChild(productPrice)

    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    productImgCart.setAttribute('alt', product.name)
    productInfoFigure.appendChild(productImgCart)
    
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardContainer.appendChild(productCard)
  }
}

renderProducts(productList)