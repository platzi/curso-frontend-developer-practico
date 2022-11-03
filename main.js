let navEmail = document.querySelector('.navbar-email');
let burgerButton = document.querySelector('.menu');
let basketButton = document.querySelector('.navbar-shopping-cart');
let detailButton = document.querySelector('.product-detail-close');

let desktopMenu = document.querySelector('.desktop-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let basketList = document.querySelector('#shoppingCardContainer');
let cardsContainer = document.querySelector('.cards-container');
let productDetailContainer = document.querySelector('#productDetailContainer');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerButton.addEventListener('click', toggleBurgerMenu);
basketButton.addEventListener('click', toggleBasketList);
detailButton.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    let isBasketListClose = basketList.classList.contains('inactive');

    if (!isBasketListClose) {
        basketList.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleBurgerMenu() {
    let isBasketListClose = basketList.classList.contains('inactive');

    if (!isBasketListClose) {
        basketList.classList.add('inactive');
    }

    let isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleBasketList() {
    let isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    let isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }

    basketList.classList.toggle('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

let productList = [];
productList.push({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 230,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 230,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderItems(arr) {
    for (let product of arr) {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let imgCard = document.createElement('img');
        imgCard.setAttribute('src', product.img);
        imgCard.setAttribute('alt', product.name);
        imgCard.addEventListener('click', openProductDetailAside);

        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        let productInfoDiv = document.createElement('div');

        let productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;

        let productName = document.createElement('p');
        productName.innerText = product.name;

        let productInfoFigure = document.createElement('figure');

        let productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");


        productInfoFigure.appendChild(productInfoFigureImg);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(imgCard, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderItems(productList);

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    basketList.classList.add('inactive');
}