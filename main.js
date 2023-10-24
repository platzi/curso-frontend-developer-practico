const menuEmail = document.querySelector('.navbar-email')
const destokMenu = document.querySelector('.desktop-menu')
const menuHamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarroAside);
productDetailClose.addEventListener('click', closeDetailAside);


function toggleDesktopMenu () {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    }
    destokMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive')
    } 

    const isProductDetailClose = productDetailContainer.classList.contains('inactive')
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarroAside () {
    const ismobileMenuClose = mobileMenu.classList.contains('inactive')
   
    if (!ismobileMenuClose) {
            mobileMenu.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive')
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive')
    }
   

    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside() {
    const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isCarritoClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    productDetailContainer.classList.remove('inactive')

}

function closeDetailAside() {
    productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name: 'Computador',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

function renderProduct (arr) { 
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        const divVacio = document.createElement('div')
    
        const priceProduct = document.createElement('p')
        priceProduct.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
    
        const productFigurecard = document.createElement('figure')
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    
        productFigurecard.appendChild(imgCard)
    
        divVacio.appendChild(priceProduct)
        divVacio.appendChild(productName)
    
        productInfo.appendChild(divVacio)
        productInfo.appendChild(productFigurecard)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
    
        cardsContainer.appendChild(productCard)
    
    
    }
    
}

renderProduct(productList)






















console.log('todo sirve')