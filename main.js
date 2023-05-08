const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurguer = document.querySelector('.menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const carShopping = document.querySelector('.navbar-shopping-cart');
const containerCards = document.querySelector('.cards-container')
const mainContainer = document.querySelector('.main-container')
const productoDetailContainer = document.querySelector('#productDetail')
const CloseButonProductDetail = document.querySelector('.product-detail-close')

carShopping.addEventListener('click', toggleProductDetail);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
CloseButonProductDetail.addEventListener('click', closeProductDetail)


function toggleDesktopMenu(){
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetail()
    
    mobileMenu.classList.toggle('inactive');

}

function toggleProductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productoDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClosed) {
        productoDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');

    const isDestockMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDestockMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}

function openProductDetailAside() {
shoppingCartContainer.classList.add('inactive')
productoDetailContainer.classList.remove('inactive')
}

function closeProductDetail() {
    productoDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 250,
    img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Car',
    price: 1120,
    img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Skate',
    price: 110,
    img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'CellPhone',
    price: 520,
    img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})



function renderProductos(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const aloofInfoProduct = document.createElement('div');
    
        const priceInfoProduct = document.createElement('p');
        priceInfoProduct.innerText ='$' + product.price;
        const nameInfoProduct = document.createElement('p');
        nameInfoProduct.innerText = product.name;
    
        aloofInfoProduct.append(priceInfoProduct, nameInfoProduct);
        // aloofInfoProduct.appendChild(nameInfoProduct);
    
        const infoFigure = document.createElement('figure');
        const infoImg = document.createElement('img');
        infoImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        infoFigure.appendChild(infoImg)
    
        productInfo.append(aloofInfoProduct, infoFigure)
        // productInfo.appendChild(infoFigure)
    
        productCard.append(productImg, productInfo)
        // productCard.appendChild(productInfo)
    
        containerCards.appendChild(productCard)
        mainContainer.appendChild(containerCards)
    }
    
}

renderProductos(productList);
