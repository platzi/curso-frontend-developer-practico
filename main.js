// --------------Read and get the following tags--------------
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const shoppingProductDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCardContainer');
const shoppingCardCloseIcon = document.querySelector('img[alt="arrow"]');

const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');

// --------------Listen to events---------------------------
menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
cartMenu.addEventListener('click',toggleCartAside);
shoppingProductDetailCloseIcon.addEventListener('click',closeProductDetialAside);
shoppingCardCloseIcon.addEventListener('click',closeShoppingCardIcon);
// --------------Toggle/Open/Close if the event is enabled--------------
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
    // if aside is opened, it must be closed
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } else if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive'); 
    } 
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    // if aside is opened, it must be closed
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
    closeProductDetialAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
    
    // if mobileMenu is opened, it must be closed
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive'); 
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetialAside() {
    productDetailContainer.classList.add('inactive');
}

function closeShoppingCardIcon(){
    shoppingCartContainer.classList.add('inactive');
}


// --------------Creating a list of products--------------
const productList = [];

productList.push({
    id: '1',
    name: 'Imploding The Mirage',
    price: 49,
    image: "https://m.media-amazon.com/images/I/91-dFqF+lTL._AC_SL1500_.jpg"
});
productList.push({
    id: '2',
    name: 'Harrys House',
    price: 68,
    image: "https://www.gannett-cdn.com/presto/2022/03/23/USAT/0db3bacb-eede-4fa6-a2be-dca3c4a6589c-HS.jpg?width=660&height=660&fit=crop&format=pjpg&auto=webp"
});
productList.push({
    id: '3',
    name: 'Random Access Memories',
    price: 34,
    image: "https://www.hoyesarte.com/constelac10n/files/2020/10/Daft-Punk-Get-Lucky.jpg"
});

// --------------Rendering the list of products-------------- 
function renderProducts(arr){
    for(product of arr){
        // product = {name,price,image}
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart_v2.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    };
}

renderProducts(productList);


