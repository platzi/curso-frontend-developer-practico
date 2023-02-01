const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.toggle('inactive');
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.toggle('inactive');
    }
}

function toggleCartMenu() {
    shoppingCartContainer.classList.toggle('inactive');
    isProductDetaiilClose = productDetailContainer.classList.contains('inactive');

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');

    } else if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }

    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.toggle('inactive');
    }

}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

}

const products = [];
products.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

products.push({
    name: 'pantalla',
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

products.push({
    name: 'celular',
    price: 23,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (const product of arr) {
        const cardsContainer = document.querySelector('.cards-container');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoContainer = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoContainer.appendChild(productPrice)
        productInfoContainer.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productInfoFigureImg)

        productInfo.appendChild(productInfoContainer);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(products);
