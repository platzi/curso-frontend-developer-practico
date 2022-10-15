const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const cart = document.querySelector('#shopping-cart')
const cardsCont = document.querySelector('.cards-container')
const detailsWIndow = document.querySelector('#product-details')
const detailsClose = document.querySelector('.product-detail-close')


email.addEventListener('click', toggleEmail)
mobileIcon.addEventListener('click', toggleMenu)
cartIcon.addEventListener('click',toggleCart)
detailsClose.addEventListener('click',closeDetails)

function toggleEmail(){
  if(!cart.classList.contains('inactive')){cart.classList.toggle('inactive')}
  if(!detailsWIndow.classList.contains('inactive')){detailsWIndow.classList.toggle('inactive')}
  desktopMenu.classList.toggle('inactive');
}
function toggleMenu(){
  if(!cart.classList.contains('inactive')){cart.classList.toggle('inactive')}
  if(!detailsWIndow.classList.contains('inactive')){detailsWIndow.classList.toggle('inactive')}
  mobileMenu.classList.toggle('inactive');
}
function toggleCart(){
  if(!mobileMenu.classList.contains('inactive')){mobileMenu.classList.toggle('inactive')}
  if(!desktopMenu.classList.contains('inactive')){desktopMenu.classList.toggle('inactive')}
  if(!detailsWIndow.classList.contains('inactive')){detailsWIndow.classList.toggle('inactive')}
  cart.classList.toggle('inactive');
}

const products = [];
products.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
products.push({
  name: 'Screen',
  price: 220,
  image: 'https://www.sony.com/image/2a8264bd4060bb485e1deeeec1c5564a?fmt=pjpeg&resMode=bisharp&wid=354',
  
})
products.push({
  name: 'Computer',
  price: 620,
  image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  
})

function renderProducts(array){
  for(product of array){

    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    
    const img = document.createElement('img')
    img.setAttribute('src',product.image)
    img.addEventListener('click', toggleDetails)
  
    productCard.appendChild(img)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    productCard.appendChild(productInfo)
  
    const productInfoInnerDiv = document.createElement('div')
  
    productInfo.appendChild(productInfoInnerDiv)
  
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    
    productInfoInnerDiv.appendChild(productPrice)
  
    const productName = document.createElement('p')
    productName.innerText = product.name
  
    productInfoInnerDiv.appendChild(productName)
  
    const figure = document.createElement('figure')
  
    productInfo.appendChild(figure)
  
    const productCartImg = document.createElement('img')
    productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    figure.appendChild(productCartImg)
  
    cardsCont.appendChild(productCard)

  }
}

function toggleDetails(){
  if(!cart.classList.contains('inactive')){cart.classList.toggle('inactive')}
  if(!desktopMenu.classList.contains('inactive')){desktopMenu.classList.toggle('inactive')}

  if(!detailsWIndow.classList.contains('inactive')){
    return console.log('refresh')
  }
  detailsWIndow.classList.toggle('inactive');
}

function closeDetails(){
  detailsWIndow.classList.add('inactive')
}
renderProducts(products)