
// Account menu display: 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu () {
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)

// Mobile menu display: 
const hamburgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

function toggleMobileMenu () {
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

hamburgerMenu.addEventListener('click', toggleMobileMenu)

// Menu cart display: 
const cartMenu = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

function toggleCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

cartMenu.addEventListener('click', toggleCart)

// Products database hardcoded:

const cardsContainer = document.querySelector('.cards-container')

const productList = []
productList.push({name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})
productList.push({name: 'Television', price: 500, image: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})
productList.push({name: 'Car', price: 5000, image: 'https://images.pexels.com/photos/175690/pexels-photo-175690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})
productList.push({name: 'Knife', price: 50, image: 'https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})


function renderProducts (arr) {
    for(product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        
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