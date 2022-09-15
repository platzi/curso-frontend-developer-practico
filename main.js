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
        name: 'Jeans cónicos desgarro crudo',
        price: 477,
        image: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Jeans tipo boyfriend roto',
        price: 676,
        image: 'https://images.pexels.com/photos/1957154/pexels-photo-1957154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Jeans de pierna ancha',
        price: 642,
        image: 'https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Jeans ajustados',
        price: 475,
        image: 'https://images.pexels.com/photos/1501215/pexels-photo-1501215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Jeans de pierna recta',
        price: 573,
        image: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Jeans de talle alto de pierna ancha',
        price: 607,
        image: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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