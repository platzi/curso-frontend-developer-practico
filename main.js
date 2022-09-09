const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart= document.querySelector('.shopping-cart-detail');
const productDetailContainer = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const imagenDetailProduct = document.querySelector('#infoImages');
const priceDetailProduct = document.querySelector('#price');
const nameDetailProduct = document.querySelector('#name');



menuEmail.addEventListener('click', showDesktopMenu);
burguerMenuIcon.addEventListener('click', showMobileMenu);
menuCarritoIcon.addEventListener('click', showMyOrder);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// function toggleDesktopMenu() {

//     const isAsideClosed = shoppingCart.classList.contains('inactive');

//     if (!isAsideClosed){
//         shoppingCart.classList.add('inactive');
//     }

//     desktopMenu.classList.toggle('inactive');
// }

// function toggleMobileMenu() {
//     const isAsideClosed = shoppingCart.classList.contains('inactive');

//     if (!isAsideClosed){
//         shoppingCart.classList.add('inactive');
//     }

//     mobileMenu.classList.toggle('inactive');
// }

// function toggleCarritoAside() {
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

//     if (!isDesktopMenuClosed){
//         desktopMenu.classList.add('inactive');
//     }

//     if (!isMobileMenuClosed){
//         mobileMenu.classList.add('inactive');
//     }

//     shoppingCart.classList.toggle('inactive');

// }


function showDesktopMenu() {
    shoppingCart.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
    shoppingCart.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function showMyOrder() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    shoppingCart.classList.toggle('inactive');
}

function openProductDetailAside(event) {
    shoppingCart.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

    imagenDetailProduct.setAttribute("src", event.target.src);
    priceDetailProduct.innerText = event.target.nextElementSibling.firstChild.firstChild.innerText;
    nameDetailProduct.innerText = event.target.nextElementSibling.firstChild.lastChild.innerText;
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart= document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);


    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);


    }
}

renderProducts(productList);
renderProducts(productList);
renderProducts(productList);
renderProducts(productList);
renderProducts(productList);
renderProducts(productList);