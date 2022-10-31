const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'smartTV',
    price: 320,
    image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?cs=srgb&dl=pexels-koolshooters-6976094.jpg&fm=jpg'
})

productList.push({
    name: 'PC',
    price: 620,
    image: 'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?cs=srgb&dl=pexels-nao-triponez-792199.jpg&fm=jpg&_gl=1*1k4hk73*_ga*MTU4MzczNTQxLjE2NjcwMDY3MjY.*_ga_8JE65Q40S6*MTY2NzAwNjczMC4xLjEuMTY2NzAwNjkyNi4wLjAuMA..'
})

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    
    productInfoFigure.append(productImgCart);

    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
}