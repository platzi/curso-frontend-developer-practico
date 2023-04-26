const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu  = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

const productDetailContainer = document.querySelector('.product-detail-dos')
const productDetailCloseIcon = document.querySelector('.product-detail-close-dos')

navEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleBurguerMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    console.log('es un click')
   // desktopMenu.classList.toggle('inactive')

    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
        }
    desktopMenu.classList.toggle('inactive')
    
}

function toggleBurguerMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
        }
    mobileMenu.classList.toggle('inactive')

    closeProductDetailAside()
    
}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  

   if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed ) {
        productDetailContainer.classList.add('inactive')
        }

    aside.classList.toggle('inactive')
    
 
}

function openProductDetailAside() {

    mobileMenu.classList.add('inactive')
    aside.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computador',
    price: 210,
    image:'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg'
})

productList.push({
    name: 'Phone',
    price: 80,
    image:'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg'
})

productList.push({
    name: 'Display',
    price: 500,
    image:'https://cdn.pixabay.com/photo/2012/02/28/00/44/blank-17768_1280.jpg'
})

function renderProducts(params) {
    for (const product of params) {

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click',openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
    
        const productInfoFigureImg = document.createElement('img')
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productInfoFigureImg)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    
    }
}

renderProducts(productList)