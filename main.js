const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);


function toggleDesktopMenu() {
    const isCarritoshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isCarritoshoppingCartContainerClosed)
        shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarritoshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isCarritoshoppingCartContainerClosed)
        shoppingCartContainer.classList.add('inactive');
    mobilemenu.classList.toggle('inactive');
}
function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobilemenu.classList.contains
        ('inactive');
    const isDesktopmenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed)
        mobilemenu.classList.add('inactive');
    if (!isDesktopmenuClosed)
        desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 950,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Moto',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProductList(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `S/. ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productImgCard);
        productInfoDiv.append(productPrice, productName);

        productInfo.append(productInfoDiv, productFigure);
        productCard.append(img, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProductList(productList);