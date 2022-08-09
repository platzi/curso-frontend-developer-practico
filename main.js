const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const mobileMenu = document.querySelector('.mobile-menu');

const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');

menuElements = new Map ([
    [menuEmail, desktopMenu],
    [menuHamIcon, mobileMenu],
    [menuCarritoIcon, shoppingCartContainer],
    [null, productDetailContainer]
]);

for (const menuClickHere of menuElements.keys()) {
    if (menuClickHere != null) {
        menuClickHere.addEventListener('click', toggleMenu);
    }
}

function toggleMenu() {
    const menuDisplayToToggle = menuElements.get(this);
    closeAllMenuDisplay(menuDisplayToToggle);
    menuDisplayToToggle.classList.toggle('inactive');
}

function closeAllMenuDisplay(exceptionMenuDisplay) {
    for (const menuDisplay of menuElements.values()) {
        if (!menuDisplay.classList.contains('inactive')
                    && menuDisplay != exceptionMenuDisplay) {
            menuDisplay.classList.add('inactive');
        };
    }
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    closeAllMenuDisplay(productDetailContainer);
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Pantalla',
    price: 240,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Computador',
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productPrice.innerText = product.name;

        const productInfoDiv = document.createElement('div');
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);