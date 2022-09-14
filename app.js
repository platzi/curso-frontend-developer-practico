const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCart = document.querySelector('#shoppingCart')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
hamburgerIcon.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleAsideShoppingCart)
productDetailCloseIcon.addEventListener('click', closeAsideProductDetail)

function toggleDesktopMenu () {
    const isAsideMenuClosed = shoppingCart.classList.contains('inactive')

    if (!isAsideMenuClosed) {
        shoppingCart.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    const isAsideShoppingCartClosed = shoppingCart.classList.contains('inactive')

    if (!isAsideShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }

    closeAsideProductDetail()

    mobileMenu.classList.toggle('inactive')
}

function toggleAsideShoppingCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    shoppingCart.classList.toggle('inactive')
}

function showAsideProductDetail () {
    shoppingCart.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeAsideProductDetail () {
    productDetailContainer.classList.add('inactive')
}

const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts (products) {
    for (product of products) {
        const productCard = document.createElement('div')

        productCard.classList.add('product-card')

        const productImg = document.createElement('img')

        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', showAsideProductDetail)

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

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)