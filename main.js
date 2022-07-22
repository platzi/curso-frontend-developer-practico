const menuEmail = document.querySelector(".navbar-email")
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = !shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = !productDetail.classList.contains('inactive')

    isShoppingCartContainerClosed && shoppingCartContainer.classList.toggle('inactive')
    isProductDetailClosed && productDetail.classList.toggle('inactive')

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = !shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = !productDetail.classList.contains('inactive')


    isShoppingCartContainerClosed && shoppingCartContainer.classList.toggle('inactive')
    isProductDetailClosed && productDetail.classList.toggle('inactive')

    
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = !desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = !productDetail.classList.contains('inactive')

    isDesktopMenuClosed && desktopMenu.classList.toggle('inactive')
    isMobileMenuClosed && mobileMenu.classList.toggle('inactive') 
    isProductDetailClosed && productDetail.classList.toggle('inactive')

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    const isShoppingCartContainerClosed = !shoppingCartContainer.classList.contains('inactive')
    const isDesktopMenuClosed = !desktopMenu.classList.contains('inactive')

    isShoppingCartContainerClosed && shoppingCartContainer.classList.toggle('inactive')
    isDesktopMenuClosed && desktopMenu.classList.toggle('inactive')

    productDetail.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetail.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'Computadora',
    price: 1020,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const image = document.createElement('img')
        image.src = product.image
        image.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = `$${product.price}`
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        const productInfoFigure = document.createElement('figure')
    
        const icon = document.createElement('img')
        icon.src = "./icons/bt_add_to_cart.svg"
    
        productCard.append(image)
        productCard.append(productInfo)
    
        productInfo.append(productInfoDiv)
    
        productInfoDiv.append(productPrice)
        productInfoDiv.append(productName)
    
        productInfo.append(productInfoFigure)
    
        productInfoFigure.append(icon)
    
        cardsContainer.append(productCard)
    }
}

renderProducts(productList)