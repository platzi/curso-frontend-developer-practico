const navEmail = document.querySelector('.navbar-email')
const iconMenuMobile = document.querySelector('.menu-ham')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('#shopping-cart')

const cardsContainer = document.querySelector('.cards-container')

const productDetail = document.querySelector('#product-detail')
const productDetailClose = document.querySelector('.product-detail-close')



navEmail.addEventListener('click', toggleDesktopMenu)
iconMenuMobile.addEventListener('click',toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleShoppingCart)
productDetailClose.addEventListener('click', closeProductDetail)


function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')

    if(isAsideOpen){
        aside.classList.add('inactive')
    }

    if(isProductDetailOpen){
        productDetail.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive')

    const isProductDetailOpen = !productDetail.classList.contains('inactive')

    if(isAsideOpen){
        aside.classList.add('inactive')
    }

    if(isProductDetailOpen){
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')
    }

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }

    if(isProductDetailOpen){
        productDetail.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
    
}

function closeProductDetail(){
    productDetail.classList.add('inactive')
}

function openProductDetail(){
    aside.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetail.classList.remove('inactive')
}

const productList = []
productList.push({
    name: 'bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'nintendo switch',
    price: '350',
    image: 'https://images.pexels.com/photos/6993182/pexels-photo-6993182.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'macbook air',
    price: '899',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=300'
})
productList.push({
    name: 'iphone 13',
    price: '699',
    image: 'https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=300'
})



function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const imgProduct = document.createElement('img')
        imgProduct.setAttribute('src',product.image)
        imgProduct.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        productDiv.appendChild(productPrice)
        productDiv.appendChild(productName)
    
        const productFigure = document.createElement('figure')
        const productImage = document.createElement('img')
        productImage.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productFigure.appendChild(productImage)
    
        productInfo.appendChild(productDiv)
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(imgProduct)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)
