const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productCetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside)
productCetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {

    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    const isproductDetailContainer = productDetailContainer.classList.contains('inactive');

    if(!isShoppingCartContainerClose) {

        shoppingCartContainer.classList.add('inactive')
    }

    if(!isproductDetailContainer) {

        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    const isproductDetailContainer = productDetailContainer.classList.contains('inactive');

    if(!isShoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isproductDetailContainer) {

        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    const isproductDetailContainer = productDetailContainer.classList.contains('inactive');
    
    if(!isMobileMenuClose) {

        mobileMenu.classList.add('inactive');

        if(!isDesktopMenu) {

            desktopMenu.classList.add('inactive')
        }

    }

    if(!isproductDetailContainer) {

        productDetailContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isShoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');

    if(!isShoppingCartContainerClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isDesktopMenu) {

        desktopMenu.classList.add('inactive')
    }
    if(!isMobileMenuClose) {

        mobileMenu.classList.add('inactive');
    }

    productDetailContainer.classList.toggle('inactive')

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const prodcutList = [];

prodcutList.push({
    name:'Bike',
    price:120,
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function contenido(arr, nContenido) {

    let contador = 0
    
    while(contador<nContenido) {
        
        for(product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            const img = document.createElement('img');
            img.setAttribute('src', product.img);
            img.addEventListener('click', openProductDetailAside);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = "$" + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
            productInfoFigure.appendChild(productImgCart);
        
            productInfoDiv.append(productPrice,productName);
        
            productInfo.append(productInfoDiv,productInfoFigure);
        
            productCard.append(img,productInfo);
            
            cardContainer.append(productCard);
        
        }

        contador++;
    }

}

contenido(prodcutList, 10)