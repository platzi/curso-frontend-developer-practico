const nodoEmail = document.querySelector('li.navbar-email');
const nodoMenuHamIcon = document.querySelector('img.menu');
const nodoMenuCarritoItem = document.querySelector('li.navbar-shopping-cart');
const DesktopMenu = document.querySelector('div.desktop-menu');
const nodoMobileMenu = document.querySelector('div.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const nodoCardsContainer = document.querySelector('div.cards-container');

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 130,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 140,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

nodoEmail.addEventListener('click', toggleDesktopMenu);
nodoMenuHamIcon.addEventListener('click', toggleMobileMenu);
nodoMenuCarritoItem.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    if (!nodoMobileMenu.classList.contains('inactive')) nodoMobileMenu.classList.add('inactive');
    if (!shoppingCartContainer.classList.contains('inactive')) shoppingCartContainer.classList.add('inactive');
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    if (!DesktopMenu.classList.contains('inactive')) DesktopMenu.classList.add('inactive');
    if (!shoppingCartContainer.classList.contains('inactive')) shoppingCartContainer.classList.add('inactive');
    nodoMobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    if (!DesktopMenu.classList.contains('inactive')) DesktopMenu.classList.add('inactive');
    if (!nodoMobileMenu.classList.contains('inactive')) nodoMobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function renderProducts(array = []) {
    for (let product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productCardImg = document.createElement('img');
        productCardImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoChild = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoChild.appendChild(productPrice);
        productInfoChild.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productInfoFigureImg);

        productInfo.appendChild(productInfoChild);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productCardImg);
        productCard.appendChild(productInfo);

        nodoCardsContainer.appendChild(productCard);

    }
}

//cargar productos
renderProducts(productList);

