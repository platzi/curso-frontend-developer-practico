
const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleShoppingCarAside);



function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    const isMenuEmailClosed = menuEmail.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive');
    } 
   
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 

    aside.classList.toggle('inactive');
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