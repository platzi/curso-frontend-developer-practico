/* MENU EN DESKTOP */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    orderShopping.classList.add('inactive');
    shoppingDetail.classList.add('inactive');
};

/* MENU EN MOBILE */
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    orderShopping.classList.add('inactive');
    shoppingDetail.classList.add('inactive');
};

/* DETALLE DE CARRITO DE COMPRAS */
const menuShopping = document.querySelector('.navbar-shopping-cart');
const orderShopping = document.querySelector('.product-detail');
menuShopping.addEventListener('click', toggleShoppingMenu);

function toggleShoppingMenu() {
    orderShopping.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingDetail.classList.add('inactive');
};

/* ARRAY Y LISTA DE PRODUCTOS */
const productList = [];
productList.push({
    name: 'Auricular MSI Gammer GH30',
    price: 26.63,
    image: 'https://mendohardware.com.ar/img/auricularMsiGamer.png',
},
{
    name: 'Teclado y Mouse Gigabyte',
    price: 6.61,
    image: 'https://mendohardware.com.ar/img/kitGigabyte.png',
},
{
    name: 'Usb Wifi 300mbps',
    price: 2.63,
    image: 'https://mendohardware.com.ar/img/usbWifi300.png',
},
{
    name: 'Mouse Inalámbrico Trust',
    price: 3.66,
    image: 'https://mendohardware.com.ar/img/mouseTrust.png',
},
{
    name: 'Disco Solido 240gb',
    price: 19.66,
    image: 'https://mendohardware.com.ar/img/ssd240Gigabyte.png',
},
{
    name: 'Auricular Xiaomi Basic 2',
    price: 13.31,
    image: 'https://mendohardware.com.ar/img/auriXiaomiBasic2.png',
},
);

/* FUNCION DE RENDERIZADO DE PRODUCTOS DESDE JS */
const cardsContainer = document.querySelector('.cards-container');
function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openShopping);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `u$s ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        const productInfoFigure = document.createElement('figure');
        const imageProductCart = document.createElement('img');
        imageProductCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        cardsContainer.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(imageProductCart);
    }
};
renderProducts(productList);

/* DETALLE DE UN PRODUCTO */
const shoppingDetail = document.querySelector('.shopping-detail');
const shoppingDetailClose = document.querySelector('.shopping-detail-close');
shoppingDetailClose.addEventListener('click', closeShopping);
function openShopping() {
    shoppingDetail.classList.remove('inactive');
    orderShopping.classList.add('inactive');
};
function closeShopping() {
    shoppingDetail.classList.add('inactive');
};

/* HTML RENDERIZADO EN LA FUNCIÓN renderProducts */
/* <section class="main-container">
    <div class="cards-container">
      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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
  </section> */      