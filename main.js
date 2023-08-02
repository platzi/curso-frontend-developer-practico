const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

const menu = document.querySelector(".menu")
const mobileMenu= document.querySelector(".mobile-menu")

const shoppingCart = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shopping-cart-container")

const cardsContainer = document.querySelector(".cards-container")

navbarEmail.addEventListener("click", toggleMenu)

function toggleMenu(){
  desktopMenu.classList.toggle('inactive')
}

menu.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu(){
  const shoppingCartContainerClass = shoppingCartContainer.classList

  if (!shoppingCartContainerClass.contains('inactive')) {
    shoppingCartContainerClass.toggle('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

shoppingCart.addEventListener("click", toggleShoppingCar)

function toggleShoppingCar(){
  const mobileClass = mobileMenu.classList

  if (!mobileClass.contains('inactive')) {
    mobileClass.toggle('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];

productList.push({
  name: 'Bike',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  price: '120'
})

productList.push({
  name: 'TV',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  price: '520'
})

productList.push({
  name: 'Other',
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  price: '420'
})

function renderProducts (arr){
  for (product of arr){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
   
    const img = document.createElement('img')
    img.setAttribute('src', product.img)
   
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
   
    const productInfoDiv = document.createElement('div')
    const productInfoPrice = document.createElement('p')
    productInfoPrice.innerText = '$' + product.price
   
    const productInfoName = document.createElement('p')
    productInfoName.innerText = product.name
   
    const productInfoFigure = document.createElement('figure')
    const productInfoImgCart= document.createElement('img')
   
    productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
   
    productInfoFigure.appendChild(productInfoImgCart)
   
    productInfoDiv.appendChild(productInfoPrice)
    productInfoDiv.appendChild(productInfoName)
   
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
   
    productCard.appendChild(img)
    productCard.appendChild(productInfo)
   
    cardsContainer.appendChild(productCard)
   }   
}

renderProducts(productList)