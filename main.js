const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() { 

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


    if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: '/icons/photo-1532298229144-0ec0c57515c7.webp'
});
productList.push({
    name: 'Tablet',
    price: 600,
    image: '/icons/amigurumis.jpg'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/canon.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: '/icons/crochet.jpg'
});
productList.push({
    name: 'Tablet',
    price: 600,
    image: '/icons/darth.jpg'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/lego.jpg'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/macbook.jpg'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/pop-up.jpg'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons//sable.jpg'
});
productList.push({
    name: 'Laptop',
    price: 12000,
    image: '/icons/teclado.jpg'
});





function renderProducts(arr) {

    for( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
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
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', '/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts(productList);

