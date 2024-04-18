const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.getElementById('shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.getElementById('productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu);

burgerMenu.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu() {
    const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailAsideClose = productDetail.classList.contains('inactive');
    
    if (!isAsideCarritoClosed || !isProductDetailAsideClose) {
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailAsideClose = productDetail.classList.contains('inactive');
    if (!isAsideCarritoClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    if (!isProductDetailAsideClose) {
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    // si buergermenu o menu del correo esta abierto
    //los cierro y abro el carritoAside
    //sino solamente abro el carritoAside
    const isProductDetailAsideClose = productDetail.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailAsideClose) {
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductImg() {
    // createDetailProduct(product);
    const isProductDetailAsideClose = productDetail.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 
    if (!isAsideCarritoClosed) {
        shoppingCartContainer.classList.add('inactive');
    } 
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailAsideClose) {
        productDetail.classList.add('inactive');
    }
    productDetail.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'http://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detail: 'This is a very good bike',
})
productList.push ({
    name: 'Pantalla',
    price: 220,
    image: 'https://cdn.thewirecutter.com/wp-content/uploads/2018/05/smarttv-lowres-032.jpg',
    detail: 'la pantalla con la mejor resolucion del mercado',
})
productList.push ({
    name: 'Computadora',
    price: 620,
    image: 'http://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    detail: 'computadora de alto rendimiento, capaz de jugar a juegos AAA en ultra',
})

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function createProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductImg)
            

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.setAttribute('src', './icons/bt_add_to_cart.svg')

        productFigure.appendChild(productIcon);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}
createProducts(productList);

function createDetailProduct(product) {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('product-detail-close');
    const iconImg = document.createElement('img');
    iconImg.setAttribute('src', './icons/icon_close.png');
    iconImg.setAttribute('alt', 'close');

    const imgDetail = document.createElement('img');
    imgDetail.setAttribute('src', product.image);
    imgDetail.setAttribute('alt', product.name);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('product-info');

    const infoPrice = document.createElement('p');
    infoPrice.innerText = '$' + product.price;

    const infoName = document.createElement('p');
    infoName.innerText = product.name;

    const infoDetail = document.createElement('p');
    infoDetail.innerText = product.detail;

    const infoButton = document.createElement('button');
    infoButton.classList.add('primary-button', 'add-to-cart-button');
    const imgButton = document.createElement('img');
    imgButton.setAttribute('src', './icons/bt_add_to_cart.svg');
    imgButton.setAttribute('alt', 'add to cart');

    infoButton.appendChild(imgButton);
    infoDiv.append(infoPrice, infoName, infoDetail, infoButton);
    iconDiv.appendChild(iconImg);
    productDetail.append(iconDiv, infoDiv);
}



/* <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike">
    <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div> */