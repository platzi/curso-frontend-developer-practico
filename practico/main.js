const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const menuBurgerIcon = document.querySelector('.menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCart');

const cardsContainer = document.querySelector('.cards-container')

const ProductDetailContainer= document.querySelector('#productDetail')

const productDetailClose=document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togleCarritoshoppingCartContainer);
productDetailClose.addEventListener('click', CloseProductDetail)


function toggleDesktopMenu(){

    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    const isProductDetailContainerClosed = ProductDetailContainer.classList.contains('inactive');

    if(!isProductDetailContainerClosed){
        ProductDetailContainer.classList.add('inactive');}
    
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive')
    
    if(!isProductDetailClosed){
        ProductDetailContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function togleCarritoshoppingCartContainer(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive')
    if(!isProductDetailClosed){
        ProductDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isDescktopMenulClosed =desktopMenu.classList.contains('inactive')

    if(!isDescktopMenulClosed){
        desktopMenu.classList.add('inactive')
    }
    shoppingCartContainer.classList.add('inactive')
    ProductDetailContainer.classList.remove('inactive')
}

function CloseProductDetail(){
    ProductDetailContainer.classList.add('inactive')
}
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Computer',
    price: 1520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText ='$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure= document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','../icons/bt_added_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv , productInfoFigure);
    
        productCard.append(img , productInfo);
    
        cardsContainer.append(productCard);
    }
}
renderProducts(productList)