//MAIN CONTAINER

const mainContainer = document.querySelector('.main-container');

// DESKTOP MENU

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//  MOBILE MENU

const menuLogo = document.querySelector(".menu");
const burguerMenu = document.querySelector('.mobile-menu');

// CARRITO DE COMPRA

const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');

//PRODUC DETAIL

const productDetailAside = document.querySelector('#product-detail');

const closeButton = document.querySelector('.product-detail-close');



navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');


    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!isProductDetailAsideClosed) {
        productDetailAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');



}

//  MOBILE MENU


menuLogo.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!isProductDetailAsideClosed) {
        productDetailAside.classList.add('inactive');
    }

    burguerMenu.classList.toggle('inactive');

}

// CARRITO DE COMPRA


menuCarrito.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    const isMobileMenuClosed = burguerMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        burguerMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailAsideClosed) {
        productDetailAside.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

//PRODUC DETAIL


function openProductDetailAside() {

    const isMobileMenuClosed = burguerMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        burguerMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    productDetailAside.classList.remove('inactive');
}

closeButton.addEventListener('click', closeProductDetailAside);

function closeProductDetailAside() {
    productDetailAside.classList.add('inactive');
}

//Lista de productos

const cardsContainer = document.querySelector('.cards-container');

const productsList = [];


for (let index = 0; index < 50; index++) {
    productsList.push({
        name: 'bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
}

function renderProducts(productsList) {
    for (const product of productsList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const emptyDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerHTML = product.name;

        const figure = document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

        figure.appendChild(productIcon);

        emptyDiv.appendChild(productPrice);
        emptyDiv.appendChild(productName);

        productInfo.appendChild(emptyDiv);
        productInfo.appendChild(figure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productsList);
