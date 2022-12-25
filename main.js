//Inicialización de selectores
const homeIcon = document.querySelector('.navbar-left > .logo')
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCartIcon = document.querySelector('.navbar-shopping-cart');
const backIconShopCart = document.querySelector('.title-container img');
const shoppingChart = document.querySelector('#cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const closeProductDetail = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#product-detail');
const productDetailImage = document.querySelector('#product-detail > img:nth-child(2)');
const productDetailPrice = document.querySelector('.product-info > p:nth-child(1)');
const productDetailName = document.querySelector('.product-info > p:nth-child(2)');
const productDetailDescription = document.querySelector('.product-info > p:nth-child(3)');

//Inicialización de variables
let productList = [];

//inicialización de funciones
function toHome (){//devolverse al la pagina principal o retirar los asides
    if (window.innerWidth <= 640){
        desktopMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
        shoppingChart.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
    else {
        window.location.href = "file://wsl.localhost/Ubuntu-20.04/home/lpcol/personalprojects/curso-frontend-javascript-practico/index.html";
    }
}
function renderProducts(productArray) {
    console.log('renderProducts');
    for (product of productArray){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.classList.add('cart-product-image');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.classList.add('cart-product-name');
        productName.innerText = product.name;
        productName.addEventListener('click', toggleProductDetail);

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const addImg = document.createElement('img');
        addImg.classList.add('AddToChartBtn');
        addImg.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(addImg)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    shoppingChart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    shoppingChart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function toggleShoppingChart() {
    shoppingChart.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function toggleProductDetail() {
    productDetail.classList.toggle('inactive');
    shoppingChart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

//Eventlisteners
homeIcon.addEventListener('click', toHome);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shopCartIcon.addEventListener('click', toggleShoppingChart);
backIconShopCart.addEventListener('click', toggleShoppingChart);
closeProductDetail.addEventListener('click', toggleProductDetail);

//Inicialización de  variable productList
productList.push({
name: 'Bike',
price: '120,00',
image: 'https://images.pexels.com/photos/5691159/pexels-photo-5691159.jpeg',
description:'- Schwinn steel retro city frame and fork offers a stylish, comfortable ride.<br>- Schwinn 7 speed twist shifter with Schwinn rear derailleur provide quick gear changes.<br>- Alloy front and rear linear pull brakes ensure precise stops.<br>- Fenders protect you from splashes, while the classic rear carrier provides convenient storage.<br>- 700c size wheel fits adult riders 5’4” to 6’2”. Includes limited lifetime warranty for as long as you own the bike.'
});
productList.push({
name: 'Skateboard',
price: '200,00',
image: 'https://images.pexels.com/photos/4663825/pexels-photo-4663825.jpeg',
description:'- 31 x 8 inch full size double kick concave design provides better control and easy to brake; this Skateboard is ideal for BEGINNER and Pro doing some basic stunts and other tricks.<br>- 100% Maple deck-7 ply maple wood skateboard with full cover high density waterproof non-slip diamond emery paper surface provides a stable and more powerful grip during skating; makes it more durable and makes you more safe during skateboarding. Max supporting weight 220 lbs, suitable for adult kids age 5 yr up.<br>- ABEC-7" bearings are forged by chrome steel work with Super smooth 54mm 95A anti-shock PU wheels and super soft PU bushings deliver a very smooth ride, Suitable for skater skating street, skate parks, ramps, pools and other smooth surfaces or even rough ground. Faster speed is half success for tricks.<br>- Double kick tail concave design provides greater control, allows for wide range of tricks and easy braking, you can show your skating skill anywhere at any time. Also is ideal for any skill level skaters. Attractive graphics style including punk, new wave, vintage, classic etc .Patterns printed on skateboards with heat transfer process,waterproof and durable, can maintain longer service life.<br>- COMPLETE-NO ASSEMBLY REQUIRED - comes with a 31 inch complete skateboard. We guarantee authentic material. If you feel any unsatisfied with your items or any issues happened within 30 days. Please feel free to contact our customer service at First Time, we will do our best to meet your satisfaction.'
});
productList.push({
name: 'Kick Scooter',
price: '180,00',
image: 'https://images.pexels.com/photos/4413303/pexels-photo-4413303.jpeg',
description:'- Top quality aluminum construction of the Razor A kick scooter is lightweight yet durable.<br>- Features our original folding mechanism for quick and easy carry, transport and storage between rides.<br>- Easy-adjust handlebars can be set to the perfect ride height.<br>- Additional features include rear-fender brake and urethane wheels.<br>- Red - Frustration Free Packaging'
});

//Renderizado de los productos en pagina principal
renderProducts(productList);