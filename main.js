const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('#menuMobile');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');

const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarritoAside);
productDetailClose.addEventListener('click',closeProductDetails);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
    shoppingCardContainer.classList.add('inactive');
    closeProductDetails();
}

function toggleMobileMenu(event){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive') ;

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    closeProductDetails();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(event){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');        
    }
    shoppingCardContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCardContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetails(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 700,
    image:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/G2AYJN5AF5DBLG5XRDIW2IZ6UU.jpg',
});
productList.push({
    name: 'Computador',
    price: 700,
    image:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/G2AYJN5AF5DBLG5XRDIW2IZ6UU.jpg',
});

function renderProducts(arr){
    for (product of arr){
        const productCar=document.createElement('div');
        productCar.classList.add('product-card');
    
        const productimg = document.createElement('img');
        productimg.setAttribute('src',product.image);
        productimg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','/icons/bt_add_to_cart.svg'); 
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCar.appendChild(productimg);
        productCar.appendChild(productInfo);
    
        cardsContainer.appendChild(productCar);
    }
}
renderProducts(productList);
