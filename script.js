window.addEventListener('load', function () {
  console.log('script working')
  const email = document.querySelector('.navbar-email')
  const hamburgerMenu = document.querySelector('.hamburger-icon')
  const shoppingCart = document.querySelector('.navbar-shopping-cart')
  const productDetailCloseButton = document.querySelector(
    '.product-detail-close'
  )

  if (!email) return
  if (!hamburgerMenu) return
  if (!shoppingCart) return

  email.addEventListener('click', toggleDesktopMenu)
  hamburgerMenu.addEventListener('click', toggleMobileMenu)
  shoppingCart.addEventListener('click', toggleShoppingCart)
  productDetailCloseButton.addEventListener('click', closeProductDetail)
  renderProducts(productList)
})

function toggleDesktopMenu() {
  const desktopMenu = document.querySelector('#desktop-menu')
  const aside = document.querySelector('.shopping-cart-container')

  if (!desktopMenu) return
  if (!aside) return

  aside.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
  closeProductDetail()
}

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('#mobile-menu')
  const desktopMenu = document.querySelector('#desktop-menu')
  const shoppingCart = document.querySelector('.shopping-cart-container')
  if (!mobileMenu) return

  desktopMenu.classList.add('inactive')
  shoppingCart.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
  closeProductDetail()
}

function toggleShoppingCart() {
  const desktopMenu = document.querySelector('#desktop-menu')
  const aside = document.querySelector('.shopping-cart-container')

  if (!desktopMenu) return
  if (!aside) return

  desktopMenu.classList.add('inactive')
  aside.classList.toggle('inactive')
  closeProductDetail()
}

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'Great bike for city riding, mountain biking or travelling short distances.',
})
productList.push({
  name: 'SmartTV',
  price: 300,
  image:
    'https://images.pexels.com/photos/7746042/pexels-photo-7746042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'Experience multimedia like never before in 4K QHD resolution and never leave the living room.',
})
productList.push({
  name: 'Skateboard',
  price: 90,
  image:
    'https://images.pexels.com/photos/2086530/pexels-photo-2086530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'Reliable skateboard for travelling and doing tricks.',
})
productList.push({
  name: 'Microwave',
  price: 70,
  image:
    'https://images.pexels.com/photos/211761/pexels-photo-211761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'Heat leftovers in seconds while preserving all the flaver of your food.'
})

function renderProducts(arr) {
  const cardsContainer = document.querySelector('.cards-container')

  productList.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoWrapper = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price + ',00'
    const productName = document.createElement('p')
    productName.innerText = product.name

    const productFigure = document.createElement('figure')
    const productCartIcon = document.createElement('img')
    productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')

    productFigure.append(productCartIcon)

    productCard.append(productImg)

    productInfoWrapper.append(productPrice, productName)
    productInfo.append(productInfoWrapper, productFigure)
    productCard.append(productImg, productInfo)

    cardsContainer.append(productCard)
    productImg.addEventListener('click', () => {
      openProductDetail(product)
    })
  })
}

function openProductDetail(product) {
  const productDetail = document.querySelector('.product-detail')
  let productImg = document.querySelector('.product-img')
  if (!productImg) {
    addProductDetail()
  }
    updateProductDetail(product)
  if (productDetail.classList.contains('inactive'))
    productDetail.classList.toggle('inactive')

  const shoppingCart = document.querySelector('.shopping-cart-container')
  shoppingCart.classList.add('inactive')
  const desktopMenu = document.querySelector('#desktop-menu')
  desktopMenu.classList.add('inactive')
}

function addProductDetail() {
  const productDetail = document.querySelector('.product-detail')
  let productImg = document.createElement('img')
  productImg.classList.add('product-img')
  

  let productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  let productPrice = document.createElement('p')
  productPrice.classList.add('product-price')

  let productName = document.createElement('p')
  productName.classList.add('product-name')

  let productDesc = document.createElement('p')
  productDesc.classList.add('product-desc')

  productInfo.append(productPrice,productName,productDesc)
  productDetail.append(productImg, productInfo)

  const buttonContainer = document.querySelector('.button-container')
  console.log(buttonContainer)
  productInfo.insertAdjacentElement('beforeend', buttonContainer)

}

function updateProductDetail(product) {
  let productImg = document.querySelector('.product-img')
  let productPrice = document.querySelector('.product-price')
  let productName = document.querySelector('.product-name')
  let productDesc = document.querySelector('.product-desc')

  productImg.setAttribute('src', product.image)
  productName.innerText = product.name
  productPrice.innerText = '$' + product.price + ',00'
  productDesc.innerText = product.description
  console.log(productName)

}

function closeProductDetail() {
  const productDetail = document.querySelector('.product-detail')
  productDetail.classList.add('inactive')
}
