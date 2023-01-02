// DESKTOP - TOGGLE MENU FROM CLICKING EMAIL
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    shoppingCarContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}


// MOBILE - TOGGLE MENU FROM CLICKING MENU ICON
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCarContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
}


// DESKTOP & MOBILE - TOGGLE SHOPPING CAR FROM CLICKING CAR ICON
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');

carritoIcon.addEventListener('click', toggleShoppingCar);

function toggleShoppingCar() {
    shoppingCarContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

// PRODUCT DETAIL
    // OPEN
const productDetail = document.querySelector('#productDetail');
function openProductDetail(){
    productDetail.classList.remove('inactive');
    shoppingCarContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
    // CLOSE
const iconCloseProductDetail = document.querySelector('.product-detail-close');
function closeProductDetail(){
    productDetail.classList.add('inactive');
}
iconCloseProductDetail.addEventListener('click', closeProductDetail);

// DATA
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Ordenador',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProductos(arr) {
    const cardContainer = document.querySelector('.cards-container');
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
    for (product of arr) {
        // product = {name, price, image}
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productCarImageFigure = document.createElement('img');
        productCarImageFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        productCard.append(img, productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.append(productPrice, productName);
        productInfo.appendChild(productFigure);
        productFigure.appendChild(productCarImageFigure);

        cardContainer.appendChild(productCard);
    }
}

renderProductos(productList);
