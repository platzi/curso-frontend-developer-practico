const menuEmail = document.querySelector('.navbar-email')
const desktopMenu =document.querySelector(".desktop-menu");
const iconMenuMobile = document.querySelector(".menu");
const iconMenuCart = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer=document.querySelector("#productDetail");
const cardsContainer=document.querySelector(".cards-container");





menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click',toggleMobileMenu);
iconMenuCart.addEventListener('click',toggleCartMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu(){

    const isCartClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCartClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const isCartClosed = shoppingCartContainer.classList.contains('inactive');


    if(!isCartClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProfileMenuClosed = desktopMenu.classList.contains('inactive');

    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isProfileMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}



function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');


}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

}
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Gato',
    price: 1000000000000,
    image: 'https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001',

});

productList.push({
    name: 'Darkness',
    price: 0,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});





function renderProducts (arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.img
        const productImg= document.createElement('img');
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
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);