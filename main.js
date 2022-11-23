const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const orderIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('#shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
orderIcon.addEventListener('click', toggleAsideMenu)
productDetailCloseIcon.addEventListener('click', closeProductDetail)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')

    if (!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.add('inactive')
    }

    toggleAsideMenu()
}

function toggleAsideMenu(){
    shoppingCart.classList.toggle('inactive')

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    }

    if (!productDetailContainer.classList.contains('inactive')){
        console.log('here')
        productDetailContainer.classList.add('inactive')
    }
}

function openProductDetail(){
    productDetailContainer.classList.remove('inactive')

    if (!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.add('inactive')
    }
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bicicleta',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Computador',
    price: 620,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

renderProds(productList)

function renderProds(arr) {
    for (let product of arr) {
        const prodCard = document.createElement('div')
        prodCard.classList.add('product-card')
        
        const img = document.createElement('img')
        img.setAttribute('src', product.img)

        img.addEventListener('click', openProductDetail)

        const prodInfo = document.createElement('div')
        prodInfo.classList.add('product-info')

        const prodInfoDetail = document.createElement('div')
        const price = document.createElement('p')
        const name = document.createElement('p')
        price.innerText = product.price
        name.innerText = product.name
        
        const cartFigure = document.createElement('figure')
        const imgCart = document.createElement('img')
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        cartFigure.appendChild(imgCart)
        prodInfoDetail.appendChild(price)
        prodInfoDetail.appendChild(name)
        prodInfo.appendChild(prodInfoDetail)
        prodInfo.appendChild(cartFigure)
        prodCard.appendChild(img)
        prodCard.appendChild(prodInfo)
        cardsContainer.appendChild(prodCard)
    }
}