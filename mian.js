const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAsie)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        productDetailContainer.classList.add('inactive');
    }
    

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive')    
}

function toggleCarritoAsie() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    nombre:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
})

productList.push({
    nombre:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
})

productList.push({
    nombre:'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 '
})

function renderProducts(array){
    for (product of array) {
        const productCard =  document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image) 
        productImg.addEventListener('click',openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
            const productPrice = document.createElement('p');
            productPrice.innerHTML = '$' + product.price
        
            const productName = document.createElement('p');
            productName.innerHTML = product.nombre
        productInfoDiv.append(productPrice,productName)
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_added_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
    
        productInfo.append(productInfoDiv,productInfoFigure)
    
        productCard.append(productImg,productInfo)

    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)