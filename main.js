const menuEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const mobileMenu = document.querySelector('.mobile-menu')
const shoppingMenuIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

//let inactive = document.querySelector('.inactive')    // Cambiar valor de la propiedad del selector inactive

menuEmail.addEventListener('click', toogleDesktopMenu)
burgerMenu.addEventListener('click', toogleMobileMenu)
shoppingMenuIcon.addEventListener('click', toogleShoppingMenu)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toogleDesktopMenu() {
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
//    inactive.style.display = ('block')                // Change the property of 'none' to block

    if (!isshoppingCartContainerClose) {
        shoppingCartContainer.classList.toggle('inactive')
        }
    menuDesktop.classList.toggle('inactive')
}
function toogleMobileMenu() {
    const isAsideCLose = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailAsideClose = productDetailContainer.classList.contains('inactive');

    if (!isAsideCLose) {                            
        shoppingCartContainer.classList.toggle('inactive')
    }
    if (!isProductDetailAsideClose) {                            
        productDetailContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toogleShoppingMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClose = menuDesktop.classList.contains('inactive');
    const isProductDetailAsideClose = productDetailContainer.classList.contains('inactive');
    
    if (!isMobileMenuClose) {                            
        mobileMenu.classList.add('inactive')
    }
    if (!isMenuDesktopClose) {                            
        menuDesktop.classList.toggle('inactive')
    }
    if (!isProductDetailAsideClose) {                            
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}
function openProductDetailAside() {
    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    
    if (!isShoppingCartContainerClose) {                            
        shoppingCartContainer.classList.toggle('inactive')
    }
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push ({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push ({
    name : 'Pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/17136622/pexels-photo-17136622/free-photo-of-escritorio-tecnologia-ordenador-monitor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push ({
    name : 'Laptop',
    price: 1500,
    image: 'https://images.pexels.com/photos/4061525/pexels-photo-4061525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

function renderProducts(arr) {
    for (product of arr) {
        
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText =  '$' + (product.price)
        const productName = document.createElement('p')
        productName.innerText =(product.name)

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement('figure')
        const productInfoFigureImg = document.createElement('img')
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productInfoFigureImg)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);