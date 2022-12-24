const emailNavbar = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')
const menuMobileIcon = document.querySelector('.menu')
const menuCart = document.querySelector('.navbar-shopping-cart')
const productsList = []

let classToToggle = 'inactive'
let mobileMen = document.querySelector('.mobile-menu')
let productDet = document.querySelector('.product-detail')

emailNavbar.addEventListener('click', changeVisibilityMenuEmail)
function changeVisibilityMenuEmail(){
  if(menuDesktop.classList.contains(classToToggle)){
    menuDesktop.classList.remove(classToToggle)
  }else{
    menuDesktop.classList.add(classToToggle)
  }//Also works: menuDesktop.classList.toggle(classToToggle)
}

menuMobileIcon.addEventListener('click', () => {
  if(!mobileMen.classList.toggle(classToToggle) && !productDet.classList.contains(classToToggle)){
    productDet.classList.add(classToToggle)
  }
})
menuCart.addEventListener('click', () => {
  if(!productDet.classList.toggle(classToToggle) && !mobileMen.classList.contains(classToToggle)){
    mobileMen.classList.add(classToToggle)
  }
})

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: ''
},{
  name: 'Computer',
  price: 12000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  alt: ''
})

renderCardProducts(productsList)

function renderCardProducts(products){
  for(product of products){
    //Declarations
    const cardsContainer = document.querySelector('.cards-container')
    const cardProduct = document.createElement('div')
    const infoProduct = document.createElement('div')
    const infoProductPriceName = document.createElement('div')
    const imgProduct = document.createElement('img')
    const priceProduct = document.createElement('p')
    const nameProduct = document.createElement('p')
    const figureProduct = document.createElement('figure')
    const figureImgProduct = document.createElement('img')
  
    //Attributes
    cardProduct.classList.add('product-card')
    imgProduct.setAttribute('src', product.image)
    infoProduct.classList.add('product-info')
    priceProduct.innerText = `\$${ product.price }`
    nameProduct.innerText = `${ product.name }`
    figureImgProduct.setAttribute('src', './icons/bt_add_to_cart.svg')
    infoProductPriceName.append(priceProduct, nameProduct)
  
    //Appends
    cardsContainer.appendChild(cardProduct)
    cardProduct.append(imgProduct, infoProduct)
    infoProduct.append(infoProductPriceName, figureProduct)
    infoProductPriceName.append(priceProduct, nameProduct)
    figureProduct.appendChild(figureImgProduct)
  }
}
