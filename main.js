console.log('todo good');
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const openProductDetailContainer = document.querySelector('.product-detail-all');
const closeProductDetailContainer = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside); 

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarritoMenuClosed = aside.classList.contains('inactive');
    const isProductDeatilAsideClosed = openProductDetailContainer.classList.contains('inactive');
    if (!isCarritoMenuClosed || !isProductDeatilAsideClosed){
        aside.classList.add('inactive');
        openProductDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isUserMenuCLosed = desktopMenu.classList.contains('inactive');
    const isProductDeatilAsideClosed = openProductDetailContainer.classList.contains('inactive');
    if (!isMobileMenuClosed || !isUserMenuCLosed || !isProductDeatilAsideClosed){
        if(!isProductDeatilAsideClosed){
            aside.classList.add('inactive');
        }
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        openProductDetailContainer.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

function openProductDetailAside(){
    openProductDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    openProductDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
renderProducts(productList);

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside);
        closeProductDetailContainer.addEventListener('click',closeProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

