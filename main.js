const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector ('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail)


function toggleDesktopMenu(){    
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive')
    desktopMenu.classList.toggle('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive')
    }
}

function toggleMobileMenu(){    
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive')
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive')
    }
}

function toggleShoppingCart(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    
    shoppingCart.classList.toggle('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
        
    } else if(!isProductDetailClosed){
        productDetail.classList.add('inactive')
    }
}

function openProductDetailAside(){
    shoppingCart.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for(product of productList){ // sintaxis para recorrer los elementos del array de forma mas sencilla
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside);
    
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
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);





    
