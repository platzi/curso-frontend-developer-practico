const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const iconHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', () =>{
  const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
})
iconHam.addEventListener('click', () => {
  const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive')
})

shoppingCart.addEventListener('click', () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDescktopMenulosed = menuEmail.classList.contains('inactive')
  if (!isDescktopMenulosed){
    desktopMenu.classList.add('inactive')
  }
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  aside.classList.toggle('inactive')
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
  img: 'https://www.lg.com/cl/images/monitores/md05881116/gallery/dz-4.jpg'
})
productList.push({
  name: 'Laptop Gamer',
  price: 600,
  img: 'https://images.lider.cl/wmtcl?source=url[file:/productos/1339698a.jpg]&sink'
})


function productRender(arr){
  for (product of arr){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.img)
  
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

