const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoButton = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailWindowContainer = document.querySelector('.product-detail-window');
const closeIconProductDetail = document.querySelector('.product-detail-window-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoButton.addEventListener('click', toggleCarritoAside);
closeIconProductDetail.addEventListener('click', closeProductDetailWindow);

 

function toggleDesktopMenu(){
    const isAsideMenuClose = asideProductDetail.classList.contains('inactive');

    if(!isAsideMenuClose){
        asideProductDetail.classList.add('inactive');
    }
    productDetailWindowContainer.classList.add('inactive');

    console.log('Click en navbar-email');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideMenuClose = asideProductDetail.classList.contains('inactive');
 
    if(!isAsideMenuClose){
        asideProductDetail.classList.add('inactive');
    }
    closeProductDetailWindow();

    console.log('click en Carrito de compras');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailWindowContainer.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetailWindowContainer.classList.add('inactive');
    }
    console.log('click en Carrito de compras');
    asideProductDetail.classList.toggle('inactive');

}
function openProductDetailWindow(){
    asideProductDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailWindowContainer.classList.remove('inactive');
}
function closeProductDetailWindow(){
    productDetailWindowContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Macbook Pro 14',
    price: 640,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Macbook Pro 14',
    price: 640,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Macbook Pro 14',
    price: 640,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

function renderProducts(arrRender){
    for (product of arrRender){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailWindow);
    
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

