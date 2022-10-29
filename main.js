const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
ProductDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const menuAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const productDetailContainerClosed = productDetailContainer.classList.contains('inactive')


    if (!menuAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    } else if (!productDetailContainerClosed){
        productDetailContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu(){
    const menuAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const productDetailContainerClosed = productDetailContainer.classList.contains('inactive')


    if (!menuAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    } else if (!productDetailContainerClosed){
        productDetailContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
};
function toggleCarritoAside (){
    const menuMobileClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const productDetailContainerClosed = productDetailContainer.classList.contains('inactive')

    if (!menuMobileClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!desktopMenuClosed){
        desktopMenu.classList.add('inactive');
    } else if (!productDetailContainerClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
};
function openProductDetailAside (){
    const menuAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const menuMobileClosed = mobileMenu.classList.contains('inactive');


    if (!menuAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    } else if (!desktopMenuClosed){
        desktopMenu.classList.add('inactive')
    } else if (!menuMobileClosed){
        mobileMenu.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive');
};
function closeProductDetailAside (){

    productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Computer',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        // product = {name, price, image} -> product.image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
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
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard);
    
    }
    
}

renderProducts(productList)