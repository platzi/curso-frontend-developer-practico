const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu'); //Boton
const mobileMenu = document.querySelector('.mobile-menu') //Elemento dinámico
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCart.classList.contains('inactive'); //Si no contiene la clase

    if (!isAsideClosed){
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    const isAsideClosed = shoppingCart.classList.contains('inactive'); //Si no contiene la clase

    if (!isAsideClosed){
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive') //Si no contiene la clase

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }else{
        desktopMenu.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive')
}

const productList = [];

productList.push({
    name: 'iPad Pro 11 pulgadas',
    price: 20999,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_MX_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865130000'
});
productList.push({
    name: "iPhone 12 Pro",
    price: 12999,
    image: 'https://media.revistagq.com/photos/5fa9344a6484a93e065fb46d/master/pass/Apple_iphone12mini-iphone12max-homepodmini-availability_iphone12promax-geo_110520.jpg'
});
productList.push({
    name: "MacBook Air M1",
    price: 32499,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145607000'
});

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productDescriptionDiv = document.createElement('div');

    const productDescriptionPrice = document.createElement('p');
    productDescriptionPrice.innerText = '$' + product.price;

    const productDescriptionName = document.createElement('p');
    productDescriptionName.innerText = product.name;

    productDescriptionDiv.append(productDescriptionPrice, productDescriptionName);

    const productFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productFigureImg);

    productInfo.append(productDescriptionDiv, productFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.append(productCard);

}
