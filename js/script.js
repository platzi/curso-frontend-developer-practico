const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const productDetail = document.querySelector('.product-detail');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCard = document.querySelector('.product-detail-card');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menuHamIcon = document.querySelector('.menu_icon');
const mobilMenu = document.querySelector('.mobile-menu')
const cardsContainer = document.querySelector('.cards-container')

navbarEmail.addEventListener('click', toggleDeskTopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleNavbarShopping);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDeskTopMenu(){
    const isProductDetail = productDetail.classList.contains('inactive');

    if(!isProductDetail){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetail = productDetail.classList.contains('inactive');

    if(!isProductDetail){
        productDetail.classList.add('inactive');
    }

    closeProductDetail();

    mobilMenu.classList.toggle('inactive');
}

function toggleNavbarShopping(){
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    const isProductDetailClose = productDetailCard.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobilMenuClosed){
        mobilMenu.classList.add('inactive');
    }
    
    if(!isProductDetailClose){
        productDetailCard.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
}

function openProductDetail(){
    productDetail.classList.add('inactive');
    mobilMenu.classList.add('inactive');
    productDetailCard.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailCard.classList.add('inactive')
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetail);
        
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

renderProducts(productList);
