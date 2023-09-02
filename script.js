const menuEmail = document.querySelector('.navbar-email')
const desktopMEnu = document.querySelector('.desktop-menu')
const menuHamburger = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburger.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    desktopMEnu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        //abrir el aside
        shoppingCartContainer.classList.add('inactive')
    } 

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        //abrir el aside
        mobileMenu.classList.add('inactive')
    } 

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: "Pantalla",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: "Computadora",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (producto of productList) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', producto.image)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + producto.price

    const productName = document.createElement('p')
    productName.innerText = producto.name

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
    cardsContainer.appendChild(productCard)
}