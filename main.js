const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const hamburgerMenuIcon = document.querySelector('.hamburger-icon');
const menuCarritoComprasIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

hamburgerMenuIcon.addEventListener('click', toggleMenuMobile);
navbarEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoComprasIcon.addEventListener('click', toggleCarritoCompras);
productDetailCloseIcon.addEventListener('click', closeProductDatail);

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive'); //Avoid desktop-menu crash with carritoCompras
    }
    
    desktopMenu.classList.toggle('inactive');

}
function toggleMenuMobile(){

    const isCarritoComprasClosed = shoppingCartContainer.classList.contains('inactive');
    const isProducDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isCarritoComprasClosed){
        shoppingCartContainer.classList.add('inactive'); //Avoid menuMobile crash with carritoCompras
    }
    else if (!isProducDetailClosed){
        productDetailContainer.classList.add('inactive'); //Avoid product-detail crash with carritoCompras
    }

    menuMobile.classList.toggle('inactive');
}
function toggleCarritoCompras(){
   
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProducDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMenuMobileClosed){
        menuMobile.classList.add('inactive'); //Avoid menuMobile crash with carritoCompras
    }
    else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive'); //Avoid desktop-menu crash with carritoCompras
    }
    else if (!isProducDetailClosed){
        productDetailContainer.classList.add('inactive'); //Avoid product-detail crash with carritoCompras
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetail(){
    
    const isCarritoComprasClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isCarritoComprasClosed){
        shoppingCartContainer.classList.add('inactive'); //Avoid product-detail crash with carritoCompras
    }
    
    productDetailContainer.classList.remove('inactive');
}
function closeProductDatail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 150,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Monitor',
        price: 300,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Laptop',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'PSP5',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 150,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Monitor',
        price: 300,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Laptop',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'PSP5',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);
    imgProduct.addEventListener('click', openProductDetail);

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

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}