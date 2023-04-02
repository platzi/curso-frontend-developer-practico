const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const checkOutBoton = document.querySelector('.primary-button');
const orderBack = document.querySelector('#orderBack');
const aside = document.querySelector('#shoppingCartContainer');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');
const body = document.querySelector('body');

orderBack.addEventListener('click', orderBackOcultar);
checkOutBoton.addEventListener('click', goToOrder);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
menuHamIcon.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function orderBackOcultar() {
    toggleCarritoAside();
}

function goToOrder() {
    window.location.href = "./clase9.html";
}

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
    body.addEventListener("click", function(e) {
        const x = e.clientX;
        const y = e.clientY;
        productDetailContainer.style.left = x + "px";
        productDetailContainer.style.top = y + "px";
    });

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Celular',
    price: 340,
    image: 'https://marcimex.vtexassets.com/arquivos/ids/188566/34716---CELULAR-NV_XIAOMI_NOTE-11-128GB_GRAY.png?v=637903812514300000'
})
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://systemarket.com.ec/wp-content/uploads/2019/02/PC-MESA-CORE-I7-11TH.jpg'

})
productList.push({
    name: 'Elpepe',
    price: 690,
    image: 'https://systemarket.com.ec/wp-content/uploads/2019/02/PC-MESA-CORE-I7-11TH.jpg'

})

function cargarProductos(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('class', "elementImage");
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