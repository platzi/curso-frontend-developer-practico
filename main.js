const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const aside = document.querySelector('#shoppingCartContainer');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
menuHamIcon.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://media.wired.com/photos/63e569c9de59d567d5d7c66d/2:3/w_1200,h_1800,c_limit/Ride1Up-Cafe-Cruiser-Featured-Gear.jpg',
});
productList.push({
    name: 'Celular',
    price: 340,
    image: 'https://marcimex.vtexassets.com/arquivos/ids/188566/34716---CELULAR-NV_XIAOMI_NOTE-11-128GB_GRAY.png?v=637903812514300000',
});
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://www.fayerwayer.com/resizer/QvUW0IpiyPqfq1GzmGXf5vIK9II=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/AO3VT4HEP5D7RIQHTXCVVTEVCE.jpg',
});

function cargarProductos(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

cargarProductos(productList);