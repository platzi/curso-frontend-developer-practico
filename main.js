const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClosedIcon = document.querySelector(".product-detail-close")
const cardsContainer = document.querySelector(".cards-container")

const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
const ismobileMenuClose = mobileMenu.classList.contains('inactive')
const isProductDetailClose = productDetailContainer.classList.contains('inactive')
const isShoppingCartMenuClose = shoppingCartMenu.classList.contains('inactive')
const productList = []

navEmail.addEventListener('click', toggleDesktopMenu)
hamburgerMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingCartMenu)
productDetailClosedIcon.addEventListener('click', closeProductDetailAside)

productList.push({
    name: 'Bike',
    price: 500_000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Air Pods Pro',
    price: 1_200_000,
    img: './img/air_pods.png'
})
productList.push({
    name: 'Iphone 13 Pro Max',
    price: 6_000_000,
    img: './img/iphone_13.jpg'
})

showProducts(productList)

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside(){
    console.log(isShoppingCartMenuClose)
    if (isShoppingCartMenuClose){
        shoppingCartMenu.classList.add("inactive")
        console.log("pasa")
    }

    productDetailContainer.classList.add("inactive")
    console.log("pasa")
}

function showProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', openProductDetailAside)
        
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
    
    if(isShoppingCartMenuClose){
        shoppingCartMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')


}

function toggleMobileMenu(){

    if(isShoppingCartMenuClose || isProductDetailClose){
        shoppingCartMenu.classList.add('inactive')
        closeProductDetailAside()
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartMenu(){

    if(isDesktopMenuClosed || ismobileMenuClose || isProductDetailClose){
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartMenu.classList.toggle('inactive')
}
