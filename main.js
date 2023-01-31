const menuEmail=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const menuHamIcon=document.querySelector('.menu')
const mobileMenu=document.querySelector('.mobile-menu')
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer=document.querySelector('#shoppingCartContainer')
const cardsContainer=document.querySelector('.cards-container')
const productDetailContainer=document.querySelector('#productDetail')
const productDetailClose=document.querySelector('.product-detail-close')

menuEmail.addEventListener('click',toggleDeskopMenu)
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)

productDetailClose.addEventListener('click',closeProductDetailAside)




function toggleDeskopMenu(){

  const isAsideClose =shoppingCartContainer.classList.contains('inactive')
if (!isAsideClose) {
   
  shoppingCartContainer.classList.add('inactive')
}

desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu(){
  const isAsideClose =shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClose) {
   
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside()
  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isMobileMenuClose =mobileMenu.classList.contains('inactive')
  

  if (!isMobileMenuClose) {
   
    mobileMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')

  const isProductDetailClose =productDetailContainer.classList.contains('inactive')
  if (!isProductDetailClose) {
   
    productDetailContainer.classList.add('inactive')
  }
}

const productList =[]
productList.push({
  name:'bike',
  price:120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name:'Pantalla',
  price:1120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
  name:'Mouse',
  price:111220,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(params) {
  productDetailContainer.classList.add('inactive')
}

function renderProducts(arr) {
  
for (const product of arr) {
  
  const productCard =document.createElement('div')
  productCard.classList.add('product-card')

  const productImg=document.createElement('img')
  productImg.setAttribute('src',product.image)
  productImg.addEventListener('click',openProductDetailAside)

  const productInfo =document.createElement('div')
  productInfo.classList.add('product-info')

  const productInfoDiv =document.createElement('div')

   const productPrice =document.createElement('p')
   productPrice.innerText='$' + product.price
   const productName =document.createElement('p')
   productName.innerText =product.name

   productInfoDiv.appendChild(productPrice)
   productInfoDiv.appendChild(productName)
   
   const productInfoFigure =document.createElement('figure')
   const productImgCart =document.createElement('img')
   productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

   productInfoFigure.appendChild(productImgCart)

   productInfo.appendChild(productInfoDiv)
   productInfo.appendChild(productInfoFigure)

   productCard.appendChild(productImg)
   productCard.appendChild(productInfo)

   cardsContainer.appendChild(productCard)
}
}

renderProducts(productList)