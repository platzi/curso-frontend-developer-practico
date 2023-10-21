const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const MobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const productList = []; 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'NoteBook',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'NoteBook',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

navEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
renderProducts(productList)

function toggleDesktopMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isisshoppingCartContainerClosedClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isisshoppingCartContainerClosedClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    MobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')

    }
    const isProductDetailClose = productDetailContainer.classList.contains('inactive')
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive')

    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isShoppingCartContainerOpen = shoppingCartContainer.classList.contains('inactive')
    if(!isShoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive')

    }
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click', openProductDetailAside)
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = '$' + product.name
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(ProductImg)
        productCard.appendChild(productInfo)
        cardContainer.appendChild(productCard)
    
    }

}

