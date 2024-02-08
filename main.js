const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const carritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
carritoIcon.addEventListener('click', toggleCarrito)


function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed) {
        desktopMenu.classList.add('inactive')
    }  

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }  

    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }  

    aside.classList.toggle('inactive')

}

const productList = []

productList.push({
    nombre: 'bike',
    precio: 200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'Air fryer',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'PC',
    precio: 600,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.imagen)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.precio
    
        const productName = document.createElement('p')
        productName.innerText = product.nombre
    
        const productInfoDiv = document.createElement('div')
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement('figure')
    
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)