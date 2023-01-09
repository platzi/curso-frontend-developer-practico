const menuEmail = document.querySelector('#navbarEmail');
const desktopMenu = document.querySelector('#desktopMenu');
const menuIcon = document.querySelector('#menuIcon');
const menuBurguer = document.querySelector('#menuBurguer');
const menuCar = document.querySelector('.navbar-shopping-cart');
const menuCarAside = document.querySelector('#productos-carritos');
const cardContainer = document.querySelector('.cards-container');
const asideProductDetail = document.querySelector('#asideProductDetail');
const cerrarProductDetail = document.querySelector('.product-detail-close');
const overlayBlack = document.querySelector('#overlay');


menuEmail.addEventListener('click', menuDeEmail);
menuIcon.addEventListener('click', menuBurguerToggle);
menuCar.addEventListener('click', menuCarToggle);
cerrarProductDetail.addEventListener('click', closedProductDetail);


function activarOverlay() {
    overlayBlack.classList.add('overlay-black');
}

function desactivarOverlay () {
    overlayBlack.classList.remove('overlay-black');
}

function menuDeEmail() {
    desktopMenu.classList.toggle('inactive');
}

function menuBurguerToggle() {
    menuBurguer.classList.toggle('inactive');
    menuCarAside.classList.add('inactive');
    closedProductDetail()
    if (!menuBurguer.classList.contains('inactive')){
        activarOverlay();
    }
}

function menuCarToggle() {
    menuCarAside.classList.toggle('inactive');
    menuBurguer.classList.add('inactive');
    closedProductDetail()
    if (!menuCarAside.classList.contains('inactive')) {
        activarOverlay();
    }
}

function closedProductDetail() {
    asideProductDetail.classList.add('inactive');
    desactivarOverlay()
}

function abrirAsideProductDetail() {
    asideProductDetail.classList.remove('inactive');
    menuCarAside.classList.add('inactive');
    menuBurguer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    activarOverlay()
    crearImgProductDetail()
}

// function crearImgProductDetail() {
//     const crearImg = document.createElement('img');
//     crearImg.setAttribute('src', product.img);
//     asideProductDetail.append(crearImg);
// }

const productList = [];
productList.push({
    name: 'bike',
    price: 200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Jarron',
    price: 50,
    img: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'copa',
    price: 80,
    img: 'https://cdn.pixabay.com/photo/2017/09/10/19/50/mug-2736787_960_720.jpg'
})


for (product of productList) {
    const divProductCard = document.createElement('div');
    divProductCard.classList.add('product-card');


    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);
    imgProduct.addEventListener('click', abrirAsideProductDetail)

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');


    const divNamePrice = document.createElement('div');
    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;


    const cardFigure = document.createElement('figure');
    const imgFIgure = document.createElement('img');
    imgFIgure.setAttribute('src', './icons/bt_add_to_cart.svg');

    cardFigure.appendChild(imgFIgure);

    divProductCard.append(imgProduct, divProductInfo);
    divProductInfo.append(divNamePrice, cardFigure);
    divNamePrice.append(productName, productPrice);
    cardContainer.append(divProductCard);
}






