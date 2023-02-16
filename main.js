//botones
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//apertura y cierre de menues
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCardContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

//apertura de product detail
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
//productos
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    link: 'hola.html'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 3120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//funcion para mostrar todos los productos
function renderProducts(arr){
for(product of productList){

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
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}}   
renderProducts(productList);