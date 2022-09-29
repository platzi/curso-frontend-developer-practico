const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('#menuMobile');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(event){
    const isAsideClosed = aside.classList.contains('inactive') ;

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(event){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');        
    }
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
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
