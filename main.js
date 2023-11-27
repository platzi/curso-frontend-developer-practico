const $menuEmail = document.querySelector('.navbar-email')
const $burguerIcon = document.querySelector('.menu')
const $cartIcon = document.querySelector('.navbar-shopping-cart')
const $desktopMenu = document.querySelector('.desktop-menu')
const $mobileMenu = document.querySelector('.mobile-menu')
const $asideCart = document.querySelector('.cart-menu')
const $cardsContainer = document.querySelector('.cards-container')
const $productDetail = document.querySelector('.product-detail')
const $productDetailCloseIcon = document.querySelector('.product-detail-close')
const productList = []

const openProductDetail = () => {
  const isAsideCartOpen = !$asideCart.classList.contains('inactive')
  const isDesktopMenuOpen = !$desktopMenu.classList.contains('inactive')
  const isMobileMenuOpen = !$mobileMenu.classList.contains('inactive')
  
  if (isAsideCartOpen) {
    $asideCart.classList.add('inactive')
  }

  if (isDesktopMenuOpen) {
    $desktopMenu.classList.add('inactive')
  }

  if (isMobileMenuOpen) {
    $mobileMenu.classList.add('inactive')
  }

  $productDetail.classList.remove('inactive')
}

const closeProductDetail = () => {
  $productDetail.classList.add('inactive')
}

const renderProducts = (arr) => {
  for (product of arr) {
    const productCard = document.createElement('div')
    const productImage = document.createElement('img')
    const productInfo = document.createElement('div')
    const productInfoDiv = document.createElement('div')
    const productName = document.createElement('p')
    const productPrice = document.createElement('p')
    const productFigure = document.createElement('figure')
    const productCartIcon = document.createElement('img')
    
    productCard.classList.add('product-card')
    productImage.setAttribute('src', product.image)
    productImage.addEventListener('click', openProductDetail)

    productInfo.classList.add('product-info')
    productName.innerText = `$${product.name}`
    productPrice.innerText = `$${product.price}`
    productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productFigure.append(productCartIcon)
    productInfoDiv.append(productName, productPrice)
  
    productInfo.append(productFigure, productInfoDiv)
  
    productCard.append(productImage, productInfo)
  
    $cardsContainer.append(productCard)
  }
}

const toggleDesktopMenu = () => {
  const isAsideCartOpen = !$asideCart.classList.contains('inactive')
  const isProductDetailOpen = !$productDetail.classList.contains('inactive')

  if (isAsideCartOpen) {
    $asideCart.classList.add('inactive')
  }

  if (isProductDetailOpen) {
    $productDetail.classList.add('inactive')
  }

  $desktopMenu.classList.toggle('inactive')
}

const toggleMobileMenu = () => {
  const isAsideCartOpen = !$asideCart.classList.contains('inactive')
  const isProductDetailOpen = !$productDetail.classList.contains('inactive')
  
  if (isAsideCartOpen) {
    $asideCart.classList.add('inactive')
  }

  if (isProductDetailOpen) {
    $productDetail.classList.add('inactive')
  }

  $mobileMenu.classList.toggle('inactive')
}

const toggleAsideCart = () => {
  const isMobileMenuOpen = !$mobileMenu.classList.contains('inactive')
  const isDesktopMenuOpen = !$desktopMenu.classList.contains('inactive')
  const isProductDetailOpen = !$productDetail.classList.contains('inactive')

  if (isMobileMenuOpen) {
    $mobileMenu.classList.add('inactive')
  }

  if (isDesktopMenuOpen) {
    $desktopMenu.classList.add('inactive')
  }

  if (isProductDetailOpen) {
    $productDetail.classList.add('inactive')
  }

  $asideCart.classList.toggle('inactive')
}

$menuEmail.addEventListener('click', toggleDesktopMenu)
$burguerIcon.addEventListener('click', toggleMobileMenu)
$cartIcon.addEventListener('click', toggleAsideCart)
$productDetailCloseIcon.addEventListener('click', closeProductDetail)

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'Motorbike',
  price: 700,
  image: 'https://imageio.forbes.com/specials-images/imageserve/5ff69ada85aae9eb476d35ba/Kaneda-s-Bike/0x0.jpg?format=jpg&crop=1280,720,x0,y0,safe&width=960'
})

productList.push({
  name: 'TV',
  price: 350,
  image: 'https://elcomercio.pe/resizer/2nYFfdNww-Ehjq7vcRtUnL0ZQ-Q=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NL3YOQKG3NDX3LCBEIWVEQTX2A.jpg'
})

productList.push({
  name: 'Laptop',
  price: 260,
  image: 'https://spectrum.ieee.org/media-library/introduced-in-1982-the-grid-compass-found-a-following-at-nasa-and-in-the-u-s-military.jpg?id=25591646'
})

productList.push({
  name: 'Conocimiento',
  price: 1000,
  image: 'data:image/jpeg;base64,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'
})

productList.push({
  name: 'Organos',
  price: 9999,
  image: 'https://cdn0.unprofesor.com/es/posts/2/6/6/organos_internos_del_cuerpo_humano_lista_completa_1662_600.jpg'
})

renderProducts(productList)
