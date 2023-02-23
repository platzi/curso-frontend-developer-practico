const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAsaid);
productDetailCloseIcon.addEventListener('click', closeProductDetailAsaid);

function toggleCarritoAsaid(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function toggleDesktopMenu(){
        const isAsaidClosed = shoppingCartContainer.classList.contains('inactive');
    
        if(!isAsaidClosed){
            shoppingCartContainer.classList.add('inactive');
        }
        desktopMenu.classList.toggle('inactive');
        closeProductDetailAsaid();
}

function toggleMobileMenu(){
    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsaidClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function openProductDetailAsaid(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAsaid(){
    productDetailContainer.classList.add('inactive');
}


const productArray = [];
productArray.push({
    name: 'Bike',
    price: 120000,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productArray.push({
    name: 'motorcicle',
    price: 1800000,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productArray.push({
    name: 'Electric bike',
    price: 1000000,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(Array){
    for(product of Array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.addEventListener('click', openProductDetailAsaid);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productArray);

console.log('JS funcionando');