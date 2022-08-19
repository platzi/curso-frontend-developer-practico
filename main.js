
const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleShoppingCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } if(!isMobileMenuClosed){
        mobileMenu.classList.remove('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
   
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    } 

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailCloseIcon.classList.add('inactive');
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "House",
    price: 120000000,
    image: "https://images.pexels.com/photos/1111766/pexels-photo-1111766.jpeg?cs=srgb&dl=pexels-daniel-frank-1111766.jpg&fm=jpg",
});
productList.push({
    name: "Cake",
    price: 80,
    image: "https://images.pexels.com/photos/3038302/pexels-photo-3038302.jpeg?cs=srgb&dl=pexels-caleb-oquendo-3038302.jpg&fm=jpg",
});

function renderProducts(arr){

    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', product.image);
        productImgCard.addEventListener('click', openProductDetailAside);
      

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '\./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImgCard, productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);