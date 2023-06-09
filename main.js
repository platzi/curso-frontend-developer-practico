/*
Tip:
Para no tener que escribir siempre (document.querySelector) podemos usar esta simplificación con una arrow function.

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
*/

const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamMenuIcon = document.querySelector('.ham-menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')
const productDetailAside = document.querySelector('#product-detail')
const productDetailClose = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container')

navbarEmail.addEventListener('click', toggleDesktopMenu)
hamMenuIcon.addEventListener('click', toggleMobileMenu)
cartIcon.addEventListener('click', toggleCartIcon)
productDetailClose.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive')
    productDetailAside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive')
    productDetailAside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCartIcon() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailAside.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailAside.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailAside.classList.add('inactive')
}

/* ---- Products ----*/
const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Screen',
    price: 450,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Messi T-shirt',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.setAttribute('alt', product.name)
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText= `$ ${product.price}`

        const productName = document.createElement('p')
        productName.innerText = product.name

        const productInfoFigure = document.createElement('figure')
        const productInfoFigureImg = document.createElement('img')
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        productInfoFigureImg.setAttribute('alt', 'Add to cart')

        cardsContainer.append(productCard)
        productCard.append(productImg, productInfo)
        productInfo.append(productInfoDiv, productInfoFigure)
        productInfoDiv.append(productPrice, productName)
        productInfoFigure.append(productInfoFigureImg)

    }
}

renderProducts(productList)