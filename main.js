//obtener el elemento html para escuchar eventos
//menu de escritorio
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');

// obtener elemento html para mostrar u ocultar
//menu mobile
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const carsContainer = document.querySelector('.cards-container');
//añadir un listener al evento del click
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleShoppingCar);
//crear la función que cambia la propiedad del elemento
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    if (isShoppingCartContainerOpen)
        shoppingCartContainer.classList.toggle('inactive');
    if(isProductDetailOpen)
        productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    if (isMobileMenuOpen)
        mobileMenu.classList.toggle('inactive');
    if(isProductDetailOpen)
        productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');

}

function renderProducts(productList) {

    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;

        const productName = document.createElement('p');
        productName.innerText = `$ ${product.name}`;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img')

        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCar);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        carsContainer.appendChild(productCard);
    }
}

function openProductDetailAside(){
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if (isMobileMenuOpen)
        mobileMenu.classList.toggle('inactive');
    if (isShoppingCartContainerOpen)
        shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');

}
//Lista de productos:
const productList = [];
productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Monitor',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Keyboard',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloser =  document.querySelector('.product-detail-close');
productDetailCloser.addEventListener('click',closeProductDetailAside);