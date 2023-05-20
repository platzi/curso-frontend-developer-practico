const menuEmail = document.querySelector('.navbar-email');
const menuBurguerIcon = document.querySelector('.menu');
const menuShopCart = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
menuShopCart.addEventListener('click', toggleShopCartMenu);

function toggleDesktopMenu() {
    const isShopCartClosed = shopCart.classList.contains('inactive');

    if (!isShopCartClosed) {
        shopCart.classList.add('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShopCartClosed = shopCart.classList.contains('inactive');

    if (!isShopCartClosed) {
        shopCart.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
}

function toggleShopCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shopCart.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'SkateBoard',
    price: 160,
    image: 'https://img.freepik.com/psd-gratis/mockup-skateboard_1310-876.jpg?size=626&ext=jpg&ga=GA1.2.510947045.1681300511&semt=sph',
});
productList.push({
    name: 'RollerSkate',
    price: 90,
    image: 'https://img.freepik.com/foto-gratis/mujer-llevando-rollerskates-equitacion-pavimento_23-2147654934.jpg?size=626&ext=jpg&ga=GA1.1.510947045.1681300511&semt=sph',
});

function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info'); 

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '€' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
