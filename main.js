const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const buttonProductDetailClose = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
hamburIconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
buttonProductDetailClose.addEventListener('click', closeDetailsAside)



function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailCLosed = productDetailContainer.classList.contains('inactive');

    if (!isAsideClosed || !isProductDetailCLosed) {
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        desktopMenu.classList.remove('inactive');
    }
    else desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailCLosed = productDetailContainer.classList.contains('inactive');

    if (!isAsideClosed || !isProductDetailCLosed) {
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailCLosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProductDetailCLosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        shoppingCartContainer.classList.remove('inactive');
    }
    else shoppingCartContainer.classList.toggle('inactive');
}

function openDetailsAside() {
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeDetailsAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];

productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openDetailsAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;
        const productNombre = document.createElement('p');
        productNombre.innerText = product.nombre;

        productInfoDiv.appendChild(productPrecio);
        productInfoDiv.appendChild(productNombre);

        const productInfoFigure = document.createElement('figure');
        const productImagenCard = document.createElement('img');
        productImagenCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImagenCard)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);