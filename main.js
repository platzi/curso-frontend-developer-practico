const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');
const overlayBackground = document.querySelector('#overlay');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
overlayBackground.addEventListener('click', closeMenusClick);
productDetailCloseIcon.addEventListener('click', toggleProductDetailAside);



function closeMenusClick() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');    

    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isAsideMenuClosed || !isProductDetailContainerClosed)  {

        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');   
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }
}


// Si shoppingCartContainer abierto, cerrarlo si desktopMenu se abre
function toggleDesktopMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

    if ( ! isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    if ( ! isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    overlayBackground.classList.toggle('inactive');
}

// Si shoppingCartContainer abierto, cerrarlo si mobileMenu se abre
function toggleMobileMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

    if ( ! isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    if ( ! isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    overlayBackground.classList.toggle('inactive');
}


// Si mobileMenu abierto, cerrarlo si shoppingCartContainer se abre
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if ( ! isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    if ( ! isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    
    if ( ! isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    overlayBackground.classList.toggle('inactive');
}


function toggleProductDetailAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if ( ! isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    if ( ! isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }

    
    if ( ! isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
        overlayBackground.classList.add('inactive');
    }
    
    productDetailContainer.classList.toggle('inactive');
    overlayBackground.classList.toggle('inactive');
}



const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})






function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)