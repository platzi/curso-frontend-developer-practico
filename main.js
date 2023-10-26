// Toggle Desktop Menu

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetailClose.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')
    }
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}


// Toggle Mobile Menu

const desplegableMovil = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

desplegableMovil.addEventListener('click', toggleMobile);

function toggleMobile() {
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetailClose.classList.contains('inactive');


    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')
    }
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive')
    }
    mobilMenu.classList.toggle('inactive');
}


// Toggle carrito

const iconoCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

iconoCarrito.addEventListener('click', toggleCarrito);

function toggleCarrito() {
    const isMobileMenuOpen = !mobilMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailClose.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobilMenu.classList.add('inactive')
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}

// Funcion Abrir/Cerrar Detalles Aside
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

productDetailClose.addEventListener('click', closeProductDetailAside);

function openProductDetailAside() {
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isAsideOpen) {
        shoppingCartContainer.classList.add('inactive')
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}


// Listado de productos

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: './logos/pexels-taryn-elliott-4198566.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});

function desgloseArray(array) {
    for (product of array) {
        const cardsContainer = document.querySelector('.cards-container')

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = product.price + '€';

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)


        const productInfoFigure = document.createElement('figure');

        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
desgloseArray(productList);