const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetailCloseCoin = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);
productDetailCloseCoin.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu () {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside () {
    productDetailContainer.classList.remove('inactive')
}


function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: 'Play 5',
    price: 175,
    image: "https://pladani.com/wp-content/uploads/2022/04/Play5-Digital.jpg"
})
productList.push({
    name: 'computador',
    price: 175,
    image: "https://images.pexels.com/photos/17136620/pexels-photo-17136620/free-photo-of-escritorio-tecnologia-ordenador-monitor.jpeg"
})

function rendersProduct (arr) {
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
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p') 
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('Figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
    
        cardsContainer.appendChild(productCard);    
    }
}

rendersProduct(productList);