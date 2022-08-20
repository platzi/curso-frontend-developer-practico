const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',()=>{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //aside.classList.toggle('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

});

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');   
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');   
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

const productList = [];
const tamList = 10;
for(let i = 1; i<=tamList;i++){
    productList.push({
        name: `Bike_${i}`,
        price: 120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
}

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productInfoFigure = document.createElement('figure');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice,productName);

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv,productInfoFigure);

    productCard.append(productImg,productInfo);

    cardsContainer.appendChild(productCard);
}



