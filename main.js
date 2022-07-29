const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
hamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAsine);

function toggleDesktopMenu (){
    const ismobileMenuClose = shoppingCartContainer.classList.contains('inactive');
    if(!ismobileMenuClose){
        shoppingCartContainer.classList.add('inactive');
        
    }    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){ 
const ismobileMenuClose = shoppingCartContainer.classList.contains('inactive');
    if(!ismobileMenuClose){
        shoppingCartContainer.classList.add('inactive');
    }   
    
    closeProductDetailAsine();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside (){
const ismobileMenuClose = mobileMenu.classList.contains('inactive');
const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

if(!ismobileMenuClose){
    mobileMenu.classList.add('inactive');
}else if(!isDesktopMenuClose){
    desktopMenu.classList.add('inactive');
}

const isProductDetailClose = productDetailContainer.classList.contains('inactive');

if(!isProductDetailClose){
    productDetailContainer.classList.add('inactive');
}

shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');    
    productDetailContainer.classList.remove('inactive');
}


function closeProductDetailAsine (){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 456,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Keyboard',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


renderList(productList);

function renderList(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        //product = {name,price,image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside)
    
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


