// EVENTO EMAIL ACCOUNT

const emailAccount = document.querySelector('.navbar-email');
const menuAccount = document.querySelector('.desktop-menu');

emailAccount.addEventListener('click', menuOnClick);

function menuOnClick() {
    const isShoppingCartClosed = aside.classList.contains('inactive');
    if(!isShoppingCartClosed){
        aside.classList.add('inactive');
    }

    menuAccount.classList.toggle('inactive');
}

// EVENTO DE BOTON DE MENU EN MOBILE

const btnMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

btnMenuMobile.addEventListener('click', mobileMenuOnClick);

function mobileMenuOnClick() {
    const isShoppingCartClosed = aside.classList.contains('inactive');
    if(!isShoppingCartClosed){
        aside.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}

// EVENTO DE CARRITO (ASIDE) EN DESKTOP Y MOBILE

const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

shoppingIcon.addEventListener('click', abrirCarrito);

function abrirCarrito() {
    const isDesktopMenuClosed = menuAccount.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        menuAccount.classList.add('inactive');
    }
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    if(!isMobileMenuClosed) {
        menuMobile.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Televisor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


    /* <div class="product-card">
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
        </div> */


const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', product.image);
    productCard.appendChild(imgCard);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productCard.appendChild(productInfo);
    const priceAndName = document.createElement('div');
    const price = document.createElement('p');
    price.innerText = "$" + product.price;
    const name = document.createElement('p');
    name.innerText = product.name;
    priceAndName.appendChild(price);
    priceAndName.appendChild(name);
    productInfo.appendChild(priceAndName);
    const figure = document.createElement('figure');
    const iconAddCart = document.createElement('img');
    iconAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    figure.appendChild(iconAddCart);
    productInfo.appendChild(figure);
    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);