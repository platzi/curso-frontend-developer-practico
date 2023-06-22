const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleMenuCarrito)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu() {
    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
    if (!isShoppingCartContainerClose){
        shoppingCartContainer.classsList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
    if (!isShoppingCartContainerClose){
        shoppingCartContainer.classsList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
    closeProductDetailAside()
}
function toggleMenuCarrito() {
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive')
    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
    if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }
    else if (!isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    
    else if (!isShoppingCartContainerClose){
        productDetailContainer.classsList.add('inactive')
    }
    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetail(){
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
    shoppingCartContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: 'pantalla',
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})
productList.push({
    name: 'lapiz',
    price: 5,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})

function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        productCard.addEventListener('click', openProductDetail)
     
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
     
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
     
        const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
     
        const productName = document.createElement('p')
        productName.innerText = product.name
     
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
     
        const productInfoFigure = document. createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCart)
     
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
     
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
     
        cardsContainer.appendChild(productCard)
     }
}
renderProduct(productList)