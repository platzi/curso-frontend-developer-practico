const navEmail = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive')

}
function toggleMobileMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside (){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 240,
    image: 'https://i.pinimg.com/564x/ec/07/2c/ec072c7ba5b8b362ba235411b2cd7525.jpg'
});
productList.push({
    name: 'computador',
    price: '650',
    image: 'https://i.pinimg.com/564x/09/06/77/090677774cefa9cf65a41252d9c2e1d3.jpg'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name,price, img} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('div');
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement('div');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

renderProducts(productList);