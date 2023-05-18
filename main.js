const menuEmail= document.querySelector('.navbar-email');
const menuHamIcon= document.querySelector('.menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');

const desktopMenu= document.querySelector('.desktop-menu');
const mobileMenu= document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive'); 
}

function toggleAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive'); 
}

const productList =[]
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=',
});

productList.push({
    name: 'screen',
    price: 220,
    image: 'https://media.wired.com/photos/624cdf50b340f55b37084fda/191:100/w_1280,c_limit/WFH-Dual-Monitors-Gear-1199427514.jpg',
});

productList.push({
    name: 'computer',
    price: 620,
    image: 'https://media.istockphoto.com/id/516508345/es/vector/fondo-con-%C3%A1rea-de-trabajo.jpg?s=170667a&w=0&k=20&c=PXZM2NSgHNA_vMgg9bMP8ig_my86aJxjCef4krKIEQw=',
});

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product ={name, prime, image} -> product.image
    const productImg= document.createElement('img');
    productImg.setAttribute('src', product.image);

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