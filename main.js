const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuMobile = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu () {
    const productDetailOpenClose = productDetail.classList.contains('inactive');
    if (productDetailOpenClose){
        desktopMenu.classList.toggle('inactive');
    }else{
        productDetail.classList.toggle('inactive');
        desktopMenu.classList.toggle('inactive');
    }
}

function toggleMobileMenu () {
    
    const productDetailOpenClose = productDetail.classList.contains('inactive');
    
    if(productDetailOpenClose) {
        mobileMenu.classList.toggle('inactive');
    }else{
        productDetail.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    }
}

function toggleProductDetail () {

    const mobileMenuOpenClose = mobileMenu.classList.contains('inactive');
    const desktopMenuOpenClose = desktopMenu.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');

    if(mobileMenuOpenClose) {
        productDetail.classList.toggle('inactive');
    }else{
        mobileMenu.classList.toggle('inactive');
        productDetail.classList.toggle('inactive');
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computador',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (arr) {
    for (product of arr){
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
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);