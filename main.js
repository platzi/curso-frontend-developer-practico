const emailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const logo = document.querySelector('.logo')
const cardsContainer = document.querySelector('.cards-container')

emailMenu.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click', toggleAside)

function toggleDesktopMenu() {
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}
function toggleAside() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 380,
    image: 'https://m.media-amazon.com/images/I/91MqcxxSzFL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
})
productList.push({
    name: 'Gaming Desk',
    price: 420,
    image: 'https://m.media-amazon.com/images/I/71SMNFiD9bL._AC_SX569_.jpg'
})
productList.push({
    name: 'Coffee Cup',
    price: 11,
    image: 'https://m.media-amazon.com/images/I/71ijLyRmNXL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
})
productList.push({
    name: 'Git and Github',
    price: 14.99,
    image: 'https://pbs.twimg.com/media/FubgrSEWYAATGTr.jpg'
})
productList.push({
    name: 'Learning JavaScript',
    price: 14.85,
    image: 'https://d2sofvawe08yqg.cloudfront.net/aprendiendo-javascript/s_hero2x?1620475858'
})
productList.push({
    name: 'Bike',
    price: 79.99,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b2b10812-dbea-4cdd-823c-22d67ed22215.caad0e2aa520aa4be27909fe53de6adf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
})
productList.push({
    name: 'Git and Github',
    price: 14.99,
    image: 'https://pbs.twimg.com/media/FubgrSEWYAATGTr.jpg'
})
productList.push({
    name: 'Learning JavaScript',
    price: 14.85,
    image: 'https://d2sofvawe08yqg.cloudfront.net/aprendiendo-javascript/s_hero2x?1620475858'
})
productList.push({
    name: 'Bike',
    price: 79.99,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b2b10812-dbea-4cdd-823c-22d67ed22215.caad0e2aa520aa4be27909fe53de6adf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
})
productList.push({
    name: 'Bike',
    price: 79.99,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b2b10812-dbea-4cdd-823c-22d67ed22215.caad0e2aa520aa4be27909fe53de6adf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
})
productList.push({
    name: 'Bike',
    price: 79.99,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/b2b10812-dbea-4cdd-823c-22d67ed22215.caad0e2aa520aa4be27909fe53de6adf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
})

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.setAttribute('alt', product.name)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name

        const productFigure = document.createElement('figure')
        
        const productFigureCart = document.createElement('img')
        productFigureCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        productFigureCart.setAttribute('alt', 'Add to Cart')

        productInfoDiv.append(productPrice, productName)

        productFigure.appendChild(productFigureCart)


        productInfo.append(productInfoDiv, productFigure)

        productCard.append(productImg, productInfo)

        cardsContainer.append(productCard)
    }
}

renderProducts(productList)