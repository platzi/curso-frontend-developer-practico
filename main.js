const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')

menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarIcon.addEventListener('click',toggleAside)
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('container')

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive')
    }    
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('container')

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive')
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
}

function toggleAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }   
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }     
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
     
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }     
    
    shoppingCardContainer.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Consola',
    price: 2500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function openProductDetailAside(){

    shoppingCardContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function renderProducts(arr){

    for(product of arr){
        
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        const productInfoDiv = document.createElement('div')
        const productInfoFigure = document.createElement('figure')
        
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click',openProductDetailAside)
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        productInfoFigure.appendChild(productImgCart)
        
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        
        cardsContainer.appendChild(productCard)
        
    }
}

renderProducts(productList)