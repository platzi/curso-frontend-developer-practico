const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamICon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamICon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isCartProductDetailClosed = menuShoppingCart.classList.contains('inactive');
    
    if(!isCartProductDetailClosed){
        cartProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartProductDetailClosed = menuShoppingCart.classList.contains('inactive');

    if(!isCartProductDetailClosed){
        cartProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    cartProductDetail.classList.toggle('inactive');

}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Computadora',
    price: 1220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arr){

    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
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
        const icon = document.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(icon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}

renderProducts(productList)
