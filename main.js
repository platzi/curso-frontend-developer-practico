const naveMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const carsDetail = document.querySelector('.navbar-shopping-cart')
const asideCartShopping = document.querySelector('#detailsCart')
const cardsContainer = document.querySelector('.cards-container')
const detalleProducto = document.querySelector('#productDetails')
const detalleProductoClosed = document.querySelector('.product-detail-close')

naveMenu.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
carsDetail.addEventListener('click',toggleCarsDetails)
detalleProductoClosed.addEventListener('click', closedProductsDetails)

function toggleDesktopMenu() {
    const asideCartShoppingClosed = asideCartShopping.classList.contains('inactive')

    if (!asideCartShoppingClosed) {
        asideCartShopping.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const asideCartShoppingClosed = asideCartShopping.classList.contains('inactive')

    if (!asideCartShoppingClosed) {
        asideCartShopping.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
    
    closedProductsDetails()
}

function toggleCarsDetails() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive')
    const productDetail = detalleProducto.classList.contains('inactive')

    if(!mobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if(!productDetail) {
        detalleProducto.classList.add('inactive')
    }
    asideCartShopping.classList.toggle('inactive')
}

function openProductsDetails() {
    asideCartShopping.classList.add('inactive')
    detalleProducto.classList.remove('inactive')
}

function closedProductsDetails() {
    detalleProducto.classList.add('inactive')
}

 const productList = [
    {name : "Bike", price: "120", image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name : "TV", price: "220", image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name : "Computadora", price: "620", image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
 ]

 function rederProductos(productos) {

    for(product of productos) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductsDetails)

        const productIfo = document.createElement('div')
        productIfo.classList.add('product-info')

        const productDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerHTML = '$' + product.price

        const productName = document.createElement('p')
        productName.innerHTML = product.name

        const productFigure = document.createElement('figure')

        const imageCart = document.createElement('img')
        imageCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productDiv.append(productPrice,productName)
        productIfo.append(productDiv,productFigure)
        productCard.append(productImg,productIfo)
        productFigure.appendChild(imageCart)
        cardsContainer.appendChild(productCard)
      }
 }

 rederProductos(productList)
