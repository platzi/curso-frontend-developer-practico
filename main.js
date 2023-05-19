const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const mainAside = document.querySelector('.main-product-detail')
const cardsContainer = document.querySelector('.cards-container')
const specificAside = document.querySelector('.specific-product-detail')
const closeSpecificAside = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoMainAside)
closeSpecificAside.addEventListener('click', hideSpecificAside)

function toggleDesktopMenu() {
    mainAside.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    specificAside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mainAside.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    specificAside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMainAside() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    specificAside.classList.add('inactive')
    mainAside.classList.toggle('inactive')
}

function showSpecificAside() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    mainAside.classList.add('inactive')
    specificAside.classList.remove('inactive')
}

function hideSpecificAside() {
    specificAside.classList.add('inactive')
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
    image: 'https://cdn.pixabay.com/photo/2015/07/18/10/01/tv-850191_960_720.png',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg',
})
productList.push({
    name: 'Celular',
    price: 470,
    image: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg',
})
productList.push({
    name: 'Kindle',
    price: 280,
    image: 'https://cdn.pixabay.com/photo/2016/08/01/09/53/kindle-update-1560728_960_720.jpg',
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', showSpecificAside)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        productInfoDiv.append(productPrice, productName)

        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productImgCart)

        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)