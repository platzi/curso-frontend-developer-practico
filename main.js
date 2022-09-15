const menuEmail = document.querySelector('.navbar-email');
const BurgerIconMenu = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
BurgerIconMenu.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleCartAside() {
    shoppingCartContainer.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
    productDetailContainer.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productsList = [];

productsList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Pantalla',
        price: 3500,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Laptop',
        price: 5000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
);

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

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
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);