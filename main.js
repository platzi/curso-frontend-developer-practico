const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburguerButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

navbarEmail.addEventListener('click', toggleDesktopMenu)
hamburguerButton.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    } else if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    productDetail.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bicicleta',
    price: 700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

productList.push({
    name: 'Computador',
    price: 1300,
    image: 'https://images.pexels.com/photos/8534176/pexels-photo-8534176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`

        const productName = document.createElement('p');
        productName.innerText = `${product.name}`

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCard)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)