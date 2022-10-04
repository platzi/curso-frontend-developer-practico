const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleListMenu)


function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')
    desktopMenu.classList.toggle('inactive')
    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleListMenu (){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')
    

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
    
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Auriculares',
    price: 220,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name: 'AppleWatch',
    price: 340,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400',
});



function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
        const divVacio = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$'+ product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfo.appendChild(productPrice)
        productInfo.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(divVacio)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }
}


renderProducts(productList)