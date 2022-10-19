//  selectors
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsConatiner = document.querySelector('.cards-container')
const productDetailConatiner = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('nactive')
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive')
} 

function toggleCartAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive')
        
    } else if (!isDesktopMenuClose) 
    {
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClose = productDetailConatiner.classList.contains('inactive')

    if (!isProductDetailClose) {
        productDetailConatiner.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')

    productDetailConatiner.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailConatiner.classList.add('inactive')
}

// Product Cards

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
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
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsConatiner.appendChild(productCard)
    }
}

renderProducts(productList)