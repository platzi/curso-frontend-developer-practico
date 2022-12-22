const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCar)

function toggleDesktopMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClose) {
        //si mobileMenu esta open, hay que cerrarlo
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClose) {
        //si mobileMenu esta open, hay que cerrarlo
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')


    if (!isMobileMenuClose) {
        //si mobileMenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')

}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name: 'PC',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name: 'Celular',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

function renderProduct(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        console.log(productImg);

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$'+ product.price
        const productName = document.createElement('p')
        productName.innerText= product.name

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

renderProduct(productList)