const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const productInfoClose = document.querySelector('.product-detail__product-info-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShoppingCart = document.querySelector('#shoppingCartContainer');
const asideProductInfo = document.querySelector('#productInfoContainer');
const productCardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleMenuDesktop);
menuBurger.addEventListener('click', toggleMenuMobile);
menuShoppingCart.addEventListener('click', toggleMenuShoppingCart);
productInfoClose.addEventListener('click', closeProductInfo);

function toggleMenuDesktop() {
    const isAsideShoppingCartOpen = !asideShoppingCart.classList.contains('inactive');

    if (isAsideShoppingCartOpen) {
        asideShoppingCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile() {
    const isAsideShoppingCartOpen = !asideShoppingCart.classList.contains('inactive');

    if (isAsideShoppingCartOpen) {
        asideShoppingCart.classList.add('inactive');
    }

    asideProductInfo.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuShoppingCart() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    const isProductInfoOpen = !asideProductInfo.classList.contains('inactive');

    if (isProductInfoOpen) {
        asideProductInfo.classList.add('inactive');
    }

    asideShoppingCart.classList.toggle('inactive');
}

function openProductInfoAside() {
    const isShoppingMenuOpen = !asideShoppingCart.classList.contains('inactive');

    if (isShoppingMenuOpen) {
        asideShoppingCart.classList.add('inactive');
    }

    asideProductInfo.classList.remove('inactive');
}

function closeProductInfo() {
    asideProductInfo.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 149.99,
    imgUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Plate',
    price: 4.99,
    imgUrl: 'https://images.pexels.com/photos/563067/pexels-photo-563067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Coffee',
    price: 14.99,
    imgUrl: 'https://images.pexels.com/photos/4509573/pexels-photo-4509573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Laptop',
    price: 999.99,
    imgUrl: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Smartphone',
    price: 449.99,
    imgUrl: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Car',
    price: 19617.99,
    imgUrl: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Motorcycle',
    price: 799.99,
    imgUrl: 'https://images.pexels.com/photos/163789/sky-road-travel-trip-163789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Teriyaki',
    price: 7.99,
    imgUrl: 'https://images.pexels.com/photos/11787138/pexels-photo-11787138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

renderProducts(productList);

function renderProducts(array) {
    for (const product of array) {
        // <div class="product-card">
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', openProductInfoAside);

        // <img src="some url" alt="">
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imgUrl);

        // <div class="product-info">
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        // <div> used for css
        const productInfoDiv = document.createElement('div');

        // <p>$price</p>
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        // <p>name</p>
        const productName = document.createElement('p');
        productName.innerText = product.name;

        // nest into upper div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // cart shopping btn
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../../icons/bt_add_to_cart.svg');

        // properly nest process
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productCardsContainer.appendChild(productCard);
    }
}