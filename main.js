const memuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHanIcon = document.querySelector('img')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const shopIconClose = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.getElementById('shoppingCartContainer')
const productCartDetail = document.getElementById('productCartDetail')
const cardTemplate = document.getElementById('card-template').content
const cardsContainer = document.getElementById('cards-container')
const fragment = document.createDocumentFragment()

// Funciones listeners
memuEmail.addEventListener('click', toggleDesktopMenu)
menuHanIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)
shopIconClose.addEventListener('click', closeMenuIconShopClose)

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

  mobileMenu.classList.toggle('inactive')
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
}

const productList = []

productList.push({
  name: 'Bike',
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'iPhone Xr',
  price: 350,
  image:
    'https://http2.mlstatic.com/D_NQ_NP_642474-MLA46597444699_072021-O.jpg',
})
productList.push({
  name: 'Macbook M1 Pro 14',
  price: 1800,
  image:
    'https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt.jpg',
})

function renderProducts(arr) {
  for (product of arr) {
    cardTemplate.querySelector('.product-card img').src = product.image
    cardTemplate.querySelectorAll(
      '.product-card .product-info div p'
    )[0].textContent = product.price
    cardTemplate.querySelectorAll(
      '.product-card .product-info div p'
    )[1].textContent = product.name

    const clone = cardTemplate.cloneNode(true)
    fragment.appendChild(clone)
  }

  cardsContainer.appendChild(fragment)
}
renderProducts(productList)

function openProductCartDetail() {
  productCartDetail.classList.remove('inactive')
}

function closeMenuIconShopClose() {
  shoppingCartContainer.classList.toggle('inactive')
  productCartDetail.classList.add('inactive')
  mobileMenu.classList.add('inactive')
  desktopMenu.classList.add('inactive')
}
