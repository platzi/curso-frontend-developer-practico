const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const iconHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', () =>{
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  const isProductDetailClosed = productDetail.classList.contains('inactive')
  if (!isProductDetailClosed){
    productDetail.classList.add('inactive')
  }
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
})
iconHam.addEventListener('click', () => {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  const isProductDetailClosed = productDetail.classList.contains('inactive')
  if (!isProductDetailClosed){
    productDetail.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive')
})

shoppingCart.addEventListener('click', () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDescktopMenuClosed = menuEmail.classList.contains('inactive')
  const isProductDetailClosed = productDetail.classList.contains('inactive')
  if (!isProductDetailClosed){
    productDetail.classList.add('inactive')
  }
  if (!isDescktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  shoppingCartContainer.classList.toggle('inactive')
})

productDetailClose.addEventListener('click', () => {
  productDetail.classList.add('inactive')
})

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Monitor',
  price: 350,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyFdMdZnGBBxASjU-35LCGRpxpWNNlUsPkg&usqp=CAU'
})
productList.push({
  name: 'Laptop Gamer',
  price: 600,
  img: 'https://h30467.www3.hp.com/t5/image/serverpage/image-id/69872i562BEF6696B58641/image-size/large?v=v2&px=999'
})
productList.push({
  name: 'MacBook Pro (16 pulgadas)',
  price: 1200,
  img: 'https://ipadizate.com/hero/2021/11/nuevo-MacBook-pro.jpg?width=1200&aspect_ratio=16:9'
})

function openProductDetail(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  const isDescktopMenuClosed = menuEmail.classList.contains('inactive')
  if (!isDescktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  productDetail.classList.remove('inactive')
}

function productRender(arr){
  for (product of arr){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.img)
    productImg.addEventListener('click', openProductDetail)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
  
    const productPrice = document.createElement('p')
    productPrice.innerText = `$ ${product.price}`
  
    const productName = document.createElement('p')
    productName.innerText = `${product.name}`
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure')
    const productIcon = document.createElement('img')
    productIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productIcon)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

productRender(productList)

