const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
productDetailClose.addEventListener('click',closeProductDetailAside);

menuCarritoIcon.addEventListener('click',()=>{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isDetailClosed = productDetailContainer.classList.contains('inactive');


    //aside.classList.toggle('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

});

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');   
    const isDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    if(!isDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');   
    const isDetailClosed = productDetailContainer.classList.contains('inactive');

    //console.log(isDetailClosed);
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');   
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}
function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
const tamList = 5;
for(let i = 1; i<=tamList;i++){
    productList.push({
        name: `Bike_${i}`,
        price: 120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
}

function renderProudcts(arr) {
    
for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);

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

}

renderProudcts(productList);


