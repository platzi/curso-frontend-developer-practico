const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")
const productList = []


navEmail.addEventListener('click', toggleDesktopMenu)
hamburgerMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingCartMenu)

productList.push({
    name: 'Bike',
    price: 500000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Air Pods Pro',
    price: 1200000,
    img: './img/air_pods.png'
})
productList.push({
    name: 'Iphone 13 Pro Max',
    price: 6000000,
    img: './img/iphone_13.jpg'
})

showProducts(productList)
function showProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        const productInfoPrice = document.createElement('p')
        productInfoPrice.innerText = "$" + product.price
        const productInfoName = document.createElement('p')
        productInfoName.innerText = product.name

        const productInfoFigure = document.createElement('figure')
        const productInfoImg = document.createElement('img')
        productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg')

        
        productInfoDiv.appendChild(productInfoPrice)
        productInfoDiv.appendChild(productInfoName)
        productInfoFigure.appendChild(productInfoImg)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)

    }
}

function toggleDesktopMenu(){
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')

    if(!isShoppingCartMenuClosed){
        shoppingCartMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')


}

function toggleMobileMenu(){
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive')

    if(!isShoppingCartMenuClosed){
        shoppingCartMenu.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartMenu(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const ismobileMenuClose = mobileMenu.classList.contains('inactive')

    if(!isDesktopMenuClosed || !ismobileMenuClose){
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
    }
    shoppingCartMenu.classList.toggle('inactive')
}
